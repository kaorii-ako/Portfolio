'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface MusicItem {
  id: string
  title: string
  subtitle: string
  badge: string
  desc: string
  color: string
  accent: string
  border: string
  stats: { label: string; value: string }[]
  highlights: string[]
}

const MUSIC: MusicItem[] = [
  {
    id: 'violin',
    title: 'Violin',
    subtitle: 'OSAKA International Music Competition Finalist',
    badge: '4TH PLACE',
    desc: 'Awarded 4th Place in the finals of the prestigious OSAKA International Music Competition in Japan. Performing under rigorous jury review against elite international musicians, developing deep control of expression, tone production, and stage presence.',
    color: '#F97316',
    accent: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.25)',
    stats: [
      { label: 'Event', value: 'Osaka, Japan' },
      { label: 'Result', value: '4th Place' },
      { label: 'Focus', value: 'Solo Performance' },
    ],
    highlights: [
      'Successfully advanced through preliminary rounds to international finals',
      'Mastered complex classical repertoire with meticulous technical execution',
      'Refined performance composure in high-pressure competition environments',
    ],
  },
  {
    id: 'piano',
    title: 'Piano',
    subtitle: 'Grade 8 Distinction',
    badge: 'DISTINCTION',
    desc: 'Achieved Grade 8 Distinction (the highest grade of the classical board exams). Demonstrates technical mastery of scales, arpeggios, sight-reading, and highly advanced classical repertoire from Bach, Beethoven, Chopin, and modern masters.',
    color: '#FBBF24',
    accent: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.2)',
    stats: [
      { label: 'Grade Level', value: 'Grade 8 (ABRSM/Trinity)' },
      { label: 'Award', value: 'Distinction' },
      { label: 'Competency', value: 'Advanced Repertoire' },
    ],
    highlights: [
      'Scored Distinction, demonstrating top-tier artistic and technical quality',
      'Developed advanced auditory awareness, score analysis, and keyboard harmony',
      'Maintained long-term discipline in rigorous technical practice routines',
    ],
  },
]

function MusicCard({ item, delay }: { item: MusicItem; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: '-80px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * -8,
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
      style={{ perspective: 1000, cursor: 'pointer' }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.015 : 1 }}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
        style={{
          background: 'rgba(7,5,3,0.8)',
          border: `1px solid ${hovered ? item.border : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 24,
          padding: 36,
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
          boxShadow: hovered ? `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${item.color}10` : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 50% 0%, ${item.accent} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: 4,
            }}>
              {item.title}
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: item.color,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {item.subtitle}
            </span>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: item.color,
            background: item.accent,
            border: `1px solid ${item.border}`,
            padding: '4px 10px',
            borderRadius: 20,
            letterSpacing: '0.05em',
          }}>
            {item.badge}
          </span>
        </div>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 14,
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          marginBottom: 24,
        }}>
          {item.desc}
        </p>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          borderRadius: 16,
          padding: '16px 20px',
          marginBottom: 24,
        }}>
          {item.stats.map(s => (
            <div key={s.label}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                {s.label}
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {item.highlights.map(h => (
            <li key={h} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: item.color, fontSize: 10, marginTop: 4 }}>▸</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}>
                {h}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default function Music() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="music"
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '80px 24px 120px',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 24 }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.3em',
          color: '#F97316',
          textTransform: 'uppercase',
        }}>
          05 / Music
        </span>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Classical &amp; <span style={{ color: '#F97316' }}>Performance</span> Artistry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              color: 'var(--text-secondary)',
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Classical training teaches critical listening, patience, and rigorous micro-adjustments. These values translate directly to refining software design, code architecture, and complex system engineering.
          </motion.p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 24,
      }}>
        {MUSIC.map((m, i) => (
          <MusicCard key={m.id} item={m} delay={0.2 + i * 0.15} />
        ))}
      </div>
    </section>
  )
}
