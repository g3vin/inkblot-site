# Inkblot site: design review

Reviewed 23 Oct 2026 against the app repo at `0a5efe3` (`main`, 21 Oct): `README.md`, `docs/DESIGN.md`, `src/styles/tokens.css`, `PRIVACY.md`, `ARCHITECTURE.md`, `src/ui/Brand.jsx`, and the open GitHub issues. Per the owner, **every open issue is treated as shipped by launch**: the marketplace (#57, #65–70), live co-writing (#34), Review mode (#33), Auto Publish (#37), Orbit (#71), profiles (#23), reader copies (#112), Green Thumb (#98), community plugins (#99–105), flowcharts (#87–97) and the rest.

I rendered the site at 375, 768 and 1440 px in light, dark and reduced-motion modes, and scrolled it with motion on at 1440. Brief numbers: 9,331 px tall without motion, 12,826 px with the pinned sections. LCP is 76 ms locally (the poster is preloaded), CLS is 0, JS is about 9 KB, there is no horizontal scroll, and the landing transfers 2.8 MB, of which 2.6 MB is the hero video (desktop only, loaded after idle).

> **Owner decisions, 23 Oct (these override the recommendations below where they differ):**
> - All six platforms launch together.
> - The repo goes public as open source (Apache 2.0) before launch, so the open-source claims stay.
> - The app will adopt Sage, so the site keeps Sage and its wordmark.
> - Pitch black will ship ([g3vin/inkblot#116](https://github.com/g3vin/inkblot/issues/116)), so Night stays as it is.
>
> That leaves §3's rows on platforms, open source, brand colour, wordmark and Pitch black settled. The rest of the review applies.
>
> **Implemented, 23 Oct:**
> - The hero says what Inkblot is, in one Literata sentence, and a spec line sits under every download button (`SpecLine`, values in `release.ts`).
> - New sections: "The whole book, in one window" (M1, `SplitSection`) and "Notes that stay with the words" (M2, `NotesSection`).
> - The roster is now "Everything else a long book needs", with 11 rows. It eases instead of springing, a tap opens a row on touch, and its labels read as words.
> - Night no longer loops and its pin is 240 → 190 svh. The book's pin is 340 → 230 svh (180 svh on phones), and its facts now show on phones.
> - The pledge is six items: the leak lines are merged into one, and Green Thumb and "Your files, your folders" are added. On touch the reader's mark sweeps once.
> - "Free." moves into the footer with "No ads, ever.", alongside the version line. There's a download band after the book.
> - The app's motion tokens are in use. Sentences no longer set in Courier are in Inter.
> - Links to pages that don't exist yet stay hidden until the page is listed in `nav.ts` → `BUILT`.
> - There's a new `/about` page for the maker, linked in the header (also on phones) and footer, with its words in `src/data/about.ts`.
> - Share image `public/og.jpg`; VP9 hero loop (1.2 MB, MP4 fallback); Literata preloaded.
>
> **Not done:**
> - M3 (version history scrub).
> - The grounds and colour changes in §4.4, which the decisions above superseded.
> - The iPad reminder (§4.5), no longer needed with all six platforms.

**The direction is right.** This review refines direction M; it doesn't replace it. The section "What's working" lists what must survive every change.

---

## 1. Summary: the five changes that most raise download intent

1. **Make every claim true for launch day (P0).** Four claims on the page are false, and no amount of polish survives a visitor finding one:
   - It says the code is public and open source, but the app repo is private and its README says "proprietary".
   - It sells a Pitch-black theme that is in neither the code nor the issues.
   - It offers downloads on six platforms; the brief and the issues cover macOS now, with iPhone and iPad coming.
   - It mentions an "Inkblot Sync" service that no issue describes.

   Also, every platform link and five footer links go nowhere. → Iteration 0.
2. **Say what Inkblot is in the first screen.** "Write." and "Start with a sentence. Finish with a book." are the brand and should stay, but nothing above the fold says *writing app, for long-form work, on your Mac, files you own*. Add one Literata sentence under the line, and a Courier spec line under the button. → Iteration 2.
3. **Lead with the three things only Inkblot does, then group the rest.** Today twelve features get equal billing in the roster. The three that set Inkblot apart are missing or buried:
   - prose, canvas and map side by side in one window;
   - notes anchored to the text;
   - your work as files on your own disk.

   Give the first two a scroll moment each inside the existing window placeholder. → Iterations 4 and 5.
4. **Turn local-first ownership into one trust section, not three scattered lines.** The facts that most reassure the target audience appear nowhere on the page: files in folders you choose, JSON Canvas, export to Markdown/EPUB/PDF, version history, no sign-up needed. Merge them with the protections band, and add Green Thumb (#98), the strongest no-AI proof the product will have. → Iteration 7.
5. **Calm the motion down to a few crafted moments.** Two looping or springy effects contradict the app's own motion rules (§7: "no bounce or overshoot, and no looping"), and the pinned sections add 3,500 px of scrolling. Keep the book turning, make the night pool play once, critically damp the roster cut, and spend the motion saved on the split and the note. → Iteration 8.

---

## 2. What's working (keep it)

- **"Write." over the leaves.** It's huge, tight and paper-white over slow backlit footage. It reads as a studio and not as SaaS, and it's memorable. Keep the footage handling as built: poster first, the video only on desktop after idle, never under Save-Data or reduced motion, paused offscreen, with a remembered pause control (`MediaLoop.astro`).
- **The app window rising out of the hero's foot** (`Hero.astro:29-31`). Product shows in the first screen at 1440 and on phones. It's also the right stage for the split animation (§4.3, M1).
- **The sage band's line** "No account needed. Works offline. No AI writing for you." (`home.ts:18`). It's three removals of friction in eight words. Keep the words; §4.4 discusses the colour.
- **"Then it becomes a book."** The 3D book that turns, opens and turns a leaf is the best moment on the page. It shows cause and effect and it's made of paper. It's also honest: Typeset, covers and the KDP/IngramSpark checks are all in the changelog.
- **"Read each other."** It's a sharp headline for the marketplace, and the four-step loop explains the coin economy in twelve words.
- **The reader's mark under the cursor** (`PledgeBand.astro`). This motion *explains* the feature it sits next to. It's the model for every other effect.
- **The engineering:**
  - fluid `clamp()` type and spacing;
  - metric-matched font fallbacks (CLS 0);
  - self-hosted subset fonts (133 KB in all);
  - one shared rAF loop that sleeps offscreen (`frame.ts`);
  - a static fallback for every effect;
  - registries for places, screens and features;
  - testimonials that hide themselves while there are none;
  - no analytics and no cookies.
- **Placeholder discipline.** Every slot is labelled and set at the asset's final aspect ratio, so real captures drop in with no layout shift.

---

## 3. Conflicts to settle first

The brief, `SITE_PLAN.md`, the app repo and the saved notes disagree on these. Each affects copy across the page, so each is also an open question in §7. My recommendation is in **bold**.

| Topic | The site / SITE_PLAN says | The app repo / brief says | Recommendation |
|---|---|---|---|
| Platforms | macOS, Windows, Linux, iPhone & iPad, Android & Chromebook, all at launch (`release.ts:18-24`, JSON-LD `Base.astro:49`) | Brief: macOS first, iOS and iPadOS "coming". Issues list only "Tauri (macOS)" and "Swift (iPadOS / iOS)" | **macOS download, plus an "iPad and iPhone are coming" line with an optional reminder. Drop Windows, Linux and Android until builds exist.** |
| Open source | "Free and open source", "Every line of Inkblot is public", "Read the code", Apache 2.0, no CLA (`home.ts:19,87,102`; `Price.astro:15`; nav "Source") | Repo is **private**. `README.md`: "proprietary software… All rights reserved". `LICENSE`/`NOTICE`: Apache 2.0 | **Pull every open-source line until the repo is public and the README agrees with the LICENSE. Then restore "Open to check" as a trust item.** |
| Price | "Free. Every feature… Forever." No Founding Writer licence, no Plus (SITE_PLAN, 22 Oct) | Saved note from 14 Oct: free, plus an optional Founding Writer licence, plus Inkblot Plus later | **SITE_PLAN is newer, so keep "Free" and confirm.** |
| Pitch-black theme | The whole Night section (`home.ts:22-26`) | The app has Light and Dark ("Ink") only (`DESIGN.md` §4). No issue covers it | **Reframe Night around the real Ink theme (§4.2), or open an issue and build Pitch black before launch.** |
| Brand colour | Sage `#3f5a3a` / `#a7bc94` as the site brand (`tokens.css:102,130`) | Ink Blue `#2f4a8a` / `#8fa8e6` is the brand ink. The brief says to inherit the paper-and-ink palette | **Paper and ink for grounds, Ink Blue for links, focus and the one brand dot, and let the leaves carry the green.** See §4.4. |
| Wordmark | A lowercase Literata redraw (`public/brand/wordmark.svg`, 3564×1184) | "inkblot" in **Courier Prime Bold** with the splash dot, never redrawn (`DESIGN.md` §2, `Brand.jsx`). The app icon is the black mark on a white tile | **Use the app's generated `wordmark.svg`, `app-icon.svg` and `favicon.svg` unchanged.** |
| Privacy wording | — | `PRIVACY.md` (17 Oct) covers optional accounts, the marketplace, watermarks and co-writing relays, and still has `[OWNER: …]` gaps | **Write every privacy line from its Summary. Say "No account needed", never "no account" or "no cloud".** |

---

## 4. Findings by area

### 4.1 Repetition and information architecture

**Claims that repeat.** Every occurrence, by file and line.

| Claim | Where it appears | Count | Fix |
|---|---|---|---|
| No AI writes for you | `home.ts:18` (band) · `home.ts:82` (pledge item 1) · `nav.ts:18` ("No AI") · `site.ts:9` (description) | 4 | Say it once, in the band. The ownership section can carry the *proof* (never trained, Green Thumb), not the claim again. Rename the nav item (§4.5). |
| Free | `home.ts:19` (band meta) · `home.ts:100-102` (Price) · `nav.ts:19` ("Free") · `site.ts:9` · `DownloadButton.astro:15` ("Download free") | 5 | Say it once as a spec line by every button ("Free · macOS 13+ · …") and once in the end section. Remove it from the band meta. |
| Open source / public code | `home.ts:19` · `home.ts:87` · `home.ts:102` · `Price.astro:15` · `nav.ts:20,26` · footer licence (`Footer.astro:29`) | 6 | Remove all of them until the repo is public (§3). Afterwards, one ownership item and one footer link. |
| Every device / every platform | `home.ts:101` · `site.ts:9` · PlatformRow in hero **and** footer | 4 | "On your Mac. iPad and iPhone are coming." Once, in the hero spec line. |
| Leak tracing / watermarks | `home.ts:84` "Marked to every reader" · `home.ts:85` "Hard to copy" · `home.ts:86` "Leaks get traced" · `home.ts:89` the hint | 4 lines, 1 idea | Make them one item, with the UV reveal as its proof. |
| Coins are earned, never bought | `home.ts:67-68` (steps 3–4) · `home.ts:72` (rule 1) · `home.ts:102` ("Reviews cost coins, never money") | 3 | Keep step 3 and rule 1. Cut the Price line. |
| Human readers | `home.ts:61` "Real human readers" · `home.ts:75` "Report a reviewer who isn't human" | 2 | Keep the rule, which is concrete. Drop "Real human readers" from the line (it was already rejected as "Not a model"). |
| Read-aloud / offline speech | `features.ts:23` (Poems: "Rhymes and read-aloud, on your device") · `features.ts:24` (Dictation: "Speak it. Hear it back. Offline.") | 2 | Merge into one "Language tools" row (§4.2). |
| Offline | `home.ts:18` · `features.ts:24` | 2 | The band owns it. |
| Review / comments | `features.ts:25` (Review mode row) · the whole marketplace section | 2 | Keep the roster row, since Review mode works without the marketplace, but word it as track changes between collaborators, not reviews. |
| Typesetting | `features.ts:27` (row, links to `#book`) · `BookSection` directly below | 2 | Remove the row. The book section *is* typesetting. |
| A book as the payoff | `home.ts:12` "Finish with a book" · `home.ts:33` "Then it becomes a book" | 2 | **Keep.** It's a deliberate callback, the one repetition that earns its place. |
| "Write." | Hero · Footer | 2 | **Keep.** It's a bookend. |

**Sections that don't earn their place as they stand:**
- **Night** (`NightSection.astro`): it sells a theme that doesn't exist. Reframe it (§4.2) or cut it.
- **Proof** (`Proof.astro`): correctly hidden while empty. It also needs trust signals that aren't quotes, such as the changelog and the version (§4.5).
- **Price** (`Price.astro`) repeats the band, the pledge and the nav. "Free." at `--step-hero` (up to 22 rem) competes with "Write." as the page's second-largest word. **Merge it into the end section** as a spec line and one short paragraph.
- **Roster**: twelve rows at equal weight, `--step-4` each. It's the longest section at 1,848 px. Shorten it and group it (below).

**Hierarchy: the three signature features.** Ranked by how distinct they are in the market and how much the audience needs them:
1. **The whole book in one window.** Prose, canvas (JSON Canvas, Obsidian-compatible) and map are first-class documents, and any two sit side by side. Scrivener has a corkboard, Obsidian has canvases, and Campfire has maps; none puts all three in one split. *Today it isn't on the page at all.* "Canvases" and "Maps" are separate roster rows, and "split" is never mentioned.
2. **Notes anchored to the text.** Notes carry images and voice memos and sit in the margin of the exact phrase. With the Bubble editor, this is how the app *feels* different from Google Docs comments. *Not on the page.*
3. **Your work is yours.** It's files in folders you choose, with no sign-up needed and no AI. Your history is kept on your disk, and canvases are an open format. *Only "Works offline" is on the page.*

Everything else goes in the compact "Everything else" list: maps' timeline, Orbit, screenplays, poems, language tools, version history, references, Review mode, co-writing, publishing, reader copies, flowcharts and plugins.

**The narrative arc today:**

```
Hook        "Write." + book promise ............ strong
Promise     Sage band (no account/offline/no AI)  good, but it's trust before we've said what the product is
Feel        Night (Pitch black) ................. breaks: a feature that doesn't exist
What        Roster (12 equal rows) .............. stalls: no hierarchy, signature features missing
Payoff      The book ............................ strong
Second act  Marketplace ......................... good, but long; a second product inside the page
Trust       Pledge (6 items) .................... partly redundant; no local-first facts
(Proof)     hidden
Price       "Free." ............................. repeats; competes with "Write."
Download    Footer .............................. good; it's the only CTA after the hero, 9,000 px later
```

The **writer's problem** beat is missing entirely. The page never says *why* someone would leave Google Docs, Word or Scrivener.

### 4.2 Writing

Voice check against `DESIGN.md` §11. The page is already sentence case, has no exclamation marks and avoids the SaaS words ("seamless", "powerful" and the rest appear nowhere). What's wrong is mostly vagueness and overclaim, not tone.

| Where | Before | After | Why |
|---|---|---|---|
| `home.ts:12` hero line | Start with a sentence. / Finish with a book. | **Keep.** Add one Literata sentence under it: *"A writing app for novels, worlds and research: manuscript, canvas and map side by side, saved as files on your Mac."* | The five-second test: what (a writing app), who (novels, worlds, research), how it's different (side by side), where (your Mac, your files). |
| hero, under the button (new) | — | `Free · macOS 13 or later · 48 MB · No account needed` (placeholder values) | The brief asks for the spec line near the CTA, and the "No account needed" there removes friction at the moment of clicking. Overrides SITE_PLAN's "spec line only on /download". |
| hero, under the spec line (new) | — | `iPad and iPhone are coming. Get a reminder →` | Secondary, small, in Courier, clearly not the download. |
| `home.ts:19` band meta | For novels, short stories, poems and scripts · Free and open source, forever | *Your work stays in folders you choose, on your own disk.* | It's the one local-first fact the band lacks, and it removes the repeated "free" and the false "open source". |
| `home.ts:23-24` Night | For the book you write after everyone's asleep. / Pitch black. Pixels off. Words in ember. | **Keep the title.** Line: *"A warm dark theme that's easy on tired eyes, and a page that hides everything but the words."* | The title is about a feeling and stays true. The line must describe the real Ink theme and focus mode (closed issue #15). If Pitch black ships, restore "Pixels off." |
| `home.ts:29` roster eyebrow | Everything in it | *Everything else a long book needs* | It sets up the list as supporting cast after the signature sections. |
| `features.ts:17` | Drafting: A page that gets out of the way. | Remove; it's covered by the hero and the signature sections. | |
| `features.ts:18-20` | Maps / Timeline / Canvases rows | Remove Maps and Canvases (the split section owns them). Keep **Timeline**: *"Who was where, and when, on one story calendar."* | |
| `features.ts:21` | Orbit: Loose ideas, circling what matters. | *Orbit: Ideas that drift toward each other until they make sense.* | It's concrete about what you see. |
| `features.ts:22` | Screenplays: Scenes, slug lines, Fountain. | *Screenplays: Industry format as you type, with revision colours.* | "Fountain" is jargon to novelists, and revision mode is #111. |
| `features.ts:23-24` | Poems … / Dictation … | One row. *Language tools: Synonyms, rhymes, definitions, dictation and read-aloud, all on your Mac.* | Removes the duplicate, and the on-device fact is the point. Note that SITE_PLAN kept on-device models off the landing page; this brief asks for them. |
| new row | — | *Version history: Name a version, compare it side by side, bring it back.* | It's in the README and nowhere on the site. |
| new row | — | *References: APA, MLA, Chicago and more. Paste a DOI and it fills itself in.* | It's essential for academics, the audience the site currently ignores. |
| `features.ts:25` | Review mode: Tracked changes and comments. | *Review mode: Suggest changes and talk them through, the way editors do.* | |
| `features.ts:26` | Co-writing: Write together, live. | *Co-writing: Write together, live, straight from one Mac to another.* | It's true to #34's local-network path, and it differentiates. Avoid "end-to-end" until #34 confirms it. |
| `features.ts:28` | Publish: AO3, WordPress, Ghost, Substack. | *Publish: Send a finished chapter to AO3, WordPress, Ghost or Substack.* | Verb first. |
| new rows | — | *Reader copies: Send beta readers a copy they can mark up but not edit.* (#112) · *Flowcharts: Branching stories, mapped and played through.* (#87) | Both are launch features per the owner. |
| `home.ts:34` book steps | Pick a trim size. / Inkblot sets the cover and spine. / And every page inside, ready for the printer. | **Keep.** | It's verb first, concrete and in sequence. |
| `home.ts:35` facts | PDF · EPUB · Word | `PDF · EPUB · Word · Markdown · HTML` | The README lists Markdown and HTML, and the changelog adds Word. |
| `home.ts:61` market line | Real human readers. Post a chapter, a poem, a story or a script, and other writers review it, line by line. | *Post a chapter, a poem, a story or a script. Other writers review it line by line, and you review theirs.* | "Real human readers" was already rejected as a line. The reciprocity is the mechanism. |
| `home.ts:80` pledge title | The world is yours. So is every word. | **Keep**, as the head of the merged ownership section. | |
| `home.ts:82-87` six items | (see §4.1) | Five items. Ownership: **Your files, your folders.** *"Every document is a file on your disk, in a folder you choose. Canvases are JSON Canvas, so Obsidian opens them too."* · **Your history, kept.** *"Named versions, side by side, restored in a click. Stored next to your work, not on our servers."* Protection: **Never trained on.** (text as now, `home.ts:83`, which matches PRIVACY.md) · **Proof you wrote it.** *"Turn on Green Thumb and Inkblot keeps a sealed record of how a piece was written: sessions, revisions and where every paste came from."* (#98, evidence, not a verdict) · **Marked to every reader.** *"Work shared for review carries a hidden mark that traces a leak to the account that viewed it. Screenshots are blocked where the device allows."* | Merges four leak lines into one, adds the local-first facts the page lacks, and adds Green Thumb. Every line is checked against PRIVACY.md and the issues. |
| `home.ts:87` | Open to check. Every line of Inkblot is public… | Remove until the repo is public. | False today. |
| `home.ts:101-105` Price | Every feature, on every device… / Writers never pay… Apache 2.0, with no CLA… / Built for modest, older and shared devices… / Inkblot Sync costs what it costs us… | End section: **"Free."** small, beside "Write.". *"Every feature, free. No card, no trial, nothing held back."* | "Every device" is false, and so are Apache, the CLA and Sync (no issue). "Modest devices" can't be checked. |
| `site.ts:9` meta description | Start with a sentence. Finish with a book. Write, plan, typeset and get read by real writers, with no AI writing for you. Free and open source, forever, on every device. | *Inkblot is a free writing app for Mac. Write prose beside your canvas and map, keep notes on the words they're about, and set it all as a book. No account needed, no AI writing for you.* (152 characters) | Search snippet: what it is, where it runs, the differentiators. |
| `DownloadButton.astro:15` no-JS label | Download free | *Download for Mac* | There's only one download, so name it. |
| `Footer.astro:29` | © 2026 [Soupy Orange Cats Co-op] · Apache 2.0 · … · No analytics, no cookies, no ads. | © 2026 [owner] · Footage credit · *No analytics, no cookies.* | The placeholder shows to visitors. "No ads" is implied. |

**Privacy copy check.** Every privacy line must hold against `PRIVACY.md` → Summary:
- "No account needed" ✔ (accounts are optional). Never write "no account", "no cloud" or "nothing ever leaves your Mac": the marketplace, co-writing relay, dictionary lookups, online maps and model downloads all reach the network.
- "Works offline" ✔ ("works fully offline without an account").
- "Never trained" ✔ (it's in "Our Commitment on AI").
- "Screenshots blocked" must keep "where the device allows" ✔ (`home.ts:85` does).
- "Stored next to your work, not on our servers" ✔ ("We do not … back up your documents to our servers").

### 4.3 Motion and animation

**Tokens.** The site has none. Add the app's own to `src/styles/tokens.css`: `--dur-fast: 120ms; --dur-base: 180ms; --dur-slow: 240ms; --ease-out: cubic-bezier(0.2, 0.7, 0.2, 1); --ease-in-out: cubic-bezier(0.45, 0, 0.25, 1)`. Then replace the ad-hoc values: `global.css:79` 0.15s → `--dur-fast`; `BookSection.astro:87` 0.3s → `--dur-slow`; `global.css:165` video fade 1.2s ease → 720 ms `--ease-out` (3 × `--dur-slow`, the one deliberate exception, for footage). A page-scale scene is either **scroll-linked** (progress, no duration) or a **multiple of `--dur-slow`** with `--ease-out`.

**No new dependency.** framer-motion needs a React island (`@astrojs/react`, plus about 45 KB of react-dom and about 30 KB of motion, gzipped) to animate things that CSS and the existing 1 KB `frame.ts` already handle. Use CSS `animation-timeline: view()` inside `@supports`, and fall back to `frame.ts`'s `pinProgress` where it's unsupported (Firefox).

**Audit of the current motion:**

| Effect | Where | Verdict | Change |
|---|---|---|---|
| Hero footage | `MediaLoop.astro` | Keep. It sets mood without demanding attention, and its gating is exemplary | Video fade to 720 ms `--ease-out` |
| Night pool | `NightSection.astro:41,104` | **Rethink.** 240 svh pinned, and `tick` always returns `true`, so the edge wobbles forever while on screen. That's a looping, attention-seeking effect, which §7 forbids. 2.4 screens of scroll for one reveal | Play once: ink spreading from the words to fill the frame, scroll-linked over **120 svh** (not pinned), with the window fading in over the last 25%. Stop drawing once `p = 1`. Reduced motion: the black section, as now |
| Roster cut | `IndexList.astro:207-208` | **Refine.** The spring (`v *= 0.74`, stiffness 0.09) overshoots, which §7 forbids. On touch a row opens by itself after scrolling settles (`:185`), a surprise that also jumps the label. Every letter is its own span (`:17`), which some screen readers announce letter by letter | Critically damped: open in `--dur-slow` (240 ms) with `--ease-out`, close in `--dur-base` with `--ease-in`. Touch: tap to open, no auto-open. Give the row link `aria-label={name + ': ' + benefit}` and mark the letter spans `aria-hidden`. Keep the idea; it's ink cutting paper |
| Book | `BookSection.astro:82` | Keep the sequence. **Shorten** the pin from 340 svh to **220 svh** (the turn, open and leaf segments keep their proportions). On phones (`max-width: 900px`), 160 svh | The facts list is `display: none` on phones (`:95`). Show it under the book instead; it's the only place the formats are listed |
| UV watermark | `PledgeBand.astro:66-77` | Keep on fine pointers. On touch it drifts forever (another loop) | Touch: a single sweep left to right over 2.4 s (10 × `--dur-slow`), `--ease-in-out`, when 40% in view, then stay still at 72%/45% as the reduced-motion state already does |

**New moments.** Three, each tied to a signature feature. Each animates only the placeholder containers, which the brief allows, and invents no app UI.

**M1. The split: prose → prose + canvas → canvas + map.** This sells signature feature 1.
- **Stage:** the hero's rising window (`Hero.astro:30`), held sticky as the new section "One window for the whole book" scrolls past it.
- **Trigger:** scroll-linked over 200 svh (`animation-timeline: view()`, with the `pinProgress` fallback).
- **Sequence:**
  - 0–15%: one slot, labelled `[Prose — Chapter 3]`.
  - 15–40%: a second slot slides in from the right edge (`transform: translateX(100% → 0)`). Both panes then *scale* to share the width; `scaleX` on inner wrappers keeps it to transform only. The new slot is labelled `[Canvas — the cast, as cards and strings]`, and the divider fades in.
  - 55–80%: the prose pane slides out left while a third slot, `[Map — the coast road, day 3]`, slides in right.
  - Captions change in step, in Courier, under the window: `Prose + canvas` → `Canvas + map` → `Any two, side by side`.
- **Easing:** `--ease-in-out` between keyframes.
- **Implementation:** the window gets `container-type: inline-size`, so the panes stack vertically below 560 px of container width. On phones the second pane slides up from the bottom instead.
- **Reduced motion:** a static 3-up row of the three labelled slots with the caption "Any two, side by side". It's complete and readable.

**M2. A note pins to a line.** This sells signature feature 2.
- **Stage:** a short passage of the sample novel set in Literata on the page itself (real text, the site's own type), beside a slot labelled `[Note — a photo and a voice memo]`.
- **Trigger:** IntersectionObserver at 50% visible, played once.
- **Sequence:**
  1. A phrase gets an Ink Blue underline that grows left to right (`transform: scaleX(0 → 1)`, origin left), 240 ms `--ease-out`.
  2. 120 ms later the note slot drops 8 px into place and fades in (`translateY(-8px) → 0`, opacity 0 → 1), 240 ms `--ease-out`.
  3. A hairline draws from the phrase to the note (SVG `stroke-dashoffset`), 360 ms `--ease-out`.
- **The beat:** one beat, like pressing a pin home. No bounce.
- **Reduced motion:** everything in its final position.
- **Copy:** *"Notes that stay with the words. Leave a photo, a voice memo or a question on the exact phrase it's about. Move the sentence and the note moves with it."* (Check the last clause against the app's anchoring behaviour before publishing.)

**M3. History scrubs back.** This supports ownership in §4.5.
- **Stage:** in the ownership section, next to "Your history, kept": three stacked slots (`[Version — "Before the rewrite"]`, `[Version — 14 Oct]`, `[Now]`), offset like cards.
- **Trigger:** scroll-linked over the item's own height.
- **Sequence:** the stack fans back (`translateY` and `scale` per card, 0.96 per step), and a Courier label steps through `Now → 14 Oct → "Before the rewrite"`.
- **Reduced motion:** the fanned stack, still.

**Motion budget after the changes:** the footage, M1, the book, M2, the UV mark, the roster cut, and M3 if it's cheap. Total pinned or scroll-linked height falls from about 7.6 screens (240 + 340 + market/hero) to about 5.4. No scroll-jacking, no smooth-scroll libraries and no cursor effects outside the pledge.

### 4.4 Visual design and layout

- **Wordmark and icons** (`global.css:63-69`, `public/brand/*`): replace them with the app's generated `src/assets/brand/wordmark.svg` (Courier Prime Bold with the splash, viewBox `8472 2152`), `app-icon.svg` and `public/favicon.svg`. The current wordmark is a Literata redraw, and the current icon crops a warm-ink mark off the tile's corner. `DESIGN.md` §2 forbids both. Keep the mask technique so the wordmark follows the theme, which §2 allows ("the page's ink colour on a dark surface"). Update the `aspect-ratio` to `8472 / 2152`.
- **Colour:**
  - Grounds are paper (`#faf8f4`) and Ink (`#161412`), exactly the app's values. They already match.
  - **Ink Blue** (`#2f4a8a` on paper, 8.0:1, and white on it 8.5:1; `#8fa8e6` on Ink, 7.8:1) replaces Sage for links, focus rings, the primary button and the M2 underline.
  - The **band** becomes a paper band with ink type and a single Ink Blue splash dot before the line, a small crafted detail in place of a field of colour. The hero's fade then goes to `--bg-sunk`, not green.
  - The footage keeps the green, which is where the owner's love of leaves lives.
  - If the owner wants to keep a colour band, use the app's tray recipe: Ink Blue at 15% over `--paper-2`. Never a flat brand fill.
- **Grounds:** today the page changes background eight times (photo, green, black, paper, sunk, near-black, black, sunk) and has three near-black slabs in a row of five. Proposed:
  - paper for the hero foot, band, split, notes, roster and book;
  - one dark ground (Ink `#161412`, not `#000`) for Night, flowing into the marketplace;
  - paper again for ownership;
  - sunk for the end.

  That's four changes. Pure `#000` (`PledgeBand.astro:32`, `--night-bg`) breaks §3's "Don't use `#000`" unless Pitch black ships.
- **Type hierarchy:** everything is `--step-4` today: roster names, Night, the book title, the pledge at `--step-fill × 0.3`, "Free." at `--step-hero`. When everything shouts, nothing does. Proposed:
  - `--step-fill`: "Write." only.
  - `--step-4`: section titles (Night, book, "Read each other.", ownership).
  - `--step-3`: roster names (down from 4).
  - `--step-1`/`--step-2` in Inter 600: item titles.
  - Literata `--step-0`/`--step-1`: anything meant to read like writing, meaning the new hero sentence, the notes passage, the problem paragraph and quotes.
- **Courier only for small accents** (`DESIGN.md` §5). Today whole sentences are set in Courier: marketplace rules (`MarketplaceSection.astro:40`), the pledge hint (`PledgeBand.astro:24`), price notes (`Price.astro:14`) and the book note. Move sentences to Inter (`--text-2`) and keep Courier for spec lines, figure captions, numerals (`01`) and placeholder labels.
- **Container queries:** add `container-type: inline-size` to `.window` (for the M1 panes), `.pledge__list` and `.market__loop`, and switch their columns on container width rather than at `860px`/`760px` breakpoints. Today the marketplace loop is 2×2 at 375 px with 30-character columns.
- **Mobile header:** below 760 px the nav disappears with no menu (`Header.astro:30-33`). Fine for a one-page site, but add the anchor list as a single line under the hero spec on phones, or a disclosure menu, once feature pages exist.
- **Mobile platform row:** it wraps to two lines of underlined links under the button (fold at 375 px). Under §3's recommendation it becomes one Courier line, so the problem goes away.
- **Templated tells to avoid:** the page has none of the usual ones (no gradients, glass or icon grids). Keep the window's traffic-light dots neutral (`--line-strong`), as they are. The one templated pattern is the 3 × 2 pledge grid of bold title plus grey text. Lay the ownership section out as ruled rows, like the roster, with M3 beside "Your history, kept".
- **Contrast:**
  - Body tokens pass AA in both themes (they're the app's).
  - Check the hero platform row and spec line over the brightest frame of the footage: the scrim is 0.16 alpha at 30% height, which is light. Raise it to 0.28 or add a `text-shadow: 0 1px 12px rgba(0,0,0,.35)` to small type only.
  - `.market__loop p` at 85% on-media over the photo band needs a frame-by-frame check once the real photograph lands.

### 4.5 Conversion

- **Five-second test at 1440:**
  - What it is: ✗ ("Write." isn't a category).
  - Who it's for: ✗.
  - How to get it: ✔ (the button names macOS).

  At 375 the same holds. The fix is the hero sentence and spec line in §4.2.
- **CTA hierarchy and frequency:**
  - Primary: the hero button, kept as the paper-white button on footage.
  - Add one mid-page CTA after the book: a ghost button, *"Download for Mac"*, with the spec line, because the book is the peak of desire.
  - End: as now.
  - The header "Download" stays.
  - That's four doors, one primary style.
- **Dead links:**
  - Every platform link (`#download-windows` …) and `DOWNLOAD_ALL` (`#download-all`) points to an anchor that doesn't exist (`release.ts:18-27`), so non-Mac visitors who click get nothing.
  - Footer links to `/promise`, `/conduct`, `/trademarks`, `/changelog` and `/privacy` all 404.
  - "Source" goes to a private repo, which is a 404 for visitors.
  - Fix: until `/download` exists, link the Mac button to the DMG (or a `#download` section with the spec), and hide the footer links that have no page yet behind a `ready` flag in `nav.ts`.
- **Visitors not on a Mac** (`device.ts`): the button should read *"Download for Mac"*, with a line under it: *"On a phone? Inkblot for iPad and iPhone is coming. Send yourself the link →"* (mailto with the URL prefilled, no backend needed). It sits beside the optional reminder signup.
- **The iPad reminder:** a single email field in the end section, under its own heading, *"Get a note when the iPad app ships"*. It's visually separate from the download and secondary in weight (no fill). It sends one email, ever. It needs a privacy-respecting list provider (an open question), and the site's "no cookies" line must stay true.
- **Trust that's missing, with placeholders to add:**
  - **Changelog signal** by the end CTA, in Courier: `v0.1.0 · Updated 21 Oct 2026 · What's new →`, from `release.ts`.
  - **Testimonials:** two slots, kept hidden while empty, as built. Never invented.
  - **A one-line privacy summary** with a link to `/privacy` once it exists: *"Your writing stays on your Mac unless you choose to share it."*
  - **The sample book** (cover, PDF, EPUB) as proof of typesetting quality. It's already planned in Proof.
  - **Green Thumb** as the no-AI proof (§4.2).
  - **Open source**, once true.
- **Ownership as friction removal, not a lecture:** "No account needed" sits in the band and the spec line. The ownership section is the *only* long-form treatment.
- **Performance:**
  - Already good: LCP and CLS.
  - Preload `literata-400.woff2`, because Literata becomes the hero sentence's face and an above-the-fold LCP candidate on phones.
  - Encode the hero loop as AV1/WebM with an MP4 fallback (likely 2.6 MB → about 1.2 MB).
  - Set `og:image` (null today, so shares render blank); a 1200×630 frame of "Write." over the poster is enough.
  - Fix the JSON-LD (`Base.astro:44-53`): `operatingSystem: 'macOS'`, and remove `license` until it's true.
  - Shortening the pinned sections removes about 2,000 px of scroll at 1440.

---

## 5. Proposed page structure

| # | Section | Purpose |
|---|---|---|
| 1 | **Hero**: "Write." over leaves; rated line; one Literata sentence; Mac button, spec line, iPad note; window rising | What it is, who it's for, how to get it, in one screen |
| 2 | **Band**: "No account needed. Works offline. No AI writing for you." + folders line | Remove the three fears before the visitor reads further |
| 3 | **One window for the whole book** *(new)*: the problem in two Literata sentences, then M1 in the hero's window | The writer's problem, and signature feature 1 |
| 4 | **Notes that stay with the words** *(new)*: M2 | Signature feature 2, how it feels to work in |
| 5 | **Night**: reframed around the Ink theme and focus, playing once | How it feels to write in, late |
| 6 | **Everything else a long book needs**: compact roster, about 12 rows at `--step-3` | Breadth, without competing with 3 and 4 |
| 7 | **Then it becomes a book.** Shorter pin, then a mid-page CTA | The payoff, and the peak of desire, so the second download sits here |
| 8 | **Read each other.** Marketplace, trimmed | Getting read (launch feature) |
| 9 | **The world is yours. So is every word.** Ownership and protections merged, five ruled rows, M3 and the UV mark | Trust and ownership, with proof rather than promises |
| 10 | **Proof**: quotes, the sample book, the changelog line (hidden parts stay hidden) | Social and "actively developed" proof |
| 11 | **End**: "Write." + Free + download + spec + iPad reminder, merged into the footer | Download |

---

## 6. Implementation plan

Each iteration is small enough to ship and review on its own (per SITE_PLAN's "many pauses" rule). Effort: S ≈ half a day, M ≈ 1–2 days, L ≈ 3+ days.

| # | Iteration | Effort | Impact | Blocked on |
|---|---|---|---|---|
| **0** | **Truth pass.** Platforms to Mac-first (`release.ts`, `device.ts`, PlatformRow, JSON-LD); remove open-source, Apache, CLA, Sync and "modest devices" lines; reword Night's line to the Ink theme; hide links to unbuilt pages; fix dead download anchors; hide the `[Soupy Orange Cats Co-op]` placeholder | S | **Very high**: removes everything a visitor could catch out | Q1, Q2, Q4 |
| 1 | **Brand alignment.** App wordmark, icon and favicon; Ink Blue replaces Sage for links, focus and the primary button; paper band with the splash dot; hero fade to sunk; `#000` → Ink; motion tokens | S–M | High (it reads as the same product) | Q3 |
| 2 | **Hero clarity and CTA.** Literata sentence; spec line; iPad line; no-JS label; "send yourself the link" for phones; preload Literata; `og:image` | S | **Very high** | Q5 (size, minimum macOS) |
| 3 | **Copy pass.** Every before/after in §4.2; dedupe per §4.1; Courier sentences to Inter; meta description | S | High | — |
| 4 | **Signature 1: one window, M1 split.** New section; window becomes sticky; container queries; static fallback | L | **High** | — |
| 5 | **Signature 2: notes, M2.** New section with Literata passage and note slot | M | Medium–high | Q8 (anchoring behaviour) |
| 6 | **Roster to "Everything else".** New rows and grouping; `--step-3`; damped cut; tap to open; a11y labels | M | Medium | — |
| 7 | **Ownership merge.** Pledge + local-first + Green Thumb as five ruled rows; M3; UV touch sweep | M | High | Q2 (open-source row) |
| 8 | **Motion refinement.** Night plays once (120 svh, unpinned); book pin 340 → 220 svh; book facts on phones | S–M | Medium (calmer, 2,000 px shorter) | — |
| 9 | **Grounds and type hierarchy.** Four ground changes; type steps per §4.4; container queries for the market loop and pledge list | M | Medium | Iteration 1 |
| 10 | **End and proof.** Price merges into End; mid-page CTA after the book; changelog line; iPad reminder field | S–M | Medium–high | Q6, Q7 |
| 11 | **Performance and polish.** AV1/WebM loop; scrim check frame by frame; axe pass in both themes | S | Low–medium | — |

Suggested order: 0 → 2 → 3 → 1 → 4 → 7 → 10 → 8 → 6 → 5 → 9 → 11. Truth and clarity come first because they cost the least and do the most. The two big scroll pieces come after the copy has settled.

---

## 7. Open questions

1. **Platforms at launch.** Is it macOS only, with iPad and iPhone "coming", as in the brief? SITE_PLAN says all six. Will Windows or Linux builds exist at launch, given Tauri could produce them?
2. **Open source.** Will `g3vin/inkblot` be public at launch, and will the README's "proprietary, all rights reserved" be changed to match the Apache 2.0 LICENSE? Until both happen, the site can't say "open source" or link to the code.
3. **Brand colour.** Do you accept moving the site from Sage to the app's Ink Blue and paper, with the green living only in the footage? Or should the app adopt Sage (which SITE_PLAN left open, though the app is on Ink Blue, not Deep fern)?
4. **Pitch black.** Will it ship before launch? If yes, I'll write an issue for it and keep Night as is. If no, Night is reframed around the Ink theme.
5. **Download hosting and specs.** Where the DMG lives (R2, as planned, or GitHub Releases), its size, the minimum macOS version (`tauri.conf.json` doesn't set `minimumSystemVersion`), and whether it's signed and notarised.
6. **The iPad reminder.** Should it exist, and which provider? It needs one that sets no cookies (Buttondown, a self-hosted form, or a plain `mailto:`).
7. **Pricing.** Is it free with no Founding Writer licence and no Plus (SITE_PLAN, 22 Oct), or the 14 Oct model?
8. **Notes anchoring.** Does a note stay with its phrase when the sentence moves or is rewritten? M2's copy depends on it.
9. **Assets still needed** (they don't block code; slots stay labelled):
   - captures for the three signature moments;
   - two testimonials with permission;
   - the marketplace photograph;
   - the typeset sample book;
   - the owner's legal name for the footer;
   - a filled-in `PRIVACY.md` before `/privacy` publishes.
10. **Analytics.** None stays the default. Do you want cookieless counts on the download button only, to measure this work?
