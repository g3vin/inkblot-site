# Download Pages and Public Roadmaps/Changelogs for a Tauri Desktop App (inkblot)

Research date: 2026-10-14. All live-site observations come from WebFetch of the URL shown on that date. WebFetch returns text only and does not run JS, so OS-detection behavior and visual styling were often not visible (noted where relevant).

## Q1. Download UX: OS detection, architectures, installer types, metadata, trust signals, post-download, mobile, package managers

### Takeaway
The strongest pattern is one primary button labeled for the detected OS ("Download for Mac"), a universal macOS build where possible, then a quiet "other platforms" list showing per-architecture and per-format links, plus package-manager one-liners. Version and requirements sit next to the button. Best-in-class pages (VS Code, Zed, Ghostty) show the OS requirement in one line. Few of them show file size or checksums on the page, and a thank-you page is uncommon (VS Code has one).

### Cited Findings
**Primary CTA + alternatives**
- VS Code shows a "Your OS" primary button per platform ("Mac Universal", "Windows", "Debian/Ubuntu" / "Red Hat/Fedora"), each with a "Select a download…" dropdown of alternatives. Requirements appear under each button ("Requires Windows 10 or 11 (64-bit)", "Requires macOS 12.0 or later"). — [VS Code download](https://code.visualstudio.com/download)
- VS Code's Windows alternatives: User Installer and System Installer (x64/Arm64), .zip, CLI. macOS: .dmg Intel / Apple Silicon / Universal, plus CLI. Linux: .deb/.rpm/.tar.gz in x64/Arm32/Arm64, Snap Store link. The page does not explain User vs System installer, which is a weakness. — [VS Code download](https://code.visualstudio.com/download)
- Obsidian's primary button names the OS ("Download for Windows" was served to the fetcher) and links straight to `Obsidian-1.14.4.exe`. Below it is a platform grid: Mac "Universal" (a single DMG for both chip types), Windows "Universal", and Linux with AppImage x86-64, AppImage ARM64, Snap, .deb and "Flatpak Community maintained". It also has iOS/Android store links and Web Clipper browser links. The page shows no file sizes, system requirements or checksums, and no explicit release date: "Last updated" links to the changelog. — [Obsidian download](https://obsidian.md/download)
- Signal uses a "Download for [OS]" button with a "Not on [OS]?" list of other platforms. Its Linux section gives copy-paste apt-repo steps (signing key into a keyring, sources file, `apt install`). It also gives AppImage steps with `gpg --verify` against a published key, and tells users that a "Good signature from" result is expected. — [Signal download](https://signal.org/download/)
- Zed's page leads with the version and date ("1.23.3", "October 12, 2026") and a "View changelog →" link to `/releases/stable/1.23.3`. It has a Stable/Preview channel toggle, per-platform blocks (macOS "Apple Silicon", "Requires version 10.15 or later"; Windows "Intel/AMD"), and a Linux `curl -f https://zed.dev/install.sh | sh` one-liner with a link to "other ways to install". The buttons are filled client-side (they showed "Loading…" in the fetch). — [Zed download](https://zed.dev/download)
- Ghostty is the most minimal: "Version 1.3.1" plus a release-notes link, then macOS as "A universal binary that works on both Apple Silicon and Intel machines", "Requires macOS 13+ (Ventura or later)", with a DMG button and a "Package Manager" button. Linux has a "pre-built package" link and a "Build From Source" link. — [Ghostty download](https://ghostty.org/download)
- Warp lists every OS section with no single detected primary button. macOS: .dmg (macOS 10.14+) plus `brew install --cask warp`. Windows: x64 and ARM64 .exe plus `winget install Warp.Warp`. Linux: .deb, .rpm, .tar.zst (pacman) and AppImage, each in x64 and ARM64. No version number or date is shown. A "Warp Preview" channel link is provided. — [Warp download](https://www.warp.dev/download)
- Cap is an open-source screen recorder (the page does not mention Tauri). Its primary "Download Cap" button goes to the Apple Silicon build ("macOS 13.1+ recommended"). Apple Intel sits under "Other download options", and Windows is labeled "(Beta)". Linux offers .deb, AppImage, RPM and Pacman, with an explicit caveat: "Linux downloads require glibc 2.39 or newer"; Ubuntu 22.04 unsupported. It links to "All versions" (`/download/versions`) and shows its GitHub star count (23.3k) and SOC 2/ISO badges as trust signals. No version number appears on the main page. — [Cap download](https://cap.so/download)

**Post-download page**
- Every VS Code download link routes through `/thank-you?dv=...&build=stable`, so a thank-you page is part of the flow. Its contents were not captured. — [VS Code download](https://code.visualstudio.com/download)

**Legal/consent microcopy near the button**
- Zed: "By downloading and using Zed, you agree to its terms and conditions." VS Code has a similar line about license terms and the privacy statement. — [Zed](https://zed.dev/download); [VS Code](https://code.visualstudio.com/download)

**Mobile visitors**
- Signal does not redirect. Mobile visitors see a "Signal for Mobile" section first, and the desktop section states that the phone app is a prerequisite. — [Signal download](https://signal.org/download/)
- Warp and Cap show nothing mobile-specific: phone visitors get the same desktop installers. — [Warp](https://www.warp.dev/download); [Cap](https://cap.so/download)
- On the related pattern of sending a link to another device, Branch, a vendor with a stake in the result, reports that 42% of "text me the app link" clicks led to installs, against about 15% for smart banners. That figure is for mobile apps reached from desktop, which is the reverse of inkblot's case, and it is a vendor figure. — [Branch](https://www.branch.io/resources/blog/optimizing-desktop-web-to-app-conversions/)
- The "email me a download link" field has been discussed as a variant of SMS (a WordPress.org design ticket). No performance data was given. — [WordPress meta trac #4096](https://meta.trac.wordpress.org/ticket/4096)

**Trust signals: signing, notarization, SmartScreen**
- Tauri: "Signing is required on most platforms". Distributing on macOS outside the App Store requires notarization as well as signing. — [Tauri Distribute](https://v2.tauri.app/distribute/)
- Tauri supports these formats: Linux Debian, Snap, AppImage, Flatpak, RPM and AUR; macOS DMG, App Bundle and App Store; Windows installer and Microsoft Store. — [Tauri Distribute](https://v2.tauri.app/distribute/)
- Tauri updater docs: on Windows, v2 uses NSIS `.exe` and `.msi` installers as update bundles; on macOS, `.app.tar.gz`. — [Tauri updater](https://v2.tauri.app/plugin/updater/)
- Windows: neither EV nor OV signing guarantees that SmartScreen warnings disappear, because reputation has to be built. — [DigiCert KB](https://knowledge.digicert.com/alerts/ev-signed-application-showing-microsoft-defender-smartscreen-warnings)
- After Azure Trusted Signing (now "Artifact Signing") changed its intermediate CAs around March 26, 2026, developers reported SmartScreen warnings. No official fix was confirmed. — [Microsoft Q&A](https://learn.microsoft.com/en-us/answers/a/12725314)
- Microsoft Store distribution avoids the download warning. — [codenote 2026 guide](https://codenote.net/en/posts/windows-desktop-app-code-signing-distribution-japan-2026/)
- Advice for reputation: sign every binary with the same publisher identity, timestamp it, and never modify it after signing. — [MS Tech Community](https://techcommunity.microsoft.com/discussions/microsoftdefenderthreatintelligence/smartscreen-reputation-issue-for-ev-code-signed-windows-application/4537122)
- One open-source project documents how to get past an unsigned-app SmartScreen warning, which is a pattern inkblot can copy if it ships unsigned at first. — [open-bart docs](https://open-bart.readthedocs.io/en/latest/standalone/SMARTSCREEN.html)

### Inferences
- For inkblot: ship a universal macOS DMG (as Obsidian and Ghostty do), so the Apple Silicon vs Intel choice never has to be asked. If separate builds are needed, default to Apple Silicon and put Intel under "Other options" (as Cap does).
- Windows: offer the NSIS `.exe` as the default, since it is a per-user install with no admin prompt. Keep `.msi` in the alternatives for IT/managed installs. Add a one-line explanation, which fixes the gap VS Code leaves.
- Linux: AppImage as the primary (works on any distro), then .deb and .rpm. Add Flatpak/AUR only if maintained, and label community-maintained ones as Obsidian does. State the glibc floor, as Cap does, because Tauri/WebKitGTK builds have distro minimums.
- Keep a compact metadata line beside the CTA: version · date · OS minimum · "Release notes →". Also show file size and SHA-256 in the expanded "all downloads" list. None of the leading sites put checksums on the main CTA, so they belong in the "all downloads" list.
- If the Windows build is unsigned or still building reputation, give it a short "Windows may show a SmartScreen prompt — click More info → Run anyway" note on the thank-you or install page. That is honest and lowers drop-off. A macOS build that is properly notarized needs no such note.
- Mobile: don't show a dead download button. Show "inkblot is a desktop app for macOS, Windows & Linux" with an "Email me the link" field and/or "Copy link". A QR code doesn't help a phone visitor, though it suits the reverse case.

### Gaps
- Could not verify the download flows of Arc, Raycast, Figma, Linear, Discord or Notion in this pass (not fetched). Their mobile handling and thank-you pages are unverified.
- Contents of VS Code's thank-you page were not captured.
- Found no independent (non-vendor) A/B data on OS auto-detection, thank-you pages, or showing file size/checksums. NN/g and Baymard were not reached in this pass.
- OS detection logic could not be observed via WebFetch (no JS). Note that Apple Silicon cannot be reliably detected from the user-agent; `navigator.userAgentData.getHighEntropyValues(['architecture'])` is Chromium-only. This is general knowledge and was not sourced in this pass.

## Q2. How GitHub-release-backed indie apps present downloads (GitHub API, Tauri updater)

### Takeaway
Fetch one machine-readable "latest" manifest, either GitHub's `/releases/latest` API or Tauri's `latest.json` from tauri-action, and map OS/arch to assets client-side. Always keep a static fallback link to the Releases page, and cache or proxy the call to avoid rate limits.

### Cited Findings
- Tauri's tauri-action "generates a static JSON file" (`latest.json`) that can be served from GitHub Releases. A stable URL pattern is `.../releases/latest/download/latest.json`. — [Tauri updater](https://v2.tauri.app/plugin/updater/)
- `latest.json` has `version`, `notes`, `pub_date` (RFC 3339) and `platforms`, keyed `OS-ARCH` (e.g., `darwin-aarch64`, `windows-x86_64`, `linux-x86_64`), each with a `url` and an inline `signature`. Signatures are mandatory ("cannot be disabled"). A malformed platform entry invalidates the whole file. — [Tauri updater](https://v2.tauri.app/plugin/updater/)
- The updater `url` may point to an update bundle (e.g., macOS `.app.tar.gz`), not the user-facing DMG. A website should not reuse it blindly for the download button. — [Tauri updater](https://v2.tauri.app/plugin/updater/)
- The community pattern is: call `/releases/latest`, detect the platform via `navigator.userAgentData`, falling back to `navigator.userAgent`, match asset filenames with regexes, and always render a visible fallback button. — [CodexMonitor issue #418](https://upd.dev/Dimillian/CodexMonitor/issues/418)
- That issue exists because sending users to the GitHub Releases page "where DMG is hidden by default" hurt the download flow. Releases pages are a poor primary CTA. — [CodexMonitor issue #418](https://upd.dev/Dimillian/CodexMonitor/issues/418)
- The open-source `modern-github-release` React app recommends an asset using filename heuristics (`darwin`, `.dmg`, `arm64`, `x64`). It warns that unauthenticated GitHub API calls are limited to about 60 per hour per IP, and recommends a caching backend proxy. — [modern-github-release](https://github.com/milisp/modern-github-release)
- Blender-style approach: a self-contained HTML/JSON page that detects OS and architecture, with a fallback table of files and sizes. — [Avogadro forum](https://discuss.avogadro.cc/t/automatic-download-button/7222)

### Inferences
- Best for a static site (e.g., GitHub Pages, which this repo uses): at build time or in a scheduled GitHub Action, fetch the latest release and write a `downloads.json` with version, date, asset URLs, sizes (GitHub's API exposes `size`, and recent versions expose a `digest`) and release notes. The page then makes no runtime API calls and has no rate-limit risk. As a no-JS fallback, hard-code `https://github.com/<org>/<repo>/releases/latest/download/<stable-asset-name>` links. These work only if asset filenames carry no version number, so configure the bundler or a CI rename step accordingly.
- Reuse the same release notes for the site's changelog, so a single source of truth drives download metadata, changelog entries and the in-app updater.

### Gaps
- I did not verify in this pass whether the GitHub REST API's asset `digest` (sha256) field is generally available. Confirm it before relying on it for checksums.

## Q3. Roadmap / timeline / changelog presentation formats; expectation management; engagement mechanics

### Takeaway
Status columns without dates (Active/Planned/Launched, or Now/Next/Later) manage expectations best for a small team. A "Launched" archive linked to versioned changelog entries turns the roadmap into proof that the team ships. Quarterly columns (GitHub) need heavy disclaimers and upkeep. Engagement comes from per-item waitlists (PostHog), newsletter capture (Raycast) and links to forums (Obsidian). Upvote boards are optional and carry maintenance cost.

### Cited Findings
**Roadmaps**
- Obsidian's roadmap has three sections. Active has 3 items with one-line descriptions. Planned has 7 items, some with no description, no dates and no priority order. Launched is a reverse-chronological month-by-month timeline from Oct 2026 back to Mar 2020, and each entry links to its versioned changelog (e.g., 1.14). The page has no voting and no disclaimer, and points feature requests to the forum. Its intro is "We're chipping away at improvements to Obsidian." — [Obsidian roadmap](https://obsidian.md/roadmap/)
- GitHub's public roadmap is a project board. It uses quarterly columns plus an "Exploratory" column, the phases "in design", "exploring", "preview" and "ga", and labels for area, feature, SKU and deployment. Shipped items get a "shipped" label and close with a link to the changelog post. The disclaimer: it "does not represent a commitment, guarantee, obligation or promise", should not inform purchasing decisions, and "dates are least reliable further out". — [github/roadmap](https://github.com/github/roadmap)
- PostHog relaunched posthog.com/roadmap as a live page. Features are sorted by signup interest, users can join per-feature waitlists without logging in, and an "idea" card collects pitches. This is from a third-party write-up; the page body could not be fetched directly. — [createwith.com](https://www.createwith.com/tool/posthog/updates/posthog-debuts-live-public-roadmap-built-with-posthog-code)
- Now/Next/Later was created by Janna Bastow (ProdPad) as "three horizons rather than fixed delivery dates", with no Gantt chart and no invented deadlines. — [ProdPad](https://prodpad.com/blog/invented-now-next-later-roadmap/)
- ProdPad's glossary frames the columns as confidence levels: Now is current work, Next is problems being validated, Later is strategic bets. — [ProdPad glossary](https://www.prodpad.com/glossary/now-next-later-roadmap/)
- Bastow suggests adding dates only to genuinely time-sensitive items. — [Miro template](https://miro.com/miroverse/nownextlater-framework-template)
- Fider recommends themes and statuses (planned / in progress / shipped) instead of deadlines; soft quarters only if needed. Tom Alterman's rule is to "only publish items you have at least 80% confidence you'll deliver". It describes "thinking about" framing (PostHog: "Here's what we're thinking about building next"), and notes that "users remember dates and forget caveats". — [Fider](https://www.fider.io/blog/public-roadmaps-when-they-help-and-when-they-hurt)

**Changelogs**
- Raycast's changelog splits by platform with tabs (macOS / Windows / iOS / macOS V1). Each version (v2.8…) has a permalink and a full date, a preview image, and items grouped under "✨ New", "💎 Improvements" and "🐞 Fixes" with a bolded area name per bullet. It is paginated, with a footer newsletter: "Get product updates and news in your inbox. No spam." — [Raycast changelog](https://www.raycast.com/changelog)
- Linear's changelog is a dated feed. Each entry has one headline feature (its own permalink, wide illustration or video, a short narrative), followed by small categorized lists ("Fixes", "Improvements", "API"…). Filter tabs at the top cover All / Changelog / Product launches / From the team / Community / Press, with a search field. — [Linear changelog](https://linear.app/changelog)
- Zed links every version on the download page to a per-version release page (`/releases/stable/1.23.3`). — [Zed download](https://zed.dev/download)

### Inferences
- For inkblot, combine Obsidian's structure with Linear's media style and the "thinking about" tone:
  - "Now" (in progress, 1–3 items)
  - "Next" (planned, ≤6 items, ≥80% confidence)
  - "Exploring" (ideas, explicitly not commitments)
  - "Shipped": a vertical, dated timeline whose entries link to versioned changelog posts
- Use no dates except "Shipped". Optionally show a soft season such as "Late 2026" only on Now items.
- Engagement for a small indie team: a per-item "Notify me when this ships" (email, PostHog-style waitlist) plus one global "Release notes by email" signup. Skip upvoting at first, because it creates moderation and expectation debt (see Q4). Link to GitHub Discussions or Issues for requests.
- Put a "Last updated <date>" stamp on the roadmap. A stale roadmap reads as an abandoned product (Q4).

### Gaps
- Could not fetch or verify the roadmap/changelog pages of Arc, Notion, Figma, Height, Cal.com, Productboard or Canny in this pass.
- PostHog roadmap body not directly fetched (client-rendered). Mechanics are per a secondary write-up.

## Q4. Evidence that public roadmaps/changelogs increase trust, retention, or conversion

### Takeaway
There is no independent, rigorous evidence. Published figures come from roadmap and changelog vendors. Documented failures (GitHub, Trello, Star Citizen) show the real risk is broken or stale promises. A changelog captures much of the trust benefit with no commitment risk.

### Cited Findings
- No peer-reviewed or controlled study found. Widely repeated Buffer figures ("46% rise in customer trust", "18% churn reduction") are secondhand vendor claims. — [poper.ai](https://www.poper.ai/blog/product-roadmap-public-page/) (unverified; treat as marketing)
- Fider: "no recent reliable data" on how many companies publish roadmaps. The only figure is Actuation Consulting 2017, where ~80% of orgs share roadmaps with customers in some form (mostly privately). Claims about cutting tickets or churn "usually come from roadmap software vendors". — [Fider](https://www.fider.io/blog/public-roadmaps-when-they-help-and-when-they-hurt)
- Failure cases from Fider:
  - In Nov 2024, GitHub removed about 40 stagnant roadmap issues "without discussion, reasoning, or explanation" and drew backlash.
  - Trello walked back its public roadmap: "It's better to not share anything at all than to disappoint someone."
  - Star Citizen: "there will always be folks who see projections as promises."
  - Arvid Kahl stopped publishing feature roadmaps in 2026, citing AI tools that can clone a backlog.
  
  — [Fider](https://www.fider.io/blog/public-roadmaps-when-they-help-and-when-they-hurt)
- Fider argues a well-kept changelog gives much of the trust benefit with less commitment. This is opinion. — [Fider](https://www.fider.io/blog/public-roadmaps-when-they-help-and-when-they-hurt)
- Vendor blogs recommend linking the request → roadmap → changelog loop, so users see their requests ship. — [AnnounceKit](https://announcekit.app/blog/public-roadmap/); [LaunchNotes](https://www.launchnotes.com/blog/should-you-share-your-product-roadmap-publicly)

### Inferences
- For an indie app, the main trust value is evidence of momentum: a visibly active "Shipped" timeline with recent dates. A long list of promises does not provide it. Lead the timeline with shipped work and keep the future list short.
- Measure it yourself: track roadmap → download clicks and "notify me" signups rather than relying on industry stats.

### Gaps
- No NN/g, Baymard or academic source on roadmap/changelog effects found in this pass.

## Q5. Visual/interaction ideas for an avant-garde but accessible timeline

### Takeaway
CSS scroll-driven animations (`animation-timeline: view()` / `scroll()`) can deliver an editorial, "ink spreading" reveal with no JS. Under `prefers-reduced-motion: reduce` the motion must be removed and all content must stay visible. Horizontal timelines must use the inline axis and stay keyboard-scrollable.

### Cited Findings
- Under reduced motion, set `animation: none` on reveal and parallax elements; a simple progress indicator may survive. "The motion must disappear, not merely shorten." — [specification.website](https://www.specification.website/spec/performance/scroll-driven-animations/)
- The CSS WG rejected browser-forced reduced motion for scroll-linked animations because it could leave content invisible, so authors must write reduced-motion fallbacks. — [W3C csswg-drafts #5321](https://lists.w3.org/Archives/Public/public-css-archive/2022Jun/0886.html)
- Don't hide critical information behind scroll-driven effects; content must be readable without animation. — [tailwind-animations docs](https://www.mintlify.com/midudev/tailwind-animations/advanced/scroll-timeline)
- For horizontal galleries use `scroll(nearest inline)`; the physical `x` axis doesn't adapt to writing mode. — [specification.website](https://www.specification.website/spec/performance/scroll-driven-animations/)
- Introduction to scroll-driven CSS animations. — [Flavio Copes](https://flaviocopes.com/css-scroll-driven-animations/)

### Inferences (design ideas, unsourced, for the report-writer's judgment)
- Vertical "ink line" timeline: a single hairline spine that fills with ink as the user scrolls (a scroll-progress animation). Each entry has a status glyph: filled blot = shipped, half blot = in progress, outline = planned, dotted outline = exploring. Pair every glyph with a text label, never color or shape alone.
- Desktop horizontal variant: a scroll-snap row (`scroll-snap-type: x mandatory`). Give it `tabindex="0"`, `role="region"` and an `aria-label`, plus visible prev/next buttons. Below ~768px, collapse to vertical.
- Use semantic markup: `<ol>` for chronological entries and `<time datetime>` for dates, with headings per item so screen-reader users can navigate by heading.
- Reveal entries with opacity/transform via `animation-timeline: view()`. Wrap the reveals in `@supports (animation-timeline: view())` and `@media (prefers-reduced-motion: no-preference)`, so content is fully visible by default.

### Gaps
- No source found covering keyboard focus or screen-reader handling specifically for horizontal timelines. The guidance above is general a11y practice and should be tested with VoiceOver/NVDA.
- No curated gallery of exemplary timeline designs (e.g., Awwwards) was reviewed in this pass.
