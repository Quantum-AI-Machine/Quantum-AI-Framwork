"use client"

import { motion } from "framer-motion"

export function LoadingState() {
  return (
    <motion.div
      className="flex items-center space-x-2 text-[#F0B90B]"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
    >
      <motion.div
        className="w-2 h-2 bg-current rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-current rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 bg-current rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
      />
    </motion.div>
  )
}

