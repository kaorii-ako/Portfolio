'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
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
    fontFamily: 'var(--font-display)',
    fontSize: 14,
    color: 'var(--text-primary)',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === field ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: 12,
    padding: '14px 16px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s, border 0.2s',
  })

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 80, width: '100%' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 60,
        alignItems: 'flex-start',
      }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Let&apos;s build<br />
            <span style={{ color: '#F97316' }}>something</span>
          </h3>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 16,
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: 32,
          }}>
            Open to collaborations, internships, interesting projects, or just a good conversation about tech, athletics, or music. Feel free to drop a message!
          </p>
          <motion.a
            href="https://github.com/kaorii-ako"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 600,
              color: '#0A0603',
              background: 'linear-gradient(135deg, #F97316, #FBBF24)',
              padding: '12px 28px',
              borderRadius: 24,
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            GitHub ↗
          </motion.a>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: 8,
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
              fontFamily: 'var(--font-display)',
              fontSize: 14,
              fontWeight: 600,
              color: '#0A0603',
              background: status === 'loading'
                ? 'rgba(249,115,22,0.5)'
                : 'linear-gradient(135deg, #F97316, #FBBF24)',
              border: 'none',
              borderRadius: 28,
              padding: '14px 36px',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              alignSelf: 'flex-start',
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message →'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                color: '#22C55E',
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
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                color: '#EF4444',
              }}
            >
              {errorMsg}
            </motion.p>
          )}
        </form>
      </div>
    </div>
  )
}
