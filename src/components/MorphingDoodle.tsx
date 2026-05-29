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
 * sketchy doodle forms. All shapes are centered in the same viewBox
 * for smooth, seamless morphing.
 */
export default function MorphingDoodle({
  className = "",
  size = 80,
  color = "#4A4A4A",
  strokeWidth = 1.5,
  duration = 2500,
}: MorphingDoodleProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  // All shapes centered in 100x100 viewBox for smooth morphing
  const shapes = [
    // Star — centered at (50,50)
    "M50,8 L58,35 L88,35 L64,52 L72,80 L50,64 L28,80 L36,52 L12,35 L42,35 Z",
    // Cloud — centered at (50,50)
    "M20,60 Q8,60 8,48 Q8,36 20,36 Q24,20 42,20 Q56,12 72,20 Q88,16 92,32 Q100,32 100,44 Q100,56 88,56 Q88,68 72,68 L20,60",
    // Gear — centered at (50,50)
    "M50,15 L54,26 L66,22 L70,34 L60,38 L62,50 L72,54 L70,66 L58,64 L54,76 L46,76 L42,64 L30,66 L28,54 L38,50 L40,38 L30,34 L34,22 L46,26 Z",
    // Heart — centered at (50,50)
    "M50,28 Q50,12 34,12 Q18,12 18,28 Q18,44 50,72 Q82,44 82,28 Q82,12 66,12 Q50,12 50,28 Z",
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

      // Gentle floating sway instead of fast spin
      animate(container, {
        rotate: [-6, 6],
        translateY: [-4, 4],
        duration: 4000,
        loop: true,
        alternate: true,
        ease: "inOutSine",
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
        viewBox="0 0 100 100"
        fill="none"
      >
        <path ref={pathRef} />
      </svg>
    </div>
  )
}
