'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const LEARNING = [
  { title: 'Large Language Models', items: ['Prompt engineering', 'Fine-tuning workflows', 'RAG systems', 'MCP servers'] },
  { title: 'Edge Inference', items: ['Quantization', 'On-device AI', 'Latency optimization'] },
  { title: 'Full-Stack Development', items: ['Next.js App Router', 'Supabase', 'API design', 'TypeScript'] },
  { title: 'Motion & Animation', items: ['Framer Motion', 'Three.js / R3F', 'CSS animations', 'Spring physics'] },
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Academic() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [focused, setFocused] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    fontFamily: 'var(--font-display)', fontSize: 14,
    color: 'var(--text-primary)',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === field ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 12, padding: '14px 16px', outline: 'none', width: '100%',
    transition: 'border-color 0.2s',
  })

  return (
    <section
      id="academic"
      ref={ref}
      style={{
        position: 'relative', zIndex: 1,
        padding: '120px 24px 160px', maxWidth: 1100, margin: '0 auto',
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
          04 / Academic
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
        Education &amp; <span style={{ color: '#F97316' }}>Self-Study</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 24, marginBottom: 80,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20, padding: 36, overflow: 'hidden', position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, #F97316, transparent)',
          }} />
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', marginBottom: 16,
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
                color: 'var(--text-primary)', marginBottom: 6,
              }}>
                Amnuaysilpa School
              </h3>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: '#F97316', letterSpacing: '0.1em',
              }}>
                STEM Track · Thailand
              </p>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, color: '#22C55E',
              background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)',
              padding: '4px 10px', borderRadius: 20,
            }}>
              CURRENT
            </span>
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: 'var(--text-muted)', marginBottom: 20, letterSpacing: '0.05em',
          }}>
            2022 — Present
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
            {[
              'Mathematics, Physics, Computer Science core',
              'STEM project-based learning track',
              'Independent AI & software development research',
            ].map(item => (
              <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#F97316', fontSize: 10, marginTop: 3 }}>▸</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 14,
                  color: 'var(--text-secondary)', lineHeight: 1.5,
                }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20, padding: 36,
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
            color: 'var(--text-primary)', marginBottom: 24,
          }}>
            Self-Directed Learning
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
            {LEARNING.map(({ title, items }) => (
              <div key={title}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, color: '#F97316',
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 8,
                }}>
                  {title}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                  {items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)',
                      background: 'rgba(249,115,22,0.05)',
                      border: '1px solid rgba(249,115,22,0.1)',
                      padding: '4px 10px', borderRadius: 8,
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 60, alignItems: 'flex-start',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20,
              }}>
                Let&apos;s build<br />
                <span style={{ color: '#F97316' }}>something</span>
              </h3>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.8,
                color: 'var(--text-secondary)', marginBottom: 32,
              }}>
                Open to collaborations, internships, and interesting problems. Whether it&apos;s AI tooling,
                web apps, or just a good conversation about tech.
              </p>
              <motion.a
                href="https://github.com/kaorii-ako"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                  color: '#0A0603',
                  background: 'linear-gradient(135deg, #F97316, #FBBF24)',
                  padding: '12px 28px', borderRadius: 24,
                  textDecoration: 'none', display: 'inline-block',
                }}
              >
                GitHub ↗
              </motion.a>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}
            >
              <h4 style={{
                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
                color: 'var(--text-primary)', marginBottom: 8,
              }}>
                Send a message
              </h4>

              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                required
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                style={inputStyle('name')}
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                required
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                style={inputStyle('email')}
              />
              <textarea
                placeholder="Your message"
                value={form.message}
                required
                rows={4}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
              />

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={status !== 'loading' ? { scale: 1.02 } : undefined}
                whileTap={status !== 'loading' ? { scale: 0.98 } : undefined}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                  color: '#0A0603',
                  background: status === 'loading'
                    ? 'rgba(249,115,22,0.5)'
                    : 'linear-gradient(135deg, #F97316, #FBBF24)',
                  border: 'none', borderRadius: 28, padding: '14px 36px',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s', alignSelf: 'flex-start' as const,
                }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: 14, color: '#22C55E',
                  }}
                >
                  Message received! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: 14, color: '#EF4444',
                  }}
                >
                  {errorMsg}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-muted)', marginTop: 80,
        textAlign: 'center' as const, letterSpacing: '0.1em',
      }}>
        © 2025 Tawin Tangsukson — Built with Next.js, Framer Motion &amp; Three.js
      </p>
    </section>
  )
}
