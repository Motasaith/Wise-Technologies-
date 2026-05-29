"use client"

import { useEffect, useRef } from "react"
import { animate, createDraggable } from "animejs"

interface DraggableStickyNoteProps {
  children: React.ReactNode
  className?: string
  color?: string
  rotate?: number
  defaultX?: number
  defaultY?: number
}

/**
 * DraggableStickyNote — A sticky note that users can actually drag around
 * the page with physics. It has inertia and snaps back gently when released.
 * Perfect for the sketchbook "move things around" feel.
 */
export default function DraggableStickyNote({
  children,
  className = "",
  color = "#feff9c",
  rotate = -2,
  defaultX = 0,
  defaultY = 0,
}: DraggableStickyNoteProps) {
  const noteRef = useRef<HTMLDivElement>(null)
  const hasSetup = useRef(false)

  useEffect(() => {
    const note = noteRef.current
    if (!note || hasSetup.current) return
    hasSetup.current = true

    // Set initial position
    note.style.transform = `translate(${defaultX}px, ${defaultY}px) rotate(${rotate}deg)`

    // Make draggable with anime.js
    const draggable = createDraggable(note, {
      container: document.body,
      snap: 15,
      inertia: true,
      revert: false,
      onDragStart: () => {
        animate(note, {
          scale: 1.05,
          rotate: 0,
          ease: "outExpo",
          duration: 200,
        })
      },
      onDragEnd: () => {
        animate(note, {
          scale: 1,
          rotate: (Math.random() - 0.5) * 6,
          ease: "outElastic(1, .6)",
          duration: 600,
        })
      },
    })

    return () => {
      draggable.revert()
    }
  }, [defaultX, defaultY, rotate])

  return (
    <div
      ref={noteRef}
      className={`absolute cursor-grab active:cursor-grabbing p-6 shadow-lg ${className}`}
      style={{
        background: color,
        boxShadow: "3px 5px 10px rgba(0,0,0,0.15)",
        touchAction: "none",
        userSelect: "none",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
