'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Academic', href: '#academic' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Sports', href: '#sports' },
  { label: 'Music', href: '#music' },
]

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash) {
        setActive(hash)
      } else {
        setActive('#about')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleLinkClick = (href: string) => {
    setActive(href)
    const element = document.getElementById('portfolio-content')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          style={{
            position: 'fixed',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            background: 'rgba(7,5,3,0.75)',
            backdropFilter: 'blur(24px) saturate(150%)',
            border: '1px solid rgba(249,115,22,0.22)',
            borderRadius: 40,
            padding: '10px 20px',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: '#F97316',
            marginRight: 12,
            marginLeft: 4,
            letterSpacing: '0.05em',
            fontWeight: 600,
          }}>
            KAO
          </span>
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 500,
                color: active === href ? '#F97316' : '#9B8B76',
                background: active === href ? 'rgba(249,115,22,0.12)' : 'transparent',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: 20,
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
                cursor: 'pointer',
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
