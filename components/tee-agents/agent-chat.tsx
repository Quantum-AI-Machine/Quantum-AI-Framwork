"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { X, Shield, Lock } from "lucide-react"
import { TypingAnimation } from "../typing-animation"
import { LoadingState } from "../loading-state"

interface AgentChatProps {
  agent: {
    name: string
    role: string
    color: string
    textShadow: string
  }
  onClose: () => void
}

interface Message {
  id: string
  role: "user" | "agent"
  content: string
  timestamp: number
}

export function AgentChat({ agent, onClose }: AgentChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(true)
  const [isSecure, setIsSecure] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSecure(true)
      setIsProcessing(false)
      setMessages([
        {
          id: "0",
          role: "agent",
          content: `Secure TEE connection established. I am ${agent.name}, ${agent.role}. This channel is quantum-encrypted and protected by Degen Protocol.`,
          timestamp: Date.now(),
        },
      ])
    }, 2000)

    return () => clearTimeout(timer)
  }, [agent])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isProcessing) return

    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      role: "user",
      content: input,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsProcessing(true)

    try {
      const response = await fetch("/api/quantum/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent: agent.name,
          query: input,
          secure: true,
        }),
      })

      const data = await response.json()

      const agentMessage: Message = {
        id: Math.random().toString(36).substr(2, 9),
        role: "agent",
        content: data.response,
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, agentMessage])
    } catch (error) {
      console.error("Error:", error)
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
        className="w-full max-w-2xl h-[600px] rounded-lg border border-[#F0B90B]/20 bg-[#030303] flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-[#F0B90B]/20">
          <div className="flex items-center justify-between mb-2">
            <h3
              className={`text-xl font-bold bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}
              style={{ textShadow: agent.textShadow }}
            >
              {agent.name}
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-[#F0B90B]/10 rounded-lg transition-colors">
              <X className="w-5 h-5 text-[#F0B90B]" />
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-[#F0B90B]/60">
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
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === "user" ? "bg-[#F0B90B]/20 text-[#F0B90B]" : "bg-[#030303] border border-[#F0B90B]/20"
                }`}
              >
                <TypingAnimation text={message.content} delay={20} />
              </div>
            </div>
          ))}
          {isProcessing && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg px-4 py-2 bg-[#030303] border border-[#F0B90B]/20">
                <LoadingState />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#F0B90B]/20">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isSecure ? "Enter your message..." : "Establishing secure connection..."}
              disabled={!isSecure || isProcessing}
              className="flex-1 bg-[#030303] border border-[#F0B90B]/20 rounded-lg px-4 py-2 text-[#F0B90B] placeholder-[#F0B90B]/50 focus:outline-none focus:border-[#F0B90B] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!isSecure || isProcessing}
              className="px-6 py-2 bg-[#030303] border border-[#F0B90B]/20 rounded-lg text-[#F0B90B] hover:bg-[#F0B90B]/10 transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}

