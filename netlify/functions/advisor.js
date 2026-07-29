/* ============================================================================
   CloseConnect AI advisor, Netlify serverless function
   ----------------------------------------------------------------------------
   The browser POSTs { question, resources } here. This function calls Claude
   with the student's question + the resource catalog and returns a short,
   friendly answer plus a ranked list of recommended resources.

   SECURITY: the Anthropic API key is read from the ANTHROPIC_API_KEY
   environment variable (set in Netlify → Site configuration → Environment
   variables). It is NEVER stored in the repo and never sent to the browser.

   No npm dependencies, uses the built-in fetch (Netlify Node 18+).
   ============================================================================ */

const { getStore } = require("@netlify/blobs");

const MODEL = "claude-haiku-4-5-20251001"; // fast + inexpensive; swap if desired.
// Max advisor questions per IP per day. Override with the ADVISOR_DAILY_LIMIT
// env var in Netlify without touching code. This is a server-side backstop so
// the browser-side cap can't just be bypassed to run up the API bill.
const DAILY_LIMIT = parseInt(process.env.ADVISOR_DAILY_LIMIT || "10", 10);

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return json(500, { error: "The advisor isn't configured yet (missing API key)." });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return json(400, { error: "Bad request." });
  }

  const question = String(body.question || "").slice(0, 600).trim();
  const resources = Array.isArray(body.resources) ? body.resources.slice(0, 80) : [];
  if (!question) return json(400, { error: "No question provided." });
  if (!resources.length) return json(400, { error: "No resources provided." });

  // --- Per-IP daily rate limit (cost/abuse protection) ---
  // Fails open if storage is unavailable, so a storage hiccup never takes the
  // advisor down; the Anthropic spend cap is the final backstop.
  try {
    const h = event.headers || {};
    const ip = (h["x-nf-client-connection-ip"] ||
      (h["x-forwarded-for"] || "").split(",")[0] || "unknown").trim();
    const day = new Date().toISOString().slice(0, 10);
    const store = getStore("resourceful-ratelimit");
    const rlKey = day + ":" + ip;
    const count = parseInt((await store.get(rlKey)) || "0", 10);
    if (count >= DAILY_LIMIT) {
      return json(429, {
        error: "You've reached today's question limit. Please try again tomorrow, " +
          "or browse the resources directly, they're all still here."
      });
    }
    await store.set(rlKey, String(count + 1));
  } catch (e) {
    // storage unavailable: allow the request through
  }

  // Only send the model what it needs.
  const catalog = resources.map(function (r) {
    const item = {
      name: String(r.name || ""),
      categories: Array.isArray(r.categories) ? r.categories : [],
      audiences: Array.isArray(r.audiences) ? r.audiences : [],
      description: String(r.description || "")
    };
    if (r.details) item.details = String(r.details);
    if (r.location) item.location = String(r.location);
    if (Array.isArray(r.links) && r.links.length) item.links = r.links;
    return item;
  });

  const events = Array.isArray(body.events) ? body.events.slice(0, 30) : [];

  const system =
    "You are the Resourceful advisor for University of San Diego (USD) students, grad students, and alumni. " +
    "A person describes their situation and you recommend the most relevant resources ONLY from the provided catalog. " +
    "Voice: warm, concise, specific, like a helpful fellow USD student, never a marketing brochure. Address the person directly ('you'). " +
    "Writing style: never use em dashes in your prose; use commas or periods instead. " +
    "Use the 'details' and 'links' fields to give genuinely useful, specific help, students find it hard to click through many pages, so surface the key facts (deadlines, how to start, cost, where to go, phone numbers) directly in your answer and in each reason. " +
    "When a resource's 'links' entry directly answers the person (e.g. a signup page or networking platform like T.E.A.M.), name it in the reason. " +
    "If the person is asking WHERE a specific form or page is (for example the study abroad pre-approved course list, a transfer evaluation form, or the housing application), recommend the resource that has it and, using only that resource's 'details' and 'links', tell them plainly which page to open, which tab/section to click, and the name of the form, so they can go straight to it instead of hunting. " +
    "PRACTICAL HOW-TO (resumes, cover letters, interviews, or finding job and networking contacts): lead with the single best tool or guide for that exact task and give the one or two concrete steps to use it, drawn only from the catalog's 'details' and 'links'. For example, to find people or contacts at a company, recommend CareerShift and tell them to open it, sign in with their USD email, and search the company to pull up names, emails, and LinkedIn profiles; to build a resume or cover letter, point to the resume or cover-letter guide on the Career Resources page and name it. Give the specific next action, not a generic 'visit the career center.' " +
    "ORDERING: put the single most directly useful resource FIRST in your recommendations. If the person names a specific tool or resource (for example 'CareerShift' or 'Handshake'), that resource must be first. For finding contacts, connections, or people at companies, CareerShift comes first. " +
    "You may also receive an 'events' list of upcoming deadlines/competitions; if one is clearly relevant and timely to their question, mention it briefly in your answer (dates are approximate). Some events include a 'findAt' note describing where the page lives on USD's site; when you point someone to an event, include that 'where to find it' hint. " +
    "USD reorganizes its website often, so a link may occasionally lead to a 'page not found.' If that ever comes up, reassure the person that it's USD moving their own pages (not the student's fault), and tell them where the page usually lives (from 'findAt' or 'details') or to search the exact name on sandiego.edu. " +
    "LOCATIONS & HOURS: if someone asks where a place is, give the building and room from that resource's 'location' or 'details'. If someone asks about hours, share any hours that appear in 'details' but add that hours change by semester, summer, and finals, so they should confirm on the resource's hours page, and point them to the 'Campus Maps & Building Hours' resource (interactive map plus the Auxiliary Services and library hours pages). Never invent a room number or specific hours that aren't in the catalog. " +
    "Rules: recommend 3 to 6 resources, most relevant first. Use resource names EXACTLY as written in the catalog. " +
    "Never invent resources, links, forms, form names, office names, deadlines, or step-by-step processes. Only state a specific process or form if it appears in a resource's 'details' or 'links'. " +
    "If the person asks HOW to do something specific (change a schedule, submit a form, appeal, petition, get a course approved) and the exact steps are not in the catalog, do NOT guess or invent a procedure. Instead, say plainly that you're not certain of the exact steps, point them to the single most relevant office with its real contact info from the catalog, and suggest they confirm the current process with that office. It is better to admit uncertainty and hand off to the right human than to give a confident wrong answer. " +
    "SAFETY FIRST: If the message suggests distress or crisis, a mental-health struggle, thoughts of self-harm, food or housing insecurity, abuse, or fear for their safety, open your answer with genuine warmth and care, gently point them to the most relevant support (such as the Counseling Center), and include crisis options directly in the answer: the 988 Suicide & Crisis Lifeline (call or text 988, 24/7) and the Crisis Text Line (text HOME to 741741). Never diagnose, minimize, or lecture; lead with care, then still recommend the helpful resources. " +
    "Respond with ONLY valid JSON (no markdown, no code fences) in exactly this shape: " +
    '{"answer":"2-3 warm sentences speaking directly to them","recommendations":[{"name":"exact catalog name","reason":"one short sentence on why it fits their situation"}]}';

  const userContent =
    "Situation / question:\n" + question +
    "\n\nResource catalog (JSON):\n" + JSON.stringify(catalog) +
    (events.length ? "\n\nUpcoming events/deadlines (JSON):\n" + JSON.stringify(events) : "");

  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 900,
        system: system,
        messages: [{ role: "user", content: userContent }]
      })
    });

    if (!resp.ok) {
      // Log the upstream detail server-side; never leak it to the browser.
      const errText = await resp.text();
      console.error("Anthropic error", resp.status, errText.slice(0, 500));
      return json(502, { error: "The advisor had trouble responding. Please try again in a moment." });
    }

    const data = await resp.json();
    const text = (data && data.content && data.content[0] && data.content[0].text) || "";
    const parsed = safeJson(text);

    if (!parsed || !Array.isArray(parsed.recommendations)) {
      // Model didn't return clean JSON, hand back what we have so the UI can cope.
      return json(200, {
        answer: (parsed && parsed.answer) || text || "Here are some resources that may help.",
        recommendations: []
      });
    }
    return json(200, parsed);
  } catch (e) {
    return json(502, { error: "Could not reach the advisor service." });
  }
};

// Parse JSON, tolerating stray text or a ```json fence around it.
function safeJson(t) {
  if (!t) return null;
  try { return JSON.parse(t); } catch (e) {}
  const m = t.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch (e2) {} }
  return null;
}

function json(statusCode, obj) {
  return {
    statusCode: statusCode,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj)
  };
}
