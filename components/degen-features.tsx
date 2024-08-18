"use client"

import { motion } from "framer-motion"
import { Terminal, Shield, Cpu, Network } from "lucide-react"

const features = [
  {
    icon: Terminal,
    title: "Advanced Terminal Interface",
    description: "Powerful command-line interface with AI-powered responses and real-time processing",
  },
  {
    icon: Shield,
    title: "Secure TEE Integration",
    description: "Protected execution environment ensuring the highest level of security for your operations",
  },
  {
    icon: Cpu,
    title: "AI Agents",
    description: "Intelligent agents powered by advanced AI models for complex problem-solving",
  },
  {
    icon: Network,
    title: "Blockchain Integration",
    description: "Seamless integration with blockchain networks for decentralized operations",
  },
]

export function DegenFeatures() {
  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0B90B] mb-4">Next-Gen Terminal Features</h2>
          <p className="text-[#F0B90B]/60 max-w-2xl mx-auto">
            Experience the future of decentralized computing with our advanced features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-[#F0B90B]/20 bg-black/40 backdrop-blur-sm hover:bg-[#F0B90B]/5 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-[#F0B90B] mb-4" />
              <h3 className="text-xl font-bold text-[#F0B90B] mb-2">{feature.title}</h3>
              <p className="text-[#F0B90B]/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

