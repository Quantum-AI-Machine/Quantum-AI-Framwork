"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { DegenVisualization } from "./degen-visualization"
import { ChevronDown } from "lucide-react"

export function DegenHero() {
  const scrollToTerminal = () => {
    const terminal = document.getElementById("terminal")
    terminal?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80" />
        <Canvas>
          <Environment preset="night" />
          <DegenVisualization />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#F0B90B] to-[#FCD535] bg-clip-text text-transparent">
            Degen Terminal
          </h1>
          <p className="text-xl md:text-2xl text-[#F0B90B]/80 max-w-2xl mx-auto">
            Advanced AI-powered terminal interface for the next generation of decentralized applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToTerminal}
              className="bg-[#F0B90B] hover:bg-[#F0B90B]/90 text-black px-8 py-6 text-lg"
            >
              Launch Terminal
            </Button>
            <Button
              variant="outline"
              className="border-[#F0B90B] text-[#F0B90B] hover:bg-[#F0B90B]/10 px-8 py-6 text-lg"
              onClick={() => window.open("https://github.com/yourusername/degen-terminal", "_blank")}
            >
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="cursor-pointer"
          onClick={scrollToTerminal}
        >
          <ChevronDown className="w-8 h-8 text-[#F0B90B]" />
        </motion.div>
      </motion.div>
    </div>
  )
}

