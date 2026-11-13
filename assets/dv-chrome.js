/* desmoVet shared chrome.
   Each tool page loads:
     <link rel="stylesheet" href="/assets/dv-chrome.css">
     <script src="/assets/dv-chrome.js" data-tool="renal" defer></script>
   and this script adds the desmoVet bar at the top and the tool footer at the bottom.
   Optional attributes on the <script> tag:
     data-bar="off"        skip the top bar (the page already has the desmoVet nav)
     data-footer="info"    only the tool row (Sources / Last updated / Report), placed
                           above the page's own <footer>
   To add a tool, add an entry to TOOLS. To credit sources, fill in its `sources`;
   while it is null the Sources line is simply not shown. */
(function () {
  var TOOLS = {
    anesthesia: { name: 'Small Animal Anesthesia Calculator', path: 'anesthesia/index.html', sources: null },
    equicalc:   { name: 'EquiCalc', path: 'equicalc', sources: null },
    navle:      { name: 'NAVLE Study Hub', path: 'navle',
                  sources: 'Built from the desmoVet NAVLE study guides (readable in the hub’s Documents section) and the ICVA exam blueprint. The diagnostic test statistics chapter uses standard diagnostic epidemiology.' },
    bloodwork:  { name: 'Bloodwork Abnormals', path: 'bloodwork-abnormals.html',
                  sources: 'None needed: each value is compared only with the reference interval printed on the report you paste in.' },
    foal:       { name: 'Foal Reference Ranges', path: 'foal-reference-ranges.html',
                  sources: 'Koterba, Drummond &amp; Kosch, <i>Equine Clinical Neonatology</i> (tables 24-1 to 24-3 and 27-2 to 27-5); Harvey et al., <i>Equine Vet J</i> 1984; Rossdales Laboratories neonatal Thoroughbred panel. The source for each analyte is shown in the tables.' },
    cardio:     { name: 'Cardio Tutor', path: 'cardio-tutor.html', sources: null },
    neuro:      { name: 'Neuro Tutor', path: 'neuro-tutor.html', sources: null },
    renal:      { name: 'Renal Tutor', path: 'renal-tutor.html',
                  sources: 'IRIS CKD staging, treatment and AKI grading guidelines; ACVIM consensus statements on uroliths (2016), systemic hypertension (2018) and leptospirosis (2023); Ettinger &amp; Feldman, <i>Textbook of Veterinary Internal Medicine</i>; Smith, <i>Large Animal Internal Medicine</i>; Reed, Bayly &amp; Sellon, <i>Equine Internal Medicine</i>.' }
  };
  var REPO = 'kbonen12/desmovet';
  var EMAIL = 'admin@desmovet.com';

  var me = document.currentScript || document.querySelector('script[src*="dv-chrome.js"]');
  var key = me && me.getAttribute('data-tool');
  var tool = TOOLS[key] || { name: document.title, path: null, sources: null };

  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

  function build() {
    if (!me || me.getAttribute('data-bar') !== 'off') {
      document.body.insertBefore(el(
        '<div class="dv-bar" role="navigation" aria-label="desmoVet">' +
          '<a class="dv-brand" href="/">desmoVet <span>Free tools for vets &amp; vet students</span></a>' +
          '<div class="dv-bar-links"><a href="/#tools">All tools</a><a href="#dv-footer">Report an error</a></div>' +
        '</div>'), document.body.firstChild);
    }

    var subject = 'desmoVet error report: ' + tool.name;
    var body = 'Page: ' + location.href + '\n\nWhat is wrong, and where on the page:\n\n\nWhat it should say (with a source, if you have one):\n\n';
    var mail = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    var infoOnly = me && me.getAttribute('data-footer') === 'info';

    var toolRow =
      '<div class="dv-tool">' +
        '<div>' +
          (tool.sources ? '<div class="dv-k">Sources</div><div class="dv-v">' + tool.sources + '</div>' : '') +
          '<div class="dv-meta"><div id="dv-updated" hidden><span class="dv-k" style="display:inline">Last updated</span> <span class="dv-v" id="dv-updated-date"></span></div></div>' +
        '</div>' +
        '<div><a class="dv-report" href="' + mail + '">⚑ Report an error</a>' +
          '<div class="dv-report-note">Spotted a wrong dose, value or explanation? Tell us and it gets fixed.</div></div>' +
      '</div>';
    var siteRow = infoOnly ? '' :
      '<div class="dv-site">' +
        '<div class="dv-links" role="navigation" aria-label="desmoVet links"><a href="/">desmoVet home</a><a href="/#tools">All tools</a><a href="/tutoring.html">Peer tutoring</a><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
        '<div>© ' + new Date().getFullYear() + ' KB Enterprises LLC</div>' +
        '<div class="dv-disc">Study and calculation aids for veterinary professionals and students. They do not replace clinical judgment, a current formulary or specialist advice. Verify every dose before using it in a patient.</div>' +
      '</div>';
    var foot = el('<div class="dv-foot' + (infoOnly ? ' dv-info-only' : '') + '" id="dv-footer" role="contentinfo"><div class="dv-foot-inner">' + toolRow + siteRow + '</div></div>');

    var own = infoOnly && document.querySelector('body > footer, footer');
    if (own) own.parentNode.insertBefore(foot, own); else document.body.appendChild(foot);

    if (tool.path) lastUpdated(tool.path);
  }

  // "Last updated" comes from the most recent GitHub commit touching this tool, so it never goes stale.
  function lastUpdated(path) {
    var ck = 'dv-upd:' + path, cached = null;
    try { cached = sessionStorage.getItem(ck); } catch (e) {}
    if (cached) return show(cached);
    if (!window.fetch) return;
    fetch('https://api.github.com/repos/' + REPO + '/commits?per_page=1&path=' + encodeURIComponent(path))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        var d = j && j[0] && j[0].commit && j[0].commit.committer && j[0].commit.committer.date;
        if (!d) return;
        try { sessionStorage.setItem(ck, d); } catch (e) {}
        show(d);
      })
      .catch(function () {});
  }
  function show(iso) {
    var dt = new Date(iso); if (isNaN(dt)) return;
    var box = document.getElementById('dv-updated'), out = document.getElementById('dv-updated-date');
    if (!box || !out) return;
    out.textContent = dt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    box.hidden = false;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
