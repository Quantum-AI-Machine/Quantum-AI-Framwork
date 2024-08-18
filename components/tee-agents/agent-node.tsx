"use client"

import { memo } from "react"
import { Handle, Position } from "reactflow"
import AgentTokenInfo from "./agent-token-info"

export const AgentNode = memo(function AgentNode({ data }: { data: any }) {
  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-[#F0B90B] !w-3 !h-3 !border-2 !border-[#030303]"
        isConnectable={false}
      />
      <div className="w-[400px] transform-gpu">
        <AgentTokenInfo agent={data.agent} tokenCA={data.tokenCA} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-[#F0B90B] !w-3 !h-3 !border-2 !border-[#030303]"
        isConnectable={false}
      />
    </div>
  )
})

