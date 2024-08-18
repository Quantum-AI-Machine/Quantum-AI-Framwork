"use client"

import { motion } from "framer-motion"
import { Twitter, DiscIcon as Discord } from "lucide-react"

export function DegenFooter() {
  return (
    <footer className="py-12 bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#F0B90B] mb-2">Degen Terminal</h3>
            <p className="text-[#F0B90B]/60">Next-gen decentralized computing</p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://x.com/Degen_AiAgent"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-[#F0B90B] hover:bg-[#F0B90B]/10 rounded-lg transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://discord.gg/NZqtH6sY"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-[#F0B90B] hover:bg-[#F0B90B]/10 rounded-lg transition-colors"
            >
              <Discord className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#F0B90B]/20 text-center text-[#F0B90B]/40">
          <p>&copy; {new Date().getFullYear()} Degen Terminal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

