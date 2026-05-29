"use client"

import { useEffect, useRef } from "react"
import { animate, createMotionPath, createDrawable, onScroll } from "animejs"

interface ScrollSketchPathProps {
  children: React.ReactNode
  className?: string
  pathD?: string
  viewBox?: string
  duration?: number
  trigger?: "inview" | "mount"
}

/**
 * ScrollSketchPath — An element that travels along a hand-drawn SVG path
 * as the user scrolls. Perfect for guiding eyes down the page like a
 * pencil line connecting sections.
 */
export default function ScrollSketchPath({
  children,
  className = "",
  pathD = "M10,0 Q50,100 90,200 T10,400 T90,600 T10,800",
  viewBox = "0 0 100 800",
  duration = 1,
  trigger = "inview",
}: ScrollSketchPathProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const travelerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    const path = pathRef.current
    const traveler = travelerRef.current
    if (!container || !path || !traveler) return

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      // Create motion path
      const motionPath = createMotionPath(path)

      // Animate traveler along path linked to scroll
      animate(traveler, {
        motionPath,
        ease: "linear",
        duration,
        autoplay: onScroll({
          enter: "top bottom",
          leave: "bottom top",
          sync: 0.5,
        }),
      })

      // Also draw the path stroke as you scroll
      const drawable = createDrawable(path, 0, 1)
      animate(path, {
        strokeDashoffset: [drawable[0].length, 0],
        ease: "linear",
        duration,
        autoplay: onScroll({
          enter: "top bottom",
          leave: "bottom top",
          sync: 0.5,
        }),
      })
    }

    if (trigger === "mount") {
      runAnimation()
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
        { threshold: 0.1 }
      )
      observer.observe(container)
      return () => observer.disconnect()
    }
  }, [pathD, duration, trigger])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#4A4A4A"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.4"
        />
      </svg>
      <div
        ref={travelerRef}
        className="absolute z-10"
        style={{ left: 0, top: 0 }}
      >
        {children}
      </div>
    </div>
  )
}
