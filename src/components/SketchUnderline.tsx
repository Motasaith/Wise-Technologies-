"use client"

import { useEffect, useRef } from "react"
import { animate, createDrawable } from "animejs"

interface SketchUnderlineProps {
  children: React.ReactNode
  className?: string
  color?: string
  strokeWidth?: number
  duration?: number
  delay?: number
  wobble?: number
}

/**
 * SketchUnderline — Wraps children and draws an animated, wobbly
 * underline beneath them when scrolled into view. The line has a
 * hand-drawn, imperfect quality that fits the sketchbook theme.
 */
export default function SketchUnderline({
  children,
  className = "",
  color = "#e74c3c",
  strokeWidth = 2.5,
  duration = 1200,
  delay = 0,
  wobble = 6,
}: SketchUnderlineProps) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    const path = pathRef.current
    const svg = svgRef.current
    if (!container || !path || !svg) return

    const updatePath = () => {
      const rect = container.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      svg.setAttribute("width", `${width}`)
      svg.setAttribute("height", `${height + 10}`)
      svg.style.position = "absolute"
      svg.style.left = "0"
      svg.style.bottom = "-6px"
      svg.style.overflow = "visible"
      svg.style.pointerEvents = "none"

      // Create a wobbly hand-drawn underline path
      const segments = Math.max(4, Math.floor(width / 30))
      const segmentWidth = width / segments
      let d = `M 0 ${height}`

      for (let i = 1; i <= segments; i++) {
        const x = i * segmentWidth
        const yOffset = (i % 2 === 0 ? 1 : -1) * (Math.random() * wobble + 2)
        const cpX = x - segmentWidth / 2
        const cpY = height + yOffset
        d += ` Q ${cpX} ${cpY}, ${x} ${height}`
      }

      path.setAttribute("d", d)
      path.style.stroke = color
      path.style.strokeWidth = `${strokeWidth}`
      path.style.fill = "none"
      path.style.strokeLinecap = "round"
      path.style.strokeLinejoin = "round"

      const drawable = createDrawable(path, 0, 1)
      path.style.strokeDashoffset = `${drawable[0].length}`
    }

    updatePath()
    window.addEventListener("resize", updatePath)

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true
      updatePath()

      animate(path, {
        strokeDashoffset: [createDrawable(path, 0, 1)[0].length, 0],
        ease: "inOutSine",
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
      { threshold: 0.5 }
    )
    observer.observe(container)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updatePath)
    }
  }, [color, strokeWidth, duration, delay, wobble])

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
      <svg ref={svgRef} className="absolute" style={{ left: 0, bottom: "-6px", overflow: "visible" }}>
        <path ref={pathRef} />
      </svg>
    </span>
  )
}
