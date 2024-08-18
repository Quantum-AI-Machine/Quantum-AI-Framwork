"use client"

import { useEffect, useState } from "react"
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  Controls,
  ConnectionMode,
  useNodesState,
  useEdgesState,
  Panel,
} from "reactflow"
import "reactflow/dist/style.css"
import { AgentNode } from "./agent-node"

const nodeTypes = {
  agentNode: AgentNode as any,
}

const initialNodes: Node[] = [
  {
    id: "degen",
    type: "agentNode",
    position: { x: 450, y: 0 },
    data: {
      agent: {
        id: "degen",
        name: "Degen",
        role: "Master Timeline Controller",
        status: "active",
        color: "from-[#F0B90B] to-[#FCD535]",
        textShadow: "0 2px 4px rgba(240, 185, 11, 0.5)",
      },
    },
  },
  {
    id: "chrono",
    type: "agentNode",
    position: { x: 0, y: 250 },
    data: {
      agent: {
        id: "chrono",
        name: "CHRONO",
        role: "Timeline Specialist",
        status: "deactivated",
        color: "from-[#F0B90B] to-[#FCD535]",
        textShadow: "0 2px 4px rgba(240, 185, 11, 0.5)",
        generation: "Sentinel",
      },
    },
  },
  {
    id: "paradox",
    type: "agentNode",
    position: { x: 300, y: 250 },
    data: {
      agent: {
        id: "paradox",
        name: "PARADOX",
        role: "Paradox Expert",
        status: "deactivated",
        color: "from-[#F0B90B] to-[#FCD535]",
        textShadow: "0 2px 4px rgba(240, 185, 11, 0.5)",
        generation: "Catalyst",
      },
    },
  },
  {
    id: "nexus",
    type: "agentNode",
    position: { x: 600, y: 250 },
    data: {
      agent: {
        id: "nexus",
        name: "NEXUS",
        role: "Reality Guide",
        status: "deactivated",
        color: "from-[#F0B90B] to-[#FCD535]",
        textShadow: "0 2px 4px rgba(240, 185, 11, 0.5)",
        generation: "Harbinger",
      },
    },
  },
  {
    id: "cipher",
    type: "agentNode",
    position: { x: 900, y: 250 },
    data: {
      agent: {
        id: "cipher",
        name: "CIPHER",
        role: "Blockchain Architect",
        status: "deactivated",
        color: "from-[#F0B90B] to-[#FCD535]",
        textShadow: "0 2px 4px rgba(240, 185, 11, 0.5)",
        generation: "Vanguard",
      },
    },
  },
]

const initialEdges: Edge[] = [
  {
    id: "degen-chrono",
    source: "degen",
    target: "chrono",
    animated: true,
    style: { stroke: "#F0B90B" },
    type: "smoothstep",
  },
  {
    id: "degen-paradox",
    source: "degen",
    target: "paradox",
    animated: true,
    style: { stroke: "#F0B90B" },
    type: "smoothstep",
  },
  {
    id: "degen-nexus",
    source: "degen",
    target: "nexus",
    animated: true,
    style: { stroke: "#F0B90B" },
    type: "smoothstep",
  },
  {
    id: "degen-cipher",
    source: "degen",
    target: "cipher",
    animated: true,
    style: { stroke: "#F0B90B" },
    type: "smoothstep",
  },
]

export default function FlowContainer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full h-[800px] relative" style={{ touchAction: "none" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        nodesConnectable={false}
        elementsSelectable={false}
        fitView
        fitViewOptions={{
          padding: 0.2,
          includeHiddenNodes: true,
          minZoom: 0.5,
          maxZoom: 1,
        }}
        minZoom={0.5}
        maxZoom={1.5}
        className="bg-[#030303]"
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#F0B90B" className="opacity-5" />
        <Controls className="fill-[#F0B90B]" />
        <Panel position="top-left" className="bg-[#030303]/50 p-2 rounded-lg">
          <div className="text-sm text-[#F0B90B]">Drag nodes to reposition • Connections locked</div>
        </Panel>
      </ReactFlow>
    </div>
  )
}

