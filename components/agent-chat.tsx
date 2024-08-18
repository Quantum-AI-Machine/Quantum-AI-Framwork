'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypingAnimation } from './typing-animation'
import { LoadingState } from './loading-state'
import { agentSystem } from '../lib/agent-system'
import { AgentMessage } from '../lib/agent-system/types'

const AGENT_COLORS = {
  CHRONO: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
  PARADOX: 'linear-gradient(135deg, #4834D4, #686DE0)',
  NEXUS: 'linear-gradient(135deg, #6C5CE7, #A8A4E6)',
  CIPHER: 'linear-gradient(135deg, #F9A826, #FFBE76)'
}

const AGENT_TEXT_SHADOWS = {
  CHRONO: '0 2px 4px rgba(255, 107, 107, 0.5)',
  PARADOX: '0 2px 4px rgba(72, 52, 212, 0.5)',
  NEXUS: '0 2px 4px rgba(108, 92, 231, 0.5)',
  CIPHER: '0 2px 4px rgba(249, 168, 38, 0.5)'
}

interface AgentChatProps {
  agent: string
  role: string
  onClose: () => void
}

export function AgentChat({ agent, role, onClose }: AgentChatProps) {
  const [messages, setMessages] = useState<AgentMessage[]>([])
  const [input, setInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initializeAgent = async () => {
      try {
        // Initialize agent
        const response = await fetch('/api/quantum/agent/initialize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ agent })
        })
        
        const data = await response.json()
        
        // Set initial message
        setMessages([{
          id: '0',
          timestamp: Date.now(),
          source: agent,
          target: 'user',
          type: 'response',
          content: agent === 'CHRONO' 
            ? 'Timeline Specialist CHRONO activated. Quantum neural link established. How may I assist with temporal operations?'
            : data.greeting || `Quantum TEE link established. I am ${agent}, ${role}. How may I assist you?`
        }])
        
        setIsInitialized(true)
        setIsProcessing(false)
      } catch (error) {
        console.error('Error initializing agent:', error)
        setMessages([{
          id: '0',
          timestamp: Date.now(),
          source: 'system',
          target: 'user',
          type: 'error',
          content: 'Error initializing quantum neural link. Please try again.'
        }])
        setIsProcessing(false)
      }
    }

    initializeAgent()
  }, [agent, role])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isProcessing || !isInitialized) return

    if (input.toLowerCase() === 'exit') {
      onClose()
      return
    }

    const userMessage: AgentMessage = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      source: 'user',
      target: agent,
      type: 'command',
      content: input
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
          agent,
          query: input,
          secure: true
        })
      })

      const data = await response.json()
      
      const agentMessage: AgentMessage = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        source: agent,
        target: 'user',
        type: 'response',
        content: data.response
      }

      setMessages(prev => [...prev, agentMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        source: 'system',
        target: 'user',
        type: 'error',
        content: 'Error processing quantum request. Please try again.'
      }])
    }

    setIsProcessing(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="w-full max-w-4xl h-[80vh] bg-black/90 backdrop-blur-lg rounded-lg border-2 border-[#9e5f0d]/30 p-4 flex flex-col"
      >
        {/* Agent Header */}
        <motion.div 
          className="flex justify-between items-center mb-4 border-b border-[#9e5f0d]/30 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <h2 
              className="text-xl font-bold" 
              style={{ 
                background: AGENT_COLORS[agent as keyof typeof AGENT_COLORS],
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: AGENT_TEXT_SHADOWS[agent as keyof typeof AGENT_TEXT_SHADOWS]
              }}
            >
              {agent}
            </h2>
            <span className="text-[#9e5f0d]/60 text-sm">| {role}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-[#9e5f0d] hover:text-[#9e5f0d]/80"
          >
            [X]
          </button>
        </motion.div>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-auto space-y-4 mb-4">
          {!isInitialized ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-full space-y-4"
            >
              <div className="text-[#9e5f0d] text-lg">Initializing Quantum Neural Interface...</div>
              <LoadingState />
            </motion.div>
          ) : (
            messages.map((message) => (
              <motion.div 
                key={message.id}
                initial={{ opacity: 0, x: message.source === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-4 py-2 ${
                  message.source === 'user'
                    ? 'text-green-500 bg-[#9e5f0d]/20'
                    : message.type === 'error'
                    ? 'bg-red-500/10 border border-red-500/30'
                    : agent === 'CHRONO'
                    ? 'bg-indigo-500/10 border border-indigo-500/30'
                    : 'bg-black/40 border border-[#9e5f0d]/30'
                }`}
                style={message.source === agent ? {
                  background: AGENT_COLORS[agent as keyof typeof AGENT_COLORS],
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: AGENT_TEXT_SHADOWS[agent as keyof typeof AGENT_TEXT_SHADOWS]
                } : undefined}
              >
                <TypingAnimation text={message.content} delay={20} />
              </motion.div>
            ))
          )}
          {isProcessing && <LoadingState />}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isInitialized ? "Type 'exit' to close or enter your query..." : "Initializing..."}
            disabled={!isInitialized || isProcessing}
            className="flex-1 bg-black/50 border border-[#9e5f0d]/30 rounded px-3 py-2 text-[#9e5f0d] focus:outline-none focus:border-[#9e5f0d] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!isInitialized || isProcessing}
            className="px-4 py-2 bg-[#9e5f0d]/20 border border-[#9e5f0d]/30 rounded text-[#9e5f0d] hover:bg-[#9e5f0d]/30 disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

