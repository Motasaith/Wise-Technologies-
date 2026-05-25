# Wise Technologies — A Web Solution Provider

A modern, sketchbook-styled website for **Wise Technologies**, a software house based in Rahim Yar Khan, Pakistan. Built with **Next.js 14**, **React 18**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.35 | React framework with App Router |
| React | 18.3.1 | UI library |
| TypeScript | ~5.6 | Type safety |
| Tailwind CSS | v4.3.0 | Utility-first styling |
| Framer Motion | 12.4.0 | Animations & scroll effects |
| Lucide React | latest | Icons |

## Features

- **Sketchbook Design** — Warm sepia palette with hand-drawn borders, paper lines, and doodle decorations
- **Floating Tech Icons** — Animated laptop, terminal, code brackets, gear, cloud, database, WiFi, and cursor icons in the hero
- **Scroll Animations** — Framer Motion `useInView` triggers for cards, text, and dividers
- **Sticky Note Cards** — Colorful post-it style service cards with hover effects
- **Responsive Layout** — Mobile-first with hidden spiral binding on small screens
- **Static Export** — Built for deployment to any static host

## Project Structure

```
app/
  layout.tsx          # Root layout with Google Fonts (Kalam, Caveat, Instrument Serif)
  page.tsx            # Home page composition
  globals.css         # Tailwind v4 + custom CSS variables
  blog/               # Blog page
  services/           # Services page
src/
  sections/           # Page sections (HeroSketch, About, Features, etc.)
  components/         # Reusable components (Header, Logo, etc.)
  page-content/       # Page-specific content (Blog.tsx, Services.tsx)
public/
  hero_section.mp4    # Hero background video
```

## Development

```bash
npm install
npm run dev          # Dev server on http://localhost:3000
npm run build        # Static export to dist/
```

## Design Notes

- **Fonts**: Kalam (handwriting), Caveat (cursive notes), Instrument Serif (headings)
- **Colors**: Warm paper `#F5F0E6`, ink `#2C2C2C`, highlight yellow `#ffeb3b`, accent red `#e74c3c`
- **Borders**: `sketch-border` class creates hand-drawn wobbly borders via CSS
- **Animations**: All scroll-triggered animations use `once: true` to prevent re-triggering

## License

© 2026 Wise Technologies RYK. All Rights Reserved.
