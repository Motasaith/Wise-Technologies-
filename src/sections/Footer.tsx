"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Globe, ExternalLink } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/wise.technologiez/', icon: Globe },
  { label: 'LinkedIn', href: 'https://pk.linkedin.com/company/wise-tech-center', icon: ExternalLink },
]

/* Torn paper edge at top */
const TornPaperEdge = () => (
  <svg className="absolute -top-3 left-0 w-full h-6" viewBox="0 0 1200 24" preserveAspectRatio="none">
    <path
      d="M0,12 L20,8 L40,14 L60,6 L80,12 L100,10 L120,14 L140,8 L160,12 L180,6 L200,14 
         L220,10 L240,8 L260,12 L280,14 L300,6 L320,12 L340,10 L360,8 L380,14 L400,12 
         L420,6 L440,10 L460,14 L480,8 L500,12 L520,6 L540,14 L560,10 L580,12 L600,8 
         L620,14 L640,6 L660,12 L680,10 L700,8 L720,14 L740,12 L760,6 L780,10 L800,14 
         L820,8 L840,12 L860,6 L880,14 L900,10 L920,8 L940,12 L960,14 L980,6 L1000,12 
         L1020,10 L1040,8 L1060,14 L1080,12 L1100,6 L1120,10 L1140,14 L1160,8 L1180,12 L1200,10"
      stroke="#C8C0B0"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

/* Animated hand-drawn underline */
const DoodleUnderline = ({ width = 80 }: { width?: number }) => (
  <motion.svg
    className="absolute -bottom-1 left-0"
    width={width}
    height="8"
    viewBox={`0 0 ${width} 8`}
    fill="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
  >
    <motion.path
      d={`M2,6 Q${width * 0.25},2 ${width * 0.5},5 T${width - 2},4`}
      stroke="#e74c3c"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
    />
  </motion.svg>
)

/* Scribble divider SVG */
const ScribbleDivider = () => (
  <svg className="w-full h-6 mb-8" viewBox="0 0 800 24" preserveAspectRatio="none">
    <path
      d="M0,12 Q40,4 80,12 T160,12 T240,12 T320,12 T400,12 T480,12 T560,12 T640,12 T720,12 T800,12"
      stroke="#C8C0B0"
      strokeWidth="2"
      strokeDasharray="6 4"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="400" cy="12" r="4" fill="#e74c3c" opacity="0.6" />
  </svg>
)

/* Doodle checkbox */
const DoodleCheckbox = ({ checked = true }: { checked?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="16" height="16" rx="2" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    {checked && <path d="M4 9 L7 12 L13 6" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
  </svg>
)

/* Paper clip decoration */
const PaperClip = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="48" viewBox="0 0 24 48" fill="none">
    <path
      d="M8,44 L8,12 C8,8 10,6 14,6 C18,6 20,8 20,12 L20,36 C20,40 18,42 14,42 C10,42 8,40 8,36 L8,16"
      stroke="#8B8680"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.4"
    />
  </svg>
)

/* Coffee stain decoration */
const CoffeeStain = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="55" stroke="#A09080" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" fill="none" />
    <circle cx="60" cy="60" r="45" stroke="#A09080" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.1" fill="none" />
    <circle cx="60" cy="60" r="35" stroke="#A09080" strokeWidth="0.5" opacity="0.08" fill="none" />
    <ellipse cx="75" cy="50" rx="8" ry="5" fill="#A09080" opacity="0.06" />
  </svg>
)

/* Floating doodle star */
const DoodleStar = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10,2 L11.5,7.5 L17,8 L12.5,11.5 L14,17 L10,13.5 L6,17 L7.5,11.5 L3,8 L8.5,7.5 Z" 
      stroke="#e74c3c" strokeWidth="1" fill="none" opacity="0.3" strokeLinejoin="round" />
  </svg>
)

/* Sketchy arrow */
const SketchyArrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="40" height="30" viewBox="0 0 40 30" fill="none">
    <path d="M2,15 Q15,5 25,12 T38,8" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
    <path d="M32,4 L38,8 L34,14" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3" />
  </svg>
)

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-8 px-4 md:px-6 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Torn paper edge at top */}
      <TornPaperEdge />

      {/* Floating doodle decorations */}
      <motion.div
        className="absolute top-20 right-10"
        animate={{ rotate: [0, 15, -10, 0], y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoodleStar />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-8"
        animate={{ rotate: [0, -12, 8, 0], y: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <DoodleStar />
      </motion.div>

      {/* Coffee stain - subtle background decoration */}
      <motion.div
        className="absolute top-32 left-1/4 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <CoffeeStain />
      </motion.div>

      {/* Top scribble divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <ScribbleDivider />
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand column - wider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 relative"
          >
            {/* Paper clip on brand card */}
            <PaperClip className="absolute -top-4 -right-2 z-10" />

            <div className="sketch-border p-6 bg-white transform -rotate-1 relative"
              style={{ boxShadow: '4px 4px 0px rgba(44,62,80,0.1)' }}
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: 'var(--text-primary)', fontFamily: "'Kalam', cursive" }}
              >
                Wise Technologies
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
              >
                A Web Solution Provider based in Rahim Yar Khan, Pakistan. We transform ideas into powerful digital experiences.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <MapPin className="w-3.5 h-3.5 text-[#e74c3c]" />
                  <span style={{ fontFamily: "'Kalam', cursive" }}>R-130, Rahim Garden, RYK</span>
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <Mail className="w-3.5 h-3.5 text-[#e74c3c]" />
                  <span style={{ fontFamily: "'Kalam', cursive" }}>hello@wisetech.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <Phone className="w-3.5 h-3.5 text-[#e74c3c]" />
                  <span style={{ fontFamily: "'Kalam', cursive" }}>+92 300 1234567</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h4
              className="text-sm font-bold mb-4 flex items-center gap-2 relative inline-block"
              style={{ color: 'var(--text-primary)', fontFamily: "'Kalam', cursive" }}
            >
              <DoodleCheckbox />
              Quick Links
              {isInView && <DoodleUnderline width={70} />}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm inline-flex items-center gap-1.5 group transition-all duration-300 hover:translate-x-1"
                    style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-[#e74c3c] opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.3 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social + Sticky Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4"
          >
            <h4
              className="text-sm font-bold mb-4 flex items-center gap-2 relative inline-block"
              style={{ color: 'var(--text-primary)', fontFamily: "'Kalam', cursive" }}
            >
              <DoodleCheckbox />
              Connect With Us
              {isInView && <DoodleUnderline width={80} />}
            </h4>

            {/* Social icons with sketchy arrow */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-border-thin p-2.5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    style={{ color: 'var(--text-muted)' }}
                    aria-label={link.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring" }}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
              <SketchyArrow className="ml-1" />
            </div>

            {/* Handwritten sticky note with tape */}
            <motion.div
              className="relative p-4 transform rotate-1"
              style={{
                background: '#feff9c',
                boxShadow: '2px 3px 8px rgba(0,0,0,0.12)',
                fontFamily: "'Caveat', cursive",
              }}
              initial={{ opacity: 0, rotate: 5 }}
              animate={isInView ? { opacity: 1, rotate: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            >
              {/* Washi tape strip */}
              <div 
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 opacity-40"
                style={{
                  background: 'repeating-linear-gradient(90deg, #e74c3c 0px, #e74c3c 4px, transparent 4px, transparent 8px)',
                  transform: 'translateX(-50%) rotate(-2deg)',
                }}
              />
              <p className="text-lg text-[#2c3e50] leading-snug">
                "Let's build something amazing together. Reach out anytime!"
              </p>
              <div className="mt-2 text-right text-sm text-[#e74c3c]">
                — Wise Technologies Team
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar with doodle decorations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Animated dotted line */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px border-t-2 border-dashed" 
            style={{ borderColor: 'var(--border-color)' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />

          <motion.p
            className="text-xs flex items-center gap-2"
            style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
              <text x="5.5" y="11" fontSize="9" fill="#e74c3c">C</text>
            </svg>
            © {new Date().getFullYear()} Wise Technologies RYK. All Rights Reserved.
          </motion.p>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="text-[10px] text-[var(--text-muted)] italic" style={{ fontFamily: "'Caveat', cursive" }}>
              Crafted with precision in Pakistan
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="sketch-border-thin p-1.5 inline-block cursor-pointer bg-transparent"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Back to top"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M8 14V2M4 6l4-4 4 4" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
