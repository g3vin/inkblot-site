// Direction N's moving parts. One requestAnimationFrame loop drives every part, and a
// part only runs while it's on screen. Under reduced motion each part is drawn once,
// finished, and nothing pins or follows the cursor. No dependencies.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function seg(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  // 0 when a pinned section's top reaches the viewport top, 1 when its bottom reaches the viewport bottom.
  function pinProgress(el) {
    var r = el.getBoundingClientRect(), span = r.height - window.innerHeight;
    return span > 0 ? clamp(-r.top / span, 0, 1) : 1;
  }
  function rng(seed) { return function () { seed = (seed + 0x6d2b79f5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

  // ── The frame loop
  var parts = [], queued = false;
  function kick() { if (!queued) { queued = true; requestAnimationFrame(frame); } }
  function frame(t) {
    queued = false;
    var more = false;
    parts.forEach(function (p) { if (p.on && p.tick(t)) more = true; });
    if (more) kick();
  }
  function add(el, part) {
    parts.push(part);
    part.on = !('IntersectionObserver' in window);
    if (!part.on) new IntersectionObserver(function (es) { part.on = es[0].isIntersecting; if (part.on) kick(); }, { rootMargin: '150px 0px' }).observe(el);
  }
  window.addEventListener('scroll', kick, { passive: true });
  window.addEventListener('resize', function () { parts.forEach(function (p) { if (p.resize) p.resize(); }); kick(); });

  // ── 1 · Night: the words start in a pool of darkness that spreads out to fill the screen
  (function () {
    var ink = document.querySelector('.ink');
    if (!ink) return;
    var svg = ink.querySelector('.ink__svg'), words = ink.querySelector('.ink__words');
    var body = ink.querySelector('.ink__path');
    if (reduce) ink.classList.add('is-static');
    var W = 0, H = 0, box = null, N = 180;
    // Long, slow waves only: the edge should read as soft and designed, not splashed.
    var WAVES = [[2, 0.5, 0.3, 0.12], [3, 0.3, 1.7, -0.09], [5, 0.14, 2.2, 0.15]];
    function size() {
      W = svg.clientWidth; H = svg.clientHeight;
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      var s = svg.getBoundingClientRect(), r = words.getBoundingClientRect();
      box = { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2, w: r.width, h: r.height };
    }
    function blob(path, e, time, grow, phase) {
      var cx = lerp(box.x, W / 2, e), cy = lerp(box.y, H / 2, e);
      // The first pool just clears the words' corners; the last runs off both sides.
      var a = lerp(box.w * 0.59 + 44, W * 0.95, e) + grow, b = lerp(box.h * 0.65 + 44, H * 0.46, e) + grow;
      var n = lerp(2.4, 3.2, e), amp = lerp(b * 0.05, H * 0.03, e);
      var pts = [];
      for (var i = 0; i < N; i++) {
        var th = (i / N) * Math.PI * 2, c = Math.cos(th), s = Math.sin(th);
        var rr = Math.pow(Math.pow(Math.abs(c) / a, n) + Math.pow(Math.abs(s) / b, n), -1 / n), w = 0;
        for (var j = 0; j < WAVES.length; j++) w += WAVES[j][1] * Math.sin(WAVES[j][0] * th + WAVES[j][2] + phase + time * WAVES[j][3]);
        pts.push([cx + c * (rr + amp * w), cy + s * (rr + amp * w)]);
      }
      var out = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
      for (var k = 0; k < N; k++) {
        var p0 = pts[(k - 1 + N) % N], p1 = pts[k], p2 = pts[(k + 1) % N], p3 = pts[(k + 2) % N];
        out += 'C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + ' ' +
          (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + ' ' +
          p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
      }
      path.setAttribute('d', out + 'Z');
    }
    function draw(e, time) { blob(body, e, time, 0, 0); }
    size();
    if (reduce) { draw(1, 0); window.addEventListener('resize', function () { size(); draw(1, 0); }); return; }
    if (document.fonts) document.fonts.ready.then(function () { size(); kick(); });
    add(ink, {
      resize: size,
      tick: function (t) {
        var p = pinProgress(ink);
        draw(ease(seg(p, 0.04, 0.68)), t / 1000);
        ink.style.setProperty('--reveal', ease(seg(p, 0.58, 0.84)).toFixed(3));
        return true; // the edge keeps breathing while it's on screen
      }
    });
  })();
  // ── 2 · Roster: rest the cursor and the page is cut along a rule, then pulled open
  (function () {
    var peek = document.querySelector('.peek');
    if (!peek) return;
    var scenesEl = peek.querySelector('.peek__scenes'), label = peek.querySelector('.peek__label');
    var links = [].slice.call(peek.querySelectorAll('[data-scene]'));
    var E = '#c9a273', M = '#82684a', S = '#a7bc94', L = '#2a251f', CARD = '#1d1b18';
    var VB = 'viewBox="0 0 1200 900"';
    function lines(r, x, y, w, rows, gap, colour, op) {
      var o = '';
      for (var i = 0; i < rows; i++) {
        var ww = i === rows - 1 ? w * (0.35 + r() * 0.4) : w * (0.82 + r() * 0.18);
        o += '<rect x="' + x + '" y="' + (y + i * gap) + '" width="' + ww.toFixed(0) + '" height="' + Math.round(gap * 0.32) + '" rx="' + Math.round(gap * 0.16) + '" fill="' + colour + '" opacity="' + op + '"/>';
      }
      return o;
    }
    var blink = reduce ? '' : '<animate attributeName="opacity" values="1;1;0;0" dur="1.1s" repeatCount="indefinite"/>';
    var SCENES = {
      drafting: function (r) {
        var o = '', y = 70;
        while (y < 880) { var rows = 3 + Math.floor(r() * 4); o += lines(r, 220, y, 760, rows, 34, M, 0.7); y += rows * 34 + 30; }
        return o + '<rect x="612" y="452" width="3" height="26" fill="' + S + '">' + blink + '</rect>';
      },
      maps: function (r) {
        var o = '';
        for (var gx = 0; gx <= 1200; gx += 100) o += '<line x1="' + gx + '" y1="0" x2="' + gx + '" y2="900" stroke="' + L + '"/>';
        for (var gy = 0; gy <= 900; gy += 100) o += '<line x1="0" y1="' + gy + '" x2="1200" y2="' + gy + '" stroke="' + L + '"/>';
        [[380, 360, 7], [820, 560, 6], [960, 220, 4]].forEach(function (h) {
          for (var k = 1; k <= h[2]; k++) {
            var d = '', R = k * 34;
            for (var a = 0; a <= 24; a++) {
              var th = a / 24 * Math.PI * 2, rr = R * (1 + 0.18 * Math.sin(th * 3 + h[0]) + 0.08 * Math.sin(th * 5 + k));
              d += (a ? 'L' : 'M') + (h[0] + rr * Math.cos(th)).toFixed(0) + ' ' + (h[1] + rr * 0.8 * Math.sin(th)).toFixed(0);
            }
            o += '<path d="' + d + 'Z" fill="none" stroke="' + (k === h[2] ? E : M) + '" stroke-width="1.5" opacity="' + (0.4 + k * 0.08) + '"/>';
          }
        });
        o += '<path d="M120 760 C320 640 420 520 560 470 S820 380 1080 140" fill="none" stroke="' + S + '" stroke-width="3" stroke-dasharray="10 9"/>';
        [[120, 760], [560, 470], [1080, 140]].forEach(function (p) { o += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="9" fill="' + S + '"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="18" fill="none" stroke="' + S + '" opacity="0.5"/>'; });
        return o;
      },
      timeline: function (r) {
        var o = '';
        for (var x = 60; x < 1200; x += 120) o += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="900" stroke="' + L + '"/><text x="' + (x + 6) + '" y="40" fill="' + M + '" font-family="Courier Prime, monospace" font-size="16">Year ' + ((x - 60) / 120 + 1) + '</text>';
        for (var y = 90; y < 880; y += 72) {
          var cx = 40 + r() * 300;
          while (cx < 1150) { var w = 80 + r() * 260; o += '<rect x="' + cx.toFixed(0) + '" y="' + y + '" width="' + w.toFixed(0) + '" height="30" rx="6" fill="' + (r() > 0.75 ? S : E) + '" opacity="' + (0.35 + r() * 0.5).toFixed(2) + '"/>'; cx += w + 40 + r() * 200; }
        }
        return o + '<line x1="640" y1="0" x2="640" y2="900" stroke="' + S + '" stroke-width="2"/>';
      },
      canvases: function (r) {
        var o = '', cards = [];
        for (var i = 0; i < 16; i++) cards.push([60 + (i % 4) * 290 + r() * 60, 60 + Math.floor(i / 4) * 210 + r() * 40, (r() - 0.5) * 6]);
        for (var j = 0; j < cards.length - 1; j += 2) o += '<line x1="' + (cards[j][0] + 100) + '" y1="' + (cards[j][1] + 60) + '" x2="' + (cards[j + 1][0] + 100) + '" y2="' + (cards[j + 1][1] + 60) + '" stroke="' + S + '" stroke-width="2" opacity="0.6"/>';
        cards.forEach(function (c) {
          o += '<g transform="translate(' + c[0].toFixed(0) + ' ' + c[1].toFixed(0) + ') rotate(' + c[2].toFixed(1) + ')"><rect width="210" height="140" rx="10" fill="' + CARD + '" stroke="' + L + '" stroke-width="2"/>' +
            '<rect x="18" y="20" width="120" height="12" rx="6" fill="' + E + '" opacity="0.8"/>' + lines(r, 18, 52, 170, 3, 24, M, 0.7) + '</g>';
        });
        return o;
      },
      orbit: function (r) {
        var o = '';
        for (var k = 1; k <= 7; k++) o += '<ellipse cx="600" cy="450" rx="' + k * 80 + '" ry="' + k * 62 + '" fill="none" stroke="' + L + '" stroke-width="2"/>';
        o += '<circle cx="600" cy="450" r="26" fill="' + S + '"/>';
        for (var i = 0; i < 26; i++) { var k2 = 1 + Math.floor(r() * 7), th = r() * Math.PI * 2; o += '<circle cx="' + (600 + k2 * 80 * Math.cos(th)).toFixed(0) + '" cy="' + (450 + k2 * 62 * Math.sin(th)).toFixed(0) + '" r="' + (5 + r() * 9).toFixed(0) + '" fill="' + (r() > 0.8 ? S : E) + '" opacity="' + (0.5 + r() * 0.5).toFixed(2) + '"/>'; }
        return o;
      },
      screenplays: function (r) {
        var o = '', y = 60, F = 'font-family="Courier Prime, monospace" font-size="20"';
        var names = ['ADA', 'FATHER', 'ADA', 'THE KEEPER'];
        var n = 0;
        while (y < 880) {
          o += '<text x="250" y="' + y + '" fill="' + E + '" ' + F + '>INT. LAMP ROOM – NIGHT</text>'; y += 40;
          o += lines(r, 250, y, 700, 2, 30, M, 0.7); y += 80;
          for (var q = 0; q < 2 && y < 880; q++) {
            o += '<text x="560" y="' + y + '" fill="' + S + '" ' + F + '>' + names[n++ % names.length] + '</text>'; y += 22;
            o += lines(r, 430, y, 360, 2, 30, M, 0.8); y += 82;
          }
        }
        return o;
      },
      poems: function (r) {
        var o = '', y = 80, letters = 'abab';
        while (y < 860) {
          for (var i = 0; i < 4; i++) {
            var w = 260 + r() * 300;
            o += '<rect x="360" y="' + y + '" width="' + w.toFixed(0) + '" height="12" rx="6" fill="' + M + '" opacity="0.75"/>';
            o += '<rect x="' + (360 + w - 46).toFixed(0) + '" y="' + y + '" width="46" height="12" rx="6" fill="' + (i % 2 ? E : S) + '" opacity="0.9"/>';
            o += '<text x="900" y="' + (y + 12) + '" fill="' + (i % 2 ? E : S) + '" font-family="Courier Prime, monospace" font-size="20">' + letters[i] + '</text>';
            y += 38;
          }
          y += 44;
        }
        return o;
      },
      dictation: function (r) {
        var o = '';
        [[230, 0.45, M], [450, 1, E], [670, 0.45, M]].forEach(function (row) {
          for (var x = 20; x < 1190; x += 14) {
            var h = (14 + 120 * Math.abs(Math.sin(x * 0.021 + row[0]) * Math.sin(x * 0.0063 + 1.7)) + r() * 26) * row[1];
            o += '<rect x="' + x + '" y="' + (row[0] - h / 2).toFixed(0) + '" width="7" height="' + h.toFixed(0) + '" rx="3.5" fill="' + (row[1] === 1 && x > 560 && x < 640 ? S : row[2]) + '" opacity="0.85"/>';
          }
        });
        return o;
      },
      review: function (r) {
        var o = '', y = 80;
        while (y < 860) {
          o += lines(r, 140, y, 640, 4, 34, M, 0.7);
          var sx = 160 + r() * 300;
          o += '<line x1="' + sx.toFixed(0) + '" y1="' + (y + 40) + '" x2="' + (sx + 140).toFixed(0) + '" y2="' + (y + 40) + '" stroke="' + E + '" stroke-width="3"/>';
          o += '<rect x="' + (sx + 150).toFixed(0) + '" y="' + (y + 34) + '" width="120" height="11" rx="5" fill="' + S + '"/><line x1="' + (sx + 150).toFixed(0) + '" y1="' + (y + 50) + '" x2="' + (sx + 270).toFixed(0) + '" y2="' + (y + 50) + '" stroke="' + S + '" stroke-width="2"/>';
          o += '<path d="M' + (sx + 280).toFixed(0) + ' ' + (y + 40) + ' L870 ' + (y + 20) + '" stroke="' + L + '" stroke-width="2"/>';
          o += '<rect x="870" y="' + y + '" width="270" height="96" rx="10" fill="' + CARD + '" stroke="' + L + '" stroke-width="2"/>' + lines(r, 890, y + 22, 230, 3, 24, E, 0.6);
          y += 190;
        }
        return o;
      },
      cowriting: function (r) {
        var o = '', y = 70;
        while (y < 880) { o += lines(r, 220, y, 760, 4, 34, M, 0.7); y += 4 * 34 + 30; }
        [[470, 240, S, 'You'], [720, 512, E, 'Sam']].forEach(function (c) {
          o += '<rect x="' + c[0] + '" y="' + c[1] + '" width="3" height="28" fill="' + c[2] + '"/>' +
            '<rect x="' + c[0] + '" y="' + (c[1] - 26) + '" width="' + (c[3].length * 13 + 16) + '" height="24" rx="4" fill="' + c[2] + '"/>' +
            '<text x="' + (c[0] + 8) + '" y="' + (c[1] - 9) + '" fill="#12100e" font-family="Courier Prime, monospace" font-size="17">' + c[3] + '</text>';
        });
        return o;
      },
      typesetting: function (r) {
        var o = '';
        for (var row = 0; row < 3; row++) for (var col = 0; col < 3; col++) {
          var x = 60 + col * 380, y = 50 + row * 290;
          o += '<rect x="' + x + '" y="' + y + '" width="320" height="240" fill="#e9e2d3" opacity="0.92"/><line x1="' + (x + 160) + '" y1="' + y + '" x2="' + (x + 160) + '" y2="' + (y + 240) + '" stroke="#b9ae98"/>';
          o += lines(r, x + 18, y + 26, 124, 7, 26, '#82684a', 0.9) + lines(r, x + 178, y + (col === 1 ? 90 : 26), 124, col === 1 ? 5 : 7, 26, '#82684a', 0.9);
        }
        return o;
      },
      publish: function (r) {
        var o = '', y = 60, dest = ['AO3', 'WordPress', 'Ghost', 'Substack'];
        for (var i = 0; y < 860; i++, y += 130) {
          o += '<rect x="200" y="' + y + '" width="800" height="104" rx="12" fill="' + CARD + '" stroke="' + L + '" stroke-width="2"/>';
          o += '<text x="232" y="' + (y + 44) + '" fill="' + E + '" font-family="Courier Prime, monospace" font-size="22">' + dest[i % 4] + '</text>' + lines(r, 232, y + 62, 420, 1, 30, M, 0.7);
          o += '<rect x="836" y="' + (y + 34) + '" width="132" height="36" rx="18" fill="none" stroke="' + S + '" stroke-width="2"/><text x="866" y="' + (y + 58) + '" fill="' + S + '" font-family="Courier Prime, monospace" font-size="18">Posted</text>';
        }
        return o;
      }
    };
    var NAMES = { drafting: 'Drafting', maps: 'Maps', timeline: 'Timeline', canvases: 'Canvases', orbit: 'Orbit', screenplays: 'Screenplays', poems: 'Poems', dictation: 'Dictation', review: 'Review mode', cowriting: 'Co-writing', typesetting: 'Typesetting', publish: 'Publish' };
    var built = {};
    function scene(id) {
      if (!built[id]) {
        scenesEl.insertAdjacentHTML('beforeend', '<svg ' + VB + ' preserveAspectRatio="xMidYMid slice" data-id="' + id + '">' + SCENES[id](rng(id.length * 131 + id.charCodeAt(0))) + '</svg>');
        built[id] = scenesEl.lastElementChild;
      }
      return built[id];
    }

    // Each letter gets its own span so the text can part around the cut. Words stay
    // unbroken, and screen readers still read whole words.
    var list = peek.querySelector('.roster__list'), rulesEl = peek.querySelector('.peek__rules');
    var eyeEl = peek.querySelector('.peek__eye'), lips = peek.querySelector('.peek__lips path');
    peek.querySelectorAll('.roster__name, .roster__benefit').forEach(function (el) {
      el.innerHTML = el.textContent.split(' ').map(function (word) {
        return '<span style="white-space:nowrap">' + word.split('').map(function (c) { return '<span class="ch">' + c + '</span>'; }).join('') + '</span>';
      }).join(' ');
    });
    var chars = [].slice.call(peek.querySelectorAll('.ch')).map(function (el) { return { el: el, x: 0, y: 0, off: 0 }; });
    var bounds = [], left = 0, right = 0, W = 0, dirty = true, paths = [];
    function layout() {
      var pr = peek.getBoundingClientRect(), lr = list.getBoundingClientRect();
      W = pr.width; left = lr.left - pr.left; right = lr.right - pr.left;
      bounds = [lr.top - pr.top].concat(links.map(function (a) { return a.getBoundingClientRect().bottom - pr.top; }));
      chars.forEach(function (c) { var r = c.el.getBoundingClientRect(); c.x = r.left - pr.left + r.width / 2; c.y = r.top - pr.top + r.height / 2 - c.off; });
      rulesEl.setAttribute('viewBox', '0 0 ' + pr.width + ' ' + pr.height);
      lips.parentNode.setAttribute('viewBox', '0 0 ' + pr.width + ' ' + pr.height);
      while (paths.length < bounds.length + 1) { var p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); rulesEl.appendChild(p); paths.push(p); }
      dirty = false;
    }
    if (document.fonts) document.fonts.ready.then(function () { dirty = true; kick(); });

    var eye = { x: 0, y: 0, b: -1, h: 0, v: 0, ht: 0, link: null };
    function size() { return fine ? { L: Math.min(250, W * 0.2), H: Math.min(72, W * 0.06) } : { L: W * 0.34, H: 46 }; }
    // The opening's half-height at x, and the wider, softer push felt by the text around it.
    function lens(x) { var u = (x - eye.x) / size().L; return u > -1 && u < 1 ? eye.h * (1 - u * u) : 0; }
    function push(x) { var u = (x - eye.x) / (size().L * 1.5); return u > -1 && u < 1 ? eye.h * (1 - u * u) : 0; }
    function falloff(d) { var a = Math.abs(d); return a < 70 ? 1 : Math.exp(-(a - 70) / 80); }

    function open(link, x, boundary) {
      if (dirty) layout();
      if (eye.link && eye.link !== link) { eye.link.classList.remove('is-peeking'); scene(eye.link.dataset.scene).classList.remove('is-on'); }
      var L = size().L;
      eye.link = link; eye.b = boundary; eye.y = bounds[boundary];
      eye.x = clamp(x, left + L * 0.9, right - L * 0.9);
      link.classList.add('is-peeking');
      var sv = scene(link.dataset.scene); sv.getBoundingClientRect(); sv.classList.add('is-on');
      label.textContent = '[' + NAMES[link.dataset.scene] + ' · screenshot to come]';
      eye.ht = size().H; kick();
    }
    function close() { eye.ht = 0; kick(); }
    // Each row opens along its own bottom rule, centred in the gap between the feature's
    // name and its line, so the cut lands in the same place however the row is entered.
    function spot(link) {
      if (dirty) layout();
      var pr = peek.getBoundingClientRect();
      var n = link.querySelector('.roster__name').getBoundingClientRect(), b = link.querySelector('.roster__benefit').getBoundingClientRect();
      var x = b.left > n.right ? (n.right + b.left) / 2 - pr.left : left + (right - left) * 0.62;
      return { x: x, rule: links.indexOf(link) + 1 };
    }
    function openOn(link) { var s = spot(link); open(link, s.x, s.rule); }

    var rest = null, over = null;
    if (fine) {
      peek.addEventListener('pointermove', function (e) {
        var pr = peek.getBoundingClientRect(), x = e.clientX - pr.left, y = e.clientY - pr.top;
        var link = e.target.closest && e.target.closest('[data-scene]');
        // Stay open while the cursor is on the open row or over the opening itself.
        if (eye.ht && link !== eye.link && !(Math.abs(x - eye.x) < size().L && Math.abs(y - eye.y) < size().H * 1.2)) close();
        if (eye.ht && (link === eye.link || !link)) { clearTimeout(rest); return; }
        over = link;
        clearTimeout(rest);
        // Only a cursor that has come to rest opens a row, so skimming the list stays quiet.
        rest = setTimeout(function () { if (over && !eye.ht) openOn(over); }, 420);
      });
      peek.addEventListener('pointerleave', function () { clearTimeout(rest); close(); });
    } else {
      // Touch: when scrolling settles, the row nearest the middle of the screen opens along its bottom rule.
      window.addEventListener('scroll', function () {
        if (eye.ht) close();
        clearTimeout(rest);
        rest = setTimeout(function () {
          var mid = window.innerHeight / 2, best = null, bd = 1e9;
          links.forEach(function (a) { var r = a.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - mid); if (d < bd) { bd = d; best = a; } });
          if (best && bd < 140) openOn(best);
        }, 380);
      }, { passive: true });
    }
    peek.addEventListener('focusin', function (e) {
      var a = e.target.closest('[data-scene]'); if (!a) return;
      openOn(a);
    });
    peek.addEventListener('focusout', close);

    function line(y0, fn) {
      var d = '', steps = 96;
      for (var i = 0; i <= steps; i++) { var x = left + (right - left) * i / steps; d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + (y0 + fn(x)).toFixed(1); }
      return d;
    }
    add(peek, {
      resize: function () { dirty = true; },
      tick: function () {
        if (dirty) layout();
        // A light spring, so the cut is pulled open rather than faded in.
        if (reduce) eye.h = eye.ht;
        else { eye.v += (eye.ht - eye.h) * (eye.ht ? 0.09 : 0.2); eye.v *= 0.74; eye.h += eye.v; }
        if (!eye.ht && Math.abs(eye.h) < 0.3) {
          eye.h = 0; eye.v = 0;
          if (eye.link) { eye.link.classList.remove('is-peeking'); scene(eye.link.dataset.scene).classList.remove('is-on'); eye.link = null; }
        }
        var h = Math.max(0, eye.h);
        chars.forEach(function (c) {
          var d = c.y - eye.y, off = h ? (d < 0 ? -1 : 1) * push(c.x) * falloff(d) : 0;
          if (Math.abs(off - c.off) > 0.05) { c.off = off; c.el.style.transform = off ? 'translateY(' + off.toFixed(2) + 'px)' : ''; }
        });
        bounds.forEach(function (y, i) {
          var d;
          if (h && i === eye.b) d = line(y, function (x) { return -lens(x); }) + line(y, lens);
          else d = line(y, function (x) { return h ? (y < eye.y ? -1 : 1) * push(x) * falloff(y - eye.y) : 0; });
          paths[i].setAttribute('d', d);
        });
        if (h > 0.3) {
          var L = size().L, up = '', down = '';
          for (var i = 0; i <= 40; i++) {
            var x = eye.x - L + 2 * L * i / 40, e = lens(x);
            up += (i ? ' L ' : 'M ') + x.toFixed(1) + ' ' + (eye.y - e).toFixed(1);
            down = ' L ' + x.toFixed(1) + ' ' + (eye.y + e).toFixed(1) + down;
          }
          var shape = up + down + ' Z';
          eyeEl.style.clipPath = "path('" + shape + "')";
          lips.setAttribute('d', shape);
          peek.style.setProperty('--x', eye.x.toFixed(1) + 'px');
          peek.style.setProperty('--y', eye.y.toFixed(1) + 'px');
          peek.style.setProperty('--h', h.toFixed(1) + 'px');
          peek.style.setProperty('--L', L.toFixed(0) + 'px');
          peek.style.setProperty('--px', ((W / 2 - eye.x) * 0.08).toFixed(1) + 'px');
          peek.style.setProperty('--py', (-eye.v * 2).toFixed(1) + 'px');
        } else eyeEl.style.clipPath = '';
        return Math.abs(eye.ht - eye.h) > 0.3 || Math.abs(eye.v) > 0.05;
      }
    });
  })();

  // ── 3 · The book: it turns to face you, the cover opens, then a page turns
  (function () {
    var tome = document.querySelector('.tome');
    if (!tome) return;
    var book = tome.querySelector('.tome__book'), shadow = tome.querySelector('.tome__shadow');
    var steps = [].slice.call(tome.querySelectorAll('[data-step]'));
    if (reduce) { tome.classList.add('is-static'); return; } // the CSS defaults are the open spread
    var part = {
      tick: function () {
        var q = pinProgress(tome);
        var turn = ease(seg(q, 0.02, 0.24)), open = ease(seg(q, 0.26, 0.52)), leaf = ease(seg(q, 0.56, 0.82));
        var bw = book.offsetWidth, bt = bw * 0.12;
        book.style.setProperty('--ry', lerp(52, 0, turn).toFixed(2) + 'deg');
        book.style.setProperty('--rx', lerp(14, 4, Math.max(turn * 0.5, open)).toFixed(2) + 'deg');
        book.style.setProperty('--rz', lerp(-5, 0, turn).toFixed(2) + 'deg');
        book.style.setProperty('--shift', (open * bw / 2).toFixed(1) + 'px');
        book.style.setProperty('--cov', (-178 * open).toFixed(2) + 'deg');
        book.style.setProperty('--leaf', (-176 * leaf).toFixed(2) + 'deg');
        // The leaf rises over the open cover as it turns, so it lands on top of it.
        book.style.setProperty('--lz', (bt / 2 + 6 * leaf + bt * 0.5 * Math.sin(Math.PI * leaf)).toFixed(1) + 'px');
        shadow.style.setProperty('--spread-shadow', lerp(0.55, 1, open).toFixed(3));
        steps.forEach(function (li, i) { li.classList.toggle('is-on', q >= [0.02, 0.3, 0.6][i]); });
        return false;
      }
    };
    add(tome, part);
  })();

  // ── 4 · The reader's mark: a hidden watermark shows under the cursor, like UV light
  (function () {
    var uv = document.querySelector('.uv');
    if (!uv) return;
    var mark = uv.querySelector('.uv__mark');
    var text = '';
    var line = 'READER 0412 · COPY 7F3A-29C1 · SHARED 22 OCT 2026 · ';
    for (var i = 0; i < 60; i++) text += '<p>' + (i % 2 ? '' : '  ') + new Array(7).join(line) + '</p>';
    mark.innerHTML = '<div class="uv__text">' + text + '</div>';
    var cur = { x: -999, y: -999, r: 0 }, tgt = { x: 0, y: 0, r: 0 };
    function set() {
      uv.style.setProperty('--ux', cur.x.toFixed(1) + 'px');
      uv.style.setProperty('--uy', cur.y.toFixed(1) + 'px');
      uv.style.setProperty('--ur', cur.r.toFixed(1) + 'px');
    }
    if (!fine) {
      // No cursor: a still pool of light (reduced motion) or one that drifts slowly.
      var part0 = {
        tick: function (t) {
          var w = uv.clientWidth, h = uv.clientHeight;
          cur.x = w * (reduce ? 0.72 : 0.5 + 0.32 * Math.sin(t / 2600));
          cur.y = h * (reduce ? 0.45 : 0.5 + 0.3 * Math.sin(t / 3700 + 1));
          cur.r = Math.min(150, w * 0.35); set();
          return !reduce;
        }
      };
      add(uv, part0);
      return;
    }
    uv.addEventListener('pointermove', function (e) {
      var r = uv.getBoundingClientRect();
      tgt.x = e.clientX - r.left; tgt.y = e.clientY - r.top; tgt.r = 260;
      if (!cur.r) { cur.x = tgt.x; cur.y = tgt.y; }
      kick();
    });
    uv.addEventListener('pointerleave', function () { tgt.r = 0; kick(); });
    add(uv, {
      tick: function () {
        var k = reduce ? 1 : 0.18;
        cur.x = lerp(cur.x, tgt.x, k); cur.y = lerp(cur.y, tgt.y, k); cur.r = lerp(cur.r, tgt.r, reduce ? 1 : 0.12);
        set();
        return Math.abs(cur.x - tgt.x) + Math.abs(cur.y - tgt.y) + Math.abs(cur.r - tgt.r) > 0.5;
      }
    });
  })();

  kick();
  root.classList.add('motion-ready');
})();
