"use client"

import { motion } from 'framer-motion'

/* Doodle SVG components */
const SpiralBinding = () => (
  <svg className="absolute left-0 top-0 h-full w-8 md:w-12" viewBox="0 0 40 800" preserveAspectRatio="none">
    {[...Array(24)].map((_, i) => (
      <ellipse
        key={i}
        cx="20"
        cy={30 + i * 32}
        rx="14"
        ry="8"
        fill="none"
        stroke="#4A4A4A"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        opacity="0.7"
      />
    ))}
  </svg>
)

const DoodleArrow = ({ className = '' }: { className?: string }) => (
  <svg className={`w-12 h-12 ${className}`} viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q 20 10, 36 20 T 40 36" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <polygon points="36,32 44,36 36,40" fill="#4A4A4A" opacity="0.5" />
  </svg>
)

const DoodleStar = ({ className = '' }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
    <path d="M16 4 L19 12 L28 12 L21 18 L24 28 L16 22 L8 28 L11 18 L4 12 L13 12 Z" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.4" />
  </svg>
)

const DoodleCircle = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.4" />
  </svg>
)

const DoodleCheckbox = ({ className = '' }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <path d="M7 12 L11 16 L17 8" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="2 2" fill="none" opacity="0.5" />
  </svg>
)

const DoodleLightbulb = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <path d="M14 28 Q 8 20, 12 12 Q 16 4, 24 8 Q 32 12, 28 20 Q 24 28, 20 28" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <rect x="16" y="28" width="8" height="6" rx="1" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.5" />
    <line x1="18" y1="34" x2="22" y2="34" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
  </svg>
)

const DoodleHeart = ({ className = '' }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
    <path d="M16 28 C 16 28, 4 20, 4 12 C 4 8, 8 4, 12 4 C 14 4, 16 6, 16 8 C 16 6, 18 4, 20 4 C 24 4, 28 8, 28 12 C 28 20, 16 28, 16 28 Z" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.4" />
  </svg>
)

const DoodleSmiley = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.4" />
    <circle cx="14" cy="16" r="2" fill="#4A4A4A" opacity="0.4" />
    <circle cx="26" cy="16" r="2" fill="#4A4A4A" opacity="0.4" />
    <path d="M12 24 Q 20 32, 28 24" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.4" />
  </svg>
)

const DoodleZigzag = ({ className = '' }: { className?: string }) => (
  <svg className={`w-16 h-6 ${className}`} viewBox="0 0 64 24" fill="none">
    <path d="M4 12 L16 4 L28 20 L40 4 L52 20 L60 12" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.4" />
  </svg>
)

export default function HeroSketch() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Paper lines background */}
      <div className="absolute inset-0 paper-lines pointer-events-none" />

      {/* Spiral binding on left */}
      <SpiralBinding />

      {/* Scattered doodles */}
      <DoodleStar className="absolute top-[12%] right-[8%] rotate-12" />
      <DoodleCircle className="absolute top-[22%] right-[18%] -rotate-12" />
      <DoodleArrow className="absolute top-[35%] right-[5%] rotate-45" />
      <DoodleCheckbox className="absolute top-[48%] right-[12%]" />
      <DoodleLightbulb className="absolute bottom-[30%] right-[8%] rotate-6" />
      <DoodleHeart className="absolute bottom-[18%] right-[20%] -rotate-12" />
      <DoodleSmiley className="absolute bottom-[10%] right-[6%]" />
      <DoodleZigzag className="absolute top-[60%] right-[15%]" />

      {/* Marginal notes / quotes */}
      <motion.p
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 1, rotate: -3 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-[15%] right-[4%] text-[10px] md:text-xs text-[var(--text-muted)] italic max-w-[120px] leading-relaxed"
        style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
      >
        "Precision in every line of code."
      </motion.p>

      <motion.p
        initial={{ opacity: 0, rotate: 2 }}
        animate={{ opacity: 1, rotate: 2 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-[25%] right-[3%] text-[10px] md:text-xs text-[var(--text-muted)] italic max-w-[100px] leading-relaxed"
        style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
      >
        "Design. Develop. Deliver."
      </motion.p>

      <motion.p
        initial={{ opacity: 0, rotate: -2 }}
        animate={{ opacity: 1, rotate: -2 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute top-[55%] right-[22%] text-[10px] md:text-xs text-[var(--text-muted)] italic"
        style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
      >
        "Excellence is in the details."
      </motion.p>

      {/* Main content grid */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-20 pt-32 pb-12">
        {/* Left: Sketch text + tagline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-xl"
        >
          {/* Brainstorming tag */}
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: -3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span
              className="text-lg md:text-xl text-[#e74c3c] border-b-2 border-dashed border-[#e74c3c]"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              # Wise Technologies
            </span>
          </motion.div>

          {/* Hand-drawn title */}
          <div className="relative mb-6">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
              style={{
                color: '#2c3e50',
                fontFamily: "'Kalam', cursive",
              }}
            >
              <span className="block">We Build the</span>
              <span
                className="block mt-2 highlight"
              >
                Digital Future
              </span>
            </h1>
            {/* Sketch underline */}
            <svg className="absolute -bottom-2 left-0 w-[80%] h-4" viewBox="0 0 300 16" preserveAspectRatio="none">
              <path
                d="M2 8 Q 75 2, 150 10 T 298 6"
                stroke="#4A4A4A"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-md"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            We build <span className="relative inline-block font-bold text-[var(--text-primary)]">
              enterprise-grade software
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q20,0 40,4 T80,4 T100,4" stroke="#e74c3c" strokeWidth="2" fill="none" />
              </svg>
            </span>, scalable web applications, and robust digital infrastructure for modern businesses.
          </motion.p>

          {/* Sketch-style CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a
              href="#about"
              className="relative inline-flex items-center gap-2 px-6 py-3 text-lg font-bold"
              style={{ fontFamily: "'Kalam', cursive", color: '#2c3e50' }}
            >
              <span className="absolute inset-0 border-2 border-[#2c3e50] -z-10 transition-all duration-200 hover:scale-105"
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', background: '#ffeb3b' }}
              />
              Explore Our Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </a>
          </motion.div>

          {/* Little doodle icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-4 mt-10"
          >
            <DoodleCheckbox />
            <DoodleLightbulb />
            <span className="text-xs text-[var(--text-muted)] italic ml-2" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
              trusted by 50+ clients
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Video workspace with tape */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-2xl w-full relative"
        >
          {/* Tape */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 z-20"
            style={{
              backgroundColor: 'rgba(255,255,255,0.6)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(2px)',
              transform: 'translateX(-50%) rotate(-3deg)',
              borderLeft: '2px dashed rgba(0,0,0,0.1)',
              borderRight: '2px dashed rgba(0,0,0,0.1)',
            }}
          />

          {/* Sketch frame around video */}
          <div className="relative sketch-border p-2 md:p-3 bg-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
            style={{ boxShadow: '5px 5px 0px rgba(44,62,80,0.15)' }}
          >
            <video
              src="/hero_section.mp4"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controls={false}
              className="w-full h-auto object-cover pointer-events-none select-none rounded-sm"
              style={{ display: 'block', filter: 'sepia(0.3) contrast(1.25)' }}
            />

            {/* Caption below video like a notebook annotation */}
            <p
              className="mt-3 text-center text-sm text-[var(--text-muted)]"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Transforming ideas into digital reality.
            </p>
          </div>

          {/* Floating note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 sketch-border p-4 bg-white transform -rotate-6 z-20 w-44"
            style={{ boxShadow: '3px 3px 0px rgba(44,62,80,0.1)' }}
          >
            <p className="font-bold text-sm text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>Our Mission:</p>
            <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'Architects Daughter', cursive" }}>Deliver cutting-edge technology solutions.</p>
            <div className="mt-2 text-[#e74c3c] text-xs flex items-center gap-1" style={{ fontFamily: "'Kalam', cursive" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 7l-8 8-4-4" />
              </svg>
              Since 2020
            </div>
          </motion.div>

          {/* Decorative floating doodle */}
          <div className="absolute -top-8 -right-6 text-5xl text-[#ff9add] transform rotate-12 opacity-80 z-0"
            style={{ fontFamily: "'Kalam', cursive" }}
          >
            *
          </div>
        </motion.div>
      </div>
    </section>
  )
}
