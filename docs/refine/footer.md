# Footer

**Verdict:** wordy. "Free." is the strongest word on the page, and 75 words of terms and two link rows dilute it.

Screens: `design-iterations/refine/landing/before/s11-end-1440-light.png`, `design-iterations/refine/landing/before/s11-end-390-dark.png`

### footer 1 · Words · copy only
`src/data/site.ts:24-26`. The price block has a title, a line, a 45-word body and a 30-word note.
- body: `"No ads, ever. Writers never pay to write, to read or to be read: no card, nothing held back. Inkblot is open source under Apache 2.0, with no CLA, so no one owns all of it and no one can take it private."` → `"No ads, no card, nothing held back. Open source under Apache 2.0, with no CLA, so no one can take it private."`
- note: `"Sync through your own folders is free. If you'd rather we ran it, Inkblot Sync will cost what it costs us, and be free to anyone who asks."` → `"Sync through your own folders is free."` The rest moves to the promise page once it's built.
- **Risk:** "Writers never pay to read or to be read" is the marketplace's promise, and the cut drops it here. The line above ("Every feature… for everyone") covers most of it. DESIGN_REVIEW §3 also noted that no issue describes Inkblot Sync yet, so the cut is safer either way.

### footer 2 · Duplicate · remove a duplicate
`Footer.astro:20-24, 33`. The links "Read the code · Support Inkblot on Open Collective" under the price go to the same places as "Source" and "Support" in the footer links, which are on screen at the same time (at 390 they're about 500 px apart). Remove the price links. The footer links stay, because that's where a visitor looks for them. "Read the promise" is in both lists too, and will show twice once `/promise` is built.
- **Risk:** "Read the code" no longer sits right next to the open-source claim.

### footer 3 · Duplicate · copy only
`Footer.astro:51`. The bottom line reads "…No ads, no analytics, no cookies." just under a price body that says "No ads". Bottom line → `"No analytics, no cookies."` The price keeps "no ads", since that's where it belongs.

**Leave alone:** the closing "Write." with the download, spec line and platform row (the repeated download is decided), the version line, and the footage credit.
