/* Food photo job.
   Reads corner/menu/gallery.js and, for each dish, side and ingredient listed there, asks Wikimedia Commons'
   public search API for openly licensed photos. Saves up to four candidates each, with author and licence,
   to data/food-images.json. A phrase that hasn't changed since the last run is not looked up again. */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import vm from "node:vm";

const UA = "PersonalWebsiteMenu/1.0 (https://github.com/illusioment/PersonalWebsite; food photo gallery for a recipe page)";
const ctx = { window: {} }; vm.runInNewContext(await readFile("corner/menu/gallery.js", "utf8"), ctx);
const G = ctx.window.GALLERY;
let old = { images: {}, links: {}, queries: {} };
try { old = JSON.parse(await readFile("data/food-images.json", "utf8")); } catch (e) {}

const jobs = [];
for (const [id, q] of Object.entries(G.dishes)) jobs.push(["dish:" + id, q]);
for (const [id, q] of Object.entries(G.sides)) jobs.push(["side:" + id, q]);
for (const [word, q] of G.ingredients) jobs.push(["ing:" + word, q]);

const OK_LICENCE = /^(cc0|public domain|pd\b|cc by(-sa)? \d)/i;
const SKIP_TITLE = /logo|map\b|diagram|chart|label|packag|advert|poster|drawing|painting|illustration|engraving|icon|stamp|sign\b|child|labou?r|portrait|concert|festival|wall art|beetle|flower|blüten|früchte|sprout|scab|disease|ornitholog|birds? of|vineyard|restaurant|ristorante|\.svg$|\.png$|\.gif$|\.tif/i;
const text = (html) => String(html || "").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(q) {
  const url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=20&gsrsearch=" + encodeURIComponent(q + " filetype:bitmap") +
    "&prop=imageinfo&iiprop=url%7Csize%7Cmime%7Cextmetadata&iiurlwidth=640&iiextmetadatafilter=Artist%7CLicenseShortName%7CLicenseUrl";
  const res = await fetch(url, { headers: { "User-Agent": UA, "Api-User-Agent": UA } });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const pages = Object.values(((await res.json()).query || {}).pages || {}).sort((a, b) => a.index - b.index), out = [];
  for (const p of pages) {
    const i = p.imageinfo && p.imageinfo[0]; if (!i || i.mime !== "image/jpeg" || i.width < 800 || !i.thumburl) continue;
    const ratio = i.width / i.height, m = i.extmetadata || {}, lic = text(m.LicenseShortName && m.LicenseShortName.value);
    if (ratio < 0.8 || ratio > 2.2 || !OK_LICENCE.test(lic) || SKIP_TITLE.test(p.title)) continue;
    out.push({ id: String(p.pageid), t: p.title, th: i.thumburl, pg: i.descriptionurl, by: text(m.Artist && m.Artist.value).slice(0, 70) || "Unknown author", lic, licUrl: (m.LicenseUrl && m.LicenseUrl.value) || "", w: i.width, h: i.height });
    if (out.length === 4) break;
  }
  return out;
}

const images = {}, links = {}, queries = {}, problems = [];
let looked = 0;
for (const [key, q] of jobs) {
  queries[key] = q;
  if (old.queries && old.queries[key] === q && (old.links[key] || []).length) { links[key] = old.links[key]; links[key].forEach((id) => { if (old.images[id]) images[id] = old.images[id]; }); continue; }
  try { const found = await search(q); looked++; links[key] = found.map((f) => f.id); found.forEach((f) => { const { id, ...rest } = f; images[id] = rest; }); if (!found.length) problems.push(key + " (" + q + "): nothing suitable"); }
  catch (e) { problems.push(key + ": " + e.message); links[key] = (old.links && old.links[key]) || []; links[key].forEach((id) => { if (old.images[id]) images[id] = old.images[id]; }); }
  await sleep(250);
}
await mkdir("data", { recursive: true });
await writeFile("data/food-images.json", JSON.stringify({ updated: new Date().toISOString(), source: "Wikimedia Commons", images, links, queries }));
console.log("looked up", looked, "of", jobs.length, "| images", Object.keys(images).length);
for (const [key] of jobs) console.log(key.padEnd(28), (links[key] || []).map((id) => images[id] ? images[id].t.replace(/^File:/, "").slice(0, 46) : "?").join(" | "));
console.log("problems:", problems.length ? problems.join("; ") : "none");
