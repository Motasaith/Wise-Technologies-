"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Lightbulb, Pen, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: '/', type: 'link' as const },
  { label: 'About', href: '/#about', type: 'link' as const },
  { label: 'Services', href: '/services', type: 'link' as const },
  { label: 'Tech', href: '/#techstack', type: 'link' as const },
  { label: 'Blog', href: '/blog', type: 'link' as const },
  { label: 'Contact', href: '/#contact', type: 'link' as const },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) return
    e.preventDefault()
    const id = href.split('#')[1]
    if (id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4 animate-slide-down"
    >
      <div
        className="max-w-6xl mx-auto sketch-border bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 transition-shadow duration-300"
        style={{
          boxShadow: scrolled ? '5px 5px 0px rgba(74,74,74,0.15)' : '5px 5px 0px rgba(74,74,74,0.08)',
        }}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo with lightbulb */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-[#e74c3c] animate-pulse" />
              <Logo className="h-7 md:h-9 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => item.href.includes('#') ? handleAnchorClick(e, item.href) : undefined}
                  className="group relative block text-sm font-medium whitespace-nowrap py-1 transition-all duration-300 hover:-translate-y-1"
                  style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
                >
                  <span className="block transition-colors duration-300 group-hover:text-[#e74c3c]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Say Hello CTA */}
            <Link
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, '/#contact')}
              className="btn-drawn text-sm ml-4"
            >
              Say Hello!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--text-primary)] focus:outline-none p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Pen className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute left-4 right-4 top-24 z-40 sketch-border bg-white/95 backdrop-blur-sm p-4 animate-fade-in-down"
        >
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => item.href.includes('#') ? handleAnchorClick(e, item.href) : setMobileOpen(false)}
                className="text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
                style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleAnchorClick(e, '/#contact')}
              className="btn-drawn w-full text-center mt-2"
            >
              Say Hello!
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
