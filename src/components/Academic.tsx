'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LEARNING = [
  { title: 'Large Language Models', items: ['Prompt engineering', 'Fine-tuning workflows', 'RAG systems', 'MCP servers'] },
  { title: 'Edge Inference', items: ['Quantization', 'On-device AI', 'Latency optimization'] },
  { title: 'Full-Stack Development', items: ['Next.js App Router', 'Supabase', 'API design', 'TypeScript'] },
  { title: 'Motion & Animation', items: ['Framer Motion', 'Three.js / R3F', 'CSS animations', 'Spring physics'] },
]

interface SubjectInfo {
  title: string
  subtitle: string
  color: string
  accent: string
  border: string
  description: string
  topics: string[]
  project?: { name: string; desc: string }
}

const SUBJECTS: SubjectInfo[] = [
  {
    title: 'Computer Science & AI',
    subtitle: 'Advanced Algorithms & Machine Learning',
    color: '#F97316',
    accent: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.25)',
    description: 'Deep focus on software engineering, algorithm complexity, full-stack structures, and AI model orchestration. Exploring large language models and model integration platforms.',
    topics: ['Algorithm Design & Complexity', 'Next.js & Frontend Architecture', 'Machine Learning Foundations', 'RAG & LLM Workflows', 'Model Context Protocol (MCP)'],
    project: {
      name: 'Shiori',
      desc: 'AI Study Companion syncing Google Classroom API with spaced-repetition engines.'
    }
  },
  {
    title: 'Mathematics & Physics',
    subtitle: 'Calculus, Kinematics & Mechanics',
    color: '#FBBF24',
    accent: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.2)',
    description: 'Analytical foundations of mathematics and physical science. Integrating calculus, vectors, and Newtonian physics into interactive engines and racing simulations.',
    topics: ['Differential & Integral Calculus', 'Vector Mathematics', 'Newtonian Mechanics & Kinematics', 'Rotational Dynamics', 'Aerodynamics & Force Calculations'],
    project: {
      name: 'Macchanu Physics',
      desc: 'Formulating racing kinetics and aerodynamic calculations for the STEM racing team site.'
    }
  },
  {
    title: 'Chemistry & Biology',
    subtitle: 'Organic Compounds & Cell Metabolism',
    color: '#94A3B8',
    accent: 'rgba(148,163,184,0.08)',
    border: 'rgba(148,163,184,0.15)',
    description: 'Bilingual track study of chemical reactions and biological systems. Modeling organic structures and exploring cellular pathways, bringing biochemistry to life with interactive render models.',
    topics: ['Organic Chemistry & Functional Groups', 'Reaction Mechanisms & Equilibrium', 'Cellular Respiration & Metabolism', 'Genetics & Molecular Biology', 'Biochemical Modeling'],
  },
  {
    title: 'Languages & Communication',
    subtitle: 'Bilingual Literacy & Analytical Writing',
    color: '#38BDF8',
    accent: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.15)',
    description: 'Bilingual track communication in English and Thai. Studying literary analysis, creative writing, and technical exposition to articulate complex engineering concepts clearly.',
    topics: ['iGCSE First Language English', 'Thai Language & Literature', 'Technical & Scientific Writing', 'Intercultural Presentation Skills'],
  }
]

export default function Academic() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="academic"
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
          03 / Academic
        </span>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 64 }}>
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
            Education &amp; <span style={{ color: '#F97316' }}>Subjects</span>
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
            Bilingual track student focusing on the intersection of STEM disciplines, computer science, and practical software engineering.
          </motion.p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 24,
        marginBottom: 80,
      }}>
        {/* Amnuaysilpa School Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: 36,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'linear-gradient(90deg, #F97316, transparent)',
          }} />
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 16,
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: 6,
                }}>
                  Amnuaysilpa School
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#F97316',
                  letterSpacing: '0.1em',
                }}>
                  Bilingual Track · Thailand
                </p>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: '#22C55E',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.2)',
                padding: '4px 10px',
                borderRadius: 20,
              }}>
                CURRENT
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-muted)',
              marginBottom: 20,
              letterSpacing: '0.05em',
            }}>
              2022 — Present
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {[
                'Bilingual Thai-UK Integrated Curriculum (iGCSE)',
                'Advanced STEM track & coding applications',
                'Average GPA (Thai System): 3.92',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#F97316', fontSize: 10, marginTop: 3 }}>▸</span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            background: 'rgba(249,115,22,0.06)',
            border: '1px solid rgba(249,115,22,0.15)',
            borderRadius: 12,
            padding: '16px 20px',
            textAlign: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
              AVERAGE GPA
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: '#F97316' }}>
              3.92 / 4.00
            </span>
          </div>
        </motion.div>

        {/* Self-Directed Learning */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            padding: 36,
          }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: 24,
          }}>
            Self-Directed Research
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {LEARNING.map(({ title, items }) => (
              <div key={title}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: '#F97316',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  {title}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--text-muted)',
                      background: 'rgba(249,115,22,0.05)',
                      border: '1px solid rgba(249,115,22,0.1)',
                      padding: '4px 10px',
                      borderRadius: 8,
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

      {/* Detailed Subject Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-muted)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 32,
        }}>
          Subject Highlights
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {SUBJECTS.map((subject, idx) => (
            <div
              key={subject.title}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                padding: '36px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: 3,
                background: subject.color,
              }} />

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
                marginBottom: 20,
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: 4,
                  }}>
                    {subject.title}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: subject.color,
                    letterSpacing: '0.08em',
                  }}>
                    {subject.subtitle}
                  </span>
                </div>
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 15,
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: 28,
                maxWidth: 800,
              }}>
                {subject.description}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 24,
              }}>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 12,
                  }}>
                    Core Syllabus
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {subject.topics.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 10,
                          color: 'var(--text-secondary)',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          padding: '4px 10px',
                          borderRadius: 8,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {subject.project && (
                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 12,
                    }}>
                      Applied Project Highlight
                    </h4>
                    <div style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: 12,
                      padding: 16,
                    }}>
                      <h5 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: subject.color,
                        marginBottom: 4,
                      }}>
                        {subject.project.name}
                      </h5>
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 12,
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                      }}>
                        {subject.project.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
