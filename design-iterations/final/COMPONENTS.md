# Inkblot website: component inventory (direction M)

The winning page is `design-iterations/m-final/`. It's built from `shared/base.css`,
`shared/site.js` and `m-final/style.css`, and its tokens are consolidated in
`final/tokens.css`. This inventory lists every part the page uses, so it can be rebuilt as
Astro components (the "Name in Astro" column follows `SITE_PLAN.md` where a name already
exists).

**Rules for every component:**
- Colours, faces, sizes and spacing come from `final/tokens.css`.
- No component has a theme switch. The site follows the visitor's system.
- Motion stops under `prefers-reduced-motion`.
- Images and app shots sit in boxes sized to the final asset, so swapping one in causes no
  layout shift.

## Page order

1. Header
2. Hero, with the app window rising out of it
3. Fern band
4. Night
5. Roster
6. Book
7. Marketplace
8. Protections
9. Proof
10. Price
11. End (download merged into the footer)

## Foundations

| Component | What it is | Name in Astro | Notes |
|---|---|---|---|
| Display type | Inter Display Bold, −4.5% tracking (−6.5% on "Write.") | `Display` | `--step-fill` sizes "Write." to the content width; `--step-4` for section heads |
| Reading type | Literata 400, 17–19px, 66ch measure, 1.6 leading | `Prose` | Body copy only |
| Meta | Courier Prime for captions, spec lines and folios | `Meta` | `.meta` |
| Eyebrow | Inter Bold capitals, 0.12em tracking | `Eyebrow` | Used sparingly; M has three |
| Wordmark | The generated `wordmark.svg`, drawn in `--mark` through a CSS mask | `Wordmark` | `on-media` variant over pictures |
| Button | Filled, 8px corners, 48px tall (56px in the hero) | `Button` | Primary is `--brand` on `--on-brand`. Over footage it's paper-white with `--on-media-ink` text |
| Link | Inter 600 in `--brand`, underlined | `Link` | |
| Slot | A labelled placeholder at the asset's final aspect ratio | `Slot` | **Remove before launch**; every slot is listed in ASSETS.md |

## Parts

| Component | What it does | Name in Astro | Props and variants |
|---|---|---|---|
| **Header (over media)** | Text-only nav floating over the hero, with no bar. The wordmark, four links and a "Download" text link named for the visitor's device | `Header` | `variant: over \| solid` (solid for pages without a picture hero) |
| **Hero** | "Write." filling the width over the leaves footage. Under a rule, one row: "Start with a sentence. Finish with a book." on the left; the download button and the platform row on the right | `Hero` | `place` (registry id), `title`, `line`. Footage loads after the page on screens 768px and wider, and never under Save-Data or reduced motion. It has a pause control |
| **MediaLoop** | A poster image, then a muted looping video, paused offscreen or when the tab is hidden; the pause choice is remembered | `MediaLoop` | `place`, `focus`. Poster at 720 and 1280 wide (WebP) |
| **DownloadButton** | Names the visitor's device: "Download for macOS / Windows / Linux", "Get it on the App Store" or "Get it on Google Play" | `DownloadButton` | Device detection in `site.js`; it falls back to "Download free" |
| **Platforms** | The other five platforms in a row; the visitor's own is bold | `PlatformRow` | Links to each store or download |
| **AppWindow** | A window frame around a screenshot or loop | `AppWindow` | `screen` (registry id), `title`, `variant: default \| night \| fade` (`fade` has no frame line, for the marketplace) |
| **Rise** | Pulls the app window up over the foot of the hero, so it shows in the first screen | part of `Hero` | Negative top margin, clamped |
| **Fern band** | Full-width brand-colour band: "No account needed. Works offline. No AI writing for you.", one line and nothing else (the meta line was cut on 23 Oct: the hero lede already says "files you keep") | `Band` | The name stays "Fern band" from the ratings; the colour is now Sage |
| **Night** | Always black: "For the story you write after everyone's asleep." and the editor in Pitch black | `NightSection` | Uses the `--night-*` tokens whatever the theme |
| **Roster** | A big typographic list: name in Display, a short benefit beside it | `IndexList` | Items come from data (one per feature), with an optional link to a feature page |
| **Book** | "Then it becomes a book.", one line, three spec lines, and a 6×9 spread | `BookSection` | |
| **Spread** | Two pages at true 6×9 proportion, with a gutter and folios | `Spread` | `trim` (default 6×9) and two images |
| **Marketplace** | A short picture band ("Read each other." and its line on the left, the four-step loop on the right), then a wide review window rising out of the fade, then four rules | `MarketplaceSection` | Has its own dark ground (`--act-bg`) |
| **Loop** | Four numbered steps: Read, Review, Earn, Be read | `StepList` | `columns: 2 \| 4` |
| **Rules** | Four short Courier lines under a hairline each | `SpecList` | |
| **Protections** | Full-bleed black band: "The world is yours. So is every word." and six promises in a grid (the sixth: "Open to check.") | `PledgeBand` | Links to `/promise` |
| **Proof** | Two testimonial slots and the sample book | `Proof` | Quotes are never invented; the section hides itself when there are none |
| **Price** | "Free.", one line, the open-source line, the sync line, and links to the code, the promise and Support | `Price` | Never a Founding Writer or Plus line |
| **End** | "Write." and the download, merged into the footer: wordmark, links, ©, credits | `Footer` | Follows the page's colour |

## Behaviour (`shared/site.js`, about 3 KB)

- **Device detection** for `DownloadButton` and `PlatformRow`.
- **Footage loading:** after the page loads, never on phones, Save-Data or reduced motion,
  with pause and resume, and paused offscreen.
- **Theme and green from the hash:** for previews only. Drop the green part when porting;
  Sage is now the brand.

## What the prototype has that the real site doesn't need

- `.proto-flag` (the prototype banner)
- the `data-green` candidates
- the theme switch and the `.chip` "Coming" label
- the FAQ styles

All of these are in `shared/`, but M uses none of them.
