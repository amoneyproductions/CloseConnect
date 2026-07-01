/* ============================================================================
   CloseConnect — app logic
   ----------------------------------------------------------------------------
   Reads CC_SCHOOL (data/school.js) and CC_RESOURCES (data/resources.js) and
   renders the directory. Two modes:

     • Browse mode (search box empty): filter by the active tab + category chip.
     • Ask mode (search box has text): understand the CONCEPTS in a student's
       question and rank every resource by how well it fits, newest/best first,
       with a short "why it fits" line on each card. No backend, no API — the
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
     CONCEPTS — the heart of the "ask" search.
     Each concept has a friendly `label` (shown in the "why it fits" line) and a
     list of `words`/phrases that signal it — in BOTH a student's question and a
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
    academic: "Academic Support",
    engineering: "Engineering & CS"
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
    clearAll: document.getElementById("clearAll")
  };

  /* --------------------------------------------------------------------------- */
  function applySchool() {
    var c = school.colors || {};
    var root = document.documentElement;
    var map = {
      "--primary": c.primary, "--accent": c.accent, "--accent-soft": c.accentSoft,
      "--bg": c.bg, "--card": c.card, "--text": c.text, "--muted": c.muted
    };
    Object.keys(map).forEach(function (k) { if (map[k]) root.style.setProperty(k, map[k]); });

    if (school.logoImage) {
      els.brandLogo.innerHTML =
        '<img src="' + school.logoImage + '" alt="' + (school.logoText || "CloseConnect") + '" />';
    } else {
      els.brandLogo.textContent = school.logoText || "CloseConnect";
    }
    els.brandSchool.textContent = school.name ? "· " + school.name : "";
    els.heroTagline.textContent = school.tagline || "";
    els.heroIntro.textContent = school.intro || "";
    els.footerNote.textContent = school.footerNote || "";
    if (school.name) document.title = "CloseConnect · " + (school.shortName || school.name);
  }

  /* ---- Searchable text for a resource (cached) ---- */
  function textOf(r) {
    if (!r.__text) {
      r.__text = (
        r.name + " " + r.description + " " + r.category + " " +
        ((r.keywords || []).join(" "))
      ).toLowerCase();
    }
    return r.__text;
  }
  function audiencesOf(r) {
    return r.audiences || (r.audience ? [r.audience] : []);
  }

  /* ---- Category chips ---- */
  function buildCategoryFilters() {
    var cats = [];
    allResources.forEach(function (r) {
      if (r.category && cats.indexOf(r.category) === -1) cats.push(r.category);
    });
    cats.sort();
    var frag = document.createDocumentFragment();
    frag.appendChild(makeChip("all", "All"));
    cats.forEach(function (cat) { frag.appendChild(makeChip(cat, cat)); });
    els.categoryFilters.appendChild(frag);
  }
  function makeChip(value, label) {
    var b = document.createElement("button");
    b.className = "chip" + (value === state.category ? " is-active" : "");
    b.type = "button";
    b.textContent = label;
    b.setAttribute("data-category", value);
    b.setAttribute("aria-pressed", value === state.category ? "true" : "false");
    b.addEventListener("click", function () {
      state.category = value;
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
  }
  function wireTabs() {
    els.tabs.addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      if (!tab) return;
      setActiveTab(tab.getAttribute("data-audience"));
      render();
    });
  }

  /* ---- Search ---- */
  function wireSearch() {
    els.search.addEventListener("input", function () {
      state.query = els.search.value.trim();
      // Typing a question searches across everyone — reset the tab to "All"
      // so results aren't hidden by the current audience filter.
      if (state.query && state.audience !== "all") setActiveTab("all");
      render();
    });
    els.clearAll.addEventListener("click", function () {
      state.query = "";
      state.category = "all";
      els.search.value = "";
      syncChips();
      render();
      els.search.focus();
    });
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
        if (CATEGORY_BOOST[concept.key] === r.category) score += 3;
        if (concept.key === "team" &&
            (r.category === "Competitions" || r.category === "Entrepreneurship")) score += 2;
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
        if (state.category !== "all" && r.category !== state.category) return false;
        return true;
      });
      list.sort(function (a, b) {
        if (a.category !== b.category) return a.category < b.category ? -1 : 1;
        return a.name < b.name ? -1 : 1;
      });
      return { mode: "browse", items: list.map(function (r) { return { r: r, reasons: [] }; }) };
    }

    // Ask mode: rank everyone by relevance (ignores the audience tab).
    var analysis = analyzeQuery(state.query);
    var scored = [];
    allResources.forEach(function (r) {
      if (state.category !== "all" && r.category !== state.category) return;
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
        "Best matches for your question — " + n + " result" + (n === 1 ? "" : "s");
    } else {
      var noun = res.items.length === 1 ? "resource" : "resources";
      els.resultCount.textContent = res.items.length + " " + noun;
    }

    var frag = document.createDocumentFragment();
    res.items.forEach(function (item) { frag.appendChild(makeCard(item.r, item.reasons)); });
    els.results.appendChild(frag);
  }

  function makeCard(r, reasons) {
    var card = document.createElement("article");
    card.className = "card";

    var top = document.createElement("div");
    top.className = "card-top";
    var name = document.createElement("h2");
    name.className = "card-name";
    name.textContent = r.name;
    var tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = r.category;
    top.appendChild(name);
    top.appendChild(tag);
    card.appendChild(top);

    // "Why it fits" line (ask mode only)
    if (reasons && reasons.length) {
      var why = document.createElement("p");
      why.className = "card-why";
      why.innerHTML = '<span class="why-label">Why this fits:</span> ' +
        reasons.map(function (x) {
          return '<span class="why-chip">' + x + '</span>';
        }).join(" ");
      card.appendChild(why);
    }

    var desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = r.description;
    card.appendChild(desc);

    if (r.location) {
      var meta = document.createElement("p");
      meta.className = "card-meta";
      meta.textContent = "📍 " + r.location;
      card.appendChild(meta);
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
    return card;
  }

  /* ---- Init ---- */
  function init() {
    applySchool();
    buildCategoryFilters();
    wireTabs();
    wireSearch();
    render();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
