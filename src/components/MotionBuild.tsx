'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BULLETS = [
  'Evaluate motion design quality and animation principles',
  'Test interaction feel, timing, and easing accuracy',
  'Provide detailed QA feedback on Framer-based animations',
  'Assess user experience in motion-heavy interfaces',
  'Document animation bugs and visual inconsistencies',
]

const RINGS = [
  { r: 100, dur: 6, dir: 1, border: 'rgba(249,115,22,0.3)', dot: '#F97316' },
  { r: 140, dur: 9, dir: -1, border: 'rgba(249,115,22,0.2)', dot: '#FBBF24' },
  { r: 180, dur: 14, dir: 1, border: 'rgba(249,115,22,0.12)', dot: 'rgba(249,115,22,0.6)' },
]

function OrbitVisual() {
  return (
    <div style={{ width: 380, height: 380, position: 'relative', flexShrink: 0 }}>
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 80, height: 80, borderRadius: '50%',
          background: 'radial-gradient(circle, #F97316 0%, rgba(249,115,22,0.4) 60%, transparent 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 40px rgba(249,115,22,0.5)',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700,
          color: '#0A0603', letterSpacing: '0.1em',
        }}>
          MB
        </span>
      </motion.div>

      {RINGS.map((ring, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 * ring.dir }}
          transition={{ repeat: Infinity, duration: ring.dur, ease: 'linear' }}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            width: ring.r * 2, height: ring.r * 2,
            marginTop: -ring.r, marginLeft: -ring.r,
            borderRadius: '50%', border: `1px solid ${ring.border}`,
          }}
        >
          <div style={{
            position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)',
            width: 8, height: 8, borderRadius: '50%', background: ring.dot,
            boxShadow: `0 0 8px ${ring.dot}`,
          }} />
        </motion.div>
      ))}
    </div>
  )
}

export default function MotionBuild() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="motion"
      ref={ref}
      style={{ position: 'relative', zIndex: 1, padding: '120px 24px', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
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
            03 / Experience
          </span>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 80, alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700, letterSpacing: '-0.03em',
              }}>
                Motion.build
              </h2>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em',
                color: '#22C55E', background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
                padding: '4px 10px', borderRadius: 20, textTransform: 'uppercase' as const,
              }}>
                ACTIVE
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, color: '#F97316',
              letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: 24,
            }}>
              Game Tester
            </p>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.8,
              color: 'var(--text-secondary)', marginBottom: 32,
            }}>
              Contributing to the quality and feel of motion-driven products. My work focuses on how
              animations communicate intent, timing accuracy, and the subtle craft that separates good
              motion from great motion.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
              {BULLETS.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
                >
                  <span style={{ color: '#F97316', marginTop: 2, fontSize: 12 }}>▸</span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: 15,
                    color: 'var(--text-secondary)', lineHeight: 1.5,
                  }}>
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <OrbitVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
