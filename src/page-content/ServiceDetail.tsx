"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Check, ChevronDown, MessageSquare } from 'lucide-react'
import type { ServiceItem } from '@/src/data/servicesData'
import Header from '@/src/components/Header'
import Footer from '@/src/sections/Footer'

import { servicesData } from '@/src/data/servicesData'

/* Scribble divider */
const ScribbleDivider = () => (
  <svg className="w-full h-6 my-8" viewBox="0 0 800 24" preserveAspectRatio="none">
    <path
      d="M0,12 Q40,4 80,12 T160,12 T240,12 T320,12 T400,12 T480,12 T560,12 T640,12 T720,12 T800,12"
      stroke="#C8C0B0"
      strokeWidth="2"
      strokeDasharray="6 4"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="400" cy="12" r="4" fill="#e74c3c" opacity="0.6" />
  </svg>
)

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return null

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const Icon = service.icon

  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const faqRef = useRef(null)

  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-50px' })
  const isProcessInView = useInView(processRef, { once: true, margin: '-50px' })
  const isFaqInView = useInView(faqRef, { once: true, margin: '-50px' })

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 relative" style={{ backgroundColor: 'var(--bg)' }}>
        {/* Paper lines background */}
        <div className="absolute inset-0 paper-lines pointer-events-none opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
              style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          {/* Hero Sticky Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: service.rotate - 2 }}
            animate={{ opacity: 1, scale: 1, rotate: service.rotate }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="p-8 mb-12 sketch-border"
            style={{
              background: service.color,
              boxShadow: '6px 8px 0px rgba(44,62,80,0.15)',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/50 rounded-full sketch-border-thin">
                <Icon className="w-10 h-10 text-[#2c3e50]" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>
                {service.title}
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-[#2c3e50]/90 leading-relaxed font-medium" style={{ fontFamily: "'Architects Daughter', cursive" }}>
              {service.longDesc}
            </p>
          </motion.div>

          {/* Key Offerings / Features Checklist */}
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 sketch-border mb-12 transform rotate-1"
            style={{ boxShadow: '4px 4px 0px rgba(44,62,80,0.1)' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2c3e50] flex items-center gap-2" style={{ fontFamily: "'Kalam', cursive" }}>
              <span className="highlight-yellow">What's Included</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="mt-1 p-1 bg-green-100 rounded-full text-green-700 sketch-border-thin flex-shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <ScribbleDivider />

          {/* Process Timeline */}
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-8 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#2c3e50] text-center" style={{ fontFamily: "'Kalam', cursive" }}>
              <span className="highlight-pink">How We Work</span>
            </h2>

            <div className="relative border-l-2 border-dashed border-[#2c3e50]/20 pl-6 md:pl-8 ml-4 md:ml-6 space-y-8">
              {service.process.map((step, i) => (
                <div key={i} className="relative">
                  {/* Timeline node */}
                  <span className="absolute -left-[38px] md:-left-[46px] top-1.5 w-6 h-6 rounded-full bg-white sketch-border-thin flex items-center justify-center font-bold text-xs text-[#2c3e50]" style={{ fontFamily: "'Kalam', cursive" }}>
                    {i + 1}
                  </span>
                  
                  <div>
                    <h3 className="font-bold text-lg text-[#2c3e50] mb-1" style={{ fontFamily: "'Kalam', cursive" }}>
                      {step.step}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <ScribbleDivider />

          {/* Accordion FAQs */}
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 sketch-border mb-12 transform -rotate-1"
            style={{ boxShadow: '4px 4px 0px rgba(44,62,80,0.1)' }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2c3e50] flex items-center gap-2" style={{ fontFamily: "'Kalam', cursive" }}>
              <span className="highlight-yellow">Got Questions?</span>
            </h2>

            <div className="space-y-4">
              {service.faq.map((item, i) => {
                const isOpen = openFaq === i
                return (
                  <div key={i} className="border-b border-dashed border-[#2c3e50]/20 pb-4">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex justify-between items-center text-left py-2 font-bold text-lg text-[#2c3e50] focus:outline-none"
                      style={{ fontFamily: "'Kalam', cursive" }}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Collapsible content */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pt-2 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                        {item.a}
                      </p>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Sticky Note CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="p-8 transform rotate-1 sketch-border"
            style={{
              background: '#ffffba',
              boxShadow: '4px 5px 0px rgba(44,62,80,0.15)',
            }}
          >
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-3 flex items-center gap-2" style={{ fontFamily: "'Kalam', cursive" }}>
              <MessageSquare className="w-6 h-6 text-[#e74c3c]" />
              Let's craft this together!
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "'Architects Daughter', cursive" }}>
              Ready to take your project to the next level? Get in touch with us today. Tell us what you need, and we'll sketch out a customized plan built specifically for you.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#e74c3c] text-white font-bold rounded-sm sketch-border-thin transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
