"use client"

import Link from "next/link"
import { Atom } from "lucide-react"

interface AgentHeaderProps {
  activeCount: number
  breedingCount: number
  deactivatedCount: number
}

export default function AgentHeader({ activeCount = 0, breedingCount = 0, deactivatedCount = 4 }: AgentHeaderProps) {
  return (
    <header className="border-b border-[#F0B90B]/20 bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Atom className="w-8 h-8 text-[#F0B90B]" />
              <div>
                <h1 className="font-bold text-[#F0B90B]">Degen TEE</h1>
                <p className="text-xs text-[#F0B90B]/60">AI Agents Evolve & Merge</p>
              </div>
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <Link
              href="https://elizaos.github.io/eliza/docs/advanced/eliza-in-tee"
              className="text-sm text-[#F0B90B]/80 hover:text-[#F0B90B]"
            >
              Eliza TEE
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
                <span className="text-sm text-[#F0B90B]">DEACTIVATED ({deactivatedCount})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm text-[#F0B90B]">BREEDING ({breedingCount})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#F0B90B]">ACTIVE ({activeCount})</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

