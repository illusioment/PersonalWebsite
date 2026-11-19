/* Daily market snapshot.
   Runs on GitHub's servers (see .github/workflows/market-data.yml), not in the browser.
   It reads prices for every card in the newest sets from the TCGdex API and writes:
     data/market.json       today's prices, used by the market overview
     data/history/<set>.json  one price per card per day, used by the trend charts
     data/sample-card.json  one untouched API response, kept for debugging
     data/status.json       small summary for the hub: snapshot size and a what's-new log   */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execSync } from "node:child_process";

const API = "https://api.tcgdex.net/v2/en";
const LATEST_SETS = 24;       // how many of the newest sets to track
const EXTRA_SETS = [];        // extra set ids to always track, e.g. ["swsh3"]
const SKIP_SERIES = ["tcgp"]; // digital-only sets with no market prices
const HISTORY_DAYS = 400;
const HIDE_CHANGES = /flashing|work app|change log|data sources|data job/i; // changes that should not appear in the public what's-new log

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pos = (v) => (typeof v === "number" && v > 0 ? v : null);
const round = (v) => (v == null ? null : Math.round(v * 100) / 100);

async function get(path) {
  for (let attempt = 1; ; attempt++) {
    try {
      const r = await fetch(API + path, { headers: { "user-agent": "PersonalWebsite market snapshot" } });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error("HTTP " + r.status);
      return await r.json();
    } catch (err) {
      if (attempt >= 4) { console.warn("gave up on", path, err.message); return null; }
      await sleep(800 * attempt);
    }
  }
}

async function pool(items, size, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: size }, async () => {
    while (next < items.length) { const i = next++; out[i] = await fn(items[i]); }
  }));
  return out;
}

function normalize(c, set) {
  const p = c.pricing || {}, cm = p.cardmarket || null, tp = p.tcgplayer || null;
  const pick = (k) => (cm ? pos(cm[k]) ?? pos(cm[k + "-holo"]) : null);
  const variants = tp ? Object.entries(tp)
    .filter(([, v]) => v && typeof v === "object" && pos(v.marketPrice ?? v.midPrice))
    .map(([key, v]) => [key, round(pos(v.lowPrice)), round(pos(v.marketPrice) ?? pos(v.midPrice)), round(pos(v.highPrice))])
    .sort((a, b) => b[2] - a[2]) : [];
  return {
    id: c.id, n: c.name, s: set.name, sid: set.id, num: c.localId, r: c.rarity || null, img: c.image || null,
    usd: variants.length ? variants[0][2] : null, v: variants,
    eur: round(pick("trend") ?? pick("avg")), lo: round(pick("low")),
    a1: round(pick("avg1")), a7: round(pick("avg7")), a30: round(pick("avg30"))
  };
}

const today = new Date().toISOString().slice(0, 10);
await mkdir("data", { recursive: true });

// 1. Find the newest sets.
const list = (await get("/sets")) || [];
if (!list.length) { console.error("The API returned no sets. Nothing written."); process.exit(1); }
const details = (await pool(list, 10, (s) => get("/sets/" + encodeURIComponent(s.id)))).filter(Boolean);
const candidates = details
  .filter((s) => s.releaseDate && s.releaseDate <= today && Array.isArray(s.cards) && s.cards.length)
  .filter((s) => !SKIP_SERIES.includes(s.serie && s.serie.id))
  .sort((a, b) => (a.releaseDate < b.releaseDate ? 1 : -1));
const queue = [
  ...details.filter((s) => EXTRA_SETS.includes(s.id)),
  ...candidates.filter((s) => !EXTRA_SETS.includes(s.id)).slice(0, LATEST_SETS + 4)
];

// 2. Price every card in those sets. Sets with no prices at all are skipped.
const sets = [], cards = [];
let sample = null, wanted = LATEST_SETS + EXTRA_SETS.length;
for (const set of queue) {
  if (sets.length >= wanted) break;
  const raw = (await pool(set.cards, 10, (c) => get("/cards/" + encodeURIComponent(c.id)))).filter(Boolean);
  const priced = raw.map((c) => normalize(c, set)).filter((c) => c.usd != null || c.eur != null);
  console.log(set.id, set.name, set.releaseDate, "cards:", raw.length, "priced:", priced.length);
  if (!priced.length) continue;
  if (!sample) sample = raw.find((c) => c.pricing) || raw[0];
  sets.push({ id: set.id, name: set.name, date: set.releaseDate, total: raw.length, priced: priced.length });
  cards.push(...priced);
}
if (!cards.length) { console.error("No priced cards found. Nothing written."); process.exit(1); }

// 3. Write today's snapshot.
await writeFile("data/market.json", JSON.stringify({ updated: new Date().toISOString(), sets, cards }));
await writeFile("data/sample-card.json", JSON.stringify(sample, null, 2));

// 4. Add today's column to each set's price history (US dollars when available, otherwise euros).
await mkdir("data/history", { recursive: true });
for (const set of sets) {
  const file = "data/history/" + set.id + ".json";
  let h = { dates: [], cur: {}, p: {} };
  try { h = JSON.parse(await readFile(file, "utf8")); } catch (err) {}
  if (h.dates[h.dates.length - 1] !== today) h.dates.push(today);
  const len = h.dates.length, col = len - 1;
  for (const c of cards) {
    if (c.sid !== set.id) continue;
    const cur = h.cur[c.id] || (h.cur[c.id] = c.usd != null ? "USD" : "EUR");
    (h.p[c.id] || (h.p[c.id] = []))[col] = cur === "USD" ? c.usd : c.eur;
  }
  for (const id of Object.keys(h.p)) {
    const arr = h.p[id];
    for (let i = 0; i < len; i++) if (arr[i] === undefined) arr[i] = null;
    arr.length = len;
    if (len > HISTORY_DAYS) h.p[id] = arr.slice(len - HISTORY_DAYS);
  }
  if (len > HISTORY_DAYS) h.dates = h.dates.slice(len - HISTORY_DAYS);
  await writeFile(file, JSON.stringify(h));
}

// 5. A small status file for the hub: snapshot size plus recent changes from the repository history.
let changes = [];
try {
  changes = execSync('git log --no-merges -60 --date=short --pretty=format:%ad%x09%s', { encoding: "utf8" })
    .split("\n").map((l) => l.split("\t")).filter((l) => l.length === 2 && !/^Update (market|metals) data$/.test(l[1]) && !HIDE_CHANGES.test(l[1]))
    .slice(0, 12).map(([date, text]) => ({ date, text }));
} catch (err) { console.warn("no git history available", err.message); }
await writeFile("data/status.json", JSON.stringify({ updated: new Date().toISOString(), cards: cards.length, sets: sets.length, changes }));

console.log("Wrote", cards.length, "cards from", sets.length, "sets for", today);
