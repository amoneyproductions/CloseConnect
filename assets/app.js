/* ============================================================================
   CloseConnect — app logic
   ----------------------------------------------------------------------------
   Reads CC_SCHOOL (data/school.js) and CC_RESOURCES (data/resources.js) and
   renders a filterable directory. No frameworks, no build step, no server
   required — open index.html directly in a browser.

   You shouldn't need to edit this file to add resources or launch a new school.
   ============================================================================ */

(function () {
  "use strict";

  var school = window.CC_SCHOOL || {};
  var allResources = (window.CC_RESOURCES || []).filter(function (r) {
    // Only show resources that belong to the active school.
    return !school.id || r.school === school.id;
  });

  // --- App state ---
  var state = {
    audience: "undergrad", // matches the default active tab
    category: "all",
    query: ""
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

  /* ---------------------------------------------------------------------------
     Theme + school branding
     ------------------------------------------------------------------------- */
  function applySchool() {
    var c = school.colors || {};
    var root = document.documentElement;
    var map = {
      "--primary": c.primary,
      "--accent": c.accent,
      "--accent-soft": c.accentSoft,
      "--bg": c.bg,
      "--card": c.card,
      "--text": c.text,
      "--muted": c.muted
    };
    Object.keys(map).forEach(function (k) {
      if (map[k]) root.style.setProperty(k, map[k]);
    });

    // Logo: image if provided, otherwise text.
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

  /* ---------------------------------------------------------------------------
     Category filter chips (built from whatever categories exist in the data)
     ------------------------------------------------------------------------- */
  function buildCategoryFilters() {
    var cats = [];
    allResources.forEach(function (r) {
      if (r.category && cats.indexOf(r.category) === -1) cats.push(r.category);
    });
    cats.sort();

    var frag = document.createDocumentFragment();
    frag.appendChild(makeChip("all", "All"));
    cats.forEach(function (cat) {
      frag.appendChild(makeChip(cat, cat));
    });
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
    var chips = els.categoryFilters.querySelectorAll(".chip");
    chips.forEach(function (chip) {
      var active = chip.getAttribute("data-category") === state.category;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  /* ---------------------------------------------------------------------------
     Tabs
     ------------------------------------------------------------------------- */
  function wireTabs() {
    els.tabs.addEventListener("click", function (e) {
      var tab = e.target.closest(".tab");
      if (!tab) return;
      state.audience = tab.getAttribute("data-audience");
      els.tabs.querySelectorAll(".tab").forEach(function (t) {
        var active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      render();
    });
  }

  /* ---------------------------------------------------------------------------
     Search
     ------------------------------------------------------------------------- */
  function wireSearch() {
    els.search.addEventListener("input", function () {
      state.query = els.search.value.trim().toLowerCase();
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
     Filtering + rendering
     ------------------------------------------------------------------------- */
  function matches(r) {
    if (r.audience !== state.audience) return false;
    if (state.category !== "all" && r.category !== state.category) return false;
    if (state.query) {
      var hay = (r.name + " " + r.description + " " + r.category).toLowerCase();
      if (hay.indexOf(state.query) === -1) return false;
    }
    return true;
  }

  function render() {
    var list = allResources.filter(matches);

    // Sort by category, then name, for a calm, predictable order.
    list.sort(function (a, b) {
      if (a.category !== b.category) return a.category < b.category ? -1 : 1;
      return a.name < b.name ? -1 : 1;
    });

    els.results.innerHTML = "";
    if (list.length === 0) {
      els.emptyState.hidden = false;
      els.resultCount.textContent = "";
      return;
    }
    els.emptyState.hidden = true;

    var noun = list.length === 1 ? "resource" : "resources";
    els.resultCount.textContent = list.length + " " + noun;

    var frag = document.createDocumentFragment();
    list.forEach(function (r) {
      frag.appendChild(makeCard(r));
    });
    els.results.appendChild(frag);
  }

  function makeCard(r) {
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

  /* ---------------------------------------------------------------------------
     Init
     ------------------------------------------------------------------------- */
  function init() {
    applySchool();
    buildCategoryFilters();
    wireTabs();
    wireSearch();
    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
