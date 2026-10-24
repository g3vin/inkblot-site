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

interface Words extends Omit<Screen, 'id' | 'shot'> {
  /** A shot the app's next release adds: until one carries it, a placeholder rather than a failed build. */
  upcoming?: boolean
}

// The window colours, in the app's order (Settings → Window colour), Sage, the default, last.
export const WINDOW_INKS = [
  ['blue', 'Ink Blue', 'the March family’s year on a timeline'],
  ['teal', 'Teal', 'Concord, a map of Little Women’s places'],
  ['green', 'Green', 'the Milky Way, a galaxy map'],
  ['amber', 'Amber', 'Little Women, “A Merry Christmas”'],
  ['rust', 'Rust', 'The Importance of Being Earnest, Act One'],
  ['red', 'Red', 'Little Women, “The Laurence Boy”'],
  ['violet', 'Violet', 'To the Lighthouse, “Time Passes”'],
  ['slate', 'Slate', 'To the Lighthouse, “The Window”'],
  ['sage', 'Sage', 'Little Women, “Playing Pilgrims”, with its notes'],
] as const

const WORDS: Record<string, Words> = {
  editor: {
    alt: 'Inkblot’s editor, mid-chapter: Little Women, “Playing Pilgrims”, with the next line being written.',
    aspect: '16 / 10',
    placeholder: "[APP SCREENSHOT OR 20 s LOOP — the editor, matching the page's theme]",
  },
  'editor-night': {
    alt: 'Inkblot’s editor in Midnight, its pure black theme, open on To the Lighthouse, “Time Passes”.',
    aspect: '16 / 9',
    placeholder: '[APP SCREENSHOT — the editor in Midnight, pure black]',
  },
  notes: {
    alt: 'A passage from Little Women with a note pinned beside “a pleasant atmosphere of home peace pervaded it”: a photo of Orchard House and a 42-second voice memo, tied to the phrase by a thread.',
    aspect: '9 / 4',
    placeholder: '[APP CAPTURE — a passage with a note pinned to a phrase: a photo and a 0:42 voice memo]',
  },
  review: {
    alt: 'Little Women, chapter one, with a reader’s notes beside it, each anchored to a line.',
    aspect: '21 / 9',
    placeholder: '[APP SCREENSHOT — a chapter under review, margin notes from another writer]',
  },

  // "The whole story, in one window": a hand at work in one window, all the app's own motion.
  hero: {
    alt: 'Inkblot, open on Little Women. The cast canvas is dragged from the file tree onto the page and the window splits: the chapter beside the canvas. The map of Concord is dragged over the chapter, then a galaxy over the map. Back to the chapter, the split is closed.',
    aspect: '16 / 10',
    placeholder: '[APP LOOP — a document dragged onto the page splits the window: chapter, canvas, map, galaxy]',
  },

  // "Color it in.": a window in each of the app's colours, then a note's colour on the ink wheel.
  ...Object.fromEntries(WINDOW_INKS.map(([ink, name, doc]) => [`inks-${ink}`, {
    alt: `Inkblot’s window in ${name}, open on ${doc}.`,
    aspect: '16 / 10',
    placeholder: `[APP SCREENSHOT — the window in ${name}]`,
  }])),
  'inks-wheel': {
    alt: 'A note’s color pressed: the ink wheel blooms around it, a swipe to Teal, and the note and its phrase turn teal.',
    aspect: '16 / 10',
    placeholder: '[APP FRAMES — a note’s color changed on the ink wheel]',
  },

  // The feature roster: what each one looks like at work, 4 / 3 like its frame.
  timeline: {
    alt: 'The March family’s year on a timeline, one lane each for Meg, Jo, Beth, Amy and the family.',
    aspect: '4 / 3',
    placeholder: '[Timeline — who was where, and when]',
  },
  history: {
    alt: 'Version history: “Playing Pilgrims” compared with its first draft.',
    aspect: '4 / 3',
    placeholder: '[Version history — a chapter beside its first draft]',
  },
  language: {
    alt: 'The Workbench: synonyms for “grumbled”, rhymes for “rug” and a definition of “dreadful”.',
    aspect: '4 / 3',
    placeholder: '[Language tools — synonyms, rhymes and a definition]',
  },
  bubble: {
    alt: 'The Bubble editor: a sentence from Little Women broken into words to rearrange.',
    aspect: '4 / 3',
    placeholder: '[Bubble editor — a sentence, word by word]',
  },
  screenplays: {
    alt: 'The Importance of Being Earnest, Act One, written as a stage play.',
    aspect: '4 / 3',
    placeholder: '[Screenplays — a script in industry format]',
  },
  references: {
    alt: 'A project’s references: three sources on Louisa May Alcott, in Chicago style.',
    aspect: '4 / 3',
    placeholder: '[References — a bibliography from a DOI]',
  },
}

export const SCREENS: Record<string, Screen> = Object.fromEntries(
  Object.entries(WORDS).map(([id, { upcoming, ...words }]) => [id, { id, shot: shot(id, { upcoming }), ...words }]),
)
reportUnusedShots()
