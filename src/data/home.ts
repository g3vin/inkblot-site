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
 * The split's column is one paragraph, one live caption and one spec line.
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
    problem: "A novel is never one document. It's a manuscript, index cards and a map, spread over four apps.",
    captions: ['One chapter', 'Prose beside its canvas', 'Canvas beside its map', 'Any two, side by side'],
    facts: ['JSON Canvas, opens in Obsidian · Maps of any world, or Earth'],
  },

  notes: {
    title: 'Notes that stay with the words.',
    body: "Leave a photo, a voice memo or a question on the exact phrase it's about, not at the bottom of a file.",
    // The app's own capture (screens.ts): a passage with a note pinned to "light it at dusk".
    screen: 'notes',
  },

  // The app's window colours and the ink wheel, all the app's own captures (InksSection).
  inks: {
    title: 'Color it in.',
    body: 'Notes, canvas cards and their strings, map pins, table cells and the window itself, in eight inks made for the light and the dark.',
    wheel: 'Press a color and the ink wheel blooms out of it. Swipe toward the one you want. Every ink opens in the same place, so your hand learns where each one is.',
  },

  night: {
    title: "For the story you write after everyone's asleep.",
    screen: 'editor-night',
  },

  roster: {
    eyebrow: 'Everything else a long story needs',
  },

  // The forms a manuscript turns into, in scroll order. The headline keeps "Then it
  // becomes" and swaps `name`; each form's model on the right turns in and opens.
  book: {
    lead: 'Then it becomes',
    forms: [
      {
        id: 'book',
        name: 'a book.',
        line: 'Pick a trim size. Inkblot sets the cover, the spine and every page inside, ready for the printer.',
        facts: ['6 × 9 · 5.5 × 8.5 · 5 × 8 · or your own', 'Cover with spine and ⅛ in bleed', 'Print-ready PDF'],
      },
      {
        id: 'poetry',
        name: 'a poetry collection.',
        line: 'Your line breaks stay where you put them, with the white space a poem needs around it.',
        facts: ['A verse style, set flush left', 'Dedication, epigraph and contents', 'Print-ready PDF · EPUB'],
      },
      {
        id: 'script',
        name: 'a screenplay.',
        line: 'Industry format as you type, paginated the way a production reads it.',
        facts: ['Courier 12 · US Letter or A4', '(MORE) and (CONT’D) across pages', 'PDF · Final Draft · Fountain'],
      },
      {
        id: 'ebook',
        name: 'an ebook.',
        line: 'The same chapters reflow for every screen, with the cover and contents inside.',
        facts: ['EPUB, for any e-reader or store', 'Your fonts, chapter openings and styles', 'Cover and contents included'],
      },
      {
        id: 'all',
        name: 'whatever you wrote.',
        line: 'One manuscript, every shape it has to take.',
        facts: ['PDF · EPUB · Word · Markdown · HTML', 'Final Draft · Fountain', 'Plain text, for everything else'],
      },
    ],
    note: 'Sample pages · the real ones will be exported from Inkblot',
    // The sample book in the 3D model: Little Women (Louisa May Alcott, 1868; Project
    // Gutenberg #514), open at the end of chapter one and the start of chapter two. The
    // right-hand page ends mid-paragraph, as a typeset page does.
    sample: {
      title: 'Little Women',
      author: 'Louisa May Alcott',
      coverTag: '[COVER — art by a credited artist]',
      chapterLabel: 'Chapter two',
      chapterTitle: 'A Merry Christmas',
      verso: [
        'and it had become a household custom, for the mother was a born singer. The first sound in the morning was her voice as she went about the house singing like a lark, and the last sound at night was the same cheery sound, for the girls never grew too old for that familiar lullaby.',
      ],
      recto: [
        'Jo was the first to wake in the gray dawn of Christmas morning. No stockings hung at the fireplace, and for a moment she felt as much disappointed as she did long ago, when her little sock fell down because it was crammed so full of goodies. Then she remembered her mother’s promise and, slipping her hand under her pillow, drew out a little crimson-covered book. She knew it very well, for it was',
      ],
    },
    // A saddle-stitched chapbook, open on two poems: the first two of The Single Hound
    // (Emily Dickinson, 1914, edited by Martha Dickinson Bianchi), as printed there. Each
    // poem is stanzas of lines.
    poems: {
      title: 'The Single Hound',
      author: 'Emily Dickinson',
      left: { title: 'I', folio: 2, stanzas: [['Adventure most unto itself', 'The Soul condemned to be;', 'Attended by a Single Hound –', 'Its own Identity.']] },
      right: { title: 'II', folio: 3, stanzas: [['The Soul that hath a Guest,', 'Doth seldom go abroad,', 'Diviner Crowd at home', 'Obliterate the need,', 'And courtesy forbid', 'A Host’s departure, when', 'Upon Himself be visiting', 'The Emperor of Men!']] },
    },
    // A bradded script: the title page, then page one. The Importance of Being Earnest
    // (Oscar Wilde, 1895; Project Gutenberg #844), the opening of Act I.
    script: {
      title: 'THE IMPORTANCE OF BEING EARNEST',
      author: 'Oscar Wilde',
      contact: ['A Trivial Comedy for Serious People'],
      page: [
        ['scene', 'FIRST ACT'],
        ['action', 'Morning-room in Algernon’s flat in Half-Moon Street. The room is luxuriously and artistically furnished. The sound of a piano is heard in the adjoining room.'],
        ['action', 'Lane is arranging afternoon tea on the table, and after the music has ceased, Algernon enters.'],
        ['character', 'ALGERNON'],
        ['dialogue', 'Did you hear what I was playing, Lane?'],
        ['character', 'LANE'],
        ['dialogue', 'I didn’t think it polite to listen, sir.'],
        ['character', 'ALGERNON'],
        ['dialogue', 'I’m sorry for that, for your sake. I don’t play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life.'],
        ['character', 'LANE'],
        ['dialogue', 'Yes, sir.'],
      ],
    },
    // The e-reader: its sleep screen shows the cover, then it wakes on chapter three.
    ebook: { progress: '34%', left: '6 min left in chapter' },
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
