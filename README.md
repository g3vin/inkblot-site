# The Official Inkblot Website

The site at [inkblotwriting.studio](https://inkblotwriting.studio), built with
[Astro](https://astro.build) as a static site and deployed to GitHub Pages.

`SITE_PLAN.md` is the plan for the whole site. The landing page here is direction N from
`design-iterations/` (M, the chosen design, plus its motion). The prototypes stay there
for reference.

## Development

Node 22 is required.

```sh
npm install
npm run dev       # live at http://localhost:4321
npm run build     # static site in dist/ (runs `npm run sync` first)
npm run preview   # serve dist/ locally
npm run sync      # fetch the app's latest release content (see below)
```

## Content from the app

The site never holds a copy of anything the app can say about itself. Each app release
(a `v*` tag in `g3vin/inkblot`) runs the app's `showcase/capture.mjs`. It opens the real
app in WebKit on a sample book, captures every shot in its `showcase/shots.mjs`
(screenshots and 20 s loops, in Paper and Ink), and attaches them to the GitHub Release
as `site-content.zip`, with the version, date and changelog. Then it dispatches
`release-published` here.

`scripts/sync-app.mjs` runs before every build. It downloads that zip (cached in
`.cache/app/`), writes `src/data/app.generated.json` and the media to
`public/media/app/`, and `src/data/app.ts` reads them. None of these are committed.
Offline, or before the first release, the build uses placeholders. On a release
dispatch, `APP_TAG` pins the build to that release, and failing to fetch it fails the
build.

If a page asks for a shot id the app doesn't capture, the build fails and names it.

Secrets: `SITE_DISPATCH_TOKEN` in the app repo (a fine-grained token that can send
dispatches to this repo). While the app repo is private, also set `APP_REPO_TOKEN` here
(read access to its releases).

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys `dist` to GitHub Pages:
- on every push to `main`;
- on a `release-published` repository dispatch from the app repo;
- once a day.

`public/CNAME` holds the domain.

## How it's put together

| Where | What |
|---|---|
| `src/pages/index.astro` | The landing page: a list of sections, nothing else |
| `src/data/home.ts` | Every word on the landing page, section by section |
| `src/data/features.ts` | The roster: one entry per feature |
| `src/data/places.ts` | Photographs and footage, by id |
| `src/data/screens.ts` | App screenshots and loops, by id: the words here, the pictures from the app |
| `src/data/app.ts` | The app's version, changelog and captures, from its latest release |
| `scripts/sync-app.mjs` | Fetches that release's content before every build |
| `src/data/release.ts` | Platforms and their download links; the version and date come from the app |
| `src/data/site.ts`, `src/data/nav.ts` | Site facts, and the header and footer links |
| `src/components/` | One component per part of the page, each with its own styles and script |
| `src/layouts/Base.astro` | The document: head, header, page, footer |
| `src/styles/tokens.css` | Colours, type, spacing. Never hard-code a colour or face elsewhere |
| `src/styles/global.css` | Shared building blocks: layout, type, buttons, the app window, placeholder slots |
| `src/scripts/frame.ts` | The single animation loop every moving part registers with |
| `src/scripts/featureScenes.ts` | The drawings shown through the roster's cut until real screenshots exist |

Every moving part is laid out for its finished state. With no script, or under
`prefers-reduced-motion`, the reader sees the finished section and nothing pins.

## How to

**Change any copy on the landing page.** Edit `src/data/home.ts`. The copy rules are at
the top of that file.

**Add a feature.** Add an entry to `src/data/features.ts`. To give it a drawing in the
cut, add a function to `SCENES` in `src/scripts/featureScenes.ts` and use its key as
`scene`.

**Add an app screenshot or loop.** Add a shot to the app's `showcase/shots.mjs` (an id,
`still` or `loop`, its themes and size, and a short script that drives the app to the
moment). Add an entry with the same id to `src/data/screens.ts` for its alt text, title
and placeholder, and use it with `<AppWindow screen="id" />`. It appears with the next
app release. To see it before then, run `npm run showcase -- --only id` in the app, then
`npm run sync -- --local ../programming-projects/inkblot/showcase/out` here.

**Recapture after the app's UI changes.** Nothing to do: the next release recaptures
everything. To refresh an existing release, run the app's Release workflow by hand with
that tag.

**Add or swap a photograph or clip.** Add the files under `public/media/places/` and an
entry in `src/data/places.ts`, credit included. Then refer to it by id.

**Add a real testimonial.** Add it to `HOME.proof.testimonials` in `src/data/home.ts`,
only with the writer's written permission. The section appears once there is one.

**Change a download link.** Edit `src/data/release.ts`.
