// Temporary: checks which free data sources answer from GitHub's servers.
const UA = { "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36", accept: "*/*" };
async function probe(label, url, show = 260) {
  try {
    const r = await fetch(url, { headers: UA, redirect: "follow" });
    const t = await r.text();
    console.log(`${r.status} ${label} len=${t.length} :: ${t.slice(0, show).replace(/\s+/g, " ")}`);
    return t;
  } catch (e) { console.log(`ERR ${label} ${e.message}`); return ""; }
}
const y = ["HG=F", "ALI=F", "HRC=F", "TIO=F", "COPX", "SLX", "XME", "FCX", "SCCO", "AA", "NUE", "STLD", "CLF", "DX-Y.NYB", "BUS=F", "CL=F"];
for (const s of y) {
  const t = await probe("yahoo " + s, `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(s)}?range=5d&interval=1d`, 60);
  try { const m = JSON.parse(t).chart.result[0].meta; console.log("   meta", JSON.stringify({ sym: m.symbol, cur: m.currency, name: m.shortName || m.longName, px: m.regularMarketPrice, exch: m.fullExchangeName, type: m.instrumentType })); } catch (e) {}
}
await probe("yahoo2 HG=F", "https://query2.finance.yahoo.com/v8/finance/chart/HG%3DF?range=1y&interval=1d", 80);
for (const s of ["hg.f", "ali.f", "hrc.f"]) await probe("stooq " + s, `https://stooq.com/q/d/l/?s=${s}&i=d`, 120);
for (const id of ["PCOPPUSDM", "PALUMUSDM", "PIORECRUSDM", "PNICKUSDM", "WPU101", "WPU1017", "WPU101707", "WPU102502", "WPU1022", "WPU10250105", "PCU331110331110", "PCU331313331313", "PCU331420331420", "WPU1012", "IPG3311A2S", "IPG3313S", "DTWEXBGS"]) {
  const t = await probe("fred " + id, `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}&cosd=2019-01-01`, 60);
  if (t) console.log("   tail", t.trim().split("\n").slice(-2).join(" | "));
}
await probe("fred title PCOPPUSDM", "https://fred.stlouisfed.org/series/PCOPPUSDM", 0);
for (const [l, u] of [
  ["gnews copper", "https://news.google.com/rss/search?q=copper+price+OR+%22copper+market%22+when:7d&hl=en-US&gl=US&ceid=US:en"],
  ["gnews steel", "https://news.google.com/rss/search?q=%22steel+prices%22+OR+%22steel+market%22+when:7d&hl=en-US&gl=US&ceid=US:en"],
  ["mining.com", "https://www.mining.com/feed/"], ["mining copper", "https://www.mining.com/tag/copper/feed/"],
  ["kitco", "https://www.kitco.com/rss/"], ["alcircle", "https://www.alcircle.com/rss/news"], ["gmk", "https://gmk.center/en/feed/"],
  ["steelorbis", "https://www.steelorbis.com/rss/steel-news.xml"], ["recyclingtoday", "https://www.recyclingtoday.com/rss/"], ["agmetalminer", "https://agmetalminer.com/feed/"],
  ["worldbank pink", "https://thedocs.worldbank.org/en/doc/18675f1d1639c7a34d463f59263ba0a2-0050012025/related/CMO-Historical-Data-Monthly.xlsx"]
]) {
  const t = await probe(l, u, 120);
  const items = [...t.matchAll(/<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<\/item>/g)].slice(0, 3).map((m) => m[1].replace(/<!\[CDATA\[|\]\]>/g, "").slice(0, 90));
  if (items.length) console.log("   items", t.split("<item>").length - 1, JSON.stringify(items));
}
