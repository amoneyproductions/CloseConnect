/* ============================================================================
   Weekly broken-link checker  —  Netlify scheduled function
   ----------------------------------------------------------------------------
   Once a week it reads the site's resource/event data, checks every link, and
   posts a report to the Netlify "linkcheck" form. Set an email notification on
   that form in Netlify (Forms → linkcheck → add email notification) to get the
   report in your inbox.

   Schedule is set in netlify.toml ([functions."link-check"]). No API keys, no
   third-party email service.
   ============================================================================ */

exports.handler = async function () {
  const base = process.env.URL || "https://closeconnects.netlify.app";

  // 1) Pull the data files and pull out every URL.
  let text = "";
  for (const f of ["/data/resources.js", "/data/events.js"]) {
    try {
      const r = await fetch(base + f);
      if (r.ok) text += "\n" + (await r.text());
    } catch (e) {}
  }

  const urls = [];
  const re = /"(https?:\/\/[^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (urls.indexOf(m[1]) === -1) urls.push(m[1]);
  }

  // 2) Check each link. Only flag genuine "dead" signals (404/410/5xx/no
  //    response) — ignore 401/403/405/429/999 which usually just mean the site
  //    blocks bots but the page is fine (e.g. LinkedIn).
  const broken = [];
  async function check(u) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 8000);
      let res;
      try {
        res = await fetch(u, {
          method: "GET",
          redirect: "follow",
          signal: ctrl.signal,
          headers: { "user-agent": "CloseConnect-LinkCheck/1.0" }
        });
      } finally {
        clearTimeout(t);
      }
      if (res.status === 404 || res.status === 410 || res.status >= 500) {
        broken.push("HTTP " + res.status + "  —  " + u);
      }
    } catch (e) {
      broken.push((e.name === "AbortError" ? "timeout" : "unreachable") + "  —  " + u);
    }
  }
  for (let i = 0; i < urls.length; i += 8) {
    await Promise.all(urls.slice(i, i + 8).map(check));
  }

  // 3) Build the report.
  const when = new Date().toISOString().slice(0, 10);
  const report =
    broken.length === 0
      ? "CloseConnect link check (" + when + "): all " + urls.length + " links OK."
      : "CloseConnect link check (" + when + "): " + broken.length + " of " +
        urls.length + " links need attention:\n\n" + broken.join("\n");

  // 4) Post it to the Netlify "linkcheck" form (email notification set in Netlify).
  try {
    const body = new URLSearchParams();
    body.append("form-name", "linkcheck");
    body.append("report", report);
    await fetch(base + "/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    });
  } catch (e) {}

  return { statusCode: 200, body: report };
};
