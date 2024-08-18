'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import AgentCard from './agent-card'

interface AgentTreeProps {
  agents: Record<string, any>
}

export default function AgentTree({ agents }: AgentTreeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Draw connections
    ctx.strokeStyle = '#9e5f0d'
    ctx.lineWidth = 1

    Object.values(agents).forEach((agent: any) => {
      if (agent.parent) {
        const parentEl = document.getElementById(`agent-${agent.parent}`)
        const childEl = document.getElementById(`agent-${agent.id}`)
        
        if (parentEl && childEl) {
          const parentRect = parentEl.getBoundingClientRect()
          const childRect = childEl.getBoundingClientRect()
          const canvasRect = canvas.getBoundingClientRect()

          ctx.setLineDash([4, 4]) // Dashed lines for deactivated agents
          
          const startX = parentRect.left + parentRect.width / 2 - canvasRect.left
          const startY = parentRect.top + parentRect.height - canvasRect.top
          const endX = childRect.left + childRect.width / 2 - canvasRect.left
          const endY = childRect.top - canvasRect.top

          ctx.beginPath()
          ctx.moveTo(startX, startY)
          ctx.lineTo(endX, endY)
          ctx.stroke()
        }
      }
    })

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [agents])

  return (
    <div className="relative min-h-[600px]">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative flex flex-col items-center gap-32">
        {/* QuantumChronos at the top */}
        <div className="w-full max-w-sm">
          {Object.values(agents)
            .filter(agent => agent.generation === 1)
            .map(agent => (
              <AgentCard
                key={agent.id}
                agent={agent}
              />
            ))}
        </div>

        {/* Other agents in a single row */}
        <div className="grid grid-cols-4 gap-6 w-full">
          {Object.values(agents)
            .filter(agent => agent.generation === 2)
            .map(agent => (
              <AgentCard
                key={agent.id}
                agent={agent}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

