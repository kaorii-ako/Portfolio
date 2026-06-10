'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Projects from '@/components/Projects'
import MotionBuild from '@/components/MotionBuild'
import Connect from '@/components/Connect'
import Academic from '@/components/Academic'
import Sports from '@/components/Sports'
import Music from '@/components/Music'
import Certifications from '@/components/Certifications'
import ContactForm from '@/components/ContactForm'
import CursorGlow from '@/components/CursorGlow'

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => null,
})

const TABS = [
  { id: 'about', label: 'About & Connect' },
  { id: 'academic', label: 'Academic Subjects & iGCSE' },
  { id: 'projects', label: 'Projects & Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'sports', label: 'Sports & Athletics' },
  { id: 'music', label: 'Music & Performance' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (['about', 'academic', 'projects', 'sports', 'music', 'certifications'].includes(hash)) {
        setActiveTab(hash)
      } else {
        setActiveTab('about')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleTabClick = (tabId: string) => {
    window.location.hash = tabId
    setActiveTab(tabId)
    const element = document.getElementById('portfolio-content')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Scene3D />
      <CursorGlow />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Marquee />

        {/* Tab Selection Section */}
        <section
          id="portfolio-content"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '80px 24px 0',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            flexWrap: 'wrap',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: 30,
            padding: '6px 8px',
            maxWidth: 'fit-content',
            margin: '0 auto 60px',
            backdropFilter: 'blur(10px)',
          }}>
            {TABS.map(tab => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: isActive ? '#F97316' : '#9B8B76',
                    background: isActive ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                    border: 'none',
                    outline: 'none',
                    padding: '8px 18px',
                    borderRadius: 20,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '1px solid rgba(249, 115, 22, 0.25)',
                        borderRadius: 20,
                        pointerEvents: 'none',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content Section */}
          <div style={{ minHeight: '60vh' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {activeTab === 'about' && (
                  <>
                    <About />
                    <Connect />
                    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 120px' }}>
                      <ContactForm />
                    </div>
                  </>
                )}
                {activeTab === 'academic' && <Academic />}
                {activeTab === 'projects' && (
                  <>
                    <Projects />
                    <MotionBuild />
                  </>
                )}
                {activeTab === 'certifications' && <Certifications />}
                {activeTab === 'sports' && <Sports />}
                {activeTab === 'music' && <Music />}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  )
}
