#!/usr/bin/env node
/**
 * sync-app.mjs — fetch what the site shows of the app from the app's latest release.
 *
 *   npm run sync                                  # the latest release (also runs before every build)
 *   APP_TAG=v0.2.0 npm run sync                   # one release (the deploy sets this on a release)
 *   npm run sync -- --local ../programming-projects/inkblot/showcase/out
 *                                                 # captures not yet released, for a preview
 *
 * Each app release carries site-content.zip, made by the app's showcase/capture.mjs: a
 * manifest.json (version, date, changelog, every screenshot and loop by id) and the media
 * it lists. This writes the manifest to src/data/app.generated.json and the media to
 * public/media/app/. Both are generated: gitignored, never edited by hand.
 * src/data/app.ts reads them.
 *
 * Downloads are cached by tag in .cache/app/. With no network or no release yet, the
 * build goes on with what it had (or with placeholders), except when APP_TAG names a
 * release: then the deploy is for that release, and failing to get it fails the build.
 *
 * APP_REPO (default g3vin/inkblot); APP_REPO_TOKEN or GITHUB_TOKEN, when set, for the
 * rate limit or a private repo.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { unzipSync } from 'fflate'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const MEDIA = path.join(root, 'public/media/app')
const GENERATED = path.join(root, 'src/data/app.generated.json')
const CACHE = path.join(root, '.cache/app')
const REPO = process.env.APP_REPO || 'g3vin/inkblot'
const TOKEN = process.env.APP_REPO_TOKEN || process.env.GITHUB_TOKEN
const TAG = process.env.APP_TAG || ''
const SCHEMA = 1

const args = process.argv.slice(2)
const localDir = args.includes('--local') ? path.resolve(args[args.indexOf('--local') + 1] ?? '') : null

const say = (message) => console.log(`[sync-app] ${message}`)

/** Give up: fatal when a release was asked for by name, otherwise build with what's there. */
function giveUp(reason) {
  if (TAG) {
    console.error(`[sync-app] ${reason}`)
    process.exit(1)
  }
  const kept = fs.existsSync(GENERATED) ? JSON.parse(fs.readFileSync(GENERATED, 'utf8')).app?.tag : null
  say(`${reason} — ${kept ? `keeping ${kept}` : 'building with placeholders'}.`)
  process.exit(0)
}

async function github(url, accept = 'application/vnd.github+json') {
  const response = await fetch(url, {
    headers: { Accept: accept, 'User-Agent': 'inkblot-site', ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}) },
  })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`)
  return response
}

/** The release's site-content.zip, from the cache or GitHub: { tag, files }. */
async function fromRelease() {
  const release = await (await github(`https://api.github.com/repos/${REPO}/releases/${TAG ? `tags/${TAG}` : 'latest'}`)).json()
  const cached = path.join(CACHE, release.tag_name, 'site-content.zip')
  if (!fs.existsSync(cached)) {
    const asset = release.assets?.find((a) => a.name === 'site-content.zip')
    if (!asset) throw new Error(`release ${release.tag_name} has no site-content.zip (did its Release workflow finish?)`)
    say(`downloading ${release.tag_name}/site-content.zip (${(asset.size / 1048576).toFixed(1)} MB)`)
    const zip = Buffer.from(await (await github(asset.url, 'application/octet-stream')).arrayBuffer())
    fs.mkdirSync(path.dirname(cached), { recursive: true })
    fs.writeFileSync(cached, zip)
  } else {
    say(`${release.tag_name} from the cache`)
  }
  const entries = unzipSync(new Uint8Array(fs.readFileSync(cached)))
  return { tag: release.tag_name, files: (name) => entries[name] ?? null }
}

/** A showcase/out directory: { tag, files }. */
function fromLocal(dir) {
  if (!fs.existsSync(path.join(dir, 'manifest.json'))) throw new Error(`no manifest.json in ${dir}`)
  return { tag: 'local', files: (name) => { const p = path.join(dir, name); return fs.existsSync(p) ? fs.readFileSync(p) : null } }
}

/** Every media path a manifest lists. */
function listedMedia(manifest) {
  const out = []
  for (const shot of Object.values(manifest.shots)) {
    for (const t of Object.values(shot.themes)) {
      if (t.images) for (const i of t.images) out.push(i.avif, i.webp)
      for (const key of ['mp4', 'webm', 'poster']) if (t[key]) out.push(t[key])
    }
  }
  return out
}

let source
try {
  source = localDir ? fromLocal(localDir) : await fromRelease()
} catch (error) {
  giveUp(`could not get the app's site content: ${error.message}`)
}

const manifestBytes = source.files('manifest.json')
if (!manifestBytes) giveUp(`${source.tag}: site-content.zip has no manifest.json`)
const manifest = JSON.parse(Buffer.from(manifestBytes).toString('utf8'))
if (manifest.schema !== SCHEMA) {
  // A newer app speaks a manifest this site can't read yet: fail loudly rather than show it half.
  console.error(`[sync-app] ${source.tag}: manifest schema ${manifest.schema}, this site reads ${SCHEMA}. Update src/data/app.ts and this script.`)
  process.exit(1)
}

const media = listedMedia(manifest)
const missing = media.filter((m) => !source.files(m))
if (missing.length) {
  console.error(`[sync-app] ${source.tag}: the manifest lists files that aren't there: ${missing.join(', ')}`)
  process.exit(1)
}

fs.rmSync(MEDIA, { recursive: true, force: true })
for (const name of media) {
  const out = path.join(MEDIA, name.replace(/^media\//, ''))
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, source.files(name))
}
fs.writeFileSync(GENERATED, `${JSON.stringify({ ...manifest, source: source.tag }, null, 2)}\n`)
say(`${manifest.app.tag} (${manifest.app.version}): ${Object.keys(manifest.shots).length} shots, ${media.length} files → public/media/app/`)
