import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', href: '#', type: 'anchor' as const },
  { label: 'About', href: '#about', type: 'anchor' as const },
  { label: 'Services', to: '/services', type: 'link' as const },
  { label: 'Blog', to: '/blog', type: 'link' as const },
  { label: 'Jobs', href: '#contact', type: 'anchor' as const },
  { label: 'Contact', href: '#contact', type: 'anchor' as const },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/wise.technologiez/' },
  { label: 'LinkedIn', href: 'https://pk.linkedin.com/company/wise-tech-center' },
]

export default function Footer() {
  return (
    <footer className="border-t py-12 md:py-16 px-4 md:px-6"
      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo-white.svg" alt="Wise Technologies" className="h-10 md:h-12 w-auto mb-4 logo-theme" />
            <p className="text-xs md:text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              Wise Technologies RYK specializes in innovative tech solutions, providing expert IT services to businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-primary)' }}>Helpful Link</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.type === 'link' ? (
                    <Link
                      to={link.to!}
                      className="text-sm hover:text-accent transition-colors inline-flex items-center gap-1 group"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm hover:text-accent transition-colors inline-flex items-center gap-1 group"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--text-primary)' }}>Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors inline-flex items-center gap-1 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} All Rights Reserved by Wise Technologies RYK
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            R-130, Rahim Garden, near Gulshan e Iqbal, Rahim Yar Khan, Punjab 64200, Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
