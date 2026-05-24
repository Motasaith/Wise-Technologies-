import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Rocket, Wrench } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business, goals, and users to map out the perfect strategy.',
    icon: Code,
    color: 'text-accent',
    borderColor: 'sketch-border-accent',
    glow: 'glow-accent',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes, prototypes, and pixel-perfect UI crafted with intention and care.',
    icon: Palette,
    color: 'text-accent-purple',
    borderColor: 'sketch-border-purple',
    glow: 'glow-purple',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Clean, scalable code built with modern frameworks and best practices.',
    icon: Wrench,
    color: 'text-accent-coral',
    borderColor: 'sketch-border-coral',
    glow: 'glow-coral',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy, optimize, and scale. We ensure your product hits the ground running.',
    icon: Rocket,
    color: 'text-accent-green',
    borderColor: 'sketch-border',
    glow: '',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-20 md:py-32 px-4 md:px-6 relative"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-accent text-[10px] sm:text-xs uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Our Process
          </h2>
          <p className="text-sm md:text-base mt-4 max-w-xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            A battle-tested workflow that turns ideas into reality — fast, clean, and built to last.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative p-6 md:p-8 ${step.borderColor} paper-texture ${step.glow} transition-all duration-500 hover:scale-[1.02]`}
              >
                <div className={`text-5xl md:text-6xl font-bold opacity-10 absolute top-4 right-4 ${step.color}`}>
                  {step.number}
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.color}`}
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >{step.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
