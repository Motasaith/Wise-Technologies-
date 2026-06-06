"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Award, Briefcase } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import ScrollReveal from '../components/ScrollReveal'
import Image from 'next/image'

function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime: number | null = null
    let raf: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      // Ease-out for smoother feel
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 275, suffix: '+', label: 'Projects Done', icon: Briefcase, color: 'text-primary' },
  { value: 144, suffix: '+', label: 'Happy Clients', icon: Users, color: 'text-primary' },
  { value: 17, suffix: '', label: 'Award Winner', icon: Award, color: 'text-primary' },
]

const teamPolaroids = [
  { name: 'Sarah - Code Ninja', img: 'https://i.pravatar.cc/300?img=11', rotate: -12, top: '0%', left: '0%', z: 20 },
  { name: 'David - Cloud Guy', img: 'https://i.pravatar.cc/300?img=33', rotate: 6, top: '20%', right: '0%', z: 10 },
  { name: 'Elena - UX Artist', img: 'https://i.pravatar.cc/300?img=47', rotate: 3, bottom: '0%', left: '15%', z: 30 },
]

const Tape = () => (
  <div
    className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 z-10"
    style={{
      backgroundColor: 'rgba(255,255,255,0.6)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      backdropFilter: 'blur(2px)',
      transform: 'translateX(-50%) rotate(-3deg)',
      borderLeft: '2px dashed rgba(0,0,0,0.1)',
      borderRight: '2px dashed rgba(0,0,0,0.1)',
    }}
  />
)

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [rotates, setRotates] = useState<number[]>([])

  useEffect(() => {
    const t = setTimeout(() => setRotates(stats.map(() => (Math.random() - 0.5) * 4)), 0)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--border-color)]/20 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[var(--text-muted)] text-[10px] sm:text-xs uppercase tracking-widest mb-4 text-center"
        >
          About Us
        </motion.p>

        <div className="text-center mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Exclusive Agency For Technology', className: 'font-normal' },
              { text: 'Provide Solution', className: 'font-serif italic text-[var(--text-primary)]' },
            ]}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-[0.95]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            At Wise Technologies, we redefine innovation by delivering technology solutions that empower businesses to thrive in a competitive landscape.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Our mission is to help businesses succeed by delivering solutions that are innovative, efficient, and result-oriented. Partner with us to unlock the potential of technology and drive your growth to new heights.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16 md:mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <ScrollReveal
                key={i}
                from="bottom"
                distance={30}
                duration={0.6}
                delay={0.4 + i * 0.1}
                rotate={rotates[i]}
              >
                <div className="text-center p-4 md:p-6 sketch-border paper-texture">
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-1 ${stat.color}`}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs md:text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Main About Card with Polaroid Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="sketch-border bg-white p-8 md:p-12 relative overflow-hidden"
          style={{ boxShadow: '5px 5px 0px rgba(44,62,80,0.15)' }}
        >
          {/* Decorative background doodle */}
          <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor" className="text-[#2c3e50]">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6"
                style={{ fontFamily: "'Kalam', cursive" }}
              >
                The <span
                  style={{
                    background: 'linear-gradient(104deg, rgba(168,255,158,0) 0.9%, rgba(168,255,158,0.8) 2.4%, rgba(168,255,158,0.5) 5.8%, rgba(168,255,158,0.9) 93%, rgba(168,255,158,0) 96%)',
                    padding: '0 8px',
                  }}
                >Nerds</span> Behind the Code
              </h2>
              <p className="text-lg text-[var(--text-muted)] mb-6 leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                We started in 2018 in a tiny room with a whiteboard and too much coffee. Today, Wise Tech is a collective of designers, hackers, and builders who refuse to do things the "normal" way.
              </p>
              <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                We believe that great software should feel organic, intuitive, and fun to use. We don't do corporate jargon; we do results.
              </p>

              <div className="flex gap-4">
                <div
                  className="sketch-border px-4 py-2 transform -rotate-2"
                  style={{ background: '#fef9c3', boxShadow: '2px 2px 0px rgba(44,62,80,0.1)' }}
                >
                  <span className="font-bold text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>275+ Projects</span>
                </div>
                <div
                  className="sketch-border px-4 py-2 transform rotate-2"
                  style={{ background: '#dbeafe', boxShadow: '2px 2px 0px rgba(44,62,80,0.1)' }}
                >
                  <span className="font-bold text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>0% Boring</span>
                </div>
              </div>
            </div>

            {/* Polaroid Gallery */}
            <div className="relative h-80 md:h-96">
              {teamPolaroids.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: p.rotate - 5 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: p.rotate } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="absolute w-40 md:w-48 bg-white p-2 pb-10 shadow-lg sketch-border hover:rotate-0 transition-all cursor-pointer"
                  style={{
                    top: p.top,
                    left: p.left,
                    right: p.right,
                    bottom: p.bottom,
                    zIndex: p.z,
                    boxShadow: '3px 3px 0px rgba(44,62,80,0.15)',
                  }}
                >
                  <Tape />
                  <Image src={p.img} alt={p.name} width={180} height={180} className="w-full h-auto grayscale" loading="lazy" />
                  <p
                    className="absolute bottom-2 left-0 w-full text-center font-bold text-sm text-[#2c3e50]"
                    style={{ fontFamily: "'Kalam', cursive" }}
                  >
                    {p.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
