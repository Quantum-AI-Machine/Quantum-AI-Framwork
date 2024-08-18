"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { DegenVisualization } from "./components/degen-visualization"
import { TerminalInterface } from "./components/terminal-interface"
import { CommandProcessor } from "./components/command-processor"
import { motion, AnimatePresence } from "framer-motion"
import { AgentChat } from "./components/agent-chat"
import { AgentButton } from "./components/agent-button"
import { Header } from "./components/header"
import { initializeAgents } from "./lib/agent-system"
import Link from "next/link"
import { Shield } from "lucide-react"

const INITIALIZATION_SEQUENCE = [
  "DEGEN TERMINAL ACCESS v2.0",
  "CONNECTING TO SECURE SERVER...",
  ".............................",
  "Core system :",
  "> Engine Started....................",
  "Activating",
  "> Enable Database",
  "> Enable Degen Security Protocol",
  "Successfully Activated..................",
  "Enabled.............",
  "Network :",
  "Degen Terminal Connected",
  "Sync Activated",
  "Project Activated : Degen Terminal by Degen Engine",
  "DEGEN ENTANGLEMENT ESTABLISHED",
  "",
  "Type /start for available commands.",
]

const DEGEN_AGENTS = {
  CHRONO: "Timeline Specialist (Active)",
  PARADOX: "Paradox Expert (Deactivated)",
  NEXUS: "Reality Guide (Deactivated)",
  CIPHER: "Blockchain Architect (Deactivated)",
}

const DEACTIVATED_AGENTS = ["PARADOX", "NEXUS", "CIPHER"]

export default function DegenChronoTerminal() {
  const [output, setOutput] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentAgent, setCurrentAgent] = useState<{ name: string; role: string } | null>(null)
  const [initIndex, setInitIndex] = useState(0)

  useEffect(() => {
    if (initIndex < INITIALIZATION_SEQUENCE.length) {
      const timer = setTimeout(() => {
        setOutput((prev) => [...prev, INITIALIZATION_SEQUENCE[initIndex]])
        setInitIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [initIndex])

  useEffect(() => {
    initializeAgents()
  }, [])

  const handleAgentCommand = (agentName: string, role: string) => {
    setCurrentAgent({ name: agentName, role })
  }

  return (
    <div className="min-h-screen w-full bg-black text-[#9e5f0d] font-mono relative overflow-hidden flex flex-col">
      {/* Blur Effect Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80" />
        <Canvas>
          <Environment preset="night" />
          <DegenVisualization />
        </Canvas>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-6 flex-1 flex flex-col gap-6">
        {/* Centered TEE Agents Interface Button */}
        <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-2xl mx-auto">
            <Link
              href="/tee-agents"
              className="quantum-button group relative flex items-center justify-center w-full px-8 py-6 bg-[#9e5f0d]/10 border border-[#9e5f0d]/30 rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Quantum particle effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9e5f0d]/0 via-[#9e5f0d]/5 to-[#9e5f0d]/0" />
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#9e5f0d] rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `quantum-particle ${2 + Math.random() * 2}s linear infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9e5f0d]/20 to-transparent animate-glow-slide" />
              </div>

              {/* Pulsing border glow */}
              <div className="absolute inset-0 rounded-lg border border-[#9e5f0d]/50 animate-border-pulse" />

              {/* Inner glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[#9e5f0d] blur-2xl" />
              </div>

              {/* Content container */}
              <div className="relative flex flex-col items-center space-y-4 z-10">
                {/* Icon with glow */}
                <div className="relative">
                  <Shield className="w-12 h-12 text-[#9e5f0d] animate-pulse-slow" />
                  <div className="absolute inset-0 bg-[#9e5f0d] blur-xl opacity-30 animate-pulse" />
                </div>

                {/* Text content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold tracking-wider animate-text-glow mb-2">
                    Access Degen TEE Agents Interface
                  </h3>
                  <p className="text-[#9e5f0d]/70 text-sm">
                    Secure Trusted Execution Environment for Agent Interaction
                  </p>
                </div>

                {/* Quantum status indicators */}
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                    TEE Active
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
                    Degen Link Stable
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Agent Buttons Frame */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full px-4 sm:px-6 md:px-8"
        >
          <div className="border-2 border-[#9e5f0d]/30 rounded-lg backdrop-blur-sm bg-black/60 overflow-hidden">
            {/* Header */}
            <div className="border-b border-[#9e5f0d]/30 bg-[#9e5f0d]/5 p-4">
              <h2 className="text-lg sm:text-xl font-bold text-center tracking-wider">DEGEN AI AGENTS</h2>
            </div>
            {/* Agents Grid */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {Object.entries(DEGEN_AGENTS).map(([name, role]) => (
                  <AgentButton key={name} name={name} role={role} onClick={() => handleAgentCommand(name, role)} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 min-h-[60vh] px-4 sm:px-6 md:px-8"
        >
          <div
            className="h-full bg-black/60 backdrop-blur-lg rounded-lg border-2 border-[#9e5f0d]/30 overflow-hidden"
            style={{
              boxShadow: `
                0 0 20px rgba(158, 95, 13, 0.1),
                inset 0 0 20px rgba(158, 95, 13, 0.1)
              `,
            }}
          >
            <TerminalInterface
              output={output}
              isProcessing={isProcessing}
              onCommand={async (command) => {
                setIsProcessing(true)
                const response = await CommandProcessor(command, handleAgentCommand)
                setOutput((prev) => [...prev, `>> ${command}`, response])
                setIsProcessing(false)
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Agent Chat Window */}
      <AnimatePresence>
        {currentAgent && (
          <AgentChat agent={currentAgent.name} role={currentAgent.role} onClose={() => setCurrentAgent(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

