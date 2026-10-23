# Hero and band

**Verdict:** strong. "Write." wins the glance, and the button is the clear next step. There's one repeated claim, and the platform row is loud.

Screens: `design-iterations/refine/landing/before/s01-top-1440-light.png`, `design-iterations/refine/landing/before/s01-top-390-light.png`, `design-iterations/refine/landing/before/s02-band-1440-light.png`

### hero 1 · Duplicate · remove a duplicate
`home.ts:14, 21` and `home.ts:116`. Ownership is said three times. The hero lede ends "saved as files you keep", the band's meta line one scroll later says "Your work stays in folders you choose, on your own disk", and the pledge says "Your files, your folders." Cut the band's meta line. The hero says it first, the pledge says it fully, and the band keeps its one line, which §2 says to keep.
- **Risk:** the band's right half goes empty at 1440. I'll check that in the after shots, and bring it back to you if it looks unbalanced.

### hero 2 · Layout · move down a level
`Hero.astro:29`. Under the button and spec line, five underlined platform links sit on one row at 1440 and wrap to two at 390. They're the busiest thing in the first screen, and the button already names the visitor's device. Remove the `PlatformRow` from the hero and keep it in the footer (and on `/download` later).
- **Risk:** a visitor on one device who wants the download for another has to scroll to the footer. The spec line still names all six platforms before the device is known. This one is your call; I'm not sure the gain outweighs it.

**Leave alone:** the title, the line and the lede (decided in §4.2), the spec line, the band's line, and the header (see header.md).
