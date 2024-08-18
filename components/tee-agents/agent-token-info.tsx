"use client"
import { Copy, ExternalLink, Shield } from "lucide-react"

interface AgentTokenInfoProps {
  agent: {
    name: string
    role: string
    status: string
    color: string
    textShadow: string
  }
  tokenCA?: string
}

export default function AgentTokenInfo({ agent, tokenCA = "0x..." }: AgentTokenInfoProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-6 rounded-lg border border-[#F0B90B]/20 bg-[#030303]/90 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3
            className={`text-xl font-bold bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}
            style={{ textShadow: agent.textShadow }}
          >
            {agent.name}
          </h3>
          <p className="text-sm text-[#F0B90B]/60">{agent.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#F0B90B]" />
          <span className="text-sm text-[#F0B90B]">{agent.status}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-[#F0B90B]/5 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#F0B90B]/60">Token CA:</span>
            <span className="font-mono text-[#F0B90B]">{tokenCA}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => copyToClipboard(tokenCA)}
              className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors"
            >
              <Copy className="w-4 h-4 text-[#F0B90B]" />
            </button>
            <a
              href={`https://solscan.io/token/${tokenCA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-[#F0B90B]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

