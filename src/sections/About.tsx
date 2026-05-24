import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Users, Award, Briefcase } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const highlights = [
  'Web Design & Development',
  'Creative Solutions',
  'Affordable Pricing',
  'Online Support',
  'Expert Team',
  'Automation Services',
  'Quick Access',
  'Digital Marketing',
]

const stats = [
  { value: 275, label: 'Projects Done', icon: Briefcase, color: 'text-accent' },
  { value: 144, label: 'Happy Clients', icon: Users, color: 'text-accent-purple' },
  { value: 17, label: 'Award Winner', icon: Award, color: 'text-accent-coral' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-accent text-[10px] sm:text-xs uppercase tracking-widest mb-4 text-center"
        >
          About Us
        </motion.p>

        <div className="text-center mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Exclusive Agency For Technology', className: 'font-normal' },
              { text: 'Provide Solution', className: 'font-serif italic text-accent' },
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center p-4 md:p-6 sketch-border paper-texture"
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <p className="text-xs md:text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sketch-border-accent paper-texture p-8 md:p-10 glow-accent"
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
              We Work With <span className="text-accent">17 Years</span> Of Experience
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              With 17 years of expertise, we deliver innovative solutions tailored to your needs. Our team ensures excellence in every project, driving success and growth.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="sketch-border overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Dedicated team"
                className="w-full h-[280px] md:h-[320px] object-cover sketch-filter"
              />
            </div>
            <div className="paper-texture p-6 md:p-8 sketch-border-purple glow-purple">
              <p className="text-accent-purple text-[10px] sm:text-xs uppercase tracking-widest mb-3">Our Best</p>
              <h4 className="text-xl md:text-2xl font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
                Dedicated Team
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Our team is passionate about delivering excellence. With years of experience in the industry, we consistently exceed expectations by providing top-notch solutions that align with your objectives. Whether it's design, development, or strategy, we ensure your success at every step.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
