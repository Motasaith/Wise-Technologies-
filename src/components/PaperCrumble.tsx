"use client"

import { useEffect, useRef } from "react"
import { animate } from "animejs"

interface PaperCrumbleProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
}

/**
 * PaperCrumble — Reveals content with a "paper uncrumpling" animation.
 * The element starts crumpled (scaled down, rotated, low opacity) and
 * smoothly unfolds into place. Great for cards and content blocks.
 */
export default function PaperCrumble({
  children,
  className = "",
  duration = 1000,
  delay = 0,
}: PaperCrumbleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Set initial crumpled state
    container.style.opacity = "0"
    container.style.transform = "scale(0.3) rotate(-15deg)"
    container.style.transformOrigin = "center center"

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      animate(container, {
        opacity: [0, 1],
        scale: [0.3, 1],
        rotate: [-15, 0],
        ease: "outElastic(1, .55)",
        duration,
        delay,
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [duration, delay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
