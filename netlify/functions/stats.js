/* ============================================================================
   Usage stats — proof-of-use for the pitch, with NO student personal data.
   ----------------------------------------------------------------------------
   Stored in Netlify Blobs (free, built-in key-value storage):
     total       – how many advisor questions have been asked
     byDay       – { "2026-08-25": 42, ... } questions per day
     byResource  – { "Counseling Center": 30, ... } which resources get
                    recommended most (this is the "what students need" signal)

   POST  (from the site, on each question)  -> increments the counters
   GET   ?key=YOURKEY                        -> returns the stats as JSON

   Set STATS_KEY in Netlify env vars to your own secret. Without the right key,
   GET returns 401 so the numbers stay private.
   ============================================================================ */

const { getStore } = require("@netlify/blobs");

const STORE = "resourceful-stats";
const KEY = "stats";

function todayISO() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

exports.handler = async function (event) {
  let store;
  try {
    store = getStore(STORE);
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, note: "storage unavailable" }) };
  }

  // --- Record a question OR a flyer/referral scan ---
  if (event.httpMethod === "POST") {
    let data = (await store.get(KEY, { type: "json" })) || { total: 0, byDay: {}, byResource: {}, byRef: {} };
    if (!data.byRef) data.byRef = {};
    let body = {};
    try { body = JSON.parse(event.body || "{}"); } catch (e) {}

    // Record a referral/flyer source if one is present (from ?ref= on the QR).
    if (typeof body.ref === "string") {
      const ref = body.ref.slice(0, 60).replace(/[^a-zA-Z0-9._-]/g, "");
      if (ref) data.byRef[ref] = (data.byRef[ref] || 0) + 1;
    }

    // A "scan" ping only records the referral — it is NOT a question.
    if (body.event !== "scan") {
      data.total = (data.total || 0) + 1;
      const day = todayISO();
      data.byDay[day] = (data.byDay[day] || 0) + 1;

      (Array.isArray(body.picks) ? body.picks : []).slice(0, 8).forEach(function (name) {
        if (typeof name === "string" && name.length > 0 && name.length < 120) {
          data.byResource[name] = (data.byResource[name] || 0) + 1;
        }
      });
    }

    await store.setJSON(KEY, data);
    return { statusCode: 204, body: "" };
  }

  // --- View the stats (owner only) ---
  const key = (event.queryStringParameters || {}).key || "";
  const OWNER = process.env.STATS_KEY || "";
  if (!OWNER || key !== OWNER) {
    return { statusCode: 401, body: "Add ?key=YOUR_STATS_KEY to view stats." };
  }

  const data = (await store.get(KEY, { type: "json" })) || { total: 0, byDay: {}, byResource: {}, byRef: {} };
  const topResources = Object.keys(data.byResource || {})
    .map(function (name) { return { name: name, count: data.byResource[name] }; })
    .sort(function (a, b) { return b.count - a.count; })
    .slice(0, 25);

  const flyerScans = Object.keys(data.byRef || {})
    .map(function (name) { return { name: name, count: data.byRef[name] }; })
    .sort(function (a, b) { return b.count - a.count; });

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      totalQuestions: data.total || 0,
      byDay: data.byDay || {},
      topResources: topResources,
      flyerScans: flyerScans
    }, null, 2)
  };
};
