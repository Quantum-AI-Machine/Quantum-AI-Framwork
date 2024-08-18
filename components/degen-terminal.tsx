"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TerminalInterface } from "./terminal-interface"
import { CommandProcessor } from "./command-processor"

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

export function DegenTerminal() {
  const [output, setOutput] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
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

  return (
    <section id="terminal" className="py-24 bg-black/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#9e5f0d] mb-4">Interactive Terminal</h2>
          <p className="text-[#9e5f0d]/60 max-w-2xl mx-auto">
            Experience the power of our AI-powered terminal interface
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="h-[600px] bg-black/80 backdrop-blur-lg rounded-lg border-2 border-[#9e5f0d]/30 overflow-hidden"
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
                const response = await CommandProcessor(command, () => {})
                setOutput((prev) => [...prev, `>> ${command}`, response])
                setIsProcessing(false)
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

