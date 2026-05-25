import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Code, Cloud, Bot, Smartphone, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const postIts = [
  {
    icon: Code,
    title: 'Bespoke Software',
    desc: 'We write code from scratch. No clunky plugins, just clean, fast, and scalable applications built precisely for your needs.',
    cta: "Let's build!",
    color: '#feff9c',
    rotate: -1,
  },
  {
    icon: Cloud,
    title: 'Cloud Magic',
    desc: 'Moving to the cloud? We design infrastructure that handles millions of users without breaking a sweat (or your budget).',
    cta: 'Scale up!',
    color: '#7afcff',
    rotate: 2,
  },
  {
    icon: Bot,
    title: 'Smart AI',
    desc: 'We train machines to do the boring stuff so you don\'t have to. Predictive data, automation, and intelligent bots.',
    cta: 'Get smarter!',
    color: '#ff7eb9',
    rotate: -2,
  },
  {
    icon: Smartphone,
    title: 'App Design',
    desc: 'Interfaces that look so good you want to lick them. (Please don\'t lick your phone). User-centric UI/UX design.',
    cta: 'See designs!',
    color: '#ffd699',
    rotate: 1,
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    desc: 'We lock your data down tighter than a drum. Penetration testing, audits, and rock-solid architecture.',
    cta: 'Stay safe!',
    color: '#c5f9a8',
    rotate: -3,
  },
  {
    icon: Zap,
    title: 'Have a crazy idea?',
    desc: 'We love weird, complex, and "impossible" projects. If you can draw it on a napkin, we can probably code it.',
    cta: 'Challenge us!',
    color: '#e2c5ff',
    rotate: 2,
    isSpecial: true,
  },
]

function PostItCard({ card, index }: { card: typeof postIts[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, rotate: card.rotate - 3 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: card.rotate } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col h-full p-6 transition-all duration-200 hover:scale-105 hover:rotate-0 hover:z-20 ${card.isSpecial ? 'sketch-border' : ''}`}
      style={{
        background: card.color,
        boxShadow: card.isSpecial ? '5px 5px 0px rgba(44,62,80,0.2)' : '3px 5px 10px rgba(0,0,0,0.15)',
        transform: `rotate(${card.rotate}deg)`,
      }}
    >
      <div className="text-3xl mb-3 text-[#2c3e50]">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-bold text-xl mb-2 text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>
        {card.title}
      </h3>
      <p className="text-[#2c3e50]/80 flex-grow text-base leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
        {card.desc}
      </p>
      <div className="mt-4 pt-3 border-t border-[#2c3e50]/20 font-bold text-sm text-[#2c3e50] flex items-center gap-1" style={{ fontFamily: "'Kalam', cursive" }}>
        <ArrowRight className="w-4 h-4" />
        {card.cta}
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="services" className="py-24 relative"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* SVG Scribble Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden text-[#2c3e50]/20 transform -translate-y-1/2 flex justify-center">
        <svg width="300" height="40" viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,20 Q40,5 75,20 T145,20 T215,20 T285,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4 inline-block relative" style={{ fontFamily: "'Kalam', cursive" }}>
            <span className="highlight-pink">What we do best</span>
            {/* Doodle arrow */}
            <svg className="absolute -bottom-8 -right-12 w-16 h-16 text-[#2c3e50] transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </h2>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-12">
          {postIts.map((card, i) => (
            <PostItCard key={i} card={card} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold"
            style={{ fontFamily: "'Kalam', cursive", color: '#2c3e50' }}
          >
            <span className="absolute inset-0 border-2 border-[#2c3e50] -z-10 transition-all duration-200 hover:scale-105"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', background: '#ffeb3b' }}
            />
            View All 13+ Services
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-[var(--text-muted)]" style={{ fontFamily: "'Architects Daughter', cursive" }}>
            Including SEO, WordPress, Security, Content Writing, Vibe Coding & more
          </p>
        </div>
      </div>
    </section>
  )
}
