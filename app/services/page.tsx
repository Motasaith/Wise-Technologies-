import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import ServicesPage from '@/src/page-content/Services'
import Footer from '@/src/sections/Footer'

export const metadata: Metadata = {
  title: 'Services — 13+ Web Solutions',
  description: 'Explore our 13+ services including bespoke software, cloud solutions, AI integration, app design, SEO, and cybersecurity. Software house in Rahim Yar Khan, Pakistan.',
  keywords: ['web development', 'software house', 'AI integration', 'cloud solutions', 'SEO services', 'app development', 'Rahim Yar Khan', 'Pakistan'],
  openGraph: {
    title: 'Our Services — Wise Technologies',
    description: '13+ services including web development, AI integration, cloud solutions, and cybersecurity.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://wisetechryk.com/services',
  },
}

export default function Services() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Wise Technologies Services',
    provider: {
      '@type': 'Organization',
      name: 'Wise Technologies',
      url: 'https://wisetechryk.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Rahim Yar Khan, Pakistan',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Solutions',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity' } },
      ],
    },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </div>
  )
}
