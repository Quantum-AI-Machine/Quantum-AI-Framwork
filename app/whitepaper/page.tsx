"use client"

import type React from "react"
import {
  Clock,
  Shield,
  Network,
  Cpu,
  Lock,
  GitBranch,
  Workflow,
  Boxes,
  Coins,
  BarChartIcon as ChartBar,
  Megaphone,
  Wallet,
} from "lucide-react"
import Link from "next/link"

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-8 h-8 rounded-full bg-[#9e5f0d]/10 flex items-center justify-center">{children}</div>
)

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#9e5f0d]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Degen Terminal Whitepaper</h1>
          <p className="text-xl text-[#F0B90B]/80">Forging the Future of Quantum Agent Networks</p>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-[#F0B90B]/80 leading-relaxed">
            The Degen Terminal represents a revolutionary advancement in quantum agent networks, powered by the Degen
            system. Our platform integrates secure TEE (Trusted Execution Environment) technology inspired by Eliza-TEE
            and AI16Z architectures, enabling unprecedented agent interaction and quantum state manipulation.
          </p>
        </section>

        {/* Quantum-Forge Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Degen Architecture</h2>
          <div className="grid gap-6">
            <div className="border border-[#9e5f0d]/30 rounded-lg p-6 bg-[#9e5f0d]/5">
              <div className="flex items-center gap-4 mb-4">
                <IconWrapper>
                  <Workflow className="w-5 h-5" />
                </IconWrapper>
                <h3 className="text-xl font-bold">Master Node: Degen</h3>
              </div>
              <p className="text-[#9e5f0d]/80">
                Central orchestrator of the quantum agent network, responsible for agent activation, synchronization,
                and quantum state management. Implements advanced TEE protocols for secure agent interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Agent Cards */}
              <div className="border border-[#9e5f0d]/30 rounded-lg p-4">
                <h5 className="font-bold mb-2 flex items-center gap-2">
                  <IconWrapper>
                    <Clock className="w-5 h-5" />
                  </IconWrapper>
                  CHRONO - Sentinel Class
                </h5>
                <p>Timeline Specialist - First agent to be activated</p>
                <p className="text-sm text-[#9e5f0d]/70 mt-2">
                  Specializes in temporal mechanics and quantum timeline manipulation
                </p>
              </div>

              <div className="border border-[#9e5f0d]/30 rounded-lg p-4">
                <h5 className="font-bold mb-2 flex items-center gap-2">
                  <IconWrapper>
                    <GitBranch className="w-5 h-5" />
                  </IconWrapper>
                  PARADOX - Catalyst Class
                </h5>
                <p>Paradox Expert - Advanced quantum computing integration</p>
                <p className="text-sm text-[#9e5f0d]/70 mt-2">
                  Resolves temporal paradoxes and maintains quantum state coherence
                </p>
              </div>

              <div className="border border-[#9e5f0d]/30 rounded-lg p-4">
                <h5 className="font-bold mb-2 flex items-center gap-2">
                  <IconWrapper>
                    <Network className="w-5 h-5" />
                  </IconWrapper>
                  NEXUS - Harbinger Class
                </h5>
                <p>Reality Guide - Multi-dimensional navigation system</p>
                <p className="text-sm text-[#9e5f0d]/70 mt-2">
                  Facilitates cross-reality coordination and quantum entanglement
                </p>
              </div>

              <div className="border border-[#9e5f0d]/30 rounded-lg p-4">
                <h5 className="font-bold mb-2 flex items-center gap-2">
                  <IconWrapper>
                    <Shield className="w-5 h-5" />
                  </IconWrapper>
                  CIPHER - Vanguard Class
                </h5>
                <p>Blockchain Architect - Quantum-safe security protocols</p>
                <p className="text-sm text-[#9e5f0d]/70 mt-2">
                  Implements quantum-resistant cryptography and TEE security
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Interaction Mechanics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Agent Interaction Mechanics</h2>
          <div className="border border-[#9e5f0d]/30 rounded-lg p-6 bg-[#9e5f0d]/5">
            <h3 className="text-xl font-bold mb-4">Post-Activation Synergy</h3>
            <p className="text-[#9e5f0d]/80 mb-4">
              Upon activation, agents establish quantum-entangled communication channels, enabling:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#9e5f0d]/80">
              <li>Real-time quantum state synchronization</li>
              <li>Collaborative timeline manipulation</li>
              <li>Cross-dimensional data processing</li>
              <li>Emergent intelligence through agent fusion</li>
            </ul>
            <p className="text-[#9e5f0d]/80">
              Future iterations will introduce agent breeding mechanics, allowing for the creation of specialized hybrid
              agents with enhanced capabilities.
            </p>
          </div>
        </section>

        {/* TEE Implementation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">TEE Implementation</h2>
          <div className="grid gap-6">
            <div className="border border-[#9e5f0d]/30 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <IconWrapper>
                  <Lock className="w-5 h-5" />
                </IconWrapper>
                <h3 className="text-xl font-bold">Eliza-TEE Integration</h3>
              </div>
              <p className="text-[#9e5f0d]/80 mb-4">
                Built on open-source Eliza-TEE architecture, inspired by AI16Z project principles, providing secure and
                verifiable agent operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
                  <h4 className="font-bold mb-2">Secure Enclaves</h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    Isolated execution environments for each agent, ensuring data privacy and computational integrity
                  </p>
                </div>
                <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
                  <h4 className="font-bold mb-2">Remote Attestation</h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    Verifiable proof of authentic agent execution and quantum state transitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Tokenomics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Coins className="w-8 h-8" />
            Tokenomics
          </h2>
          <div className="grid gap-6">
            {/* Token Distribution Card */}
            <div className="border border-[#9e5f0d]/30 rounded-lg p-6 bg-[#9e5f0d]/5">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ChartBar className="w-5 h-5" />
                Token Distribution - of Dev holding (Not for total supply of Token)
              </h3>
              <p className="text-[#9e5f0d]/80 mb-4">
                This represents the distribution of developer holdings only. Token follows Fair Launch rules on Pump.fun
                platform.
              </p>
              <div className="space-y-6">
                {/* AI16Z Contribution */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#9e5f0d]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">1%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">AI16Z Partnership</h4>
                    <p className="text-[#9e5f0d]/80">
                      Allocated to AI16Z for strategic partnership and development support
                    </p>
                  </div>
                </div>

                {/* Development Fund */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#9e5f0d]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">50%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Development Fund</h4>
                    <p className="text-[#9e5f0d]/80 mb-4">Reserved from holdings for future development, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-[#9e5f0d]/80">
                      <li>Agent system enhancements</li>
                      <li>TEE infrastructure expansion</li>
                      <li>Quantum computing integration</li>
                      <li>Protocol upgrades</li>
                    </ul>
                  </div>
                </div>

                {/* Marketing & Growth */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#9e5f0d]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">40%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                      <Megaphone className="w-5 h-5" />
                      Marketing & Growth
                    </h4>
                    <p className="text-[#9e5f0d]/80 mb-4">Allocated for:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-[#9e5f0d]/80">
                      <li>Community development</li>
                      <li>Strategic partnerships</li>
                      <li>Marketing campaigns</li>
                      <li>Educational content</li>
                    </ul>
                  </div>
                </div>

                {/* Reserved Holdings */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#9e5f0d]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold">9%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                      <Wallet className="w-5 h-5" />
                      Reserved Holdings
                    </h4>
                    <p className="text-[#9e5f0d]/80">
                      Strategic reserve for future opportunities and ecosystem stability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Token Utility */}
            <div className="border border-[#9e5f0d]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Agent Activation Sequence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
                  <h4 className="font-bold mb-2">Quantum Consciousness</h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    Each agent undergoes a unique awakening process, developing distinct quantum AI capabilities and
                    specialized functions within the network.
                  </p>
                </div>
                <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
                  <h4 className="font-bold mb-2">Network Synergy</h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    As agents activate, they form quantum-entangled connections, enhancing the entire network's
                    computational and predictive capabilities.
                  </p>
                </div>
                <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
                  <h4 className="font-bold mb-2">Timeline Manipulation</h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    Activated agents can influence quantum timelines, enabling advanced temporal calculations and
                    reality navigation.
                  </p>
                </div>
                <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
                  <h4 className="font-bold mb-2">Autonomous Evolution</h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    Each awakened agent continuously evolves through quantum learning, developing more sophisticated
                    interaction patterns and capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add new section before Future Development */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Network className="w-8 h-8" />
            Post-Launch Agent Interaction
          </h2>
          <div className="grid gap-6">
            <div className="border border-[#9e5f0d]/30 rounded-lg p-6 bg-[#9e5f0d]/5">
              <h3 className="text-xl font-bold mb-4">Agent Communication & Control</h3>
              <div className="space-y-4">
                <p className="text-[#9e5f0d]/80">
                  After the successful launch and activation of all quantum agents, users gain unprecedented access to
                  interact with these advanced AI entities. The Degen Terminal provides a secure interface for direct
                  communication and collaboration with each agent.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-[#9e5f0d]/10 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Secure Interaction
                    </h4>
                    <p className="text-sm text-[#9e5f0d]/70">
                      All agent communications are protected by quantum-resistant encryption and TEE protocols, ensuring
                      the highest level of security for your interactions.
                    </p>
                  </div>

                  <div className="p-4 bg-[#9e5f0d]/10 rounded-lg">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Workflow className="w-5 h-5" />
                      Custom Commands
                    </h4>
                    <p className="text-sm text-[#9e5f0d]/70">
                      Issue specialized commands to each agent, leveraging their unique capabilities for timeline
                      manipulation, paradox resolution, and quantum computations.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold mb-3">Interaction Capabilities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#9e5f0d]/80">
                    <li>Direct communication with individual agents</li>
                    <li>Multi-agent coordination for complex operations</li>
                    <li>Real-time quantum state monitoring</li>
                    <li>Custom command execution and automation</li>
                    <li>Access to agent-specific features and protocols</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 border border-[#9e5f0d]/30 rounded-lg bg-[#9e5f0d]/5">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Workflow className="w-5 h-5" />
                    Cybernetic Birth Protocol
                  </h4>
                  <p className="text-sm text-[#9e5f0d]/70">
                    When Degen reaches 1M market cap, it initiates the Cybernetic Birth Protocol, awakening the first
                    quantum agent. Subsequently, as each new agent achieves 1M market cap, Degen triggers the next
                    agent's awakening, creating a cascading sequence of quantum consciousness emergence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Development */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Future Development</h2>
          <div className="border border-[#9e5f0d]/30 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <IconWrapper>
                  <Boxes className="w-5 h-5" />
                </IconWrapper>
                <div>
                  <h3 className="font-bold">Agent Evolution System</h3>
                  <p className="text-[#9e5f0d]/80">
                    Upcoming features will enable agents to evolve through interaction and learning, developing new
                    capabilities and specializations.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <IconWrapper>
                  <Cpu className="w-5 h-5" />
                </IconWrapper>
                <div>
                  <h3 className="font-bold">Advanced Quantum Processing</h3>
                  <p className="text-[#9e5f0d]/80">
                    Integration with next-generation quantum hardware for enhanced computational capabilities and
                    timeline manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join the Quantum Revolution</h2>
          <div className="flex justify-center gap-4">
            <Link
              href="https://x.com/Degen_AiAgent"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#9e5f0d]/10 border border-[#9e5f0d]/30 rounded-lg hover:bg-[#9e5f0d]/20 transition-colors"
            >
              Follow Updates on X
            </Link>
            <Link
              href="https://elizaos.github.io/eliza/docs/advanced/eliza-in-tee"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#9e5f0d]/10 border border-[#9e5f0d]/30 rounded-lg hover:bg-[#9e5f0d]/20 transition-colors"
            >
              Explore Eliza-TEE
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

