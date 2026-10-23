/**
 * home.ts — the landing page's words, section by section. Edit copy here; the
 * components only lay it out.
 *
 * Copy rules (from the app's PROMISE.md): say what Inkblot is for, never who it's
 * against; never "upgrade", "pro", "premium", "unlock", "trial", "plan", "Plus" or
 * "No cloud"; never invent a testimonial. Each claim is made once: the band owns
 * "no account, offline, no AI", the price section owns "free" and "no ads" (site.ts → PRICE), the
 * pledge owns the proof. "Your files" is said by the hero's lede and explained by the pledge,
 * nowhere else. A feature with a section of its own (or a roster row) isn't repeated in
 * another section's facts. A section's line says what it's for; its steps explain how.
 */
export const HOME = {
  hero: {
    title: 'Write.',
    line: ['Start with a sentence.', 'Finish with a book.'],
    lede: 'The whole story, in one window.',
    place: 'leaves-summer',
  },

  band: {
    line: 'No account needed. Works offline. No AI writing for you.',
  },

  split: {
    title: 'The whole story, in one window.',
    problem: "A novel is never one document. It's a manuscript, a wall of index cards and a map of somewhere that doesn't exist, spread over four apps.",
    panes: {
      prose: '[Prose — Chapter 3, The Lamp Room]',
      canvas: '[Canvas — the cast as cards, with strings between them]',
      map: '[Map — the coast road, day 3 of the journey]',
    },
    captions: ['One chapter', 'Prose beside its canvas', 'Canvas beside its map', 'Any two, side by side'],
    facts: [
      'Canvases are JSON Canvas, so Obsidian opens them too',
      'Maps of invented worlds, other planets or the real Earth',
    ],
  },

  notes: {
    title: 'Notes that stay with the words.',
    body: "Leave a photo, a voice memo or a question on the exact phrase it's about, not at the bottom of a file.",
    // A line from the sample book, with the phrase the note is pinned to.
    passage: { before: 'She had promised her father she would ', anchor: 'light it at dusk', after: '. It was well past dusk. The sea had gone the colour of slate, then of nothing at all.' },
    note: '[Note — a photo of the lamp, and a 0:42 voice memo]',
  },

  night: {
    title: "For the story you write after everyone's asleep.",
    screen: 'editor-night',
  },

  roster: {
    eyebrow: 'Everything else a long story needs',
  },

  book: {
    title: 'Then it becomes a book.',
    steps: ['Pick a trim size.', 'Inkblot sets the cover and spine.', 'And every page inside, ready for the printer.'],
    facts: ['6 × 9 · 5.5 × 8.5 · 5 × 8 · or your own', 'Cover with spine and ⅛ in bleed', 'PDF · EPUB · Word · Markdown · HTML'],
    note: 'Sample pages · the real spread will be exported from Inkblot',
    // The sample book in the 3D model. Placeholder text in brackets until a real
    // public-domain title is typeset in Inkblot (design-iterations/final/ASSETS.md).
    sample: {
      title: 'The Lighthouse Keeper',
      author: '[Author]',
      imprint: '[Imprint]',
      coverTag: '[COVER — art by a credited artist]',
      chapterLabel: 'Chapter three',
      chapterTitle: 'The Lamp Room',
      verso: [
        'down to the harbour, where the boats knocked together like loose teeth. Nobody looked up. Nobody ever looked up at a lighthouse until it went out.',
        '“You’ll learn the weather,” her father had said, the spring she turned twelve. “The weather won’t learn you.” She had thought it was a joke. Most of what he said turned out not to be.',
        'By autumn she knew the gulls by their quarrels and the tide by its smell, and she could tell from the colour of the morning whether the mail boat would come.',
      ],
      recto: [
        'The stairs turned seven times before the lamp room, and Ada counted every one, because counting kept the dark at the window where it belonged. Above her the lens waited, cold and patient, a cathedral of glass no wider than a kitchen table.',
        'She had promised her father she would light it at dusk. It was well past dusk. The sea had gone the colour of slate, then of nothing at all.',
      ],
    },
  },

  // The download offered again at the peak: straight after the book.
  bookCta: {
    line: 'Your first chapter is a download away.',
  },

  marketplace: {
    eyebrow: 'The marketplace',
    title: 'Read each other.',
    line: 'Post a chapter, a poem, a story or a script, and other writers review it line by line.',
    place: 'leaves-summer',
    placeTag: '[PLACE PHOTO — a window seat, someone reading]',
    steps: [
      { title: 'Read', text: "Take on someone's chapter." },
      { title: 'Review', text: 'Notes in the margin, a report at the end.' },
      { title: 'Earn', text: 'Coins for every finished review.' },
      { title: 'Be read', text: 'Spend them to post your own.' },
    ],
    screen: 'review',
    rules: [
      "Coins can't be bought. Every review is earned.",
      'Take on a work and you finish it.',
      'Writers rate every review.',
      "Report a reviewer who isn't human.",
    ],
  },

  pledge: {
    title: 'The world is yours. So is every word.',
    items: [
      { title: 'No AI writes for you.', text: 'Nothing in Inkblot drafts, rewrites, continues or summarises your words.' },
      { title: 'Never trained on your work.', text: "We'll never use your writing to train AI, or sell or license it to anyone who would." },
      { title: 'Proof you wrote it.', text: 'Turn on Green Thumb and Inkblot keeps a sealed record of how a piece was written, down to where every paste came from.' },
      // Fourth, so it sits directly above the hint that explains the mark under the cursor.
      { title: 'Marked to every reader.', text: "Work shared for review carries a hidden mark that traces a leak to whoever viewed it. Screenshots are blocked wherever the device allows." },
      { title: 'Your files, your folders.', text: 'Every document is a file on your disk, in a folder you choose. Nothing is backed up to us unless you share it.' },
      { title: 'Open to check.', text: "Every line of Inkblot is public. Don't take these promises on trust; read them in the code." },
    ],
    hint: 'Every shared copy carries a mark like the one under your cursor.',
    mark: 'READER 0412 · COPY 7F3A-29C1 · SHARED 22 OCT 2026 · ',
    link: { label: 'Our promise →', href: '/promise' },
  },

  proof: {
    // Real quotes only, with written permission. The section hides itself while empty.
    testimonials: [] as { quote: string; name: string; writes: string }[],
  },
}
