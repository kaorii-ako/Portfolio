import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Projects from '@/components/Projects'
import MotionBuild from '@/components/MotionBuild'
import Connect from '@/components/Connect'
import Academic from '@/components/Academic'
import CursorGlow from '@/components/CursorGlow'

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return (
    <>
      <Scene3D />
      <CursorGlow />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <MotionBuild />
        <Connect />
        <Academic />
      </main>
    </>
  )
}
