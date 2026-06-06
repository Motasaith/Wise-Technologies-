import type { Metadata } from 'next'
import { Instrument_Serif, Kalam, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-kalam',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://wisetechryk.com'),
  title: {
    default: 'Wise Technologies — A Web Solution Provider',
    template: '%s | Wise Technologies',
  },
  description: 'Wise Technologies is a software house in Rahim Yar Khan, Pakistan. We build enterprise-grade web applications, scalable digital infrastructure, and custom software solutions for modern businesses.',
  keywords: ['software house', 'web development', 'web design', 'enterprise software', 'digital solutions', 'Rahim Yar Khan', 'Pakistan', 'custom software', 'app development', 'cloud solutions'],
  authors: [{ name: 'Wise Technologies', url: 'https://wisetechryk.com' }],
  creator: 'Wise Technologies',
  publisher: 'Wise Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://wisetechryk.com',
    siteName: 'Wise Technologies',
    title: 'Wise Technologies — A Web Solution Provider',
    description: 'We build enterprise-grade web applications and custom software solutions for modern businesses.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Wise Technologies — Software House in Rahim Yar Khan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wise Technologies — A Web Solution Provider',
    description: 'We build enterprise-grade web applications and custom software solutions.',
    images: ['/og-image.webp'],
    creator: '@wisetechryk',
  },
  alternates: {
    canonical: 'https://wisetechryk.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'PK-PB',
    'geo.placename': 'Rahim Yar Khan',
    'geo.position': '28.4212;70.2989',
    'ICBM': '28.4212, 70.2989',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wise Technologies',
    url: 'https://wisetechryk.com',
    logo: 'https://wisetechryk.com/logo.svg',
    description: 'Software house in Rahim Yar Khan, Pakistan. We build enterprise-grade web applications, scalable digital infrastructure, and custom software solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rahim Yar Khan',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Urdu'],
    },
    sameAs: [
      'https://twitter.com/wisetechryk',
      'https://linkedin.com/company/wisetechryk',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Wise Technologies',
    url: 'https://wisetechryk.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://wisetechryk.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Wise Technologies RYK',
    image: 'https://wisetechryk.com/og-image.webp',
    '@id': 'https://wisetechryk.com/#localbusiness',
    url: 'https://wisetechryk.com',
    telephone: '+923000000000',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Town',
      addressLocality: 'Rahim Yar Khan',
      postalCode: '64200',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4212,
      longitude: 70.2989,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://twitter.com/wisetechryk',
      'https://linkedin.com/company/wisetechryk',
    ],
  }

  return (
    <html lang="en" className={`${instrumentSerif.variable} ${kalam.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2c3e50] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
