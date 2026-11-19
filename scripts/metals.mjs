/* Metals data job.
   Runs on GitHub's servers (see .github/workflows/metals-data.yml) and writes data/metals.json
   for the Metals Desk dashboard. Every source is free and needs no key:

     LME copper and aluminium   daily cash settlement, 3-month price and warehouse stocks,
                                read from Westmetall's public market data tables
     IMF primary commodity      monthly world benchmark prices: copper, aluminium, iron ore
     US producer price indexes  monthly BLS indexes for steel, scrap, copper and aluminium products
     Shares and funds           daily closes from Nasdaq's public quote service
     News                       headlines and links from Google News and trade press feeds

   If a source fails, the last good copy of that section is kept and the failure is noted. */
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const errors = [];
function get(url, opts = {}) {
  const args = ["-sS", "-L", "-m", "30", "--compressed", "-A", UA, "-H", "Accept: */*", "-H", "Accept-Language: en-US,en;q=0.9"];
  if (opts.json) args.push("-H", "Content-Type: application/json", "-d", JSON.stringify(opts.json));
  for (let attempt = 1; attempt <= 2; attempt++) {
    try { return execFileSync("curl", [...args, url], { encoding: "utf8", maxBuffer: 64e6 }); }
    catch (e) { if (attempt === 2) return ""; }
  }
  return "";
}
const iso = (d) => d.toISOString().slice(0, 10);
const num = (s) => { const v = parseFloat(String(s).replace(/[$,\s]/g, "")); return isFinite(v) ? v : null; };
const MONTHS = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };

let old = {};
try { old = JSON.parse(await readFile("data/metals.json", "utf8")); } catch (e) {}

/* ---------- LME daily: cash, 3-month, stocks ---------- */
function lme(field) {
  const html = get("https://www.westmetall.com/en/markdaten.php?action=table&field=" + field);
  const rows = [];
  for (const m of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const cells = [...m[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => c[1].replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim());
    if (cells.length < 4) continue;
    const d = cells[0].match(/^(\d{1,2})\.\s*([A-Za-z]+)\s+(\d{4})$/);
    if (!d || !MONTHS[d[2].toLowerCase()]) continue;
    const date = d[3] + "-" + String(MONTHS[d[2].toLowerCase()]).padStart(2, "0") + "-" + d[1].padStart(2, "0");
    const cash = num(cells[1]), m3 = num(cells[2]), stock = num(cells[3]);
    if (cash != null) rows.push([date, cash, m3, stock]);
  }
  return rows;
}
function mergeRows(prev, next) {
  const map = new Map((prev || []).map((r) => [r[0], r]));
  next.forEach((r) => map.set(r[0], r));
  return [...map.values()].sort((a, b) => (a[0] < b[0] ? -1 : 1));
}
const lmeOut = {};
for (const [key, field] of [["copper", "LME_Cu_cash"], ["aluminum", "LME_Al_cash"]]) {
  const rows = lme(field);
  if (!rows.length) errors.push("LME " + key + " table could not be read");
  lmeOut[key] = mergeRows(old.lme && old.lme[key], rows).slice(-800);
  console.log("LME", key, rows.length, "rows, latest", JSON.stringify(lmeOut[key][lmeOut[key].length - 1]));
}

/* ---------- IMF monthly benchmarks ---------- */
function imf(code) {
  const xml = get(`https://api.imf.org/external/sdmx/2.1/data/IMF.RES,PCPS/M.G001.${code}.USD?startPeriod=2019-01`);
  let rows = [];
  for (const m of xml.matchAll(/<(?:\w+:)?Obs\b([^>]*)>/g)) {
    const p = m[1].match(/TIME_PERIOD="([^"]+)"/), v = m[1].match(/OBS_VALUE="([^"]+)"/);
    if (p && v && num(v[1]) != null) rows.push([p[1].replace("-M", "-").slice(0, 7), +num(v[1]).toFixed(2)]);
  }
  if (!rows.length) {       // fall back to the DBnomics mirror of the same IMF dataset
    try {
      const d = JSON.parse(get(`https://api.db.nomics.world/v22/series/IMF/PCPS/M.W00.${code}.USD?observations=1`)).series.docs[0];
      rows = d.period.map((p, i) => [p, d.value[i]]).filter((r) => typeof r[1] === "number" && r[0] >= "2019-01").map((r) => [r[0], +r[1].toFixed(2)]);
    } catch (e) {}
  }
  return rows.sort((a, b) => (a[0] < b[0] ? -1 : 1));
}
const imfOut = {};
for (const [key, code] of [["copper", "PCOPP"], ["aluminum", "PALUM"], ["ironore", "PIORECR"]]) {
  const rows = imf(code);
  if (!rows.length) errors.push("IMF " + key + " series could not be read");
  imfOut[key] = rows.length ? rows : (old.imf && old.imf[key]) || [];
  console.log("IMF", key, rows.length, "months, latest", JSON.stringify(imfOut[key][imfOut[key].length - 1]));
}

/* ---------- US producer price indexes (BLS) ---------- */
const PPI = [
  ["WPU101", "Iron and steel", "steel"], ["WPU1017", "Steel mill products", "steel"], ["WPU101703", "Hot rolled steel sheet and strip", "steel"],
  ["WPU101707", "Cold rolled steel sheet and strip", "steel"], ["WPU1012", "Iron and steel scrap", "steel"],
  ["WPU102502", "Copper and brass mill shapes", "copper"], ["WPU102301", "Copper base scrap", "copper"], ["WPU102501", "Aluminum mill shapes", "aluminum"]
];
const year = new Date().getUTCFullYear();
let ppiOut = {};
try {
  const j = JSON.parse(get("https://api.bls.gov/publicAPI/v2/timeseries/data/", { json: { seriesid: PPI.map((p) => p[0]), startyear: String(year - 6), endyear: String(year) } }));
  for (const s of j.Results.series) {
    const meta = PPI.find((p) => p[0] === s.seriesID);
    const rows = s.data.filter((d) => /^M(0[1-9]|1[0-2])$/.test(d.period) && num(d.value) != null).map((d) => [d.year + "-" + d.period.slice(1), num(d.value)]).sort((a, b) => (a[0] < b[0] ? -1 : 1));
    if (meta && rows.length) ppiOut[s.seriesID] = { name: meta[1], metal: meta[2], rows };
  }
} catch (e) {}
if (!Object.keys(ppiOut).length) { errors.push("BLS producer price indexes could not be read"); ppiOut = old.ppi || {}; }
console.log("PPI", Object.keys(ppiOut).map((k) => k + ":" + ppiOut[k].rows.length).join(" "));

/* ---------- shares and funds (daily closes) ---------- */
const TICKERS = [
  ["CPER", "etf", "copper", "US Copper Index Fund", "Fund that tracks copper futures"], ["COPX", "etf", "copper", "Global X Copper Miners", "Basket of copper mining shares"],
  ["FCX", "stocks", "copper", "Freeport-McMoRan", "Largest listed copper miner"], ["SCCO", "stocks", "copper", "Southern Copper", "Copper miner, Mexico and Peru"],
  ["AA", "stocks", "aluminum", "Alcoa", "Bauxite, alumina and aluminium producer"], ["CENX", "stocks", "aluminum", "Century Aluminum", "US primary aluminium smelter"], ["KALU", "stocks", "aluminum", "Kaiser Aluminum", "Aluminium mill products"],
  ["SLX", "etf", "steel", "VanEck Steel ETF", "Basket of global steel shares"], ["NUE", "stocks", "steel", "Nucor", "Largest US steelmaker, electric-arc"], ["STLD", "stocks", "steel", "Steel Dynamics", "US electric-arc steelmaker"],
  ["CLF", "stocks", "steel", "Cleveland-Cliffs", "US integrated steelmaker"], ["MT", "stocks", "steel", "ArcelorMittal", "Global steelmaker"],
  ["XME", "etf", "all", "SPDR Metals & Mining ETF", "Broad US metals and mining shares"]
];
const today = new Date(), from = new Date(today.getTime() - 400 * 864e5);
const eqOut = {};
for (const [sym, cls, metal, name, what] of TICKERS) {
  let rows = [];
  try {
    const j = JSON.parse(get(`https://api.nasdaq.com/api/quote/${sym}/historical?assetclass=${cls}&fromdate=${iso(from)}&todate=${iso(today)}&limit=400`));
    rows = j.data.tradesTable.rows.map((r) => { const [m, d, y] = r.date.split("/"); return [`${y}-${m}-${d}`, num(r.close)]; }).filter((r) => r[1] != null).sort((a, b) => (a[0] < b[0] ? -1 : 1));
  } catch (e) {}
  if (!rows.length && old.equities && old.equities[sym]) rows = old.equities[sym].rows;
  if (!rows.length) { errors.push("No prices for " + sym); continue; }
  eqOut[sym] = { name, what, metal, kind: cls === "etf" ? "Fund" : "Share", rows };
}
console.log("Equities", Object.keys(eqOut).map((k) => k + ":" + eqOut[k].rows.length).join(" "));

/* ---------- news ---------- */
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const clean = (s) => String(s || "").replace(/<!\[CDATA\[|\]\]>/g, "").replace(/<[^>]+>/g, "")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&(\w+);/g, (m, n) => ENT[n] ?? m).replace(/\s+/g, " ").trim();
function feed(url, fallbackSource) {
  const xml = get(url), out = [];
  for (const m of xml.matchAll(/<item\b[\s\S]*?<\/item>/g)) {
    const tag = (t) => { const x = m[0].match(new RegExp("<" + t + "\\b[^>]*>([\\s\\S]*?)</" + t + ">")); return x ? clean(x[1]) : ""; };
    let title = tag("title"), source = tag("source") || fallbackSource;
    const link = tag("link"), when = new Date(tag("pubDate"));
    if (!title || !/^https?:\/\//.test(link) || isNaN(when)) continue;
    if (source && title.endsWith(" - " + source)) title = title.slice(0, -(source.length + 3));
    out.push({ t: title.slice(0, 200), u: link, s: source.slice(0, 60), d: when.toISOString() });
  }
  return out;
}
const g = (q) => "https://news.google.com/rss/search?q=" + encodeURIComponent(q + " when:7d") + "&hl=en-US&gl=US&ceid=US:en";
const SEARCHES = {
  copper: ['"copper price" OR "copper prices" OR "copper market" OR "copper futures"', '"copper" LME OR COMEX OR smelter OR "copper mine"'],
  aluminum: ['"aluminum price" OR "aluminium price" OR "aluminum prices" OR "aluminium prices" OR "aluminium market"', 'aluminium OR aluminum LME OR smelter OR "Midwest premium" OR alumina'],
  steel: ['"steel prices" OR "steel market" OR "hot-rolled coil" OR "HRC prices"', 'steel tariffs OR steelmaker OR "iron ore price" OR "scrap prices"']
};
const TRADE = [["https://www.mining.com/feed/", "MINING.COM", null], ["https://gmk.center/en/feed/", "GMK Center", "steel"], ["https://eurometal.net/feed/", "EUROMETAL", "steel"],
  ["https://agmetalminer.com/feed/", "MetalMiner", null], ["https://www.recyclingtoday.com/rss/", "Recycling Today", null]];
const WORDS = { copper: /\bcopper\b/i, aluminum: /\balumin(i)?um\b|\balumina\b|\bbauxite\b/i, steel: /\bsteel\b|\biron ore\b|\bhrc\b|\brebar\b|\bferrous\b|\bscrap\b/i };
const cutoff = Date.now() - 10 * 864e5, newsOut = { copper: [], aluminum: [], steel: [] };
for (const metal of Object.keys(SEARCHES)) for (const q of SEARCHES[metal]) feed(g(q), "").forEach((n) => { if (WORDS[metal].test(n.t)) newsOut[metal].push(n); });
for (const [url, source, dflt] of TRADE) feed(url, source).forEach((n) => {
  const hit = Object.keys(WORDS).filter((m) => WORDS[m].test(n.t));
  (hit.length ? hit : dflt ? [dflt] : []).forEach((m) => newsOut[m].push(n));
});
for (const metal of Object.keys(newsOut)) {
  const seen = new Set();
  newsOut[metal] = newsOut[metal].filter((n) => new Date(n.d).getTime() >= cutoff)
    .sort((a, b) => (a.d < b.d ? 1 : -1))
    .filter((n) => { const k = n.t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().slice(0, 70); if (seen.has(k)) return false; seen.add(k); return true; })
    .slice(0, 40);
  if (!newsOut[metal].length) { errors.push("No " + metal + " news found"); newsOut[metal] = (old.news && old.news[metal]) || []; }
  console.log("News", metal, newsOut[metal].length, "|", newsOut[metal].slice(0, 2).map((n) => n.s + ": " + n.t.slice(0, 60)).join(" || "));
}

await mkdir("data", { recursive: true });
await writeFile("data/metals.json", JSON.stringify({ updated: new Date().toISOString(), lme: lmeOut, imf: imfOut, ppi: ppiOut, equities: eqOut, news: newsOut, errors }));
console.log("errors:", errors.length ? errors.join("; ") : "none");
if (!lmeOut.copper.length && !Object.keys(eqOut).length) process.exit(1);
