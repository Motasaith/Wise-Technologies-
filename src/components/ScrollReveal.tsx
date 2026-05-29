"use client"

import { useEffect, useRef } from "react"
import { animate, onScroll } from "animejs"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  from?: "bottom" | "top" | "left" | "right"
  distance?: number
  duration?: number
  delay?: number
  rotate?: number
  scale?: number
}

/**
 * ScrollReveal — Uses anime.js native ScrollObserver for buttery-smooth
 * scroll-linked animations. No IntersectionObserver needed — anime.js
 * handles the scroll binding natively with precise scrub control.
 */
export default function ScrollReveal({
  children,
  className = "",
  from = "bottom",
  distance = 60,
  duration = 1,
  delay = 0,
  rotate = 0,
  scale = 1,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || hasAnimated.current) return
    hasAnimated.current = true

    const fromMap = {
      bottom: { translateY: [distance, 0] },
      top: { translateY: [-distance, 0] },
      left: { translateX: [-distance, 0] },
      right: { translateX: [distance, 0] },
    }

    const fromValues = fromMap[from]

    animate(container, {
      ...fromValues,
      opacity: [0, 1],
      rotate: rotate ? [rotate, 0] : undefined,
      scale: scale !== 1 ? [scale, 1] : undefined,
      ease: "outSine",
      duration,
      delay,
      autoplay: onScroll({
        enter: "top 85%",
        leave: "bottom 15%",
        sync: 0.3,
      }),
    })
  }, [from, distance, duration, delay, rotate, scale])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
