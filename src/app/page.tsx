import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import MotionBuild from '@/components/MotionBuild'
import Academic from '@/components/Academic'

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  return (
    <>
      <Scene3D />
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <MotionBuild />
        <Academic />
      </main>
    </>
  )
}
