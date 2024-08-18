'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypingAnimation } from '../typing-animation'
import { LoadingState } from '../loading-state'
import { X, Shield, Lock } from 'lucide-react'

interface TeeAgentChatProps {
  agent: {
    id: string
    name: string
    role: string
    color: string
    textShadow: string
    gradientBg: string
  }
  onClose: () => void
}

interface Message {
  id: string
  role: 'user' | 'agent'
  content: string
  timestamp: number
}

export function TeeAgentChat({ agent, onClose }: TeeAgentChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSecure, setIsSecure] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate TEE secure connection establishment
    setIsProcessing(true)
    const timer = setTimeout(() => {
      setIsSecure(true)
      setIsProcessing(false)
      setMessages([
        {
          id: '0',
          role: 'agent',
          content: `Secure TEE connection established. I am ${agent.name}, ${agent.role}. This channel is quantum-encrypted and protected against temporal interference.`,
          timestamp: Date.now()
        }
      ])
    }, 2000)

    return () => clearTimeout(timer)
  }, [agent])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isProcessing) return

    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      role: 'user',
      content: input,
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsProcessing(true)

    try {
      const response = await fetch('/api/quantum/agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent: agent.name,
          query: input,
          secure: true
        })
      })

      const data = await response.json()

      const agentMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        role: 'agent',
        content: data.response,
        timestamp: Date.now()
      }

      setMessages(prev => [...prev, agentMessage])
    } catch (error) {
      console.error('Error:', error)
    }

    setIsProcessing(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-[600px] rounded-lg border-2 border-[#9e5f0d]/30 bg-black/60 backdrop-blur-sm flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b-2 border-[#9e5f0d]/30">
        <div className="flex items-center justify-between mb-2">
          <h3 
            className={`text-xl font-bold bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}
            style={{ textShadow: agent.textShadow }}
          >
            {agent.name}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#9e5f0d]/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center space-x-2 text-sm text-[#9e5f0d]/60">
          {isSecure ? (
            <>
              <Shield className="w-4 h-4" />
              <span>Secure TEE Connection</span>
              <Lock className="w-4 h-4" />
            </>
          ) : (
            <LoadingState />
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.role === 'user'
                  ? 'bg-[#9e5f0d]/20 text-[#9e5f0d]'
                  : 'bg-black/40 border border-[#9e5f0d]/30'
              }`}
              style={message.role === 'agent' ? {
                background: `linear-gradient(to right, rgba(0,0,0,0.4), ${agent.gradientBg}10)`
              } : undefined}
            >
              <TypingAnimation 
                text={message.content}
                delay={20}
              />
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg px-4 py-2 bg-black/40 border border-[#9e5f0d]/30">
              <LoadingState />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t-2 border-[#9e5f0d]/30">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isSecure ? "Enter your message..." : "Establishing secure connection..."}
            disabled={!isSecure || isProcessing}
            className="flex-1 bg-black/40 border border-[#9e5f0d]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9e5f0d] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!isSecure || isProcessing}
            className="px-6 py-2 bg-[#9e5f0d]/20 border border-[#9e5f0d]/30 rounded-lg hover:bg-[#9e5f0d]/30 transition-colors disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  )
}

