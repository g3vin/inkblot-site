# Inkblot website: what still has to be supplied (direction M)

Every item below is a labelled slot or a [bracket] in `m-final/index.html` today. Nothing
on the page should go live with a placeholder in it.

## App screenshots and loops (from the finished app)

| Where | What | Size and format |
|---|---|---|
| Hero, the rising window | The editor mid-chapter. A 15–20 s loop if possible, one version per theme (Paper, Ink) | 16:10, 2560×1600 master. Loop under 3 MB, poster WebP/AVIF |
| Night | The editor in Pitch black, Ember text | 16:9, 2560×1440 |
| Marketplace | A chapter or poem under review, with another writer's margin notes | 21:9, 2560×1097 |
| Window titles | Real document names to replace "The Lighthouse Keeper — Chapter 3" and "Review · Chapter 3" | Text |

## Print and proof

| Where | What | Notes |
|---|---|---|
| Book | A real two-page 6×9 spread exported from Inkblot (a page plus a chapter opening) | Export at 2× and crop to the spread |
| Proof | A sample book: a public-domain text typeset in Inkblot, with its PDF and EPUB to download | Pick the title |
| Proof | Its cover, with art by a credited human artist (commissioned or public domain) | Credit on the page |
| Proof | Two real testimonials from beta writers, ideally one about a marketplace review | Get written permission. Never invent quotes |

## Photographs and footage

| Where | What | Notes |
|---|---|---|
| Hero | **Done:** *Leaves in summer*, Joaquim Baeta, CC BY 4.0 (slowed, looped) | Optionally replace with your own clip later |
| Marketplace band | A place photograph: a window seat, someone reading | Vivid, the same grade as the leaves, with a Courier caption and credit |
| Sharing | An OG image: a place photograph plus "Write.", 1200×630 | One per page later |

## Copy and decisions still open

| Item | Where it shows | Current placeholder |
|---|---|---|
| Open Collective page | Price, footer, `/support` | opencollective.com/inkblot (create it; slug may change) |
| Public repository URL | Nav, Price, footer, Protections | github.com/g3vin/inkblot (going public now, before launch) |
| Publisher name | Footer © | [Soupy Orange Cats Co-op], from PRIVACY.md |
| Store and download links for six platforms | Hero, header, footer | `#download-*` |
| Version, date and size | Spec line, if you want one back in the hero | Removed in M |
| The full pledge page | "Our pledge →" | Not written yet; the audit's §2a has a draft |
| Marketplace details | Coins, deadlines, watermark wording | Taken from issues #57 and #65–70. Re-check before launch |

## Must change before launch (not design)

- **PRIVACY.md now contradicts the site and the plan.** It says Inkblot has no user
  accounts and no developer-run servers. Accounts (#23), the marketplace and its backend,
  and the steganographic watermarks that identify readers all change that. Update the
  policy and the App Store privacy answers.
- **SITE_PLAN.md is out of date.** It plans a Mac-only download, an FAQ, Fern, and a
  different page order. Update it to M before building the Astro site.
- **"Hard to copy"** is worded as best-effort ("wherever the device allows") because #69
  says blocking can't be guaranteed. Keep it that way unless that changes.
- **The app's brand green is still Deep fern.** The site now uses Sage. Decide whether the
  app follows (tokens.css, DESIGN.md, the showcase), so the two match.
