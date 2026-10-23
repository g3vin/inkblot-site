# Product Site Gallery: Desktop App, Writing and Dev-Tool Marketing Sites as Styling Inspiration for inkblot

Method (read this first): On 2026-10-14 every site below was fetched live (curl, HTTP status recorded) and most were rendered with headless Chromium at 1440px wide. I looked at those screenshots directly. Typefaces come from the `font-family` declarations and `.woff2` filenames in each site's HTML and CSS. Hero copy and CTA labels come from the HTML or from WebFetch. Colours are the most frequent hex values in the HTML, plus what was visible in the screenshots. Limits: static screenshots cannot show motion, so I only describe motion when the markup implies it (`<video>`, canvas, Rive or Spline embeds), and I mark it "(inferred)". Where the site itself is the only source, the citation is the site URL.

inkblot context (from the project README): a local-first Tauri writing app for long-form work. It has prose documents, infinite canvases (JSON Canvas, compatible with Obsidian), maps with places, routes and journeys on a story timeline, anchored notes with voice memos, version history, on-device language tools, dictation and Read Aloud, citations, and Print Layout with imposition and export to PDF and EPUB.

## Which app and tool sites are best-in-class, are they live, and what do they look like now (Oct 2026)?

### Takeaway
All 40 sites I checked are live (HTTP 200), except World Anvil, which serves a Cloudflare bot challenge (403). Several have changed a lot since 2024–25:
- Muse is now **Allume**.
- Warp now sells "cloud software factories".
- Tana now sells "meetings that ship".
- Arc's homepage now pushes **Dia**.
- Zed's root page now presents two products (Zed and Delta).
- Linear is now "for teams and agents".

The strongest sites share a pattern. Each has one confident type choice (often an unusual serif), one signature visual idea, the real product UI shown early, and a single OS-aware "Download for Mac" button.

### Cited Findings

**Gallery (verified live 2026-10-14)**

1. **Linear** (product-dev tool, desktop and web). https://linear.app
   - Style: near-black canvas (`#08090a` theme-color). Off-white text (`#e2e4e7`) with pink `#f79ce0` and cyan `#55cdff` accents in the CSS. Type is Inter Variable (`InterVariable.woff2`) plus a monospace.
   - Hero: a left-aligned two-line headline, "The product development system for teams and agents". Below it sits a large tilted, softly lit product screenshot (an issue view), then a monochrome logo strip (OpenAI, Vercel, Figma, Cursor, Coinbase, Ramp). Further down are wireframe isometric line illustrations labelled "Fig 0.1", "Fig 0.2" and so on, like a technical manual. — [linear.app](https://linear.app)
   - CTAs: "Get started", "Contact sales", "Open app" and a separate "Download". — [linear.app](https://linear.app)
   - Avant-garde vs professional: the "Fig." captions and engineering-drawing figures are the editorial touch, inside a strict grid. Roundups still call it "the reference SaaS homepage for engineering-tool buyers" because of its dark hero, one-sentence promise and live product loop. — [adminlte.io roundup](https://adminlte.io/blog/saas-landing-page-design-examples/)
   - inkblot relevance: the "Fig. N" numbered-plate device maps neatly onto a print/book brand (plates, folios). The dark mode works as an "ink" inversion.

2. **Raycast** (macOS/Windows launcher). https://raycast.com
   - Style: pure-black page with a centred white headline, "Your shortcut to everything." Small grey subhead. Glossy red/crimson light streaks and 3D glass shapes frame a product window. Fonts: Inter, Geist Mono.
   - Download: one small white pill, "Download for Mac". Under it in monospace: "macOS 14+ and Apple Silicon required · Install via Homebrew · Download v1". A secondary link goes to "The Raycast Keyboard". — [raycast.com](https://raycast.com)
   - Avant-garde: the cinematic lighting and empty black space. Professional: very little copy, and the technical requirements sit right beside the button.
   - inkblot relevance: the monospace requirements line under the CTA is a good model for a Tauri download block (version, OS, size, checksum).

3. **Obsidian** (local-first Markdown knowledge base; the closest functional peer). https://obsidian.md
   - Style: dark charcoal page, purple accent (`#a88bfa`). Font is Inter, with ui-serif and ui-monospace stacks.
   - Hero: "Sharpen your thinking. / The free and flexible app for your private thoughts." Below it, a desktop window plus phone mockup with a white constellation-style graph view floating between them. Sections: "Spark ideas", "Sync securely", "Publish instantly".
   - Download: an OS-sniffing button (JS sets "Get Obsidian for macOS/Windows"), plus "More platforms". The crystal logo sits on a card reading "Free without limits. Download now". — [obsidian.md](https://obsidian.md)
   - Professional but not avant-garde. Its strength is the privacy framing ("Your thoughts are yours… Your knowledge should last… open file formats").
   - inkblot relevance: inkblot is compatible with Obsidian's JSON Canvas and makes the same local-files promise, so it should look clearly *different* from this generic dark-purple SaaS style.

4. **iA Writer** (Markdown writing app). https://ia.net/writer
   - Style: white typewriter minimalism. Custom faces iA Sans, iA Serif and iA Writer Mono, each in Day and Night variants (`iASansDay`, `iASerifNight`, `iAWriterMono`).
   - Hero: the wordmark, "Keep your hands on the keys and your mind in the text.", then a floating paper-white card of monospaced prose with a blinking cyan caret, in Focus Mode with the other sentences greyed out.
   - The next band is near-black: "7-Day Free Trial. Download now. No credit card required." It shows a laptop, monitor, tablet and phone, with white pill buttons for Mac, Windows and iPad/iPhone (labelled "Free Trial" / "One-time payment").
   - Copy is witty and confident: "Nothing distracts, nothing decorates", "Did you write this? Or Claude?" (pasted AI text shown in colour), "Unfortunately, no one can be told what iA Writer is". Award badges include Red Dot, iF Gold and IDEA Gold. — [ia.net/writer](https://ia.net/writer)
   - inkblot relevance: the strongest model for "the product *is* the typography". The hero is a live writing surface rather than a screenshot. The Day/Night font split also suits "ink on paper / paper on ink".

5. **Things 3 (Cultured Code)** (Mac/iOS to-do app). https://culturedcode.com/things/
   - Style: very light grey-white page using only the system font stack (`ui-sans-serif, -apple-system`). A huge glossy app icon sits above the centred wordmark "Things".
   - The signature move is a product window rotated in 3D perspective, tilted like a sheet of paper lying on a desk. Text is large and readable. One video is embedded.
   - CTA: "Things for Mac". — [culturedcode.com/things](https://culturedcode.com/things/)
   - Professional, Apple-adjacent craft. The tilted "page on a table" view is the only flourish.
   - inkblot relevance: the tilted-sheet trick could show a Print Layout page or a map lying on a desk.

6. **Warp** (terminal, repositioned). https://warp.dev
   - Style: white page set entirely in monospace headings (Azeret Mono), with Instrument Serif and Inter elsewhere. A blueprint grid has crop marks in the margins.
   - Hero: "Open infrastructure for cloud software factories". A large framed dot-matrix diagram is captioned "[ Fig. 1 — the factory ]". Buttons are a black "GET STARTED" and an outlined "DOWNLOAD WARP TERMINAL"; "BOOK A DEMO" is in yellow. — [warp.dev](https://warp.dev)
   - **Redesign flag:** the site now leads with "cloud software factories" (meta: "factories as code, any model or harness"), and the terminal is a secondary download. — [warp.dev](https://warp.dev)
   - Avant-garde: the technical-drawing or patent-plate look (figure captions, registration marks, mono caps).
   - inkblot relevance: crop and registration marks are literally print vocabulary, which fits Print Layout and imposition.

7. **Zed** (Rust code editor; GPU-native, like Ghostty). https://zed.dev
   - The rendered page shows a pale blue-grey blueprint grid with faint diagonal hatching. The headline "Your last next editor" is a large **italic serif in cobalt blue** (`#084ccf` / `#4482f8` are the dominant colours). Below it: "Download now ⌘" (blue), "Clone source", and the line "Available for macOS, Linux, and Windows". A dense editor screenshot follows, then testimonials. Fonts are custom woff2 files with hashed names, plus a family named "writer". — [zed.dev](https://zed.dev)
   - **Redesign flag:** the raw HTML fetched without JS showed a "Zed Industries" company page with two product cards, "Delta (Est 2026)" and "Zed (Est 2021)", each with its own Download button. Zed now runs two products. — [zed.dev](https://zed.dev)
   - Avant-garde: a dev tool using an editorial italic serif in a single ink-blue colour on graph paper. Professional: a dense real UI and a platform list.
   - inkblot relevance: **very high**. Single-ink-colour type on gridded paper is close to an "ink" brand already.

8. **Ghostty** (GPU terminal, native UI). https://ghostty.org
   - Style: all dark. The hero is a terminal window playing an **animated ASCII-art ghost** in blue-violet characters. Under it: one line of description and two quiet outlined buttons, "Download" and "Documentation". Fonts: JetBrains Mono and Pretendard. — [ghostty.org](https://ghostty.org)
   - Avant-garde: the whole hero is generative text art, with no marketing copy above the fold.
   - inkblot relevance: generative art made from the product's own material. For inkblot that means ink: animated symmetric blots, or glyph-made blots.

9. **Allume (formerly Muse)** (spatial thinking canvas, iPad/Mac). https://allume.com (museapp.com redirects there)
   - **Rebrand flag:** a purple banner reads "What's new in v4.0! Muse is now Allume! Liquid Glass, AI support with MCP…". — [allume.com](https://allume.com)
   - Style: warm off-white paper. The headline "Think deeper than one page" is a bookish serif. There are hand-drawn purple annotation arrows and circles (around "Mac"), and screenshots of nested boards with ink sketches (a sun, the solar system, bird illustrations). The CTA "↓ Download Allume" sits next to App Store badges.
   - Section labels: "Nested boards", "Dark & Light themes – Calm your mind and your eyes", "Ink + Text + Cards". — [allume.com](https://allume.com)
   - inkblot relevance: **high**. It is a canvas peer with a "cozy deep thinking" voice and hand-drawn annotation over product shots.

10. **mymind** (private AI bookmark and notes app). https://mymind.com
    - Style: a white page with a soft peach/coral radial glow. A huge, tightly set display serif reads "Remember everything. Organize nothing.", using Louize (205TF) and Miller Display, with Maison Neue and Nunito for UI. The phrase "All your notes, bookmarks, inspiration, articles and images…" has pastel pill-shaped tags inline in the sentence. A masonry board of saved images (shoes, perfume, art) sits below, under an italic serif "Search my mind…".
    - "OUR MANIFESTO" is set like a book page, with a large italic drop-cap "In". Its copy rejects features: no social features, no ads, no collaboration. Accent `#ff5924`.
    - CTA: "Sign up" (orange pill) and platform buttons. — [mymind.com](https://mymind.com)
    - Avant-garde: a literary manifesto and magazine type on a utility product. Professional: clear platform buttons.
    - inkblot relevance: **very high** for tone. It matches inkblot's privacy and local-first stance, and the drop-cap manifesto suits a writing tool.

11. **Dia (The Browser Company)** (AI browser, Arc's successor). https://diabrowser.com
    - Style: a **saturated marigold-yellow** full-bleed hero. A huge calligraphic serif "DIA" (Exposure VAR, a variable serif by 205TF, alongside ABC Oracle and ABC Favorit Mono) is partly covered by the browser window.
    - Below the fold, on white: "Dia reads between the tabs". A card "The Friday Brief" uses an oil-painting image and a vertical date stamp ("04 SEP 2026" / "07:10 AM"), like a newspaper masthead.
    - CTA: a black pill "Download Dia for free ↓", with "Available for macOS and Windows". — [diabrowser.com](https://diabrowser.com)
    - Avant-garde: oversized expressive serif, fine-art imagery and a vertical editorial dateline.
    - inkblot relevance: the variable display serif and painterly imagery could be reworked with ink-wash art.

12. **Arc** (browser, maintenance mode). https://arc.net
    - **Status flag:** the hero banner says "Meet Dia, the next evolution of Arc". The page states that Arc receives only Chromium updates and points users to Dia for security. — [arc.net](https://arc.net)
    - Style: theme-color is electric blue `#3139fb` with cream `#fffcea`. Fonts: Marlin Soft SQ, ABC Favorit Mono, Exposure VAR.
    - Download buttons ("Download Arc for Mac/Windows") repeat four times down the page. — [arc.net](https://arc.net)
    - inkblot relevance: Arc is no longer a current design leader. Dia is the live reference.

13. **Cursor** (AI code editor). https://cursor.com
    - Style: warm off-white (`#f7f7f4` theme) with charcoal text. A short, modest headline in a small sans: "Cursor is your coding agent for building ambitious software." The product window sits on a **soft painterly landscape image** (muted oil-painting mountains). A grey-tile logo grid follows.
    - Fonts: an EB Garamond declaration in the CSS, plus Lato and custom sans/mono stacks.
    - CTA: a black pill "Download for macOS ⤓" and "Request a demo →". — [cursor.com](https://cursor.com)
    - inkblot relevance: putting product UI on a fine-art backdrop is a professional way to add atmosphere. inkblot could use its own map or ink art instead.

14. **Reflect** (notes app, now with an open-source "Reflect Open"). https://reflect.app
    - Style: deep indigo-black (`#030014`) with violet glows (`#ba9cff`, `#e59cff`). A glowing purple "eclipse" ring sits behind a blurred app window. Fonts: Aeonik Pro and Inter.
    - Hero: "Think better with Reflect", with "Download for Mac" and "Get the iPhone & iPad app", plus "Free on Mac. Paid subscription on iPhone and iPad". — [reflect.app](https://reflect.app)
    - **Change flag:** the meta now says "Reflect Open is open source and free on Mac" with "keep your files in Markdown". — [reflect.app](https://reflect.app)
    - inkblot relevance: an example of the "dark cinematic purple glow" style that has become a cliché. inkblot should avoid it.

15. **Readwise Reader** (read-later app). https://readwise.io/read
    - Style: a dark navy-to-magenta gradient hero. "The first **web highlighting** app for power readers" has the key phrase in coral. A desktop and phone mockup sits below, then a tidy 8-card feature grid on dark. Fonts: Charter (a book serif) and Inter.
    - CTA: a coral pill "Get started for free". — [readwise.io/read](https://readwise.io/read)
    - Professional, not avant-garde. Pairing Charter for reading with Inter for UI suits a reading product.

16. **Heptabase** (visual card and whiteboard knowledge base). https://heptabase.com
    - Live (200). The headless screenshot did not render. HTML: "Master anything you learn. Do your best research with AI." and "Use whiteboards and cards to clarify your thinking". Warm neutrals (`#faf8f5`, `#3d3832`, `#8c8578`, dusty blue `#6b8aad`). Inter with separate heading and body font variables, a "Download" CTA and one video. — [heptabase.com](https://heptabase.com)
    - inkblot relevance: inkblot's "docked panels on cards" canvas is a direct competitor in the card-whiteboard space. Heptabase's warm-paper palette is the one to differ from.

17. **Capacities** ("A studio for your mind"). https://capacities.io
    - Style: white with a pale butter-yellow wash. Centred headline "A home for everything you think, learn, and create." Floating object chips around it (Notes, Task dashboard, Daily notes, Images). A lifestyle video of a person reading the newspaper *El Tiempo*. Fonts: Literata (book serif), Inter and JetBrains Mono.
    - CTAs: "Start Free", "Discover Product", plus "Download" in the nav. — [capacities.io](https://capacities.io)
    - inkblot relevance: low-to-medium. Competent, but a generic SaaS look.

18. **Craft** (docs and notes app). https://craft.do
    - Style: sky-blue gradient with photographic clouds. A serif headline "Your space for notes, tasks, and big ideas" (Source Serif 4 and a custom "UntitledSerifFont", with Inter). The product window rises out of a **torn-paper / collage edge**: ragged white paper layers, a black torn shape and yellow lined paper.
    - Below: "Craft isn't just for one thing, it's for *your* things", with italic serif emphasis. A strip of portrait cards on bright colour fields follows.
    - CTAs: "Try Craft Free", "Craft for Mac", App Store. — [craft.do](https://craft.do)
    - Avant-garde: the collage and torn-paper motif. Professional: centred hierarchy and a clear CTA.
    - inkblot relevance: **high**. This is the clearest live example of a paper-texture motif on a major productivity site. inkblot could push it toward ink splatter and bleed.

19. **Bear** (Markdown notes, Apple). https://bear.app
    - Style: very light grey and white, centred. "Markdown notes you'll **love**" has a red underline on "love". Platform tabs (Mac, iPhone, iPad) switch the screenshot. Fonts: custom "bearsans" and "bearsansheadline", with Roboto Mono.
    - The screenshot is a real note ("Polar Bears"). Below are laurel-wreath award badges (Editor's Choice, Apple Design Award 2017, App of the Year) and a faint hand-drawn line illustration of a bear in a space helmet, with doodled sparkles. — [bear.app](https://bear.app)
    - inkblot relevance: delicate pen-line doodles in the margins are a light-touch "ink" idea.

20. **Ulysses** (writing app, Apple). https://ulysses.app
    - Style: white hero in Interstate (a road-signage grotesque) set bold. "The Ultimate Writing App for Mac, iPad and iPhone", with a fanned stack of devices and a keyboard. Then a charcoal band, "Like 12 Fingers, 25 Hours a Day", with a word-count ring widget.
    - A handwritten yellow "cannot" is inserted with a caret into "Projects ~~cannot~~ Get Too Big", like a proofreader's mark.
    - A strip of decorative glyphs (& ∩ ☇ # • @) acts as a typographic ornament. CTA: "Download on the Mac App Store", "Free trial on all devices". — [ulysses.app](https://ulysses.app)
    - inkblot relevance: **high** for the proofreader's-mark device. A handwritten correction over set type fits a long-form writing tool.

21. **Notion Calendar** (desktop calendar, formerly Cron). https://www.notion.com/product/calendar
    - Style: white, centred. A big calendar-page icon ("14"), "It's time." Bright flat icon tiles float in the margins. Fonts: NotionInter, Lyon Text and iA Writer Mono (Notion licenses iA's mono).
    - CTAs: black "Get Notion Calendar free" and "Download for macOS". — [notion.com/product/calendar](https://www.notion.com/product/calendar)
    - Professional; the floating sticker-icons are its only playful touch.

22. **Amie** (calendar to AI meeting assistant). https://amie.so
    - **Pivot flag:** now "Run your workday on autopilot with AI agents" and "Summarize any meeting, without a bot". Light grey, Inter, blue CTAs "Get started" and "Download". A hand-drawn arrow points at the logo strip. — [amie.so](https://amie.so)
    - inkblot relevance: low. It has lost much of its earlier playful character.

23. **Tana** (formerly an outliner). https://tana.inc
    - **Pivot flag:** now "Meetings that ship", an "agentic meeting platform". Serif headline (Source Serif 4), a pastel pink-to-peach gradient band with a video-call mockup, and a black "Download for Mac" pill. — [tana.inc](https://tana.inc)

24. **Rive** (interactive animation tool, desktop app). https://rive.app
    - Style: black page. A vertical column of looping video tiles (game UI, mobile apps, film/TV, fantasy interfaces, broadcast). A wide-tracked techno caps wordmark and "THE INTERACTIVE EXPERIENCE ENGINE" set in Tomorrow, with Inter Display and JetBrains Mono. A CLI install snippet sits next to "DOWNLOAD DESKTOP APP".
    - 19 `<video>` tags, plus canvas and .riv embeds (inferred heavy motion). — [rive.app](https://rive.app)
    - inkblot relevance: Rive is a likely tool for building an interactive ink-blot hero (state-machine animation at small file sizes).

25. **Spline** (3D design tool). https://spline.design
    - Live (200), but the headless render showed only "An error occurred on client" above the footer, so it needs WebGL. HTML: "Make anything 3D", with 156 canvas, 3D or Spline references and 12 videos. Fonts: Spline Sans and Brockmann. CTAs: "Get started — it's free", "Download Spline apps". — [spline.design](https://spline.design)
    - Caution for inkblot: a WebGL-dependent hero can fail entirely, as it did here. Always provide a static fallback.

26. **Kinopio** (spatial note-taking, indie). https://kinopio.club
    - Style: a white page that *is* a messy canvas. A chunky italic wordmark "KINOPIO" with "SPATIAL THINKING" stacked in small caps. Pastel cards, connector lines, pixel-art images and small stickers are scattered like the app itself. Feature sections are boxed in saturated green and maroon.
    - Fonts are listed openly in the CSS: Recoleta, Migra, Microgramma, GT America, "grotesk-remix", "shinka-mono". Copy is plain and indie: "Free for 100 cards. No sign up required. No ads or AI crap." CTA: "Open Kinopio". — [kinopio.club](https://kinopio.club)
    - Avant-garde: the homepage is a working canvas, anti-corporate and full of type play.
    - inkblot relevance: **high**. It shows an indie canvas tool winning on personality. The copy tone fits an indie solo developer.

27. **Teenage Engineering** (hardware with software downloads). https://teenage.engineering
    - Style: a full-bleed black-and-white photo of the "TEENAGE ENGINEERING™ DEPARTMENT STORE 216 LAFAYETTE ST NEW YORK" storefront. Tiny thin-line pictogram nav (products, store, latest, finder) and custom fonts TechnoType, "te-20" and "te-40". "NOW OPEN! WED–SUN 11AM–7PM". — [teenage.engineering](https://teenage.engineering)
    - Avant-garde: almost no conventional marketing structure. Industrial pictograms and type.

28. **Nothing** (consumer hardware). https://nothing.tech
    - Live; currently a shop-style homepage ("Your parcel has arrived", "Shop by category"). The signature is its **dot-matrix display face** "Ndot" plus "NType82", Lettera Mono and Geist. Light grey `#F4F4F4`. — [nothing.tech](https://nothing.tech)
    - inkblot relevance: an example of building brand recognition around one proprietary typeface. For inkblot that would be an "ink-trap" or bleeding-ink display face.

29. **Family** (crypto wallet). https://family.co
    - Style: white page with clusters of bouncy 3D-ish pastel characters, hearts and coins around a soft grey headline, "Your favorite crypto wallet." Fonts: custom "Family" face and LFE Sans. Soft blue `#1a88f8`. CTA: "Download on iOS". — [family.co](https://family.co)
    - inkblot relevance: an example of character-led charm. Small "ink creatures" could play a similar role.

30. **Anytype** (local-first, encrypted knowledge app). https://anytype.io
    - Style: a light hero with a faint large serif "A safe haven for digital collaboration" over thin line drawings, a peach-pink gradient corner, then a black band with a large serif "discuss, organize, remember". Black "Download" pill in the nav. — [anytype.io](https://anytype.io)
    - inkblot relevance: a local-first peer using a quiet editorial serif.

Also checked and live, but not worth a full entry:
- Figma downloads page: plain list. — [figma.com/downloads](https://www.figma.com/downloads/)
- Ableton Live 12: "Try Live 12 for free"; Futura PT. — [ableton.com/en/live](https://www.ableton.com/en/live/)
- tldraw.com: loads straight into the app. — [tldraw.com](https://www.tldraw.com/)
- Excalidraw.com: loads straight into the app; Excalifont/Assistant. — [excalidraw.com](https://excalidraw.com/)
- Logseq: content is client-rendered and was not inspected. — [logseq.com](https://logseq.com)

### Inferences
- **Download CTA pattern (consensus):** a single pill that detects the OS ("Download for macOS"), with secondary platforms one click away. Under it, a monospace or small grey line with requirements or price. Examples: Raycast, Cursor, Dia, Obsidian, Zed, iA Writer. The CTA repeats at the end of the page (Arc four times, iA three times). For a Tauri app shipping Mac, Windows and Linux, the Zed and iA pattern fits best: one primary button plus a quiet platform row.
- **Serif revival on tech sites is now mainstream:** italic serif on Zed, Exposure on Dia, EB Garamond in Cursor's CSS, Louize/Miller on mymind, Source Serif on Tana and Craft, Charter on Readwise, Literata on Capacities. An editorial serif no longer stands out by itself. inkblot needs a *specific* ink quality (ink traps, wet edges, letterpress bite) to stand out.
- **The "Fig. 1" / technical-plate device** (Linear, Warp) and **blueprint grids** (Zed, Warp) are a current trend among dev tools. Printer's marks (crop and registration marks, folio numbers) are the print-world version of this, and they fit inkblot's Print Layout feature.

### Gaps
- I did not observe live motion and interaction (scroll choreography, hover states). Screenshots are static, so motion claims are limited to what the markup shows.
- Heptabase, Campfire and Spline did not render headlessly, so their visual descriptions rely on HTML only.
- Some families declared in CSS may be fallbacks rather than the visible face (for example, EB Garamond on Cursor appeared only as a declaration, and the visible hero text was sans).
- I did not fetch design galleries (godly.website, land-book, awwwards). The one roundup search returned mostly vendor blogs ([saasframe](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples), [krishaweb](https://www.krishaweb.com/blog/best-saas-website-designs/)), with no gallery-sourced rankings for Raycast or Arc in 2026.

## Which are genuinely avant-garde (unusual layout, experimental type, generative or organic visuals, ink/paper/texture motifs) while still converting?

### Takeaway
Few product sites are truly avant-garde. The ones that are each commit to one strong idea: Ghostty's generative ASCII ghost, Kinopio's page-as-canvas, Craft's torn paper, mymind's literary manifesto, Dia's giant calligraphic serif on marigold, Zed's ink-blue italic on graph paper, Warp's patent-plate diagrams, Ulysses's proofreader's mark, Teenage Engineering's anti-marketing pictograms. All of them still keep a plain, high-contrast download pill above the fold.

### Cited Findings
- Generative hero made from the product's own medium: Ghostty's animated ASCII ghost in a terminal window, with only "Download" and "Documentation" below. — [ghostty.org](https://ghostty.org)
- Paper and collage texture: Craft's product window rises from torn white paper, a black torn shape and yellow lined paper, under a cloud sky. — [craft.do](https://craft.do)
- Hand-drawn annotation over product shots: Allume circles "Mac" and draws curved arrows to features. — [allume.com](https://allume.com). Bear uses pen-line bear doodles. — [bear.app](https://bear.app). Amie uses a hand-drawn arrow at the logo strip. — [amie.so](https://amie.so)
- A handwritten editorial mark inserted into a headline: Ulysses's "Projects ^cannot^ Get Too Big". — [ulysses.app](https://ulysses.app)
- A literary manifesto with a drop cap and feature refusals ("no social features… no ads… no collaboration"). — [mymind.com](https://mymind.com)
- Expressive serif and fine-art imagery: Dia's "DIA" in Exposure VAR on marigold, and "The Friday Brief" card with an oil painting and a vertical dateline. — [diabrowser.com](https://diabrowser.com). Cursor's product UI floats over a painterly landscape. — [cursor.com](https://cursor.com)
- Technical-drawing plates: Warp's "[ Fig. 1 — the factory ]" diagram, mono caps and margin crop marks. — [warp.dev](https://warp.dev). Linear's "Fig 0.x" isometric line figures. — [linear.app](https://linear.app)
- Page-as-product: Kinopio's homepage is a scattered card canvas with mixed typefaces (Recoleta, Migra, Microgramma). — [kinopio.club](https://kinopio.club)
- Anti-marketing: Teenage Engineering's homepage is one B&W storefront photo plus pictogram nav. — [teenage.engineering](https://teenage.engineering)

### Inferences — proposed style directions for inkblot
1. **Editorial / Print** (iA Writer, mymind, Ulysses, Anytype, Zed, Dia). Book serifs, drop caps, a manifesto voice, single-ink colour, proofreader's marks, folio numbers. The most natural fit for a long-form writing app with Print Layout and EPUB export. Risk: crowded, because serifs are now common.
2. **Paper & Collage / Handmade** (Craft, Allume, Bear, Kinopio, Ulysses's handwritten mark). Torn edges, lined paper, pen annotations, doodles. Fits the "inkblot" name directly: ink splatters, blots and bleed on paper.
3. **Technical Plate / Blueprint** (Warp, Zed, Linear). Grids, "Fig. N" captions, registration marks, mono metadata. For inkblot this becomes printer's marks: crop marks, colour bars, imposition diagrams. This frames the feature timeline and changelog well.
4. **Dark Cinematic** (Raycast, Linear, Reflect, Readwise, Rive). Black canvases, glow, glossy 3D. Professional but saturated, and Reflect's purple glow is now a cliché. Usable for inkblot only as an "ink-dark" night mode.
5. **Generative / Material-native** (Ghostty, Rive, Spline). The hero is a live generative piece. For inkblot: a symmetric, Rorschach-style blot that grows or mirrors, or that the visitor can "press". Spline's failed headless render shows that a static fallback is required.
6. **Anti-marketing / Object-led** (Teenage Engineering, Nothing). A proprietary typeface or pictogram system carries the brand. An aspirational benchmark for a custom "blot" display face or icon set.
- Recommended mix (inference): Editorial/Print as the base, Paper & Collage for the hero (generative blot on paper), and Technical Plate for the downloads and changelog/timeline section (versions as numbered plates with printer's marks). Keep a single OS-aware download pill with a monospace requirements line.

### Gaps
- No conversion data is public for any of these sites. "Still converting" here means only that the primary download CTA stays prominent and above the fold.

## How do worldbuilding and writing competitors present themselves, and what visual gap can inkblot own?

### Takeaway
Worldbuilding competitors (LegendKeeper, Inkarnate, Campfire, World Anvil) use dark navy or black **painterly high-fantasy** art (dragons, d20s, parchment-gold caps), and they are web or subscription products with no download CTA. Writing tools are either Apple-minimal (Ulysses, Bear, iA) or dated (Scrivener, Plottr). Nobody combines a literary or print aesthetic with worldbuilding maps. Nobody uses ink as a material motif. Nobody leads with a local-first desktop download for worldbuilding. That combination is open for inkblot.

### Cited Findings
- **LegendKeeper:** a deep navy/indigo (`#02001f`, purple `#791be4`) painterly fantasy hero with a robed character, a d20 and a map screenshot with purple region overlays. Headline "Build worlds like a pro." Stats band "200K+ creators · 180K+ worlds · 26M+ pages · 2M+ pins". Web-based with an offline mode. CTA "Try for free" (14-day trial, Pro $9/mo). The FAQ states it has no generative AI. Fonts: Inter plus a display face "Flanders". It names its fantasy artists (CzePeku and others). — [legendkeeper.com](https://www.legendkeeper.com)
- **Inkarnate:** a dark fantasy-map background, an all-caps serif headline "BUILD THE WORLD YOU'VE ALWAYS IMAGINED" (Lusitana), orange-gold buttons "Create a World for Free". Stat tiles "25K+ HD Art Assets · 16M+ Maps Created · 237K+ Clonable Maps". Section "PAINT IT. STAMP IT. LIGHT IT." Browser-based ("Try the Editor for free"). — [inkarnate.com](https://inkarnate.com)
- **Campfire:** "Where Stories Come to Life", with "Choose Your Quest" cards (Write, Read, Publish). Modules include Maps & Locations, Timelines & Calendars, Species, Conlang. Platforms are web plus mobile apps, and no desktop download is mentioned. Fonts: Buenard, Lato, Open Sans. — [campfirewriting.com](https://www.campfirewriting.com)
- **World Anvil:** the homepage returns a Cloudflare "Just a moment…" challenge (403) to automated fetches, so I could not inspect it. A secondary source says an "Athena" UI overhaul happened in late 2025 / early 2026, and a dashboard update in March 2026. — [groupfinder.eu](https://groupfinder.eu/library/world-anvil). A 2025 user suggestion calls the front page "cluttered and ad-ridden" (user opinion). — [worldanvil.com suggestion](https://www.worldanvil.com/community/voting/suggestion/3edf8bbf-0c9e-4622-a65e-9805f96529a7/view)
- **Plottr:** a cream page with orange buttons "Get Plottr Now" and "Try It FREE for 30 days". A red-circled "no AI" stamp. A retro script slab headline "Your 3 Biggest Problems?" in an orange-bordered box. Poppins. Platform icons for Windows, Mac and Web. Direct-response, sales-letter layout. — [plottr.com](https://plottr.com)
- **Scrivener (Literature & Latte):** tan/kraft paper (`#ccaf8e`, `#f6f4e5`), with a red accent `#e9505a`. The hero illustration is **trees made of fanned book pages** with the words "SEE THE FOREST OR THE TREES". Unna serif. "Typewriter. Ring-binder. Scrapbook." CTAs "BUY NOW" and "DOWNLOAD FREE TRIAL". A large Cookiebot modal covers the content on load. — [literatureandlatte.com/scrivener](https://www.literatureandlatte.com/scrivener/overview)
- **Ulysses:** Apple-minimal Interstate grotesque, Mac App Store CTA, handwritten proofreader's mark (see above). — [ulysses.app](https://ulysses.app)
- **iA Writer:** the typewriter-paper hero, with "Did you write this? Or Claude?" authorship marking as a differentiator. — [ia.net/writer](https://ia.net/writer)
- Anti-AI positioning is now a visible selling point for creative tools: Plottr's "no AI" stamp, LegendKeeper's FAQ, Kinopio's "No ads or AI crap", iA's authorship feature. — [plottr.com](https://plottr.com), [legendkeeper.com](https://www.legendkeeper.com), [kinopio.club](https://kinopio.club), [ia.net/writer](https://ia.net/writer)

### Inferences
- **The open position:** worldbuilding sites look like game or RPG marketing (painterly fantasy, dark navy, gold caps, dice). Writing sites look like Apple utilities or dated publisher pages. inkblot's features (prose, canvas and maps with story-timeline journeys, Print Layout, local-first, on-device models) fit a **literary-cartographic** look. Think ink-drawn maps like antique atlas plates or engraved charts, Rorschach-symmetric blots, letterpress type and printer's marks. No competitor occupies that, and it suits novelists as well as game masters.
- Scrivener's paper-tree illustration shows the "made of paper/books" idea is on-genre, but its execution is dated. inkblot can modernise it with ink-in-water or ink-bleed motion and a sharper type system.
- Desktop download is itself a differentiator. LegendKeeper, Inkarnate, Campfire and World Anvil are web subscriptions, so a "Download for macOS — your worlds stay on your disk" CTA borrows Obsidian's and mymind's privacy framing against them.
- A version or feature timeline presented as numbered plates or folios (Technical Plate direction) would echo inkblot's own story-timeline feature.

### Gaps
- World Anvil's current homepage visuals could not be verified (bot-blocked). Its 2026 "Athena" redesign is reported only by a secondary source.
- Campfire did not render headlessly, so its colour palette and imagery are unverified beyond HTML hex values (`#1c4967`, `#1f1f1f`).
- Not checked: Dabble, Novelcrafter, Wonderdraft, Dungeon Alchemist, Arcweave. These are possible further competitors.
