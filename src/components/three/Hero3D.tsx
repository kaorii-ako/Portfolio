"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.12;
  });
  return (
    <mesh ref={mesh} rotation={[0.35, 0, 0]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial color="#000000" />
      <Edges threshold={1} color="#6e6e73" />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 5], fov: 42 }}>
      <Core />
    </Canvas>
  );
}
