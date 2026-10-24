# D · After dark

**Concept.** The quiet room. The whole site opens in Pitch black (Ember text on true
black), the night section of the plan grown into the entire page.
- One reading column, about 44rem wide.
- "Write." with a blinking Fern caret.
- A short letter in Literata in place of a feature grid.
- A hairline list for the journey.
- One still of the leaves, darkened, in place of footage.
- The header carries only the wordmark and a quiet Download.

**Target emotion.** Calm focus: the house asleep, the cursor waiting.

**Sub-line tested:** "For the book you write after everyone's asleep." as the hero line,
with "Start with a sentence. Finish with a book." folded into the paragraph under it.

**Type.**
- Inter Display Bold for "Write." and the few headings.
- Literata at a larger reading size (20–24px in the letter) carries most of the page.
- Courier Prime for captions and the window's "2:14 am".

**Palette and contrast (Pitch black, the default).**

| Pair | Ratio |
|---|---|
| Ember `#c9a273` on `#000` | 8.9 |
| Text-2 `#b38f66` | 7.0 |
| Muted `#a08060` | 5.8 |
| Fern-night `#8aa86c` | 7.9 |
| Black on Fern-night (button) | 7.9 |

Paper and Ink are one tap away in the footer switch, with the same ratios as A. The
default is set with `data-default-theme="black"`; a visitor's own choice wins.

**Trade-offs.**
- It's the most distinctive and the most "Inkblot", and it sells Pitch black (a real
  app feature) by being it.
- It's also the least scannable. There's no feature grid, so people hunting for
  specifics have to read.
- Black-first sites read as "dev tool" or "music app" to some visitors.
- The warm Ember text is lovely at night and can look dim in a bright office.
- It's the cheapest to finish: it needs only two screenshots, the sample spread and the
  testimonials.

**Who it would appeal to most:** writers who work at night, people who loved iA Writer's
focus, and people who already distrust busy software.
**Who it might lose:** people comparing features, and anyone who wants proof of print or
maps at a glance.

**Lighthouse (mobile, simulated slow 4G, uncompressed local server).**
- Scores: Performance 99, Accessibility 100, Best practices 100, SEO 100.
- LCP 2.0 s (the hero paragraph), TBT 0 ms, CLS 0, FCP 1.2 s, 200 KB.

**axe** (Paper, Ink, Black at 1280 and 375): 0 violations. The caret's blink stops under
reduced motion.

**Placeholders to fill:**
- The Pitch-black editor screenshot or loop.
- The 6×9 spread.
- Two testimonials, ideally about writing at night.
- The sample book.
- The Founding Writer price, version and date.
