'use client'

import { motion } from 'framer-motion'

interface TeeAgentSelectorProps {
  agent: {
    id: string
    name: string
    role: string
    description: string
    color: string
    textShadow: string
  }
  isSelected: boolean
  onSelect: () => void
}

export function TeeAgentSelector({ agent, isSelected, onSelect }: TeeAgentSelectorProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`w-full p-6 rounded-lg border-2 transition-all text-left
        ${isSelected 
          ? 'bg-[#9e5f0d]/20 border-[#9e5f0d]' 
          : 'bg-black/40 border-[#9e5f0d]/30 hover:bg-[#9e5f0d]/10'
        }`}
    >
      <h3 
        className={`text-xl font-bold mb-2 bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}
        style={{ textShadow: agent.textShadow }}
      >
        {agent.name}
      </h3>
      <p className="text-sm text-[#9e5f0d]/80 font-bold mb-2">{agent.role}</p>
      <p className="text-sm text-[#9e5f0d]/60">{agent.description}</p>
    </motion.button>
  )
}

