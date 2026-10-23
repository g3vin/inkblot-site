# Film director / production company / studio / post / festival websites: styling gallery for inkblot

**How this was done (14 Oct 2026):** I fetched each homepage live with curl, then pulled its linked CSS. From the markup and CSS I extracted typefaces (`font-family` and font filenames), the most frequent hex colors, `<video>` attributes (poster, preload, autoplay, data-src), video hosts (Vimeo, Mux, CloudFront, self-hosted), framework fingerprints, and "Site by" credits. I did **not** render the pages visually (no screenshots), so layout and motion descriptions are inferred from markup and class names, and are labelled as such. Fonts, colors, video attributes and credits are read directly from the source. "Live" means the server returned HTTP 200 with real content on 2026-10-14.

---

## 1. Which director/production-company sites are widely admired, are they live, and what does each look like now? (curated gallery, grouped by style direction)

### Takeaway
Of the 34 production, studio and post sites checked, 31 respond. The gallery has 29 entries; Stink is listed only as a status note. Object & Animal timed out, Criterion is behind a Cloudflare challenge, and riffraff.tv now belongs to an unrelated web agency (the film company is at riffrafffilms.tv). There's a strong "house style" here. **Funkhaus (LA)** built Prettybird, Smuggler, MJZ, Caviar and Biscuit, and also the editorial and post houses Final Cut, Whitehouse Post, Exile and Harbor. Every one of these pairs a single licensed grotesk with black/white and Vimeo-hosted loops. The most transferable references for inkblot are:
- Pulse Films: mono type on paper and deep-green ink
- A24: grotesk plus mono, a film index with year tags, and restrained email capture
- MUBI and The Mill: a grotesk paired with a Klim serif
- Trim Editing: structured credit metadata
- Metrograph: a cream paper palette and editorial serifs
- NEON: a 2.39:1 letterboxed hero served from Mux

### Cited Findings

#### Direction A: "Minimal index / list" (a text roster first, video secondary)
1. **Academy Films**: https://www.academyfilms.com/ (live). The homepage is literally an alphabetical text roster ("Ali Abbasi, Ari Aster … Jonathan Glazer, Joseph Kahn…"). Type is Typekit **futura-pt** paired with **baskerville-display-pt**, a geometric sans with a display serif. The palette is #000/#fff/#666. Loops are `<video loop muted playsinline autoplay loading="lazy">`. — [academyfilms.com](https://www.academyfilms.com/)
   - *Transfer:* the director roster becomes a feature index (Manuscript · Screenplay · Worldbuilding · Typesetting), set as big type, with a loop revealed per row. Futura plus Baskerville maps naturally onto inkblot's Inter plus Literata.
2. **Tanu Muiño (individual director)**: https://tanumuino.com/ (live). The nav is just "Film / Photo / Information". The work is a plain list of *Artist / Title* pairs ("Harry Styles As It Was", "Dua Lipa Illusion", "Lady Gaga Disease"…), with 14 Vimeo references, Roboto, and one accent color (#ff3366). — [tanumuino.com](https://tanumuino.com/)
   - *Transfer:* a three-item nav (Features / Download / Info) and the "Client — Title" pairing reused as "Version — Feature" rows.
3. **Iconoclast U.S.**: https://iconoclast.tv/us/ (live, Next.js). The nav uses literally letter-spaced words in the markup ("D i r e c t o r s", "f i l m + t v"). The font is from **Lineto**. The palette is #000/#fff with greys #a4a4a4, #717171 and #272727. The hero is a Vimeo-sourced `<video autoPlay muted playsInline poster=…2000x.jpg>`, whose poster is a 2000-px VLC frame grab. Numbered pagination (1–10) cycles the featured films. — [iconoclast.tv](https://iconoclast.tv/us/)
   - *Transfer:* wide-tracked small caps for section labels, and a numbered "1–10" stepper for the feature-timeline carousel.
4. **Biscuit Filmworks** (Funkhaus): https://biscuitfilmworks.com/ (live, Nuxt). It uses the same spaced-letter wordmark device ("B i s c u i t ."), and the intro is one plain sentence about being "full-service… for over 25 years". — [biscuitfilmworks.com](https://biscuitfilmworks.com/)
5. **MJZ** (Funkhaus): https://mjz.com/ (live, Nuxt). It's extremely sparse: Directors / Contact / Sales, plus a founders line. The font is **UniveCon**, which looks like Univers Condensed. — [mjz.com](https://mjz.com/)
6. **Company 3** (color grading): https://www.company3.com/ (live, WordPress). The nav is an artist index split into "Senior Colorists / Colorists / Finishing", plus a "Reels" section. It is set in Arial, black/white/#666 — utilitarian. — [company3.com](https://www.company3.com/)
   - *Transfer:* a "people as index" pattern. Also a counter-example: no typographic care.
7. **Psyop Group**: https://psyop.com/ (live). It's monochrome (#000, #fff, #9d9d9d), set in **Ft Calhern** plus **New Heterodox Mono**. Labels are parenthetical, e.g. "(All Work)". A headline repeats in a typewriter/build sequence ("An independent, / artist-led studio collective / built on craft and innovation"), and a news ticker loops ("Psyop Group Partners with Free Agents • …"). — [psyop.com](https://psyop.com/)
   - *Transfer:* a grotesk-plus-mono pairing ≈ Inter plus Courier Prime, "(Changelog)"-style parenthetical labels, and a single news ticker for "v2.3 released •".

#### Direction B: "Hover-to-play grid / full-bleed reel"
8. **Partizan**: https://partizan.com/ (live, WordPress plus Lenis smooth-scroll). Cards carry `<video data-src="…_800px.mp4" class="card-work-video … object-cover opacity-0 scale-105 transition-opacity duration-smooth ease-out" playsinline muted loop>`. In other words, small 800-px MP4s are lazy-assigned and fade in from opacity 0 at 105% scale on hover or in view. Each card is titled Director / Client / Title (e.g. "Michel Gondry — Chanel Métiers d'Art 2026"). The palette is #fff, a warm beige #bfb399, and navy #0f1344. — [partizan.com](https://partizan.com/)
   - *Transfer:* feature cards that fade a short loop over a still. The 800-px renditions are the right size for thumbnails.
9. **Riff Raff Films**: https://www.riffrafffilms.tv/ (live; the 9.4 MB HTML holds the whole roster). It has **352 `<video>` tags, all `preload="none"`, 854×480, starting `opacity-0` with `transition-opacity duration-200`**, so a poster shows until hover. Other markers in the source: `cursor:none` (a custom cursor), a grain/noise style, 130 uppercase rules, and Helvetica Neue Light. Aspect ratios are set per item inline (1.775, 1.777, 1.333, 1, 0.88), so each film keeps its native ratio. The roster is a long name list (Ed Morris, Humans, Smith & Foulkes, Johnny Kelly…). — [riffrafffilms.tv](https://www.riffrafffilms.tv/)
   - *Transfer:* per-item native aspect ratios (manuscript page vs screenplay page vs wide map), plus a custom cursor. **Note:** riffraff.tv now resolves to "Riff Raff Web Design Newcastle", an unrelated agency — [riffraff.tv](https://www.riffraff.tv/).
10. **Park Pictures**: https://parkpictures.com/ (live). It uses a Swiper carousel, `<video muted autoplay playsinline loop data-src="https://vimeo.com/…">` (lazy Vimeo), a Mux reference, and **13 `mix-blend-mode` rules**, which most likely means difference/blend nav text over video. There's an accent #ff655a, and works are listed as "Client – Title / Director" (e.g. "NFL – I Am Somebody / Savanah Leaf"). — [parkpictures.com](https://parkpictures.com/)
11. **Smuggler** (Funkhaus; "Code by: Drew Baker, Svebor Soric, Luka Vuk"): https://smugglersite.com/ (live, Nuxt plus WordPress headless). Video is `preload="none"` pointing at **Vimeo `progressive_redirect/playback/…/rendition/1080p/file.mp4`**, meaning Vimeo serves MP4 renditions into a native `<video>` tag rather than an iframe. The font is **Favorit** (Dinamo). Sections are split by discipline: Commercial / Music Video / Theatre & Live / Film & TV. — [smugglersite.com](https://smugglersite.com/)
12. **Prettybird** (Funkhaus; "Code by: Drew Baker"): https://prettybird.co/ (live, Nuxt). The fonts are named by weight, "Buch / Halbfett / Kraftig" (German cuts, probably one grotesk family). The intro is a single descriptive sentence, with Americas and Europe region switches. — [prettybird.co](https://prettybird.co/)
13. **Caviar** (Funkhaus): https://caviar.tv/ (live, Nuxt). It uses **Moderat** (Tighttype) Regular, Italic and Medium. The page is client-rendered, so there's almost no SSR text. — [caviar.tv](https://caviar.tv/)
14. **Somesuch** ("Site by YES"): https://somesuch.co/ (live, Nuxt plus a Shopify cart). The nav is **Latest / Directors / Archive / Editions / Film / About / Contact / Shop**. The type is the **Lateral** family (Standard, Extended Medium, Expanded Heavy), i.e. widths used for hierarchy. Video is Vimeo player-hosted, the palette is #000 plus greys, and there are 21 `aspect-ratio` rules and grayscale filters. News items carry festival credits ("Premiered at the 79th Locarno International Film Festival, where Beatrice was awarded Best Emerging Director"). — [somesuch.co](https://somesuch.co/)
   - *Transfer:* "Latest" as the homepage, which maps to a changelog-first front page. "Archive" and "Editions" nav items suit inkblot's release archive.
15. **RadicalMedia**: https://www.radicalmedia.com/ (live). It has **`cursor:none`** (a custom cursor), 16 `aspect-ratio` rules, 46 lazy images, all media on CloudFront, and Helvetica Neue LT with heavy tracking (25 letter-spacing rules). A press strip quotes Variety and TIFF headlines. — [radicalmedia.com](https://www.radicalmedia.com/)
16. **Anonymous Content**: https://www.anonymouscontent.com/ (live). It has 68 Vimeo references with autoplay, and every tile carries a "**Directed By:** Alfonso Cuarón"-style credit line. The palette is a brick red #d7392d, gold #ae9c61, and #222. — [anonymouscontent.com](https://www.anonymouscontent.com/)
17. **Hungryman**: https://hungryman.com/ (live). It's set in **Neue Montreal** (Pangram Pangram) on a **warm paper #f7f4ed** with #232323 ink, close to inkblot's #faf8f4/#1f1c18. Credits use a small-caps label pattern: "Rose Delights · Collage · DIRECTOR Dan Opsal". — [hungryman.com](https://hungryman.com/)

#### Direction C: "Editorial credits" (structured metadata as the design)
18. **Trim Editing**: https://trimediting.com/ (live). Each work is a full **credit block: "Foot Locker / Director Kim Gehrig / Editor Tom Lindsay / Production Company Somesuch / Agency Someplace"**. There are 32 `<video>` tags, each with **`poster=` set to a 600×338 JPEG and `preload='none'`**, autoplaying muted loops. The accent is green #18a300 on #fff and #333. — [trimediting.com](https://trimediting.com/)
    - *Transfer:* the best model for an inkblot **changelog / timeline entry**: "v1.4 · Released Oct 2026 · Feature Screenplay import · Format Final Draft (.fdx) · Platform macOS 14+".
19. **Final Cut** (Funkhaus): https://www.finalcut-edit.com/ (live). It uses **Maax** plus **Optician Sans**, and credits run as "Chanel Coco Mademoiselle / Editor – Struan Clay / Director – Joe Wright". Its 6 videos all have posters and come from Vimeo. Its few colors are muted film-still tones (#422c21, #6f6b51, #21282d), probably extracted per film. — [finalcut-edit.com](https://www.finalcut-edit.com/)
    - *Transfer:* per-item tint colors taken from the poster frame.
20. **Whitehouse Post** (Funkhaus): https://whitehousepost.com/ (live). It pairs **TT Hoves** with **Inkina** (an ink-style display face, notable given inkblot's ink theme), on a single teal #005f6f against near-whites (#fafafa, #f1f1f1, #e1dfdd). Works are listed as "Title / Editor". — [whitehousepost.com](https://whitehousepost.com/)
21. **Exile Edit** (Funkhaus): https://exileedit.com/ (live). Set in **Lota Grotesque Alt 1**. — [exileedit.com](https://exileedit.com/)
22. **Harbor** (post and color; Funkhaus): https://harborpicturecompany.com/ (live). It pairs **Söhne** (Klim) with **Migra** and **Beni** as display faces. The palette is ink-navy #0b121e, #050808, and paper tones #f5f5f0, #ebe9e4 and #e8eff0, again close to inkblot's warm-paper scheme. — [harborpicturecompany.com](https://harborpicturecompany.com/)
23. **Pulse Films**: https://pulsefilms.com/ (live, client-rendered). It's set entirely in **monospace: GT Pressura Mono** (Grilli Type) and **Aether AMono**. The palette is **deep green-black #14241f on paper #ebeadb**, plus #000705. — [pulsefilms.com](https://pulsefilms.com/)
    - *Transfer:* the closest "screenplay-typewriter" feel among the production companies. Courier Prime in the same role would work, but limit it to labels and metadata.

#### Direction D: "Title-card cinematic / distributor" (posters, letterboxing, serif and grotesk pairs)
24. **NEON** ("Website by 27b", 27-b.com): https://www.neonrated.com/ (live; Next.js plus Shopify plus Astro fragments). The hero is a `<video width="1920" height="804" autoPlay playsInline muted loop class="absolute inset-0 … object-cover">`. **1920×804 is exactly 2.39:1 scope**, so the hero is literally letterboxed. Trailers stream from **Mux HLS (stream.mux.com/….m3u8) with image.mux.com thumbnails** (417 stream.mux references). Each film card uses "In Theaters Oct 16, 2026 / Play Trailer / Get Tickets" as its primary action. — [neonrated.com](https://www.neonrated.com/)
    - *Transfer:* a 2.39:1 product demo reel hero, and a "Play Trailer + Get Tickets" pair → "Watch demo + Download for macOS".
25. **A24**: https://a24films.com/ (live; Craft plus Shopify). It's set in **NB International** plus **NB International Mono** (Neubau) and **Akzidenz-Grotesk Extended** (Typekit). It's near-monochrome (#000, #444, #888, #cacaca, #eee), with **159 letter-spacing rules and 56 uppercase rules**, so small, tracked caps dominate. The film index tags every title with a year ("Primetime 2026 · Misty Green 2026 · You Can See Everything 2026"). The email capture copy reads "Letters from our filmmakers… Not too often — just enough." — [a24films.com](https://a24films.com/)
    - *Transfer:* "Title + Year" maps to "Feature + Version". The "Not too often — just enough" tone suits inkblot's calm newsletter signup.
26. **MUBI**: https://mubi.com/en/us (live, Next.js). It pairs **Riforma** (Lineto) for UI with **Tiempos Text / Tiempos Headline** (Klim) for editorial, on white/greys with **MUBI navy #001489**. The hero line repeats ("watch great cinema / cinema like nowhere else"), and the CTA is "Try 7 Days Free". — [mubi.com](https://mubi.com/en/us)
    - *Transfer:* the clearest grotesk-plus-text-serif with a single deep-blue accent, almost exactly inkblot's Inter + Literata + #2f4a8a. MUBI is also a conversion site with one CTA.
27. **Metrograph** (cinema / distributor / journal): https://metrograph.com/ (live, WordPress). It uses **Ionic Modern Micro** and **HB Goblet A Text**, both editorial serifs, on **cream #fff3e3** with red #ec2027 and navy #2a317d. A live clock appears in the header ("Now time 2026-10-14 …"). — [metrograph.com](https://metrograph.com/)
    - *Transfer:* the best "paper and ink" cinema palette, and a live timestamp as a typographic device.
28. **Festival de Cannes**: https://www.festival-cannes.com/ (live). It pairs **Tiempos Fine Light** with **Everett**, plus Cannes gold **#c5a26e** on black/white. — [festival-cannes.com](https://www.festival-cannes.com/). Related festival sites, all live:
    - **Berlinale**, in Ciutadella — [berlinale.de](https://www.berlinale.de/en/home.html)
    - **Film at Lincoln Center**, in Trade Gothic Extended — [filmlinc.org](https://www.filmlinc.org/)
    - **Sundance**, in Trade Gothic Condensed — [sundance.org](https://www.sundance.org/)

#### Direction E: "VFX / animation studio reel" (big reels, darker UI)
29. **The Mill**: https://www.themill.com/ (live, Nuxt). It pairs **Copernicus** (a Klim serif) with **Metric** (a Klim sans) on Tailwind grays (#111827 etc.). Featured items are named reels ("The Mill Brand Reel 2026 / Luxury & Fashion Reel 2026 / Film & Series Reel 2026"). Video is self-hosted (`<video src="/assets/…" autoplay muted loop playsinline class="h-full w-full object-cover">`), and `preload` is `none` or `metadata`. — [themill.com](https://www.themill.com/)
    - *Transfer:* a serif-plus-sans pair and a dated "Reel 2026" naming scheme for "inkblot 2026 overview".
30. **Framestore**: https://www.framestore.com/ (live). It uses **Barlow Condensed** (Google) plus **Antenna**, on a dark #02050b with cyan #00b9ff, GSAP animation, 15 lazy images, and a deep mega-nav split by Advertising / Film / Episodic / Immersive. — [framestore.com](https://www.framestore.com/)
31. **Blur Studio**: https://blur.com/ (live). It's set in **DIN**, uppercase and tracked (13 uppercase and 15 letter-spacing rules), with dark slate #0c1216/#313539 and **signal yellow #fad802**. The project list uses "Title / Client" pairs ("Valorant Revelation / Riot Games"), and video is Vimeo. — [blur.com](https://blur.com/)
32. **BUCK**: https://buck.co/ (live; Next.js, Chakra UI, Sanity CMS). It's set in **Mabry** (Colophon) with red #f32c17. **Mux** handles video, with posters and lazy loading. There's a grain/noise rule, and a city/time-zone ticker ("LA → …"). — [buck.co](https://buck.co/)
33. **Nexus Studios**: https://nexusstudios.com/ (live, Craft). It uses Helvetica / Nunito, with `<video loop autoplay muted playsinline poster>`, `preload` set to `none` or `metadata`, and Vimeo. The tagline is "Storytelling in every dimension". — [nexusstudios.com](https://nexusstudios.com/)
34. **Blinkink** (animation): https://www.blinkink.co.uk/ (live). It mixes five faces (Garton, Mabry, Favorit, Clash, Basier) with yellow #ffd41f and blue #0000ff. It's playful, which makes it a counter-reference for "not whimsical". — [blinkink.co.uk](https://www.blinkink.co.uk/)

**Status notes:**
- **Stink**: stink.co is now a two-door splash (Stink Films / Stink Studios). Each door has a poster plus an autoplay loop, and the footer still says "©2025". — [stink.co](https://stink.co/)
- **RSA Films**: "Site by Stylo" (stylodesign.co.uk), set in Neuzeit Grotesk, with a geo-detected region map gate. — [rsaFilms.com](https://rsaFilms.com/us)
- **Electric Theatre Collective**: has a dedicated "Colour" nav section. — [electrictheatre.com](https://electrictheatre.com/)
- **Not live or not reachable on 2026-10-14:** objectandanimal.com (both apex and www timed out), workeditorial.com, untold.studio, mpcadvertising.com, janusfilms.com and nyff.org did not respond. Criterion.com and letterboxd.com returned Cloudflare "Just a moment…" 403s, so their status is unverified rather than down. cutandrun.tv now redirects to a gambling site, so **do not link it**. spikejonze.com returns 410 Gone. Most individual-director vanity domains I tried (romaingavras.com, melinamatsoukas.com, kahlilsjoseph.com, hirokomurai.com, megaforce.tv) don't resolve; directors mostly live on their production company's roster pages. ashthorp.com redirects to ALT Creative, Inc. (altcinc.com).

### Inferences
- **Funkhaus is the de facto house style of US commercial production and post.** Its credit line appears on at least nine of the sites here. The common recipe is a Nuxt front end, a headless WordPress, one licensed grotesk (Favorit, Moderat, Maax, TT Hoves, Söhne, Lota), Vimeo progressive MP4s in native `<video>`, and very little copy. If inkblot wants the "feels like a film company" signal, that recipe is the one to imitate. It is also widely copied, though, so a serif (Literata) gives differentiation.
- The sites whose palettes are closest to inkblot are Hungryman (#f7f4ed/#232323), Harbor (#f5f5f0/#0b121e), Pulse (#ebeadb/#14241f) and Metrograph (#fff3e3 plus navy #2a317d). Warm paper with near-black ink is an established film-world look, not just a "writing app" look.
- MUBI (Riforma + Tiempos + navy) and The Mill (Metric + Copernicus) show that a grotesk-plus-text-serif with one deep accent reads as premium cinema. That's almost exactly inkblot's existing system.

### Gaps
- **Awards:** I couldn't verify any current Awwwards, FWA, CSSDA, Webby or Godly awards for these specific sites. Searches returned only paginated Awwwards listing pages with ambiguous badge attribution ([Awwwards listing](https://www.awwwards.com/websites/%23F4F4EF/?page=2)). The only film-related Awwwards items surfaced were an Honorable Mention for "Let it Rip Pictures" (Feb 24, 2026) and a "Gavin Schneider Productions" listing, and both badge readings were ambiguous. The O Positive "director listing" appears in Awwwards inspiration ([Awwwards inspiration](https://www.awwwards.com/inspiration/director-listing-opositive-films)), and O Positive's site is live ([opositivefilms.com](https://opositivefilms.com/)). Awards fields in the gallery are therefore left blank rather than guessed.
- **Web design studio credits** were found only where the HTML says so: Funkhaus, YES (Somesuch), 27b (NEON), and Stylo (RSA). The designers of A24, MUBI, Partizan, Park Pictures, Academy and the others weren't stated in the markup.
- **Visual-only details are not verified by rendering:** exact hover behavior, cursor shape, transition timing beyond the CSS classes, and whether grain is an overlay. A screenshot pass would confirm them.
- A few fonts are ambiguous: UniveCon (MJZ) is probably Univers Condensed, and Prettybird's "Buch/Halbfett/Kraftig" are weight names of an unidentified family.

---

## 2. What recurring patterns make these feel premium?

### Takeaway
The premium signal comes from restraint, as the markup shows:
- one or two licensed typefaces, usually a neo-grotesk, sometimes with a mono or a text serif
- black/white or paper/ink palettes with at most one accent
- tracked small uppercase for metadata
- text indexes or credit blocks instead of marketing copy
- silent, muted, looping video that fades in over a poster

### Cited Findings
- **Type restraint, mostly licensed foundry faces:**
  - Lineto (Iconoclast; MUBI's Riforma) — [iconoclast.tv](https://iconoclast.tv/us/), [mubi.com](https://mubi.com/en/us)
  - Klim (The Mill's Copernicus and Metric; MUBI's Tiempos; Harbor's Söhne; Cannes's Tiempos Fine) — [themill.com](https://www.themill.com/), [harborpicturecompany.com](https://harborpicturecompany.com/), [festival-cannes.com](https://www.festival-cannes.com/)
  - Dinamo Favorit (Smuggler) — [smugglersite.com](https://smugglersite.com/)
  - Neubau NB International (A24) — [a24films.com](https://a24films.com/)
  - Grilli GT Pressura Mono (Pulse) — [pulsefilms.com](https://pulsefilms.com/)
- **Mono as a "film-technical" voice:**
  - A24: NB International Mono — [a24films.com](https://a24films.com/)
  - Psyop: New Heterodox Mono — [psyop.com](https://psyop.com/)
  - Pulse: an all-mono site — [pulsefilms.com](https://pulsefilms.com/)
- **Tracked uppercase and small caps:**
  - A24 has 159 letter-spacing and 56 uppercase rules — [a24films.com](https://a24films.com/)
  - Riff Raff has 130 uppercase rules — [riffrafffilms.tv](https://www.riffrafffilms.tv/)
  - Iconoclast and Biscuit hand-space their nav letters — [iconoclast.tv](https://iconoclast.tv/us/), [biscuitfilmworks.com](https://biscuitfilmworks.com/)
- **Credits as content:**
  - Trim: Director / Editor / Production Company / Agency — [trimediting.com](https://trimediting.com/)
  - Anonymous Content: "Directed By:" — [anonymouscontent.com](https://www.anonymouscontent.com/)
  - Hungryman: "DIRECTOR …" — [hungryman.com](https://hungryman.com/)
  - Final Cut: "Editor – … Director – …" — [finalcut-edit.com](https://www.finalcut-edit.com/)
- **Monochrome:**
  - Iconoclast: #000/#fff plus greys — [iconoclast.tv](https://iconoclast.tv/us/)
  - Psyop: #000/#fff/#9d9d9d — [psyop.com](https://psyop.com/)
  - A24: greys only — [a24films.com](https://a24films.com/)
  - Somesuch: grayscale filters — [somesuch.co](https://somesuch.co/)
- **Hover/in-view fade-in of video over a still:**
  - Partizan: `opacity-0 scale-105 transition-opacity` — [partizan.com](https://partizan.com/)
  - Riff Raff: `opacity-0 transition-opacity duration-200` — [riffrafffilms.tv](https://www.riffrafffilms.tv/)
- **Custom cursors:** `cursor:none` appears on RadicalMedia and Riff Raff Films — [radicalmedia.com](https://www.radicalmedia.com/), [riffrafffilms.tv](https://www.riffrafffilms.tv/)
- **Smooth scroll / GSAP:**
  - Partizan uses Lenis — [partizan.com](https://partizan.com/)
  - Framestore uses GSAP — [framestore.com](https://www.framestore.com/)
- **Blend modes over video:** Park Pictures has 13 mix-blend-mode rules — [parkpictures.com](https://parkpictures.com/)
- **Grain/noise:** these style rules are present but rare, on BUCK, RSA and Riff Raff — [buck.co](https://buck.co/), [rsaFilms.com](https://rsaFilms.com/us), [riffrafffilms.tv](https://www.riffrafffilms.tv/)
- **Tickers and live clocks:**
  - Psyop's news ticker — [psyop.com](https://psyop.com/)
  - BUCK's city ticker — [buck.co](https://buck.co/)
  - Metrograph's live clock — [metrograph.com](https://metrograph.com/)
- **Framer templates** for film directors (Montage; Ines Hartley) productize the same patterns. Montage offers list rows that play looping previews on hover with a List/Grid toggle. Ines Hartley has a film index whose hover previews are "cropped to each film's ratio". — [Framer Montage](https://www.framer.com/marketplace/templates/montage/), [Framer Ines Hartley](https://www.framer.com/marketplace/templates/ines-hartley/)

### Inferences
- Grain and heavy cursor effects are a minority pattern. The admired core is typography plus silence, which is good for inkblot's "calm, precise, not whimsical" brief. Save any grain for one hero frame, if it's used at all.
- Playful multi-font sites (Blinkink, five faces) are the outlier and conflict with the brief.

### Gaps
- No secondary source (article or interview) explaining *why* these choices feel premium was found. These are pattern observations from the source code.

---

## 3. How do they handle performance with heavy video?

### Takeaway
The dominant pattern is: poster image first; `preload="none"` (or `"metadata"`); small, muted, looping renditions (480p–800px for thumbnails, 1080p for heroes) attached lazily via `data-src`; video served as MP4/HLS into a native `<video>` tag rather than a heavy iframe. The hosts are Vimeo progressive renditions or Mux HLS, with CloudFront or self-hosting as alternatives.

### Cited Findings
- **Riff Raff Films**: 352 thumbnail videos, every one `preload="none"` at 854×480, hidden until hover. The page HTML is still 9.4 MB, which is a cautionary example of putting a whole roster in one SSR page. — [riffrafffilms.tv](https://www.riffrafffilms.tv/)
- **Trim**: 32 videos, each with a 600×338 poster JPEG and `preload='none'`. — [trimediting.com](https://trimediting.com/)
- **Partizan**: `data-src` lazy assignment of `_800px.mp4` files. — [partizan.com](https://partizan.com/)
- **Park Pictures**: lazy `data-src` pointing to Vimeo URLs. — [parkpictures.com](https://parkpictures.com/)
- **Smuggler**: Vimeo `progressive_redirect/…/rendition/1080p/file.mp4` with `preload="none"`, i.e. Vimeo as a CDN for raw MP4 into native video. — [smugglersite.com](https://smugglersite.com/)
- **NEON**: Mux HLS `.m3u8` streams plus `image.mux.com/…/thumbnail.jpg` posters. The hero is a 1920×804 muted loop hidden on mobile (`hidden … md:flex`). — [neonrated.com](https://www.neonrated.com/)
- **BUCK**: Mux plus posters plus lazy loading. — [buck.co](https://buck.co/)
- **Iconoclast**: a 2000-px poster frame on an autoplay Vimeo-sourced `<video>`. — [iconoclast.tv](https://iconoclast.tv/us/)
- **The Mill**: self-hosted `/assets/…` video with `preload` set to none or metadata. — [themill.com](https://www.themill.com/)
- **Nexus Studios**: poster plus preload none/metadata. — [nexusstudios.com](https://nexusstudios.com/)
- **RadicalMedia**: all media on CloudFront, with 46 `loading="lazy"` images. — [radicalmedia.com](https://www.radicalmedia.com/)
- **Outsider**: `preload="metadata"`. — [outsider.tv](https://outsider.tv/)
- **Stink**: a static `/img/stink-films.jpg` poster on its autoplay loop. — [stink.co](https://stink.co/)

### Inferences
- For inkblot, which has a handful of demo loops rather than hundreds:
  - Mux, or self-hosted short H.264/HEVC MP4s at 720p–1080p, under about 2–4 MB each
  - a mandatory `poster`, `preload="none"`, and an IntersectionObserver to set `src`
  - a still image instead of video on mobile, as NEON does with its desktop-only hero
  - honor `prefers-reduced-motion`

### Gaps
- No measured performance data (LCP, transfer size) was collected, only markup.

---

## 4. Film-adjacent conventions useful for inkblot (screenplay type, title cards, slates, aspect frames, end credits, laurels)

### Takeaway
The most directly reusable conventions are:
- **2.39:1 letterboxed hero frames**, as on NEON
- **credit blocks** (Trim, Final Cut, Anonymous Content) for changelog and timeline entries
- **"Title · Year"** indexing (A24)
- **mono typefaces for technical metadata** (Pulse, A24, Psyop), with Courier Prime as inkblot's equivalent
- **festival-style credit lines** as social proof (Somesuch: "Premiered at the 79th Locarno… awarded Best Emerging Director")

Of all these sites, only Pulse Films uses monospace site-wide; the others confine mono to metadata.

### Cited Findings
- **Scope letterbox:** NEON's hero video is authored at 1920×804 (2.39:1). — [neonrated.com](https://www.neonrated.com/)
- **Native-ratio frames per item:** Riff Raff sets inline aspect ratios of 1.775, 1.777, 1.333, 1 and 0.88. — [riffrafffilms.tv](https://www.riffrafffilms.tv/)
- **Ratio-cropped previews:** the Ines Hartley template crops hover previews "to each film's ratio". — [Framer Ines Hartley](https://www.framer.com/marketplace/templates/ines-hartley/)
- **Credit blocks:**
  - Trim: Director / Editor / Production Company / Agency — [trimediting.com](https://trimediting.com/)
  - Final Cut — [finalcut-edit.com](https://www.finalcut-edit.com/)
  - Anonymous Content: "Directed By:" — [anonymouscontent.com](https://www.anonymouscontent.com/)
- **Year-indexed filmography:** A24 — [a24films.com](https://a24films.com/)
- **Release-date-led CTAs:** NEON's "In Theaters Oct 16, 2026 / Play Trailer / Get Tickets" — [neonrated.com](https://www.neonrated.com/)
- **Named, dated reels:** The Mill's "Brand Reel 2026" — [themill.com](https://www.themill.com/)
- **Festival credit lines as social proof:** on Somesuch's "Latest" page — [somesuch.co](https://somesuch.co/)
- **Festival typography and color:** Cannes uses Tiempos Fine Light, Everett and gold #c5a26e — [festival-cannes.com](https://www.festival-cannes.com/)
- **Mono as the voice:** Pulse Films uses GT Pressura Mono and Aether AMono throughout — [pulsefilms.com](https://pulsefilms.com/)
- **Cinema editorial serif plus paper:** Metrograph uses Ionic Modern Micro and HB Goblet on #fff3e3 — [metrograph.com](https://metrograph.com/)
- **Archive / Editions nav:** Somesuch — [somesuch.co](https://somesuch.co/)
- **Region / office switches** (could map to platform or version switches):
  - RSA — [rsaFilms.com](https://rsaFilms.com/us)
  - Prettybird — [prettybird.co](https://prettybird.co/)
  - Partizan — [partizan.com](https://partizan.com/)

### Inferences (mapping to the inkblot download site)
- **Hero:** a 2.39:1 letterboxed demo reel (NEON), muted, with a poster frame. Optionally set it on a black band in dark mode and a paper band in light mode, with a Courier Prime slate line above it ("INKBLOT — DEMO REEL 2026 — TAKE 1"). Keep the slate to text; a drawn clapperboard would tip into whimsy.
- **Feature index:** an Academy- or Tanu-Muiño-style typographic list (Literata, large). Each row reveals a short loop on hover in that feature's native ratio (Riff Raff, Ines Hartley): a page-portrait for Manuscript, US Letter in Courier for Screenplay, wide for Worldbuilding maps.
- **Feature timeline / changelog:** Trim-style credit blocks with tracked small-caps labels (A24) and mono values, e.g. "VERSION 1.6 · RELEASED 14 OCT 2026 · FORMAT Fountain, FDX · PLATFORM macOS 14+". Index them like a filmography ("Title · Year", as A24 does).
- **Social proof:** festival-style laurel lines or Somesuch-style credit sentences rather than logo walls. Only use real accolades.
- **CTA pair:** "Watch the reel" + "Download for macOS", after NEON's "Play Trailer / Get Tickets", with one Ink Blue accent (after MUBI's single navy).
- **Footer:** a plain "Site by" credit and an end-credit-style roll of credits/acknowledgements set in small tracked caps. An end-credit scroll is plausible, but none of the sites checked uses one literally.

### Gaps
- None of the checked sites used a literal end-credit scroll, a clapperboard/slate graphic, or film-festival laurel graphics on their own homepage (they cite festivals in text only). Using those devices would be inkblot's invention, not an observed convention.
- Criterion (likely the strongest "archive/filmography" reference) couldn't be inspected because of a Cloudflare block; letterboxd.com likewise.
