/**
 * about.ts — the words and photo on /about, the page about the person who makes Inkblot.
 * Edit them here; src/pages/about.astro only lays them out.
 *
 * Everything in [brackets] is a placeholder for the owner to write. Nothing here is
 * invented on their behalf: the page shows the brackets until they're replaced.
 */
export const ABOUT = {
  title: 'About the maker',
  description: 'Who makes Inkblot, and why.',

  name: 'Gavin Bowden',
  /** One line under the name, in Courier: where, and what you write. */
  meta: '[Where you live] · [What you write] · Making Inkblot since [month year]',

  /** The portrait. Null until it's supplied; the page shows a labelled slot at 4:5. */
  photo: null as null | { src: string; alt: string; width: number; height: number },
  photoPlaceholder: '[PORTRAIT — you, somewhere you write · 4:5, at least 1200 × 1500]',

  /** A short hello, set large. One or two sentences. */
  intro: '[A sentence or two, in your own voice: who you are and what you were writing when you started.]',

  bio: [
    '[A paragraph about you: what you write, what you do when you aren’t writing, and what you studied or worked on before.]',
    '[Optional: a second paragraph, for anything a writer would want to know about the person whose app they trust with their work.]',
  ],

  why: {
    title: 'Why I made Inkblot',
    paragraphs: [
      '[The moment it started: the book or project you were working on, and the apps that got in the way.]',
      '[What you wanted instead. The whole book in one window? Notes that stay with the words? Files you own, with no AI writing for you?]',
      '[Why it’s free and open source, and what you hope writers do with it.]',
    ],
  },

  /** Ways to reach you. Leave out any that don't apply. */
  links: [
    { label: '[Email]', href: 'mailto:[hello@inkblotwriting.studio]' },
    { label: 'GitHub', href: 'https://github.com/g3vin' },
  ],

  /** Closing line above the download. */
  close: '[A last line to the reader, e.g. what you hope they write.]',
}
