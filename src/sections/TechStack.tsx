"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const techLogos = [
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg' },
  { name: 'WordPress', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wordpress.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg' },
  { name: 'Shopify', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/shopify.svg' },
  { name: 'WooCommerce', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/woocommerce.svg' },
  { name: 'Elementor', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/elementor.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg' },
  { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fastapi.svg' },
  { name: 'Three.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/threedotjs.svg' },
  { name: 'OpenAI', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg' },
  { name: 'Claude', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg' },
  { name: 'n8n', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/n8n.svg' },
  { name: 'Cloudflare', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudflare.svg' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg' },
  { name: 'OpenClaw', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg' },
  { name: 'Hermes', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg' },
  { name: 'Mercury', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openapiinitiative.svg' },
  { name: 'Ollama', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ollama.svg' },
  { name: 'Modal', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/modal.svg' },
  { name: 'LangChain', src: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg' },
]

/* Pre-compute deterministic scatter values at module level to avoid hydration issues */
const scatterData = techLogos.map((_, index) => ({
  randomX: Math.round(Math.sin(index * 137.5) * 200 + 200),
  randomY: Math.round(Math.cos(index * 73.3) * 150 + 150),
  randomRot: Math.round(Math.sin(index * 51.7) * 180),
  randomScale: Math.round((0.3 + Math.abs(Math.sin(index * 91.1)) * 0.7) * 1000) / 1000,
}))

function CrumbleLogo({ logo, index }: { logo: typeof techLogos[0]; index: number }) {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scatter = scatterData[index]

  const x = useTransform(scrollYProgress, [0, 1], [isMounted ? scatter.randomX : 0, 0])
  const y = useTransform(scrollYProgress, [0, 1], [isMounted ? scatter.randomY : 0, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [isMounted ? scatter.randomRot : 0, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [isMounted ? scatter.randomScale : 1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ x, y, rotate, scale, opacity }}
      className="relative group"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 p-3 sm:p-4 sketch-border paper-texture flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:glow-accent"
      >
        <img
          src={logo.src}
          alt={logo.name}
          width={96}
          height={96}
          className="w-full h-full object-contain tech-icon"
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] sm:text-xs whitespace-nowrap px-2 py-1 sketch-border-accent bg-[var(--bg-card)]"
          style={{ color: 'var(--text-secondary)' }}
        >
          {logo.name}
        </span>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.2], [60, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])

  return (
    <section
      id="techstack"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--border-color)]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--border-color)]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-16 md:mb-20">
          <p className="text-[var(--text-muted)] text-[10px] sm:text-xs uppercase tracking-widest mb-4">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
            Technology <span className="font-serif italic text-[var(--text-primary)]">Stack</span>
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            We master a wide range of modern technologies to deliver cutting-edge solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {techLogos.map((logo, i) => (
            <CrumbleLogo key={logo.name} logo={logo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
