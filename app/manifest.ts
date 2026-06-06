import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Wise Technologies — Web Solution Provider',
    short_name: 'Wise Technologies',
    description: 'Software house in Rahim Yar Khan, Pakistan. We build enterprise-grade web applications and custom software solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F0E6',
    theme_color: '#2c3e50',
    icons: [
      {
        src: '/favicon.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
