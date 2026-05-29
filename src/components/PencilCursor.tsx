"use client"

import { useEffect, useRef, useCallback } from "react"

interface PencilCursorProps {
  color?: string
  strokeWidth?: number
  maxTrailLength?: number
  smoothing?: number
}

/**
 * PencilCursor — A mouse-following pencil that draws a sketchy trail
 * as you move the cursor. The trail fades out organically, creating
 * a "drawing on paper" effect across the entire page.
 */
export default function PencilCursor({
  color = "#4A4A4A",
  strokeWidth = 2,
  maxTrailLength = 40,
  smoothing = 0.15,
}: PencilCursorProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)
  const pointsRef = useRef<{ x: number; y: number }[]>([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const currentRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const isMovingRef = useRef(false)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const getSmoothPoint = useCallback(() => {
    const target = mouseRef.current
    const current = currentRef.current
    current.x += (target.x - current.x) * smoothing
    current.y += (target.y - current.y) * smoothing
    return { x: current.x, y: current.y }
  }, [smoothing])

  useEffect(() => {
    // Only show on desktop
    if (typeof window === "undefined" || "ontouchstart" in window) return

    const svg = svgRef.current
    const path = pathRef.current
    const dot = dotRef.current
    if (!svg || !path || !dot) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      isMovingRef.current = true

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => {
        isMovingRef.current = false
      }, 100)
    }

    const animate = () => {
      const point = getSmoothPoint()

      if (isMovingRef.current) {
        pointsRef.current.push({ x: point.x, y: point.y })
        if (pointsRef.current.length > maxTrailLength) {
          pointsRef.current.shift()
        }
      } else {
        // Fade out trail when idle
        if (pointsRef.current.length > 0) {
          pointsRef.current.shift()
        }
      }

      // Build path string
      const pts = pointsRef.current
      if (pts.length > 2) {
        let d = `M ${pts[0].x} ${pts[0].y}`
        for (let i = 1; i < pts.length; i++) {
          const prev = pts[i - 1]
          const curr = pts[i]
          const midX = (prev.x + curr.x) / 2
          const midY = (prev.y + curr.y) / 2
          d += ` Q ${prev.x} ${prev.y}, ${midX} ${midY}`
        }
        d += ` L ${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`
        path.setAttribute("d", d)

        // Dynamic stroke width based on speed
        const speed = pts.length > 1
          ? Math.hypot(pts[pts.length - 1].x - pts[pts.length - 2].x, pts[pts.length - 1].y - pts[pts.length - 2].y)
          : 0
        const dynamicWidth = Math.max(0.5, strokeWidth - speed * 0.05)
        path.setAttribute("stroke-width", `${dynamicWidth}`)
      } else {
        path.setAttribute("d", "")
      }

      // Update dot position
      dot.setAttribute("cx", `${mouseRef.current.x}`)
      dot.setAttribute("cy", `${mouseRef.current.y}`)

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [getSmoothPoint, maxTrailLength, strokeWidth])

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null
  }

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: "100vw", height: "100vh" }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.6}
      />
      {/* Pencil tip dot */}
      <circle
        ref={dotRef}
        r="3"
        fill={color}
        opacity={0.8}
      />
    </svg>
  )
}
