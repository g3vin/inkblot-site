# A · On location

**Concept.** The current `SITE_PLAN.md` direction, built as written, with the audit's
fixes applied. It's the control the other three are measured against. It reads like a
film house: "Write." at full width over slowed footage of summer leaves, a typographic
roster of features each tied to an outdoor place, and one section on true black for
the night.

**Target emotion.** Being outside before you start: air, light, a clear head.

**What's different from the plan.**
- The sub-line adds the trust line: "No account, no cloud, no AI writing for you."
- The download button names the visitor's device, with a row for the other five
  platforms under it.
- The app window rises over the foot of the hero, so real product shows in the first
  viewport.
- New sections: the journey (01–06), print (a spec list and a 6×9 spread), the pledge,
  and proof slots.

**Type.**
- Inter Display Bold for headlines: −6.5% on "Write.", −4.5% elsewhere.
- Literata 400 for reading text, at 17–19px with a 66ch measure and 1.6 leading.
- Courier Prime for "Fig." captions and the spec line.
- Inter for buttons, nav and short UI lines.

**Palette and contrast (WCAG).**

| Pair | Ratio |
|---|---|
| Ink `#1f1c18` on paper `#faf8f4` | 16.0 |
| Muted `#6b645a` on paper | 5.5 |
| Fern `#244a37` on paper | 9.4 |
| White on Fern (button) | 10.0 |
| Ink-theme text `#f2eee6` on `#161412` | 15.9 |
| Ink-theme muted `#a69f93` | 7.0 |
| Ember `#c9a273` on black | 8.9 |
| Ember muted `#a08060` on black | 5.8 |

Paper-white over the darkened footage measures about 12:1 against a mid-frame sample.
**Check it frame by frame on real devices.** axe can't measure text over video, and the
bright sky in the top-left of the clip is the weak spot (the scrim is darkest there for
that reason).

**Trade-offs.**
- The hero is the most beautiful and the least informative of the four. The sub-line
  and the window peek do the explaining.
- Footage is the most expensive asset. It's 2.6 MB, loaded only after the page on wide
  screens; phones, Save-Data and reduced motion get the 8–17 KB still.
- The roster needs eight place photographs in one grade before launch.

**Who it would appeal to most:** people who respond to mood and craft, and writers who
think of the app as a place to go.
**Who it might lose:** the practical self-publisher scanning for "does it do KDP?"
within 5 seconds. That answer sits two scrolls down.

**Lighthouse (mobile, simulated slow 4G, uncompressed local server).**
- Scores: Performance 97, Accessibility 100, Best practices 100, SEO 100.
- LCP 2.4 s (the hero poster), TBT 0 ms (INP proxy), CLS 0, FCP 1.5 s, 209 KB before
  the video.

**axe** (WCAG 2.2 A/AA + best practice, in Paper, Ink and Black at 1280 and 375): 0
violations.

**Placeholders to fill:**
- Manuscript-editor screenshot or loop, and the Pitch-black editor screenshot.
- Eight place photographs.
- The 6×9 sample spread and the sample book cover.
- Two testimonials.
- Founding Writer price, version, date and size.
- OG image.
