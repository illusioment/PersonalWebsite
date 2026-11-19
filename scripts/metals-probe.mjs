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
for (const [l, u] of [
  ["nasdaq c1", "https://api.nasdaq.com/api/quote/HG%3ACMX/info?assetclass=commodities"],
  ["nasdaq c2", "https://api.nasdaq.com/api/quote/HG/info?assetclass=commodities"],
  ["nasdaq c3", "https://api.nasdaq.com/api/quote/HG%3ACMX/info?assetclass=futures"],
  ["nasdaq c4", "https://api.nasdaq.com/api/quote/HG%3ACMX/historical?assetclass=commodities&fromdate=2026-10-01&todate=2026-11-19&limit=40"],
  ["nasdaq c5", "https://api.nasdaq.com/api/quote/watchlist?symbol=hg%3Acmx%7ccommodities&symbol=ali%3Acmx%7ccommodities&symbol=hrc%3Acmx%7ccommodities"],
  ["nasdaq CPER", "https://api.nasdaq.com/api/quote/CPER/historical?assetclass=etf&fromdate=2026-11-01&todate=2026-11-19&limit=5"],
  ["bls v2", "https://api.bls.gov/publicAPI/v2/timeseries/data/WPU101?startyear=2024&endyear=2026"],
  ["bls v1 multi", "https://api.bls.gov/publicAPI/v1/timeseries/data/WPU1017"],
  ["dbn iron", "https://api.db.nomics.world/v22/series/IMF/PCPS/M.W00.PIORECR.USD?observations=1"],
  ["dbn wb search", "https://api.db.nomics.world/v22/search?q=pink%20sheet%20commodity%20prices&limit=6"],
  ["dbn providers steel", "https://api.db.nomics.world/v22/series?q=steel%20hot%20rolled%20price&limit=8&observations=0"],
  ["dbn copper daily", "https://api.db.nomics.world/v22/series?q=copper%20daily%20price%20LME&limit=8&observations=0"]
]) {
  const t = probe(l, u, 700);
  if (l.startsWith("dbn iron")) { try { const d = JSON.parse(t).series.docs[0]; console.log("   dbn", d.series_name, d.period.slice(-3), d.value.slice(-3)); } catch (e) { console.log("   dbn parse fail"); } }
  if (l.startsWith("dbn") && l !== "dbn iron") { try { const j = JSON.parse(t); const docs = (j.series && j.series.docs) || (j.results && j.results.docs) || []; docs.forEach((d) => console.log("   doc", (d.provider_code || "") + "/" + (d.dataset_code || d.code || "") + "/" + (d.series_code || ""), "|", (d.series_name || d.name || "").slice(0, 110))); } catch (e) {} }
}
for (const f of ["LME_Cu_cash", "LME_Al_cash"]) {
  const t = probe("westmetall " + f, "https://www.westmetall.com/en/markdaten.php?action=table&field=" + f, 0);
  const text = t.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ");
  const i = text.search(/date/i);
  console.log("   table", text.slice(Math.max(0, i - 80), i + 700));
  console.log("   legal", (text.match(/.{0,160}(copyright|©|without guarantee|liability|permission|reproduc).{0,200}/gi) || []).slice(0, 4).join(" || "));
  const rows = [...t.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].slice(0, 6).map((m) => m[1].replace(/<[^>]+>/g, "|").replace(/\s+/g, " ").slice(0, 160));
  console.log("   rows", JSON.stringify(rows));
}
