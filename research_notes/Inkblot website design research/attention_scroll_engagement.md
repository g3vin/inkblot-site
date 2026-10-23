# Capturing Attention & Driving Scroll Engagement on Product Landing Pages (for inkblot)

## 1. First impressions: how fast users judge a site and what visual factors drive positive judgments

### Takeaway
Visual appeal is judged in 17–50 ms, before any copy is read. Low visual complexity combined with a familiar ("prototypical") layout gets the best snap ratings. Separately, a page has roughly 10 seconds to state its value before abandonment risk peaks. An avant-garde look is fine as long as the page is simple and its structure is recognizable as a landing page.

### Cited Findings
- **Lindgaard et al. (2006), *Behaviour & Information Technology* 25:115–126, Carleton University.** Home pages were flashed for 50 ms or 500 ms and rated 1–100 for visual appeal. Ratings at 50 ms correlated well with ratings after longer viewing. The authors concluded that "designers have about 50 milliseconds to make a good impression." Caveat: the study measured *visual appeal only*. Media claims that the impression carries over to perceived usability or credibility are interpretation, not something the study tested. — [websiteoptimization.com summary](https://websiteoptimization.com/speed/tweak/blink/); [MediaPost](https://www.mediapost.com/publications/article/39327)
- **Tuch, Presslaber, Stöcklin, Opwis & Bargas-Avila (2012), *Int. J. Human-Computer Studies* 70(11):794–811, Univ. Basel + Google/YouTube UX.**
  - Study 1 used 119 real website screenshots at 50, 500 and 1000 ms. Study 2 used 17, 33 and 50 ms.
  - Visual complexity (VC) and prototypicality (PT) both shaped aesthetic ratings within 50 ms, and VC did so even at 17 ms.
  - VC is processed first. PT catches up to VC in influence as viewing time grows.
  - Low VC plus high PT was rated most appealing.
  - High complexity hurts even when the layout is familiar.
  - Limitations: lab conditions, a non-representative sample, and company websites only. — [Google Research publication](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/); [Google Research blog (2012)](https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/)
- **Aesthetic-usability effect: Kurosu & Kashimura (1995), Hitachi Design Center.** 252 participants rated 26 ATM interface layouts. Aesthetic ratings tracked *perceived* ease of use more closely than *actual* ease of use. Tractinsky reportedly replicated the study in Israel with stronger results; this comes from a secondary source and was not verified. — [Laws of UX](https://lawsofux.com/aesthetic-usability-effect/); [UX Mag](https://uxmag.com/articles/the-aesthetic-usability-effect-why-beautiful-looking-products-are-preferred-over-usable-but-not-beautiful-ones)
- **The 10-second window.** NN/g, drawing on a Weibull analysis of dwell time by Liu, White & Dumais (2010):
  - The first 10 seconds of a page visit are critical to the stay-or-leave decision.
  - A page must "clearly communicate your value proposition within 10 seconds."
  - After a page survives 10 s, the chance of exit stays high for roughly the next 20 s.
  - This is a rule of thumb from a dwell-time model, not a controlled homepage experiment. — [NN/g, How Long Do Users Stay on Web Pages?](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)

### Inferences
- Two clocks run in sequence.
  - **About 50 ms, visual gestalt:** complexity, polish and familiarity.
  - **About 10 s, comprehension:** what this is and whether it is for me.
  - The hero has to pass both.
- For inkblot's "avant-garde but professional" goal:
  - Spend the avant-garde budget on **typography, color, texture and motion detail**.
  - Keep the **layout skeleton prototypical**: logo and nav at top, headline, subhead, CTA, product visual.
  - Tuch shows that novelty in structure (low PT) costs appeal at first glance, and clutter (high VC) costs even more.
- Because of the aesthetic-usability effect, a polished first view buys tolerance for the rest of the page. It does not substitute for clarity.

### Gaps
- I could not access Lindgaard's full text or exact effect sizes. I found no replication specific to 2020s design styles, dark-mode sites, or desktop-app download pages.
- I found no quantitative data on whether "avant-garde" or unconventional aesthetics specifically help or hurt trust for indie software.

---

## 2. Above the fold: attention distribution, whether the fold still matters, and scanning patterns

### Takeaway
The fold still matters, but its position has moved down. In NN/g's 2018 study:
- 57% of viewing time was above the fold.
- 74% was in the first two screenfuls.
- 81% was in the first three screenfuls.

Users scan headings in a "layer-cake" pattern when the page is well structured, and in an F-pattern when it is not.

### Cited Findings
- **NN/g "Scrolling and Attention" (published Apr 2018).**
  - Method: 120 participants, more than 130,000 fixations, 1920×1080 screens. Page types: news, ecommerce, blogs, FAQs, encyclopedic pages and SERPs.
  - Attention by position:
    - 57% of viewing time was above the fold, down from 80% in NN/g's 2010 study at 1024×768.
    - 74% was in the first two screenfuls; the second screenful alone got about 17%.
    - 81% was in the first three screenfuls.
    - More than 42% was in the top 20% of the page, and more than 65% in the top 40%.
    - Within the first screen, more than 65% of attention went to its top half.
  - Behavior and guidance:
    - Users scroll more than in 2010 but "rarely go beyond the third screenful," and they scroll "when they have a reason to."
    - Attention drops sharply after the fold in both years.
    - Recommendations: put high-priority goals and the major CTA above the fold, avoid false floors, and signal that more content follows (for example with cut-off text). — [NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)
- **NN/g Fold Manifesto.**
  - The fold is a concept as much as a measurement, and a responsive design can have several folds.
  - Users scroll only if the content above the fold looks promising; scrolling is a cost they weigh against expected value. — [NN/g](https://nngroup.com/articles/page-fold-manifesto)
  - The frequently cited "77% don't scroll" figure is a dated 2006 Nielsen number and should be treated as historical. — [Wikipedia, Above the fold](https://en.wikipedia.org/wiki/Above_the_fold)
- **Chartbeat (publisher data, about 2013–2014; content and news pages, not landing pages).**
  - About 66% (65.7%) of engaged time occurred below the fold. Secondary sources disagree on the exact metric and time window.
  - Just under 70% of visitors saw the very top of the page, since many arrive already scrolled.
  - The most-viewed region was just above the fold, at about 550 px, with just over 80% viewership.
  - About 50% of readers reached 1,500 px. The scroll-depth sample was 25M sessions. — [Chartbeat blog](https://blog.chartbeat.com/?p=3927); [MarTech](https://martech.org/chartbeat-proves-below-the-fold-ad-placement-may-offer-more-value-than-assumed/)
  - These numbers *seem* to contradict NN/g's but measure different things. Chartbeat's figure is time spent by engaged readers of articles; NN/g's is the fixation share across mixed page types.
- **Contentsquare Digital Experience Benchmark.**
  - Average scroll rate was 52% in 2021 and 50% in 2022. — [Contentsquare FR blog](https://contentsquare.com/fr-fr/blog/temps-moyen-passe-page-web/)
  - The 2025 report covered 2024 data from 90B sessions across 6,000 sites; its "consumption" metric (page views, scroll rate, time per visit) fell 6.5% year over year. — [Contentsquare press, 2025 benchmarks](https://contentsquare.com/press/2025-digital-experience-benchmarks/)
  - The 2026 benchmark reports engagement, which includes scroll rate, down about 10%. — [Contentsquare benchmark](https://go.contentsquare.com/en/digital-experience-benchmark)
- **Scanning patterns (NN/g, 2006, updated 2017).**
  - The F-pattern appears when text is unformatted and users want efficiency. It was replicated with 47 participants and holds on mobile and in right-to-left languages.
  - Alternatives:
    - **Layer-cake:** fixating on headings and subheadings only.
    - **Spotted:** hunting for a number, link or word.
    - **Marking:** eyes fixed while scrolling, common on mobile.
    - **Bypassing:** skipping repeated first words in lists.
    - **Commitment:** reading everything, which happens only when highly motivated.
  - Remedies: put the most important points first, make headings visually distinct, front-load the 2 most information-carrying words of each heading, group content with shading or borders, bold key phrases, and use bullets. — [NN/g F-Shaped Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

### Inferences
- On a 2026 desktop (1080–1440 px tall), plan around these attention bands:
  - **Screen 1 (about 57%):** identity, value proposition, primary download CTA and product glimpse.
  - **Screen 2 (about 17%):** the "how it works" demo or proof of the core idea.
  - **Screens 3 and beyond (about 26% combined):** depth for already-interested users, such as features, roadmap and FAQ.
- Design the page for layer-cake scanning: a visitor who reads only the section headings should still get the whole pitch.
- Industry-wide engagement is declining (Contentsquare −6.5% and then −10%). That argues for a front-loaded, shorter page over a long scroll narrative.

### Gaps
- NN/g's 2018 data are 8 years old, and I found no newer NN/g scroll-attention replication.
- I found no published landing-page-specific scroll benchmark from Hotjar or Microsoft Clarity. Searches returned only tool documentation and arbitrary dashboard thresholds such as "<50% = alert."
- Contentsquare's exact 2024 and 2025 scroll-rate percentages are gated, and I could not retrieve them.

---

## 3. Hero section: required elements, headline, product visuals vs. abstract art, video, and social proof

### Takeaway
The hero must deliver the value proposition, show the real product, and give a primary CTA within the first screen and the first 10 seconds. Eye-tracking shows that users ignore decorative imagery and scrutinize product images. That makes a real UI screenshot or short demo clip stronger than abstract art, though abstract "inkblot" art can work as a frame around the product.

### Cited Findings
- **Value proposition within 10 seconds** (see Q1). — [NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)
- **Major CTA above the fold.** — [NN/g Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **Images (NN/g "Photos as Web Content," eyetracking, about 2010).**
  - Purely decorative, "big feel-good images" are often completely ignored.
  - Users scrutinize product photos and images of real people.
  - Users ignore stock photos of generic people.
  - Information-carrying images get attention. — [NN/g](https://www.nngroup.com/articles/photos-as-web-content/)
- **Full-screen heroes cause false floors.**
  - A large hero image or video filling the viewport with no scroll cue is a top cause of the "illusion of completeness."
  - In NN/g's Maple.com example, 6 of 8 users did not realize the page scrolled.
  - Recommendation: avoid full-screen heroes and let content peek above the fold. — [NN/g Illusion of Completeness (2016)](https://www.nngroup.com/articles/illusion-of-completeness/)
- **Real people vs. stock photos.** A Marketing Experiments test reportedly found a 35% conversion lift from a real person associated with the product instead of a stock photo. This is secondary and unverified. — [KlientBoost](https://klientboost.com/landing-pages/hero-shot/)
- **Hero visual type.** Whether an abstract illustration, a product screenshot, or a people photo works best "gets settled by opinion far more often than by data." I found no rigorous public A/B evidence either way. — [Intempt](https://intempt.com/recipes/hero-static-vs-screenshot-test)
- **Video (Wyzowl State of Video 2025; survey of 205 marketers in late 2024, plus a consumer survey).**
  - 78% of consumers say they'd most like to learn about a product by watching a short video.
  - 73% of video marketers made explainer videos.
  - "99% say video helped users understand their product" is only a secondary attribution. These are self-reported marketer surveys, not conversion experiments. — [Wyzowl](https://wyzowl.com/video-marketing-statistics/); [VideoScribe roundup](https://blog.videoscribe.co/video-marketing-statistics-2025)
- **Headline wording.** Front-load the two most information-carrying words in headings, because scanners read only the first words. — [NN/g F-Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

### Inferences
- Recommended hero for inkblot:
  1. **Headline:** a short, concrete, benefit-led sentence whose first 2 words carry meaning.
  2. **Subhead:** one sentence on what it is (desktop app for writers and worldbuilders) and who it's for.
  3. **Primary CTA:** "Download for macOS," with OS auto-detection and small links for other platforms.
  4. **Microline under the CTA:** free or price status, version number, file size, and open-source or local-first status if applicable.
  5. **Real product UI**, ideally a short (≤10–15 s) muted, looping clip of an actual workflow, at enough size that details are legible. The clip should be framed by inkblot-style art, not replaced by it.
- Keep the hero below about 85–90% of viewport height so the top edge of section 2 peeks in. That avoids the false floor NN/g documented.
- Put light social proof near the CTA, such as one line of user count, stars or a single quote, if any genuine proof exists. Never fabricate it.

### Gaps
- I found no peer-reviewed or primary A/B data comparing an autoplay product video hero against a static screenshot for desktop-software downloads.
- The specific CXL eye-tracking study on hero images could not be located.
- I found no rigorous headline-length data; widely circulated "6–10 word" claims had no primary source.

---

## 4. What motivates scrolling: false floors, cues, narrative, curiosity, scroll-triggered animation, and CTA repetition

### Takeaway
Users scroll when the visible content promises more value (information scent) and when the layout visibly continues. The strongest evidence-based levers are:
- avoiding false floors by letting cut-off content peek,
- writing informative section headings, and
- placing additional CTAs further down for persuaded readers.

Scroll-triggered animation has weak or negative evidence when it is gratuitous.

### Cited Findings
- **False floor triggers (NN/g 2016).**
  - Full-screen heroes and videos.
  - Full-width horizontal rules.
  - Large white gaps or content that doesn't fill its container.
  - Interruptions such as big promos or share bars.
  - Horizontal carousels with weak signifiers.
- **False floor fixes (NN/g 2016).**
  - Let content peek above the fold.
  - Be careful with dividers and gaps.
  - Never put crucial content in carousels; if you use one, show bleeding content, obvious arrows and slide counts. — [NN/g Illusion of Completeness](https://www.nngroup.com/articles/illusion-of-completeness/)
- **Information scent.** People scroll "when they have a reason to," and the interaction cost of scrolling reduces how often lower content is seen. — [NN/g Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
  - Users scroll only if above-fold content looks promising. — [NN/g Fold Manifesto](https://nngroup.com/articles/page-fold-manifesto)
  - Accurate headings act as scent. This is a secondary summary of NN/g. — [NIU summary](https://web.news.niu.edu/?p=683)
- **Long page with distributed CTAs (Conversion Rate Experts for Moz).**
  - The winning, much longer page produced a 52% sales improvement in the first test, and the overall program was worth about $1M a year.
  - Secondary summaries say the page added testimonials and scattered CTAs throughout, replacing a "one-minute sampler."
  - The gain came from a longer persuasive page *overall*, not CTA position alone. — [Conversion Rate Experts](https://conversion-rate-experts.com/moz-case-study/); [Unbounce on long vs short](https://unbounce.com/?p=20484)
- **Contested CTA-position claims.**
  - "304%" circulates both as "above-fold CTAs get 304% more clicks" and as "a CTA below the fold converted 304% better" (Content Verve).
  - Neither traces to a primary source, so do not cite either. — [Flint (vendor blog)](https://www.flint.com/blog/landing-page-above-the-fold-optimization-statistics)
- **Scroll-triggered animation and scrollytelling.**
  - One secondary blog claims an NN/g study found scroll animations and fades can hurt brand perception comparably to slow loads; I could not verify this against the NN/g original. — [Creative Momentum](https://www.thecreativemomentum.com/blog/are-scroll-triggered-animations-worth-your-time)
  - Readers try to read scrolling text and miss the animated graphics, and scroll-bound animations are hard to revisit. — [Kosara, eagereyes 2016](https://eagereyes.org/blog/2016/the-scrollytelling-scourge)
  - Animations can be fully scroll-controlled or merely scroll-triggered, after which they run independently. — [EU Data Visualisation Guide](https://data.europa.eu/apps/data-visualisation-guide/scrollytelling-animated-transition)
- **Benchmarks.**
  - Average scroll rate was about 50% of page height (Contentsquare, 2022), and engagement has declined since. — [Contentsquare](https://contentsquare.com/fr-fr/blog/temps-moyen-passe-page-web/)
  - About 50% of article readers reached 1,500 px (Chartbeat). — [Chartbeat](https://blog.chartbeat.com/?p=3927)

### Inferences
- Expect roughly half of visitors to see less than half the page. Repeat the download CTA:
  - in the hero,
  - after the demo or feature proof (around screen 2–3), and
  - as a final closing CTA.
- A sticky header download button gives persistent access without repeated blocks.
- Use scroll-*triggered* (play-once, short, ≤300–500 ms) reveals as polish only. Never gate content behind animation, and avoid scroll-*bound* scrubbing for core information. The other researcher covers scroll-jacking.
- Curiosity gaps are best implemented as specific section headings that hint at payoff ("Your world, linked: every character, place and event one click away") rather than vague teasers.

### Gaps
- I found no controlled study quantifying the effect of explicit "scroll down" arrows or hints on scroll depth.
- I found no rigorous data on scroll-triggered animation increasing engagement; vendor claims like "400% longer time-on-page" had no source.
- I found no landing-page-specific optimal CTA repetition count.

---

## 5. Recommended section order and architecture; single long page vs. multi-page

### Takeaway
No rigorous study prescribes a canonical section order. The evidence supports ordering by priority, because attention decays steeply with depth (57% → 17% → the remaining 26%), and a long single page with distributed CTAs and proof can outperform a short one when the product needs explanation (Moz, +52%).

### Cited Findings
- **Attention decay.** Put high-priority business and user goals at the top and secondary information lower. — [NN/g Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- **Long page performance.**
  - Longer page with testimonials and distributed CTAs beat a short sampler by 52%. — [Conversion Rate Experts / Moz](https://conversion-rate-experts.com/moz-case-study/)
  - Unbounce on page length tradeoffs. — [Unbounce, Size Matters](https://unbounce.com/?p=20484)
- **Counterweight on length.** Unbounce's analysis of about 16,000 ecommerce pages found conversion trending down as word count rises, with pages under 300 words converting best. That finding is ecommerce-specific. — [Unbounce Copy Analyzer](https://unbounce.com/copy-analyzer-report/ecommerce/)

### Inferences
Proposed order for inkblot, by attention priority:

| # | Section | Screen | Evidence basis |
|---|---------|--------|----------------|
| 1 | **Hero**: value prop, real UI or demo loop, download CTA, free/version microline | 1 | 10-s value prop rule; 57% attention; CTA above fold |
| 2 | **"See it work"**: 2–3 core workflows as short clips or annotated screenshots | 2 | 17% attention on screen 2; product images get scrutinized |
| 3 | **Features**: 3–6 benefit-led cards with headings readable on their own | 2–3 | Layer-cake scanning |
| 4 | **Proof and trust**: testimonials (if real), open-source, local-first, privacy, no-account | 3 | Social proof near decision (see Q7) |
| 5 | **Mid-page CTA** (repeat download) | ~3 | Moz distributed CTAs; ~50% scroll rate |
| 6 | **Roadmap / timeline**: upcoming features | 4 | Secondary information for engaged users |
| 7 | **Final download block**: all platforms, system requirements, checksums, changelog link | 4–5 | Closing CTA for committed readers |
| 8 | **FAQ** (accordion) and footer | last | Spotted-scanning lookup content |

- Single page vs. multi-page: use a single long homepage for the pitch. Give the changelog, full roadmap detail and docs separate pages linked from the nav, because they serve return visitors and "spotted" lookup behavior.

### Gaps
- I found no controlled study comparing section orders (for example, social proof before vs. after features) for software landing pages.
- I found no data on single-page vs. multi-page conversion for app downloads.

---

## 6. Copywriting: benefits vs. features, specificity, CTA microcopy, and how much users read

### Takeaway
Users read about 20% of the words on an average page, at most about 28%. Copy should be short, plain (5th–7th grade reading level converts best per Unbounce 2024), and front-loaded into headings.

### Cited Findings
- **NN/g "How Little Do Users Read?" (Nielsen 2008, based on Weinreich et al.: 25 users, 2005 data, 45,237 page views).**
  - Time on page is about 25 s plus 4.4 s per 100 additional words, so roughly 18% of added words get read.
  - Users read at most about 28% of words and realistically about 20%.
  - The average page had 593 words.
  - Users can read half the text only on pages of 111 words or fewer.
  - Caveat: the data is old (2005); treat it as directional. — [NN/g](https://www.nngroup.com/articles/how-little-do-users-read/)
- **Unbounce Conversion Benchmark Report 2024 (57M+ conversions).**
  - Difficult words hurt conversions most.
  - Copy at a 5th–7th grade reading level converts best, at 11.1%. — [DMN summary of Unbounce 2024](https://dmn.ca/unbounces-2024-conversion-benchmark-report-proves-that-attention-spans-are-declining-and-so-are-conversion-rates/); [Unbounce methodology](https://unbounce.com/conversion-benchmark-report/methodology/)
- **Unbounce ecommerce copy analysis (~16k pages).** Pages under 300 words convert best, and a Flesch reading ease of 61 or higher is recommended. — [Unbounce](https://unbounce.com/copy-analyzer-report/ecommerce/)
- **SaaS pages.** SaaS landing pages carry less emotional sentiment than other industries, and most sentiment showed neutral or negative correlation with conversion (2020–21 data). — [Unbounce SaaS](https://unbounce.com/industry/saas/)
- **Headings and bullets.** Front-load information-carrying words, bold key phrases, use bullets, and cut unnecessary content. — [NN/g F-Pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

### Inferences
- Aim for about 300–600 visible words on the homepage total. Expect visitors to read only headings, the first line of each block, CTA labels and captions.
- Style: benefit-led headline with a feature-specific subhead. Example pattern: "Build worlds that remember themselves" followed by "Linked wiki, timeline and manuscript in one offline app."
- Prefer specific nouns and numbers (local files, Markdown export, zero accounts) over adjectives. Keep sentiment calm and confident rather than hype; the SaaS sentiment data hints that hype doesn't help.
- CTA microcopy should be action plus object plus platform ("Download for macOS"), with friction-reducers beneath it (free, version, size, "no sign-up").

### Gaps
- I found no primary study on benefit-led vs. feature-led copy for software; the claim is widespread practitioner lore.
- I found no primary data on CTA label wording, such as "Download" vs. "Get inkblot," for desktop apps.
- The reading-share data dates from 2005 and was not replicated in sources I found.

---

## 7. Where to place the roadmap, changelog, FAQ, testimonials, pricing or free status, and privacy/open-source trust signals

### Takeaway
Direct placement research for these elements is thin. The available evidence supports:
- putting decision-critical reassurance (free status, trust) next to CTAs,
- placing social proof where purchase or download decisions happen, and
- pushing lookup-oriented content (FAQ, changelog, full roadmap) low on the page or onto subpages, where "spotted" scanners find it.

### Cited Findings
- **Reviews and testimonials (Spiegel Research Center, Northwestern; Askalidis & Malthouse 2016; Spiegel eBook 2017; gift-retailer data).**
  - Purchase likelihood for a product with 5 reviews was 270% greater than with none.
  - Ratings approaching a perfect 5.0 *reduce* purchase likelihood, with 4.2–4.5 the sweet spot. This is a separate 2015 PowerReviews-commissioned finding, from ecommerce and CPG contexts.
  - Price-tier figures (370% and 190%) are unverified secondary claims. — [Spiegel eBook PDF](https://www.xait.com/hubfs/Spiegel_Online-Review_eBook_Jun2017_FINAL.pdf); [Spiegel 4.5 stars](https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2021/04/Spiegel-research-reveals-4.5-stars-are-better-than-5-The-Medill-IMC-Spiegel-Research-Center.pdf)
- **Real people.** Real-person photos are scrutinized and generic stock people are ignored, so testimonials should show real names and faces or handles. — [NN/g Photos as Web Content](https://www.nngroup.com/articles/photos-as-web-content/)
- **Carousels.** Don't put crucial content in carousels, which rules out a testimonial carousel as the only proof. — [NN/g Illusion of Completeness](https://www.nngroup.com/articles/illusion-of-completeness/)
- **Secondary content.** Secondary or related information belongs lower on the page. — [NN/g Scrolling and Attention](https://www.nngroup.com/articles/scrolling-and-attention/)

### Inferences
- **Free or pricing status:** put it in the hero microline beside the download button, and repeat it in the final download block. Uncertainty about cost is a top download blocker, so resolving it where the decision is made matters most.
- **Privacy, local-first and open-source signals:** put them in a compact trust strip directly below the hero CTA or in the proof section. Add a GitHub link with stars if open source; this doubles as social proof for indie software.
- **Testimonials:** use 2–3 real ones with name and context in the proof section, adjacent to the mid-page CTA. Avoid carousels and do not fabricate any. If none exist yet, substitute verifiable signals such as GitHub stars, download counts or community size.
- **Roadmap and upcoming-feature timeline:** place it after features and proof, so interested users see momentum. Use a compact horizontal or vertical timeline with 3–5 near-term items (Now / Next / Later) and link to a full roadmap page. Avoid horizontal scrolling without strong signifiers, which NN/g lists as a false-floor trigger.
- **Changelog:** keep only a link plus the "latest version and date" line near the download button, with the full changelog on its own page. A recent date signals the product is alive.
- **FAQ:** put it at the bottom as an accordion with question-first headings, serving spotted-scanning visitors who have specific objections (platforms, sync, export, pricing, data ownership).

### Gaps
- I found no studies on where to place roadmaps or timelines on landing pages, or on whether public roadmaps increase downloads.
- I found no primary data on open-source or privacy badges improving desktop-app download rates.
- The Spiegel review data come from ecommerce and may not transfer to free indie software.
