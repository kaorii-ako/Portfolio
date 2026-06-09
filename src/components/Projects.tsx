'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Project {
  id: string; name: string; tagline: string; desc: string; stars: number
  color: string; accent: string; border: string; tech: string[]; href: string
}

const PROJECTS: Project[] = [
  {
    id: 'shiori', name: 'Shiori', tagline: 'AI Study Companion', stars: 43,
    color: '#F97316', accent: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)',
    tech: ['JavaScript', 'Gemini AI', 'MCP', 'SRS', 'Google Classroom API'],
    href: 'https://github.com/kaorii-ako/Shiori-v1',
    desc: 'Open-source AI study companion with Google Classroom sync, Gemini study plans, spaced-repetition flashcards, GPA predictor, AI quiz generation, and MCP server for Claude Code.',
  },
  {
    id: 'chronicly', name: 'Chronicly', tagline: 'Health Tracker', stars: 3,
    color: '#FBBF24', accent: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)',
    tech: ['TypeScript', 'React', 'Supabase', 'Charts'],
    href: 'https://github.com/kaorii-ako/chronicly',
    desc: 'Open-source health tracker for chronic illness management. Log symptoms, medications, appointments, and identify trends with a clean UI.',
  },
  {
    id: 'macchanu', name: 'Macchanu', tagline: 'STEM Racing Team Site', stars: 0,
    color: '#94A3B8', accent: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.15)',
    tech: ['JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/kaorii-ako/macchanu',
    desc: 'Official website for a STEM racing team. Clean performance-focused frontend showcasing the team, events, and achievements.',
  },
]

function TiltCard({ project, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const inView = useInView(cardRef, { once: true, margin: '-80px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - rect.top) / rect.height - 0.5) * 12,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * -12,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      style={{ perspective: 1000, cursor: 'pointer' }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{
          background: 'rgba(7,5,3,0.8)',
          border: `1px solid ${hovered ? project.border : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden',
          backdropFilter: 'blur(20px)',
          boxShadow: hovered ? '0 30px 80px rgba(0,0,0,0.5)' : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 50% 0%, ${project.accent} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', marginBottom: 20,
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700,
              color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 4,
            }}>
              {project.name}
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: project.color,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
            }}>
              {project.tagline}
            </span>
          </div>
          {project.stars > 0 && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: project.accent, border: `1px solid ${project.border}`,
              borderRadius: 20, padding: '6px 12px',
            }}>
              <span style={{ fontSize: 12, color: project.color }}>★</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: project.color }}>
                {project.stars}
              </span>
            </div>
          )}
        </div>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: 1.7,
          color: 'var(--text-secondary)', marginBottom: 24,
        }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6, marginBottom: 28 }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              padding: '4px 10px', borderRadius: 8, letterSpacing: '0.05em',
            }}>
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, color: project.color,
            textDecoration: 'none', letterSpacing: '0.05em',
          }}
        >
          View on GitHub →
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        position: 'relative', zIndex: 1,
        padding: '120px 24px', maxWidth: 1100, margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 24 }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase' as const,
        }}>
          02 / Projects
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 64,
        }}
      >
        Things I&apos;ve built
      </motion.h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 24,
      }}>
        {PROJECTS.map((p, i) => (
          <TiltCard key={p.id} project={p} delay={0.2 + i * 0.15} />
        ))}
      </div>
    </section>
  )
}
