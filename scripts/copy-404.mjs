import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf8')

const notFoundHtml = indexHtml.replace(
  '<title>Daniel Kling — Portfolio</title>',
  '<title>404 — Daniel Kling</title>'
)

mkdirSync(distDir, { recursive: true })
copyFileSync(join(distDir, 'index.html'), join(distDir, '404.html'))
console.log('Copied index.html to 404.html for SPA routing on GitHub Pages')
