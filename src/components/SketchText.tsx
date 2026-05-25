"use client"

import { motion } from 'framer-motion'

interface SketchTextProps {
  text: string
  className?: string
}

export default function SketchText({ text, className = '' }: SketchTextProps) {
  const id = text.replace(/\s+/g, '-').toLowerCase()

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <svg
        viewBox="0 0 800 120"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Crosshatch pattern for sketch fill */}
          <pattern id={`hatch-${id}`} patternUnits="userSpaceOnUse" width="4" height="4">
            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#2d3748" strokeWidth="0.5" fill="none" />
          </pattern>

          {/* Rough filter */}
          <filter id={`rough-${id}`}>
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          {/* Shadow offset */}
          <filter id={`shadow-${id}`}>
            <feDropShadow dx="3" dy="3" stdDeviation="0" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Shadow / offset layer (the "double draw" look) */}
        <text
          x="10"
          y="95"
          fontFamily="'Times New Roman', Georgia, serif"
          fontSize="110"
          fontWeight="900"
          fill="none"
          stroke="#1a202c"
          strokeWidth="2"
          opacity="0.25"
          filter={`url(#rough-${id})`}
        >
          {text}
        </text>

        {/* Main bold fill with crosshatch */}
        <text
          x="4"
          y="92"
          fontFamily="'Times New Roman', Georgia, serif"
          fontSize="110"
          fontWeight="900"
          fill={`url(#hatch-${id})`}
          stroke="#000"
          strokeWidth="3"
          filter={`url(#rough-${id})`}
        >
          {text}
        </text>

        {/* Inner highlight / white edge */}
        <text
          x="4"
          y="92"
          fontFamily="'Times New Roman', Georgia, serif"
          fontSize="110"
          fontWeight="900"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          opacity="0.6"
          transform="translate(1, -1)"
        >
          {text}
        </text>

        {/* Outline stroke */}
        <text
          x="4"
          y="92"
          fontFamily="'Times New Roman', Georgia, serif"
          fontSize="110"
          fontWeight="900"
          fill="none"
          stroke="#000"
          strokeWidth="1.5"
          filter={`url(#rough-${id})`}
        >
          {text}
        </text>
      </svg>
    </motion.div>
  )
}
