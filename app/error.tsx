'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-[#e74c3c] mb-4" style={{ fontFamily: "'Kalam', cursive" }}>
          Oops!
        </h1>
        <p className="text-xl text-[var(--text-muted)] mb-2" style={{ fontFamily: "'Kalam', cursive" }}>
          Something went wrong
        </p>
        <p className="text-[var(--text-muted)] mb-8">
          We&apos;re working on fixing this. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#2c3e50] text-white rounded-lg hover:bg-[#1a252f] transition-colors"
          style={{ fontFamily: "'Kalam', cursive" }}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
