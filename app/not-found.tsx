'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-[#2c3e50] mb-4" style={{ fontFamily: "'Kalam', cursive" }}>
          404
        </h1>
        <p className="text-xl text-[var(--text-muted)] mb-2" style={{ fontFamily: "'Kalam', cursive" }}>
          Page not found
        </p>
        <p className="text-[var(--text-muted)] mb-8">
          Looks like this page wandered off. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#2c3e50] text-white rounded-lg hover:bg-[#1a252f] transition-colors"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
