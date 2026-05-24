import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

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
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 md:py-4"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div style={{ scale: logoScale }}>
          <Link to="/">
            <Logo className="h-7 md:h-9 w-auto" />
          </Link>
        </motion.div>

        <div className="flex items-center gap-3 md:gap-4">
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
                    className="relative text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="relative z-10 group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-accent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="relative text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="relative z-10 group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-accent"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* Animated Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
