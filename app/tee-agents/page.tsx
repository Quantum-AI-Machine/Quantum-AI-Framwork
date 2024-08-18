"use client"

import Link from "next/link"
import AgentHeader from "../../components/tee-agents/agent-header"
import dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"

// Prevent SSR for React Flow
const ReactFlowProvider = dynamic(() => import("reactflow").then((mod) => mod.ReactFlowProvider), { ssr: false })

const FlowContainer = dynamic(() => import("../../components/tee-agents/flow-container"), { ssr: false })

function ErrorFallback() {
  return (
    <div className="text-center p-4">
      <p className="text-[#F0B90B]">Something went wrong with the flow visualization.</p>
    </div>
  )
}

export default function TeeAgentsPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#F0B90B]">
      <AgentHeader deactivatedCount={4} breedingCount={0} activeCount={1} />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-[#F0B90B] hover:text-[#F0B90B]/80 transition-colors">
            ← Return to Terminal
          </Link>
        </div>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ReactFlowProvider>
            <FlowContainer />
          </ReactFlowProvider>
        </ErrorBoundary>
      </main>
    </div>
  )
}

