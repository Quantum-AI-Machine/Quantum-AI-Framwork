"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function QuantumVisualization() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 500

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
      // Binance yellow color with slight variations
      temp[i] = 0.94 // R (240/255)
      temp[i + 1] = 0.73 // G (185/255)
      temp[i + 2] = 0.04 // B (11/255)
    }
    return temp
  }, [])

  useFrame((state, delta) => {
    if (!particlesRef.current) return
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * delta * 0.2
      positions[i] += Math.cos(state.clock.elapsedTime + i) * delta * 0.2
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.rotation.y += delta * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particles} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

