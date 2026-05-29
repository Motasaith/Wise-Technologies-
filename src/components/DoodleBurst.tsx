"use client"

import { useEffect, useRef, useCallback } from "react"
import { animate } from "animejs"

interface DoodleBurstProps {
  className?: string
  trigger?: "click" | "hover" | "inview"
  particleCount?: number
  colors?: string[]
  children?: React.ReactNode
}

/**
 * DoodleBurst — Creates a burst of sketchy particles (stars, circles,
 * lines) that explode outward. Perfect for celebrating interactions like
 * button clicks or section reveals.
 */
export default function DoodleBurst({
  children,
  className = "",
  trigger = "inview",
  particleCount = 20,
  colors = ["#e74c3c", "#f1c40f", "#3498db", "#2ecc71", "#9b59b6", "#4A4A4A"],
}: DoodleBurstProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const createParticles = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const shapes = [
      // Star
      "M0,-8 L2,-2 L8,-2 L3,2 L5,8 L0,4 L-5,8 L-3,2 L-8,-2 L-2,-2 Z",
      // Circle
      "M0,-5 A5,5 0 1,1 0,5 A5,5 0 1,1 0,-5 Z",
      // Square
      "M-4,-4 L4,-4 L4,4 L-4,4 Z",
      // Cross
      "M-1,-6 L1,-6 L1,-1 L6,-1 L6,1 L1,1 L1,6 L-1,6 L-1,1 L-6,1 L-6,-1 L-1,-1 Z",
      // Zigzag
      "M-8,0 L-4,-4 L0,0 L4,-4 L8,0",
    ]

    for (let i = 0; i < particleCount; i++) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", "20")
      svg.setAttribute("height", "20")
      svg.setAttribute("viewBox", "-10 -10 20 20")
      svg.style.position = "absolute"
      svg.style.left = "50%"
      svg.style.top = "50%"
      svg.style.pointerEvents = "none"
      svg.style.opacity = "0"

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("d", shapes[i % shapes.length])
      path.setAttribute("fill", "none")
      path.setAttribute("stroke", colors[i % colors.length])
      path.setAttribute("stroke-width", "1.5")
      path.setAttribute("stroke-linecap", "round")
      path.setAttribute("stroke-linejoin", "round")

      svg.appendChild(path)
      container.appendChild(svg)

      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
      const distance = 60 + Math.random() * 80
      const endX = Math.cos(angle) * distance
      const endY = Math.sin(angle) * distance

      animate(svg, {
        translateX: [0, endX],
        translateY: [0, endY],
        scale: [0, 1, 0],
        rotate: [0, (Math.random() - 0.5) * 360],
        opacity: [0, 1, 0],
        ease: "outExpo",
        duration: 1200 + Math.random() * 600,
        delay: Math.random() * 200,
        onComplete: () => svg.remove(),
      })
    }
  }, [particleCount, colors])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (trigger === "inview") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true
              createParticles()
            }
          })
        },
        { threshold: 0.5 }
      )
      observer.observe(container)
      return () => observer.disconnect()
    }

    if (trigger === "click") {
      container.addEventListener("click", createParticles)
      return () => container.removeEventListener("click", createParticles)
    }

    if (trigger === "hover") {
      container.addEventListener("mouseenter", createParticles)
      return () => container.removeEventListener("mouseenter", createParticles)
    }
  }, [trigger, createParticles])

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {children}
    </div>
  )
}
