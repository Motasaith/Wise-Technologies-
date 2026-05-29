"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react"
import { animate, createDrawable } from "animejs"

interface SketchDrawSVGProps {
  children: React.ReactNode
  className?: string
  strokeColor?: string
  strokeWidth?: number
  duration?: number
  delay?: number
  trigger?: "inview" | "mount"
}

/**
 * SketchDrawSVG — Animates all SVG path strokes with a hand-drawn effect.
 * Perfect for sketchbook-style line art, borders, and doodles.
 */
export default function SketchDrawSVG({
  children,
  className = "",
  strokeColor = "#4A4A4A",
  strokeWidth = 2,
  duration = 2000,
  delay = 0,
  trigger = "inview",
}: SketchDrawSVGProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const paths = container.querySelectorAll<SVGPathElement>(
      "path, line, polyline, polygon, circle, ellipse, rect"
    )

    // Prepare paths for stroke animation using createDrawable
    const drawables: ReturnType<typeof createDrawable>[] = []
    paths.forEach((path) => {
      path.style.stroke = strokeColor
      path.style.strokeWidth = `${strokeWidth}`
      path.style.strokeLinecap = "round"
      path.style.strokeLinejoin = "round"
      if (path.tagName !== "circle" && path.tagName !== "ellipse" && path.tagName !== "rect") {
        path.style.fill = "none"
      }
      const d = createDrawable(path, 0, 1)
      drawables.push(d)
    })

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      paths.forEach((path, i) => {
        animate(path, {
          strokeDashoffset: [(drawables[i][0] as any).length, 0],
          ease: "inOutSine",
          duration,
          delay: delay + i * 150,
        })
      })
    }

    if (trigger === "mount") {
      const timer = setTimeout(runAnimation, 100)
      return () => clearTimeout(timer)
    } else {
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
    }
  }, [strokeColor, strokeWidth, duration, delay, trigger])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
