'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PROFILES = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@kaorii-ako',
    desc: 'Open source AI tools, STEM projects, and experiments in LLMs, MCP servers, and edge computing.',
    meta: ['3 public repos', '43 stars total', 'AI Builder'],
    href: 'https://github.com/kaorii-ako',
    accent: '#F97316',
    bg: 'rgba(249,115,22,0.07)',
    border: 'rgba(249,115,22,0.22)',
    hoverBorder: 'rgba(249,115,22,0.5)',
  },
  {
    id: 'motion',
    label: 'Motion.build',
    handle: 'Game Tester',
    desc: 'Contributing to the quality and craft of motion-driven products — timing, easing, and interaction feel.',
    meta: ['Active role', '2024 – present', 'QA & feedback'],
    href: 'https://motion.build',
    accent: '#FBBF24',
    bg: 'rgba(251,191,36,0.06)',
    border: 'rgba(251,191,36,0.18)',
    hoverBorder: 'rgba(251,191,36,0.45)',
  },
]

const PROJECTS = [
  { name: 'Shiori', stars: 43, desc: 'AI Study Companion', href: 'https://github.com/kaorii-ako/Shiori-v1' },
  { name: 'Chronicly', stars: 3, desc: 'Health Tracker', href: 'https://github.com/kaorii-ako/chronicly' },
  { name: 'Macchanu', stars: 0, desc: 'STEM Racing Site', href: 'https://github.com/kaorii-ako/macchanu' },
]

function ProfileCard({ p, delay }: { p: typeof PROFILES[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: '-60px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * -10,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      style={{ perspective: 1000, flex: 1, minWidth: 280 }}
    >
      <motion.a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        style={{
          display: 'block',
          textDecoration: 'none',
          background: hovered ? p.bg : 'rgba(255,255,255,0.025)',
          border: `1px solid ${hovered ? p.hoverBorder : p.border}`,
          borderRadius: 24,
          padding: '40px 36px',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          boxShadow: hovered ? `0 40px 80px rgba(0,0,0,0.5), 0 0 60px ${p.accent}18` : 'none',
          transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
          height: '100%',
        }}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 30% 0%, ${p.bg} 0%, transparent 65%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, ${p.accent}, transparent)`, opacity: hovered ? 1 : 0.4, transition: 'opacity 0.3s' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: p.accent, letterSpacing: '0.25em', textTransform: 'uppercase' as const, marginBottom: 8 }}>
              {p.label}
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              {p.handle}
            </h3>
          </div>
          <motion.div
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ fontSize: 22, color: p.accent, opacity: hovered ? 1 : 0.5 }}
          >
            ↗
          </motion.div>
        </div>

        <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: 28 }}>
          {p.desc}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
          {p.meta.map(m => (
            <span key={m} style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, color: p.accent,
              background: `${p.bg}`, border: `1px solid ${p.border}`,
              padding: '4px 12px', borderRadius: 20, letterSpacing: '0.06em',
            }}>
              {m}
            </span>
          ))}
        </div>
      </motion.a>
    </motion.div>
  )
}

export default function Connect() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="connect"
      ref={ref}
      style={{ position: 'relative', zIndex: 1, padding: '120px 24px', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(249,115,22,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase' as const }}>
            04 / Connect
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}
        >
          Find me <span style={{ color: '#F97316' }}>online</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--text-secondary)', marginBottom: 64, maxWidth: 500, lineHeight: 1.7 }}
        >
          Click any card to visit my profile. Always open to new ideas and good conversations.
        </motion.p>

        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, marginBottom: 64 }}>
          {PROFILES.map((p, i) => (
            <ProfileCard key={p.id} p={p} delay={0.25 + i * 0.15} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: 20 }}>
            Project Repos
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
            {PROJECTS.map((proj, i) => (
              <motion.a
                key={proj.name}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                whileHover={{ scale: 1.04, borderColor: 'rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14, padding: '14px 20px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
                  {proj.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                  {proj.desc}
                </span>
                {proj.stars > 0 && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#F97316' }}>
                    ★ {proj.stars}
                  </span>
                )}
                <span style={{ fontSize: 12, color: 'rgba(249,115,22,0.6)', marginLeft: 4 }}>↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
