"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useTheme } from "next-themes";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={ref} scale={1.1}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        distort={0.32}
        speed={1.4}
        roughness={0.15}
        metalness={0.65}
        color="#a78bfa"
      />
    </mesh>
  );
}

export function HeroScene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const ambient = isDark ? 0.4 : 0.8;
  const point = isDark ? 1.1 : 0.6;

  return (
    // pointer-events-none keeps the canvas decorative and prevents
    // it from trapping touch scrolls on mobile.
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={ambient} />
      <pointLight position={[6, 6, 6]} intensity={point} color="#f0abfc" />
      <pointLight position={[-6, -4, 4]} intensity={point * 0.7} color="#60a5fa" />
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.7}>
        <Knot />
      </Float>
    </Canvas>
  );
}
