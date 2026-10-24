// Shared behaviour for every direction: the theme switch, the device's download
// button, and the hero footage (loaded after the page, never on phones, Save-Data or
// reduced motion, with a pause control). No dependencies; about 3 KB.
(function () {
  var root = document.documentElement;
  var THEME_KEY = 'ib-site-theme-' + (root.getAttribute('data-dir') || '');
  var PAUSE_KEY = 'ib-site-footage-paused';

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) { return null; }
    return null;
  }

  // ── Theme. The inline head script has already applied it before first paint; this
  // wires the switch. A #paper / #ink / #black hash (the gallery's previews) wins.
  function currentTheme() { return root.getAttribute('data-theme') || 'auto'; }
  function setTheme(theme, save) {
    if (theme === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
    if (save) store(THEME_KEY, theme === 'auto' ? null : theme);
    syncSwitches();
  }
  function syncSwitches() {
    var t = currentTheme();
    document.querySelectorAll('[data-set-theme]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-theme') === t));
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-set-theme]');
    if (b) setTheme(b.getAttribute('data-set-theme'), true);
  });
  // The hash may carry a theme and a green, joined by dots: #ink.moss, #moss, #paper.
  function applyHash() {
    location.hash.slice(1).split('.').forEach(function (h) {
      if (h === 'paper' || h === 'ink' || h === 'black' || h === 'auto') setTheme(h, false);
      if (/^(fern|fernsage|forest|moss|olive|sage)$/.test(h)) {
        if (h === 'fern') root.removeAttribute('data-green'); else root.setAttribute('data-green', h);
      }
    });
  }
  window.addEventListener('hashchange', applyHash);
  syncSwitches();

  // ── Download: name the visitor's device. Links are placeholders until releases exist.
  var PLATFORMS = {
    mac: { label: 'Download for macOS', href: '#download-macos' },
    windows: { label: 'Download for Windows', href: '#download-windows' },
    linux: { label: 'Download for Linux', href: '#download-linux' },
    ios: { label: 'Get it on the App Store', href: '#download-app-store' },
    android: { label: 'Get it on Google Play', href: '#download-google-play' },
  };
  function detect() {
    var ua = navigator.userAgent || '';
    var touchMac = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1; // iPadOS
    if (/iPhone|iPad|iPod/.test(ua) || touchMac) return 'ios';
    // Chromebooks run Inkblot's Android build, so they get the Play Store button.
    if (/Android|CrOS/.test(ua)) return 'android';
    if (/Windows/.test(ua)) return 'windows';
    if (/Mac OS X|Macintosh/.test(ua)) return 'mac';
    if (/Linux|X11/.test(ua)) return 'linux';
    return null;
  }
  var device = detect();
  if (device) {
    document.querySelectorAll('[data-download]').forEach(function (a) {
      var p = PLATFORMS[device];
      var label = a.querySelector('[data-download-label]') || a;
      label.textContent = a.hasAttribute('data-download-short') ? 'Download' : p.label;
      a.setAttribute('href', p.href);
    });
    document.querySelectorAll('[data-platform="' + device + '"]').forEach(function (el) {
      el.setAttribute('aria-current', 'true');
    });
  }

  // ── Hero footage
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var conn = navigator.connection || {};
  document.querySelectorAll('[data-footage]').forEach(function (fig) {
    var src = fig.getAttribute('data-footage');
    var wide = window.matchMedia('(min-width: 768px)').matches;
    if (!src || !wide || reduce.matches || conn.saveData) return;

    function start() {
      var v = document.createElement('video');
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto';
      v.setAttribute('aria-hidden', 'true');
      v.src = src;
      fig.insertBefore(v, fig.querySelector('.media__pause'));
      fig.classList.add('has-video');
      var btn = fig.querySelector('.media__pause');
      var paused = store(PAUSE_KEY) === '1';
      function render() {
        btn.setAttribute('aria-label', paused ? 'Play background footage' : 'Pause background footage');
        btn.innerHTML = paused
          ? '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z"/></svg>'
          : '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3.5" y="2.5" width="3" height="11"/><rect x="9.5" y="2.5" width="3" height="11"/></svg>';
      }
      function play() { if (!paused && !document.hidden) v.play().then(function () { v.classList.add('is-playing'); }).catch(function () {}); }
      btn.addEventListener('click', function () {
        paused = !paused; store(PAUSE_KEY, paused ? '1' : null);
        if (paused) v.pause(); else play();
        render();
      });
      render();
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { if (en.isIntersecting) play(); else v.pause(); });
        }).observe(fig);
      } else play();
      document.addEventListener('visibilitychange', function () { if (document.hidden) v.pause(); else play(); });
    }
    function later() { ('requestIdleCallback' in window) ? requestIdleCallback(start, { timeout: 2500 }) : setTimeout(start, 1200); }
    if (document.readyState === 'complete') later(); else window.addEventListener('load', later);
  });
})();
