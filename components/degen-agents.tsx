"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"
import Link from "next/link"

const agents = [
  {
    name: "CHRONO",
    role: "Timeline Specialist",
    status: "Deactivated",
    color: "from-[#F0B90B] to-[#FCD535]",
  },
  {
    name: "PARADOX",
    role: "Paradox Expert",
    status: "Deactivated",
    color: "from-[#F0B90B] to-[#FCD535]",
  },
  {
    name: "NEXUS",
    role: "Reality Guide",
    status: "Deactivated",
    color: "from-[#F0B90B] to-[#FCD535]",
  },
  {
    name: "CIPHER",
    role: "Blockchain Architect",
    status: "Deactivated",
    color: "from-[#F0B90B] to-[#FCD535]",
  },
]

export function DegenAgents() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0B90B] mb-4">AI Agents</h2>
          <p className="text-[#F0B90B]/60 max-w-2xl mx-auto">Powered by advanced AI models and secure TEE technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg border border-[#F0B90B]/20 bg-black/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.color}`} />
                <div>
                  <h3 className="text-xl font-bold text-[#F0B90B]">{agent.name}</h3>
                  <p className="text-sm text-[#F0B90B]/60">{agent.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <Shield className="w-4 h-4" />
                <span className="text-sm">{agent.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/tee-agents"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#F0B90B] text-black hover:bg-[#F0B90B]/90 transition-colors font-semibold"
          >
            View Agent Network
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

