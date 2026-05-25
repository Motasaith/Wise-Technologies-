"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  containerClassName?: string
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const allWords: { word: string; className: string; globalIndex: number }[] = []
  let globalIndex = 0

  for (const segment of segments) {
    const words = segment.text.split(' ')
    for (const word of words) {
      allWords.push({ word, className: segment.className || '', globalIndex })
      globalIndex++
    }
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map(({ word, className, globalIndex }, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: globalIndex * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < allWords.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
