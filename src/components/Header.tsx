import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Lightbulb, Pen, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: '#', type: 'anchor' as const },
  { label: 'About', href: '#about', type: 'anchor' as const },
  { label: 'Services', to: '/services', type: 'link' as const },
  { label: 'Tech', href: '#techstack', type: 'anchor' as const },
  { label: 'Blog', to: '/blog', type: 'link' as const },
  { label: 'Contact', href: '#contact', type: 'anchor' as const },
]

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85])
  const navGap = useTransform(scrollY, [0, 100], [40, 24])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="max-w-7xl mx-auto sketch-border bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2"
        style={{
          boxShadow: scrolled ? '5px 5px 0px rgba(74,74,74,0.15)' : '5px 5px 0px rgba(74,74,74,0.08)',
        }}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo with lightbulb */}
          <motion.div style={{ scale: logoScale }} className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-[#e74c3c] animate-pulse" />
              <Logo className="h-7 md:h-9 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 md:gap-4">
            <motion.nav
              className="flex items-center"
              style={{ gap: navGap }}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {item.type === 'link' ? (
                    <Link
                      to={item.to!}
                      className="group relative block overflow-hidden text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap py-1 transition-all duration-300 hover:-translate-y-1"
                      style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
                    >
                      <span className="relative block">
                        <span className="block transition-colors duration-300 group-hover:text-[#e74c3c]">
                          {item.label}
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="group relative block overflow-hidden text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap py-1 transition-all duration-300 hover:-translate-y-1"
                      style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
                    >
                      <span className="relative block">
                        <span className="block transition-colors duration-300 group-hover:text-[#e74c3c]">
                          {item.label}
                        </span>
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Say Hello CTA */}
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="btn-drawn text-sm ml-4"
            >
              Say Hello!
            </a>
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute left-4 right-4 top-24 z-40 sketch-border bg-white/95 backdrop-blur-sm p-4"
        >
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.label}
                  to={item.to!}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
                  style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-base font-medium transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
                  style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="btn-drawn w-full text-center mt-2"
            >
              Say Hello!
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
