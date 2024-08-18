'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function GlitchEffect() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 mix-blend-overlay"
            animate={{
              backgroundColor: [
                'rgba(255, 0, 0, 0.5)',
                'rgba(0, 255, 255, 0.5)',
                'rgba(128, 0, 128, 0.5)',
                'rgba(255, 255, 255, 0.5)',
                'rgba(0, 0, 0, 0)'
              ]
            }}
            transition={{
              duration: 2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              clipPath: [
                'inset(0 0 0 0)',
                'inset(10% 20% 30% 40%)',
                'inset(40% 0 50% 0)',
                'inset(0 0 0 0)'
              ]
            }}
            transition={{
              duration: 2,
              times: [0, 0.25, 0.5, 1],
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

