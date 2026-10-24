# Plan: build the inkblot website in stages

## Context
The site at `/Users/gavin/inkblot-site` was stripped to a bare Vite + React 19 shell (`src/main.jsx`, `src/App.jsx`), deployed to GitHub Pages by `.github/workflows/deploy.yml`. A research phase produced `reports/Inkblot website design research.md`, and the owner rated 118 inspiration sites. Then, in October 2026, six rounds of rated design directions in `design-iterations/` settled the landing page. The winner is **direction M** (`design-iterations/m-final/`).

This plan turns those decisions into a full marketing and download site at **inkblotwriting.studio**.

**Where the decisions live:**
- `design-iterations/AUDIT.md`: the audit of the earlier plan, and the owner's answers on platforms, pricing and the AI pledge.
- `design-iterations/final/tokens.css`: the final tokens.
- `design-iterations/final/COMPONENTS.md`: every part of M, mapped to the components below.
- `design-iterations/final/ASSETS.md`: everything the owner still has to supply.
- The rating gallery (all rounds and scores): https://claude.ai/artifact/3XLkPJfZMwgcL6GQjPGe9r

**Settled decisions this plan builds on** (the unified brand settled with the app in October 2026, then the design-iteration rounds; the app's `docs/DESIGN.md` §17 covers the site):
- **Audience:** every kind of writer, not only novelists. Copy names novels, short stories, poems and scripts.
- **Platforms, all at launch:** macOS, Windows, Linux, iPhone, iPad and Android.
- **Every feature on the site ships at launch,** the marketplace included. Nothing is marked "Coming".
- **Free and open source is the brand stance** (22 Oct 2026; the app's `PROMISE.md`): every feature is free, on every device, for everyone, forever, and the code is open source (Apache 2.0). Writers never pay to write, to read or to be read. Only convenience and businesses may ever pay: hosted sync (at cost, free on request), Directory listings for professionals, institutional support, and donations that unlock nothing. Say what Inkblot is *for* (writing belongs to everyone), never who it is against. Never use "upgrade", "pro", "premium", "unlock", "trial", "plan" or "Plus", and never "No cloud" (say "No account needed. Works offline.").
- **Look:**
  - Huge, tight **Inter Display** headlines (bold, −4.5%; −6.5% on "Write.") in sentence case. **Literata** for reading text, **Courier Prime** for metadata, spec lines and captions.
  - Paper `#faf8f4` and ink `#1f1c18`. The dark theme is the app's warm **Ink** (`#161412`).
  - **The brand green is Sage:** `#3f5a3a` on paper (7.2:1) and `#a7bc94` on Ink (9.0:1). Deep fern was rated "too mint ice cream" in its dark form, and Sage scored 5/5. Pitch black keeps its own green (`#8aa86c`). Whether the app moves from Deep fern to Sage is a separate decision (see "Separate track").
  - **No theme switch.** The site follows the visitor's system: Paper by day, Ink by night. Pitch black appears only in sections that pin it (night, protections).
  - **Logo:** the "ib" splash monogram, ink on a paper tile (paper on an ink tile at night), never in the brand green. The favicon and app icon crop it "off the corner" (the b runs off the tile's foot and right edge).
  - **Wordmark:** "inkblot" in Literata Bold (display cut), −4.5%, with the splash dot, used alone in the header (no symbol beside it). Use the app's generated SVGs (`src/assets/brand/`, `public/favicon.svg`).
- **Lines (all rated):**

  | Line | Where it's used |
  |---|---|
  | **"Write."** | Hero, as large as the window allows. Again, smaller, at the foot of the page |
  | "Start with a sentence. Finish with a book." | Under the rule in the hero |
  | "No account needed. Works offline. No AI writing for you." | The Sage band |
  | "For the book you write after everyone's asleep." | Night section |
  | "Then it becomes a book." | Print section |
  | **"Read each other."** with "Real human readers. Post a chapter, a poem, a story or a script, and other writers review it, line by line." | Marketplace |
  | "The world is yours. So is every word." | Protections |

  **Rejected:**
  - "Write offline. Own every word."
  - "Real readers. Not a model." (the "not a model" is implied)
  - "Six stops between an idea and a book." (redundant)
  - "Writers read writers."
  - Any mention of other writing apps by name.
- **Imagery:**
  - The theme is outdoor places that inspire writing.
  - **Landing hero:** "Write." over footage of backlit summer leaves moving slowly in the wind, paper-white type, the picture darkened at the foot.
    - The clip is in the registry: `src/data/places.ts` → `leaves-summer`, `public/media/places/leaves-summer.{mp4,jpg}`.
    - Credit: *Leaves in summer*, Joaquim Baeta, CC BY 4.0. Slowed to 0.7×, 1280×720, crossfade loop, 2.6 MB.
    - Alternates: poplars against the sky, an autumn canopy, the drawn leaf shadows.
  - **The app rises out of the hero:** the editor's window overlaps the hero's foot so product shows in the first screen.
  - **Night section:** on true black, over an app window in Pitch black (Ember text, `#c9a273`), selling it for OLED and mini-LED screens. It comes straight after the hero.
  - **Marketplace band:** a place photograph (a window seat, someone reading) with the heading over it, fading into the marketplace's dark ground. The review window rises out of the fade with no frame line.
  - **Feature pages:** each feature has its own photograph or slow clip of a place: **vivid**, in one shared grade, moving slowly but visibly, each with a Courier Prime caption ("Fig. 3 · Open field · 7:12 pm"). The landing page's roster has no thumbnails.
  - **Footage behind glass** for feature pages: soft frost or reeded glass only (the brand lab's WebGL shader is the reference).
  - **Tactile touches:** pen on the border of a photograph (ballpoint circles, arrows, margin notes in Reenie Beanie, the site's one extra face), once or twice a page at most, on feature pages only. No torn edges or collage.
  - Grain and paper appear on imagery and these touches only.
- **Landing page order (direction M):**
  1. Hero, with the app rising out of it
  2. Sage band
  3. Night
  4. Roster
  5. Then it becomes a book
  6. Marketplace
  7. Protections
  8. Proof
  9. Price
  10. End: "Write." and the download, merged into the footer

  **There is no FAQ** (the owner rated FAQs out), and no timeline teaser on the landing page.
- **Download button:** one button that names the visitor's device: "Download for macOS / Windows / Linux", "Get it on the App Store" or "Get it on Google Play". A row of the other platforms sits under it, and the visitor's own is shown in bold. The button is filled with 8px corners, and is paper-white over footage. The Courier spec line (*Free · version · date · size*) lives on `/download`, not in the hero.
- **Pricing:** "Free." with "Every feature, on every device, for everyone. Forever." Open source is the reason it can't change: "Inkblot is open source, so it can never be put behind a paywall." Marketplace reviews cost coins, which are earned and never bought: "Reviews cost coins, never money". One honest line about the future: optional sync we run, at cost and free to anyone who asks; your own folders sync free. Links: Read the code (GitHub), Read the promise, Support Inkblot (donations, unlocks nothing, books published). There is no Founding Writer licence and no Plus. Never a modal; no cookie banner.
- **The protections are a main selling point:**
  - no AI writes for you;
  - your work never trains anything;
  - every shared copy is watermarked to its reader;
  - screenshots and copying are blocked in the review view **wherever the device allows** (the app's issue #69 says blocking is best-effort, so the wording must stay honest);
  - leaks get traced;
  - open to check: every line of the code is public.

  The site does **not** describe the on-device models (synonyms, dictation, read-aloud) on the landing page.
- **Pages:** landing, feature pages, `/marketplace`, `/promise` (the free, open and no-AI promise in one page), download, changelog, `/support`, press kit/about, privacy, 404.
- **Stack:** **Astro** (static output) on GitHub Pages. Desktop installers and the release manifest live in **cloud storage** (Cloudflare R2); the mobile apps link to their stores.

**Two working rules from the owner:**
1. **Many pauses.** Each stage is split into small steps, and every step marked **⏸ Review** ends with a deploy or preview link and a stop. Nothing continues until the owner approves or asks for changes. Changes are made before moving on.
2. **Easy to update later.** New pages, images, lists and app windows come from global building blocks and data registries, not one-off markup. Adding a page means adding one content file. Swapping an image means editing one registry entry.

---

## Architecture for easy updates (built in stage 1, used everywhere)
**Content-driven pages**
- **Generic pages** live as MDX files in `src/content/pages/*.mdx`, rendered by `src/pages/[...slug].astro`. Frontmatter holds `title`, `description`, `place` (hero image id), `nav` (whether and where the page appears in the menu) and `ogImage`. The body uses the global components below. **A new page is one new file.**
- **Structured pages** (features, changelog) use typed content collections (`src/content/config.ts` with zod schemas), so a missing field fails the build instead of breaking the page.
- **Site-wide data:** `src/data/site.ts` (name, tagline, social links, contact) and `src/data/nav.ts` (header and footer links). Navigation is never hard-coded in layouts.

**Registries: one place to swap assets**
- **`src/data/places.ts`** maps a place id (e.g. `open-field`) to image source(s), alt text, a caption line (`Fig. · place · time`), focal point and orientation. Everything references places by id.
- **`src/data/screens.ts`** maps a screen id (e.g. `manuscript-editor`) to light and dark screenshots or a video loop, size, alt text and a caption. The `AppWindow` component looks screens up by id, so a new app screenshot replaces itself everywhere.
- **`src/data/release.ts`** is the single source for versions, sizes and links on all six platforms (stage 3).
- **`src/data/features.ts`** (or the features collection) drives the landing roster, so adding a feature adds a row.

**Global components (`src/components/`), each documented with its props.** `design-iterations/final/COMPONENTS.md` describes each one as built in M.

| Group | Components |
|---|---|
| Layout | `Section` (spacing, width: narrow / text / wide / full), `Stack`, `Grid` (columns that collapse on mobile), `Divider` |
| Type | `Display` (Inter Display headline sizes, including the width-filling "Write."), `Eyebrow`, `Prose` (Literata reading text), `Caption`, `Meta` (Courier Prime line) |
| Imagery | `PlaceFigure` (place by id, with grade, grain and caption), `AppWindow` (window frame around a screen by id; variants: default, night, fade), `MediaLoop` (poster, lazy, pause, reduced motion), `Spread` (two pages at true trim proportion), `Grain` |
| Lists | `IndexList` (the big typographic roster), `StepList` (the marketplace's numbered loop), `CreditList` (label/value credit blocks), `SpecList` (Courier spec lines) |
| Actions | `Button` (primary / ghost / on-media), `DownloadButton` (names the visitor's device), `PlatformRow`, `SpecLine`, `CopyField` |
| Page parts | `Header` (variants: over media, text only / solid), `Hero`, `Band` (the Sage band), `NightSection`, `BookSection`, `MarketplaceSection`, `PledgeBand` (the protections on black), `Proof`, `Price`, `Footer` (merged with the final "Write." and download), `TimelineEntry`, `RoadmapColumn` |

**Layouts:** `Base.astro` (head, header, footer), `Page.astro` (generic content page with an optional place hero) and `Feature.astro`.

**A living styleguide at `/styleguide`:** it shows every component and variant with real data, plus the colour tokens and type scale. It is excluded from the sitemap and nav. This is the review surface for design changes and the reference for building future pages.

**`README.md` "How to" section:** add a page, add a feature, add a changelog entry, add a place image, add an app screenshot, update the roadmap, cut a release.

---

## Stage 0: Prerequisites (owner, in parallel with stages 1–2)
These are not code, but they block later stages. `design-iterations/final/ASSETS.md` has the full asset list with sizes.

| Item | Blocks |
|---|---|
| App screenshots and loops from the finished app: the editor (Paper and Ink), the editor in Pitch black, a review in progress | Stage 2 final |
| A real 6 × 9 spread exported from Inkblot; a sample book (a public-domain text, with PDF, EPUB, and a cover by a credited artist) | Stage 2 final |
| Two real testimonials, with permission (never invented) | Stage 2 final |
| The marketplace band photograph (a window seat, someone reading), in the leaves' grade | Stage 2 final |
| Hero footage: **done** (Commons clip, see Imagery). Optional: film your own leaves clip later to replace it, with the same treatment (slow, backlit, seamless loop under 3 MB) | Stage 7 |
| One photograph per feature place, all in one grade | Stage 4 final |
| Signing for every desktop platform: Apple Developer Program ($99/yr, signing and notarizing), a Windows code-signing certificate, and Linux packages (AppImage/.deb/Flatpak, to decide) | Stage 3 live |
| App Store and Google Play listings, so the mobile buttons have somewhere to go | Stage 3 live |
| Cloudflare R2 bucket on a public subdomain (e.g. `downloads.inkblotwriting.studio`) | Stage 3 live |
| The Open Collective page (`opencollective.com/inkblot`, with a fiscal host) for `/support`; it publishes every income and expense. Sync billing comes later, with Inkblot Sync | Stage 7 live |
| **The updated privacy policy.** The app's `PRIVACY.md` was redrafted on 17 Oct 2026 for accounts, the marketplace, watermarks, sharing and publishing. Fill in its `[OWNER: …]` decisions (backend provider and region, retention, account deletion, encryption of shared content; the account age is set at 13, or 16 in the EEA and UK) and have it reviewed before launch | Stage 7 live |
| The full text of the promise (start from the app's `PROMISE.md`) | Stage 5 |

Every stage below ships with placeholders (labelled slots at the asset's final size, and a fallback manifest), so code never waits on assets.

## Stage 1: Scaffold and design system
**Step 1a: Scaffold**
- **Replace the stack.** Remove the Vite/React shell (`src/main.jsx`, `src/App.jsx`, `vite.config.js`, root `index.html`) and set up Astro with static output. Add `@astrojs/sitemap`, `@astrojs/rss` and `@astrojs/mdx`. Add `@astrojs/react` only if an interactive island later needs it; the default is vanilla `<script>` in components.
- **Domain:** add `public/CNAME` containing `inkblotwriting.studio`. Set `site: 'https://inkblotwriting.studio'` in `astro.config.mjs` and drop the old `base: './'`. Keep `public/.nojekyll`.
- **Deploy:** update `.github/workflows/deploy.yml` to keep the same Pages flow (`npm ci && npm run build`, upload `dist`). Add `repository_dispatch` (`release-published`) and a daily `schedule` trigger so a new release rebuilds the site.
- ⏸ **Review:** a blank Astro page live on inkblotwriting.studio. This confirms deploy and DNS early.

**Step 1b: Tokens and type**
- **Tokens:** start `src/styles/tokens.css` from `design-iterations/final/tokens.css`.
  - That file mirrors the app's paper, ink and Pitch-black values, with Sage as the brand.
  - Light values sit on `:root`; the Ink dark values sit under `prefers-color-scheme: dark`.
  - The fixed tokens for surfaces over pictures and on black are `--on-media`, `--scrim-rgb`, `--act-bg`, `--night-*` and `--protect-*`.
- **Fonts:** self-host Inter (variable, with the `opsz` display axis), Literata and Courier Prime as subset woff2 files via `@fontsource-variable/*`. Preload the headline face, and give each face a fallback with matched metrics, so text doesn't shift (CLS) when the real font loads. The fallback values are already computed in the final tokens file.
- ⏸ **Review:** `/styleguide` shows the colour tokens (Paper, Ink, Pitch black), the type scale (Inter Display sizes and tightness, Literata body, Courier Prime meta) and Sage on paper and on Ink. **Lock the type and colour before building anything else.**

**Step 1c: Global components and layouts**
- Build the components and layouts listed in "Architecture for easy updates", each shown on `/styleguide` with placeholder data. Also build the `places.ts` and `screens.ts` registries.
- ⏸ **Review:** the styleguide's imagery (`PlaceFigure`, `AppWindow`, `Spread`, grain), lists (`IndexList`, `StepList`, `SpecList`) and buttons.

**Step 1d: Header and footer**
- **Base layout:** `src/layouts/Base.astro` holds the head (meta, OG and Twitter tags, canonical URL, theme-color), a skip link, the header and the footer.
  - **Header:** the lowercase "inkblot" wordmark, nav (Features, Marketplace, No AI → `/promise`, Free, Source → GitHub) and a **Download** text link named for the visitor's device.
    - Over a picture hero it is text only, with no bar.
    - On pages without one it has a solid ground.
  - **Footer:** opens with "Write." and the download button with the platform row, then the wordmark, The promise, Marketplace, Source (GitHub), Support, Changelog (and RSS), Privacy, Press, contact, © and credits. It follows the page's colour.
  - Both read from `nav.ts` and `site.ts`.
- ⏸ **Review:** header and footer on desktop and mobile, including the mobile menu.

## Stage 2: Landing page (`src/pages/index.astro`)
Build direction M. The reference build is `design-iterations/m-final/` (HTML and CSS you can open), and the page is assembled from the stage 1 components. Section content lives in `src/data/home.ts` and the roster in the features data, so copy is edited without touching layout.
- **Step 2a:** the hero, with the app rising out of it (section 1 below). ⏸ **Review.** This is the biggest design moment, so it gets its own stop, covering the footage's speed and grade and how "Write." sits on it.
- **Step 2b:** sections 2–5. ⏸ **Review.**
- **Step 2c:** sections 6–10. ⏸ **Review** the whole page top to bottom on desktop and phone.

1. **Hero:**
   - "Write." in Inter Display, sized to fill the content width (`--step-fill`).
   - Under a rule, one row: "Start with a sentence. Finish with a book." on the left; the `DownloadButton` and `PlatformRow` on the right. On phones they stack.
   - Behind them, `MediaLoop` plays `leaves-summer`: poster first, video after the page loads, never on phones, Save-Data or reduced motion.
   - Include a small **pause control** (WCAG 2.2.2).
   - The text-only header floats over the picture.
   - The editor's `AppWindow` rises over the hero's foot, so it shows in the first screen on a laptop.
2. **Sage band:** "No account needed. Works offline. No AI writing for you." with a meta line, "For novels, short stories, poems and scripts · Free".
3. **Night:** "For the book you write after everyone's asleep." and "Pitch black. Pixels off. Words in ember." over the editor in Pitch black. It is always black.
4. **Roster:** a large typographic list, one row per feature, with the name in Display and a short benefit (3 to 7 words). It comes from the features data, and each row links to its feature page. The current rows are:
   - Drafting
   - Maps
   - Timeline
   - Canvases
   - Orbit
   - Screenplays
   - Poems
   - Dictation
   - Review mode
   - Co-writing
   - Typesetting
   - Publish
5. **Then it becomes a book:** one line, "Pick a trim size. Inkblot sets the pages and the cover, ready for the printer." Three spec lines (trims, cover with spine and ⅛ in bleed, PDF · EPUB · Word) and a 6 × 9 `Spread`. **Don't** show the book styles as a feature.
6. **Marketplace:**
   - A short picture band: "Read each other." and its line on the left, and the four-step loop (Read, Review, Earn, Be read) on the right.
   - Then a wide review window rising out of the fade.
   - Then four rules: "Coins can't be bought. Every review is earned.", "Take on a work and you finish it.", "Writers rate every review.", "Report a reviewer who isn't human."
   - It sits on its own dark ground. There is no "Part two" label.
7. **Protections:** a full-bleed black band, "The world is yours. So is every word.", with the six promises in a grid (see "The protections" above) and a link to `/promise`.
8. **Proof:** two real testimonials and the sample book (cover, PDF, EPUB). The section hides itself while there are no quotes.
9. **Price:** "Free." with "Every feature, on every device, for everyone. Forever.", the open-source line, the sync line and the three links (see Pricing above).
10. **End:** "Write." (Display, `--step-4`) and the download button, merged into the footer.

## Stage 3: Download system
- **Manifest:** `downloads.json` in R2, with one entry per desktop platform (`macos`, `windows`, `linux`). Each entry has `version`, `date`, `url` (a version-free filename alias), `size`, `sha256`, the minimum OS and `notesUrl`. The App Store and Google Play links are fixed in `src/data/release.ts`.
- **`src/lib/release.ts`** fetches the manifest at build time and falls back to the committed `src/data/release.fallback.json` if the fetch fails. `DownloadButton`, `PlatformRow` and `SpecLine` read from it. The page never calls an API at runtime.
- **Device detection:** a small inline script (about 1 KB, already written in `design-iterations/shared/site.js`) picks the visitor's platform:
  - macOS, Windows or Linux on the desktop;
  - the App Store on iPhone and iPad, including iPadOS reporting itself as a Mac;
  - Google Play on Android.

  Without the script, the button reads "Download free" and links to `/download`.
- **Open-source channels:** with the repo public, desktop builds can also be listed on GitHub Releases (the source of truth for each tag; tauri-action's `latest.json` can feed the manifest), Flathub for Linux and F-Droid for Android. `/download` lists them under "Other ways to get it", so people without app-store accounts (school Chromebooks, de-Googled phones) can still install.
- **`/download` page:**
  - The device's button and its spec line.
  - Every other platform, each with its spec line.
  - Install steps per platform, with notes on the first-open security prompts (Gatekeeper, SmartScreen).
  - SHA-256 for each installer, with a copy button.
  - A "Release notes →" link.
  - System requirements.
- **Release pipeline (app repo, documented here; it lives there):** build → sign (and notarize on macOS) → upload installers and manifest to R2 → send `repository_dispatch` to inkblot-site to rebuild. Mobile releases go through the stores.
- ⏸ **Review:** `/download` with the fallback manifest, and the button as seen from each platform.

## Stage 4: Feature pages
- **Content collection** `src/content/features/*.mdx`, one file per feature. Frontmatter: `title`, `order`, `benefit`, `place`, `caption`, `image` and optional `media`.
- **Initial set, with places from the report.** New features have their places still to choose:

| Feature | Place |
|---|---|
| Drafting | Open field |
| Maps (worlds, planets and galaxies, the real Earth) | Coastline / ocean; night sky for planets |
| Timeline | Tide line |
| Canvases | [to choose] |
| Orbit | [to choose] |
| Screenplays | Empty road at dusk, 2.39:1 frame |
| Poems | [to choose] |
| Dictation & read-aloud | Forest in rain |
| Review mode | [to choose] |
| Co-writing | [to choose] |
| Typesetting & print | Harbour at dawn |
| Publish (AO3, WordPress, Ghost, Substack) | [to choose] |

- **Adding a feature** later means one new MDX file plus a `places.ts` entry. The landing roster, navigation and previous/next links update themselves.
- **Template:** one `src/pages/features/[slug].astro` (using the `Feature.astro` layout) lays out:
  - a full-width `PlaceFigure` and the Inter Display title;
  - the Literata body;
  - product screenshots;
  - a download CTA;
  - previous/next feature links.
- **Navigation:** cross-document View Transitions via CSS `@view-transition { navigation: auto; }` as progressive enhancement, with the place image and title as shared elements. Browsers without support do a normal page load.
- **Images:** Astro `<Image>`/`<Picture>` for AVIF/WebP, `srcset`, lazy loading below the fold, and blur-up placeholders.
- **Step 4a:** build the template and **one** feature (Drafting). ⏸ **Review** the layout and the place-photo treatment.
- **Step 4b:** fill in the rest. ⏸ **Review** them all, including the place assigned to each feature.

## Stage 5: Marketplace and promise pages
- **`/marketplace`:**
  - Built from the landing's `MarketplaceSection`.
  - Then how posting works: a chapter, poem, story or script; a summary and a preview; a deadline from 3 days to 6 months; who can take it on.
  - Then how reviewing works: margin notes, a final report, finishing what you take on.
  - Then coins: earned by reviewing, spent to post or spotlight, never bought or cashed out.
  - Then reputation, and the protections.
  - Copy comes only from the app's marketplace issues (#57, #65–70). Re-check it against the shipped feature before launch.
- **`/promise`:**
  - Adapted from the app's `PROMISE.md`: free, open, everywhere, yours, the money rule, what may cost money and the never list. Then the full text of the no-AI and no-leak promises, in Literata, as a generic MDX page.
  - It must say plainly that nothing in Inkblot writes, rewrites or continues your words, and that your work never trains anything.
  - It must describe the watermarks (visible and hidden) and the best-effort copy blocking honestly.
  - Whether it also lists the on-device tools is the owner's call. The landing page doesn't.
- ⏸ **Review** both pages.

## Stage 6: Changelog and roadmap
- **Changelog:** collection `src/content/changelog/<version>.md` with `version`, `date`, `headline` and `media`, and a body split into New / Improved / Fixed. Seed it from the app repo's `CHANGELOG.md` and dated git history (Feb–Oct 2026), copied by hand for each release.
  - `/changelog`: credit-block entries (Trim/Pulse style), newest first, with a Courier Prime version and date column and anchors per version.
  - `/changelog/rss.xml` via `@astrojs/rss`.
- **Roadmap data:** `src/data/roadmap.json` with `lastUpdated` and Now / Next / Exploring items for after launch. Dates appear only on shipped items. Rendered on `/changelog` above the history. The landing page has no timeline teaser.
- **Optional enhancement:** an "ink line" that draws down the timeline using CSS `animation-timeline: view()` inside `@supports`. The static state is complete, and the effect is off under `prefers-reduced-motion`.
- **Step 6a:** the changelog, seeded with history. ⏸ **Review** the entry style.
- **Step 6b:** the roadmap wired to the real data. ⏸ **Review** which items are listed and their wording.

## Stage 7: Support, press/about, privacy, 404
- **`/support`:**
  - Why: Inkblot is free for everyone, and donations keep it that way. They unlock nothing: no badge, no early builds, no perks.
  - Where the money goes, with a link to the public books.
  - Links out to Open Collective (`opencollective.com/inkblot`), whose public ledger is the books. No embedded payment JavaScript, no FAQ.
  - Other ways to help: contribute code, translate, report bugs, review other writers' work.
- **`/press`:**
  - Boilerplate in short and long versions, with founder/about text.
  - Logo files (SVG/PNG: ink on paper, and paper on ink) and screenshots as downloadable files in `public/press/`.
  - Brand colours (Sage, paper, ink) and fonts, and contact details.
- **`/privacy`:** adapted from the app's `PRIVACY.md` **once that policy is updated** for accounts, the marketplace and the watermarks (Stage 0). Add a site section saying the site sets no cookies and runs no trackers.
- **`404.astro`:** a place photograph, a short line and links home.
- Press, Privacy and About are **generic MDX pages** in `src/content/pages/`, which proves the "new page = one file" path works.
- ⏸ **Review** after Support, and again after Press, Privacy and 404.

## Stage 8: Imagery and motion pass
- **Footage:** the hero already uses `leaves-summer`; this pass checks it on real devices and adds the feature places and the marketplace band photograph.
  - `<video muted playsinline loop preload="none" poster>`: the same clip in both themes, darkened at the foot so the line and button read.
  - **Loading:** load the video after the page, when idle and in view. Pause it when offscreen or when the tab is hidden. Phones and Save-Data get the poster.
  - **Reduced motion:** visitors who ask for it get the poster still.
  - **Pause control:** it persists, using `localStorage` wrapped in `try`.
- **Photographs:** drop in the final place photographs. Check that the grade and grain are consistent and the captions are complete.
- **Motion budget:** the hero drift and the page View Transitions only. No scroll-jacking, preloaders or custom cursor.
- ⏸ **Review** after the hero footage goes in (speed, grade, and legibility of "Write." in both themes), and again after the photographs go in.

## Stage 9: QA and launch
- **Budgets:**
  - LCP < 2.5 s, CLS < 0.1, INP < 200 ms on mid-range mobile. M's prototype measured LCP 2.3 s, CLS 0 and TBT 0 ms on Lighthouse mobile.
  - Landing JS under 15 KB.
  - Hero loop under 3 MB, loaded after the page.
  - Total landing weight under 1.5 MB before the video (the prototype is about 215 KB).
- **Accessibility:**
  - Run axe on every page, in Paper, Ink and the Pitch-black sections.
  - Keyboard-only pass with visible focus.
  - Contrast checks in both themes, including text over footage and photographs, frame by frame on real devices.
  - Test zoom to 200% and 400 px width.
- **SEO and sharing:**
  - Per-page titles and descriptions, and OG images (place photograph plus headline) generated at build.
  - `SoftwareApplication` structured data listing all six platforms, a price of 0, `isAccessibleForFree` and the Apache 2.0 licence.
  - `sitemap.xml`, `robots.txt`, favicon and apple-touch-icon from the splash monogram.
- **Domain:** DNS for `inkblotwriting.studio` (apex A/AAAA records to GitHub Pages, `www` CNAME), Enforce HTTPS, and a redirect check.
- **Analytics:** none by default, to match the privacy stance. The only option to consider is cookieless Cloudflare Web Analytics, and that's the owner's decision.
- **Docs:** finish the README "How to" section and test it by adding a throwaway page and a throwaway screenshot using only those instructions, then removing them.
- ⏸ **Review:** QA results, then the owner gives the launch go-ahead.

## Separate track (not part of this plan)
The app's brand moved to Fern, Inter Display, the Literata wordmark and the paper logo tile on the `feat/unified-brand` branch (October 2026). Then (brand dailies, 15 Oct) it gained the cropped app icon and the Pitch-black theme. Keep the site's tokens in step with the app's `src/styles/tokens.css`, including the Pitch-black block (§2b).

**Open:** the site now uses **Sage** as its green, and the app still uses Deep fern. If the app follows, change its `tokens.css`, `docs/DESIGN.md` and the showcase in the same change, so the two stay matched.

## Critical files
- **New, configuration and layouts:**
  - `astro.config.mjs`, `public/CNAME`
  - `src/layouts/{Base,Page,Feature}.astro`
  - `src/styles/tokens.css` (from `design-iterations/final/tokens.css`)
- **New, components:** `src/components/`, the global set above (e.g. `AppWindow.astro`, `PlaceFigure.astro`, `IndexList.astro`, `MarketplaceSection.astro`, `PledgeBand.astro`, `Hero.astro`, `DownloadButton.astro`).
- **New, data and content:**
  - Registries and data: `src/data/{places,screens,nav,site,home,release}.ts`, `src/data/{roadmap,release.fallback}.json`, and `src/lib/release.ts`.
  - Content collections: `src/content/config.ts` (pages, features, changelog).
- **New, pages:**
  - `src/pages/{index,download,marketplace,changelog,styleguide,404}.astro`
  - `src/pages/features/[slug].astro`
  - `src/pages/[...slug].astro` (promise, support, press, privacy, about)
- Modified: `package.json`, `.github/workflows/deploy.yml`, `README.md`.
- Removed: `src/main.jsx`, `src/App.jsx`, `vite.config.js`, root `index.html`.
- **Reused references:**
  - From the app repo: the tokens `/Users/gavin/programming-projects/inkblot/src/styles/tokens.css`, `PRIVACY.md` (to be updated), `CHANGELOG.md` and `docs/DESIGN.md`.
  - The app's GitHub issues for feature and marketplace copy (#1, #23, #33, #34, #37, #57, #65–71).
  - `design-iterations/` (`m-final/`, `final/`, `AUDIT.md`), and `reports/Inkblot website design research.md`.
- `reports/`, `research_notes/` and `design-iterations/` stay in the repo root and are not part of the build.

## Verification (each stage)
- **Every stage:** `npm run dev` for live work. `npm run build && npm run preview` must pass with no broken links (Astro build warnings, plus a link check over `dist`).
- **Visual:** check each page at 1440 px and 390 px, in light, dark and reduced-motion modes (DevTools emulation), against `design-iterations/m-final/` for the landing page. There must be no horizontal scroll.
- **Stage 3:** test with the R2 URL unreachable and confirm the fallback manifest renders. Load the landing page and `/download` with macOS, Windows, Linux, iPhone, iPad and Android user agents, and confirm each gets its own button and the others in the platform row.
- **Stage 9:** Lighthouse (mobile) on the landing page, a feature page, `/marketplace` and `/changelog` meets the budgets. axe reports zero serious issues. After DNS, `https://inkblotwriting.studio` serves over HTTPS and the OG preview renders correctly in a link debugger.
- **Every ⏸ Review** ends with a GitHub Pages deploy or a `npm run preview` link, plus a short list of what changed and what to look at. Work stops there until the owner responds.
