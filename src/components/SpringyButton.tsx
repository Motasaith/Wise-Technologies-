"use client"

import { useEffect, useRef } from "react"
import { animate, createSpring } from "animejs"

interface SpringyButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  color?: string
  bgColor?: string
}

/**
 * SpringyButton — A button with real spring physics on hover and click.
 * When you press it, it squashes and bounces back like a rubber stamp.
 * Perfect for sketchbook-style CTAs.
 */
export default function SpringyButton({
  children,
  className = "",
  onClick,
  href,
  color = "#2c3e50",
  bgColor = "#ffeb3b",
}: SpringyButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = buttonRef.current
    if (!btn) return

    const spring = createSpring({ stiffness: 180, damping: 12, mass: 1 })

    const handleMouseEnter = () => {
      animate(btn, {
        scale: 1.08,
        rotate: (Math.random() - 0.5) * 4,
        ease: spring,
        duration: 600,
      })
    }

    const handleMouseLeave = () => {
      animate(btn, {
        scale: 1,
        rotate: 0,
        ease: spring,
        duration: 600,
      })
    }

    const handleMouseDown = () => {
      animate(btn, {
        scale: 0.92,
        ease: "outExpo",
        duration: 150,
      })
    }

    const handleMouseUp = () => {
      animate(btn, {
        scale: 1.05,
        ease: spring,
        duration: 800,
      })
    }

    btn.addEventListener("mouseenter", handleMouseEnter)
    btn.addEventListener("mouseleave", handleMouseLeave)
    btn.addEventListener("mousedown", handleMouseDown)
    btn.addEventListener("mouseup", handleMouseUp)

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter)
      btn.removeEventListener("mouseleave", handleMouseLeave)
      btn.removeEventListener("mousedown", handleMouseDown)
      btn.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const baseClasses = `relative inline-flex items-center gap-2 px-6 py-3 text-lg font-bold transition-colors ${className}`
  const style = {
    fontFamily: "'Kalam', cursive",
    color,
    background: bgColor,
    borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
    border: `2px solid ${color}`,
    boxShadow: `3px 3px 0px ${color}40`,
    cursor: "pointer",
    transformOrigin: "center center",
  }

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        className={baseClasses}
        style={style}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef}
      className={baseClasses}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
