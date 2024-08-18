"use client"

import { motion } from "framer-motion"
import { Twitter } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="relative z-20 w-full border-b-2 border-[#F0B90B]/30 bg-[#0A1A2F]/60 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://x.com/Degen_AiAgent"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#F0B90B] hover:bg-[#F0B90B]/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={20} />
            </motion.a>
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold tracking-wider text-center text-[#F0B90B]">
            Quantum Terminal - Advanced AI System
          </h1>

          {/* Whitepaper Link */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/whitepaper"
              className="text-[#F0B90B] hover:bg-[#F0B90B]/10 px-4 py-2 rounded-lg transition-colors"
            >
              Whitepaper
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  )
}

