'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { QuantumVisualization } from '../../components/quantum-visualization'
import { Header } from '../../components/header'
import { TeeChatWindow } from '../../components/tee/chat-window'
import { TeeAgentCard } from '../../components/tee/agent-card'
import Link from 'next/link'

const QUANTUM_AGENTS = [
  {
    name: 'CHRONOS',
    role: 'Timeline Specialist',
    description: 'Expert in temporal mechanics and timeline manipulation',
    color: 'from-[#FF6B6B] to-[#FF8E8E]',
    textShadow: '0 2px 4px rgba(255, 107, 107, 0.5)',
  },
  {
    name: 'PARADOX',
    role: 'Paradox Expert',
    description: 'Analyzer of quantum paradoxes and temporal anomalies',
    color: 'from-[#4834D4] to-[#686DE0]',
    textShadow: '0 2px 4px rgba(72, 52, 212, 0.5)',
  },
  {
    name: 'NEXUS',
    role: 'Reality Guide',
    description: 'Navigator of parallel universes and quantum realities',
    color: 'from-[#6C5CE7] to-[#A8A4E6]',
    textShadow: '0 2px 4px rgba(108, 92, 231, 0.5)',
  },
  {
    name: 'CIPHER',
    role: 'Blockchain Architect',
    description: 'Guardian of quantum-safe blockchain security',
    color: 'from-[#F9A826] to-[#FFBE76]',
    textShadow: '0 2px 4px rgba(249, 168, 38, 0.5)',
  },
]

export default function TeePage() {
  const [selectedAgent, setSelectedAgent] = useState<typeof QUANTUM_AGENTS[0] | null>(null)

  return (
    <div className="min-h-screen w-full bg-black text-[#9e5f0d] font-mono relative overflow-hidden flex flex-col">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80" />
        <Canvas>
          <Environment preset="night" />
          <QuantumVisualization />
        </Canvas>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto max-w-7xl px-4 py-12 flex-1">
        {/* Back to Terminal Link */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-[#9e5f0d] hover:text-[#9e5f0d]/80 mb-8 transition-colors"
        >
          <span>←</span>
          <span>Return to Terminal</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agent Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8">Quantum TEE Agents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUANTUM_AGENTS.map((agent) => (
                <TeeAgentCard
                  key={agent.name}
                  agent={agent}
                  isSelected={selectedAgent?.name === agent.name}
                  onClick={() => setSelectedAgent(agent)}
                />
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              {selectedAgent ? (
                <TeeChatWindow
                  key={selectedAgent.name}
                  agent={selectedAgent}
                  onClose={() => setSelectedAgent(null)}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full min-h-[600px] rounded-lg border-2 border-[#9e5f0d]/30 bg-black/60 backdrop-blur-sm p-8 flex items-center justify-center text-center"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-4">Select an Agent</h3>
                    <p className="text-[#9e5f0d]/60">
                      Choose a Quantum Agent to begin secure TEE communication
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  )
}

