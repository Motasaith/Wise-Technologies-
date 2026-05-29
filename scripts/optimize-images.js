const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const publicDir = path.join(__dirname, '..', 'public')

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return

  const dir = path.dirname(filePath)
  const base = path.basename(filePath, ext)
  const input = filePath

  try {
    const image = sharp(input)
    const meta = await image.metadata()
    const width = meta.width && meta.width > 1600 ? 1600 : meta.width || 1600

    const webpPath = path.join(dir, `${base}.webp`)
    const avifPath = path.join(dir, `${base}.avif`)

    await image.resize({ width }).webp({ quality: 80 }).toFile(webpPath)
    await image.resize({ width }).avif({ quality: 60 }).toFile(avifPath)

    console.log(`Optimized ${input} -> ${path.relative(process.cwd(), webpPath)}, ${path.relative(process.cwd(), avifPath)}`)
  } catch (err) {
    console.error('Failed to optimize', input, err.message)
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else processFile(full)
  }
}

console.log('Scanning public folder for images to optimize...')
walk(publicDir)
