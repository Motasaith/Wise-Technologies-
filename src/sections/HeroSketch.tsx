import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function HeroSketch() {
  return (
    <section className="relative py-8 px-4 md:py-12 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden border-[3px] border-dashed border-gray-400/60"
          style={{
            background: 'linear-gradient(135deg, #fdfbf7 0%, #f5f0e8 100%)',
          }}
        >
          {/* Notebook paper texture */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 31px,
                  #a0aec0 31px,
                  #a0aec0 32px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 31px,
                  #a0aec0 31px,
                  #a0aec0 32px
                )
              `,
              backgroundSize: '32px 32px',
            }}
          />

          {/* Coffee stain */}
          <div
            className="absolute top-8 right-12 w-24 h-24 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #8B4513 0%, transparent 70%)',
              filter: 'blur(2px)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Hand-drawn Logo */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  {/* Sketch outline layers */}
                  <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] opacity-30"
                    style={{ filter: 'blur(0.5px)' }}
                  >
                    <Logo className="w-full max-w-lg" />
                  </div>
                  <div className="absolute inset-0 -translate-x-[2px] -translate-y-[2px] opacity-20"
                    style={{ filter: 'blur(1px)' }}
                  >
                    <Logo className="w-full max-w-lg" />
                  </div>
                  <div className="relative"
                    style={{
                      filter: 'url(#pencil)',
                    }}
                  >
                    <Logo className="w-full max-w-lg" />
                  </div>
                </div>

                <p
                  className="mt-6 text-lg md:text-xl font-bold"
                  style={{
                    fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                    color: '#4a5568',
                    textShadow: '2px 2px 0px rgba(0,0,0,0.1), -1px -1px 0px rgba(0,0,0,0.05)',
                  }}
                >
                  Where ideas become code ✏️
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <div className="w-16 h-[3px] bg-gray-400 rounded-full" />
                  <span className="text-sm text-gray-500 italic">
                    sketched by our team
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: Sketch artwork of working team */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main sketch image with pencil filter */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-gray-400/50"
                  style={{
                    boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 8px 8px 0px rgba(0,0,0,0.05)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                    alt="Team sketching"
                    className="w-full h-auto object-cover"
                    style={{
                      filter: 'grayscale(100%) contrast(120%) brightness(110%)',
                    }}
                  />
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-30"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #4a5560 2px, #4a5560 3px)',
                    }}
                  />
                </div>

                {/* Hand-drawn annotations */}
                <div className="absolute -top-4 -left-4 bg-yellow-100/90 px-3 py-2 rounded-lg border border-yellow-300 rotate-[-3deg] shadow-sm"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  <span className="text-sm text-gray-700">Late night coding session 🌙</span>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-blue-100/90 px-3 py-2 rounded-lg border border-blue-300 rotate-[2deg] shadow-sm"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  <span className="text-sm text-gray-700">Ship it! 🚀</span>
                </div>

                <div className="absolute top-1/2 -right-8 bg-green-100/90 px-2 py-1 rounded border border-green-300 rotate-[5deg] shadow-sm"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  <span className="text-xs text-gray-700">LGTM ✅</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom doodles */}
          <div className="relative z-10 px-8 pb-8 md:px-12 md:pb-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  <span className="text-xs">1</span>
                </div>
                <div className="w-24 h-[2px] bg-gray-400 border-dashed" />
                <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  <span className="text-xs">2</span>
                </div>
                <div className="w-24 h-[2px] bg-gray-400 border-dashed" />
                <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center bg-accent/20"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  <span className="text-xs font-bold">3</span>
                </div>
                <span className="text-sm text-gray-500 ml-2"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  Build → Test → Deploy
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                <span className="text-sm text-gray-400">Page 2 of ∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Filter for pencil effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="pencil">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </section>
  )
}
