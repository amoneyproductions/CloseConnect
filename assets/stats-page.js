/* ============================================================================
   Stats dashboard logic (external so a strict Content-Security-Policy can
   forbid inline scripts site-wide). Owner-only; reads ?key= and calls the
   stats function. No student personal data is ever shown.
   ============================================================================ */
(function () {
  function qs(name) { try { return new URLSearchParams(location.search).get(name) || ""; } catch (e) { return ""; } }
  var key = qs("key");
  var content = document.getElementById("content");

  function askForKey(note) {
    content.innerHTML =
      '<div class="msg"><div>' + (note || "Enter your stats key to view the numbers.") + '</div>' +
      '<div><input id="k" type="text" placeholder="your STATS_KEY" /><button id="go">View</button></div>' +
      '<p class="foot">This is the same secret you set as STATS_KEY in Netlify.</p></div>';
    document.getElementById("go").onclick = function () {
      var v = document.getElementById("k").value.trim();
      if (v) location.search = "?key=" + encodeURIComponent(v);
    };
    document.getElementById("k").addEventListener("keydown", function (e) { if (e.key === "Enter") document.getElementById("go").click(); });
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  function render(data) {
    var total = data.totalQuestions || 0;
    var byDay = data.byDay || {};
    var days = Object.keys(byDay).sort();
    var daysActive = days.length;
    var peak = 0; days.forEach(function (d) { if (byDay[d] > peak) peak = byDay[d]; });
    var top = data.topResources || [];

    document.getElementById("asOf").textContent = "as of " + new Date().toLocaleDateString();

    var recent = days.slice(-30);
    var max = 1; recent.forEach(function (d) { if (byDay[d] > max) max = byDay[d]; });
    var bars = recent.map(function (d) {
      var h = Math.max(4, Math.round((byDay[d] / max) * 160));
      return '<div class="bar" style="height:' + h + 'px"><span>' + byDay[d] + '</span></div>';
    }).join("");
    var xlabels = recent.map(function (d) { var p = d.split("-"); return '<div>' + p[1] + '/' + p[2] + '</div>'; }).join("");

    var topMax = top.length ? top[0].count : 1;
    var topHtml = top.map(function (r, i) {
      var w = Math.round((r.count / topMax) * 100);
      return '<li><span class="rank">' + (i + 1) + '</span><span class="name">' + esc(r.name) + '</span>' +
             '<span class="meter"><i style="width:' + w + '%"></i></span><span class="count">' + r.count + '</span></li>';
    }).join("");

    var scans = data.flyerScans || [];
    var scanMax = scans.length ? scans[0].count : 1;
    var scanHtml = scans.map(function (r, i) {
      var w = Math.round((r.count / scanMax) * 100);
      return '<li><span class="rank">' + (i + 1) + '</span><span class="name">' + esc(r.name) + '</span>' +
             '<span class="meter"><i style="width:' + w + '%"></i></span><span class="count">' + r.count + '</span></li>';
    }).join("");

    content.innerHTML =
      '<div class="cards">' +
        '<div class="stat"><div class="n">' + total.toLocaleString() + '</div><div class="l">Questions asked</div></div>' +
        '<div class="stat"><div class="n">' + daysActive + '</div><div class="l">Days used</div></div>' +
        '<div class="stat"><div class="n">' + peak + '</div><div class="l">Busiest day</div></div>' +
      '</div>' +
      '<div class="panel"><h2>Questions per day</h2><p class="hint">Last ' + recent.length + ' day' + (recent.length === 1 ? "" : "s") + ' with activity.</p>' +
        (recent.length ? '<div class="chart">' + bars + '</div><div class="chart-x">' + xlabels + '</div>' : '<p class="hint">No questions yet, check back once students start using it.</p>') +
      '</div>' +
      '<div class="panel"><h2>Most-requested resources</h2><p class="hint">What students are actually looking for.</p>' +
        (top.length ? '<ol class="top">' + topHtml + '</ol>' : '<p class="hint">Nothing yet.</p>') +
      '</div>' +
      '<div class="panel"><h2>Flyer scans</h2><p class="hint">QR scans by flyer, from the ?ref tag on each poster.</p>' +
        (scans.length ? '<ol class="top">' + scanHtml + '</ol>' : '<p class="hint">No flyer scans yet.</p>') +
      '</div>';
  }

  if (!key) { askForKey(); return; }
  fetch("/.netlify/functions/stats?key=" + encodeURIComponent(key))
    .then(function (r) {
      if (r.status === 401) { askForKey("That key didn't work. Try again."); return null; }
      if (!r.ok) throw new Error("status " + r.status);
      return r.json();
    })
    .then(function (data) { if (data) render(data); })
    .catch(function () {
      content.innerHTML = '<div class="msg">Couldn’t load stats right now. If this keeps happening, the storage may need enabling in Netlify.</div>';
    });
})();
