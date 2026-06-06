"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Search,
  Wrench,
  Megaphone,
  Smartphone,
  Palette,
  Shield,
  FileText,
  Layers,
  Bot,
  Eye,
  Zap,
  Rocket,
} from 'lucide-react'
import Link from 'next/link'

import { servicesData, type ServiceItem } from '@/src/data/servicesData'

const stickyColors = [
  '#feff9c',
  '#7afcff',
  '#ff7eb9',
  '#ffd699',
  '#c5f9a8',
  '#e2c5ff',
  '#ffb3ba',
  '#bae1ff',
  '#ffffba',
  '#ffdfba',
  '#e0f7fa',
  '#f8bbd0',
  '#dcedc8',
]

function StickyNote({ service, index }: { service: ServiceItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = service.icon
  const color = stickyColors[index % stickyColors.length]
  const rotate = [-2, 1, -1, 2, -3, 1, -1, 3, -2, 1, -1, 2, -2][index % 13]

  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.85, rotate: rotate - 5 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate } : {}}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col h-full p-6 transition-all duration-200 hover:scale-105 hover:rotate-0 hover:z-20 cursor-pointer"
        style={{
          background: color,
          boxShadow: '3px 5px 10px rgba(0,0,0,0.15)',
        }}
      >
        <div className="text-3xl mb-3 text-[#2c3e50]">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="font-bold text-xl mb-2 text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>
          {service.title}
        </h3>
        <p className="text-[#2c3e50]/80 flex-grow text-base leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
          {service.desc}
        </p>
        <div className="mt-4 pt-3 border-t border-[#2c3e50]/20 font-bold text-sm text-[#2c3e50] flex items-center gap-1" style={{ fontFamily: "'Kalam', cursive" }}>
          <ArrowRight className="w-4 h-4" />
          Learn more
        </div>
      </motion.div>
    </Link>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="min-h-screen py-24 relative"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* SVG Scribble Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden text-[#2c3e50]/20 transform -translate-y-1/2 flex justify-center">
        <svg width="300" height="40" viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,20 Q40,5 75,20 T145,20 T215,20 T285,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
          style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 relative"
        >
          <div className="inline-flex flex-col items-center gap-2 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-0 inline-block relative" style={{ fontFamily: "'Kalam', cursive" }}>
              <span className="highlight-yellow">All 13 Services</span>
            </h1>
            <svg className="md:hidden w-12 h-12 text-[#2c3e50] transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <svg className="hidden md:block absolute -bottom-8 -right-12 w-16 h-16 text-[#2c3e50] transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p className="text-lg text-[var(--text-muted)] mt-4" style={{ fontFamily: "'Architects Daughter', cursive" }}>
            Comprehensive solutions for every need. Pick a sticky note!
          </p>
        </motion.div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mt-12">
          {servicesData.map((service, i) => (
            <StickyNote key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
