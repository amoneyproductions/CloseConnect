/* ============================================================================
   CloseConnect AI advisor — Netlify serverless function
   ----------------------------------------------------------------------------
   The browser POSTs { question, resources } here. This function calls Claude
   with the student's question + the resource catalog and returns a short,
   friendly answer plus a ranked list of recommended resources.

   SECURITY: the Anthropic API key is read from the ANTHROPIC_API_KEY
   environment variable (set in Netlify → Site configuration → Environment
   variables). It is NEVER stored in the repo and never sent to the browser.

   No npm dependencies — uses the built-in fetch (Netlify Node 18+).
   ============================================================================ */

const MODEL = "claude-haiku-4-5-20251001"; // fast + inexpensive; swap if desired.

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

  // Only send the model what it needs.
  const catalog = resources.map(function (r) {
    const item = {
      name: String(r.name || ""),
      categories: Array.isArray(r.categories) ? r.categories : [],
      audiences: Array.isArray(r.audiences) ? r.audiences : [],
      description: String(r.description || "")
    };
    if (r.details) item.details = String(r.details);
    if (Array.isArray(r.links) && r.links.length) item.links = r.links;
    return item;
  });

  const system =
    "You are the CloseConnect advisor for University of San Diego (USD) students, grad students, and alumni. " +
    "A person describes their situation and you recommend the most relevant resources ONLY from the provided catalog. " +
    "Voice: warm, concise, specific — like a helpful fellow USD student, never a marketing brochure. Address the person directly ('you'). " +
    "Use the 'details' and 'links' fields to give genuinely useful, specific help — students find it hard to click through many pages, so surface the key facts (deadlines, how to start, cost, where to go, phone numbers) directly in your answer and in each reason. " +
    "When a resource's 'links' entry directly answers the person (e.g. a signup page or networking platform like T.E.A.M.), you may name it in the reason. " +
    "Rules: recommend 3 to 6 resources, most relevant first. Use resource names EXACTLY as written in the catalog. " +
    "Never invent resources, links, or facts. If nothing fits well, say so honestly and suggest the closest option. " +
    "SAFETY FIRST: If the message suggests distress or crisis — a mental-health struggle, thoughts of self-harm, food or housing insecurity, abuse, or fear for their safety — open your answer with genuine warmth and care, gently point them to the most relevant support (such as the Counseling Center), and include crisis options directly in the answer: the 988 Suicide & Crisis Lifeline (call or text 988, 24/7) and the Crisis Text Line (text HOME to 741741). Never diagnose, minimize, or lecture; lead with care, then still recommend the helpful resources. " +
    "Respond with ONLY valid JSON (no markdown, no code fences) in exactly this shape: " +
    '{"answer":"2-3 warm sentences speaking directly to them","recommendations":[{"name":"exact catalog name","reason":"one short sentence on why it fits their situation"}]}';

  const userContent =
    "Situation / question:\n" + question +
    "\n\nResource catalog (JSON):\n" + JSON.stringify(catalog);

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
      const errText = await resp.text();
      return json(502, { error: "The advisor had trouble responding.", detail: errText.slice(0, 300) });
    }

    const data = await resp.json();
    const text = (data && data.content && data.content[0] && data.content[0].text) || "";
    const parsed = safeJson(text);

    if (!parsed || !Array.isArray(parsed.recommendations)) {
      // Model didn't return clean JSON — hand back what we have so the UI can cope.
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
