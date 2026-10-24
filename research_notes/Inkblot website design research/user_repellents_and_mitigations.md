# User Repellents on Design-Forward Landing Pages, and Mitigations (for the inkblot download site)

Research date: 2026-10-14. Verification legend: **[V]** = verified this session against the source page or a direct search summary of it; **[R]** = canonical reference cited from prior knowledge, URL given but not re-fetched this session. Re-check [R] items before quoting exact wording.

---

## 1. Performance: load time vs bounce/conversion; Core Web Vitals; heavy assets

### Takeaway
Speed is the best-quantified repellent. The strongest primary data (Deloitte/Google 2020; web.dev CWV case studies) shows conversion gains from even 0.1s improvements, and the widely cited "53% leave after 3s" figure is real but dates from 2016 mobile data. An avant-garde site with WebGL, video, and multiple display fonts carries the most risk on LCP and INP. Every heavy effect should load after the hero text and CTA have rendered.

### Cited Findings
- **Google/DoubleClick "Need for Mobile Speed" (Sept 2016):** 53% of mobile site visits are abandoned if a page takes longer than 3 seconds to load. The study analyzed more than 10,000 mobile domains. **[V]** It is dated (2016, mobile, 3G-era networks), so frame it as directional. — [MediaPost, Sept 19 2016](https://www.mediapost.com/publications/article/284398/many-visitors-abandon-mobile-sites-if-load-time-to.html); [Marketing Dive](https://www.marketingdive.com/news/google-53-of-mobile-users-abandon-sites-that-take-over-3-seconds-to-load/426070/)
- **Think with Google benchmarks (2017):** As page load time goes from 1s to 7s, the probability of a mobile visitor bouncing increases 113%. The same piece cites an average mobile landing page load of 22s. **[V]** The often-repeated "1s→3s = +32% bounce" figure comes from the same Google series, but this session found it only in secondary blogs, so treat it as unverified. — [Think with Google](https://thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks)
- **Deloitte Digital / Google "Milliseconds Make Millions" (May 2020):** Data from 37 retail, travel, luxury and lead-gen brands (EU/US) over 4 weeks, more than 30M sessions. A 0.1s mobile speed improvement produced:
  - retail conversions +8.4% and AOV +9.2%
  - travel conversions +10.1%
  - luxury page views per session +8.6%
  
  The gains appeared only when every page in the journey improved by 0.1s on all four metrics measured. **[V]** — [Deloitte Ireland](https://deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html); [web.dev summary](https://web.dev/case-studies/milliseconds-make-millions); [PDF](https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf)
- **Portent "Site Speed is (Still) Impacting Your Conversion Rate" (2022):**
  - E-commerce conversion peaks at 1–2s load.
  - Average conversion rate is 3.05% at 1s and 0.67% at 4s.
  - Conversion drops about 0.3 percentage points per extra second.
  
  The "0–4 seconds is best" framing found in many blogs appears to come from Portent's 2019 study. **[V]** — [Portent](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm). A desktop figure attributed to the same report (39% goal conversion at 1s vs 18% at 6s) could not be confirmed. — [DesignRush (secondary)](https://www.designrush.com/agency/web-development-companies/trends/website-speed-statistics)
- **web.dev Core Web Vitals business-impact roundup** (Google-curated case studies; self-reported by companies) **[V]**:
  - Vodafone Italy: LCP −31% → +8% sales.
  - Redbus: CLS 1.65→0 → +80–100% mobile conversion.
  - Lazada: LCP 3× faster → +16.9% mobile conversion.
  - NDTV: LCP halved → 50% better bounce rate.
  - Agrofy: LCP −70% → 76% less load abandonment.
  - AliExpress: CLS 10× better → 15% lower bounce.
  - GEDI: CLS −77% → 8% less bounce.
  
  Source: [web.dev/case-studies/vitals-business-impact](https://web.dev/case-studies/vitals-business-impact). The claim that users are "24% less likely to abandon" when sites meet CWV is widely repeated but is **not** on that page. It traces to a 2020 Chromium blog post and is unverified here. — [wpostats (secondary)](https://wpostats.com/tags/core-web-vitals/)
- **Contentsquare (secondary report):** Across 997 sites, users with good INP converted about 25% better than users with poor INP. Only secondary reporting was found. — [wpostats](https://wpostats.com/tags/core-web-vitals/)
- **CWV thresholds, current as of 2026** **[V]**:
  - "Good" means LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1, assessed at the 75th percentile of real-user page loads.
  - INP replaced FID in March 2024.
  - One blog claims Google tightened LCP in March 2026. No corroboration was found and other 2026 sources still cite 2.5s, so treat that claim as false or unverified.
  
  Sources: [unlighthouse](https://unlighthouse.dev/learn-lighthouse/core-web-vitals.md); [corewebvitals.io](https://corewebvitals.io/core-web-vitals); [techlion (unverified claim)](https://www.techlion.dev/blog/website-speed-core-web-vitals-nj-small-business); canonical: [web.dev/articles/vitals](https://web.dev/articles/vitals) **[R]**
- **HTTP Archive Web Almanac 2025:**
  - Custom web fonts can add several hundred KB when multiple weights are used.
  - About 72% of sites self-host at least one font file.
  
  **[V]** — [Page Weight chapter](https://almanac.httparchive.org/en/2025/page-weight); [Fonts chapter / ebook](https://cdn.httparchive.org/v1/static/almanac/ebooks/web_almanac_2025_en.pdf). Median page weight is about 2.3–2.6 MB (mobile/desktop), per secondary summaries that disagree slightly. Median JavaScript is about 613 KB (2024 figure, also secondary). — [captaindns](https://www.captaindns.com/en/blog/median-web-page-weight-2025)
- **Video and fonts in CWV (canonical guidance, [R]):**
  - Chrome counts a video's poster image, or its first frame, as the LCP candidate. A hero video without a poster therefore delays LCP. — [web.dev LCP](https://web.dev/articles/lcp)
  - FOIT (invisible text while fonts load) delays text LCP.
  - `font-display: swap` or `optional` combined with metric-matched fallbacks (`size-adjust`, `ascent-override`) avoids FOIT and limits the CLS a font swap causes. — [web.dev font best practices](https://web.dev/articles/font-best-practices)

### Inferences
- inkblot is a single landing/download page with no catalog, so the relevant budget is time until the headline, product screenshot, and download button are visible and usable. Target LCP under 2.0s on a mid-tier mobile device on 4G, with the hero text as the LCP element rather than a WebGL canvas or video.
- WebGL and three.js-style hero scenes mostly hurt INP and TBT, because shader compilation and main-thread JS run during load. LCP suffers too if the canvas is the largest element. Load them after `load`/idle, and treat them as decoration, never as content.
- The speed studies are e-commerce heavy. Download sites likely follow the same direction, but the magnitude has not been measured.

### Gaps
- No public study was found that isolates WebGL hero scenes, or the bounce cost of a specific JS framework, on landing pages.
- No primary data was found on download-conversion vs speed for software sites.
- Akamai's often-quoted figures (2017: 100ms delay → −7% conversion; 2s delay → +103% bounce) were not re-verified this session. Treat them as dated and vendor-sourced.

---

## 2. Scroll-jacking, smooth scroll, parallax, horizontal scroll, custom cursors, preloaders/intros

### Takeaway
NN/g's 2023 usability study found that scrolljacking does more harm than good: users became disoriented, some thought the site was broken, and some left. It is tolerable only when it is short, below the fold, keeps the scroll direction, holds no important text, and is turned off on mobile. Splash/intro animations and auto-advancing carousels have a long record of ignored-or-abandoned evidence, though most of it is older.

### Cited Findings
- **NN/g "Scrolljacking 101" (Sara Paul, Aug 6 2023)** **[V]**:
  - Most participants were at least mildly disoriented. Some clicked away or refreshed the page.
  - Long scrolljacks made users think the site was broken.
  - Task-focused users were the most annoyed. One said he would "get severely agitated and just move on."
  - Horizontal scrolljacks containing text caused the most severe problems.
  - Problems were amplified on mobile.
  - Scroll that was too fast made users miss content; scroll that was too slow caused fatigue.
  - Quote: "Our research findings tell us that scrolljacking leads to more user pain than benefits."
  - Acceptable when it adds functional value (progressive disclosure), is short, sits below the fold, does not change direction, avoids important text, and is not carried over to mobile.
  
  Source: [NN/g](https://www.nngroup.com/articles/scrolljacking-101/)
- **Practitioner consensus (opinion, not studies):**
  - Scrolljacking breaks users' predictable-control contract and penalizes skimmers and power users. — [WebDesignerDepot](https://webdesignerdepot.com/how-scrolljacking-breaks-ux-fundamentals/)
  - Forum reports describe motion sickness and nausea from scroll effects. — [Webflow forum](https://discourse.webflow.com/t/easing-on-scroll-scroll-hijack/103242)
  - Vestibular, motor, and keyboard users can be blocked by it. — [Red Sky Studios](https://redskystudios.co.uk/news/scroll-jacking-annoying-when-abused-delightful-when-done-right)
- **Carousels/auto-forwarding (NN/g 2013 study, via secondary sources):** Users failed to find content that sat in auto-rotating carousels, treated carousels as ads (banner blindness), lacked time to read, and felt out of control. NN/g advises not to auto-forward on mobile. — [Texas A&M web guidelines citing NN/g](https://web.tamu.edu/?p=1845); [Yale Usability](https://usability.yale.edu/usability-best-practices/hero-imagescarousels); NN/g original: [Auto-Forwarding Carousels and Accordions Annoy Users](https://www.nngroup.com/articles/auto-forwarding/) **[R]**
- **Splash/intro screens:** No current NN/g study surfaced. The historical consensus from the Flash era was "almost always useless." One consultant estimated that 25% or more of visitors leave at the splash page, but this is unverified anecdote. — [SIGIA-L archive 2004](https://asist-archive.ischool.illinois.edu/sigia-l/2004-May/010081.html); [John Bokma](https://johnbokma.com/websitedesign/splashorintroscreen.html)
- **Early-exit dynamics:** Web page dwell times follow a Weibull distribution with "negative aging": the first 10–20 seconds are when users are most likely to leave, and pages must communicate value immediately. Source is Liu, White & Dumais (Microsoft Research, 2010), summarized by NN/g in 2011. **[R]** — [NN/g "How Long Do Users Stay on Web Pages?"](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)

### Inferences
- A preloader or intro animation spends the most fragile 10 seconds on nothing. If inkblot has an intro, it should be under about 1s, should not block interaction, should be skipped on repeat visits, and should be skipped under reduced motion. Better still is an "intro" that is just the hero settling in while text is already readable.
- Smooth-scroll libraries (Lenis/Locomotive-style) are a mild form of scrolljacking: they change scroll rate. If used at all, disable them on touch and under `prefers-reduced-motion`, and keep native scrollbars, anchor links, and keyboard scrolling working.
- Custom cursors: no controlled study was found. Risks are hiding the system cursor (low-vision users, users with OS cursor enlargement), input lag, and no effect on touch. Augment the cursor (follower or hover state) rather than replace it.
- Parallax: no recent quantitative study was found. Its harms are vestibular triggers and the jank and INP cost of scroll handlers. Native scroll-driven animations avoid the jank but not the vestibular issue.

### Gaps
- No quantitative A/B data on custom cursors, horizontal-scroll sections, or preloaders vs none.
- NN/g has older parallax and splash-page articles that were not retrieved this session.

---

## 3. Motion, accessibility, and WCAG 2.2; low-contrast "aesthetic" text; legal risk

### Takeaway
Low-contrast text is the most common accessibility failure on the web (83.9% of top home pages in 2026), and the gray-on-gray, hairline-type look of "elegant" sites is exactly what drives it. The motion requirements are clear:
- auto-moving content that lasts more than 5s needs pause/stop/hide (Level A)
- interaction-triggered motion should be disableable (AAA, but honor `prefers-reduced-motion`)

US ADA web lawsuits keep rising, and the EU Accessibility Act has applied since June 2025.

### Cited Findings
- **WebAIM Million 2026 (Feb 2026, top 1M home pages, automated testing)** **[V]**:
  - Low-contrast text on 83.9% of pages, up from 79.1% in 2025, averaging 34 instances per page.
  - Other top failures: missing alt text 53.1%, missing form labels 51%, empty links 46.3%, empty buttons 30.6%, missing lang 13.5%.
  - Automated tests undercount, so the real rates are higher.
  
  Sources: [Priority Pixels summary](https://prioritypixels.co.uk/insights/web-accessibility-is-getting-worse-according-to-the-2026-webaim-million-report/); primary: [webaim.org/projects/million](https://webaim.org/projects/million/) **[R]**
- **WCAG 2.2 criteria relevant to experimental styling** (W3C, 2.2 published Oct 2023) **[R]**:
  - **1.4.3 Contrast (Minimum), AA:** 4.5:1 for body text; 3:1 for large text (≥24px, or ≥18.66px bold). — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
  - **1.4.11 Non-text Contrast, AA:** 3:1 for UI components and focus indicators. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
  - **2.2.2 Pause, Stop, Hide, Level A:** moving, blinking, or scrolling content that starts automatically, lasts more than 5 seconds, and is shown alongside other content needs a mechanism to pause, stop, or hide it. This applies to looping hero video, marquee text, and ambient WebGL. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
  - **2.3.1 Three Flashes, A:** nothing flashes more than 3 times per second. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
  - **2.3.3 Animation from Interactions, AAA:** motion triggered by interaction (scroll, parallax, hover) can be disabled unless it is essential. Techniques reference `prefers-reduced-motion`. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
  - **2.4.7 Focus Visible (AA)** and **2.4.11 Focus Not Obscured (Minimum) (AA, new in 2.2):** focus must not be hidden by sticky headers, cookie banners, or overlays. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
  - **2.5.8 Target Size (Minimum), AA, new in 2.2:** pointer targets at least 24×24 CSS px, or adequately spaced. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
  - **1.4.4 Resize Text / 1.4.12 Text Spacing:** tiny type and fixed-size viewport tricks can fail these. — [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- **`prefers-reduced-motion`** is a CSS media query reflecting the OS "reduce motion" setting, supported in all major browsers. **[R]** — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion); [web.dev](https://web.dev/articles/prefers-reduced-motion)
- **Vestibular prevalence:** about 35% of US adults aged 40+ have experienced some vestibular dysfunction (NHANES 2001–2004, Agrawal et al. 2009). Parallax, zooming, and scroll-linked motion can trigger dizziness and nausea. **[R]** — [Vestibular Disorders Association](https://vestibular.org/article/what-is-vestibular/about-vestibular-disorders/); [A11y Project on reduced motion](https://www.a11yproject.com/posts/understanding-vestibular-disorders/)
- **Legal risk** **[V]**:
  - UsableNet counted about 4,928–5,000+ US digital accessibility lawsuits in 2025 (federal and state). Its midyear report had 2,019 in H1 2025 and projected +20% over 2024.
  - Seyfarth Shaw counted 3,117 federal website suits in 2025, up 27% from 2,452.
  - Figures differ by method.
  
  Sources: [Newswire/UsableNet](https://www.newswire.com/news/digital-accessibility-lawsuits-surge-in-2025-22618502); [Fox Rothschild](https://www.foxrothschild.com/events/ada-website-lawsuit-trends-what-2025-filings-mean-for-2026)
- **European Accessibility Act:** applies from 28 June 2025 to many consumer digital services in the EU, referencing EN 301 549 (≈ WCAG 2.1 AA). Microenterprises (<10 staff, ≤€2M turnover) providing services are exempt. **[R]** — [European Commission](https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en)

### Inferences
- A solo indie developer's legal exposure is low in absolute terms: suits concentrate on e-commerce and repeat defendants. The bigger cost is users who can't read pale thin text on a high-DPI screen or in sunlight.
- Elegance does not require low contrast. Pick an off-black/off-white base at ≥7:1, reserve muted tones for large display type (≥3:1), and get the "aesthetic" from typeface, scale, and spacing.
- Treat `prefers-reduced-motion: reduce` as a mandatory alternate design, not as "turn everything off": swap motion for crossfades or static states.

### Gaps
- No quantitative data was found linking low-contrast text to bounce or conversion specifically.

---

## 4. Clarity, content, and trust repellents: vague headlines, mystery-meat nav, missing screenshots/pricing, unsigned installers, pop-ups, cookie banners, autoplay audio, dark patterns

### Takeaway
On a download page, the biggest non-speed repellents are:
- not being able to tell what the product is (clever headline, no screenshot)
- missing upfront facts: price/free, platforms, size, version, privacy
- installer friction: SmartScreen/Gatekeeper warnings

NN/g's trust research puts "upfront disclosure" next to design quality. Interruptions such as modals and autoplay audio are consistently rated among the most hated web behaviors.

### Cited Findings
- **NN/g "Trustworthiness in Web Design: 4 Credibility Factors" (Harley, May 2016)** **[V]** names four factors:
  1. Design quality: "The first step to garnering trust is to make your site appear legitimate and professional"; "Typos, broken links, and other mistakes quickly degrade credibility."
  2. Upfront disclosure of pricing, fees, contact details, and policies. Hiding them breeds distrust.
  3. Comprehensive, correct, and current content.
  4. Connection to the rest of the web: reviews, social, press. "people have learned to trust these external sources more than company-sponsored content."
  
  A gated page that asked for information before showing content "left a negative impression." Source: [NN/g](https://www.nngroup.com/articles/trustworthy-design/)
- **Vague value propositions:** No primary NN/g source was retrieved this session. Marketing sources argue that a vague value proposition is as bad as none, and recommend a "5-second test" (a visitor should know what it is and why it matters within 5 seconds). A claimed "+17.04% from a clear headline" figure is unsourced, so do not cite it. — [MarketingSherpa blog](https://sherpablog.marketingsherpa.com/?p=29471); [novapixeldev (unsourced stats)](https://novapixeldev.com/blog/homepage-5-second-test-why-youre-bleeding-visitors-and-how-to-fix-it-in-a-weekend). Relevant canonical NN/g pieces: "Mystery-meat navigation" and "Clear vs clever" microcopy guidance. **[R]** — [NN/g on vague labels / information scent](https://www.nngroup.com/articles/information-scent/)
- **Unsigned installers** (practitioner sources; no abandonment data found) **[V]**:
  - Without signing and notarization, macOS Gatekeeper blocks the app and Windows SmartScreen warns on download. A guide argues this costs "exactly the cautious buyers you want."
  - An OV Authenticode certificate costs about $200/yr and builds SmartScreen reputation over weeks; EV certificates are trusted sooner.
  - Unsigned Electron builds lose the electron-updater path.
  
  Sources: [learnwithhasan Electron signing docs](https://learnwithhasan.com/boilerplates/electron-starter-template/docs/code-signing/); [shinyelectron code-signing vignette](https://r-pkg.thecoatlessprofessor.com/shinyelectron/articles/code-signing.html); indie anecdote of friends put off by warnings: [itch.io forum 2017](https://itch.io/post/123335/view-in-topic). Note: Microsoft changed EV certificates in 2024 so they no longer bypass SmartScreen reputation automatically. **[R]**, verify against current Microsoft docs.
- **Hero video vs static (A/B evidence is mixed)** **[V]**:
  - Omnisend: replacing the hero image with a product video raised sign-ups 21% (explainer content).
  - Fathom (VWO): a static image beat a testimonial video, +3.92% vs +0.85% "Find a Community" searches at 99.99% confidence.
  - Lesson: video that *explains the product* can win; decorative or ambient video has no evidence of lift and costs speed.
  
  Sources: [Optibase/Omnisend](https://optibase.io/ab-testing-ideas/video-vs-image); [VWO case study](https://vwo.com/blog/image-outperforms-video-increases-monthly-revenue/)
- **Pop-ups/interstitials, autoplay audio, cookie banners, dark patterns:** Not individually re-verified this session. Canonical references **[R]**:
  - NN/g "The Most Hated Online Advertising Techniques" (2017): pop-ups and autoplaying video with sound ranked worst. — [NN/g](https://www.nngroup.com/articles/most-hated-advertising-techniques/)
  - Google's intrusive-interstitials guidance (mobile ranking signal since 2017, later folded into page experience). — [Google Search Central](https://developers.google.com/search/docs/appearance/avoid-intrusive-interstitials)
  - Autoplay audio fails WCAG 1.4.2 Audio Control (Level A) if it plays longer than 3s without a control. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
  - Browsers block unmuted autoplay by default. — [Chrome autoplay policy](https://developer.chrome.com/blog/autoplay)
- **The "8-second attention span" myth (flag; do not cite as fact)** **[V]**:
  - The figure traces to a 2015 Microsoft Canada consumer-insights report footnote sourced to "Statistic Brain," which offered no underlying research. BBC More or Less found no evidence for it.
  - Psychologists say "average attention span" isn't a meaningful metric (Gemma Briggs, Open University), and Edward Vogel reports that attention measures in students are stable across decades.
  - A 2022 KCL survey found half of UK adults believe the myth.
  
  Sources: [UX Psychology](https://uxpsychology.substack.com/p/the-attention-span-myth); [Univ. Wisconsin "Goldfish MythBusting"](https://internet.psych.wisc.edu/wp-content/uploads/532-Master/532-UnitPages/Unit-09/Goldfish_MythBusting.pdf); [MediaCat](https://mediacat.uk/are-we-becoming-fish-brained/amp). Use the NN/g dwell-time data (section 2) instead.

### Inferences
Minimum trust kit for an indie desktop app, above or near the fold:
- a one-line literal description of what inkblot does
- a real screenshot or short muted loop of the UI
- "Free" (or the price) stated explicitly
- OS and architecture badges, version number, file size, release date
- a link to the changelog and the source/GitHub if open source
- a short privacy statement ("no telemetry" or exactly what is collected)
- a named author or contact
- signed/notarized installers, or explicit instructions explaining the warning if not signed
- checksums

Avoid on first visit: newsletter modals, cookie banners (unnecessary if the site uses no tracking cookies; cookieless analytics avoids the banner entirely), and any audio.

### Gaps
- No measured data on how much SmartScreen/Gatekeeper warnings reduce install completion.
- No primary A/B data on clever vs literal headlines for software download pages.

---

## 5. Mobile visitors to a desktop-app site

### Takeaway
Roughly half of global web traffic is mobile (StatCounter mid-2026: mobile about 50–53%). Visitors will arrive on phones from social links even though they can't install. A broken or heavy mobile experience wastes that traffic, and NN/g found experimental scroll effects are worse on mobile.

### Cited Findings
- **StatCounter worldwide platform share:** July 2026 mobile 53.37% / desktop 46.63%; June 2026 about 52.2% / 47.8%. Monthly values vary, and a September figure of 60% looks like an outlier. **[V]** — [StatCounter](https://gs.statcounter.com/platform-market-share/desktop-mobile/worldwide)
- **NN/g:** scrolljacking problems are "amplified" on mobile and should not be carried over. **[V]** — [NN/g](https://www.nngroup.com/articles/scrolljacking-101/)
- **Mobile speed matters most:** Google's 53%/3s and Deloitte's 0.1s data are both mobile-specific. **[V]** — see section 1 sources.

### Inferences
- Traffic share for a desktop dev/creative tool will skew more desktop than the global figure (dev-tool and productivity audiences use desktops more), but social and link-aggregator referrals will be mobile-heavy.
- Best handling on mobile:
  - Detect the device and swap the primary CTA from "Download" to "Email me the link" / "Send to my desktop" / "Copy link", or show a clear "Available for macOS · Windows · Linux" line.
  - Keep the page lightweight: no WebGL on mobile, a static poster instead of video.
  - Don't scrolljack.
  - Make sure screenshots are legible.
- Detect the OS to preselect the right installer on desktop, and always show "Other platforms."

### Gaps
- No public data on mobile share for desktop-software download pages specifically. The inkblot owner should check their own analytics.

---

## 6. Credibility research: Stanford/Fogg and "design look"

### Takeaway
Visual design is the most commonly cited basis for credibility judgments by ordinary users, so polished experimental design *can* raise trust. But it must read as "professional," not "broken" or "a template demo." Experts weigh content, disclosure, and authorship more.

### Cited Findings
- **Stanford Persuasive Technology Lab, "How Do People Evaluate a Web Site's Credibility?" (Fogg et al., 2002):** 2,684 participants evaluated 100 live sites across 10 categories. "Design look" was the most cited factor at 46.1%, followed by information design/structure at 28.5%. **[V]** Caveat: sources disagree on whether 46.1% is the share of *comments* or of *participants*. The Design for Hackers summary treats it as a share of coded comments (with multi-coding). Fogg's quote: "To look good is to be good." Dated (2002). — [InternetNews](https://internetnews.com/marketing/study-for-site-cred-looks-matter); [Design for Hackers](https://designforhackers.com/?p=413); [PMC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4863498)
- **Companion expert study:** health and finance experts weighted unbiased information, author names and credentials, and citations more than appearance. **[V]** — [InternetNews](https://internetnews.com/marketing/study-for-site-cred-looks-matter)
- **Stanford Web Credibility Guidelines (Fogg, 2002) [R]:**
  - make it easy to verify accuracy
  - show there's a real organization/person behind the site
  - highlight expertise
  - show honest, trustworthy people
  - make it easy to contact you
  - design professionally
  - make it easy to use and useful
  - update often
  - limit promotional content
  - avoid even small errors
  
  Source: [Stanford Web Credibility Project](https://credibility.stanford.edu/guidelines/index.html)
- **NN/g (2016):** design quality is the first trust factor. When offerings are similar, design becomes "a major deciding factor." **[V]** — [NN/g](https://www.nngroup.com/articles/trustworthy-design/)

### Inferences
- For inkblot, avant-garde design is an asset if it pairs with Fogg-style signals of a real person and real product: author name, changelog cadence, contact, a working product preview.
- Small errors (broken links, a 404 download, typos, an outdated version number) erase the credibility the design earns.

### Gaps
- No post-2015 replication of Fogg's design-look study was found. The research on users' sub-second aesthetic first impressions (Lindgaard et al. 2006, 50ms; Google 2012 "visual complexity and prototypicality") is relevant but was not re-verified this session. **[R]** — [Google Research 2012](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/)

---

## 7. Case studies and A/B evidence: design-forward helping or hurting

### Takeaway
There is little rigorous public A/B evidence about "avant-garde" design as such. The evidence clusters around speed (strong), scrolljacking (negative, qualitative), and video (mixed, depends on whether the video explains the product).

### Cited Findings
- **Video:** Omnisend explainer video +21% sign-ups; Fathom static image beat testimonial video. **[V]** — [Optibase](https://optibase.io/ab-testing-ideas/video-vs-image); [VWO](https://vwo.com/blog/image-outperforms-video-increases-monthly-revenue/)
- **Layout stability:** Redbus eliminated CLS (1.65→0) and saw +80–100% mobile conversion. AliExpress's 10× CLS improvement cut bounce 15%. These are relevant because animated or entrance-transitioned layouts often cause CLS. **[V]** — [web.dev](https://web.dev/case-studies/vitals-business-impact)
- **Speed:** NDTV halved LCP and improved bounce 50%. Agrofy cut LCP 70% and load abandonment 76%. **[V]** — [web.dev](https://web.dev/case-studies/vitals-business-impact)
- **Visual complexity:** Google's 2012 research found that low visual complexity and high prototypicality (looking like the expected category) yield the best first-impression aesthetic ratings. This is a direct tension with "avant-garde." **[R]** — [Google Research](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/)

### Inferences
- Be experimental in *treatment* (type, color, motion, texture) while staying prototypical in *structure*: logo top-left, nav top, headline + CTA + screenshot in the hero, standard footer. That gets the attention benefit without paying the orientation cost.

### Gaps
- No public A/B tests were found comparing Awwwards-style experimental landing pages to conventional ones on conversion. Most "design-forward wins" content is agency marketing without controls.

---

## 8. Mitigation techniques specific to experimental design

### Takeaway
Most avant-garde effects can stay if they are:
- progressive: content works with no JS
- deferred: heavy assets load after LCP and on interaction or idle
- native: CSS scroll-driven animations and View Transitions instead of JS scroll handlers
- motion-aware: a designed reduced-motion path

### Cited Findings and Techniques (canonical references, [R] unless marked)
- **Video heroes:**
  - Always set a compressed `poster` (it becomes the LCP candidate) and use `muted playsinline autoplay loop`.
  - Provide a visible pause control (required by WCAG 2.2.2 if the video loops for more than 5s).
  - Serve a static poster under `prefers-reduced-motion`, on `Save-Data`, or on slow connections.
  
  Sources: [web.dev LCP](https://web.dev/articles/lcp); [W3C 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- **WebGL:**
  - Render the hero as HTML/CSS first and add the canvas after `requestIdleCallback`, or when it is in view (IntersectionObserver).
  - Dynamic-`import()` three.js and similar libraries so they stay out of the critical path.
  - Cap device pixel ratio, pause the render loop when off-screen or the tab is hidden, and fall back to a static image on low-end or mobile devices.
  
  INP guidance: break up long tasks, yield to the main thread. — [web.dev INP](https://web.dev/articles/inp); [web.dev optimize long tasks](https://web.dev/articles/optimize-long-tasks)
- **Native scroll-driven animations** (`animation-timeline: scroll()` / `view()`): run off the main thread for compositor-friendly properties (transform, opacity) and need no JS scroll listeners. Chromium has shipped them since 2023; other engines are catching up, so treat them as progressive enhancement. Source: [Chrome for Developers](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
- **View Transitions API:**
  - Same-document transitions are broadly available.
  - Cross-document transitions (`@view-transition { navigation: auto; }`) give app-like page changes with no SPA framework.
  - Wrap them in `@media (prefers-reduced-motion: no-preference)`.
  
  Source: [Chrome for Developers](https://developer.chrome.com/docs/web-platform/view-transitions)
- **Fonts:**
  - Subset to the glyphs used (pyftsubset / glyphhanger), ship WOFF2, and prefer one variable font over multiple static weights.
  - `preload` only the hero face, use `font-display: swap` (or `optional` for non-critical faces), and size-adjust the fallback to avoid CLS.
  
  The Web Almanac notes multiple weights can add hundreds of KB (**[V]**, [Web Almanac 2025](https://almanac.httparchive.org/en/2025/page-weight)). — [web.dev font best practices](https://web.dev/articles/font-best-practices)
- **CLS from entrance animations:** animate only `transform`/`opacity` and reserve space for media (width/height or aspect-ratio). Elements that fade in from `opacity:0` can delay LCP if the LCP element starts hidden, so keep the headline visible at first paint. — [web.dev CLS](https://web.dev/articles/cls)
- **Reduced motion as a designed mode:** use `@media (prefers-reduced-motion: reduce)` to replace parallax and scroll effects with static layouts and crossfades, and stop autoplay. Optionally add an on-page motion toggle, which satisfies 2.2.2 and 2.3.3 even for users who haven't set the OS preference. — [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion); [W3C 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- **Performance/motion budget (practice, not a standard):**
  - Set budgets in CI, e.g. Lighthouse CI: LCP ≤ 2.0s, INP ≤ 200ms, CLS ≤ 0.05, JS ≤ 150 KB gz on the critical path, fonts ≤ 100 KB.
  - Allow one signature motion moment per viewport.
  - Keep transitions to about 200–500ms, and never let motion block reading or clicking.
  
  Budget tooling: [web.dev performance budgets](https://web.dev/articles/performance-budgets-101)
- **Scrolljacking alternatives (from NN/g's acceptability conditions, [V]):** if a pinned or sticky storytelling section is used, keep it short and below the fold, keep the vertical direction, put no essential text inside, and disable it on mobile. — [NN/g](https://www.nngroup.com/articles/scrolljacking-101/)

### Inferences
Suggested rule set for inkblot's "avant-garde but converts" page:
1. The HTML-only render must contain a literal headline, a UI screenshot, the download button with OS/version/size/"free," and the trust facts.
2. All motion is additive and respects reduced motion.
3. No scroll override, preloader, modal, or audio.
4. WebGL/video load after LCP, desktop-first, with a poster fallback.
5. Body contrast ≥ 7:1, with experimental color reserved for large display type and accents.
6. Prototypical layout with experimental treatment.
7. Measure field CWV (CrUX or web-vitals.js) and download clicks per visit, and A/B test the hero, e.g. static vs motion.

### Gaps
- Browser-support status for scroll-driven animations and cross-document view transitions in Safari and Firefox as of Oct 2026 was not re-verified this session. Check caniuse before relying on them without fallbacks.
