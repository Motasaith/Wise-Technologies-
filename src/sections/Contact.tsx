"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Phone, Check } from 'lucide-react'
import SpringyButton from '../components/SpringyButton'
import ScrambleReveal from '../components/ScrambleReveal'
import DoodleBurst from '../components/DoodleBurst'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div ref={ref} className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <ScrambleReveal
            text="Drop us a line!"
            tag="h2"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2c3e50] mb-4"
            duration={1200}
            trigger="inview"
            chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[var(--text-muted)]"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            We read everything. Except spam. We hate spam.
          </motion.p>
        </div>

        {/* Notepad Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-[#ffffcc] p-8 md:p-12 shadow-xl transform rotate-1 max-w-3xl mx-auto rounded-r-lg"
          style={{
            backgroundImage: 'linear-gradient(transparent 95%, #cbd5e1 100%)',
            backgroundSize: '100% 3rem',
            lineHeight: '3rem',
            borderLeft: '4px solid #e74c3c',
          }}
        >
          {/* Spiral binding rings on the left */}
          <div className="absolute left-[-18px] top-4 bottom-4 flex flex-col justify-between h-[calc(100%-2rem)]">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 border-4 border-gray-400 rounded-full bg-white shadow-sm"
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 mt-[-1rem] space-y-2"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            <div className="mb-2">
              <label className="font-bold mr-2 text-[#2c3e50] text-lg" style={{ fontFamily: "'Kalam', cursive" }}>
                Hello, my name is
              </label>
              <input
                type="text"
                placeholder="your name..."
                required
                className="bg-transparent border-b-2 border-dashed border-[var(--text-muted)] focus:border-[#e74c3c] outline-none px-2 py-1 w-full sm:w-auto mt-2 sm:mt-0 text-[#2c3e50] placeholder-gray-400 text-lg"
              />
            </div>

            <div className="mb-2">
              <label className="font-bold mr-2 text-[#2c3e50] text-lg" style={{ fontFamily: "'Kalam', cursive" }}>
                You can email me at
              </label>
              <input
                type="email"
                placeholder="your@email.com..."
                required
                className="bg-transparent border-b-2 border-dashed border-[var(--text-muted)] focus:border-[#e74c3c] outline-none px-2 py-1 w-full sm:w-auto mt-2 sm:mt-0 text-[#2c3e50] placeholder-gray-400 text-lg"
              />
            </div>

            <div className="mb-2">
              <label className="font-bold block mb-2 text-[#2c3e50] text-lg" style={{ fontFamily: "'Kalam', cursive" }}>
                I want to talk about:
              </label>
              <textarea
                rows={3}
                placeholder="I have this awesome idea for..."
                required
                className="w-full bg-transparent border-2 border-dashed border-[var(--text-muted)] focus:border-[#e74c3c] outline-none p-4 text-[#2c3e50] resize-none rounded-lg text-lg"
                style={{ lineHeight: '2rem' }}
              />
            </div>

            <div className="text-center mt-8">
              <SpringyButton
                onClick={() => {}}
                color="#2c3e50"
                bgColor="#ffeb3b"
                className="transform -rotate-2"
              >
                Send it via Paper Plane!
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </SpringyButton>
            </div>

            {/* Success Message */}
            {sent && (
              <DoodleBurst
                className="mt-6 text-center font-bold text-xl text-green-600 bg-white/80 p-4 rounded-lg sketch-border"
                trigger="inview"
                particleCount={30}
                colors={["#2ecc71", "#3498db", "#f1c40f", "#e74c3c", "#9b59b6"]}
              >
                <span style={{ fontFamily: "'Kalam', cursive" }}>
                  <Check className="w-5 h-5 inline mr-2" />
                  Woosh! Message sent successfully. We'll chat soon!
                </span>
              </DoodleBurst>
            )}
          </form>
        </motion.div>

        {/* Contact info cards below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto"
        >
          <div className="sketch-border p-4 bg-white text-center"
            style={{ boxShadow: '3px 3px 0px rgba(44,62,80,0.1)' }}
          >
            <Mail className="w-5 h-5 mx-auto mb-2 text-[#2c3e50]" />
            <p className="text-sm text-[var(--text-muted)]">info@wisetechnologiesryk.com</p>
          </div>
          <div className="sketch-border p-4 bg-white text-center"
            style={{ boxShadow: '3px 3px 0px rgba(44,62,80,0.1)' }}
          >
            <Phone className="w-5 h-5 mx-auto mb-2 text-[#2c3e50]" />
            <p className="text-sm text-[var(--text-muted)]">+92 300 6705727</p>
          </div>
          <div className="sketch-border p-4 bg-white text-center"
            style={{ boxShadow: '3px 3px 0px rgba(44,62,80,0.1)' }}
          >
            <MapPin className="w-5 h-5 mx-auto mb-2 text-[#2c3e50]" />
            <p className="text-sm text-[var(--text-muted)]">Rahim Yar Khan, Pakistan</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
