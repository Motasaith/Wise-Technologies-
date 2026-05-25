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
  title: 'Wise Technologies — A Web Solution Provider',
  description: 'We sketch the Digital Future. Creative web design and development studio.',
  keywords: ['web design', 'web development', 'creative agency', 'sketchbook design'],
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
