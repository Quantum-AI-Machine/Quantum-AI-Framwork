import { EventEmitter } from "events"
import { QuantumAgent } from "./agent"
import type { AgentMessage } from "./types"

class QuantumAgentSystem extends EventEmitter {
  private agents: Map<string, QuantumAgent>
  private messageHistory: AgentMessage[]
  private maxHistory: number

  constructor() {
    super()
    this.agents = new Map()
    this.messageHistory = []
    this.maxHistory = 100
  }

  registerAgent(name: string, role: string, personality: string) {
    const agent = new QuantumAgent(name, role, personality)
    this.agents.set(name, agent)

    // All agents start deactivated now
    agent.setDeactivated()

    agent.on("message", async (message: AgentMessage) => {
      await this.handleAgentMessage(message)
    })
  }

  private async handleAgentMessage(message: AgentMessage) {
    this.messageHistory.push(message)
    if (this.messageHistory.length > this.maxHistory) {
      this.messageHistory.shift()
    }

    if (message.target && this.agents.has(message.target)) {
      const targetAgent = this.agents.get(message.target)
      await targetAgent?.emit("message", message)
    }

    this.emit("message", message)
  }

  getAgent(name: string): QuantumAgent | undefined {
    return this.agents.get(name)
  }

  // ... rest of the methods remain the same ...
}

// Initialize quantum agents with personalities
const QUANTUM_AGENTS = [
  {
    name: "CHRONO",
    role: "Timeline Specialist",
    personality:
      "Analytical and precise, with deep knowledge of temporal mechanics. Focuses on maintaining timeline integrity.",
    status: "deactivated", // Changed to deactivated
  },
  // ... other agents remain the same ...
]

export const agentSystem = new QuantumAgentSystem()

export const initializeAgents = () => {
  QUANTUM_AGENTS.forEach(({ name, role, personality }) => {
    agentSystem.registerAgent(name, role, personality)
  })
}

