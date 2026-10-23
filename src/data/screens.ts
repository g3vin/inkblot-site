/**
 * screens.ts — app screenshots and loops, by id. AppWindow looks a screen up here, so a
 * new capture replaces itself everywhere it's used.
 *
 * The words are written here; the pictures come from the app. Each id is a shot in the
 * app's showcase/shots.mjs, captured on every app release and fetched before the build
 * (src/data/app.ts). An id the app doesn't capture fails the build. Before the first
 * release (or offline) `shot` is null, and AppWindow draws a labelled placeholder at the
 * final aspect ratio (design-iterations/final/ASSETS.md lists them).
 */
import { shot, reportUnusedShots, type Shot } from './app'

export interface Screen {
  id: string
  /** The app's capture in Paper (light) and Ink (dark), or null while it's a placeholder. */
  shot: Shot | null
  alt: string
  /** Width / height, e.g. '16 / 10'. */
  aspect: string
  /** What the placeholder says it's waiting for. */
  placeholder: string
}

const WORDS: Record<string, Omit<Screen, 'id' | 'shot'>> = {
  editor: {
    alt: 'The Inkblot editor, mid-chapter.',
    aspect: '16 / 10',
    placeholder: "[APP SCREENSHOT OR 20 s LOOP — the editor, matching the page's theme]",
  },
  'editor-night': {
    alt: 'The Inkblot editor in its dark theme, mid-chapter.',
    aspect: '16 / 9',
    placeholder: '[APP SCREENSHOT — the editor in the dark theme]',
  },
  notes: {
    alt: 'A passage in Inkblot with a note pinned beside the words “light it at dusk”: a photo of a lighthouse lamp and a 42-second voice memo, tied to the phrase by a thread.',
    aspect: '23 / 8',
    placeholder: '[APP CAPTURE — a passage with a note pinned to “light it at dusk”: a photo of the lamp and a 0:42 voice memo]',
  },
  review: {
    alt: 'A chapter with a reader’s notes beside it, each anchored to a line.',
    aspect: '21 / 9',
    placeholder: '[APP SCREENSHOT — a chapter under review, margin notes from another writer]',
  },
}

export const SCREENS: Record<string, Screen> = Object.fromEntries(
  Object.entries(WORDS).map(([id, words]) => [id, { id, shot: shot(id), ...words }]),
)
reportUnusedShots()
