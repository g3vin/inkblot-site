# Avant-garde web design techniques for an "ink"-themed product site (inkblot), 2025–2026

Context checked (read-only): /Users/gavin/inkblot-site is a Vite 8 + React 19.2 project (`package.json`: vite ^8.0.11, @vitejs/plugin-react ^6.0.1, react/react-dom ^19.2.6); `index.html` mounts `/src/main.jsx` into `#app`. Any technique below would land in a React SPA unless the site becomes multi-page (which matters for cross-document View Transitions).

Research date: 2026-10-14. Note on Firefox version numbering: Firefox ships about every 4 weeks, and one source puts Firefox 152 at June 2026 ([buildmvpfast](https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026)). That makes stable Firefox roughly 155–156 in October 2026. caniuse rows for Firefox 157–161 are therefore beta or nightly, not stable (this is an inference from the release cadence).

## Ink-specific visuals (fluid sims, ink bleed shaders, SVG turbulence, Rorschach symmetry, mask reveals, grain, halftone, watercolor)

### Takeaway
Off-the-shelf, permissively licensed building blocks exist for every ink visual. Pavel Dobryakov's MIT WebGL fluid sim covers interactive ink in water, Paper Shaders (Apache-2.0) covers grain, halftone and "ink drop" metaballs, and SVG feTurbulence + feDisplacementMap covers ragged ink edges on real, selectable text. The fluid sim and full-screen shaders cost the most (continuous GPU work), so treat them as a progressive enhancement: one hero canvas, paused offscreen, with a static image or CSS fallback.

### Cited Findings
- **WebGL Fluid Simulation (Pavel Dobryakov):** a browser Navier-Stokes fluid sim on WebGL, GPU-accelerated and based on NVIDIA GPU Gems' "fast fluid dynamics" chapter. MIT licensed, described as working on mobile. Demo: https://paveldogreat.github.io/WebGL-Fluid-Simulation/. The repo ships `script.js` + `dat.gui.min.js`, and the page states no file size or last-update date — [GitHub repo](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)
- **Paper Shaders (paper.design):** open-source WebGL shader library with vanilla (`@paper-design/shaders`) and React (`@paper-design/shaders-react`) packages. It is still pre-1.0, so pin exact versions — [Mintlify docs mirror](https://www.mintlify.com/paper-design/shaders/introduction); license reported as Apache 2.0 — [Val Town README](https://www.val.town/embed/x/dcm31/paper-shaders/README.md) (license text not verified directly)
  - GrainGradient (noise overlay, intensity 0–1), HalftoneDots (dot styles, grid types, grain controls), HalftoneCMYK (CMYK print halftone with per-ink colors) — [Halftone Dots demo](https://shaders.paper.design/halftone-dots), [Halftone CMYK demo](https://shaders.paper.design/halftone-cmyk), [overview](https://www.mintlify.com/paper-design/shaders/shaders/overview)
  - A "Metaballs · Ink Drops" React background adapted from Paper Shaders (Apache-2.0) — [21st.dev](https://21st.dev/@paper-design/components/metaballs-ink-drops.md)
- **Other ready-made ink shader components (examples or inspiration):**
  - "Dye Whorl": full-bleed WebGL ink-diffusing-in-water with billowing plumes, drifting sources and a pointer that stirs the fluid — [21st.dev](https://21st.dev/@nikolas-sapa/components/dye-whorl.md)
  - "Interactive Ink Shader Background": raw WebGL2 React, click to drop ink that spreads, no three.js, MIT — [21st.dev](https://21st.dev/@kedhareswer/components/anodized-ink.md)
  - "Celestial Ink shader", an ink + cosmic mashup directly relevant to the planet/galaxy angle — [21st.dev](https://21st.dev/@dhileepkumargm/components/celestial-ink-shader)
  - "Paper Ink Background" (Framer): native WebGL, no Three.js, slow fountain-pen ink dispersal over a textured backdrop, adjustable bleed speed and wave density — [Framer Marketplace](https://www.framer.com/marketplace/components/paper-ink-background/)
  - Basement Studio Shader Lab "Ink" effect (smeared glow, fluid bleed on edges) — [basement.studio](https://eng.basement.studio/tools/shader-lab/community/effects/ink)
  - three.js forum thread collecting ink-drop / water-paint transition resources — [discourse.threejs.org](https://discourse.threejs.org/t/any-resources-on-webgl-ink-drop-water-paint-transition-effect/44504)
- **SVG displacement for ink edges:** Codrops shows feDisplacementMap making text take on a surface texture "while remaining real, searchable, selectable and accessible text" — [Codrops](https://tympanus.net/codrops/?p=37687). Smashing notes that many demos use feTurbulence as the displacement map source — [Smashing Magazine](https://www.smashingmagazine.com/2021/09/deep-dive-wonderful-world-svg-displacement-filtering/). The `scale` attribute of feDisplacementMap sets how aggressive the distortion is — [DEV](https://dev.to/behnam_azimi_9335d5b42517/how-the-electric-border-effect-actually-works-31k8). Reference: [MDN feTurbulence](https://developer.mozilla.org/ja/docs/Web/SVG/Reference/Element/feTurbulence)
- **Scroll-driven animation of filter is compositor-eligible in Safari:** Safari 26.4 runs threaded scroll-driven animations on the compositor for properties like opacity, transform and filter — [WebKit 26.4](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/)

### Inferences
- **Brand expression:**
  - Hero: a fluid-sim "inkblot" that forms from the cursor, or blooms once on load, then settles into a Rorschach-symmetric blot. Rorschach symmetry is cheap in a fragment shader (`uv.x = abs(uv.x - 0.5)`) or by mirroring a canvas with `scale(-1,1)`. I found no dedicated library or live example for Rorschach generative art in this session (see Gaps).
  - Section reveals: animate a `mask-image` (radial gradient or blotchy SVG/PNG mask) scaled with `animation-timeline: view()` so content "soaks" in as ink.
  - Headline edges: a static feTurbulence + feDisplacementMap filter at a low `scale` (≈2–6) on large serif headlines gives a letterpress/bleed edge while keeping the text real. Animating `baseFrequency` every frame is expensive because it repaints the filter on the CPU in most engines (general knowledge, not benchmarked here), so animate sparingly, or only on hover.
  - Galaxy maps: HalftoneDots or HalftoneCMYK over app screenshots of the planet maps reads as "printed atlas", which suits a writing/worldbuilding tool.
- **Performance budget (suggested):** one WebGL context per page; DPR capped at 1.5–2; sim resolution ≤ 256 for the velocity field (Dobryakov's demo exposes SIM_RESOLUTION/DYE_RESOLUTION settings, from background knowledge); pause the render loop with IntersectionObserver when offscreen and on `visibilitychange`; lazy-load the shader chunk after first paint so LCP is the static headline, not the canvas.
- **Fallbacks:**
  - `prefers-reduced-motion: reduce` → a single pre-rendered still or a short poster PNG/AVIF.
  - No WebGL / low-power device (`navigator.hardwareConcurrency`, `deviceMemory` heuristics) → a CSS grain + static blot SVG.
- **Accessibility:** canvases are decorative (`aria-hidden="true"`, no focusable content). Keep text in the DOM, not the canvas, and keep contrast measured against the darkest ink area behind the text.

### Gaps
- No benchmark numbers found for the GPU/CPU cost of feTurbulence + feDisplacementMap or of the Dobryakov sim on mid-range phones. Measure in DevTools on target hardware.
- No source found in this session for Rorschach/mirror generative art libraries or notable live sites. Watercolor-specific shaders (e.g., Kubelka-Munk pigment mixing) were not researched.
- I found no Codrops article specifically on an "ink bleed" shader (the search returned none).
- Paper grain banding: no primary source fetched. General practice (unverified this session) is to dither gradients with a small noise layer, use a tiled 128–256px noise PNG/AVIF at low opacity with `mix-blend-mode: multiply` (light mode) or `screen`/`overlay` (dark mode), and avoid huge full-viewport SVG feTurbulence backgrounds that repaint on scroll.

## Native CSS capabilities and browser support (2026)

### Takeaway
In October 2026, same-document View Transitions, @property, container queries, :has(), masks, blend modes, backdrop-filter and text-wrap: balance are safe baseline. Scroll-driven animations work in Chrome (115+) and Safari (26.0+) but are not yet in stable Firefox (caniuse shows support only at Firefox 161, a future release). Cross-document View Transitions are in Chrome 126+ and Safari 18.2+ and only partial in Firefox 144+. `text-wrap: pretty` is Chrome 117+ and Safari 26+, not Firefox. Every one of these degrades gracefully when wrapped in `@supports`.

### Cited Findings
- **Scroll-driven animations (`animation-timeline`):**
  - caniuse: Chrome 115+; Safari 26.0+; Firefox unsupported through 160, supported at 161 — [caniuse](https://caniuse.com/mdn-css_properties_animation-timeline)
  - As of Firefox 152 (June 2026) the feature was still behind `layout.css.scroll-driven-animations.enabled` in stable — [buildmvpfast](https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026). Another blog claims consistent support across all three browsers, which conflicts with caniuse — [codercops](https://blog.codercops.com/blog/css-view-transitions-scroll-animations-2026)
  - Safari 26.0 shipped them — [WebKit 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/); 26.4 made them threaded (compositor) — [WebKit 26.4](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/); 26.5 fixed range names, paused playback, view-timeline progress near 0/100% and bfcache restore — [WebKit 26.5](https://webkit.org/blog/17938/webkit-features-for-safari-26-5/)
  - WebKit guide and animation-range cheatsheet — [guide](https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/), [ranges cheatsheet](https://webkit.org/blog/17184/so-many-ranges-so-little-time-a-cheatsheet-of-animation-ranges-for-your-next-scroll-driven-animation/)
- **View Transitions:**
  - Cross-document: Chrome 126+, Safari 18.2+, Firefox 143 disabled by default and 144–161 "partial support"; global usage 88.81% — [caniuse](https://caniuse.com/cross-document-view-transitions)
  - Chrome's MPA guide — [Chrome for Developers](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document?hl=en)
  - Safari 26.2 added `document.activeViewTransition` — [WebKit 26.2](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/)
- **Interop 2026 focus areas** (all major engines committed to interoperability work): Anchor Positioning, advanced `attr()`, Container Style Queries, `contrast-color()`, CSS Zoom, Custom Highlights, dialog/popover additions, Media pseudo-classes, Navigation API, Scroll-driven Animations, Scroll Snap, `shape()`, View Transitions (now including cross-document), and others. Safari scored 99.2% in Interop 2025 View Transitions vs. 90.8% overall. Safari shipped `shape()` in 18.4 and container style queries in 18.0. `contrast-color()` shipped in Safari first, then Firefox in 2025 — [WebKit: Announcing Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026/)
- **text-wrap: balance:** Chrome 130 full (114–129 partial), Safari 17.5+, Firefox 121+ — [caniuse](https://caniuse.com/css-text-wrap-balance)
- **text-wrap: pretty:** Chrome/Edge 117+, Safari 26+, Firefox not supported as of early 2026; unsupported browsers fall back to normal wrapping — [savvy.co.il](https://savvy.co.il/en/blog/css/css-text-wrap-pretty-balance/), [CSS Portal](https://www.cssportal.com/css-properties/text-wrap-style.php) (secondary sources, not caniuse)
- **Reduced motion and scroll-linked motion:** in W3C CSSWG discussion, a Chrome animations PM with a vestibular disorder said user-controlled scroll-linked motion is "much less troublesome" than autonomous motion. The same thread notes that forcing reduced motion has, in some cases, made content invisible, so fallbacks must leave content in its final visible state — [W3C public-css-archive](https://lists.w3.org/Archives/Public/public-css-archive/2022Jun/0886.html)

### Inferences
- **Recommended pattern:** gate with `@supports (animation-timeline: view())` and `@media (prefers-reduced-motion: no-preference)`. Default styles must be the end state (fully visible), so Firefox stable and reduced-motion users see finished content. Optionally use GSAP ScrollTrigger as a JS fallback, but that is probably unnecessary for a marketing site.
- **Ink-specific CSS ideas:**
  - `@property --spread` (registered `<percentage>`) animating a `radial-gradient` mask for an ink-spread reveal.
  - `mix-blend-mode: multiply` for ink-on-paper overprint of headlines over imagery.
  - `view-transition-name` on an inkblot logo so it morphs between pages.
  - `shape()` / `clip-path` for blotchy section dividers.
  - `contrast-color()` (where supported) for auto-legible text over accent ink.
- **Cross-document View Transitions** apply only if the site is multi-page (Vite can build multi-page). In the current React SPA, use same-document `document.startViewTransition()` (React 19 also has a `<ViewTransition>` component in canary/experimental; not verified this session).
- **Overused CSS effects to avoid as the main gesture:** backdrop-filter "glass" cards and heavy gradient-mesh backgrounds (see trends section).

### Gaps
- @property, container size queries, :has(), subgrid, CSS masks, mix-blend-mode and backdrop-filter support were not individually re-verified on caniuse this session. From background knowledge they are all cross-browser (Baseline) by 2024–2025; confirm on caniuse if precision matters.
- I did not verify exactly what Firefox's "partial" cross-document View Transition support excludes; caniuse does not specify.
- No primary caniuse/MDN confirmation for `text-wrap: pretty` in Firefox as of October 2026.

## Typography (variable fonts, display serifs, foundries, licensing)

### Takeaway
Fraunces (Google Fonts, OFL) is the standout free choice for an ink brand. Its variable SOFT axis is described by its designers as controlling the "wetness" or "inkiness" of the letterforms, so it can be animated literally as ink. It also has opsz (9–144), wght (100–900) and a binary WONK axis. Velvetyne offers libre experimental display faces, but licenses vary per font (OFL, GPL, CUTE), so check each download.

### Cited Findings
- **Fraunces axes:** opsz 9–144 (default 144), SOFT 0–100 (controls the "wetness" or "inkiness" of the typeface), WONK 0–1 (leaning n/m/h, flagged terminals; auto-substitutes at opsz > 18 and is disabled at ≤18px), wght 100–900 — [Undercase GitHub](https://github.com/undercasetype/Fraunces), [googlefonts/fraunces](https://github.com/googlefonts/fraunces), [Fontsource](https://fontsource.org/fonts/fraunces/about), [Google Fonts](https://fonts.google.com/specimen/Fraunces/about). The Undercase repo was archived (read-only) in September 2024. Older AOSP README mirrors list a pre-release "GOOF" axis, which is outdated.
- **Velvetyne:** French libre foundry for experimental display fonts. Licenses are typically SIL OFL but may be GPL or others, so check each download — [licenseorg guide](https://licenseorg.com/guide/fonts/velvetyne) (third-party). Velvelyne, for example, uses the CUTE licence by Bye Bye Binary — [Velvetyne](https://velvetyne.alwaysdata.net/fonts/velvelyne). The foundry says it is reconsidering what OFL means for its community — [Velvetyne news](https://velvetyne.alwaysdata.net/news/your-next-font-is-not-velvetyne/). Feroniapi (Julienne Richard's redesign of Peter Wiegel's Feronia) was announced March 2026; a 2026 book catalogues 70+ Velvetyne fonts — [Draw Down](https://draw-down.com/products/pre-sale-velvetyne-saved-my-life-libre-fonts-for-everyone-since-2011), [Velvetyne FAQ](https://velvetyne.fr/about/faq/)
- **Oversized type as layout:** a skills page drawing on award-winning sites says oversized type often functions as the layout itself, and scroll- and state-driven motion are central — [skills.sh design-trends](https://www.skills.sh/flitzrrr/frontend-design-skills/design-trends) (secondary, low authority)

### Inferences
- **Signature move:** animate `font-variation-settings: "SOFT"` from 0→100 (and wght) on hero text, either on scroll via `animation-timeline` or on hover, so letters visibly "wet" and bleed. Combine with a subtle feTurbulence edge for a distinctive, on-brand, cheap effect (font variation animation is text re-layout/paint, far cheaper than WebGL).
- **Pairing candidates (from background knowledge, not verified this session):**
  - Instrument Serif (OFL, static, condensed display serif, very fashionable in 2024–25, so risk of looking trendy), Newsreader (OFL variable, opsz), EB Garamond (OFL, classic literary).
  - Body or UI sans: Inter, Geist, or a grotesk.
  - A mono for "writing tool" cues: JetBrains Mono, IBM Plex Mono.
- **Paid foundries (licensing must be checked on each site):** Klim (e.g., Tiempos, Söhne), Commercial Type (Canela, Graphik), Grilli Type (GT Sectra, GT Alpina, GT Super), Pangram Pangram (Editorial New, PP Neue Montreal; free for personal trial, commercial license required).
  - Web licenses are usually priced by monthly pageviews; desktop and app-embedding licenses are separate. That matters if the same font is bundled in the Tauri app.
  - None of these license terms were verified this session.
- **Performance:** subset to Latin, self-host WOFF2, preload only the hero face, `font-display: swap` with a metric-matched fallback (`size-adjust`). A full Fraunces variable file with all axes is relatively large; subset axes if possible (unverified size).

### Gaps
- Foundry license terms (Klim, Commercial Type, Grilli, Pangram) were not fetched; prices and app-embedding terms are unverified.
- File sizes of the Fraunces/Newsreader variable WOFF2 files were not measured.

## Motion libraries (GSAP, Motion, Lenis, Theatre.js, Three.js/R3F, OGL, Rive, Lottie, Spline)

### Takeaway
GSAP is now 100% free (including former Club plugins like SplitText, MorphSVG and ScrollTrigger) for commercial use after Webflow's acquisition. It is the strongest option for complex scroll choreography and SVG ink morphs, but it is about 23 kB and not tree-shakeable. Motion (MIT) is lighter (about 2.5 kB mini, about 17 kB full) and React-native, a better fit for UI micro-interactions in this React 19 project. Lenis is lightweight, but JS smooth scroll has to be wired to reduced-motion manually.

### Cited Findings
- **GSAP:**
  - Webflow made GSAP free for everyone, including commercial use and previously paid Club plugins. The npm `gsap` package includes all bonus plugins. SplitText was rewritten with a 50% size reduction, built-in screen-reader accessibility and masking support — [Webflow blog](https://webflow.com/blog/gsap-becomes-free), [CodePen blog](https://blog.codepen.io/2025/05/05/chris-corner-gsap-more-like-freesap/)
  - `gsap-trial` is deprecated — [npm](https://npmjs.com/package/gsap-trial)
  - Plugin list incl. ScrollTrigger, Flip, DrawSVG, MotionPath, Inertia, CustomEase per a third-party page — [skills.sh](https://www.skills.sh/rshvr/elite-web-design/elite-gsap)
- **Motion vs GSAP:**
  - Motion's own comparison: mini `animate()` ≈2.5 kB, full ≈17 kB; GSAP ≈23 kB and not tree-shakeable — [motion.dev](https://motion.dev/docs/gsap-vs-motion) (vendor source)
  - Third-party figures: GSAP 24 kB core / 45 kB+ with plugins; Motion 2.3 kB mini / 18 kB full; Motion is MIT, while GSAP is free but closed-source with usage restrictions — [learnwithhasan](https://learnwithhasan.com/js-libraries/compare/motion-vs-gsap/)
  - Feature comparison — [motion.dev](https://motion.dev/docs/feature-comparison)
  - React comparison — [Aceternity](https://ui.aceternity.com/blog/motion-vs-gsap-for-react)
- **Lenis:** Thoughtworks Radar describes it as "a lightweight and powerful smooth scrolling library designed for modern browsers" — [Thoughtworks Radar](https://www.thoughtworks.com/radar/languages-and-frameworks/lenis)
  - Accessibility checklists say smooth scrolling should respect motion preferences, with instant scroll as the default or reduced-motion fallback — [frontendchecklist](https://frontendchecklist.io/rules/accessibility/anchor-smooth-scroll)
  - A WordPress.org ticket criticised smooth scroll for adding latency to every navigation — [WordPress Meta Trac](https://meta.trac.wordpress.org/ticket/6610)

### Inferences
- **For inkblot (React 19 + Vite):**
  - Prefer native CSS scroll-driven animations first.
  - Use Motion for React component transitions and gestures.
  - Add GSAP only if you need SplitText (accessible per-letter ink reveals), MorphSVG (blot morphs between shapes, e.g., inkblot → planet), DrawSVG (pen-stroke line drawing of constellations/maps), or ScrollTrigger pinning for a scrubbed product story.
  - Avoid loading both GSAP and Motion on the same page.
- **Lenis:** optional. Skip it unless scroll-synced WebGL needs it. If used, disable it under `prefers-reduced-motion`, and never hijack keyboard/anchor scrolling.
- **3D and authored animation (background knowledge, not verified this session):**
  - Three.js/R3F is heavy (~150 kB+ min for three); use it only if showing a 3D galaxy.
  - OGL (~20–30 kB) is a minimal WebGL alternative well-suited to a single fullscreen ink shader.
  - Theatre.js gives a timeline editor for choreographing 3D/scroll scenes.
  - Rive: interactive vector state machines with a small runtime and WASM. Good for an animated inkblot mascot or logo that reacts to hover.
  - Lottie: After Effects JSON; dotLottie is smaller. Heavier on CPU for complex files.
  - Spline: easy 3D, but its runtime and scene files are large and hurt LCP; avoid for the hero.

### Gaps
- Bundle sizes for Three.js, OGL, Rive, Lottie, Spline and Theatre.js were not verified this session.
- I could not confirm from Lenis's docs whether it auto-respects `prefers-reduced-motion`.
- GSAP's exact current license text (the "usage restrictions", e.g., a no-competing-with-Webflow clause) was not fetched; review https://gsap.com/standard-license before use.

## Interactive product demos

### Takeaway
I found no sourced 2026 guidance specific to interactive demos in this session. The recommendations below are inferences. For a Tauri app, the most distinctive and on-brand option is a live, sandboxed web build of a small slice of the app (e.g., a mini planet map or a single editable "page" whose text bleeds in as ink), backed by scroll-scrubbed annotated screenshots.

### Cited Findings
- Scroll-driven animations with `view()` and `animation-range` can scrub transforms/opacity of layered elements natively, compositor-threaded in Safari 26.4+ — [WebKit 26.4](https://webkit.org/blog/17862/webkit-features-for-safari-26-4/), [WebKit ranges cheatsheet](https://webkit.org/blog/17184/so-many-ranges-so-little-time-a-cheatsheet-of-animation-ranges-for-your-next-scroll-driven-animation/)
- GSAP ScrollTrigger (now free) is the standard JS tool for pinned, scrubbed sequences — [Webflow blog](https://webflow.com/blog/gsap-becomes-free)

### Inferences
- **Live mini-app:** a Tauri front end is web tech, so a stripped-down React component of the map or editor could be embedded directly. Lazy-load it on interaction ("Try the map") so it doesn't hurt LCP, and provide keyboard controls and a static screenshot fallback.
- **Layered "exploded" UI:** split app screenshots into 3–5 layers (sidebar, editor, map canvas, overlays) and separate them on Z with CSS 3D transforms driven by `animation-timeline: view()`. Annotate with hairline leader lines drawn as SVG strokes (DrawSVG or `stroke-dashoffset` scrubbed by scroll), which reads as a pen drawing.
- **Scroll-scrubbed video:**
  - Encode with frequent keyframes (or use an image sequence on canvas). Seeking long-GOP H.264 on scroll is janky.
  - Budget ≤2–4 MB, AVIF/WebP poster, `preload="none"` until near the viewport.
  - Respect reduced motion by showing the poster and controls.
- **Accessibility:** every demo needs a text equivalent (caption/feature list). Don't trap scroll; pinned sections should be short.

### Gaps
- No live examples (URLs) of exceptional desktop-app marketing sites with embedded demos were collected this session (e.g., Linear, Raycast, Arc, Obsidian, Craft would be good references to verify).

## 2025–2026 trend reports: fresh vs. overdone

### Takeaway
I found no primary Awwwards, Figma, Webflow or Smashing 2026 trend report in this session; only secondary blogs. Those consistently point to a 2026 move toward human warmth (texture, imperfection), oversized type as layout, scroll- and state-driven motion, and practical 3D. That favours an ink/paper aesthetic. Bento grids, glassmorphism and gradient blobs are widely seen as generic (an inference, not sourced this session).

### Cited Findings
- Trend toward "warmth through color, texture, and small imperfections" — [wannathis.one](https://wannathis.one/blog/web-design-trends-2026)
- 3D on the web is practical in 2026 thanks to better WebGL performance and maturing Three.js libraries; neobrutalism in 2026 coexists with accessibility and conversion goals — [madegooddesigns](https://madegooddesigns.com/web-design-trends/)
- AI as a design partner, including fully AI-generated sites featured on Awwwards — [reallygooddesigns](https://reallygooddesigns.com/web-design-trends-2026/)
- Oversized type as layout; scroll- and state-driven motion central to award-winning sites — [skills.sh](https://www.skills.sh/flitzrrr/frontend-design-skills/design-trends)
- These are secondary, SEO-style blogs; treat them as weak signals.

### Inferences
- **Fresh and on-brand for inkblot:**
  - Tactile analog textures (paper grain, halftone, letterpress edges).
  - Editorial layouts with oversized variable serifs.
  - A single bold generative hero (an ink sim) rather than many effects.
  - Monochrome with one spot-ink accent.
  - Print-inspired details (registration marks, CMYK misregistration, marginalia/footnotes as UI).
- **Overdone or generic in 2026:**
  - Bento grids of feature cards and glassmorphic cards.
  - Purple/blue gradient blobs and mesh gradients.
  - Generic 3D "floating device" mockups.
  - Hero-to-logo-wall SaaS template, and "AI-sparkle" visual language.
  - Note: AI-generated sites converge on exactly these looks, so avoiding them is a differentiator.
- **Neobrutalism** is likely past peak; ink-brutalism (raw black blots, stark serif) could sit near it while feeling more literary.

### Gaps
- No primary Awwwards, Figma (Config), Webflow or Smashing 2026 trend reports were retrieved. These need direct fetches to substantiate the "overdone" list.

## Dark/light mode, color systems for ink, grain without banding

### Takeaway
I found little sourced material here. The CSS primitives exist and are Interop-tracked (`contrast-color()`), but palette guidance below is inference. An ink brand naturally maps to "ink-on-paper" for light mode and "paper-on-ink" (or luminous ink in a night-sky cosmos) for dark mode, with one or two pigment accents.

### Cited Findings
- `contrast-color()` shipped in Safari (first) and Firefox in 2025 and is an Interop 2026 focus area, so it is useful for auto-legible text on accent inks once Chrome ships — [WebKit Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026/)
- Paper Shaders GrainGradient provides animated noise with adjustable intensity, as an alternative to static grain images — [Mintlify docs](https://www.mintlify.com/paper-design/shaders/shaders/overview)
- HalftoneCMYK provides per-ink color control, useful for a "printed" accent system — [shaders.paper.design](https://shaders.paper.design/halftone-cmyk)

### Inferences
- **Palette sketch:**
  - Ink black: a warm or blue-black like #0E0E12, not pure #000.
  - Paper: warm off-white like #F4EFE6.
  - Accents named after real inks: iron-gall blue-black, sepia, vermilion/cinnabar red (classic rubrication), and a cosmic "nebula" ink (deep ultramarine or violet) for the galaxy-map section.
  - Define them in OKLCH so light and dark variants keep perceptual lightness.
  - Use `light-dark()` and `color-scheme` for theming. These are Baseline from background knowledge, not verified this session.
- **Grain without banding:** add a 1–2% noise or dither layer on top of large dark gradients. Prefer a tiny tiled noise texture over a full-viewport live SVG filter. Avoid `backdrop-filter` + grain over scrolling content, because repaints are costly.
- **Accessibility:** keep body text WCAG AA (4.5:1) against both paper and ink. Grain overlays must be `pointer-events: none` and low enough in opacity not to reduce contrast. Honor `prefers-contrast: more` by removing textures.

### Gaps
- No primary sources fetched on gradient banding or dithering techniques, OKLCH palette tooling, or `light-dark()` support. These need verification.
