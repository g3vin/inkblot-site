/**
 * release.ts — every platform Inkblot ships on, and where its download lives.
 *
 * The links, sizes and minimum versions are placeholders until the first release; stage
 * 3 fills them from the release manifest. Chromebooks run the Android build, so they
 * share its store link.
 */
import { APP } from './app'

export type PlatformId = 'mac' | 'windows' | 'linux' | 'ios' | 'android'

export interface Platform {
  id: PlatformId
  /** Shown in the platform row. */
  name: string
  /** The download button's label once the visitor's device is known. */
  action: string
  href: string
  /** The Courier spec line under the button: what you need and what you get. */
  spec: string
}

// A version the changelog hasn't dated yet shows the day it was captured.
const dateTime = APP?.date ?? APP?.capturedAt.slice(0, 10) ?? '2026-09-24'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const [year, month, day] = dateTime.split('-').map(Number)

/**
 * The current release, for the spec and "what's new" lines: the app's own version and
 * date (src/data/app.ts), or v0.1.0's when the site has no release to read.
 */
export const RELEASE = {
  version: APP?.version ?? '0.1.0',
  /** Shown as written; ISO in `dateTime`. */
  date: `${day} ${MONTHS[month - 1]} ${year}`,
  dateTime,
  notes: '/changelog',
}

export const PLATFORMS: Platform[] = [
  { id: 'mac', name: 'macOS', action: 'Download for macOS', href: '#download-macos', spec: 'Free · macOS [13]+ · [48 MB] · No account' },
  { id: 'windows', name: 'Windows', action: 'Download for Windows', href: '#download-windows', spec: 'Free · Windows [10]+ · [52 MB] · No account' },
  { id: 'linux', name: 'Linux', action: 'Download for Linux', href: '#download-linux', spec: 'Free · AppImage, .deb · [60 MB] · No account' },
  { id: 'ios', name: 'iPhone & iPad', action: 'Get it on the App Store', href: '#download-app-store', spec: 'Free · iOS & iPadOS [17]+ · No account' },
  { id: 'android', name: 'Android & Chromebook', action: 'Get it on Google Play', href: '#download-google-play', spec: 'Free · Android [10]+ · No account' },
]

/** Where the button points before the visitor's device is known. */
export const DOWNLOAD_ALL = '#download-all'

/** The spec line before the visitor's device is known. */
export const SPEC_ANY = 'Free on Mac, Windows, Linux, iPhone, iPad and Android · No account'
