"use client"

import { motion } from 'framer-motion'
import SketchDrawSVG from '../components/SketchDrawSVG'
import HandwrittenText from '../components/HandwrittenText'
import SketchUnderline from '../components/SketchUnderline'
import SpringyButton from '../components/SpringyButton'

/* Doodle SVG components */
const SpiralBinding = () => (
  <SketchDrawSVG
    className="absolute left-0 top-0 h-full w-8 md:w-12 hidden md:block"
    strokeColor="#4A4A4A"
    strokeWidth={1.5}
    duration={1500}
    delay={500}
    trigger="mount"
  >
    <svg viewBox="0 0 40 800" preserveAspectRatio="none">
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
  </SketchDrawSVG>
)

/* Floating tech doodles */
const FloatingLaptop = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <rect x="4" y="8" width="32" height="22" rx="2" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <rect x="8" y="12" width="24" height="14" rx="1" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.3" />
    <path d="M2 32 L38 32 L36 36 L4 36 Z" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <circle cx="20" cy="34" r="1.5" fill="#4A4A4A" opacity="0.4" />
  </svg>
)

const FloatingTerminal = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <rect x="4" y="4" width="32" height="32" rx="3" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <rect x="4" y="10" width="32" height="4" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.3" />
    <circle cx="8" cy="8" r="1" fill="#4A4A4A" opacity="0.4" />
    <circle cx="12" cy="8" r="1" fill="#4A4A4A" opacity="0.4" />
    <circle cx="16" cy="8" r="1" fill="#4A4A4A" opacity="0.4" />
    <text x="8" y="26" fontSize="8" fill="#4A4A4A" opacity="0.5" fontFamily="monospace">{'>'}_</text>
  </svg>
)

const FloatingCode = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <path d="M12 12 L6 20 L12 28" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 12 L34 20 L28 28" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="32" x2="24" y2="8" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.4" />
  </svg>
)

const round4 = (n: number) => Math.round(n * 10000) / 10000

const gearLines = [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
  const rad = (angle * Math.PI) / 180
  return {
    angle,
    x1: round4(20 + Math.cos(rad) * 10),
    y1: round4(20 + Math.sin(rad) * 10),
    x2: round4(20 + Math.cos(rad) * 14),
    y2: round4(20 + Math.sin(rad) * 14),
  }
})

const FloatingGear = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="6" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <circle cx="20" cy="20" r="2" stroke="#4A4A4A" strokeWidth="1" fill="none" opacity="0.4" />
    {gearLines.map((l) => (
      <line key={l.angle} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
    ))}
  </svg>
)

const FloatingCloud = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <path d="M10 26 Q6 26 6 22 Q6 18 10 18 Q10 12 16 12 Q20 8 26 12 Q32 10 34 16 Q38 16 38 20 Q38 24 34 24 Q34 28 28 28 L10 26" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinecap="round" />
  </svg>
)

const FloatingDatabase = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <ellipse cx="20" cy="10" rx="12" ry="4" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <path d="M8 10 L8 28 Q8 32 20 32 Q32 32 32 28 L32 10" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <path d="M8 18 Q8 22 20 22 Q32 22 32 18" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.4" />
  </svg>
)

const FloatingWifi = ({ className = '' }: { className?: string }) => (
  <svg className={`w-10 h-10 ${className}`} viewBox="0 0 40 40" fill="none">
    <path d="M8 16 Q20 6 32 16" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinecap="round" />
    <path d="M12 20 Q20 14 28 20" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinecap="round" />
    <path d="M16 24 Q20 20 24 24" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinecap="round" />
    <circle cx="20" cy="28" r="2" stroke="#4A4A4A" strokeWidth="1" fill="none" opacity="0.4" />
  </svg>
)

const FloatingCursor = ({ className = '' }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
    <path d="M6 4 L6 24 L12 18 L16 26 L20 24 L16 16 L24 16 Z" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" strokeLinejoin="round" />
  </svg>
)

/* Floating wrapper with gentle bob animation */
const Float = ({ children, delay = 0, duration = 5, x = 0, y = 0 }: { children: React.ReactNode; delay?: number; duration?: number; x?: string | number; y?: string | number }) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -8, 0, 6, 0],
      rotate: [0, 3, -2, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)

export default function HeroSketch() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Paper lines background */}
      <div className="absolute inset-0 paper-lines pointer-events-none" />

      {/* Spiral binding on left */}
      <SpiralBinding />

      {/* Floating tech doodles */}
      <Float x="8%" y="12%" delay={0} duration={6}>
        <FloatingLaptop />
      </Float>
      <Float x="18%" y="22%" delay={0.5} duration={5}>
        <FloatingTerminal />
      </Float>
      <Float x="5%" y="35%" delay={1} duration={7}>
        <FloatingCode />
      </Float>
      <Float x="12%" y="48%" delay={1.5} duration={5.5}>
        <FloatingGear />
      </Float>
      <Float x="8%" y="62%" delay={0.3} duration={6.5}>
        <FloatingCloud />
      </Float>
      <Float x="20%" y="72%" delay={0.8} duration={5}>
        <FloatingDatabase />
      </Float>
      <Float x="6%" y="82%" delay={1.2} duration={7}>
        <FloatingWifi />
      </Float>
      <Float x="15%" y="88%" delay={0.6} duration={6}>
        <FloatingCursor />
      </Float>

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
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-20 pt-32 pb-12 max-w-7xl mx-auto">
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
              <HandwrittenText
                text="We Build the"
                tag="span"
                className="block"
                color="#2c3e50"
                duration={50}
                trigger="mount"
              />
              <SketchUnderline
                className="block mt-2"
                color="#e74c3c"
                strokeWidth={3}
                duration={1500}
                delay={800}
                wobble={8}
              >
                <span className="highlight">Digital Future</span>
              </SketchUnderline>
            </h1>
            {/* Decorative sketch underline */}
            <SketchDrawSVG className="absolute -bottom-2 left-0 w-[80%] h-4" trigger="mount" delay={1200} duration={1200}>
              <svg viewBox="0 0 300 16" preserveAspectRatio="none">
                <path
                  d="M2 8 Q 75 2, 150 10 T 298 6"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </SketchDrawSVG>
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
            <SpringyButton href="#about" color="#2c3e50" bgColor="#ffeb3b">
              Explore Our Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
            </SpringyButton>
          </motion.div>

          {/* Little doodle icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-4 mt-10"
          >
            <FloatingCode className="w-6 h-6" />
            <FloatingTerminal className="w-6 h-6" />
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
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controls={false}
              className="w-full h-auto object-cover pointer-events-none select-none rounded-sm"
              poster="/og-image.avif"
              style={{ display: 'block', filter: 'sepia(0.3) contrast(1.25)' }}
            >
              <source src="/hero_section-optimized.webm" type="video/webm" />
              <source src="/hero_section-optimized.mp4" type="video/mp4" />
              {/* fallback */}
              <source src="/hero_section.mp4" type="video/mp4" />
            </video>

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
