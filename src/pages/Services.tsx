import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const allServices = [
  {
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
    number: '02',
    title: 'Search Engine Optimization (SEO)',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80',
    items: [
      'On-Page & Off-Page SEO',
      'Technical SEO & Local SEO',
      'Keyword Research and Strategy',
      'Content SEO & E-commerce SEO',
      'Analytics and Reporting',
    ],
    borderClass: 'sketch-border-purple',
    glowClass: 'glow-purple',
    accentColor: 'text-accent-purple',
  },
  {
    number: '03',
    title: 'Website Maintenance',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    items: [
      'Regular Updates & Security',
      'Performance Optimization',
      'Backup and Recovery',
      'Content Updates & Bug Fixes',
      'SEO Monitoring & Monthly Reports',
    ],
    borderClass: 'sketch-border-coral',
    glowClass: 'glow-coral',
    accentColor: 'text-accent-coral',
  },
  {
    number: '04',
    title: 'Digital Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&q=80',
    items: [
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing (SMM)',
      'Content & Email Marketing',
      'Conversion Rate Optimization',
      'Online Reputation Management',
    ],
    borderClass: 'sketch-border',
    glowClass: '',
    accentColor: 'text-primary',
  },
  {
    number: '05',
    title: 'Android / Mobile App Development',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
    items: [
      'Native Android & iOS Apps',
      'Cross-Platform Development',
      'React Native & Flutter',
      'App Store Optimization',
      'Mobile UI/UX Design',
    ],
    borderClass: 'sketch-border-accent',
    glowClass: 'glow-accent',
    accentColor: 'text-accent',
  },
  {
    number: '06',
    title: 'WordPress Custom Theme & Plugins',
    imageUrl: 'https://images.unsplash.com/photo-1565128939902-222e6d1c2b12?w=400&q=80',
    items: [
      'Custom Theme Development',
      'Plugin Development & Customization',
      'WooCommerce Integration',
      'Elementor & Page Builders',
      'Performance & Security Hardening',
    ],
    borderClass: 'sketch-border-purple',
    glowClass: 'glow-purple',
    accentColor: 'text-accent-purple',
  },
  {
    number: '07',
    title: 'Website Security Solutions',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80',
    items: [
      'SSL Certificate Installation',
      'Malware Scanning & Removal',
      'Firewall & DDoS Protection',
      'Security Audits & Monitoring',
      'Data Backup & Recovery Plans',
    ],
    borderClass: 'sketch-border-coral',
    glowClass: 'glow-coral',
    accentColor: 'text-accent-coral',
  },
  {
    number: '08',
    title: 'Content Writing',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
    items: [
      'SEO-Optimized Blog Writing',
      'Website Copy & Landing Pages',
      'Product Descriptions',
      'Technical & Whitepaper Content',
      'Social Media Content Strategy',
    ],
    borderClass: 'sketch-border',
    glowClass: '',
    accentColor: 'text-primary',
  },
  {
    number: '09',
    title: 'Full Stack Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80',
    items: [
      'MERN / MEAN Stack Development',
      'Database Design & Management',
      'REST & GraphQL APIs',
      'Serverless Architecture',
      'DevOps & CI/CD Pipelines',
    ],
    borderClass: 'sketch-border-accent',
    glowClass: 'glow-accent',
    accentColor: 'text-accent',
  },
  {
    number: '10',
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
    number: '11',
    title: 'Computer Vision & Automation',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&q=80',
    items: [
      'Image Recognition Systems',
      'Object Detection & Tracking',
      'OCR & Document Processing',
      'Workflow Automation (n8n / Zapier)',
      'RPA & Business Process Automation',
    ],
    borderClass: 'sketch-border-coral',
    glowClass: 'glow-coral',
    accentColor: 'text-accent-coral',
  },
  {
    number: '12',
    title: 'Progressive Web Apps (PWAs)',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
    items: [
      'Offline-First Architecture',
      'Push Notifications & Background Sync',
      'Responsive & Installable Design',
      'Service Worker Implementation',
      'App-Like Experience on Mobile',
    ],
    borderClass: 'sketch-border',
    glowClass: '',
    accentColor: 'text-primary',
  },
  {
    number: '13',
    title: 'Vibe Coding & MVP Development',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
    items: [
      'Rapid Prototype Development',
      'AI-Assisted Code Generation',
      'Lean MVP & Iteration Strategy',
      'No-Code / Low-Code Solutions',
      'Fast Market Validation',
    ],
    borderClass: 'sketch-border-accent',
    glowClass: 'glow-accent',
    accentColor: 'text-accent',
  },
]

function ServiceCard({ service, index }: { service: typeof allServices[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden ${service.borderClass} ${service.glowClass} transition-all duration-500 hover:scale-[1.02]`}
    >
      <div className="p-5 sm:p-6 h-full flex flex-col" style={{ backgroundColor: 'var(--bg-card-alt)' }}>
        <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden mb-4">
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover sketch-filter" />
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{service.number}</span>
          <h3 className={`text-lg sm:text-xl font-medium ${service.accentColor}`}>{service.title}</h3>
        </div>
        <ul className="flex-1 space-y-3 mb-6">
          {service.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="min-h-screen py-20 md:py-32 px-4 md:px-6 relative"
      style={{ backgroundColor: 'var(--bg)' }}
    >

      <div className="relative z-10 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-accent"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: 'All Services', className: 'text-primary' },
              { text: 'Comprehensive solutions for every need.', className: 'font-serif italic text-accent' },
            ]}
            containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {allServices.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
