import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="h-screen pt-16 pb-4 px-4 md:pt-20 md:pb-6 md:px-6 relative">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden sketch-border">
        <img
          src={
            isDark
              ? 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'
              : 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80'
          }
          alt="Team collaboration"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        />

        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: isDark
              ? 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,212,255,0.1))'
              : 'linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.1), rgba(0,212,255,0.05))',
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: isDark
              ? 'linear-gradient(to top, rgba(0,0,0,1), transparent, rgba(0,0,0,0.5))'
              : 'linear-gradient(to top, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.2))',
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* Left: Logo */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Logo className="w-full max-w-md md:max-w-lg lg:max-w-xl" />
              </motion.div>
            </div>

            {/* Right: Description + CTA */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <motion.p
                className="text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2, color: 'var(--text-primary)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Wise Technologies RYK specializes in innovative tech solutions, providing expert IT services to businesses in Rahim Yar Khan and beyond.
              </motion.p>

              <motion.a
                href="#"
                className="group inline-flex items-center gap-2 bg-accent rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm sm:text-base w-fit hover:gap-3 transition-all duration-300 glow-accent"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span>Start a project</span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
