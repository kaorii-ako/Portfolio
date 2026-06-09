'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SkillBarProps { label: string; level: number; delay: number }

function SkillBar({ label, level, delay }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 12,
          color: 'var(--text-secondary)', letterSpacing: '0.05em',
        }}>
          {label}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#F97316' }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: 2, background: 'rgba(255,255,255,0.06)',
        borderRadius: 2, overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #F97316, #FBBF24)',
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  )
}

const SKILLS: [string, number, number][] = [
  ['JavaScript / TypeScript', 88, 0],
  ['React / Next.js', 82, 0.1],
  ['AI & Machine Learning', 78, 0.2],
  ['Python', 75, 0.3],
  ['Node.js / Backend', 70, 0.4],
  ['Game Testing / QA', 85, 0.5],
]

const TECH = [
  'TypeScript', 'React', 'Node.js', 'Python', 'Gemini AI',
  'Claude API', 'Supabase', 'Three.js', 'Framer Motion', 'Vite',
]

const STATS: [string, string][] = [
  ['3+', 'Open Source\nProjects'],
  ['43★', 'Stars on\nGitHub'],
  ['TH', 'Based in\nThailand'],
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
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
        style={{ marginBottom: 64 }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.3em', color: '#F97316', textTransform: 'uppercase' as const,
        }}>
          01 / About
        </span>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: 80, alignItems: 'start',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4vw, 52px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 28,
          }}>
            Building things<br />
            <span style={{ color: '#F97316' }}>that matter</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.8,
            color: 'var(--text-secondary)', marginBottom: 24,
          }}>
            I&apos;m Tawin — a student developer from Thailand focused on AI-powered tools and real-world
            applications. I believe software should solve genuine problems, not just demonstrate technical skill.
          </p>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.8,
            color: 'var(--text-secondary)', marginBottom: 32,
          }}>
            Currently exploring LLMs, edge inference, and building open-source tools. Also testing motion
            design experiences at Motion.build.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
            {TECH.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.06, type: 'spring', stiffness: 200 }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--text-secondary)',
                  background: 'rgba(249,115,22,0.06)',
                  border: '1px solid rgba(249,115,22,0.12)',
                  padding: '5px 12px', borderRadius: 12, letterSpacing: '0.04em',
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)',
            letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: 32,
          }}>
            Proficiency
          </p>
          {SKILLS.map(([l, v, d]) => (
            <SkillBar key={l} label={l} level={v} delay={d + 0.4} />
          ))}

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 48,
            background: 'rgba(249,115,22,0.06)',
            border: '1px solid rgba(249,115,22,0.12)',
            borderRadius: 16, overflow: 'hidden',
          }}>
            {STATS.map(([val, lbl]) => (
              <div
                key={val}
                style={{
                  padding: '24px 16px', textAlign: 'center' as const,
                  borderRight: '1px solid rgba(249,115,22,0.08)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 28,
                  fontWeight: 700, color: '#F97316', marginBottom: 4,
                }}>
                  {val}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--text-muted)', lineHeight: 1.5,
                  letterSpacing: '0.05em', whiteSpace: 'pre-line' as const,
                }}>
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
