import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs'
import { dirname, join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects } from '../src/data/projects.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public', 'projects')
const dataFile = join(__dirname, '..', 'src', 'data', 'projects.js')

const TOKEN_MAP = {
  'max_3840_webp': 'max_3840',
  'max_1200_webp': 'max_1200',
  '1400_webp': '1400',
  'fs_webp': 'fs',
  'hd_webp': 'hd',
  'hd_still': 'hd',
  'max_632_webp': 'max_632',
  'max_316_webp': 'max_316',
  'disp_webp': 'disp',
  'max_808_webp': 'max_808',
  'original_webp': 'original',
}

function toNonWebp(url) {
  for (const [webp, plain] of Object.entries(TOKEN_MAP)) {
    if (url.includes(`/${webp}/`)) {
      return url.replace(`/${webp}/`, `/${plain}/`)
    }
  }
  return url
}

function getExt(url) {
  return extname(new URL(url).pathname)
}

async function download(url, dest) {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  writeFileSync(dest, buf)
  return buf.length
}

function collectItems(project) {
  const items = []
  if (project.cover) items.push({ key: 'cover', url: project.cover })
  project.images.forEach((url, i) => items.push({ key: `img-${i + 1}`, url }))
  return items
}

const PUBLIC_PREFIX = 'public'
const safePath = (dest) =>
  '/' + dest.split(PUBLIC_PREFIX)[1].split(/[\\/]+/).filter(Boolean).join('/')

async function main() {
  let data = readFileSync(dataFile, 'utf8')
  const replacements = []
  const failures = []

  for (const project of projects) {
    const dir = join(publicDir, project.id)
    mkdirSync(dir, { recursive: true })

    for (const item of collectItems(project)) {
      const attempts = item.url.startsWith('http') ? [toNonWebp(item.url), item.url] : []
      let succeeded = null

      for (const url of attempts) {
        const dest = join(dir, `${item.key}${getExt(url)}`)
        if (existsSync(dest)) {
          succeeded = { url, dest }
          break
        }
        try {
          await download(url, dest)
          succeeded = { url, dest }
          break
        } catch (e) {
          succeeded = null
        }
      }

      if (succeeded) {
        const path = safePath(succeeded.dest)
        const key = replacements.findIndex(r => r.from === item.url)
        const repl = { from: item.url, to: path }
        if (key === -1) replacements.push(repl)
        else replacements[key].to = path
      } else {
        failures.push(item.url)
      }
    }
  }

  for (const { from, to } of replacements) {
    data = data.split(from).join(to)
  }

  writeFileSync(dataFile, data)
  console.log(`Replaced ${replacements.length} remote URLs with local paths.`)
  if (failures.length) {
    console.log(`WARNING: ${failures.length} downloads failed:`)
    failures.forEach(f => console.log(`  - ${f}`))
  }
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})