import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Wise Technologies transformed our outdated website into a modern, high-converting platform. Their attention to detail and technical expertise is unmatched.",
    author: 'Ahmad Raza',
    role: 'CEO, TechFlow Pakistan',
    color: 'border-[var(--border-color)]',
    glow: 'glow-accent',
  },
  {
    quote: "The AI automation tools they built saved us 20+ hours per week. Incredible team, incredible results. Highly recommended for any serious business.",
    author: 'Fatima Khan',
    role: 'Operations Director, GreenMart',
    color: 'border-[var(--border-color)]',
    glow: 'glow-purple',
  },
  {
    quote: "From concept to launch, the process was seamless. They understood our vision and delivered beyond expectations. A true partner in growth.",
    author: 'Usman Ali',
    role: 'Founder, EduSpark',
    color: 'border-[var(--border-color)]',
    glow: 'glow-coral',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--border-color)]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--border-color)]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[var(--text-muted)] text-[10px] sm:text-xs uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            What Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative p-6 md:p-8 border-2 ${t.color} paper-texture ${t.glow} transition-all duration-500 hover:scale-[1.02]`}
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: 'var(--text-muted)' }} />
              <p className="text-sm md:text-base leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)' }}
              >{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-card-alt)' }}
                >
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.author}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
