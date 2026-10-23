# Photography, Photo-Studio, Photobook and Photo-Product Websites: Styling Inspiration Gallery for inkblot

Method note: on 2026-10-14 every site below was fetched live, either with curl (homepage HTML plus up to 6 linked stylesheets, then grepped for `font-family`, `@font-face`, hex colours, `transition`, `srcset`, `loading="lazy"`, base64 placeholders and CMS or framework fingerprints) or with WebFetch for JS-rendered pages. Typefaces are what each site's CSS actually declares. Hex values are the most frequent background and colour values in that CSS. Anything visual that can only be seen in a browser (hover choreography, cursor effects) is listed as a gap where no CSS evidence exists. "Source" links point to the live page that was inspected. Film, director and production-company sites are out of scope because another researcher covers them.

## Q1. Which photographer and photo-company sites are admired, live, and what do they look like now? (Curated gallery, grouped by style direction)

### Takeaway
29 sites were verified live. The strongest references for inkblot are:
- **Halide/Lux, Darkroom and Capture One** for the product-site mechanics.
- **Jack Davison, Tyler Mitchell, Wolfgang Tillmans and Nadav Kander** for the index/contact-sheet/metadata vocabulary.
- **Aperture, Stanley/Barker, Loose Joints and MACK** for the literate, book-publisher typography that fits a writing studio.
- **Teenage Engineering and Polaroid** for product/object minimalism with mono type.

### Cited Findings

#### Direction A: Photo-app product sites (photography aesthetics + download conversion)
1. **Halide — halide.cam** (Lux Optics; "MADE BY LUX", founded 2015)
   - **Copy:** The hero is in all caps: "UNLOCK YOUR IPHONE CAMERA" / "The #1 App for Natural Photos". It sits above two award-wreath images (Editors' Choice, Apple Design Award) and an App Store button. The first visual is a before/after "iPhone vs Halide" comparison.
   - **Section order:** Feature sections in sequence: Process Zero, Looks, Bring Your Own RAWs, "Designed like a real camera", Manual Mode, Focus Assist, Learn As You Go, Private By Design, "And lots more" (Technical Readout, DCI-P3, Metadata View).
   - **Closing CTA:** "GET HALIDE NOW — Now on the App Store — with a free 1 week trial at signup". No price is shown. The footer cross-sells Kino ("Shown in Apple's 'Glowtime' September event"). — [halide.cam](https://halide.cam/)
   - **Type:** The CSS declares a custom display face, "HalideRouterNeue" (@font-face HALIDEROUTER), with SF Pro Text (regular/medium/semibold/bold) and an `-apple-system, "HK Grotesk"` body stack. The page itself says it was "Designed with three new, custom typefaces".
   - **Palette:** Black/white with a signature acid yellow (#fffe4f / #ff0) and light grey #f0f0f0.
   - **Motion and images:** Uniform `transition: all 0.25s`. Images are @2x PNG srcset pairs. — [halide.cam](https://halide.cam/)
   - **Awards (self-reported on the page):** Apple Design Award for Halide, and iPhone App of the Year twice (for Kino and Spectre). — [halide.cam](https://halide.cam/)
   - **Transfers to inkblot:** a single-accent brand (inkblot's Ink Blue #2f4a8a plays the role of Halide's yellow). A "designed like a real instrument" section maps to "designed like a writer's desk". The before/after comparison maps to plain text vs a typeset manuscript. Award wreaths sit next to the CTA, and the closing CTA states the trial terms in one line.

2. **Lux — lux.camera** (Halide's maker; blog plus app hub)
   - **Layout:** Nav lists "Our apps": Halide, Spectre, Kino, Orion. Recent posts include "iPhone 18 Pro", "Halide 3.2: The App for Aperture", "Halide 3.1: Scarlet Edition" and "Halide Mark III". The page uses Alpine.js-style `x-transition:enter.duration.500ms.delay.500ms`.
   - **Type:** Atkinson Hyperlegible (Regular/Italic/Bold/BoldItalic) and a display face called "Galerie".
   - **Palette:** #fff / #222 / #151515 / #ebeef0.
   - **Motion:** Opacity-only fades of .15–.2s. — [lux.camera](https://www.lux.camera/)
   - **Transfers to inkblot:** the long-form "deep dive" release posts (Halide 3.2 and so on) are an editorial model for inkblot's feature timeline. Each version gets a named essay, not a changelog bullet.
   - **Flag:** kino.app is a parked domain ("Kino.app – Domain Showcase – TopDomains"). Kino lives under Lux and Halide's footer. — [kino.app](https://www.kino.app/)

3. **Darkroom — darkroom.co** (Bergen Co.; "© 2015-2026 Made by Bergen Co. Designed Worldwide.")
   - **Hero:** "Everything to edit. No import needed." with the CTAs "Try it Free" and "What's in Darkroom+".
   - **Social proof strip:** Apple Design Award; 4.7 average from 119k+ ratings; Editors' Choice / App of the Day; "20M+ Downloads" since 2015.
   - **Sections:** "What's New" post cards, "Non-destructive editing by design", a grid of six Darkroom+ feature cards, "3,999 Free Community Presets" with a search bar and preset-collection cards with counts, press quotes ("Don't take our word for it!"), a "Every tool to find a look." checklist of about 15 tools with one-line descriptions, a closing "Try the complete Darkroom workflow" with an iPhone/Mac/iPad/Vision Pro device image, and a newsletter signup. No prices on the homepage. — [darkroom.co](https://darkroom.co/)
   - **Build:** Next.js; system font stack (`system,-apple-system,…SF Pro Display`); near-black/white with red #e20612; 54 srcset / 66 `loading="lazy"`. — [darkroom.co](https://darkroom.co/)
   - **Transfers to inkblot:** the "Every tool…" checklist becomes a feature index. The "What's New" cards become timeline entries. Counted collection cards ("Kodak — 12 presets") become counted template cards ("Screenplay — 6 templates"). The final CTA shows every platform in one device image.

4. **Capture One — captureone.com**
   - **Hero:** "Photo software trusted by the best" over a mosaic of about 17 small thumbnails. CTAs: "Try for free" and "See pricing".
   - **Sections:** Five genre cards (Portrait, Fashion & Beauty, Product & Food, Weddings & Events, Landscape), a Studio block, an events carousel, and a closing "Try it yourself for free" with "Download free trial" plus "Try mobile for free". No photographer credits appear on images. — [captureone.com](https://www.captureone.com/en)
   - **Build:** Custom "CaptureOne" brand face plus "AmericanGrotesk" (each with metric-matched fallback faces, which is the Next.js font pattern); palette #fff / #000 / #f6f7f8; Next.js plus Sanity; 44 lazy images and 34 inline base64 placeholders (blur-up). — [captureone.com](https://www.captureone.com/en)
   - **Transfers to inkblot:** the hero thumbnail mosaic becomes a contact sheet of inkblot outputs (manuscript page, screenplay page, planet map, typeset spread). The genre cards map to inkblot's modes: Novel, Screenplay, Worldbuilding, Publishing.

5. **Glass — glass.photo** (paid photo community)
   - **Copy:** Hero "Fall in love with photography again". Subhead: "a paid, global community platform for photographers. With no ads or manipulative algorithms". Below it sits a strip of tag chips ("Long Exposure", "Paris at Night", "Golden Hour In New York City").
   - **Sections:** An Explore section with camera and lens cards (Fujifilm X100VI, Leica Q3, Leica Summicron 50mm ƒ/2) shown as photo strips. "Community, not comparison" and "Focused features" blocks. The footer lists Platforms: Android, iPad, iPhone, Web, Windows. — [glass.photo](https://glass.photo/)
   - **Build:** CSS variables `--font-mono` and `--font-sans` with a ui-monospace/SFMono fallback; iOS-dark #1c1c1e with yellow #ffd60a. — [glass.photo](https://glass.photo/)
   - **Transfers to inkblot:** a values-led hero (Glass's "no ads, no algorithms" maps to inkblot's "local-first, your files stay yours"). Gear-style cards labelled in mono suit format specs (".fountain", ".epub", "PDF/X").

6. **darktable — darktable.org** (open-source RAW developer)
   - **Build:** Utilitarian Skeleton-CSS look; Raleway; cyan link colour #1eaedb. — [darktable.org](https://www.darktable.org/)
   - **Transfers to inkblot:** a counter-example. It is honest but not premium, which shows the gap the others close.

#### Direction B: Gallery-whitespace minimal (photographer portfolios)
7. **Nadav Kander — nadavkander.com**
   - **Nav:** One plain list: "Studio Feed, Works in Series, Portraits, Commissions, Film, Archive, Monographs, Exhibitions & Talks, Essays & Reviews, News, Biography, Contact".
   - **Type and palette:** "Univers Next W01"; #fff / #000 with greys #d9d9d9 / #e6e6e6.
   - **Motion:** Image fades at `opacity 350ms cubic-bezier(0.455,0.03,0.515,0.955)`, colour 200ms.
   - **Images:** Served as `_largeThumbnail` / `_largeImage` pairs through srcset/data-src. — [nadavkander.com](https://www.nadavkander.com/)
   - **Transfers to inkblot:** a single-column index nav set in one grotesk size. Separate "Feed" and "Archive" sections map to a news/timeline area versus a feature archive.

8. **Tim Walker — timwalkerphotography.com**
   - **Nav and copy:** "Selected Work, Portraiture, Stories, Moving Image, Books, Articles, Biography, Contact", plus a long prose biography.
   - **Type and palette:** "Cardinal" (serif) paired with "Fann Grotesque Light Pro"; #fff / #1f1f1f / #444 / #999.
   - **Motion:** Slow fades `opacity 1s`, `.5s`, `width .1s, opacity .4s`. — [timwalkerphotography.com](https://www.timwalkerphotography.com/)
   - **Transfers to inkblot:** a serif + light-grotesk pairing (close to Literata + Inter). The 1-second fade is the "slow fade" that reads as premium. Note: the near-black #1f1f1f is almost identical to inkblot's ink #1f1c18.

9. **Rinko Kawauchi — rinkokawauchi.com**
   - **Layout:** Bilingual EN/JP; nav "News, Biography, Works, Publications, Articles, Contact, Instagram"; a lone "↑" back-to-top.
   - **Type:** Set entirely in "Adobe Garamond W01" (weights n4/n6/n7). — [rinkokawauchi.com](https://rinkokawauchi.com/)
   - **Transfers to inkblot:** proof that a single book serif can carry a whole site. It is a quiet, literary model for inkblot's Literata.

10. **Hiroshi Sugimoto — sugimotohiroshi.com**
    - **Layout:** Squarespace. Nav "home, News & Event, artworks, site specific arts, video, Biography, Bibliography, contact" in mixed lower/upper case. The homepage features a single item ("MoMAT, EXTINCTION, Guided Tour by Hiroshi Sugimoto, 2026").
    - **Type and palette:** futura-pt plus Helvetica Neue; #fff / #272727.
    - **Motion:** Squarespace's `opacity 800ms cubic-bezier(.4,0,.2,1)` image reveals. — [sugimotohiroshi.com](https://www.sugimotohiroshi.com/)
    - **Transfers to inkblot:** a "Bibliography" section is a natural pattern for a book-typesetting product (sample books made with inkblot).

11. **Ryan McGinley — ryanmcginley.com**
    - **Build:** Squarespace template. Shares Sugimoto's CSS fingerprint: Helvetica Neue / #272727, 800ms opacity+transform reveals and `clip-path 800ms` wipes. — [ryanmcginley.com](https://ryanmcginley.com/)
    - **Transfers to inkblot:** the clip-path wipe reveal works as a section-entrance treatment for screenshots.

12. **Alec Soth — alecsoth.com** (Magnum member)
    - **Copy:** Opens in the first person: "My name is Alec Soth (rhymes with 'both'). I live in Minnesota. My latest book, Advice for Young Artists, is now available from MACK." Then an exhibition list with venue/city/date lines.
    - **Type and palette:** Helvetica Neue only; accents #efa537 and #f4c3cb.
    - **Motion:** `opacity .3s`. — [alecsoth.com](https://alecsoth.com/photography/)
    - **Transfers to inkblot:** a plain-voiced, first-person hero sentence instead of a slogan, which suits a writing tool. Dated venue/city lines become dated release entries.

13. **Tyler Mitchell — tylermitchell.co**
    - **Layout:** Nav "About, photography, films, exhibitions, books" plus a grid-density/quantity control labelled "all 50 200 500".
    - **Type:** "Marion" (serif).
    - **Motion:** `opacity 0.5s ease`, `transform 1s ease`.
    - **Images:** Sanity image CDN with `?w=96&auto=format` tiny thumbnails (originals listed at e.g. 3214×3974). — [tylermitchell.co](https://www.tylermitchell.co/)
    - **Transfers to inkblot:** a user-controlled density toggle works for a feature grid or changelog (compact/expanded).

#### Direction C: Contact sheet / archive / index
14. **Jack Davison — jackdavison.co.uk**
    - **View modes:** A view switcher "Index / Thumbs / ScreenSaver".
    - **Project list:** Each project is a list row with an image count, formatted "Title - Client/Publication - Year  N" (e.g. "Dune Pt 2 - 2024 24", "Kate Winslet - NYT Magazine - 2024 6", "26 States 45").
    - **Markup:** Thumbnail grid uses classes `thumbs-grid`, `lazy-thumb` (599 lazy thumbs), `index-item-label` and `index-item-length`.
    - **Type and palette:** Klim's "Untitled Sans" / "Untitled Sans Medium"; white with a single orange #ff8c00.
    - **Motion:** `opacity .6s ease-out`.
    - **Images:** Prismic/imgix URLs with `auto=compress,format` and fixed 280×280 crop thumbnails. — [jackdavison.co.uk](https://jackdavison.co.uk/)
    - **Transfers to inkblot (top pick for the timeline):** an index-list ↔ contact-sheet toggle. Rows read "Feature – Version – Date – count" (e.g. "Planet Maps — v0.9 — 2026 — 12 screenshots"). A "ScreenSaver" mode works as an ambient auto-cycling hero of app screenshots.

15. **Wolfgang Tillmans — tillmans.co.uk**
    - **Nav:** "Current Calendar, Installation View Archive, Publications, Lectures & Talks, Texts, Biography & Bibliography, betweenbridges.net, Political campaigns". The homepage is a newest-first stacked feed from 2026 back to 2020.
    - **Captions:** Strict catalogue metadata. Exhibitions: "Regen Projects, Los Angeles, 15 January–1 March 2026". Publications: "Centre Pompidou, Paris, 2025 [English edition, co-published by Spector Books, Leipzig]". Specs: "Paperback, 16,4 x 24,8 cm (6.5 x 9.75 in.), 352 pages."
    - **URLs and embeds:** Publication URLs use catalogue codes (`/publications/p-2025-0001`). YouTube is consent-gated.
    - **Type and palette:** Custom faces named "light" and "light-italic" with a Times New Roman fallback (a light serif); #fff / #222.
    - **Motion:** Fades of .2/.4/.6s. — [tillmans.co.uk](https://www.tillmans.co.uk/)
    - **Transfers to inkblot (top pick for the metadata line):** the spec line "Paperback, 16,4 x 24,8 cm, 352 pages" maps directly to "macOS 14+, Apple silicon & Intel, 38 MB, v1.4.2, 14 Oct 2026". Catalogue-code URLs map to version slugs. The newest-first stacked feed is the timeline.

16. **Dan Holdsworth — holdsworth.works** (danholdsworth.com redirects here)
    - **Build:** "Frontpage made with Lay Theme" (a WordPress portfolio theme). Nav in caps, comma-separated: "NEWS, BOOKS, ARCHIVE, INFO, TEXTS, COLLABORATIONS".
    - **Type:** Favorit, served from files named "FavoritTrialStd", which suggests trial font files in production.
    - **Palette and motion:** #000 / #fff / #ededed; `transition: all 400ms ease-out`. — [holdsworth.works](http://holdsworth.works/)
    - **Transfers to inkblot:** an inline comma-separated nav is a compact header for a small product site.

17. **Magnum Photos — magnumphotos.com** (agency/collective)
    - **Live check:** Content is current, including "Remembering Ian Berry (1934–2026)", Magnum Learn courses (e.g. "Alec Soth: Photographic Storytelling") and a photobook feature ("Memleket, A 15-Year Portrait of Turkey — Emin Özmen").
    - **Type:** Typekit kit `zul5ccc` with Univers (nav/labels), Fira Sans (body), Garamond Premier Pro Display and Adobe Garamond (editorial headlines).
    - **Palette:** Mostly #fff/#000 with a teal accent #287675 / #006e7d.
    - **Motion:** `.6s cubic-bezier(.075,.82,.165,1)` (ease-out-circ).
    - **Build:** WordPress plus Swiper. — [magnumphotos.com](https://www.magnumphotos.com/)
    - **Transfers to inkblot:** a three-voice type system (grotesk labels / sans body / display serif headlines) is nearly the same as Inter + Literata. The muted single accent parallels Ink Blue.

#### Direction D: Editorial photobook / publisher
18. **Aperture — aperture.org**
    - **Type:** Fully custom type with self-hosted woff2: "Aperture Serif" (Light, Light Italic, Bold, Bold Italic) and "Aperture Sans" (Regular, Italic, Bold, Bold Italic).
    - **Content:** A banner reads "Photography has a new home in New York. Come visit us at 380 Columbus Avenue!" Nav covers Magazine / Archive / Store / Membership, with categories "Interviews, Essays, Reviews, Portfolios, Photobooks".
    - **Build:** WordPress plus Shopify; 58 webp, 29 srcset, 31 lazy. — [aperture.org](https://aperture.org/)
    - **Transfers to inkblot:** a serif/sans superfamily pair with real italics, in the Literata/Inter spirit. The magazine-plus-store structure maps to Blog/Changelog plus Download.

19. **MACK — mackbooks.co.uk** ("Global publisher of award-winning books on art, photography and critical studies"; publishes Alec Soth's *Advice for Young Artists*)
    - **Build:** Shopify; Figtree; mostly #fff/#000.
    - **Motion:** Very quick linear transitions (`all 175ms linear`, `opacity 175ms linear`).
    - **Images:** Heavy image grid: 733 srcset / 731 `loading="lazy"`. — [mackbooks.co.uk](https://mackbooks.co.uk/)
    - **Transfers to inkblot:** a book-cover grid with tiny caption rows maps to a gallery of sample books typeset in inkblot.

20. **Loose Joints — loosejoints.biz**
    - **Nav:** "Current Titles, Forthcoming, Signed & Bundles, Special & Rare, Out of Print". A ticker/marquee strip separates items with em-dashes ("— Free Shipping over £70 …").
    - **Type and palette:** Dinamo's "Diatype" (Light/Regular/Bold); #000 / #fff with a yellow #fbe122 and green #6cc24a.
    - **Credits:** Book credits name designers (e.g. "designed by Linda Van Deursen"). — [loosejoints.biz](https://loosejoints.biz/)
    - **Transfers to inkblot:** the status taxonomy (Current / Forthcoming / Out of Print) maps to a feature timeline (Shipped / In progress / Retired).

21. **Stanley/Barker — stanleybarker.co.uk**
    - **Build:** Shopify; "Value Sans" headings with "Quattrocento Sans" body.
    - **Palette:** Notably includes a warm off-white #fffcf5 alongside #fff / #333.
    - **Motion:** `transform .15s, opacity .15s`. — [stanleybarker.co.uk](https://www.stanleybarker.co.uk/)
    - **Transfers to inkblot:** a warm-paper background in practice on a photobook site. It is close to inkblot's #faf8f4.

22. **GOST Books — gostbooks.com**
    - **Build:** Shopify; Alegreya Sans; greys #6a6a6a / #292929 / #525252 / #ddd.
    - **Motion:** `0.3s ease-in-out`. — [gostbooks.com](https://gostbooks.com/)
    - **Transfers to inkblot:** a soft grey-scale UI that recedes behind covers.

23. **Steidl — steidl.de**
    - **Build:** German-default storefront (Bücher, KünstlerInnen, Verlag, News/Termine, Interviews); "Apercu Pro Medium"; #111 / #333.
    - **Motion:** `all 0.25s cubic-bezier(0.5,0,0,1)`. — [steidl.de](https://steidl.de/)
    - **Notes:** The `<title>` is empty ("Startseite - Steidl Verlag" appears in body text) and the page feels dated. Useful mainly as a counter-example.

24. **British Journal of Photography / 1854 — 1854.photography**
    - **Build:** futura-pt throughout; teal #266b69 accent. — [1854.photography](https://www.1854.photography/)
    - **Transfers to inkblot:** a single geometric sans plus one muted accent.

#### Direction E: Camera / photo-product companies (object photography, product pages)
25. **Teenage Engineering — teenage.engineering**
    - **Copy and nav:** Ultra-terse lowercase nav: "now, latest, store, deals, guides & downloads, support, designs, audio, instruments, products". Store notice: "now open! wed–sun 11am–7pm".
    - **Type:** Custom faces UniversTE20T (thin), UniversTE40L (light), "TechnoType", "franxurter" and "riddim", referenced as `var(--te-20)` / `var(--te-40)`.
    - **Palette:** #fff / #f1f2f2 / #e5e5e5 / #f5f5f5 greys.
    - **Motion:** `transform .25s, opacity .15s`.
    - **Images:** 35 webp references. — [teenage.engineering](https://teenage.engineering/)
    - **Transfers to inkblot:** lowercase labels, thin type, objects on pale grey. A dedicated "guides & downloads" nav item is a model for a Download/Docs section.

26. **Polaroid — polaroid.com**
    - **Type:** A notable trio: "Real Head Office" (Demibold/Regular, about 950 declarations), "Commit Mono" (150) for labels and "Saol Text" (128) serif.
    - **Palette and motion:** #151515 / #e9e9e9; custom easing `cubic-bezier(.45,.02,.09,.98)` on transform/colour/background.
    - **Build:** Shopify-style store with a Sanity CMS fingerprint (`markDefs`). — [polaroid.com](https://www.polaroid.com/en_us)
    - **Transfers to inkblot:** the closest commercial analogue to inkblot's own trio (sans + serif + mono). The mono carries specs and prices, so Courier Prime can carry version, file size and system requirements.

27. **Leica — leica-camera.com**
    - **Live check:** Products listed: M EV1, M11-P, SL3-P, Q3 43, Summicron-M 66 f/2, "METAL GRAY FINISH".
    - **Type:** CSS loads "Outfit" (Light/Regular/SemiBold) woff2.
    - **Images:** Extremely image-heavy: about 2,721 webp references, 1,215 srcset and 461 `loading="lazy"`. — [leica-camera.com](https://leica-camera.com/en-US)
    - **Transfers to inkblot:** pairing a product name with a precise spec line (focal length/aperture) is the model for a "v1.4 · 38 MB · macOS 14+" line.

28. **Hasselblad — hasselblad.com**
    - **Type:** "Tw Cen" (Twentieth Century) plus "Outfit".
    - **Palette:** Black/white with an orange accent #d95e00.
    - **Build:** Swiper (320 references), Lenis smooth scroll, VideoJS; 16 srcset and 4 base64 placeholders. — [hasselblad.com](https://www.hasselblad.com/)
    - **Transfers to inkblot:** full-bleed product video plus smooth scroll is the "immersive" direction. Use sparingly.

29. **Kodak — kodak.com** (Eastman Kodak corporate)
    - **Type:** Graphik in many weights.
    - **Palette:** Brand red #ed0000 / #b30000 and yellow #ffb700.
    - **Build:** Nuxt. — [kodak.com](https://www.kodak.com/en/)
    - **Notes:** A corporate, heritage-colour example. Less useful aesthetically.

Also live but lower relevance:
- **Fujifilm X (US):** WordPress; Fjalla One + Noto Sans; 126 lazy images. — [fujifilm-x.com](https://www.fujifilm-x.com/en-us/)
- **Fotografiska:** Minion Pro serif with condensed "Refrigerator" and "Apotek" display faces; yellow #ffce1b. — [fotografiska.com](https://www.fotografiska.com/)
- **James Mollison:** Squarespace; Poppins/Urbanist. — [jamesmollison.com](https://www.jamesmollison.com/)
- **Max Siedentopf:** WordPress; Favorit, Futura LT, PF Mellon. — [maxsiedentopf.com](https://maxsiedentopf.com/)
- **Ricoh Imaging Japan:** Japanese homepage. — [ricoh-imaging.co.jp](https://www.ricoh-imaging.co.jp/japan/)
- **Readymag:** showcase/tool homepage. — [readymag.com](https://readymag.com/)
- **Cargo:** showcase/tool homepage. — [cargo.site](https://cargo.site/)

#### Offline / redirected / unverifiable (flag)
- **kino.app:** a parked domain; the Kino app lives under Lux. — [kino.app](https://www.kino.app/)
- **jamiehawkesworth.com:** redirected through a third-party ad/feed URL (moovend.com). The domain looks lapsed or hijacked, so do not cite or link it.
- **obscura.camera:** now a personal page titled "ben rice mccarthy". — [obscura.camera](https://obscura.camera/)
- **harleyweir.com:** returned only about 1 KB of HTML, so it is either a placeholder or fully JS-rendered. Unverified.
- **Blocked or not loading for scripted fetch:**
  - Returned 403: VSCO (vsco.co), Lomography (lomography.com), Format (format.com).
  - Bot checks: foam.org (Vercel security checkpoint, 429) and Unsplash (bot challenge).
  - Rate-limited (429): dashwoodbooks.com.
  - No response: stephenshore.net, toddhido.com, phaseone.com, ricoh-imaging.com, self-publish.be.
  - These are likely live behind bot protection but were not verified, so they are excluded from the gallery.

### Inferences
- The three most transferable structural ideas:
  - (a) Jack Davison's Index/Thumbs toggle with per-row counts, as a feature timeline.
  - (b) Tillmans' catalogue spec lines, as the download metadata line.
  - (c) Halide's section rhythm (hero claim → comparison → named features → "designed like a real X" → trial-terms CTA), as the conversion skeleton.
- Type stacks close to inkblot's appear at Aperture (serif+sans superfamily), Magnum (grotesk + sans + Garamond), Tim Walker (Cardinal + light grotesk), Polaroid (sans + Saol serif + Commit Mono) and Rinko Kawauchi (Garamond only). inkblot's Literata/Inter/Courier Prime trio is squarely within the vocabulary of literate photo publishers.
- Warm-paper backgrounds are rare. Most photo sites use pure #fff so images read neutrally; Stanley/Barker's #fffcf5 is the one example found. inkblot's #faf8f4 will distinguish it, but screenshots should sit on a neutral inset (a frame or mat) so their colour isn't shifted by the warm ground.

### Gaps
- Web-design studio credits could not be found for any of the portfolios. No footer credit appears except "Lay Theme" (Holdsworth) and Bergen Co. (Darkroom, which is its own studio), and a web search for Jack Davison's site designer returned nothing relevant ([search results, e.g. coalitiontechnologies.com](https://coalitiontechnologies.com/portfolio/studio-number-one)).
- Awwwards/Godly/siteinspire awards for these specific sites could not be confirmed. An Awwwards search surfaced only navigation and inspiration pages, not a 2026 photography Site of the Day ([awwwards.com photo collection](https://www.awwwards.com/Cuchillo/collections/photo/)).
- Hover and cursor behaviour (custom cursors, image-follow hovers) cannot be confirmed from static HTML/CSS. Grepping cursor rules found only default/not-allowed, with no custom cursor images on these sites.
- VSCO, Lomography, Format, Foam, Stephen Shore and Todd Hido could not be inspected (see flags above).

## Q2. How do photo-app product sites (Halide/Kino, Darkroom, VSCO, Capture One, darktable) combine photography aesthetics with downloads?

### Takeaway
They lead with a one-line claim plus a single primary CTA ("Try it Free" / App Store / "Try for free"). Proof comes right next to it: award wreaths, rating counts, download totals. Real photos do the explaining, through comparisons and thumbnail mosaics. Features are named sections or a dense checklist, and the page closes with a CTA that repeats the trial terms. None of them shows a price on the homepage.

### Cited Findings
- Halide: hero claim, award wreaths, App Store button, then an "iPhone vs Halide" before/after. It closes on "GET HALIDE NOW — Now on the App Store — with a free 1 week trial at signup". No price. — [halide.cam](https://halide.cam/)
- Darkroom: "Try it Free" in both nav and hero. The proof strip reads "Apple Design Award", "4.7 … 119k+ ratings" and "20M+ Downloads". The page says Darkroom+ is only required at export, so there is no price on the homepage. Its final CTA shows iPhone, Mac, iPad and Vision Pro together. — [darkroom.co](https://darkroom.co/)
- Capture One: "Try for free" + "See pricing" in the hero. The closing CTA is "Download free trial", with "Try mobile for free" as secondary. The hero image is a mosaic of about 17 thumbnails. — [captureone.com](https://www.captureone.com/en)
- Halide/Lux uses long-form release essays ("Halide 3.2: The App for Aperture", "Halide Mark III") as its update record, not a terse changelog. — [lux.camera](https://www.lux.camera/)
- Darkroom has "What's New" cards linking to posts plus "Updates" in the nav. — [darkroom.co](https://darkroom.co/)
- Glass sells values first ("no ads or manipulative algorithms"). It has no App Store badge on the homepage and lists platforms in the footer. — [glass.photo](https://glass.photo/)
- darktable keeps a plain open-source page with Raleway and cyan links, with no product-marketing polish. — [darktable.org](https://www.darktable.org/)

### Inferences
- A suggested inkblot skeleton:
  1. Claim
  2. One "Download for Mac" button, with a Courier Prime spec line beneath it (version · size · macOS req · Apple silicon/Intel)
  3. Before/after (plain draft ↔ typeset book page)
  4. A contact sheet of the four modes
  5. Named feature sections
  6. A checklist ("Every tool…")
  7. The timeline as dated release essays/cards
  8. A closing CTA that restates the terms ("free, local-first, no account")
- Award wreaths only work if inkblot has real accolades. Otherwise use Glass-style values proof ("Your files never leave your Mac").

### Gaps
- VSCO's site (403) and the Darkroom/Capture One download-page flows beyond the homepage were not inspected. Apple Design Award claims are self-reported on the vendors' pages and were not checked against Apple's lists.

## Q3. Recurring patterns that read as premium

### Takeaway
The pattern is restraint. Sites use one typeface family or a two- or three-voice system, near-monochrome palettes with at most one accent, plain index navigation, opacity-only fades (.3–1s) and catalogue-style metadata captions. Halide's acid yellow and Teenage Engineering's thin Univers show that a single bold, distinctive signal is enough.

### Cited Findings
- **Monochrome plus one accent:**
  - Jack Davison: #fff + #ff8c00 — [jackdavison.co.uk](https://jackdavison.co.uk/)
  - Magnum: #fff/#000 + teal #287675 — [magnumphotos.com](https://www.magnumphotos.com/)
  - Halide: black/white + #fffe4f — [halide.cam](https://halide.cam/)
  - Hasselblad: + #d95e00 — [hasselblad.com](https://www.hasselblad.com/)
  - BJP: + #266b69 — [1854.photography](https://www.1854.photography/)
- **Opacity-only, slow fades:**
  - Tim Walker: `opacity 1s` — [timwalkerphotography.com](https://www.timwalkerphotography.com/)
  - Jack Davison: `opacity .6s ease-out` — [jackdavison.co.uk](https://jackdavison.co.uk/)
  - Tyler Mitchell: `opacity 0.5s`, `transform 1s` — [tylermitchell.co](https://www.tylermitchell.co/)
  - Kander: 350ms eased — [nadavkander.com](https://www.nadavkander.com/)
  - Squarespace portfolios: 800ms — [ryanmcginley.com](https://ryanmcginley.com/)
  - Lux: .15–.2s opacity — [lux.camera](https://www.lux.camera/)
- **Single-family or custom type:**
  - Rinko Kawauchi: Adobe Garamond only — [rinkokawauchi.com](https://rinkokawauchi.com/)
  - Jack Davison: Untitled Sans only — [jackdavison.co.uk](https://jackdavison.co.uk/)
  - Kander: Univers Next only — [nadavkander.com](https://www.nadavkander.com/)
  - Custom brand faces: Aperture Serif/Sans ([aperture.org](https://aperture.org/)), Halide's custom typefaces ([halide.cam](https://halide.cam/)), Teenage Engineering's UniversTE ([teenage.engineering](https://teenage.engineering/))
- **Metadata as design:**
  - Tillmans' venue/date and format/dimension/page-count lines — [tillmans.co.uk](https://www.tillmans.co.uk/)
  - Jack Davison's "Title - Publication - Year  count" rows — [jackdavison.co.uk](https://jackdavison.co.uk/)
  - Leica's lens naming ("Summicron-M 66 f/2") — [leica-camera.com](https://leica-camera.com/en-US)
  - Polaroid's Commit Mono label face — [polaroid.com](https://www.polaroid.com/en_us)
- **Plain index navigation:**
  - Kander's single list — [nadavkander.com](https://www.nadavkander.com/)
  - Holdsworth's comma-separated caps — [holdsworth.works](http://holdsworth.works/)
  - Teenage Engineering's lowercase words — [teenage.engineering](https://teenage.engineering/)
  - Loose Joints' status taxonomy — [loosejoints.biz](https://loosejoints.biz/)
- **Small view controls instead of heavy UI:**
  - Jack Davison's "Index / Thumbs / ScreenSaver" — [jackdavison.co.uk](https://jackdavison.co.uk/)
  - Tyler Mitchell's "all 50 200 500" — [tylermitchell.co](https://www.tylermitchell.co/)

### Inferences
- For inkblot:
  - Keep Ink Blue as the only accent (links, the CTA and the i-dot).
  - Use opacity fades of 400–800ms on screenshots; avoid parallax and scale.
  - Set every caption, version and spec line in Courier Prime at small size.
  - Make navigation a short plain-word list.
  - Give the timeline an Index/Sheet toggle.
- Pairing a warm paper ground with 1s fades and serif type would read as "Tim Walker meets Aperture", which fits the brand: calm, literate, precise, not whimsical.

### Gaps
- No quantitative evidence (user studies, conversion data) that these patterns raise perceived quality or downloads. This is design-practice consensus inferred from the sample.

## Q4. How do they keep heavy imagery fast?

### Takeaway
The dominant approach is responsive `srcset` plus native `loading="lazy"` and WebP delivery. Image CDNs with URL transforms (imgix/Prismic, Sanity `auto=format`, Shopify CDN) negotiate formats automatically. Blur-up base64 placeholders appear on Next.js/WordPress-headless builds. Explicit AVIF references are rare (only Magnum, with 2 mentions).

### Cited Findings
- **CDN URL transforms:**
  - Jack Davison: Prismic/imgix URLs with `auto=compress,format` and fixed small crops (`w=280&h=280`); 599 `lazy-thumb` elements using `data-src` — [jackdavison.co.uk](https://jackdavison.co.uk/)
  - Tyler Mitchell: Sanity CDN thumbnails at `?w=96&auto=format` from multi-thousand-pixel originals — [tylermitchell.co](https://www.tylermitchell.co/)
- **srcset + lazy at scale:**
  - Leica: about 2,721 webp references, 1,215 srcset, 461 lazy — [leica-camera.com](https://leica-camera.com/en-US)
  - MACK (Shopify): 733 srcset, 731 lazy — [mackbooks.co.uk](https://mackbooks.co.uk/)
  - Aperture: 58 webp, 29 srcset, 31 lazy — [aperture.org](https://aperture.org/)
  - Darkroom: 54 srcset, 66 lazy — [darkroom.co](https://darkroom.co/)
- **Blur-up / LQIP:**
  - Capture One (Next.js + Sanity): 34 inline base64 images alongside 44 lazy — [captureone.com](https://www.captureone.com/en)
  - Max Siedentopf: 372 base64 placeholders + 282 srcset — [maxsiedentopf.com](https://maxsiedentopf.com/)
  - Hasselblad: 4 placeholders — [hasselblad.com](https://www.hasselblad.com/)
- **Simple @2x approach:** Halide uses 1x/@2x PNG srcset pairs for a small number of images — [halide.cam](https://halide.cam/)
- **Thumbnail/large pairs:** Kander serves `_largeThumbnail` and `_largeImage` variants with `data-src` lazy swap — [nadavkander.com](https://www.nadavkander.com/)
- **AVIF:** explicit references appeared only on Magnum (2), alongside 5 webp references — [magnumphotos.com](https://www.magnumphotos.com/)
- **Font loading:** Next.js font fallbacks ("CaptureOne Fallback", "AmericanGrotesk Fallback", "refrigerator Fallback") show metric-matched fallback faces used to avoid layout shift — [captureone.com](https://www.captureone.com/en); [fotografiska.com](https://www.fotografiska.com/)

### Inferences
- For inkblot (likely a small static site):
  - Export screenshots as AVIF with WebP/PNG fallback via `<picture>`, at 1x/2x/3x widths.
  - Use `loading="lazy"` below the fold and `fetchpriority="high"` on the hero.
  - Give every image explicit width/height (or aspect-ratio) so it reserves space and doesn't shift the layout.
  - Use a tiny inline blurred placeholder, or a flat #faf8f4 placeholder, for contact-sheet thumbnails.
  - Ship thumbnails at their display size, as Jack Davison and Tyler Mitchell do.
- Self-host Literata/Inter/Courier Prime as subset woff2 with metric-matched fallbacks.
- Because content negotiation on imgix/Sanity (`auto=format`) can serve AVIF without "avif" appearing in the HTML, actual AVIF use is probably higher than the HTML counts suggest.

### Gaps
- Actual transferred formats, weights and Lighthouse/Core Web Vitals scores were not measured. Counts are string occurrences in the HTML, which indicate approach, not byte-level performance.
