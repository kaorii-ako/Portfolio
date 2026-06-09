'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.left = `${e.clientX}px`
      ref.current.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 0,
        width: 700,
        height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.055) 0%, rgba(249,115,22,0.02) 40%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.08s linear, top 0.08s linear',
        willChange: 'left, top',
      }}
    />
  )
}
