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
  /** When each step happens, in seconds from the loop's start (the app's h.mark). */
  marks?: Record<string, number>
  /** The frame that stands for the loop where nothing moves: AVIF and WebP. */
  rest?: { avif: string; webp: string }
}

/**
 * A short recording's frames, for a page to play by scrolling. `focus` is the part of
 * the window (`window`, CSS px) the frames keep; frame n is `frame(n)`, from 1.
 */
export interface Sequence {
  kind: 'sequence'
  width: number
  height: number
  window: { width: number; height: number }
  focus: { x: number; y: number; width: number; height: number }
  fps: number
  frames: number
  frame: (n: number) => string
}

export type Capture = Still | Loop | Sequence

/** A shot in the app's themes: `light` is Paper, `dark` is Ink, `midnight` is pure black. */
export interface Shot {
  light?: Capture
  dark?: Capture
  midnight?: Capture
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
  marks?: Record<string, number>
  rest?: { avif: string; webp: string }
  window?: { width: number; height: number }
  focus?: { x: number; y: number; width: number; height: number }
  fps?: number
  frames?: number
  pattern?: string
}
interface Manifest {
  schema: 1
  source: string
  app: { version: string; tag: string; date: string | null; commit: string | null; capturedAt: string }
  changelog: Release[]
  shots: Record<string, { kind: Capture['kind']; aspect: string; themes: Record<string, ManifestMedia> }>
}

// A glob, not an import, so a missing file means "no release yet" rather than a failed build.
const generated = import.meta.glob<Manifest>('./app.generated.json', { eager: true, import: 'default' })
const manifest: Manifest | null = generated['./app.generated.json'] ?? null

/** The app release the site was built from, or null when it has none. */
export const APP = manifest?.app ?? null

/** Every released version, newest first. */
export const CHANGELOG: Release[] = manifest?.changelog ?? []

const url = (p: string) => `/media/app/${p.replace(/^media\//, '')}`

function capture(kind: Capture['kind'], m: ManifestMedia): Capture {
  if (kind === 'loop') {
    return {
      kind, width: m.width, height: m.height, seconds: m.seconds!, mp4: url(m.mp4!), webm: url(m.webm!), poster: url(m.poster!),
      ...(m.marks ? { marks: m.marks } : {}),
      ...(m.rest ? { rest: { avif: url(m.rest.avif), webp: url(m.rest.webp) } } : {}),
    }
  }
  if (kind === 'sequence') {
    const pattern = url(m.pattern!)
    return {
      kind, width: m.width, height: m.height, window: m.window!, focus: m.focus!, fps: m.fps!, frames: m.frames!,
      frame: (n) => pattern.replace('%04d', String(n).padStart(4, '0')),
    }
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
 * and the build stops until one of them is changed to match. The one exception is a shot
 * `upcoming` in the app's next release: until a release carries it, it's a placeholder.
 */
export function shot(id: string, { upcoming = false } = {}): Shot | null {
  if (!manifest) return null
  const s = manifest.shots[id]
  if (!s && upcoming) {
    console.warn(`[app] app ${manifest.app.tag} doesn't capture "${id}" yet (upcoming); showing its placeholder`)
    return null
  }
  if (!s) {
    throw new Error(
      `The site shows app shot "${id}", but app ${manifest.app.tag} has no such shot. ` +
        `Its shots are: ${Object.keys(manifest.shots).join(', ')}. ` +
        `Add "${id}" to the app's showcase/shots.mjs, or change the id here to one of those.`,
    )
  }
  used.add(id)
  return Object.fromEntries(Object.entries(s.themes).map(([theme, m]) => [theme, capture(s.kind, m)])) as Shot
}

/** Warn about shots the app captures that no page uses (call once every registry is built). */
export function reportUnusedShots() {
  if (!manifest) return
  const unused = Object.keys(manifest.shots).filter((id) => !used.has(id))
  if (unused.length) console.warn(`[app] app ${manifest.app.tag} captures shots no page uses yet: ${unused.join(', ')}`)
}
