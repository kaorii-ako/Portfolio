'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Motion.build', href: '#motion' },
  { label: 'Contact', href: '#academic' },
]

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          style={{
            position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
            zIndex: 100, display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(7,5,3,0.75)', backdropFilter: 'blur(24px) saturate(150%)',
            border: '1px solid rgba(249,115,22,0.22)', borderRadius: 40,
            padding: '12px 28px', whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 13, color: '#F97316',
            marginRight: 16, letterSpacing: '0.05em', fontWeight: 500,
          }}>
            KAO
          </span>
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500,
                color: active === href ? '#F97316' : '#9B8B76',
                background: active === href ? 'rgba(249,115,22,0.12)' : 'transparent',
                textDecoration: 'none', padding: '6px 14px', borderRadius: 20,
                transition: 'all 0.2s ease', letterSpacing: '0.02em',
              }}
            >
              {label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
