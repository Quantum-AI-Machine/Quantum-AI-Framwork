'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, ExternalLink, DiscIcon as Discord } from 'lucide-react'
import { formatBalance } from '../../lib/utils'

interface TokenInfoCardProps {
  tokenCA: string
  walletAddress: string
  networkUrl: string
}

export default function TokenInfoCard({ tokenCA, walletAddress, networkUrl }: TokenInfoCardProps) {
  const [tokenInfo, setTokenInfo] = useState({
    marketCap: '46.2M',
    balance: '5,102,617.73'
  })

  const copyToClipboard = (text: string) => {
    navigator.clipboard.write([
      new ClipboardItem({
        'text/plain': new Blob([text], { type: 'text/plain' }),
      }),
    ])
  }

  return (
    <div className="w-full p-6 rounded-lg border border-[#9e5f0d]/20 bg-[#0a0a0a]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#9e5f0d]/10 overflow-hidden">
          <img 
            src="/spore-icon.png" 
            alt="Spore"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#9e5f0d]">Spore</h3>
          <p className="text-sm text-[#9e5f0d]/60">
            #1 • 6 days ago
            <span className="ml-2 px-2 py-0.5 text-xs bg-blue-500/10 text-blue-500 rounded">GEN_1</span>
          </p>
        </div>
      </div>

      {/* Token Info */}
      <div className="space-y-4 mb-6">
        <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-[#9e5f0d]/60">TOKEN CA</span>
            <span className="text-sm text-[#9e5f0d]/60">TOKEN VALUE</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-mono">{tokenCA.slice(0, 6)}...{tokenCA.slice(-4)}</span>
              <button 
                onClick={() => copyToClipboard(tokenCA)}
                className="p-1 hover:bg-[#9e5f0d]/10 rounded"
              >
                <Copy className="w-4 h-4" />
              </button>
              <a 
                href={`https://solscan.io/token/${tokenCA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-[#9e5f0d]/10 rounded"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <span className="text-green-500 font-bold">{tokenInfo.marketCap}</span>
          </div>
        </div>

        <div className="p-4 bg-[#9e5f0d]/5 rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-[#9e5f0d]/60">WALLET ADDRESS</span>
            <span className="text-sm text-[#9e5f0d]/60">BALANCE</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-mono">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
              <button 
                onClick={() => copyToClipboard(walletAddress)}
                className="p-1 hover:bg-[#9e5f0d]/10 rounded"
              >
                <Copy className="w-4 h-4" />
              </button>
              <a 
                href={`https://solscan.io/account/${walletAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:bg-[#9e5f0d]/10 rounded"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[#ff6b4a] font-bold">${tokenInfo.balance}</span>
          </div>
        </div>
      </div>

      {/* Status Tags */}
      <div className="flex gap-2 mb-6">
        <span className="px-3 py-1 bg-[#ff6b4a]/10 text-[#ff6b4a] text-sm rounded-md">
          TEE RUNNING
        </span>
        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-sm rounded-md">
          BREED COMPLETED
        </span>
      </div>

      {/* Characteristics */}
      <div className="flex gap-2 mb-6">
        <span className="px-3 py-1 bg-[#9e5f0d]/10 text-[#9e5f0d] text-sm rounded-md">
          EFFICIENT
        </span>
        <span className="px-3 py-1 bg-[#9e5f0d]/10 text-[#9e5f0d] text-sm rounded-md">
          LOGICAL
        </span>
        <span className="px-3 py-1 bg-[#9e5f0d]/10 text-[#9e5f0d] text-sm rounded-md">
          PRECISE
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#9e5f0d]/60">BREED PROGRESS</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#9e5f0d]">Market Cap {tokenInfo.marketCap}</span>
            <span className="text-sm text-[#ff6b4a]">100%</span>
          </div>
        </div>
        <div className="h-2 bg-[#9e5f0d]/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#ff6b4a]"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-2">
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 bg-[#ff6b4a]/10 text-[#ff6b4a] text-sm rounded-md hover:bg-[#ff6b4a]/20 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          PUMP.FUN
        </a>
        <a
          href="https://twitter.com/SPOREDOTFUN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-md hover:bg-blue-500/20 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          @SPOREDOTFUN
        </a>
        <a
          href="https://discord.gg/spore"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-500 text-sm rounded-md hover:bg-indigo-500/20 transition-colors"
        >
          <Discord className="w-4 h-4" />
          DISCORD
        </a>
      </div>
    </div>
  )
}

