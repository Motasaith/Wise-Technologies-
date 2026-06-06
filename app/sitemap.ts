import type { MetadataRoute } from 'next'
import { servicesData } from '@/src/data/servicesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wisetechnologiesryk.com'
  const staticDate = new Date('2026-06-06')

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ollama-vs-openrouter-kimi-k2-6`,
      lastModified: new Date('2026-05-25'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/setup-openclaw-ollama`,
      lastModified: new Date('2026-05-20'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/setup-hermes-windows-ollama`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/setup-hermes-agent-windows-ollama-api`,
      lastModified: new Date('2026-05-16'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ollama-pro-plan-benefits`,
      lastModified: new Date('2026-05-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/nextjs-14-app-router-migration-guide`,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/why-local-llms-matter-2026`,
      lastModified: new Date('2026-05-05'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sketchbook-design-trend-2026`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: staticDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...coreRoutes, ...serviceRoutes]
}
