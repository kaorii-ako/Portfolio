"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#7c6cff";
const ACCENT_2 = "#5eead4";

function WireframeCore() {
  const group = useRef<THREE.Group>(null);
  const [dragging, setDragging] = useState(false);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!dragging) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
    }
  });

  return (
    <group
      ref={group}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
      onPointerOut={() => setDragging(false)}
    >
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#0e0e11" transparent opacity={0.35} />
        <Edges scale={1} threshold={1} color={ACCENT} />
      </mesh>
      <mesh rotation={[0.4, 0.6, 0]}>
        <icosahedronGeometry args={[1.02, 0]} />
        <meshBasicMaterial color="#0e0e11" transparent opacity={0} />
        <Edges scale={1} threshold={1} color={ACCENT_2} />
      </mesh>
    </group>
  );
}

function Drift() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 90;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={ACCENT_2}
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      style={{ touchAction: "none" }}
    >
      <ambientLight intensity={0.6} />
      <WireframeCore />
      <Drift />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </Canvas>
  );
}
