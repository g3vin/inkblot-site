/**
 * frame.ts — one requestAnimationFrame loop for every moving part on a page.
 *
 * A part registers with `add` and only ticks while its element is near the viewport.
 * `tick` returns true while it wants another frame; scrolling and resizing wake the loop.
 */
export interface Part {
  tick: (time: number) => boolean
  resize?: () => void
  on?: boolean
}

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

const parts: Part[] = []
let queued = false

export function kick() {
  if (queued) return
  queued = true
  requestAnimationFrame(frame)
}

function frame(t: number) {
  queued = false
  let more = false
  for (const p of parts) if (p.on && p.tick(t)) more = true
  if (more) kick()
}

export function add(el: Element, part: Part) {
  parts.push(part)
  part.on = !('IntersectionObserver' in window)
  if (!part.on) {
    new IntersectionObserver(
      (es) => {
        part.on = es[0].isIntersecting
        if (part.on) kick()
      },
      { rootMargin: '150px 0px' },
    ).observe(el)
  }
}

window.addEventListener('scroll', kick, { passive: true })
window.addEventListener('resize', () => {
  for (const p of parts) p.resize?.()
  kick()
})

export const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v)
export const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a), 0, 1)
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t
export const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/** 0 when a pinned section's top reaches the viewport top, 1 when its bottom reaches the viewport bottom. */
export function pinProgress(el: Element) {
  const r = el.getBoundingClientRect()
  const span = r.height - window.innerHeight
  return span > 0 ? clamp(-r.top / span, 0, 1) : 1
}

/** A small seeded random generator, so drawn sketches look the same on every visit. */
export function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A closed Catmull-Rom curve through the points, as SVG path data. */
export function closedCurve(pts: [number, number][]) {
  const n = pts.length
  const f = (v: number) => v.toFixed(1)
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`
  for (let k = 0; k < n; k++) {
    const p0 = pts[(k - 1 + n) % n], p1 = pts[k], p2 = pts[(k + 1) % n], p3 = pts[(k + 2) % n]
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`
  }
  return d + 'Z'
}
