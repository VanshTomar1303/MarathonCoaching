"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import type { Group } from "three";

const SYMBOLS = ["E=mc²", "F=ma", "∫", "π", "√x", "λ", "Δ", "PV=nRT", "H₂O", "e=hν"];

function FormulaParticles() {
  const groupRef = useRef<Group>(null);

  const items = useMemo(
    () =>
      SYMBOLS.map((symbol, i) => ({
        symbol,
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 2,
        ] as [number, number, number],
        speed: 0.3 + Math.random() * 0.4,
        key: i,
      })),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item) => (
        <Float key={item.key} speed={item.speed} rotationIntensity={0.3} floatIntensity={1.2}>
          <Text
            position={item.position}
            fontSize={0.6}
            color="#f6c445"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.55}
          >
            {item.symbol}
          </Text>
        </Float>
      ))}
    </group>
  );
}

export function FloatingFormulaField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={1.2} />
      <FormulaParticles />
    </Canvas>
  );
}
