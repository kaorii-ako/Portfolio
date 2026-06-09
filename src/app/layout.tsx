import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kao — Tawin Tangsukson',
  description: 'Student developer from Thailand. AI builder, open-source contributor, Game Tester at Motion.build.',
  keywords: ['portfolio', 'developer', 'AI', 'Thailand', 'React', 'Next.js', 'Framer Motion'],
  authors: [{ name: 'Tawin Tangsukson', url: 'https://github.com/kaorii-ako' }],
  openGraph: {
    title: 'Kao — Tawin Tangsukson',
    description: 'Student Developer · AI Builder · Game Tester @ Motion.build',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kao — Tawin Tangsukson',
    description: 'Student Developer · AI Builder · Game Tester @ Motion.build',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
