/**
 * nav.ts — the header and footer links. Layouts read these; no link is hard-coded in
 * them.
 *
 * Links to pages that aren't built yet (the promise, changelog, privacy and so on) point
 * at the route they'll have, and stay hidden until that route is listed in BUILT, so the
 * site never links to a 404. Add a route to BUILT when its page lands.
 */
import { SITE } from './site'

export interface NavLink {
  label: string
  href: string
  /** Still shown in the header on phones, where the other links are hidden. */
  mobile?: boolean
}

export const HEADER_NAV: NavLink[] = [
  { label: 'Features', href: '/#window' },
  { label: 'Marketplace', href: '/#marketplace' },
  { label: 'No AI', href: '/#pledge' },
  { label: 'Free', href: '/#price' },
  { label: 'Source', href: SITE.source },
  { label: 'About', href: '/about', mobile: true },
]

const ALL_FOOTER: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Marketplace', href: '/#marketplace' },
  { label: 'The promise', href: '/promise' },
  { label: 'Source', href: SITE.source },
  { label: 'Support', href: SITE.support },
  { label: 'Code of conduct', href: '/conduct' },
  { label: 'Trademarks', href: '/trademarks' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Privacy', href: '/privacy' },
]

/** Site routes that exist. Links to other site routes are left out until they're added here. */
export const BUILT = new Set<string>(['/', '/about'])

/** Whether a link can be shown: external links always, site links once their page exists. */
export function isLive(href: string) {
  if (!href.startsWith('/')) return true
  return BUILT.has(href.split('#')[0] || '/')
}

export const FOOTER_NAV = ALL_FOOTER.filter((l) => isLive(l.href))
