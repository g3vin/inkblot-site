/**
 * device.ts — names the visitor's device on every download button and bolds it in every
 * platform row. Without script the buttons keep their "Download free" label and the
 * link to all platforms.
 */
type PlatformId = 'mac' | 'windows' | 'linux' | 'ios' | 'android'

function detect(): PlatformId | null {
  const ua = navigator.userAgent || ''
  const touchMac = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1 // iPadOS reports as a Mac
  if (/iPhone|iPad|iPod/.test(ua) || touchMac) return 'ios'
  // Chromebooks run Inkblot's Android build, so they get the Play Store button.
  if (/Android|CrOS/.test(ua)) return 'android'
  if (/Windows/.test(ua)) return 'windows'
  if (/Mac OS X|Macintosh/.test(ua)) return 'mac'
  if (/Linux|X11/.test(ua)) return 'linux'
  return null
}

const device = detect()
if (device) {
  document.querySelectorAll<HTMLAnchorElement>('[data-download]').forEach((a) => {
    const target = document.querySelector<HTMLAnchorElement>(`[data-platform="${device}"]`)
    const label = a.querySelector('[data-download-label]') ?? a
    label.textContent = a.hasAttribute('data-download-short') ? 'Download' : (a.dataset[`label${device[0].toUpperCase()}${device.slice(1)}`] ?? label.textContent)
    if (target) a.href = target.href
  })
  document.querySelectorAll<HTMLElement>('[data-spec]').forEach((p) => {
    p.textContent = p.dataset[`spec${device[0].toUpperCase()}${device.slice(1)}`] ?? p.textContent
  })
  document.querySelectorAll(`[data-platform="${device}"]`).forEach((el) => el.setAttribute('aria-current', 'true'))
}
