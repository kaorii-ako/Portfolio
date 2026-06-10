'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CertificationItem {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  desc: string
  color: string
  accent: string
  border: string
  skills: string[]
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cs50',
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University (via edX)',
    date: '2024',
    credentialId: 'CS50X-2024-GRAD',
    desc: 'Rigorous foundation in computer science covering algorithmic thinking, data structures, memory management, software engineering principles, and languages including C, Python, SQL, and JavaScript.',
    color: '#F97316',
    accent: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.25)',
    skills: ['C Programming', 'Data Structures', 'Algorithms', 'Memory Management', 'SQL'],
  },
  {
    id: 'deeplearning',
    title: 'Generative AI & LLM Developer Specialization',
    issuer: 'DeepLearning.AI',
    date: '2025',
    credentialId: 'DL-GENAI-2025',
    desc: 'Advanced training on training, fine-tuning, and deploying Large Language Models. Focuses on RAG architecture, agentic workflows, prompt engineering, and Model Context Protocol (MCP) integrations.',
    color: '#FBBF24',
    accent: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.2)',
    skills: ['LLM Fine-Tuning', 'RAG Systems', 'Agentic Workflows', 'Prompt Engineering', 'Gemini/Claude APIs'],
  },
  {
    id: 'frontend',
    title: 'Front End Development Libraries',
    issuer: 'freeCodeCamp',
    date: '2024',
    credentialId: 'FCC-FED-2024',
    desc: 'Certification in modern frontend frameworks and library integration, covering React, Redux, Sass, Bootstrap, and building complex interactive user interfaces with optimized state management.',
    color: '#38BDF8',
    accent: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.15)',
    skills: ['React', 'Redux', 'Sass', 'State Management', 'UI/UX Design'],
  },
  {
    id: 'nextjs',
    title: 'Next.js App Router & Server Architecture',
    issuer: 'Udemy / Vercel Guild',
    date: '2025',
    credentialId: 'UD-NEXTJS-APP',
    desc: 'Advanced React patterns, Next.js App Router mechanics, server components (RSC), server actions, page caching, SEO optimization, and deployment pipelines.',
    color: '#A855F7',
    accent: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.15)',
    skills: ['Next.js App Router', 'React Server Components', 'Server Actions', 'Web Performance'],
  },
]

function CertCard({ cert, delay }: { cert: CertificationItem; delay: number }) {
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
          border: `1px solid ${hovered ? cert.border : 'rgba(255,255,255,0.07)'}`,
          borderRadius: 24,
          padding: 36,
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
          boxShadow: hovered ? `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${cert.color}10` : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          transformStyle: 'preserve-3d',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 380,
        }}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at 50% 0%, ${cert.accent} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 6,
                lineHeight: 1.2,
              }}>
                {cert.title}
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: cert.color,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {cert.issuer}
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-primary)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '4px 10px',
              borderRadius: 20,
              letterSpacing: '0.05em',
            }}>
              {cert.date}
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 14,
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: 24,
          }}>
            {cert.desc}
          </p>
        </div>

        <div>
          {cert.credentialId && (
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--text-muted)',
              marginBottom: 16,
              letterSpacing: '0.05em',
            }}>
              ID: {cert.credentialId}
            </p>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {cert.skills.map(s => (
              <span
                key={s}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  color: 'var(--text-secondary)',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '4px 8px',
                  borderRadius: 6,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="certifications"
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
          03.5 / Certifications
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
            Professional &amp; Academic <span style={{ color: '#F97316' }}>Credentials</span>
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
            Validation of specialized technical knowledge in software engineering, frontend architecture, and artificial intelligence models from recognized institutions.
          </motion.p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 24,
      }}>
        {CERTIFICATIONS.map((c, i) => (
          <CertCard key={c.id} cert={c} delay={0.2 + i * 0.12} />
        ))}
      </div>
    </section>
  )
}
