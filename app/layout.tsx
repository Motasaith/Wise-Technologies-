import type { Metadata } from 'next'
import { Instrument_Serif, Kalam, Caveat } from 'next/font/google'
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
    creator: '@wisetechryk',
  },
  alternates: {
    canonical: 'https://wisetechryk.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${kalam.variable} ${caveat.variable}`}>
      <body className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
        {children}
      </body>
    </html>
  )
}
