"use client"

import { useEffect, useRef } from "react"
import { animate, stagger, createTimeline } from "animejs"

interface HandwrittenTextProps {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  color?: string
  fontSize?: number
  duration?: number
  delay?: number
  trigger?: "inview" | "mount"
}

/**
 * HandwrittenText — Reveals text character-by-character with a sketchy,
 * hand-drawn feel. Each character pops in with a slight rotation and scale,
 * mimicking the imperfect nature of handwriting.
 */
export default function HandwrittenText({
  text,
  className = "",
  tag: Tag = "span",
  color = "#2c3e50",
  fontSize = 24,
  duration = 40,
  delay = 0,
  trigger = "inview",
}: HandwrittenTextProps) {
  const containerRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chars = container.querySelectorAll<HTMLSpanElement>(".hw-char")

    chars.forEach((char) => {
      char.style.opacity = "0"
      char.style.display = "inline-block"
      char.style.transformOrigin = "center bottom"
    })

    const animateChars = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      const tl = createTimeline()
      tl.add(chars, {
        opacity: [0, 1],
        translateY: [10, 0],
        rotate: () => (Math.random() - 0.5) * 16,
        scale: [0.5, 1],
        ease: "outElastic(1, .6)",
        duration: 800,
        delay: stagger(duration, { start: delay }),
      })
    }

    if (trigger === "mount") {
      const timer = setTimeout(animateChars, 100)
      return () => clearTimeout(timer)
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateChars()
              observer.disconnect()
            }
          })
        },
        { threshold: 0.3 }
      )
      observer.observe(container)
      return () => observer.disconnect()
    }
  }, [text, duration, delay, trigger])

  const chars = text.split("").map((char, i) => (
    <span
      key={i}
      className="hw-char"
      style={{
        color,
        fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
        whiteSpace: char === " " ? "pre" : undefined,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))

  return (
    <Tag ref={containerRef as any} className={className}>
      {chars}
    </Tag>
  )
}
