"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function DegenVisualization() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 200

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  const colors = useMemo(() => {
    const temp = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      temp[i] = Math.random()
      temp[i + 1] = Math.random()
      temp[i + 2] = Math.random()
    }
    return temp
  }, [])

  useFrame((state, delta) => {
    const positions = particlesRef.current.geometry.attributes.position.array
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i + 1] += delta * 0.1
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particles} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors sizeAttenuation />
    </points>
  )
}

