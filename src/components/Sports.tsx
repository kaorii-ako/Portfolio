'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface SportItem {
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

const SPORTS: SportItem[] = [
  {
    id: 'fobisia',
    title: 'FOBISIA Games Athlete',
    subtitle: 'International School Representation',
    badge: 'MULTISPORT',
    desc: 'Selected to represent Amnuaysilpa School at the FOBISIA (Federation of British International Schools in Asia) Games. Competed against top-tier international schools from across Asia, demonstrating athletic versatility, discipline, and team spirit.',
    color: '#F97316',
    accent: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.25)',
    stats: [
      { label: 'Platform', value: 'Asia-Pacific' },
      { label: 'Role', value: 'Varsity Athlete' },
      { label: 'Focus', value: 'Multi-discipline' },
    ],
    highlights: [
      'Represented Amnuaysilpa School internationally',
      'Competed in high-stakes track & field and swimming events',
      'Collaborated in relay teams and multi-sport tracks',
    ],
  },
  {
    id: 'golf',
    title: 'Golf',
    subtitle: 'Competitive Junior Golfing',
    badge: 'PRECISION',
    desc: 'Dedicated to competitive junior golf, focusing on course management, swing mechanics, and the psychological stamina required for 18-hole tournaments. Golf represents the perfect intersection of physical precision and analytical planning.',
    color: '#FBBF24',
    accent: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.2)',
    stats: [
      { label: 'Handicap', value: 'Single Digit (Target)' },
      { label: 'Type', value: 'Tournament Play' },
      { label: 'Skill', value: 'Course Strategy' },
    ],
    highlights: [
      'Refined swing dynamics and ball-striking consistency',
      'Competed in junior and local school tournaments',
      'Trained in situational decision-making under pressure',
    ],
  },
  {
    id: 'swimming',
    title: 'Swimming',
    subtitle: 'Competitive Freestyle & Breaststroke',
    badge: 'ENDURANCE',
    desc: 'Rigorous training in competitive swimming. Focused on stroke efficiency, starting block reaction times, and lung capacity. Swimming builds deep aerobic capacity and the mental discipline needed for early morning yards.',
    color: '#94A3B8',
    accent: 'rgba(148,163,184,0.08)',
    border: 'rgba(148,163,184,0.15)',
    stats: [
      { label: 'Strokes', value: 'Freestyle, Breaststroke' },
      { label: 'Focus', value: 'Sprint & Endurance' },
      { label: 'Training', value: 'High Intensity' },
    ],
    highlights: [
      'FOBISIA swimming team selection and events',
      'Developed optimal underwater phase & turn transitions',
      'Maintained consistent aerobic conditioning schedules',
    ],
  },
]

function SportCard({ sport, delay }: { sport: SportItem; delay: number }) {
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
          border: `1px solid ${hovered ? sport.border : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 24,
          padding: 36,
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
          boxShadow: hovered ? `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${sport.color}10` : 'none',
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
            background: `radial-gradient(circle at 50% 0%, ${sport.accent} 0%, transparent 70%)`,
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
              {sport.title}
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: sport.color,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {sport.subtitle}
            </span>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: sport.color,
            background: sport.accent,
            border: `1px solid ${sport.border}`,
            padding: '4px 10px',
            borderRadius: 20,
            letterSpacing: '0.05em',
          }}>
            {sport.badge}
          </span>
        </div>

        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 14,
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          marginBottom: 24,
        }}>
          {sport.desc}
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
          {sport.stats.map(s => (
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
          {sport.highlights.map(h => (
            <li key={h} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: sport.color, fontSize: 10, marginTop: 4 }}>▸</span>
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

export default function Sports() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="sports"
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
          04 / Sports
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
            Athletics &amp; <span style={{ color: '#F97316' }}>FOBISIA</span> Games
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
            Balancing analytical tech with competitive athletics. Sports train focus, teamwork, and physical persistence, helping to maintain clarity and drive in all pursuits.
          </motion.p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 24,
      }}>
        {SPORTS.map((s, i) => (
          <SportCard key={s.id} sport={s} delay={0.2 + i * 0.15} />
        ))}
      </div>
    </section>
  )
}
