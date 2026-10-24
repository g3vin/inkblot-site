# N · M in motion

M's page and order, with the copy brought in line with PROMISE.md and five moving parts.
It loads M's style.css, then motion.css and motion.js (about 12 KB gzipped together,
with no libraries).

**Copy changes (also applied to M):**
- "Android & Chromebook". Chromebooks get the Play Store button in shared/site.js.
- "Never trained on your work", and "writes, rewrites or summarises".
- "Writers never pay to write, to read or to be read."
- Apache 2.0 with no CLA, so no one can take it private.
- Built for modest, older and shared devices too.
- Sync through your own folders is free; Inkblot Sync costs what it costs and is free to anyone who asks.
- The Open Collective link no longer says "unlocks".
- Code of conduct and Trademarks links in the footer.

**Motion:**
1. **The fade.** The footage fades into the band's green over its last few inches, in eased steps so the fade has no visible edge.
2. **Spreading darkness.** Night is pinned for 240svh. The words start inside a rounded pool of black, which spreads from around them until it fills the screen. Its edges are long, slow waves, and they keep drifting. The words never move; the window fades in at the end.
3. **The cut.** Rest the cursor on a feature for about 0.4 s. The page is cut along that row's bottom rule, centred in the gap between the name and its line, and pulled open into an eye with a slight spring.
   - The feature's sketch shows inside, with an inner shadow.
   - The rules and the letters nearby bend up and down around the opening, per letter.
   - It stays open while the cursor is on that row or the opening.
   - Touch: when scrolling settles, the middle row opens. Keyboard focus opens it too.
4. **The book.** Pinned for 340svh, a 6 × 9 book in CSS 3D (cover, spine, edges, page block):
   - it turns from spine-on to face you;
   - the cover opens onto a title page;
   - a leaf turns to a chapter-opening spread.
5. **The reader's mark.** On the protection section a hidden watermark appears under the cursor, like UV light on a banknote. On touch it drifts slowly.

**Without motion:** every part is laid out for its finished state, so with no script or
under reduced motion you get the finished darkness (static), the open spread, an instant
cut and a still pool of light. Nothing is pinned.

**Not yet measured:** Lighthouse and axe. The pinned sections add about 4.8 screens of
scroll.
