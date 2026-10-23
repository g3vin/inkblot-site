# Inkblot website: audit of the current plan

*15 October 2026 · Phase 1 of the design-iterations brief · covers `SITE_PLAN.md`, the
site code, `reports/Inkblot website design research.md`, the app's `docs/DESIGN.md` §17
(on `feat/unified-brand`), `PRIVACY.md`, `CHANGELOG.md`, and the app's source as it is
today.*

**In short:** the plan is strong on look, speed and structure. Its weak points are the
ones this brief cares about most:

- It never mentions AI.
- Its hero doesn't say what Inkblot is.
- It has no proof to show yet.
- It has nothing for the mobile visitor who can't download a Mac app.
- It undersells print, which is the deepest thing the app does.

All five can be fixed without reopening the brand decisions made in the October lab and
dailies.

---

## 1. What's there

**Code.** Nothing yet. `inkblot-site` is a bare Vite + React 19 shell: `App()` returns
`null`, and it deploys to GitHub Pages through `.github/workflows/deploy.yml`. The only
real content is `src/data/places.ts`, which holds one entry, the hero clip
`leaves-summer` (2.6 MB mp4 + jpg poster, credited CC BY 4.0). `SITE_PLAN.md`, `reports/`,
`research_notes/`, `src/data/` and `public/media/` are all untracked.

**Plan (`SITE_PLAN.md`, 232 lines).** A staged build with many review stops.

| Area | What the plan says |
|---|---|
| Stack | Astro, static output, GitHub Pages, at inkblotwriting.studio. DMGs and the release manifest live on Cloudflare R2. MDX pages, zod content collections, and registries for places, screens and the release |
| Pages | Landing, 8 feature pages, download, changelog + roadmap, Founding Writer, press/about, privacy, 404, plus `/styleguide` (internal) |
| Landing order | Hero → see it work → feature index → night section (pitch black) → trust strip → CTA → timeline teaser → final download → FAQ |
| Hero | **"Write."** as large as the window allows, over slowed footage of summer leaves. Under a rule: "Start with a sentence. Finish with a book." One "Download for macOS" button, with a Courier Prime spec line under it. The app window is moved *out* of the hero, into section 2 |
| Look | Inter Display Bold at −4.5% for headlines, Literata for reading text, Courier Prime for meta. Paper `#faf8f4` / ink `#1f1c18`, Deep fern `#244a37` (dark theme `#7dbb90`), warm Ink dark `#161412`, and one pitch-black section with Ember text. Feature imagery is outdoor places with "Fig." captions. Pen-on-photo marks in Reenie Beanie, used rarely |
| Pricing | Free. ~~An optional Founding Writer licence (one-time, about $25–40, unlocks nothing), and "Inkblot Plus" later~~ Superseded 22 Oct 2026: free and open source, forever (see SITE_PLAN.md → Pricing) |
| Budgets | LCP < 2.5 s, CLS < 0.1, INP < 200 ms. Landing JS < 15 KB, page < 1.5 MB before video, hero loop < 3 MB loaded after LCP |
| Privacy | No cookies, no banner, no analytics by default (cookieless Cloudflare is the only option considered) |

**What the app really is today** (from the repo, used throughout this audit):

- **Product:**
  - A free, local-first **macOS** app, v0.1.0, pre-launch.
  - No account, no sync and no analytics. Files sit on the writer's disk.
  - iOS/iPadOS is planned but not built (ARCHITECTURE.md lists its models as an open
    question).
- **Writing and planning:**
  - Prose documents, infinite canvases (JSON Canvas, Obsidian-compatible) and maps.
  - Maps cover places, routes, journeys on a story timeline, planets and galaxies, and
    the real Earth.
  - Notes, version history, citations, and screenplays.
- **Typeset and print (the deepest part of the app):**
  - Seven book styles and designed chapter openings.
  - Front and back matter, and a typeset history that keeps every interior sent to print.
  - 18 book trim presets, among them 5×8, 5.25×8, 5.5×8.5, 6×9, mass-market, B-format,
    Demy and Royal.
  - Covers with spine and ⅛″ bleed, **checked as KDP and IngramSpark would**.
  - Imposition for binding.
  - Export to PDF, EPUB, DOCX, Markdown and HTML, with an e-book preview at device size.
- **On-device models.** This matters for the AI copy:
  - Synonyms and antonyms come from a ~423 MB MiniLM-based ONNX model.
  - Dictation uses Whisper.
  - Read Aloud uses the Kokoro neural voice.
  - None of them writes text, and none sends text anywhere. But they *are* machine-learning
    models, so a blanket "no AI" claim would be false.
- **Themes:** Paper (light), Ink (dark) and Pitch black. There is no sepia theme.
- **Accessibility features:** Read Aloud and dictation. The app has **no**
  dyslexia-friendly fonts or adjustable spacing presets (no Atkinson, Lexend or
  OpenDyslexic anywhere in `src/`).

---

## 2. Gaps against the checklist

✅ present · 🟡 weak · ❌ missing

### Positioning & trust

| Item | Status | Fix |
|---|---|---|
| Anti-generative-AI stance on the homepage | ❌ | Neither the plan nor DESIGN.md §17 mentions AI. Add one plain line to the trust strip ("Inkblot never writes a word for you"), linked to a pledge page |
| Dedicated pledge/policy page | ❌ | Add `/no-ai` (or `/pledge`), worded precisely; there's a draft in §2a below |
| Precise generative vs. ordinary tools | ❌ | Name the on-device models and what they do. Leaving them out is the main honesty risk (see §5, risk 4) |
| Data ownership in plain language | 🟡 | The trust strip "No account. No cloud. No tracking." is good. Add "you own it; it's ordinary files; here's how to take everything and leave", and say that manuscripts are never used for training |
| Credible proof | ❌ | Pre-launch, so no users. Use the **app's own output** as proof (see risk 3). Never invent testimonials |
| Proof directly beneath the primary CTA | ❌ | Section 2 ("see it work") sits under the hero. Put one real typeset spread or short loop there, not three generic shots |
| No AI-generated imagery; human credits | ✅ | Commons footage with full credits in `places.ts`. Keep a visible credits list (footer or `/credits`), which is required for CC BY anyway |
| Doesn't look like AI-startup marketing | ✅ | Paper, ink, one fern green, grotesk type, real footage. No gradients, orbs or sparkles. The research notes call this out explicitly |

### Clarity & conversion

| Item | Status | Fix |
|---|---|---|
| One-sentence value proposition in the first viewport | 🟡 | "Write." says nothing on its own. The sub-line carries it, but it leaves out "Mac app", who it's for and why it's different. See §3 |
| Real product screenshot or loop in the first viewport | ❌ (by choice) | The plan moved the app window to section 2 and sizes the hero so that section peeks above the fold. Make sure the *peek* shows real product: the top edge of an app window, not white space |
| Full journey idea → draft → organise → revise → format → print | 🟡 | The feature index is organised by place photographs, not by the journey. Order the roster along the journey and number it (01 Draft … 06 Print). It's the one story Atticus and Vellum can't tell, because neither has planning or maps |
| Print before/after at real trim sizes | ❌ | Not in the plan. Add a print section: one manuscript page → the same text as a 6×9 spread in two book styles, at true proportion, with a downloadable sample PDF |
| Honest pricing page + FAQ | 🟡 | The FAQ covers free, platforms, files and signing. Add: lock-in/export, offline, **"Will it stay free? What will Plus cost?"**, and AI |
| CTA in hero, mid-page, footer | ✅ | Hero, section 5 and section 7, plus a sticky header button |
| Minimal form fields | ✅ | None. It's a straight download with no account, which is a real strength; say so ("No sign-up. Just download.") |
| Try-before-signup demo | 🟡 | No signup exists, so the download *is* the trial. A browser demo is possible later (the app is a web page inside Tauri), but call it aspirational |
| Navigation doesn't leak | ✅ | Three links + Download. Keep press and roadmap out of the header |

### Speed

| Item | Status | Fix |
|---|---|---|
| CWV budgets (LCP/INP/CLS) | ✅ | Stated, and tighter than the brief's |
| Font CLS (subset, preload, fallbacks) | 🟡 | Planned, but there are **four** families (Inter variable with `opsz`, Literata, Courier Prime, Reenie Beanie). Subset Inter Display to Latin, load only the bold weight for "Write.", and lazy-load Reenie Beanie. Budget fonts at 120 KB or less |
| Hero media | 🟡 | Poster first, video after LCP: good. Add **no video on mobile or `Save-Data`** (poster only), an AVIF/WebP poster with `fetchpriority="high"`, and explicit sizes |
| Minimal JS | ✅ | Astro, vanilla scripts, 15 KB budget, no animation libraries |

### Usability & accessibility

| Item | Status | Fix |
|---|---|---|
| WCAG 2.2 AA | 🟡 | The plan has axe, keyboard and zoom checks. Contrast: Fern on paper is **9.4:1**, ink on paper **16:1**, `#7dbb90` on Ink **8.2:1** and Ember `#c9a273` on black **8.9:1**, but **Ember muted `#82684a` on black is 4.0:1, which fails AA** for body text. Use the app's raised tier (`#a08060`). White "Write." over moving leaves needs the darkening scrim checked at every frame, not just the poster |
| Pause control for the hero video | ✅ | In the plan (WCAG 2.2.2) |
| Mobile-first | 🟡 | Checked at 400 px, but the page is designed desktop-out. A Mac-only download makes the phone layout the *hardest* case. See risk 2 |
| Body size and measure | ❌ (unspecified) | Set Literata body at 18–20px, measure 60–72ch, leading 1.55–1.65 in the tokens |
| Accessibility as a product value | ❌ | Nothing in the plan. Truthful today: Read Aloud and dictation that run on the Mac. **Don't** claim dyslexia fonts or spacing presets until the app has them (a small app feature worth adding) |

### Theming & visual identity

| Item | Status | Fix |
|---|---|---|
| Tokens defined once | ✅ | `tokens.css` mirrors the app's |
| Light / dark / paper themes with toggle | 🟡 | Light already *is* paper, and dark is warm Ink. The app's third theme is Pitch black, not sepia, so the site should mirror **Paper · Ink · Pitch black**. There's no manual toggle in the plan; add one to the footer |
| Typography as the brand | ✅ | Strong. One caveat: there's no serif *headline*, by your choice (the dailies said "no serif headlines"). Literata carries the book feel in the body and the print spreads |
| One confident accent | ✅ | Deep fern only |

### Findability & growth

| Item | Status | Fix |
|---|---|---|
| SEO basics, OG, sitemap | ✅ | Planned in stage 8 |
| Structured data | ❌ | Add `SoftwareApplication` JSON-LD (macOS, price 0, version), plus `FAQPage` |
| Content for writers (trim sizes, KDP/IngramSpark specs) | ❌ | Not in the plan. It's the cheapest proof of print expertise, and the app already encodes the data (`pageSizes.ts`, cover preflight). Start with "Trim sizes, explained" and "Print-ready for KDP and IngramSpark" |
| Community (newsletter, Discord, challenges) | ❌ | Only Founding Writer. A changelog RSS feed is planned. Add a newsletter later, via a privacy-respecting provider (needs your pick) |
| Privacy-respecting analytics | ✅ | None by default |

### 2a. Draft pledge wording (for review, not final)

> **Inkblot never writes for you.** It has no generative AI: nothing that drafts,
> rewrites, continues, summarises or "improves" your words, and no chat. Your manuscript
> stays on your Mac as ordinary files. We never see it, so it can never be used to train
> anything.
>
> **What Inkblot does run, and why.** A few small models on your Mac do jobs that aren't
> writing: finding synonyms and rhymes, turning your voice into text when you dictate,
> and reading your words back to you aloud. They run offline, they never send your text
> anywhere, and you can use Inkblot without them.

Before this goes live, check one thing: the synonym model ships through a 423 MB download
from GitHub. That's fine to say, but the "never sends your text" line has to stay true
for every future feature, the online maps included (they send map tiles and search words,
not manuscript text).

---

## 3. Messaging test (5 seconds, first viewport)

**Current:** **"Write."** / *"Start with a sentence. Finish with a book."* / [Download for
macOS] / *Free · v0.x · date · macOS [min] · Apple silicon & Intel · size*

| Question | Pass? | Why |
|---|---|---|
| (a) What is this? | 🟡 | "Finish with a book" hints at a writing tool, and "Download for macOS" says it's an app. A visitor has to put both together |
| (b) Who is it for? | ❌ | Nothing says novelists, worldbuilders or self-publishers |
| (c) Why different? | ❌ | Free shows only in the spec line. Offline, no-AI, maps and print-ready all appear later or not at all |
| (d) What next? | ✅ | One button |

You loved "Write." and it should stay; it's the brand moment. The fix is the line under
it. Three alternatives, each keeping "Write." above the rule:

1. **"From first sentence to print-ready book, all on your Mac. Free, offline, and every
   word your own."** Covers what, why different and platform. The longest of the three.
2. **"Draft it, map it, typeset it. One free Mac app from first line to finished book,
   and nothing in it writes for you."** Brings in the worldbuilding and the no-AI stance.
3. **"Start with a sentence. Finish with a book. No account, no cloud, no AI writing for
   you."** Keeps your current line and adds the trust strip's rhythm as a second line.

My pick is 3: it keeps the line already approved and adds the missing "why" in the
cadence of your reserve lines. Use the Courier spec line to say "Free" first.

---

## 4. Competitive framing

The plan doesn't position Inkblot against anyone. Current facts, checked October 2026
(sources at the end):

| | Writes + organises | Formats for print | Worldbuilding (maps, timeline, canvas) | Generative AI | Price | Platform | Where files live |
|---|---|---|---|---|---|---|---|
| **Scrivener** | ✅ strong | 🟡 via Compile | ❌ | None ("Scrivener itself contains no AI") | One-time | Mac, Windows, iOS | Local |
| **Vellum** | ❌ | ✅ excellent | ❌ | None known | $199.99 ebook, $249.99 with print | Mac only | Local |
| **Atticus** | ✅ | ✅ | ❌ | No AI drafting | $147 one-time | Browser/PWA, all platforms | Cloud sync |
| **Reedsy Studio** | ✅ | ✅ | ❌ | Some generators reported (unconfirmed) | Free | Browser | Cloud |
| **Word / Docs** | 🟡 | ❌ | ❌ | Copilot / Gemini built in | Subscription | All | Cloud |
| **Inkblot** | ✅ | ✅ deep (covers checked for KDP/IngramSpark, imposition, typeset history) | ✅ maps, timeline, canvases | **None that writes** | **Free** | Mac | **Local, no account** |

**What this means:**

- **"End-to-end" isn't a differentiator.** Atticus and Reedsy both say "write and format
  in one place".
- **"No AI" isn't unique either.** Scrivener, Vellum and Atticus have none. It's a
  *trust requirement* and a contrast with Word, Docs and Reedsy, so state it plainly, but
  don't lead with it as the headline idea.
- **The open position is the combination.** Inkblot is the only tool that holds the
  world (maps, timeline, canvas), the manuscript *and* a Vellum-grade interior in one
  window. It's also free, offline and account-free. In one line: **Scrivener's binder,
  Vellum's typesetting and a worldbuilder's atlas, in one free Mac app that never writes
  for you.** That belongs in the feature index intro and the FAQ ("How is this different
  from Scrivener / Vellum / Atticus?"), not in the hero.
- **Compare honestly and only on facts.** No competitor logos, and no "better than"
  without a specific feature behind it.

---

## 5. Top 5 risks to downloads, by impact

1. **The hero reads as a mood, not a product.** "Write." over leaves could be a film
   studio, a stationery brand or a meditation app, and the 10-second abandonment research
   in your own report applies. **Fix:** sub-line 3 above, plus a real app window
   visibly peeking above the fold on every screen size.
2. **Phone visitors can't act.** Most landing traffic is mobile, and the app is
   Mac-only. The plan's "Copy link" is the only path, and email capture is deferred.
   **Fix:** a "Send to my Mac" button using the Web Share API (no provider, no data
   kept), with Copy link as the fallback. Say "iPad and iPhone: planned" only if you're
   happy to commit to it publicly.
3. **No proof at launch.** There are no users, testimonials or press yet, and inventing
   any is out of the question. **Fix:** let the work be the proof.
   - Typeset a public-domain novel in each of the seven book styles.
   - Show real spreads at 6×9 next to its manuscript page.
   - Offer the PDF and EPUB to download.
   - Add a cover with credited art (public domain or commissioned).
   - Later, a "Made with Inkblot" shelf of real books.
4. **The AI stance is missing, then easy to overclaim.** Writers who care will look for
   it; it isn't there. And a blanket "no AI" is contradicted by Whisper, Kokoro and the
   MiniLM synonym model, and a critic will find them. **Fix:** the pledge page in §2a,
   precise about "writes for you" versus "runs on your Mac", linked from the trust strip
   and the FAQ.
5. **Print, the biggest differentiator, is a single feature row.** The plan gives
   "Typesetting & publishing" one row and a harbour photograph. Yet it's the part that
   replaces a $250 purchase, and the changelog shows it's the deepest work in the app.
   **Fix:** a dedicated print section on the landing page (manuscript → spread → cover
   wrap with bleed and spine, "checked as KDP and IngramSpark would"), plus the trim-size
   guides for SEO.

**Also worth watching:**

- **"Free" can read as unfinished,** and "Plus later" raises "will this get paywalled?"
  Answer it in the FAQ with a concrete promise, such as "everything in the app today
  stays free".
- **The privacy policy still covers an iOS edition** that doesn't exist. The plan already
  says to trim this for the site.

---

## 6. Before Phase 2: how this brief fits what's already decided

The brief's four starting directions clash with decisions you've already made in three
lab rounds and two rounds of dailies:

| Brief's direction | Clash |
|---|---|
| A. The Manuscript (serif-led, paper-and-ink) | Dailies: "no serif headlines". Literata as display was superseded |
| B. The Studio (bright, energetic, corkboard) | Dailies: "louder, terser, darker; no second colours or whimsy". Paper and collage were rated No |
| C. The Press (letterpress heritage, texture) | Paper textures and torn/collage were rated No. Grain is allowed on imagery only |
| D. The Quiet Room (calm, focused) | Fits. It's close to the night section |
| Light / dark / **sepia** themes | The app's themes are Paper / Ink / **Pitch black** |

Rebuilding those four would re-run choices you've already settled. My suggestion is four
directions that **share the settled brand** (tokens, Inter Display, "Write.", deep fern,
the logo) but differ in **structure and story**, which is where the open questions are:

- **A. On location.** The current plan as written: film house, leaves hero, feature
  roster by place. This is the control.
- **B. The proof.** Print-first. The hero's peek and section 2 are real 6×9 spreads and a
  cover wrap, and the journey is told through the book being made.
- **C. The atlas.** Visual-first. The world (map, timeline, canvas) leads, then the
  manuscript, then the book. It's aimed at worldbuilders.
- **D. After dark.** Pitch-black-first, the quiet room. The night section becomes the
  frame and the leaves become a single still.

Each would apply the audit's fixes: the sub-line, the pledge, the print section and the
mobile share.

---

## Decisions (15 October 2026, answered after the audit)

These override the audit text above where the two conflict.

| Question | Decision |
|---|---|
| Directions | The four within-brand directions in §6: A On location, B The proof, C The atlas, D After dark |
| AI pledge | The §2a wording, with "never used to train anything" as a **standing promise**, even if sync arrives |
| Pricing | **Updated 22 Oct 2026:** every feature free, on every device, forever, and open source (Apache 2.0). No Plus, no Founding Writer. Only hosted sync (at cost, free on request), Directory listings, institutional support and donations may cost money. See the app's `PROMISE.md` |
| Platforms | **macOS, Windows, Linux, iOS, iPadOS and Android, all at launch.** This changes risk 2: phone visitors *can* download, so the store badge goes to the phone view. The plan's Mac-only download page, universal DMG and "Inkblot is a Mac app" view are out of date |
| Download button | Detect the device: one button that says "Download for macOS", "Download for Windows", "Download for Linux", "Get it on the App Store" or "Get it on Google Play", with an "Other platforms" row under it |
| App imagery | The app isn't finished, so there are **no screenshots yet**. Every app window, loop and spread is a labelled placeholder slot (e.g. `[APP SCREENSHOT — manuscript editor, light]`) at its final size, so swapping one in causes no layout shift |
| Print proof | Labelled placeholders at true 6×9 proportion, `[SAMPLE SPREAD — replace with a real export]` |
| Features | More features may be added before launch. The feature roster and journey are data-driven, and the copy doesn't promise a fixed count ("eight tools" etc.) |
| Rating gallery | A hosted artifact with its own database, like the brand lab and dailies, so ratings are read back directly with no JSON hand-off |

## Open questions for you (they block Phase 2; answered above)

1. **Directions:** the four within-brand directions in §6, or the brief's A–D as written?
2. **AI and data policy:** is the §2a wording right? Specifically, can the site promise
   "never trained on" as a standing commitment, even if sync arrives one day?
3. **Pricing copy:** can the site say "everything in Inkblot today stays free"? And what,
   if anything, should it say about Plus?
4. **Platforms:** should the site mention iPad/iPhone as planned, or stay silent?
5. **Proof:** OK to typeset a public-domain novel in the app as the sample book? Which
   title?
6. **Rating gallery:** a local `design-iterations/index.html` with browser storage and a
   JSON export, as the brief asks? Or a hosted artifact whose ratings I can read back
   directly, as in the brand lab and dailies?

## Sources (competitor facts)

- Scrivener: [L&L blog on AI prompts in Scrivener](https://www.literatureandlatte.com/blog/scrivener-and-ai-why-do-i-see-ai-prompts-in-my-scrivener-projects-on-mac), [L&L forum thread](https://forum.literatureandlatte.com/t/adding-ai-tools-to-scrivener/133222)
- Vellum: [Reedsy guide](https://reedsy.com/blog/guide/book-writing-software/vellum-software/), [Kindlepreneur](https://kindlepreneur.com/vellum-alternatives/), [publishing.co.uk](https://publishing.co.uk/guides/how-much-does-vellum-cost/)
- Atticus: [Vappingo review](https://www.vappingo.com/word-blog/atticus-review-kdp/), [Built Written 2026](https://www.builtwritten.com/blog/atticus-software-2026), [Chapter pricing](https://blog.chapter.pub/atticus-pricing/)
- Reedsy Studio: [Reedsy Studio](https://reedsy.com/studio/write-a-book), [Reedsy on AI writing tools](https://reedsy.com/studio/resources/ai-writing-tools/), [third-party comparison](https://aitoolsatlas.ai/compare/flymsg-vs-reedsy-studio) (unconfirmed)

Several of these are competitors' or affiliates' pages. Confirm prices on the vendors'
own sites before quoting them on the live site.
