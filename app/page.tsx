import { DegenHero } from "@/components/degen-hero"
import { DegenFeatures } from "@/components/degen-features"
import { DegenTerminal } from "@/components/degen-terminal"
import { DegenAgents } from "@/components/degen-agents"
import { DegenFooter } from "@/components/degen-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0a0a]">
      <DegenHero />
      <DegenFeatures />
      <DegenTerminal />
      <DegenAgents />
      <DegenFooter />
    </div>
  )
}

