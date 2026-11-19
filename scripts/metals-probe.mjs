// Temporary: second check of free data sources, this time through curl with time limits.
import { execFileSync } from "node:child_process";
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
function probe(label, url, show = 200, extra = []) {
  let out = "";
  try { out = execFileSync("curl", ["-sS", "-L", "-m", "25", "--compressed", "-A", UA, "-H", "Accept: */*", "-H", "Accept-Language: en-US,en;q=0.9", ...extra, "-w", "\n__HTTP__%{http_code}", url], { encoding: "utf8", maxBuffer: 64e6 }); }
  catch (e) { console.log(`ERR ${label} ${String(e.stderr || e.message).slice(0, 120).replace(/\s+/g, " ")}`); return ""; }
  const i = out.lastIndexOf("\n__HTTP__"), body = out.slice(0, i), code = out.slice(i + 9);
  console.log(`${code} ${label} len=${body.length} :: ${body.slice(0, show).replace(/\s+/g, " ")}`);
  return body;
}
for (const s of ["HG=F", "ALI=F", "HRC=F", "TIO=F", "SLX"]) {
  const t = probe("yahoo " + s, `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(s)}?range=5d&interval=1d`, 50);
  try { const m = JSON.parse(t).chart.result[0].meta; console.log("   meta", JSON.stringify({ sym: m.symbol, cur: m.currency, name: m.shortName || m.longName, px: m.regularMarketPrice, exch: m.fullExchangeName })); } catch (e) {}
}
for (const id of ["PCOPPUSDM", "PALUMUSDM", "PIORECRUSDM", "WPU101", "WPU1017", "WPU101707", "WPU102502", "PCU331110331110", "PCU331313331313", "PCU331420331420", "WPU1012", "DTWEXBGS"]) {
  const t = probe("fred " + id, `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}&cosd=2024-01-01`, 50);
  if (t) console.log("   tail", t.trim().split("\n").slice(-2).join(" | ").slice(0, 120));
}
for (const [l, u] of [
  ["dbnomics copper", "https://api.db.nomics.world/v22/series/IMF/PCPS/M.W00.PCOPP.USD?observations=1"],
  ["dbnomics alum", "https://api.db.nomics.world/v22/series/IMF/PCPS/M.W00.PALUM.USD?observations=1"],
  ["dbnomics search", "https://api.db.nomics.world/v22/search?q=copper%20LME%20price&limit=8"],
  ["dbnomics steel", "https://api.db.nomics.world/v22/search?q=hot%20rolled%20steel%20price&limit=8"],
  ["nasdaq HG", "https://api.nasdaq.com/api/quote/HG%3ANMX/info?assetclass=commodities"],
  ["nasdaq HG chart", "https://api.nasdaq.com/api/quote/HG%3ANMX/chart?assetclass=commodities&fromdate=2026-10-01&todate=2026-11-19"],
  ["nasdaq ALI", "https://api.nasdaq.com/api/quote/ALI%3ACMX/info?assetclass=commodities"],
  ["nasdaq FCX", "https://api.nasdaq.com/api/quote/FCX/info?assetclass=stocks"],
  ["nasdaq FCX hist", "https://api.nasdaq.com/api/quote/FCX/historical?assetclass=stocks&fromdate=2026-10-01&todate=2026-11-19&limit=40"],
  ["nasdaq SLX hist", "https://api.nasdaq.com/api/quote/SLX/historical?assetclass=etf&fromdate=2026-10-01&todate=2026-11-19&limit=40"],
  ["westmetall cu", "https://www.westmetall.com/en/markdaten.php?action=table&field=LME_Cu_cash"],
  ["imf api", "https://api.imf.org/external/sdmx/2.1/data/IMF.RES,PCPS/M.G001.PCOPP.USD?startPeriod=2026-01"],
  ["worldbank api", "https://api.worldbank.org/v2/sources?format=json&per_page=5"]
]) probe(l, u, 420);
for (const [l, u] of [
  ["gnews copper", "https://news.google.com/rss/search?q=copper+price+OR+%22copper+market%22+when:7d&hl=en-US&gl=US&ceid=US:en"],
  ["gnews steel", "https://news.google.com/rss/search?q=%22steel+prices%22+OR+%22steel+market%22+when:7d&hl=en-US&gl=US&ceid=US:en"],
  ["bing copper", "https://www.bing.com/news/search?q=copper+price&format=rss"],
  ["mining.com", "https://www.mining.com/feed/"], ["mining copper", "https://www.mining.com/tag/copper/feed/"],
  ["kitco", "https://www.kitco.com/rss/"], ["alcircle", "https://www.alcircle.com/rss/news"], ["gmk", "https://gmk.center/en/feed/"],
  ["steelorbis", "https://www.steelorbis.com/rss/steel-news.xml"], ["recyclingtoday", "https://www.recyclingtoday.com/rss/"], ["agmetalminer", "https://agmetalminer.com/feed/"],
  ["aluminium-journal", "https://www.aluminiumtoday.com/rss"], ["steeltimes", "https://www.steeltimesint.com/rss"], ["eurometal", "https://eurometal.net/feed/"], ["mining-tech", "https://www.mining-technology.com/feed/"]
]) {
  const t = probe(l, u, 90);
  const items = [...t.matchAll(/<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<\/item>/g)].slice(0, 3).map((m) => m[1].replace(/<!\[CDATA\[|\]\]>/g, "").slice(0, 80));
  if (items.length) console.log("   items", t.split("<item>").length - 1, JSON.stringify(items));
}
