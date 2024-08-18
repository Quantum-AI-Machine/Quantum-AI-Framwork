"use client"

import { motion } from "framer-motion"
import { Twitter } from "lucide-react"

export function TwitterLink() {
  return (
    <motion.a
      href="https://x.com/Degen_Ai"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-6 right-6 z-50 p-3 bg-black/40 backdrop-blur-sm rounded-full border border-[#F0B90B]/30 
             text-[#F0B90B] hover:text-[#F0B90B] hover:bg-black/60 transition-all duration-200
             shadow-lg hover:shadow-[#F0B90B]/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Twitter size={20} />
    </motion.a>
  )
}

