import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import BlogPage from '@/src/page-content/Blog'
import Footer from '@/src/sections/Footer'

export const metadata: Metadata = {
  title: 'Blog — AI, Development & Automation Insights',
  description: 'Expert insights on AI infrastructure, local LLMs, web development, and design trends from Wise Technologies.',
  keywords: ['AI blog', 'local LLM', 'Ollama tutorial', 'web development', 'Next.js', 'software house blog', 'Pakistan tech'],
  openGraph: {
    title: 'Wise Technologies Blog',
    description: 'Expert insights on AI, development, and automation.',
    type: 'website',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://wisetechryk.com/blog',
  },
}

export default function Blog() {
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Wise Technologies Blog',
    url: 'https://wisetechryk.com/blog',
    description: 'Expert insights on AI infrastructure, local LLMs, web development, and design trends.',
    publisher: {
      '@type': 'Organization',
      name: 'Wise Technologies',
      logo: 'https://wisetechryk.com/logo.svg',
    },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Header />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </div>
  )
}
