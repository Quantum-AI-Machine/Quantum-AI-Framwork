"use client"

import { motion } from "framer-motion"

interface AgentButtonProps {
  name: string
  role: string
  onClick: () => void
}

export function AgentButton({ name, role, onClick }: AgentButtonProps) {
  const isDeactivated = ["CHRONO", "PARADOX", "NEXUS", "CIPHER"].includes(name)

  return (
    <motion.button
      whileHover={{ scale: isDeactivated ? 1 : 1.02 }}
      whileTap={{ scale: isDeactivated ? 1 : 0.98 }}
      onClick={isDeactivated ? undefined : onClick}
      className={`w-full p-4 bg-[#0A1A2F]/40 backdrop-blur-sm border border-[#F0B90B]/30 rounded-lg 
      text-[#F0B90B] transition-all duration-200
      flex flex-col items-center gap-2 group
      ${isDeactivated ? "opacity-50 cursor-not-allowed" : "hover:bg-[#F0B90B]/10"}`}
    >
      <span className="text-lg font-bold tracking-wide group-hover:text-[#F0B90B]">{name}</span>
      <span className="text-sm opacity-80 group-hover:opacity-100">{role}</span>
      <span className="text-xs text-red-400">Currently Deactivated</span>
    </motion.button>
  )
}

