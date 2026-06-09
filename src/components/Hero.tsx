'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: [0.25, 0.1, 0.25, 1], duration: 0.8 } },
}

const TAGS = ['Student Developer', 'AI Builder', 'Game Tester @ Motion.build']

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', zIndex: 1,
      }}
    >
      <div style={{
        position: 'absolute', top: '10%', left: '60%', width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%', width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: 900 }}
      >
        <motion.div variants={item} style={{ marginBottom: 32 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.3em',
            color: '#F97316', textTransform: 'uppercase' as const,
            background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)',
            padding: '6px 16px', borderRadius: 20,
          }}>
            Portfolio · 2025
          </span>
        </motion.div>

        <motion.div variants={item}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(72px, 14vw, 180px)',
            fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.9,
            background: 'linear-gradient(135deg, #F5EFE6 0%, #F97316 50%, #FBBF24 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 60px rgba(249,115,22,0.3))',
            marginBottom: 8,
          }}>
            KAO
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(13px, 1.5vw, 16px)',
            color: 'var(--text-secondary)', letterSpacing: '0.15em', marginBottom: 40,
          }}>
            TAWIN TANGSUKSON
          </p>
        </motion.div>

        <motion.div
          variants={item}
          style={{
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap' as const, marginBottom: 56,
          }}
        >
          {TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15, type: 'spring', stiffness: 200 }}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500,
                padding: '8px 20px', borderRadius: 24,
                color: i === 2 ? '#F97316' : 'var(--text-secondary)',
                background: i === 2 ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.04)',
                border: i === 2
                  ? '1px solid rgba(249,115,22,0.3)'
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' as const }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(249,115,22,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
              color: '#0A0603',
              background: 'linear-gradient(135deg, #F97316, #FBBF24)',
              padding: '14px 36px', borderRadius: 28, textDecoration: 'none',
              letterSpacing: '0.04em', display: 'inline-block',
            }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/kaorii-ako"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
              color: 'var(--text-primary)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              padding: '14px 36px', borderRadius: 28, textDecoration: 'none',
              letterSpacing: '0.04em', display: 'inline-block',
            }}
          >
            GitHub ↗
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 8,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10,
          color: 'var(--text-muted)', letterSpacing: '0.2em',
        }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, #F97316, transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
