/**
 * featureScenes.ts — simple drawings of each feature, shown through the cut in the
 * roster until real screenshots exist. Each is an SVG on a 1200 × 900 canvas with its
 * interest near the middle, where the cut opens. Seeded, so they never change.
 */
import { reduceMotion, rng } from './frame'

// Drawn in the app's Pitch-black palette: ember, muted ember, night sage, rule and card.
const E = '#c9a273', M = '#82684a', S = '#a7bc94', L = '#2a251f', CARD = '#1d1b18'
function lines(r: () => number, x: number, y: number, w: number, rows: number, gap: number, colour: string, op: number) {
  var o = '';
  for (var i = 0; i < rows; i++) {
    var ww = i === rows - 1 ? w * (0.35 + r() * 0.4) : w * (0.82 + r() * 0.18);
    o += '<rect x="' + x + '" y="' + (y + i * gap) + '" width="' + ww.toFixed(0) + '" height="' + Math.round(gap * 0.32) + '" rx="' + Math.round(gap * 0.16) + '" fill="' + colour + '" opacity="' + op + '"/>';
  }
  return o;
}
const blink = reduceMotion ? '' : '<animate attributeName="opacity" values="1;1;0;0" dur="1.1s" repeatCount="indefinite"/>';
const SCENES: Record<string, (r: () => number) => string> = {
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
  history: function (r) {
    // Three versions fanned back, the oldest behind, with their names in Courier.
    var o = '', names = ['Before the rewrite', '14 Oct', 'Now'];
    for (var i = 0; i < 3; i++) {
      var x = 300 + i * 70, y = 120 + i * 90, op = 0.45 + i * 0.27;
      o += '<g opacity="' + op.toFixed(2) + '"><rect x="' + x + '" y="' + y + '" width="520" height="560" rx="12" fill="' + CARD + '" stroke="' + (i === 2 ? S : L) + '" stroke-width="2"/>' +
        '<text x="' + (x + 28) + '" y="' + (y + 44) + '" fill="' + (i === 2 ? S : E) + '" font-family="Courier Prime, monospace" font-size="20">' + names[i] + '</text>' +
        lines(r, x + 28, y + 80, 460, 12, 34, M, 0.7) + '</g>';
    }
    return o;
  },
  flowcharts: function (r) {
    var o = '', nodes = [[600, 110], [360, 330], [840, 330], [220, 560], [500, 560], [840, 560], [380, 790], [840, 790]];
    var edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [4, 6], [3, 6], [5, 7]];
    edges.forEach(function (e) {
      var a = nodes[e[0]], b = nodes[e[1]];
      o += '<path d="M' + a[0] + ' ' + (a[1] + 40) + ' C' + a[0] + ' ' + (a[1] + 120) + ' ' + b[0] + ' ' + (b[1] - 120) + ' ' + b[0] + ' ' + (b[1] - 40) + '" fill="none" stroke="' + (e[0] === 0 ? S : M) + '" stroke-width="2.5" opacity="0.8"/>';
    });
    nodes.forEach(function (n, i) {
      o += i === 2 || i === 4
        ? '<path d="M' + n[0] + ' ' + (n[1] - 46) + ' L' + (n[0] + 90) + ' ' + n[1] + ' L' + n[0] + ' ' + (n[1] + 46) + ' L' + (n[0] - 90) + ' ' + n[1] + 'Z" fill="' + CARD + '" stroke="' + E + '" stroke-width="2"/>'
        : '<rect x="' + (n[0] - 110) + '" y="' + (n[1] - 40) + '" width="220" height="80" rx="10" fill="' + CARD + '" stroke="' + L + '" stroke-width="2"/>' + lines(r, n[0] - 86, n[1] - 12, 172, 2, 26, E, 0.6);
    });
    return o;
  },
  references: function (r) {
    var o = lines(r, 180, 90, 840, 7, 34, M, 0.7);
    o += '<text x="760" y="324" fill="' + S + '" font-family="Literata, serif" font-size="22">(Rowe, 1998, p. 41)</text>';
    o += '<line x1="180" y1="430" x2="1020" y2="430" stroke="' + L + '" stroke-width="2"/>';
    o += '<text x="180" y="480" fill="' + E + '" font-family="Courier Prime, monospace" font-size="18">REFERENCES</text>';
    for (var i = 0, y = 530; i < 5; i++, y += 70) {
      o += '<rect x="180" y="' + y + '" width="' + (180 + r() * 120).toFixed(0) + '" height="12" rx="6" fill="' + E + '" opacity="0.8"/>' + lines(r, 220, y + 26, 760, 1, 30, M, 0.6);
    }
    return o;
  },
  readers: function (r) {
    // A chapter with three readers' marks in the margin, grouped by reader.
    var o = '', y = 80, who = [[S, 'Mira'], [E, 'Jon'], [M, 'Ade']];
    while (y < 860) {
      o += lines(r, 160, y, 620, 4, 34, M, 0.6);
      var w = who[Math.floor(r() * 3)], hx = 180 + r() * 360;
      o += '<rect x="' + hx.toFixed(0) + '" y="' + (y + 30) + '" width="160" height="22" rx="3" fill="' + w[0] + '" opacity="0.28"/>';
      o += '<circle cx="860" cy="' + (y + 41) + '" r="14" fill="' + w[0] + '"/><text x="886" y="' + (y + 48) + '" fill="' + w[0] + '" font-family="Courier Prime, monospace" font-size="19">' + w[1] + '</text>';
      y += 190;
    }
    return o + '<line x1="160" y1="' + (y - 40) + '" x2="780" y2="' + (y - 40) + '" stroke="' + S + '" stroke-width="2" stroke-dasharray="8 8"/>';
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

/** The feature's drawing as an SVG element string, or an empty drawing for an unknown id. */
export function sceneSvg(id: string) {
  const draw = SCENES[id]
  const body = draw ? draw(rng(id.length * 131 + id.charCodeAt(0))) : ''
  return `<svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" data-id="${id}">${body}</svg>`
}
