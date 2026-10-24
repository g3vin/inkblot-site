# Inkblot: product and brand profile (from local sources)

> **Superseded (22 Oct 2026):** Inkblot is now open source (Apache 2.0) and every feature is free, forever. There is no Founding Writer licence and no Inkblot Plus. See the app's `PROMISE.md` and SITE_PLAN.md → Pricing. The licence, "private/proprietary" and GitHub Releases notes below describe the app as of mid-October 2026.

Source key. All sources are local files or git objects on this machine; no web research.
- APP = /Users/gavin/programming-projects/inkblot (git repo, remote github.com/g3vin/inkblot, private/proprietary)
- SITE = /Users/gavin/inkblot-site (remote github.com/g3vin/inkblot-site, GitHub Pages)
- DICT = /Users/gavin/inkblot-dictation
- NLP = /Users/gavin/programming-projects/inkblot-nlp-models
- SPLAT = /Users/gavin/DaVinci Resolve Media/inkblot-splatters
Commit references are `repo@hash`.

## 1. What is Inkblot, what problem does it solve, and for whom?

### Takeaway
Inkblot is a proprietary, local-first macOS desktop writing studio for long-form creative work (novels, screenplays/stage plays, worldbuilding). It covers the whole job, from drafting with notes, canvases, maps and timelines through professional typesetting and print/e-book publishing (KDP/IngramSpark-ready). Its stated design goal is "as easy as a notes app, as deep as a publishing tool".

### Cited Findings
- README one-liner: "Inkblot is a local-first writing app for long-form work. Documents live as files on your disk; nothing is synced anywhere." — [APP/README.md](file:///Users/gavin/programming-projects/inkblot/README.md)
- package.json description: "A local-first writing app: prose documents, canvases and maps, with notes, version history and on-device language tools." Author Gavin Bowden. — [APP/package.json](file:///Users/gavin/programming-projects/inkblot/package.json)
- Main README feature bullets: three kinds of document (prose, infinite canvases in JSON Canvas format "compatible with Obsidian", maps with places, routes and journeys on a story timeline; any two can sit side by side in a split); notes anchored to the text with images and voice memos plus a "Bubble editor for reworking a sentence word by word"; version history with named versions, comparison and restore; "a workbench of on-device language tools: synonyms, rhymes, definitions and parts of speech, plus dictation and Read Aloud that run on your machine"; references and citations (APA, MLA, Chicago and more); Print Layout with export to PDF, EPUB, Markdown, HTML. — [APP/README.md](file:///Users/gavin/programming-projects/inkblot/README.md)
- Design principle: "As easy as a notes app, as deep as a publishing tool. Someone who has only used Notes, Google Docs or Word should be able to start writing without reading anything. An editor or typesetter should find every professional tool they need ... There is no 'beginner' or 'pro' switch." — [APP/docs/DESIGN.md §1](file:///Users/gavin/programming-projects/inkblot/docs/DESIGN.md)
- "Quiet studio. Inkblot is a writing studio of paper and ink. The chrome is calm and stays out of the way; the writing is the hero." — [APP/docs/DESIGN.md §1](file:///Users/gavin/programming-projects/inkblot/docs/DESIGN.md)
- Audience signals in features: built-in story folder presets "Characters, Settings, Outline, Novel" plus writer-defined folder types — [APP/src/lib/storyStructure.js](file:///Users/gavin/programming-projects/inkblot/src/lib/storyStructure.js), [APP@b38d586]; screenplay and stage-play writing with Final Draft keys, SmartType, Fountain and Final Draft formats, script production reports, sides and actor's copy — [APP@181c141], [APP@fb44fa1], [APP@646600a]; book publishing (editions, covers checked "as KDP and IngramSpark would", print-on-demand preflight, spine width) — [APP/CHANGELOG.md](file:///Users/gavin/programming-projects/inkblot/CHANGELOG.md), [APP@fcd6d01]; academic-leaning references (DOI, ISBN, arXiv, PubMed lookups, nine citation styles) — CHANGELOG 0.1.0.
- Previous website tagline: "The visual writing studio for creatives" — [SITE@6052bd1 src/App.jsx]
- Example placeholder labels in the design docs ("NOVEL", "STATS") reinforce a fiction-writer framing. — [APP/docs/DESIGN.md §5]

### Inferences
- Primary audience: novelists and fiction writers (especially worldbuilders: maps of planets/galaxies, timelines, story calendars) and self-publishers who want to produce print-ready books and EPUBs without InDesign/Vellum. Secondary: screenwriters/playwrights; students/academics (citations); people who value privacy/offline.
- Natural competitive frame (not stated in sources): Scrivener (project tree, compile), Vellum/Atticus (typesetting/e-book), Final Draft (scripts), Obsidian (canvas compatibility), World Anvil/Campfire (maps/timelines). The "one app from first draft to printed book" message is the strongest differentiator visible in the code.
- Value proposition candidates drawn from the sources: "Write it, map it, typeset it, publish it, all on your Mac, all offline." The "visual writing studio" tagline matches canvases, maps and timelines.

### Gaps
- No explicit written positioning statement, persona doc or competitor list exists in the repos.

## 2. Platforms, version, distribution

### Takeaway
Today Inkblot is a Tauri 2 desktop app at v0.1.0 (identifier `com.inkblot.app`). It is effectively macOS-first and macOS-only in practice, with iOS/iPadOS planned. No public release, pricing or installer distribution appears to exist yet. The app does check GitHub Releases (tag `v<version>`) to show "what's new" after an update.

### Cited Findings
- tauri.conf.json: productName "Inkblot", version "0.1.0", identifier "com.inkblot.app", window 1200×800 with `titleBarStyle: Overlay` and hidden title (a macOS-native look); `bundle.targets: "all"`; icons include `icon.icns` and `icon.ico`; bundled resource `resources/minilm-tokenizer.json`; macOS Info.plist. — [APP/src-tauri/tauri.conf.json](file:///Users/gavin/programming-projects/inkblot/src-tauri/tauri.conf.json)
- `npm run tauri build` produces "a bundled .app"; data lives in `~/Library/Application Support/com.inkblot.app`. — [APP/README.md]
- Info.plist: "Inkblot uses your microphone for offline dictation." — [APP/src-tauri/Info.plist]
- Privacy policy "covers every edition of Inkblot: the desktop app for macOS and the app for macOS, iPadOS and iOS." — [APP/PRIVACY.md](file:///Users/gavin/programming-projects/inkblot/PRIVACY.md)
- 0.1.0 shipped "the Tauri app for macOS, and a SwiftUI app for macOS (iPadOS and iOS in progress)". — [APP/CHANGELOG.md [0.1.0] - 2026-09-24]
- The Swift shell was later removed: "chore: remove the macOS Swift shell" (2026-09-28) and "docs: describe Inkblot as the Tauri app it now is". — [APP@dcd0c4b], [APP@e10d253]
- iOS plan: "The plan is Tauri 2's iOS target: the same page, with a small Swift plugin for the few controls that should be Liquid Glass. The models are the open question: `ort` has no iOS library and whisper.cpp's cmake has not been run for the iOS SDKs." — [APP/ARCHITECTURE.md, Known gaps](file:///Users/gavin/programming-projects/inkblot/ARCHITECTURE.md)
- Icon sets exist for android and ios as well as Windows Store-style Square*Logo PNGs (Tauri `tauri icon` default output). — [APP/src-tauri/icons/]
- Some features are macOS-specific: two-finger sidebar swipe "reading AppKit's trackpad phases"; fonts "set in them on any Mac". — [APP@21e5b51], CHANGELOG
- Update notes: "On the first launch of a new version a card at the top of the window lists the version's highlights ... read from its GitHub Release (tag v<version>) ... Without a release to read (offline, unpublished, or a private repo) the card still names the version and links to the releases page." — [APP@b5595e3]
- No Tauri updater plugin in package.json or tauri.conf.json (grep found none). — [APP/package.json], [tauri.conf.json]
- CI: lint/test on ubuntu-latest, Rust build on macos-latest; no release/packaging workflow. — [APP/.github/workflows/ci.yml]
- Only one tag-level version exists: [0.1.0] - 2026-09-24; everything since is "[Unreleased]". — [APP/CHANGELOG.md]
- Unverified: "Launch the bundled `.app` with the network off" is still listed as not checked by hand. — [APP/ARCHITECTURE.md Known gaps]

### Inferences
- The site's primary download target should be macOS (a .dmg from `tauri build`; Apple Silicon and Intel or universal). Windows/Linux are technically possible with Tauri but nothing in the code tests or targets them, and dictation uses Metal. Present "iPad and iPhone: coming" as roadmap, not a download.
- Download links will probably point to GitHub Releases, since the app already reads release notes from them. Because the app repo is private, release assets would have to be hosted somewhere public (for example on the public inkblot-site repo or a separate releases repo). That needs a decision.
- No code-signing or notarization config was found. Marketing should not promise a Mac App Store listing.

### Gaps
- No pricing, licensing model (paid, free, beta), App Store plans, signing/notarization or release channel is documented anywhere.
- Minimum macOS version is not set in the config that was inspected.

## 3. Features: shipped, recent, upcoming (timeline)

### Takeaway
Development started on 2026-02-05 and runs to 2026-10-14 (199 commits on the current branch). Bursts came in Feb–Aug (core editor, notes, models, Pinterest, focus mode, Read Aloud) and a heavy run 2026-09-21 → 10-14: Rust core, print/typeset/publishing, scripts, stats, timeline, design system, brand, 3D/planetary maps. Several items are explicitly "still to come".

### Cited Findings: candidate timeline (dates from `git log`, APP)
- 2026-02-05: initial commit; text highlighting and alignment (b774ec3, 11f101a)
- 2026-02-10: notes attached to documents, autosaved (d9fb2d6)
- 2026-02-12: app icons, Pinterest boards from a link; project renamed to "Inkblot" (fd3a466, 1e7757c)
- 2026-03-02: on-device synonym model pipeline; version history fix (4199829)
- 2026-04-29: Pinterest private board previews (ce249d6)
- 2026-05-28: focus mode (01737b9)
- 2026-08-06: Read Aloud with Kokoro speech; story folder presets (137303f, 9f4c6b0)
- 2026-09-21/22: big refactor; Rust core `inkblot-core` with JS/Rust parity harness; preferences to disk; Kokoro without Python; a native Swift shell with Liquid Glass sidebars (later removed)
- 2026-09-23: print layout, page setup, printing and export (1796130)
- 2026-09-24: references and citations, Bubble editor, bibliography export (2ac6ae4); maps as a third document kind (3cf9b83); writing stats with timers, goals, reminders and streaks (a725118); v0.1.0 tagged in CHANGELOG
- 2026-09-25: book compile tools, print typography, submission formats, Word/plain-text export, publishing tools (spine width, POD preflight); screenplay and stage play; Fountain and Final Draft; script production (8516cf8, 181c141, fb44fa1, 646600a)
- 2026-09-26: Write and Typeset modes; Book navigator; chapter openings plus seven one-click book styles; covers (full wrap, KDP/IngramSpark checks); typeset history; e-book Digital preview (Kindle, Kobo, Apple Books device frames); fine typography (hanging punctuation, OpenType, proofing widows and orphans, baseline grid); footnotes/endnotes; full-page and bleed pictures; editions (Paperback, Hardcover, Large Print, eBook) (c4c50cd … 1236b73)
- 2026-09-26 → 10-08: timeline (story chronology with lanes and eras, flashback visualisation, links to maps and canvases) merged to main (8ecd13a)
- 2026-09-28: "Quiet Studio" design system foundation: tokens, components, ⌘K command palette (a77f9ed); Swift shell removed (dcd0c4b)
- 2026-10-08: brand: "i-spray" mark (c70a68d), then replaced the same day by the "ib monogram, splash-dot wordmark and app icons" (bc18821); copy moved to sentence case; conversation tiles (Brand/iMessage/Generic styles)
- 2026-10-09: rebindable shortcuts; lock documents read-only; table toolbar; custom folder types; "what's new" after update; drag a tab out into its own window; two-finger sidebar swiping; Inlay panel controls (on branches feat/docked-panels-card and feat/maps-3d, not yet on main)
- 2026-10-14: docked panels on the document card, help topics, project search; quicker map editor; map format 2 for "planets, galaxies, universes and 3D models" with real distance units from metres to megaparsecs and N-body star systems (16f5d32, 283b5d5, aa15661, branch feat/maps-3d)
- Main is at 6b9d901 (2026-10-08). The 2026-10-09 and 10-14 work sits on unmerged branches (feat/docked-panels-card, feat/maps-3d). — `git log main`, `git branch -a`
- Other branches: typeset-workflow, web-ui-parity, writing-stats, timeline, refactor/design-migration (mostly merged history).

### Cited Findings: other headline capabilities (CHANGELOG 0.1.0 and Unreleased)
- Canvases: infinite, JSON Canvas format, text/file/link/note/audio/group cards, labelled edges.
- Maps: places, routes, regions, characters' journeys "on a blank sheet, a traced picture, the Earth or a star system"; fantasy themes; map version history with place-by-place merge.
- Workbench: on-device synonyms, rhymes, definitions, parts of speech; offline dictation; Read Aloud (Kokoro).
- References: lookups from DOI, ISBN, arXiv, PubMed or web address; nine styles.
- Print: imposition for self-binding (folded signatures); export PDF, EPUB, Markdown, HTML, Word, plain text.
- Pinterest board embeds (mood boards) with cached previews, including private boards.
- Named text styles for fiction devices: Letter, Text Message, Email, Verse, Journal Entry, Sign, etc.
- Export All Editions: every print interior plus cover PDF and EPUB in one go. — [APP/CHANGELOG.md](file:///Users/gavin/programming-projects/inkblot/CHANGELOG.md)

### Cited Findings: upcoming / not built
- "Timeline, still to come: version history for the chronology, a timeline view in the window's toolbar and inspector, attaching an existing note to an event, continuity checks, relative dates, and export."
- "The Kokoro download. The page never offers it" (native Read Aloud otherwise falls back to in-browser WASM).
- "Reminders while Inkblot is closed."
- Toolbar items still wanted: New Document/Canvas/Folder, Bubble, workbench lookups, project search focus.
- iOS and iPadOS via Tauri 2 iOS target (models are the open question). — all from [APP/ARCHITECTURE.md Known gaps](file:///Users/gavin/programming-projects/inkblot/ARCHITECTURE.md)
- Design handoff still open: "the logo check on real devices, moving bare buttons onto src/ui". — [APP/CLAUDE.md], [APP/docs/design-handoff.md]
- GitHub issues are referenced in commits ("Closes #25", "Closes #31"), so a backlog exists on GitHub; not inspected (local-only constraint).

### Inferences
- For the marketing site, a reasonable grouping is: Write (editor, notes, Bubble, focus, scripts), Plan/World-build (canvas, maps incl. galaxies, timeline, story folders, Pinterest boards), Language tools (on-device), Publish (Typeset, covers, editions, EPUB, KDP/IngramSpark preflight). Then a "Coming soon" section: iPad/iPhone, timeline continuity checks and export.
- The 3D/galaxy maps are very recent and unmerged, so treat them as "new/preview" on the site.

### Gaps
- No public roadmap document; issue tracker contents unknown.

## 4. Visual identity

### Takeaway
The brand system is "Quiet Studio": warm paper (light) and ink (dark) neutrals, eight fountain-pen ink colours with Ink Blue as the interface colour, and three typefaces (Inter for UI, Literata for writing, Courier Prime for small typewritten accents and the wordmark). Phosphor Light icons. The logo is a strictly black-on-white "ib" monogram whose i-dot is a procedurally modelled ink splash. Tone: calm, literate, precise, warm, never whimsical.

### Cited Findings
- Personality: "Calm, literate, precise and warm, like a well-kept studio. It is not whimsical, nostalgic or themed. We never use paper textures, typewriter sound effects or coffee stains." The brand shows "in small, crafted details: a typewritten label, an ink-blue dot, a well-set page. It is never loud." — [APP/docs/DESIGN.md §1–2](file:///Users/gavin/programming-projects/inkblot/docs/DESIGN.md)
- Name: the wordmark is always lowercase "inkblot"; in running text write "Inkblot". — DESIGN.md §2
- Mark: "ib" in Literata ExtraBold, set tight, with the i's dot replaced by "an ink splash: a round blot with a few droplets flung up and to the right". The splash is generated from "a simplified model of an ink drop hitting paper ... impact angle, rim fingering and satellite droplets"; never redrawn by hand. — DESIGN.md §2; generator at [APP/docs/brand/generator/generate.py, splash.py]
- Wordmark: "inkblot" in Courier Prime Bold with the same splash as its dot. — DESIGN.md §2
- App icon: black mark on a white rounded tile, about two thirds fill, optically centred. The same artwork is the favicon and the desktop/iOS icons. — DESIGN.md §2
- Logo colour rule: always black on white (`--brand-mark: #000000`, `--brand-tile: #ffffff`); on dark theme use `--text-primary`. "The logo never takes Ink Blue, another ink or the accent." Don'ts: recolour, shadows/gradients/glass, stretch, redraw the splash, plain round dot, other faces. Clear space at least the splash's width; mark legible from 16px, wordmark from 72px wide. — DESIGN.md §2; [APP/src/styles/tokens.css]
- Logo history: the first mark (2026-10-08, "i-spray") was replaced the same day because it "read as the 'info' glyph at small sizes". — [APP@bc18821]
- Brand files: [APP/src/assets/brand/mark.svg, wordmark.svg, app-icon.svg], [APP/public/favicon.svg], React `Mark`/`Wordmark`/`AppIcon` in `src/ui/Brand.jsx`; raster icon sources in `src-tauri/icons/source/`.
- Neutrals (tokens.css). Light "paper": `--paper-0 #faf8f4`, `--paper-1 #f3f0ea`, `--paper-2 #fffefb`, `--paper-3 #ebe7df`; ink text `--ink-0 #1f1c18`, `--ink-1 #48423a`, `--ink-2 #6b645a`, `--ink-3 #716a5f`. Dark "ink": `--paper-0 #161412`, `#1d1b18`, `#24211d`, `#2d2a25`, sunken `#110f0d`; text `#f2eee6`, `#d8d2c6`, `#a69f93`, `#968f83`. "Don't use #000, #fff or cool greys." — [APP/src/styles/tokens.css](file:///Users/gavin/programming-projects/inkblot/src/styles/tokens.css), DESIGN.md §3
- Brand/interface colour Ink Blue: light `#2f4a8a` (strong `#22386b`), dark `#8fa8e6` (strong `#b5c7f0`). — tokens.css
- Eight inks, light / dark: blue #2f4a8a / #8fa8e6; teal #25717a / #7cc6cb; green #3b7550 / #86c79a; amber #94660f / #e5b85c; rust #a6541f / #e89a6a; red #a23b32 / #e8877b; violet #664a98 / #b79ce6; slate #56606b / #a7b0ba. Users can pick the accent (Ink Blue default, or one of five others) and the window "tray" colour from any ink. — tokens.css; DESIGN.md §3
- Card recipe: ink wash at 10%, border at 30% (45% hover). Radii scale 4/8/12; pills only on tags/toggles. — DESIGN.md §3; design-handoff.md
- Typography: Inter Variable (UI; eyebrows bold caps, tracked), Literata Variable (writer's words; default writing font), Courier Prime (only for meta like word counts, dates, shortcuts, empty-state titles, the wordmark; also screenplays). All SIL OFL and bundled. UI scale 10/11/13/14/16/20/26/34px; "26 display, landing" and "34 hero only". Sentence case everywhere. — DESIGN.md §5; tokens.css
- Icons: Phosphor (Light weight at rest, Fill when active), 16/20px. — DESIGN.md rule 6; `@phosphor-icons/react` in package.json
- Layout metaphor: "The document is the room": a seamless writing surface in a card on the window's tinted tray; tools float and fade. Liquid Glass only on iOS/iPadOS floating chrome. — CLAUDE.md; DESIGN.md
- Copy voice: "plain and warm: sentence case, verb first, no jargon on the surface"; commit and changelog prose is itself literate and plain ("a picture can have a page to itself"). — CLAUDE.md; CHANGELOG
- Themes: Light (paper), Dark (ink), System; WCAG AA in both. — DESIGN.md §4

### Inferences
- In words: a restrained, bookish, warm-neutral aesthetic (cream paper, sepia-black ink, a single deep fountain-pen blue), editorial serif for content, typewriter accents for metadata, and a single expressive gesture: the ink splash. The website should inherit these tokens directly (paper background, Literata display, Courier Prime meta labels, Inter UI, Ink Blue CTAs, eight inks for feature categorisation) and keep the logo black and white.
- The ink-splash physics generator (splash.py) is a natural source of on-brand hero imagery or animation (procedural splashes), consistent with the "inkblot-splatters" video folder name.

### Gaps
- Screenshots/marketing imagery of the app do not exist in the repos; they would need to be captured.

## 5. The current and previous marketing site (inkblot-site)

### Takeaway
The site is a minimal Vite + React 19 app deployed to GitHub Pages through Actions. As of 2026-10-14 it renders nothing (`App` returns null). The earlier May 2026 version was a single centred hero: "Inkblot" in Playpen Sans 800 on a warm off-white background with green accents. Its tagline was "The visual writing studio for creatives". That font and green palette conflict with the app's later Quiet Studio brand.

### Cited Findings
- Commits: init 2026-05-08 (aa5d769); "bare-bones site setup" (fb52e13); deploy fixes; "updated font" (982e09f, 05-08); "landing page update" (6052bd1, 05-09); "Strip site to bare bones" (b1c24be, 2026-10-14). — `git log` in SITE
- Current: `src/App.jsx` is `return null`; index.html has only the title "Inkblot"; no public assets except `.nojekyll`; `vite.config.js` base './'. — [SITE/src/App.jsx], [SITE/index.html]
- Deployment: `.github/workflows/deploy.yml` builds with Node 20 and deploys `dist` to GitHub Pages on push to main; remote github.com/g3vin/inkblot-site. README: "The Official Inkblot Website. A custom GitHub Pages site built with Vite and React." — [SITE/README.md], [SITE/.github/workflows/deploy.yml]
- Previous design (b1c24be~1): Google Font Playpen Sans (100–800) for h1 at clamp(3.25rem, 13vw, 8.5rem), weight 800; body Inter/system; background #f5f3ed, text #17201b/#111713/#45544b; eyebrow green #49735e; pill button #17201b hover #2f5d46 (green); meta description "The official website for Inkblot." — `git show b1c24be~1:src/styles.css`, `:index.html`
- Copy history: "A fresh GitHub Pages site, powered by Vite and React." → "More info coming soon..." → "More info coming soon, we promise..." → "The visual writing studio for creatives". Early version had an "Official Website" eyebrow and a "View on GitHub" button. — SITE@fb52e13, c6ab256, f56940b, 982e09f, 6052bd1

### Inferences
- Nothing from the old site needs preserving except perhaps the tagline. Playpen Sans (a playful handwriting font) and the green accents conflict with DESIGN.md ("not whimsical"; Ink Blue; Inter/Literata/Courier Prime). That likely explains the strip-down.
- With GitHub Pages hosting, the site will be static. The stack (Vite + React 19) is already in place.

### Gaps
- No custom domain (no CNAME file) was found.

## 6. Related projects

### Takeaway
inkblot-dictation is a public, MIT-licensed Rust crate (Whisper-based offline dictation) that the app's `inkblot-models` crate pulls in by git. inkblot-nlp-models is the Python research repo behind the on-device synonym, rhyme and POS models. The inkblot-splatters DaVinci Resolve folder is empty.

### Cited Findings
- inkblot-dictation: "An on-device live dictation pipeline for Tauri + React apps using cpal for microphone capture, simple VAD / silence detection, whisper-rs / whisper.cpp for local speech-to-text". Features: offline recognition, partial/final transcript events, spoken punctuation, "new line/new paragraph", capitalisation. Features for metal/vulkan/cuda. License MIT; repo github.com/g3vin/inkblot-dictation; commits 2026-05-01 → 05-02. — [DICT/README.md, Cargo.toml]
- The app depends on it: `inkblot-dictation = { git = "https://github.com/g3vin/inkblot-dictation.git", ... optional = true }`; inkblot-models description "Inkblot's on-device models (synonyms, rhymes, Kokoro speech, whisper dictation)". — [APP/src-tauri/crates/inkblot-models/Cargo.toml]
- inkblot-nlp-models: Python scripts and data: synonym.py, synonym.onnx (~716 KB), ryme.py, pcfg.py, grammar.json, ConceptNet assertions, vocab files, synonyms.csv (~25 MB), Git LFS. Commits 2026-02-11 → 03-02 ("pos model trained on GDELT data", "bert synonym (an ant) finder", "added onnx files", "added pcfg"). — `ls`/`git log` in NLP
- The app bundles `resources/minilm-tokenizer.json` and uses `ort` (ONNX Runtime). — tauri.conf.json; inkblot-models Cargo.toml
- inkblot-splatters: only an empty `Renders/` directory (created 2026-06-08; total size 0B). Sibling folders in DaVinci Resolve Media ("StillCapture", "The Facebook Files") are unrelated. — `ls -laR` SPLAT

### Inferences
- The on-device ML stack (Whisper, Kokoro TTS, ONNX synonym model) backs the privacy claim with substance and can be marketed: "dictation and read-aloud that never leave your Mac".
- The inkblot-splatters project suggests a planned ink-splatter brand video, but no rendered assets exist yet.

### Gaps
- No brand video or splatter footage exists locally to reuse.

## 7. Privacy, offline, licensing, pricing

### Takeaway
Privacy is a core, documented differentiator: no accounts, no cloud sync, no analytics, no ads, and files stored as ordinary files on disk. Third-party calls happen only for opt-in features. The app is proprietary ("All rights reserved", UNLICENSED), not open source. The dictation crate is MIT. No pricing exists.

### Cited Findings
- "Inkblot is designed so your writing stays on your device by default. We do not operate user accounts, advertising systems, analytics trackers, or cloud synchronization servers ... We do not sell your personal information." Last updated September 24, 2026. — [APP/PRIVACY.md](file:///Users/gavin/programming-projects/inkblot/PRIVACY.md)
- Not provided: accounts, cloud sync, in-app ads, third-party analytics, "Payment processing inside the app", location tracking. — PRIVACY.md
- Opt-in third-party calls: Pinterest; dictionaryapi.dev (definitions); doi.org, Crossref, Open Library, Google Books, arXiv, PubMed, YouTube, Vimeo (citations); Google (web search of a selection); GitHub and Hugging Face (first-time model downloads). — PRIVACY.md
- Projects are "ordinary files in the folder you choose"; canvases use the open JSON Canvas format. — PRIVACY.md; README
- License: "Copyright (c) 2026 Gavin Bowden. All rights reserved. ... proprietary and confidential." package.json `"license": "UNLICENSED"`, `"private": true`. — [APP/LICENSE], [APP/package.json]
- SECURITY.md and CONTRIBUTING.md exist (security reports go privately rather than through issues). — [APP/README.md]

### Inferences
- Strong site messaging pillars: "Your words stay on your Mac", "No account. No cloud. No tracking.", "Open formats (plain files, JSON Canvas, EPUB, Word, Fountain/Final Draft)". The Privacy policy can be published on the site largely as is.
- Because "Payment processing inside the app" is absent, any paid model would be sold outside the app (for example a web checkout or license key). That is undecided.

### Gaps
- No pricing, trial or beta-signup information exists anywhere locally. Whether the first public release is free/beta is unknown and needs an owner decision.
- PRIVACY.md mentions iOS/iPadOS editions that do not currently exist (the Swift shell was removed), so the policy wording is slightly out of date.
