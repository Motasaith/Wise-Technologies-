"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

interface ElasticStaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  duration?: number
  trigger?: "inview" | "mount"
  direction?: "normal" | "reverse"
}

/**
 * ElasticStagger — Wraps children and animates them in with a bouncy,
 * elastic stagger effect. Perfect for grids of cards, lists, or any
 * grouped elements that need a playful sketchbook reveal.
 */
export default function ElasticStagger({
  children,
  className = "",
  staggerDelay = 100,
  duration = 800,
  trigger = "inview",
  direction = "normal",
}: ElasticStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.children
    if (!items.length) return

    // Prepare items
    Array.from(items).forEach((item) => {
      const el = item as HTMLElement
      el.style.opacity = "0"
      el.style.transform = "translateY(40px) scale(0.8)"
    })

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      animate(items, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.8, 1],
        rotate: () => (Math.random() - 0.5) * 6,
        ease: "outElastic(1, .65)",
        duration,
        delay: stagger(staggerDelay, { reversed: direction === "reverse" }),
      })
    }

    if (trigger === "mount") {
      const timer = setTimeout(runAnimation, 200)
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
        { threshold: 0.1 }
      )
      observer.observe(container)
      return () => observer.disconnect()
    }
  }, [staggerDelay, duration, trigger, direction])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
