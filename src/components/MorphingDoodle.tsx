"use client"

import { useEffect, useRef } from "react"
import { animate, createTimeline } from "animejs"

interface MorphingDoodleProps {
  className?: string
  size?: number
  color?: string
  strokeWidth?: number
  duration?: number
}

/**
 * MorphingDoodle — A playful SVG shape that morphs between different
 * sketchy doodle forms (star, cloud, gear, heart). Perfect as a decorative
 * element that brings life to the sketchbook theme.
 */
export default function MorphingDoodle({
  className = "",
  size = 120,
  color = "#4A4A4A",
  strokeWidth = 2,
  duration = 3000,
}: MorphingDoodleProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  // Sketchy path data for different shapes
  const shapes = [
    // Star (rough/hand-drawn)
    "M60,5 L72,40 L110,40 L80,62 L92,97 L60,75 L28,97 L40,62 L10,40 L48,40 Z",
    // Cloud
    "M25,65 Q10,65 10,50 Q10,35 25,35 Q30,15 50,15 Q70,15 75,35 Q90,35 90,50 Q90,65 75,65 Z",
    // Gear
    "M60,10 L65,25 L80,20 L85,35 L70,40 L75,55 L60,60 L55,75 L40,70 L35,85 L20,80 L25,65 L10,60 L15,45 L5,35 L20,30 L15,15 L30,20 L35,5 L50,10 L55,5 Z",
    // Heart
    "M60,30 Q60,10 40,10 Q20,10 20,30 Q20,50 60,90 Q100,50 100,30 Q100,10 80,10 Q60,10 60,30 Z",
  ]

  useEffect(() => {
    const path = pathRef.current
    const container = containerRef.current
    if (!path || !container) return

    // Set initial path
    path.setAttribute("d", shapes[0])
    path.style.fill = "none"
    path.style.stroke = color
    path.style.strokeWidth = `${strokeWidth}`
    path.style.strokeLinecap = "round"
    path.style.strokeLinejoin = "round"

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      // Continuous morphing loop
      const tl = createTimeline({ loop: true, alternate: true })

      shapes.slice(1).forEach((shape) => {
        tl.add(path, {
          d: shape,
          duration,
          ease: "inOutSine",
        })
      })

      // Also rotate and scale slightly
      animate(container, {
        rotate: [0, 360],
        duration: 20000,
        loop: true,
        ease: "linear",
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
      { threshold: 0.3 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [shapes, color, strokeWidth, duration])

  return (
    <div ref={containerRef} className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 100"
        fill="none"
      >
        <path ref={pathRef} />
      </svg>
    </div>
  )
}
