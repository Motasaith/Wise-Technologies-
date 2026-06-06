import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { servicesData } from '@/src/data/servicesData'
import ServiceDetailPage from '@/src/page-content/ServiceDetail'

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.title} | Wise Technologies`,
    description: service.desc,
    openGraph: {
      title: `${service.title} | Wise Technologies`,
      description: service.desc,
      type: 'website',
      images: [{ url: 'https://wisetechnologiesryk.com/og-image.avif', width: 800, height: 600, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Wise Technologies`,
      description: service.desc,
      images: ['https://wisetechnologiesryk.com/og-image.avif'],
    },
    alternates: {
      canonical: `https://wisetechnologiesryk.com/services/${service.slug}`,
    },
  }
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.desc,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Wise Technologies RYK',
      'url': 'https://wisetechnologiesryk.com',
    },
    'areaServed': 'Global',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': service.title,
      'itemListElement': service.features.map((f) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': f.title,
          'description': f.desc,
        },
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://wisetechnologiesryk.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://wisetechnologiesryk.com/services',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': service.title,
        item: `https://wisetechnologiesryk.com/services/${slug}`,
      },
    ],
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailPage slug={slug} />
    </div>
  )
}
