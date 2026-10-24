/**
 * footage.ts — muted loops that start after the page loads: the places' footage
 * (MediaLoop) and the app's own loops (AppWindow).
 *
 * A figure opts in with data-footage (the MP4), optional data-footage-webm and a
 * .media__pause button; data-footage-label names it for the button ("background
 * footage" by default). Its <img> is the poster and stays as the still.
 *
 * Never on phones, under Save-Data or reduced motion. A figure hidden by the theme (the
 * Ink capture on a Paper page) never loads. Loops pause offscreen and in a hidden tab,
 * and the pause control is remembered for every loop on the site (WCAG 2.2.2).
 */
const PAUSE_KEY = 'ib-site-footage-paused'
function stored() { try { return localStorage.getItem(PAUSE_KEY) === '1' } catch { return false } }
function store(paused: boolean) { try { paused ? localStorage.setItem(PAUSE_KEY, '1') : localStorage.removeItem(PAUSE_KEY) } catch { /* private mode: just don't remember */ } }

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
const wide = window.matchMedia('(min-width: 768px)').matches

document.querySelectorAll<HTMLElement>('[data-footage]').forEach((fig) => {
  const src = fig.dataset.footage
  if (!src || !wide || reduce || saveData) return
  const label = fig.dataset.footageLabel || 'background footage'
  const start = () => {
    if (!fig.getClientRects().length) return
    const v = document.createElement('video')
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'auto'
    v.setAttribute('aria-hidden', 'true')
    // VP9 WebM is about half the MP4's size; fall back where it won't play.
    const webm = fig.dataset.footageWebm
    v.src = webm && v.canPlayType('video/webm; codecs="vp9"') ? webm : src
    const btn = fig.querySelector<HTMLButtonElement>('.media__pause')!
    fig.insertBefore(v, btn)
    fig.classList.add('has-video')
    let paused = stored()
    const render = () => {
      btn.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} ${label}`)
      btn.innerHTML = paused
        ? '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4 2.5v11l9.5-5.5z"/></svg>'
        : '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3.5" y="2.5" width="3" height="11"/><rect x="9.5" y="2.5" width="3" height="11"/></svg>'
    }
    const play = () => { if (!paused && !document.hidden) v.play().then(() => v.classList.add('is-playing')).catch(() => {}) }
    btn.addEventListener('click', () => {
      paused = !paused
      store(paused)
      if (paused) v.pause(); else play()
      render()
    })
    render()
    new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? play() : v.pause()))).observe(fig)
    document.addEventListener('visibilitychange', () => (document.hidden ? v.pause() : play()))
  }
  const later = () => ('requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 2500 }) : setTimeout(start, 1200))
  if (document.readyState === 'complete') later(); else window.addEventListener('load', later)
})
