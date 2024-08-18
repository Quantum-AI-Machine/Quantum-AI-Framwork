import { NextResponse } from "next/server"

const AGENT_PROMPTS = {
  CHRONO: "Error: CHRONO is currently deactivated. This agent will be available in future updates.",
  PARADOX: "Error: PARADOX is currently deactivated. This agent will be available in future updates.",
  NEXUS: "Error: NEXUS is currently deactivated. This agent will be available in future updates.",
  CIPHER: "Error: CIPHER is currently deactivated. This agent will be available in future updates.",
}

const DEACTIVATED_AGENTS = ["CHRONO", "PARADOX", "NEXUS", "CIPHER"] // Added CHRONO to deactivated list

export async function POST(req: Request) {
  try {
    const { agent } = await req.json()

    // All agents are deactivated
    if (DEACTIVATED_AGENTS.includes(agent)) {
      return NextResponse.json(
        {
          error: AGENT_PROMPTS[agent as keyof typeof AGENT_PROMPTS],
          status: "deactivated",
        },
        { status: 403 },
      )
    }

    return NextResponse.json({
      greeting: `${agent} initialized. Ready to assist.`,
      status: "deactivated",
    })
  } catch (error) {
    return NextResponse.json({ error: "Error initializing agent" }, { status: 500 })
  }
}

