"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLetterProps {
  text: string
}

export default function AnimatedLetter({ text }: AnimatedLetterProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')
  const totalChars = chars.length

  return (
    <p ref={ref} className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed">
      {chars.map((char, i) => {
        const charProgress = i / totalChars
        const start = Math.max(0, charProgress - 0.1)
        const end = Math.min(1, charProgress + 0.05)
        return (
          <Char key={i} char={char} scrollYProgress={scrollYProgress} start={start} end={end} />
        )
      })}
    </p>
  )
}

function Char({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}
