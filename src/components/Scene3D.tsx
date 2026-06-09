'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(9000)
    for (let i = 0; i < 9000; i += 3) {
      const r = 4 + Math.random() * 8
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      arr[i] = r * Math.sin(phi) * Math.cos(theta)
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        color="#F97316"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </Points>
  )
}

function FloatingTorusKnot() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.2
    ref.current.position.y = Math.sin(t * 0.5) * 0.3
  })
  return (
    <mesh ref={ref} position={[2, 0, -2]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#F97316"
        emissive="#7C3A10"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.15
    ref.current.rotation.z = t * 0.25
    ref.current.position.y = Math.sin(t * 0.4 + 1) * 0.4
  })
  return (
    <mesh ref={ref} position={[-2.5, 0.5, -1]}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial color="#FBBF24" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.rotation.x = Math.PI / 4 + t * 0.2
    ref.current.rotation.y = t * 0.08
    ref.current.position.x = Math.sin(t * 0.3) * 0.3
  })
  return (
    <mesh ref={ref} position={[0, -1.5, -3]}>
      <torusGeometry args={[1.5, 0.04, 16, 60]} />
      <meshStandardMaterial
        color="#F97316"
        emissive="#F97316"
        emissiveIntensity={0.6}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} color="#F97316" intensity={1} />
      <pointLight position={[-5, -3, -5]} color="#FBBF24" intensity={0.5} />
      <ParticleField />
      <FloatingTorusKnot />
      <FloatingIcosahedron />
      <FloatingRing />
    </Canvas>
  )
}
