import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-coral/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent-green text-[10px] sm:text-xs uppercase tracking-widest mb-4">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight mb-6">
              Let's Build Something
              <span className="font-serif italic"> Extraordinary</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Have a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing together.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>info@wisetechnologiesryk.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent-purple" />
                </div>
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>+92 300 6705727</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-coral/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent-coral" />
                </div>
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>R-130, Rahim Garden, near Gulshan e Iqbal, Rahim Yar Khan, Punjab 64200, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="sketch-border-accent paper-texture p-6 md:p-8 glow-accent"
          >
            <form className="space-y-5">
              <div>
                <label className="text-primary text-xs uppercase tracking-wider mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors"
                  style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                />
              </div>
              <div>
                <label className="text-primary text-xs uppercase tracking-wider mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full border rounded-lg px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors"
                  style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                />
              </div>
              <div>
                <label className="text-primary text-xs uppercase tracking-wider mb-2 block">Project Type</label>
                <select className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                >
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI / Automation</option>
                  <option>Design & Branding</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-primary text-xs uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full border rounded-lg px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  style={{ backgroundColor: 'var(--bg)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 bg-accent rounded-full px-6 py-3 text-black font-medium text-sm hover:gap-3 transition-all duration-300"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
