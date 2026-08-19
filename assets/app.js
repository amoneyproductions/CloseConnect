/* ============================================================================
   CloseConnect, app logic
   ----------------------------------------------------------------------------
   Reads CC_SCHOOL (data/school.js) and CC_RESOURCES (data/resources.js) and
   renders the directory. Two modes:

     • Browse mode (search box empty): filter by the active tab + category chip.
     • Ask mode (search box has text): understand the CONCEPTS in a student's
       question and rank every resource by how well it fits, newest/best first,
       with a short "why it fits" line on each card. No backend, no API, the
       concept map below does the matching entirely in the browser.

   You shouldn't need to edit this file to add resources or launch a new school.
   To tune matching, add `keywords` to a resource (data/resources.js) or extend
   the CONCEPTS list below.
   ============================================================================ */

(function () {
  "use strict";

  var school = window.CC_SCHOOL || {};
  var allResources = (window.CC_RESOURCES || []).filter(function (r) {
    return !school.id || r.school === school.id;
  });

  // --- App state ---
  var state = {
    audience: "all", // active tab; "all" shows everything (browse mode only)
    category: "all",
    query: ""
  };

  /* ---------------------------------------------------------------------------
     CONCEPTS, the heart of the "ask" search.
     Each concept has a friendly `label` (shown in the "why it fits" line) and a
     list of `words`/phrases that signal it, in BOTH a student's question and a
     resource's text. Substring matching, so "collaborat" catches collaborate /
     collaboration. Order doesn't matter.
     ------------------------------------------------------------------------- */
  var CONCEPTS = [
    { key: "interdisciplinary", label: "interdisciplinary",
      words: ["interdisciplinary", "any major", "all majors", "any program", "any discipline",
              "regardless of", "cross-major", "cross major", "different major", "other major",
              "outside my major", "mix of majors"] },
    { key: "team", label: "team up",
      words: ["team", "teammate", "team up", "find your people", "find teammates", "connect",
              "collaborat", "work with", "working with", "partner", "co-founder", "cofounder",
              "community", "meet other", "group project", "join forces", "network"] },
    { key: "competition", label: "competition",
      words: ["competition", "challenge", "contest", "pitch", "hackathon", "compete",
              "award", "race", "tournament"] },
    { key: "engineering", label: "engineering / CS",
      words: ["engineering", "engineer", "computer science", "comp sci", "cs major", "cs student",
              "software", "technology", "technology component", "technical", "coding", "developer",
              "website", "web app", "stem", "robot", "hardware", "data science", "prototype"] },
    { key: "business", label: "business",
      words: ["business", "marketing", "entrepreneur", "startup", "start-up", "venture", "founder",
              "company", "product", "consulting", "commerce", "finance", "sales", "business idea",
              "startup idea", "my idea"] },
    { key: "social", label: "social impact",
      words: ["social impact", "social innovation", "sustainab", "changemaker", "nonprofit",
              "non-profit", "social good", "peace", "equity", "justice", "environment", "community impact"] },
    { key: "funding", label: "funding",
      words: ["funding", "scholarship", "prize", "seed money", "seed funding", "investor",
              "invest", "grant", "cash prize", "win money"] },
    { key: "career", label: "careers",
      words: ["job", "internship", "career", "resume", "cv", "hiring", "employer", "interview",
              "professional development", "work experience", "full-time", "recruit"] },
    { key: "writing", label: "writing help",
      words: ["writing", "essay", "paper", "thesis", "dissertation", "apa", "proofread", "editing my"] },
    { key: "academic", label: "academic support",
      words: ["tutor", "tutoring", "math help", "logic", "study skills", "academic support",
              "advising", "struggling in", "failing", "help in class"] },
    { key: "wellness", label: "wellness",
      words: ["counsel", "mental health", "wellness", "stress", "anxiety", "therap", "wellbeing",
              "well-being", "sick", "doctor", "medical", "disability", "accommodation"] },
    { key: "law", label: "law school",
      words: ["law school", "legal", "bar exam", " jd ", "attorney", "lawyer", "law student"] },
    { key: "graduate", label: "graduate",
      words: ["grad student", "graduate", "master", "mba", "phd", "doctoral", "grad program"] },
    { key: "alumni", label: "alumni",
      words: ["alumni", "alum", "graduated", "after graduation", "after i graduate", "former student"] }
  ];

  // Categories that a concept should extra-reward when matched.
  var CATEGORY_BOOST = {
    competition: "Competitions",
    career: "Career",
    wellness: "Wellness",
    writing: "Academic Support",
    academic: "Academic Support"
  };

  var STOPWORDS = {
    "the":1,"and":1,"for":1,"are":1,"but":1,"not":1,"you":1,"any":1,"can":1,"has":1,"have":1,
    "with":1,"who":1,"how":1,"there":1,"that":1,"this":1,"from":1,"they":1,"what":1,"was":1,
    "i":1,"a":1,"an":1,"to":1,"of":1,"in":1,"is":1,"it":1,"my":1,"me":1,"am":1,"or":1,"so":1,
    "on":1,"at":1,"as":1,"be":1,"do":1,"we":1,"if":1,"by":1,"need":1,"needs":1,"want":1,"wants":1,
    "looking":1,"help":1,"student":1,"students":1,"usd":1,"like":1,"some":1,"other":1,"ways":1,"way":1,
    "where":1,"get":1,"about":1,"into":1,"around":1,"really":1,"just":1,"also":1,"best":1,"good":1,
    "there":1,"here":1,"more":1,"find":1,"getting":1,"where's":1,"could":1,"would":1,"should":1
  };

  // --- Element refs ---
  var els = {
    brandLogo: document.getElementById("brandLogo"),
    brandSchool: document.getElementById("brandSchool"),
    heroTagline: document.getElementById("heroTagline"),
    heroIntro: document.getElementById("heroIntro"),
    footerNote: document.getElementById("footerNote"),
    tabs: document.getElementById("tabs"),
    search: document.getElementById("search"),
    categoryFilters: document.getElementById("categoryFilters"),
    results: document.getElementById("results"),
    resultCount: document.getElementById("resultCount"),
    emptyState: document.getElementById("emptyState"),
    clearAll: document.getElementById("clearAll"),
    askAi: document.getElementById("askAi"),
    advisor: document.getElementById("advisor"),
    eventsBox: document.getElementById("eventsBox")
  };

  // Events panel shows on the home/browse view, hides while the advisor answers.
  function setEventsVisible(v) {
    if (els.eventsBox) els.eventsBox.hidden = !(v && (window.CC_EVENTS || []).length);
  }

  // True while advisor results (AI answer or the AI-down fallback) are on screen,
  // so browsing (tabs/chips) or editing the box returns to the plain directory.
  var specialMode = false;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Render resource details with ALL-CAPS section labels bolded and each on its
  // own line, so long descriptions read as tidy titled sections.
  function formatDetails(s) {
    var esc = escapeHtml(String(s || ""));
    esc = esc.replace(/\b([A-Z][A-Z0-9]*(?: [A-Z0-9]+)*:)/g, "<strong>$1</strong>");
    esc = esc.replace(/\s*<strong>/g, "<br><br><strong>").replace(/^(?:<br>)+/, "");
    return esc;
  }
  function hideAdvisor() {
    els.advisor.hidden = true;
    els.advisor.innerHTML = "";
  }
  // Leave advisor/fallback view and return to the browsable directory.
  function exitSpecial() {
    if (specialMode) {
      specialMode = false;
      state.query = "";
      hideAdvisor();
      setEventsVisible(true);
      render();
    }
  }

  // --- Daily AI question limit (cost control while unlicensed) ---
  // Counts per browser per day via localStorage. Set aiUnlimited in school.js
  // (e.g. once the school licenses CloseConnect) to lift the cap.
  var AI_LIMIT = school.aiUnlimited ? Infinity :
    (typeof school.aiDailyLimit === "number" ? school.aiDailyLimit : 5);
  function aiDayKey() {
    var d = new Date();
    return "cc_ai_" + d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  function aiUsedToday() {
    try { return parseInt(localStorage.getItem(aiDayKey()) || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function aiBumpToday() {
    try { localStorage.setItem(aiDayKey(), String(aiUsedToday() + 1)); }
    catch (e) {}
  }
  // Owner unlock: visiting with ?owner=<secret> stores that key in this browser and
  // sends it with each advisor request; the server grants unlimited only if it matches
  // the private OWNER_KEY env var. ?owner=off clears it. Returns the stored key ("" if none).
  function ownerToken() {
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.has("owner")) {
        var v = params.get("owner");
        if (v === "off") localStorage.removeItem("cc_owner_key");
        else if (v) localStorage.setItem("cc_owner_key", v);
      }
      return localStorage.getItem("cc_owner_key") || "";
    } catch (e) { return ""; }
  }
  function isOwner() { return !!ownerToken(); }

  // Anonymous usage logging for proof-of-use stats. Stores no student text,
  // only that a question was asked and which resources were recommended.
  // Fire-and-forget: never blocks the UI, never surfaces an error.
  function logStats(picks) {
    try {
      fetch("/.netlify/functions/stats", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ picks: Array.isArray(picks) ? picks.slice(0, 8) : [] }),
        keepalive: true
      }).catch(function () {});
    } catch (e) {}
  }

  // Count a flyer/QR scan when the page is opened with ?ref=... Fire-and-forget:
  // never blocks the UI, never surfaces an error. Powers the flyer stats.
  function pingRef() {
    try {
      var ref = new URLSearchParams(window.location.search).get("ref");
      if (!ref) return;
      fetch("/.netlify/functions/stats", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ event: "scan", ref: String(ref).slice(0, 60) }),
        keepalive: true
      }).catch(function () {});
    } catch (e) {}
  }

  // Animated "sun" loader (USD-blue tribal sun): rays rotate, bullseye pulses.
  var SUN_LOADER = (function () {
    var rays = "", N = 16, i, a, tipR;
    for (i = 0; i < N; i++) {
      a = (360 / N) * i;
      tipR = (i % 2 === 0) ? 47 : 39; // alternate long/short spikes
      rays += '<polygon points="47,31 53,31 50,' + (50 - tipR) +
        '" transform="rotate(' + a + ' 50 50)"/>';
    }
    return '<svg class="sun-loader" viewBox="0 0 100 100" width="76" height="76" aria-hidden="true">' +
      '<g class="sun-rays" fill="currentColor">' + rays + '</g>' +
      '<g class="sun-core" fill="none" stroke="currentColor" stroke-width="3">' +
      '<circle cx="50" cy="50" r="15"/>' +
      '<circle cx="50" cy="50" r="10"/>' +
      '<circle cx="50" cy="50" r="5" fill="currentColor" stroke="none"/>' +
      '</g></svg>';
  })();

  /* --------------------------------------------------------------------------- */
  function applySchool() {
    var c = school.colors || {};
    var root = document.documentElement;
    var map = {
      "--primary": c.primary, "--accent": c.accent, "--accent-soft": c.accentSoft,
      "--bg": c.bg, "--card": c.card, "--text": c.text, "--muted": c.muted
    };
    Object.keys(map).forEach(function (k) { if (map[k]) root.style.setProperty(k, map[k]); });

    var productName = school.logoText || "Resourceful";
    if (school.logoImage) {
      els.brandLogo.innerHTML =
        '<img src="' + school.logoImage + '" alt="' + productName + '" />';
    } else {
      els.brandLogo.textContent = productName;
    }
    els.brandSchool.textContent = school.name ? school.name : "";
    els.heroTagline.textContent = school.tagline || "";
    els.heroIntro.textContent = school.intro || "";
    els.footerNote.textContent = school.footerNote || "";
    if (school.name) document.title = productName + " · " + (school.shortName || school.name);
  }

  /* ---- Searchable text for a resource (cached) ---- */
  function textOf(r) {
    if (!r.__text) {
      r.__text = (
        r.name + " " + r.description + " " + categoriesOf(r).join(" ") + " " +
        ((r.keywords || []).join(" "))
      ).toLowerCase();
    }
    return r.__text;
  }
  function audiencesOf(r) {
    return r.audiences || (r.audience ? [r.audience] : []);
  }
  // A resource can belong to several categories. Supports a `categories` array
  // or a legacy single `category` string.
  function categoriesOf(r) {
    return r.categories || (r.category ? [r.category] : []);
  }

  /* ---- Category chips (only categories that exist for the active audience) ---- */
  function buildCategoryFilters() {
    var cats = [];
    allResources.forEach(function (r) {
      if (state.audience !== "all" && audiencesOf(r).indexOf(state.audience) === -1) return;
      categoriesOf(r).forEach(function (cat) {
        if (cat && cats.indexOf(cat) === -1) cats.push(cat);
      });
    });
    cats.sort();
    // If the selected category doesn't apply to this audience, fall back to All.
    if (state.category !== "all" && cats.indexOf(state.category) === -1) {
      state.category = "all";
    }
    els.categoryFilters.innerHTML = "";
    var frag = document.createDocumentFragment();
    frag.appendChild(makeChip("all", "All"));
    cats.forEach(function (cat) { frag.appendChild(makeChip(cat, cat)); });
    els.categoryFilters.appendChild(frag);
  }

  // Hide any audience tab that has no resources at all (future-proofing).
  function pruneAudienceTabs() {
    els.tabs.querySelectorAll(".tab").forEach(function (t) {
      var aud = t.getAttribute("data-audience");
      if (aud === "all") return;
      var has = allResources.some(function (r) { return audiencesOf(r).indexOf(aud) !== -1; });
      t.hidden = !has;
    });
  }
  // One small icon + color key per category, keeps chips and cards cohesive
  // and scannable. Colors themselves live in styles.css (via data-cat).
  var CAT_META = {
    "Academic Support": { key: "academic" },
    "Research":         { key: "research" },
    "Community":        { key: "community" },
    "Entrepreneurship": { key: "entrepreneurship" },
    "Career":           { key: "career" },
    "Wellness":         { key: "wellness" },
    "General":          { key: "general" },
    "Engineering & CS": { key: "engineering" },
    "Alumni":           { key: "alumni" },
    "Competitions":     { key: "competitions" }
  };
  function catMeta(name) { return CAT_META[name] || { key: "default" }; }

  // Clean line icons (non-emoji) per category. Inherit color via currentColor.
  var ICONS = {
    academic: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15.5H5.5A1.5 1.5 0 0 0 4 21V5.5Z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15.5h5.5A1.5 1.5 0 0 1 20 21V5.5Z"/>',
    research: '<path d="M9 3h6"/><path d="M10 3v6l-4.6 8.1A2 2 0 0 0 7.1 20h9.8a2 2 0 0 0 1.7-2.9L14 9V3"/><path d="M8 14h8"/>',
    community: '<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 5.5a3 3 0 0 1 0 6"/><path d="M17.5 14.3a5.5 5.5 0 0 1 3 4.7"/>',
    entrepreneurship: '<path d="M9.5 18h5"/><path d="M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.6.6.8 1.1.8 2.4h6c0-1.3.2-1.8.8-2.4A6 6 0 0 0 12 3Z"/>',
    career: '<rect x="3" y="7.5" width="18" height="12.5" rx="2"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>',
    wellness: '<path d="M12 20s-6.5-4.2-6.5-9A3.3 3.3 0 0 1 12 7.4 3.3 3.3 0 0 1 18.5 11c0 4.8-6.5 9-6.5 9Z"/>',
    general: '<path d="M12 3l1.9 5.6L19.5 10 13.9 12 12 17.5 10.1 12 4.5 10l5.6-1.4L12 3Z"/>',
    engineering: '<path d="M8.5 8l-4 4 4 4"/><path d="M15.5 8l4 4-4 4"/><path d="M13.5 6l-3 12"/>',
    alumni: '<path d="M12 4l9 4-9 4-9-4 9-4Z"/><path d="M6.5 10.5V14c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-3.5"/><path d="M21 8.2V13"/>',
    competitions: '<path d="M8 4h8v4.2a4 4 0 0 1-8 0V4Z"/><path d="M8 5.2H5v1a3 3 0 0 0 3 3"/><path d="M16 5.2h3v1a3 3 0 0 1-3 3"/><path d="M9.5 20h5"/><path d="M12 13v4"/><path d="M10 20l.6-3M14 20l-.6-3"/>',
    all: '<rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/>',
    default: '<circle cx="12" cy="12" r="7"/>'
  };
  function catIconSvg(key) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[key] || ICONS.default) + "</svg>";
  }

  function makeChip(value, label) {
    var b = document.createElement("button");
    b.className = "chip" + (value === state.category ? " is-active" : "");
    b.type = "button";
    var chipKey = value === "all" ? "all" : catMeta(value).key;
    b.innerHTML = '<span class="chip-ico">' + catIconSvg(chipKey) + "</span>" + escapeHtml(label);
    b.setAttribute("data-cat", chipKey);
    b.setAttribute("data-category", value);
    b.setAttribute("aria-pressed", value === state.category ? "true" : "false");
    b.addEventListener("click", function () {
      state.category = value;
      specialMode = false;
      state.query = "";
      hideAdvisor();
      setEventsVisible(true);
      syncChips();
      render();
    });
    return b;
  }
  function syncChips() {
    els.categoryFilters.querySelectorAll(".chip").forEach(function (chip) {
      var active = chip.getAttribute("data-category") === state.category;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  /* ---- Tabs ---- */
  function setActiveTab(audience) {
    state.audience = audience;
    els.tabs.querySelectorAll(".tab").forEach(function (t) {
      var active = t.getAttribute("data-audience") === audience;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    buildCategoryFilters(); // chips reflect what exists for this audience
  }
  function wireTabs() {
    els.tabs.addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      if (!tab) return;
      specialMode = false;
      state.query = "";
      hideAdvisor();
      setEventsVisible(true);
      setActiveTab(tab.getAttribute("data-audience"));
      render();
    });
  }

  /* ---- Search ---- */
  function wireSearch() {
    // The search box is AI-only now: typing does NOT filter the directory live.
    // Editing simply leaves any advisor result view and returns to browsing.
    els.search.addEventListener("input", function () {
      if (specialMode) exitSpecial();
    });
    els.search.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); runAdvisor(); }
    });
    els.askAi.addEventListener("click", runAdvisor);
    els.clearAll.addEventListener("click", function () {
      state.query = "";
      state.category = "all";
      els.search.value = "";
      specialMode = false;
      hideAdvisor();
      setEventsVisible(true);
      syncChips();
      render();
      els.search.focus();
    });
  }

  /* ---------------------------------------------------------------------------
     AI advisor (calls the Claude-backed serverless function)
     ------------------------------------------------------------------------- */
  // Emblem-shaped loading spinner shown while the advisor thinks.
  var CC_SPINNER_SVG = '<svg viewBox="163 407 168 168" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M272.1,559.9 C267.4,551.9 263,544.3 258.5,536.7 C257.7,535.3 257.1,533.3 255,533.7 C253,534 252.9,536.1 252.5,537.6 C250.9,543.9 249.5,550.2 247.3,556.6 C244.8,553.2 244.7,549.1 243.4,545.4 C242.1,541.5 242.7,537.1 239.3,533.2 C234.2,537.7 229.5,541.7 230.1,549.3 C230.8,559.2 228.2,562.9 218.8,566 C215.9,566.9 213.5,568.5 210.7,570.6 C209.9,566.8 211.9,564.8 213.9,563.1 C218.5,559.3 220,554.8 217.4,549.4 C214.8,543.6 217.1,538.8 219.8,533.8 C221,531.4 224.2,528.9 221.3,525.8 C218.2,522.6 215.5,525.8 212.9,527.2 C209.3,529.2 205.9,531.4 201.5,534 C202.3,528.6 205.5,525.5 207.4,521.8 C208,520.4 208.9,519.2 209.6,517.9 C210.3,516.7 211.2,515.6 210,514.3 C208.9,513 207.6,513.5 206.3,513.9 C195.5,517.2 184.7,520.6 173.8,523.9 C172.6,524.2 171.5,525.2 169.9,524.5 C169.6,522.5 171.4,522.2 172.5,521.5 C182,515.7 191.5,509.8 201,504 C202.5,503 204.9,502.6 204.5,500.3 C204.2,497.7 201.5,497.9 199.7,497.5 C194,496 188.2,494.8 182.4,492.8 C189.6,488.7 198,488.8 206,485.3 C201.2,479.7 197.1,474.8 189.3,475.4 C180.7,476 177,473.2 174.4,465.2 C173.4,462 172.4,459 169.9,455.9 C173.9,455.5 175.8,457.7 177.6,459.8 C181,463.6 184.8,464.9 189.6,463.1 C195.9,460.7 200.9,463.7 206.1,466.4 C208,467.3 209.9,469.8 212.3,467.2 C214.6,464.8 213.5,462.4 212.2,459.9 C209.9,455.7 206.8,451.9 205,446.9 C209.4,447.1 211.6,450.4 214.8,451.8 C216.3,452.5 217.6,453.6 219,454.5 C220.5,455.4 221.8,457 223.9,455.6 C226.1,454.1 225,452.3 224.6,450.6 C221.9,440.7 219.1,430.7 216.4,420.8 C215.8,418.6 215.3,416.4 214.7,414 C217.5,414 217.6,416 218.3,417.3 C223.9,427 229.4,436.7 234.9,446.4 C235.8,447.9 236.6,450 238.9,449.5 C241,449 241,446.9 241.3,445.4 C242.5,440.8 243.5,436 244.6,431.3 C244.9,429.8 244.7,427.9 247,426.8 C250.1,434.3 250,442.8 254.1,450.7 C259.3,446.5 263.8,442.7 263.8,435.7 C263.8,425.3 265.5,422.9 275.2,419.7 C278,418.7 280.5,417.3 283.1,414.4 C283.9,418.6 282.3,420.9 280.1,422.6 C275.4,426.3 274.4,430.8 276.5,436.4 C278.1,440.5 277.4,444.5 275.1,448.3 C274,450.2 273.1,452.1 272.2,454.1 C271.5,455.5 271.1,456.9 272.6,458.1 C274,459.2 275.4,459.9 277.2,458.9 C280.8,456.8 284.4,454.8 288.1,452.9 C289.4,452.2 290.5,450.9 292.7,451.7 C291,456.5 287.7,460.2 285.3,464.4 C284.3,466.2 282.2,467.9 283.8,470.3 C285.5,472.9 287.7,470.9 289.6,470.4 C300.4,467.4 311.1,464.3 321.8,461.3 C322.6,461 323.4,460.8 324.8,462.1 C312.7,469.2 300.7,476.3 287.6,484 C296.1,488.9 304.2,488.5 312.4,492.2 C303.9,495.4 295.9,496 288.1,499.9 C293.1,504.7 296.7,509.4 304,509 C313.5,508.5 317.1,511.4 319.7,520.7 C320.6,524 322.6,526.5 325,529.7 C321.1,529.9 319,528.1 317.3,526 C313.2,521 308.7,519.2 302.3,521.7 C296.8,523.9 292,520.9 287.4,518.1 C285.6,517.1 283.8,514.5 281.3,516.7 C278.7,519 279.8,521.4 281.2,523.9 C283.6,528.1 285.8,532.3 288.8,537.8 C282.7,535.9 279.1,532.3 275,529.9 C273.2,528.9 271.7,526.4 269.3,528.1 C267.1,529.7 268.6,532.1 269.1,534.1 C272.1,544.1 275.2,554.2 278.1,564.2 C278.6,565.9 279.8,567.5 278.8,569.9 C275.3,567.4 274.6,563.2 272.1,559.9 M264.7,519.3 C266.3,518 267.9,516.8 269.3,515.5 C280.3,505.4 282.8,489.6 275.6,476.2 C268.7,463.1 253.3,456.7 238,460.5 C224.7,463.8 214.6,476.9 214.3,491 C213.9,517.2 240.6,532.6 264.7,519.3 z"/><path fill="currentColor" d="M219,494.6 C218.5,477.5 228.2,466.1 244.6,464.1 C257.6,462.5 271.4,472.6 274.2,485.8 C277.4,501.1 268,516 253,519.2 C237.6,522.5 223,513.1 219.5,497.5 C219.4,496.7 219.2,495.9 219,494.6 M262.4,504.9 C263.4,503.3 264.5,501.8 265.3,500.2 C268.9,492.6 266.8,482.4 260.5,476.9 C253.8,470.9 242.4,470.2 235,475.3 C228.2,479.9 224.8,489.9 227.4,497.9 C232.3,513 250.1,516.9 262.4,504.9 z"/><path fill="currentColor" d="M239,477.6 C245.7,474.4 251.7,475.2 257.1,479.6 C261.7,483.4 263.7,488.7 262.6,494.7 C261.3,502.2 255.4,507.7 248.6,508.2 C240.9,508.8 234,504.3 231.4,497.1 C228.8,489.6 231.3,482.8 239,477.6 M239.6,486.1 C236,492.8 238.2,499.2 244.5,500.7 C248.8,501.7 253.1,499.7 254.9,495.8 C256.7,491.7 256,487.9 252.6,484.9 C248.8,481.6 244.9,481.8 239.6,486.1 z"/></svg>';

  function runAdvisor() {
    var q = els.search.value.trim();
    if (q.length < 6) { exitSpecial(); return; } // nothing to ask

    // Daily limit reached, explain and let them keep browsing.
    // (Owners are unlimited — see isOwner / ?owner= unlock.)
    if (!isOwner() && aiUsedToday() >= AI_LIMIT) {
      specialMode = true;
      setActiveTab("all");
      setEventsVisible(false);
      els.results.innerHTML = "";
      els.resultCount.textContent = "";
      els.emptyState.hidden = true;
      els.advisor.hidden = false;
      els.advisor.innerHTML = '<p class="advisor-answer">You’ve used your ' + AI_LIMIT +
        ' questions for today, they reset tomorrow. You can still browse and search every resource below.</p>';
      return;
    }

    specialMode = true;
    setActiveTab("all");
    setEventsVisible(false);
    els.emptyState.hidden = true;
    els.results.innerHTML = "";
    els.resultCount.textContent = "";
    els.askAi.disabled = true;
    els.advisor.hidden = false;
    els.advisor.innerHTML =
      '<div class="advisor-spinner" role="status" aria-label="Searching">' + CC_SPINNER_SVG + '</div>';

    if (!isOwner()) aiBumpToday(); // count this question (owners are unlimited)

    var payload = {
      question: q,
      resources: allResources.map(function (r) {
        return {
          name: r.name,
          categories: categoriesOf(r),
          audiences: audiencesOf(r),
          description: r.description,
          details: r.details,
          links: r.links
        };
      }),
      events: (window.CC_EVENTS || []).map(function (e) {
        return { title: e.title, when: e.when, note: e.note, findAt: e.findAt };
      }),
      ownerKey: ownerToken()
    };

    fetch("/.netlify/functions/advisor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (res.status === 429) {
          return res.json().then(function (d) {
            throw { rate: true, msg: (d && d.error) || "You've reached today's question limit." };
          });
        }
        if (!res.ok) throw new Error("status " + res.status);
        return res.json();
      })
      .then(function (data) {
        els.askAi.disabled = false;
        renderAdvisor(data, q);
        var picks = (data && Array.isArray(data.recommendations))
          ? data.recommendations.map(function (x) { return x && x.name; }).filter(Boolean)
          : [];
        logStats(picks);
      })
      .catch(function (err) {
        els.askAi.disabled = false;
        // Hit the daily limit: show the friendly cap message, not a failure.
        if (err && err.rate) {
          els.advisor.hidden = false;
          els.advisor.innerHTML =
            '<div class="advisor-head"><span class="advisor-badge advisor-badge--muted">Daily limit reached</span></div>' +
            '<p class="advisor-note">' + escapeHtml(err.msg) + '</p>';
          return;
        }
        // Otherwise never leave the student stranded, fall back to keyword matches.
        specialMode = true;
        els.advisor.hidden = false;
        els.advisor.innerHTML =
          '<div class="advisor-head"><span class="advisor-badge advisor-badge--muted">Advisor unavailable</span></div>' +
          '<p class="advisor-note">Couldn’t reach the advisor just now, here are keyword matches instead.</p>';
        state.query = q;
        render();
        logStats([]); // still count the question
      });
  }

  function renderAdvisor(data, q) {
    var recs = (data && Array.isArray(data.recommendations)) ? data.recommendations : [];
    var byName = {};
    allResources.forEach(function (r) { byName[r.name.toLowerCase()] = r; });

    var matched = [];
    recs.forEach(function (rec) {
      var r = byName[String(rec.name || "").toLowerCase()];
      if (r && matched.indexOf(r) === -1) matched.push({ r: r, reason: rec.reason });
    });

    var answer = (data && data.answer) ? String(data.answer) : "";
    if (answer) {
      els.advisor.hidden = false;
      els.advisor.innerHTML = '<p class="advisor-answer">' + escapeHtml(answer) + "</p>";
    } else {
      hideAdvisor();
    }

    els.results.innerHTML = "";
    if (!matched.length) {
      // AI gave prose but no matchable picks, show concept matches underneath.
      state.query = q;
      var res = currentResults();
      els.resultCount.textContent = res.items.length
        ? "Related resources, " + res.items.length : "";
      var f0 = document.createDocumentFragment();
      res.items.forEach(function (item) { f0.appendChild(makeCard(item.r, item.reasons)); });
      els.results.appendChild(f0);
      return;
    }

    els.emptyState.hidden = true;
    els.resultCount.textContent =
      "Advisor picked " + matched.length + " resource" + (matched.length === 1 ? "" : "s");
    var frag = document.createDocumentFragment();
    matched.forEach(function (m) { frag.appendChild(makeCard(m.r, m.reason || "")); });
    els.results.appendChild(frag);
  }

  /* ---------------------------------------------------------------------------
     Ask-mode scoring
     ------------------------------------------------------------------------- */
  function analyzeQuery(q) {
    var lower = " " + q.toLowerCase() + " ";
    var concepts = [];
    CONCEPTS.forEach(function (concept) {
      for (var i = 0; i < concept.words.length; i++) {
        if (lower.indexOf(concept.words[i]) !== -1) { concepts.push(concept); break; }
      }
    });
    var tokens = lower.split(/[^a-z0-9]+/).filter(function (t) {
      return t.length >= 3 && !STOPWORDS[t];
    });
    return { concepts: concepts, tokens: tokens };
  }

  function scoreResource(r, analysis) {
    var text = textOf(r);
    var kw = (r.keywords || []).join(" ").toLowerCase();
    var name = r.name.toLowerCase();
    var score = 0;
    var reasons = [];

    // Concept matches (the smart part)
    analysis.concepts.forEach(function (concept) {
      var hit = false;
      for (var i = 0; i < concept.words.length; i++) {
        if (text.indexOf(concept.words[i]) !== -1) { hit = true; break; }
      }
      if (hit) {
        score += 3;
        var cats = categoriesOf(r);
        if (cats.indexOf(CATEGORY_BOOST[concept.key]) !== -1) score += 3;
        if (concept.key === "team" &&
            (cats.indexOf("Competitions") !== -1 || cats.indexOf("Entrepreneurship") !== -1)) score += 2;
        if ((concept.key === "graduate" || concept.key === "law") &&
            audiencesOf(r).indexOf("graduate") !== -1) score += 2;
        if (concept.key === "alumni" && audiencesOf(r).indexOf("alumni") !== -1) score += 2;
        if (reasons.indexOf(concept.label) === -1) reasons.push(concept.label);
      }
    });

    // Raw keyword/token overlap (catches specifics the concepts miss)
    analysis.tokens.forEach(function (t) {
      if (name.indexOf(t) !== -1) score += 3;
      else if (kw.indexOf(t) !== -1) score += 2;
      else if (text.indexOf(t) !== -1) score += 1;
    });

    return { score: score, reasons: reasons.slice(0, 3) };
  }

  /* ---------------------------------------------------------------------------
     Build the current result set
     ------------------------------------------------------------------------- */
  function currentResults() {
    if (!state.query) {
      // Browse mode: filter by tab + category, sort by category then name.
      var list = allResources.filter(function (r) {
        if (state.audience !== "all" && audiencesOf(r).indexOf(state.audience) === -1) return false;
        if (state.category !== "all" && categoriesOf(r).indexOf(state.category) === -1) return false;
        return true;
      });
      list.sort(function (a, b) {
        var ca = categoriesOf(a)[0] || "", cb = categoriesOf(b)[0] || "";
        if (ca !== cb) return ca < cb ? -1 : 1;
        return a.name < b.name ? -1 : 1;
      });
      return { mode: "browse", items: list.map(function (r) { return { r: r, reasons: [] }; }) };
    }

    // Ask mode: rank everyone by relevance (ignores the audience tab).
    var analysis = analyzeQuery(state.query);
    var scored = [];
    allResources.forEach(function (r) {
      if (state.category !== "all" && categoriesOf(r).indexOf(state.category) === -1) return;
      var s = scoreResource(r, analysis);
      // Require a real signal (a concept or a name/keyword hit), not one stray word.
      if (s.score >= 3) scored.push({ r: r, score: s.score, reasons: s.reasons });
    });
    scored.sort(function (a, b) {
      return b.score - a.score || (a.r.name < b.r.name ? -1 : 1);
    });
    return { mode: "ask", items: scored };
  }

  function render() {
    var res = currentResults();
    els.results.innerHTML = "";

    if (res.items.length === 0) {
      els.emptyState.hidden = false;
      els.resultCount.textContent = "";
      return;
    }
    els.emptyState.hidden = true;

    if (res.mode === "ask") {
      var n = res.items.length;
      els.resultCount.textContent =
        "Best matches for your question, " + n + " result" + (n === 1 ? "" : "s");
    } else {
      var noun = res.items.length === 1 ? "resource" : "resources";
      els.resultCount.textContent = res.items.length + " " + noun;
    }

    var frag = document.createDocumentFragment();
    res.items.forEach(function (item) { frag.appendChild(makeCard(item.r, item.reasons)); });
    els.results.appendChild(frag);
  }

  function makeCard(r, why) {
    var card = document.createElement("article");
    card.className = "card";
    var firstCat = categoriesOf(r)[0];
    if (firstCat) card.setAttribute("data-cat", catMeta(firstCat).key);

    var top = document.createElement("div");
    top.className = "card-top";
    var name = document.createElement("h2");
    name.className = "card-name";
    name.textContent = r.name;
    top.appendChild(name);
    card.appendChild(top);

    // Category tags, a resource can belong to more than one bucket.
    var cats = categoriesOf(r);
    if (cats.length) {
      var tags = document.createElement("div");
      tags.className = "card-tags";
      cats.forEach(function (cat) {
        var mk = catMeta(cat).key;
        var tag = document.createElement("span");
        tag.className = "card-tag";
        tag.setAttribute("data-cat", mk);
        tag.innerHTML = '<span class="tag-ico">' + catIconSvg(mk) + "</span>" + escapeHtml(cat);
        tags.appendChild(tag);
      });
      card.appendChild(tags);
    }

    // "Why it fits" line, an AI sentence (string) or concept chips (array).
    if (why) {
      var whyEl = document.createElement("p");
      whyEl.className = "card-why";
      if (typeof why === "string") {
        whyEl.innerHTML = '<span class="why-label">Why this fits:</span> ' + escapeHtml(why);
        card.appendChild(whyEl);
      } else if (why.length) {
        whyEl.innerHTML = '<span class="why-label">Why this fits:</span> ' +
          why.map(function (x) { return '<span class="why-chip">' + escapeHtml(x) + '</span>'; }).join(" ");
        card.appendChild(whyEl);
      }
    }

    var desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = r.description;
    card.appendChild(desc);

    if (r.location) {
      var meta = document.createElement("p");
      meta.className = "card-meta";
      meta.textContent = r.location;
      card.appendChild(meta);
    }

    // "More info" expander, surfaces richer detail + secondary links inline
    // so students don't have to click out to learn the basics.
    if (r.details || (r.links && r.links.length)) {
      var moreBtn = document.createElement("button");
      moreBtn.className = "card-more";
      moreBtn.type = "button";
      moreBtn.textContent = "More info";
      moreBtn.setAttribute("aria-expanded", "false");

      var panel = document.createElement("div");
      panel.className = "card-details";
      panel.hidden = true;

      if (r.details) {
        var dtext = document.createElement("p");
        dtext.className = "card-details-text";
        dtext.innerHTML = formatDetails(r.details);
        panel.appendChild(dtext);
      }
      if (r.links && r.links.length) {
        var linkWrap = document.createElement("div");
        linkWrap.className = "card-links";
        r.links.forEach(function (lnk) {
          if (!lnk || !lnk.url) return;
          var a = document.createElement("a");
          a.href = lnk.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.className = "card-sublink";
          a.textContent = "→ " + (lnk.label || lnk.url);
          linkWrap.appendChild(a);
        });
        panel.appendChild(linkWrap);
      }

      moreBtn.addEventListener("click", function () {
        var opening = panel.hidden;
        panel.hidden = !opening;
        moreBtn.textContent = opening ? "Less" : "More info";
        moreBtn.setAttribute("aria-expanded", opening ? "true" : "false");
      });

      card.appendChild(moreBtn);
      card.appendChild(panel);
    }

    var foot = document.createElement("div");
    foot.className = "card-foot";
    var link = document.createElement("a");
    link.className = "card-link";
    link.href = r.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML =
      'Visit <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    foot.appendChild(link);

    if (r.verify) {
      var flag = document.createElement("span");
      flag.className = "verify-flag";
      flag.textContent = "Verify link";
      flag.title = "This link or name still needs a final check before sharing widely.";
      foot.appendChild(flag);
    }
    card.appendChild(foot);
    card.appendChild(makeFeedback(r.name));
    return card;
  }

  /* ---- Feedback (captured by Netlify Forms) ---- */
  function submitFeedback(resource, vote) {
    try {
      var data = new URLSearchParams();
      data.append("form-name", "feedback");
      data.append("resource", resource || "");
      data.append("vote", vote || "");
      data.append("note", "");
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString()
      });
    } catch (e) {}
  }
  function makeFeedback(name) {
    var wrap = document.createElement("div");
    wrap.className = "card-feedback";
    var q = document.createElement("span");
    q.className = "fb-q";
    q.textContent = "Helpful?";
    wrap.appendChild(q);
    function send(vote) {
      submitFeedback(name, vote);
      wrap.innerHTML = '<span class="fb-thanks">Thanks, noted!</span>';
    }
    var THUMB =
      '<svg class="fb-ico" viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M13.5 9V5.6a2 2 0 0 0-2-2 .8.8 0 0 0-.73.47L8 10.2V20h8.9a1.6 1.6 0 0 0 1.57-1.28l1.2-6A1.6 1.6 0 0 0 18.1 9H13.5Z" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>' +
      '<path d="M8 10.2H5.6A1.1 1.1 0 0 0 4.5 11.3v7.6A1.1 1.1 0 0 0 5.6 20H8" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
    [["up", "Helpful"], ["down", "Not helpful"]].forEach(function (v) {
      var b = document.createElement("button");
      b.className = "fb-btn fb-btn--" + v[0];
      b.type = "button";
      b.innerHTML = THUMB;
      b.setAttribute("aria-label", v[1]);
      b.setAttribute("title", v[1]);
      b.addEventListener("click", function () { send(v[0]); });
      wrap.appendChild(b);
    });
    var rep = document.createElement("button");
    rep.className = "fb-report";
    rep.type = "button";
    rep.textContent = "Report broken link";
    rep.addEventListener("click", function () { send("broken-link"); });
    wrap.appendChild(rep);
    return wrap;
  }

  /* ---- Upcoming deadlines & events ---- */
  function renderEvents() {
    var box = document.getElementById("eventsBox");
    var list = document.getElementById("eventsList");
    if (!box || !list) return;
    var events = window.CC_EVENTS || [];
    if (!events.length) { box.hidden = true; return; }
    var frag = document.createDocumentFragment();
    events.forEach(function (ev) {
      var row = document.createElement("div");
      row.className = "event-row";
      var when;
      if (ev.link) {
        when = document.createElement("a");
        when.href = ev.link;
        when.target = "_blank";
        when.rel = "noopener noreferrer";
      } else {
        when = document.createElement("span");
      }
      when.className = "event-when";
      when.textContent = ev.when || "";
      var body = document.createElement("div");
      body.className = "event-body";
      var t;
      if (ev.link) {
        t = document.createElement("a");
        t.href = ev.link;
        t.target = "_blank";
        t.rel = "noopener noreferrer";
      } else {
        t = document.createElement("span");
      }
      t.className = "event-title";
      t.textContent = ev.title || "";
      var n = document.createElement("p");
      n.className = "event-note";
      n.textContent = ev.note || "";
      body.appendChild(t);
      body.appendChild(n);
      if (ev.findAt) {
        var f = document.createElement("p");
        f.className = "event-find";
        f.textContent = "Where to find it: " + ev.findAt;
        body.appendChild(f);
      }
      row.appendChild(when);
      row.appendChild(body);
      frag.appendChild(row);
    });
    list.appendChild(frag);
  }

  /* ---- Init ---- */
  function init() {
    pingRef();
    applySchool();
    pruneAudienceTabs();
    buildCategoryFilters();
    wireTabs();
    wireSearch();
    renderEvents();
    setEventsVisible(true);
    render();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
