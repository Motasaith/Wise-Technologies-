const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const publicDir = path.join(__dirname, '..', 'public')
const source = path.join(publicDir, 'hero_section.mp4')

if (!fs.existsSync(source)) {
  console.error('No hero_section.mp4 found in public/. Place your video at public/hero_section.mp4')
  process.exit(1)
}

const ffmpegCheck = spawnSync('ffmpeg', ['-version'])
if (ffmpegCheck.error) {
  console.error('ffmpeg not found in PATH. Install ffmpeg and re-run this script.')
  console.error('Example (winget): winget install Gyan.FFmpeg')
  process.exit(1)
}

const outMp4 = path.join(publicDir, 'hero_section-optimized.mp4')
const outWebm = path.join(publicDir, 'hero_section-optimized.webm')

console.log('Transcoding to optimized MP4 (H.264)')
spawnSync(
  'ffmpeg',
  ['-i', source, '-c:v', 'libx264', '-crf', '28', '-preset', 'medium', '-c:a', 'aac', '-b:a', '128k', outMp4],
  { stdio: 'inherit' }
)

console.log('Transcoding to WebM (VP9)')
spawnSync('ffmpeg', ['-i', source, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '33', '-c:a', 'libopus', outWebm], { stdio: 'inherit' })

console.log('Video optimization finished. Check the public/ folder for optimized files.')
