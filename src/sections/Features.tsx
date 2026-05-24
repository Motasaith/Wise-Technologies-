import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const cards = [
  {
    type: 'feature' as const,
    number: '01',
    title: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80',
    items: [
      'Custom Website Development',
      'E-Commerce Development',
      'CMS-Based Website Development',
      'Web Application Development',
      'API Integration and Development',
      'Front-End & Back-End Development',
    ],
    borderClass: 'sketch-border-accent',
    glowClass: 'glow-accent',
    accentColor: 'text-accent',
  },
  {
    type: 'feature' as const,
    number: '02',
    title: 'AI Integrated Apps',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80',
    items: [
      'OpenAI / GPT Integration',
      'Claude & LLM-Powered Features',
      'Chatbots & Virtual Assistants',
      'AI Content Generation Tools',
      'Smart Recommendation Engines',
    ],
    borderClass: 'sketch-border-purple',
    glowClass: 'glow-purple',
    accentColor: 'text-accent-purple',
  },
  {
    type: 'feature' as const,
    number: '03',
    title: 'Full Stack Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80',
    items: [
      'MERN / MEAN Stack Development',
      'Database Design & Management',
      'REST & GraphQL APIs',
      'Serverless Architecture',
      'DevOps & CI/CD Pipelines',
    ],
    borderClass: 'sketch-border-coral',
    glowClass: 'glow-coral',
    accentColor: 'text-accent-coral',
  },
  {
    type: 'feature' as const,
    number: '04',
    title: 'Android / Mobile App Development',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
    items: [
      'Native Android & iOS Apps',
      'Cross-Platform Development',
      'React Native & Flutter',
      'App Store Optimization',
      'Mobile UI/UX Design',
    ],
    borderClass: 'sketch-border',
    glowClass: '',
    accentColor: 'text-primary',
  },
  {
    type: 'feature' as const,
    number: '05',
    title: 'Computer Vision & Automation',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80',
    items: [
      'Image Recognition Systems',
      'Object Detection & Tracking',
      'OCR & Document Processing',
      'Workflow Automation (n8n / Zapier)',
      'RPA & Business Process Automation',
    ],
    borderClass: 'sketch-border-accent',
    glowClass: 'glow-accent',
    accentColor: 'text-accent',
  },
  {
    type: 'feature' as const,
    number: '06',
    title: 'Progressive Web Apps (PWAs)',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
    items: [
      'Offline-First Architecture',
      'Push Notifications & Background Sync',
      'Responsive & Installable Design',
      'Service Worker Implementation',
      'App-Like Experience on Mobile',
    ],
    borderClass: 'sketch-border-purple',
    glowClass: 'glow-purple',
    accentColor: 'text-accent-purple',
  },
]

function FeatureCard({
  card,
  index,
}: {
  card: (typeof cards)[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden ${card.borderClass} ${card.glowClass} transition-all duration-500 hover:scale-[1.02]`}
    >
      <div className="p-5 sm:p-6 h-full flex flex-col"
        style={{ backgroundColor: 'var(--bg-card-alt)' }}
      >
        <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden mb-4">
          <img
            src={card.imageUrl}
            alt={card.title}
            className="w-full h-full object-cover sketch-filter"
          />
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{card.number}</span>
          <h3 className={`text-lg sm:text-xl font-medium ${card.accentColor}`}>{card.title}</h3>
        </div>

        <ul className="flex-1 space-y-3 mb-6">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-accent text-xs sm:text-sm group"
        >
          <span>Learn more</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ transform: 'rotate(-45deg)' }} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="services" className="min-h-screen relative py-20 md:py-32 px-4 md:px-6"
      style={{ backgroundColor: 'var(--bg)' }}
    >

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Enterprise-grade solutions for ambitious builders.',
                className: 'text-primary',
              },
              {
                text: 'Built for scale. Powered by expertise.',
                className: 'font-serif italic text-accent',
              },
            ]}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 sketch-border-accent text-accent text-sm sm:text-base font-medium transition-all duration-300 hover:glow-accent hover:scale-105"
          >
            <span>View All 13+ Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
            Including SEO, WordPress, Security, Content Writing, Vibe Coding & more
          </p>
        </div>
      </div>
    </section>
  )
}
