---
description: Refine the Inkblot website without redesigning it — cut words, calm busy sections, remove duplicates. Findings first, my picks, then small edits.
argument-hint: [<surface> | all | apply]
---

# Inkblot site refinement pass

This is a **refinement pass, not a redesign.** Direction M (the page's look, section
order, components and brand) stays as it is. Your job is to make what's already there
quieter and easier to take in: fewer words, clearer grouping, nothing said or shown
twice. Think editor, not architect. **I decide what changes. You find, propose and then
apply my picks.**

Command argument: `$ARGUMENTS`.

- A surface name reviews that one. Surfaces are the landing page's sections, in page
  order: `header`, `hero` (with the band), `split`, `notes`, `night`, `roster`, `book`
  (with the download band), `marketplace`, `pledge`, `proof`, `footer`. Plus `about`,
  and any other page in `src/pages/` that's listed in `BUILT` in `src/data/nav.ts`.
- `landing` reviews every landing section together, as one page.
- `all` reviews `landing`, then every other built page, highest-traffic first.
- `apply` applies the picks I've given you.
- Empty: review `landing`.

## Read first

- `DESIGN_REVIEW.md`: the owner decisions and "Implemented" box at the top, §2 "What's
  working" (all of it must survive), and §4.2 "Writing", including the privacy copy check.
- The header comment in `src/data/home.ts`: the copy rules and which section owns which
  claim.
- `design-iterations/final/COMPONENTS.md` and the architecture section of `SITE_PLAN.md`:
  the components and registries that exist.
- `src/styles/tokens.css`: the only colours, faces, sizes and spacing allowed.
- The app's `/Users/gavin/programming-projects/inkblot/docs/DESIGN.md`, §1 (principles),
  §7 (motion), §10 (progressive disclosure) and §11 (voice and copy). The site follows
  the app's voice.
- `docs/refine/decisions.md`, if it exists. Don't reopen anything decided there.

Every suggestion must already be allowed by these. Where they're silent, say so and ask;
don't invent a rule.

## Look at the real thing

Judge from screenshots, not source alone. Run `npm run dev` (http://localhost:4321),
then capture with Playwright (the browsers are already installed; put any capture script
in the scratchpad, not the repo):

- 1440×900 and 390×844, in light and dark (`colorScheme`).
- One pass with `reducedMotion: 'reduce'` for full-page captures, since the pinned
  sections (split, notes, night, book) stretch the page with motion on. Then, at 1440 with
  motion on, step-scroll through each pinned section and capture its key frames.
- Save to `design-iterations/refine/<surface>/before/`.

Look at each surface the way a visitor meets it: at a glance, then a second time reading
closely. Note anything you couldn't capture (a pinned frame, the hero video, a device-
specific download button) instead of skipping it silently.

## The three questions

Ask all three of every surface, in this order.

### 1. Is this too wordy? (verbosity — the main focus)

- **Count the words a visitor has to read before they get the point** of a section:
  eyebrows, titles, ledes, lines, meta lines, spec lines, captions, roster rows, button
  labels, alt text that's read aloud.
- A section gets its title and **at most one short supporting line**. A second paragraph,
  or a line that restates the title, is a cut. Detail belongs on a feature page or
  `/download`, not on the landing.
- Tighten copy (§11): verb first, the noun a writer recognises, no filler ("your", "here",
  "you can", "in order to", "simply", "currently"). Sentence case, no exclamation marks,
  no SaaS words. Never the words `home.ts` bans.
- Flag a title and line that say the same thing, and an eyebrow that repeats the heading
  under it.
- Keep facts: the spec line, versions, sizes, formats. They're information, not
  explanation. Every privacy line must still pass §4.2's privacy check after a cut.
- Copy lives in `src/data/*.ts`. Propose edits there, not in components.

### 2. Is too much going on at once? Will the visitor scroll past it? (layout and organisation)

- **The glance test:** in two seconds, is there one obvious place for the eye to land,
  and is it clear what this section is for? Name the focal points you see. More than one
  primary thing competing is a finding (for example, two big headlines, or a download
  button competing with a link).
- **Will it be skipped?** Look for what a visitor will scroll past: a wall of equal-weight
  roster rows, an important claim set like a caption, a key fact buried mid-list, a meta
  line nobody reads, a pinned section that runs longer than its content. Say what they'd
  miss and why.
- **Grouping:** related claims together in one section, unrelated ones apart. Flag a lone
  line that belongs in a neighbouring section, and sections of one idea that could merge.
- **Order:** within a list, strongest first. The page arc in `index.astro`'s comment is
  decided; don't reorder sections, only items within them.
- **Disclosure level (§10):** is something on the landing that most visitors don't need
  to decide to download? Propose moving it one level down (a feature page, `/download`,
  `/about`, the footer). Never delete a claim or feature; move it. If its destination
  page isn't built yet, say so.
- **Rhythm:** uneven spacing, misaligned edges, a section that looks heavier than its
  importance. Fix with existing tokens and components only.
- **Motion (§7):** a pin that holds after its animation ends, or motion that repeats or
  overshoots, is a finding. Propose shortening (in svh) or calming, not new motion.

### 3. Do I need two of the same thing here? (duplication)

- The same claim, action or fact **visible twice on one screen, or said twice across the
  page**: two download buttons in one viewport, "free" or "no account" in two sections,
  a feature in both a signature section and the roster, a header link and a section link
  to the same place side by side.
- The same idea said twice in copy (a title, then a lede, then a caption).
- `home.ts` says each claim is made once and names the owner section. A claim outside its
  owner is a finding.
- **Not duplication:** the download repeated at the hero, after the book and in the
  footer (decided), or a header link to a section further down. Only flag what's
  redundant for the visitor.
- When two copies exist, recommend which one stays and why (where the visitor looks
  first, or which section owns it).

## What you may not do

- No new components, tokens, colours, fonts, icons, imagery or sections. No restyling of
  the hero, the app window, the band, the brand or the wordmark.
- Nothing in §2 "What's working" or the owner decisions changes.
- No removed features or claims. They can move down a level, never vanish.
- No change to behaviour, links, the download logic or data in `release.ts`. Copy, order,
  grouping, spacing-by-token, pin length and visibility only.
- Don't rewrite a section wholesale. If one truly needs more than refinement, say so in
  one line and leave it for a design-review round.
- Both themes, AA contrast, keyboard reach, reduced motion, no horizontal scroll at 375,
  and no layout shift still hold after every edit.

## Output for a review run

Change no code. Write `docs/refine/<surface>.md` (one file per surface; with `landing` or
`all`, one per section plus an index ranked by impact), and keep each one short. For each
surface:

1. **Verdict, one line:** "Mostly fine, two cuts" or "Busy: three things compete for the
   eye".
2. **Findings**, numbered, highest impact first, each with:
   - which question it answers (Words / Layout / Duplicate),
   - where it is (file and line, and the screenshot),
   - **before → after**, shown literally for copy (`"Everything you need to plan your
     book is right here in one place"` → `"Plan the book here"`), and in one sentence for layout,
   - the size of the change (copy only, reorder, move, remove a duplicate, pin length).
3. **Leave alone:** things you considered and decided are fine, so I know you looked.

With several surfaces, number findings across all of them (`hero 1`, `roster 3`) so I can
answer in one message. Keep it to the findings that matter; ten sharp ones beat thirty
small ones. Then **stop** and list the finding numbers. I'll answer per finding: yes, no,
or a tweak ("4, but keep the meta line"). Never pick for me, and never treat silence as a
yes.

## `apply`

Only for findings I've said yes to, exactly as I've tweaked them.

1. Branch `refine/<surface>` from the current branch. If the working tree has uncommitted
   changes that aren't yours, ask before branching or committing.
2. Make the edits, nothing else.
3. Recapture the surface the same way as the review, and put after shots beside the
   before shots in `design-iterations/refine/<surface>/after/`. Any visual change I
   didn't approve is a regression: fix it or bring it to me.
4. If a copy rule or claim owner you applied isn't written down yet, add it to the header
   comment in `src/data/home.ts` (or the relevant data file) in the same change. If a
   component's usage changed, update `design-iterations/final/COMPONENTS.md`.
5. Run `npm run build`. It must pass with no warnings, and no link in `dist` may point to
   a missing page.
6. Commit with Conventional Commits (`refactor(copy): tighten the roster`), and record
   each applied finding in `docs/refine/decisions.md` (date, surface, finding, what
   changed) so it isn't reopened.

## Taste, briefly

Quieter beats cleverer. Shorter beats more complete. One clear thing beats two helpful
ones. Big type, monochrome, grain: keep the page feeling like a studio, not SaaS. If
you're unsure whether a cut loses meaning, propose it and say what the risk is; I'll
decide.
