/**
 * app.ts — what the app says about itself, from its latest release.
 *
 * scripts/sync-app.mjs writes app.generated.json before every build, from the
 * site-content.zip the app's release workflow attaches (made by the app's
 * showcase/capture.mjs). Nothing here is typed by hand: a new release brings its
 * version, date, changelog and every screenshot and loop with it.
 *
 * With no generated file (offline, no release yet), APP is null and every caller falls
 * back to its placeholder, so the site still builds.
 */

/** A screenshot, at 1× and 2×. */
export interface Still {
  kind: 'still'
  width: number
  height: number
  /** AVIF and WebP srcsets, and the 1× WebP for `src`. */
  avif: string
  webp: string
  src: string
}

/** A silent, seamless loop and its poster (the first frame). */
export interface Loop {
  kind: 'loop'
  width: number
  height: number
  seconds: number
  mp4: string
  webm: string
  poster: string
}

export type Capture = Still | Loop

/** A shot in the app's themes: `light` is Paper, `dark` is Ink. */
export interface Shot {
  light?: Capture
  dark?: Capture
}

export interface ChangelogEntry { title: string | null; text: string }
export interface Release {
  version: string
  /** ISO date, or null for a version not yet dated. */
  date: string | null
  sections: Record<string, ChangelogEntry[]>
}

interface ManifestMedia {
  width: number
  height: number
  images?: { width: number; avif: string; webp: string }[]
  seconds?: number
  mp4?: string
  webm?: string
  poster?: string
}
interface Manifest {
  schema: 1
  source: string
  app: { version: string; tag: string; date: string | null; commit: string | null; capturedAt: string }
  changelog: Release[]
  shots: Record<string, { kind: 'still' | 'loop'; aspect: string; themes: Record<string, ManifestMedia> }>
}

// A glob, not an import, so a missing file means "no release yet" rather than a failed build.
const generated = import.meta.glob<Manifest>('./app.generated.json', { eager: true, import: 'default' })
const manifest: Manifest | null = generated['./app.generated.json'] ?? null

/** The app release the site was built from, or null when it has none. */
export const APP = manifest?.app ?? null

/** Every released version, newest first. */
export const CHANGELOG: Release[] = manifest?.changelog ?? []

const url = (p: string) => `/media/app/${p.replace(/^media\//, '')}`

function capture(kind: 'still' | 'loop', m: ManifestMedia): Capture {
  if (kind === 'loop') {
    return { kind, width: m.width, height: m.height, seconds: m.seconds!, mp4: url(m.mp4!), webm: url(m.webm!), poster: url(m.poster!) }
  }
  const images = m.images ?? []
  return {
    kind,
    width: m.width,
    height: m.height,
    avif: images.map((i) => `${url(i.avif)} ${i.width}w`).join(', '),
    webp: images.map((i) => `${url(i.webp)} ${i.width}w`).join(', '),
    src: url(images[0].webp),
  }
}

const used = new Set<string>()

/**
 * The app's capture of shot `id`, or null when the site has no release to read.
 *
 * When there is one, an id it doesn't have is an error, not a placeholder: the site
 * asked for something the app no longer shows (renamed or removed in showcase/shots.mjs),
 * and the build stops until one of them is changed to match.
 */
export function shot(id: string): Shot | null {
  if (!manifest) return null
  const s = manifest.shots[id]
  if (!s) {
    throw new Error(
      `The site shows app shot "${id}", but app ${manifest.app.tag} has no such shot. ` +
        `Its shots are: ${Object.keys(manifest.shots).join(', ')}. ` +
        `Add "${id}" to the app's showcase/shots.mjs, or change the id here to one of those.`,
    )
  }
  used.add(id)
  return {
    light: s.themes.light && capture(s.kind, s.themes.light),
    dark: s.themes.dark && capture(s.kind, s.themes.dark),
  }
}

/** Warn about shots the app captures that no page uses (call once every registry is built). */
export function reportUnusedShots() {
  if (!manifest) return
  const unused = Object.keys(manifest.shots).filter((id) => !used.has(id))
  if (unused.length) console.warn(`[app] app ${manifest.app.tag} captures shots no page uses yet: ${unused.join(', ')}`)
}
