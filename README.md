# Wise Technologies — A Web Solution Provider

A modern, sketchbook-styled website for **Wise Technologies**, a software house based in Rahim Yar Khan, Pakistan. Built with **Next.js 16**, **React 18**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.6 | React framework with App Router |
| React | 18.3.1 | UI library |
| TypeScript | ~6.0 | Type safety |
| Tailwind CSS | v4.3.0 | Utility-first styling |
| Framer Motion | 12.40.0 | Animations & scroll effects |
| Lucide React | 1.16.0 | Icons |
| Anime.js | 4.4.1 | SVG animations |
| Vercel Analytics | latest | Performance monitoring |
| Vercel Speed Insights | latest | Web vitals tracking |

## Features

- **Sketchbook Design** — Warm sepia palette with hand-drawn borders, paper lines, and doodle decorations
- **Floating Tech Icons** — Animated laptop, terminal, code brackets, gear, cloud, database, WiFi, and cursor icons in the hero
- **Scroll Animations** — Framer Motion `useInView` triggers for cards, text, and dividers
- **Sticky Note Cards** — Colorful post-it style service cards with hover effects
- **Responsive Layout** — Mobile-first with hidden spiral binding on small screens
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, structured data, sitemap, robots.txt
- **Performance** — Image optimization (WebP/AVIF), video optimization, font preloading
- **Security** — Security headers, CSP, XSS protection, HSTS
- **Accessibility** — Skip links, ARIA labels, semantic HTML, form validation
- **PWA Ready** — Web app manifest for installable experience
- **Analytics** — Vercel Analytics and Speed Insights integrated

## Project Structure

```
app/
  layout.tsx          # Root layout with Google Fonts, Analytics, Schema.org data
  page.tsx            # Home page composition
  globals.css         # Tailwind v4 + custom CSS variables
  loading.tsx         # Loading state UI
  error.tsx           # Error boundary UI
  not-found.tsx       # 404 page
  manifest.ts         # PWA manifest
  robots.ts           # robots.txt generation
  sitemap.ts          # sitemap.xml generation
  blog/               # Blog listing and post pages
  services/           # Services page
src/
  sections/           # Page sections (HeroSketch, About, Features, etc.)
  components/         # Reusable components (Header, Logo, etc.)
  page-content/       # Page-specific content (Blog.tsx, Services.tsx)
  data/             # Blog data and types
public/
  hero_section.mp4          # Original hero video
  hero_section-optimized.*  # Optimized video files
  og-image.jpg               # Original OG image
  og-image.webp              # Optimized OG image
  og-image.avif              # AVIF OG image
```

## Development

```bash
npm install
npm run dev          # Dev server on http://localhost:3000
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run analyze      # Bundle analysis
```

## Production Deployment

### Pre-deployment Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` environment variable in Vercel
- [ ] Add Google Analytics ID to environment variables (optional)
- [ ] Update Google Search Console verification code in `app/layout.tsx`
- [ ] Configure custom domain in Vercel
- [ ] Set up Vercel Analytics and Speed Insights (auto-enabled)
- [ ] Test contact form submission (currently client-side only)
- [ ] Add actual email service (Resend, SendGrid, or Formspree)

### Build & Deploy

```bash
# Generate optimized assets
npm run optimize:images
npm run optimize:video  # requires ffmpeg

# Verify build
npm run build

# Deploy to Vercel
vercel --prod
```

### Environment Variables

Create a `.env.local` file (do NOT commit):

```env
NEXT_PUBLIC_SITE_URL=https://wisetechryk.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Security Features

- **X-Frame-Options: DENY** — Prevents clickjacking
- **X-Content-Type-Options: nosniff** — Prevents MIME sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** — Controls referrer info
- **Permissions-Policy** — Restricts browser features
- **HSTS** — Enforces HTTPS
- **CSP** — Content Security Policy with strict rules
- **Cache headers** — Long-term caching for static assets

### Performance Optimizations

- Image formats: AVIF, WebP with fallbacks
- Video optimization: WebM + MP4 with poster image
- Font preloading and `display: swap`
- Static generation for all pages
- Security headers for caching
- Bundle analysis available via `npm run analyze`

### Accessibility

- Skip to main content link
- ARIA labels for navigation and interactive elements
- Semantic HTML structure
- Form validation with error messages
- Focus management for mobile menu
- Reduced motion support (add `prefers-reduced-motion` styles as needed)

## CI/CD

GitHub Actions workflow at `.github/workflows/ci.yml` runs on every PR:
- Lint check
- TypeScript compilation
- Production build
- Security audit

## Design Notes

- **Fonts**: Kalam (handwriting), Caveat (cursive notes), Instrument Serif (headings)
- **Colors**: Warm paper `#F5F0E6`, ink `#2C2C2C`, highlight yellow `#ffeb3b`, accent red `#e74c3c`
- **Borders**: `sketch-border` class creates hand-drawn wobbly borders via CSS
- **Animations**: All scroll-triggered animations use `once: true` to prevent re-triggering

## License

© 2026 Wise Technologies RYK. All Rights Reserved.
