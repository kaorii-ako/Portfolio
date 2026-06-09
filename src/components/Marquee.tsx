'use client'

const ROW1 = [
  'TypeScript', 'React', 'Next.js', 'Three.js', 'Framer Motion',
  'Python', 'Gemini AI', 'Claude API', 'Supabase', 'MCP Servers',
  'Node.js', 'RAG Systems', 'LLM Fine-tuning', 'Edge AI', 'Game Testing',
]

const ROW2 = [
  'JavaScript', 'React Three Fiber', 'Vite', 'Tailwind CSS', 'Open Source',
  'Spring Physics', 'WebGL', 'API Design', 'AI Builder', 'STEM Racing',
  'Health Tech', 'Study Tools', 'QA Testing', 'LLMs', 'Shader Programming',
]

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
      <div
        className={reverse ? 'marquee-right' : 'marquee-left'}
        style={{ display: 'flex', gap: 0, width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: i % 3 === 0 ? 'rgba(249,115,22,0.7)' : 'rgba(255,255,255,0.25)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0 28px',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ marginLeft: 28, color: 'rgba(249,115,22,0.25)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '40px 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        background: 'rgba(7,5,3,0.3)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <MarqueeRow items={ROW1} />
      <MarqueeRow items={ROW2} reverse />
    </div>
  )
}
