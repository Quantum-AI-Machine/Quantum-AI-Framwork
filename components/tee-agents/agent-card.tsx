'use client'

import { motion } from 'framer-motion'
import { Shield, AlertCircle } from 'lucide-react'

interface AgentCardProps {
  agent: {
    id: string
    name: string
    role: string
    status: string
    color: string
    textShadow: string
  }
}

export default function AgentCard({ agent }: AgentCardProps) {
  const isQuantumForge = agent.name === 'Quantum - Forge'

  return (
    <div
      id={`agent-${agent.id}`}
      className={`w-full p-6 rounded-lg border border-[#9e5f0d]/20 bg-[#0a0a0a]`}
    >
      <div className="flex flex-col gap-2">
        {/* Agent Name and Role */}
        <div>
          <h3 
            className={`text-xl font-bold mb-1 bg-gradient-to-r ${agent.color} bg-clip-text text-transparent ${
              isQuantumForge ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ textShadow: agent.textShadow }}
          >
            {agent.name}
          </h3>
          <p className={`text-sm ${isQuantumForge ? 'text-[#9e5f0d]/60' : 'text-[#9e5f0d]/40'}`}>
            {agent.role}
          </p>
          {/* Status Indicator */}
          <div className="flex items-center gap-2 mt-1">
            <span 
              className={`inline-block w-2 h-2 rounded-full ${
                isQuantumForge ? 'bg-green-500' : 'bg-red-500'
              }`} 
            />
            <span className={`
              text-xs uppercase tracking-wider font-medium
              ${isQuantumForge ? 'text-green-500' : 'text-red-500'}
            `}>
              {isQuantumForge ? 'ACTIVE' : 'Cybernetic Birth - TEE'}
            </span>
          </div>
        </div>
        
        {/* TEE Connection Status */}
        <div className={`
          flex items-center gap-2 mt-1 p-2 rounded-md
          ${isQuantumForge 
            ? 'bg-green-500/5 text-green-300/90' 
            : 'bg-red-500/5 text-red-300/80'
          }
        `}>
          {isQuantumForge ? (
            <>
              <Shield className="w-4 h-4" />
              <span className="text-xs tracking-wider">TEE RUNNING</span>
            </>
          ) : (
            <>
              <Shield className="w-4 h-4" />
              <span className="text-xs tracking-wider animate-pulse-slow">Cybernetic Birth - TEE</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

