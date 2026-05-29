"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react"
import { scrambleText } from "animejs"

interface ScrambleRevealProps {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  duration?: number
  delay?: number
  trigger?: "inview" | "mount"
  chars?: string
}

/**
 * ScrambleReveal — Text that appears to "decode" from random characters,
 * like a secret message being revealed. Perfect for sketchbook-style
 * mystery and discovery moments.
 */
export default function ScrambleReveal({
  text,
  className = "",
  tag: Tag = "span",
  duration = 1500,
  delay = 0,
  trigger = "inview",
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
}: ScrambleRevealProps) {
  const containerRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const runAnimation = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      ;(scrambleText as any)(container, {
        text,
        duration,
        delay,
        chars,
        ease: "inOutExpo",
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
        { threshold: 0.5 }
      )
      observer.observe(container)
      return () => observer.disconnect()
    }
  }, [text, duration, delay, trigger, chars])

  return (
    <Tag ref={containerRef as any} className={className}>
      {text}
    </Tag>
  )
}
