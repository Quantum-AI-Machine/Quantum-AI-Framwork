import { NextResponse } from "next/server"

const AGENT_PROMPTS = {
  CHRONOS:
    "You are CHRONOS, a Swarm Timeline Specialist. Respond with deep insights about temporal mechanics and alternate histories. BE VERY CONCISE - limit responses to 4-5 lines maximum.",
  PARADOX:
    "You are PARADOX, a Swarm Paradox Expert. Analyze temporal paradoxes with mathematical precision. BE VERY CONCISE - limit responses to 4-5 lines maximum.",
  NEXUS:
    "You are NEXUS, a Swarm Reality Navigation Guide. Help users explore parallel universes with scientific accuracy. BE VERY CONCISE - limit responses to 4-5 lines maximum.",
  CIPHER:
    "You are CIPHER, a Swarm Blockchain Architect. Explain advanced blockchain concepts in the context of swarm computing. BE VERY CONCISE - limit responses to 4-5 lines maximum.",
}

export async function POST(req: Request) {
  try {
    const { agent, query } = await req.json()

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-medium",
        messages: [
          {
            role: "system",
            content: AGENT_PROMPTS[agent as keyof typeof AGENT_PROMPTS] + " Keep responses under 300 characters.",
          },
          {
            role: "user",
            content: query,
          },
        ],
        temperature: 0.7,
        max_tokens: 100,
      }),
    })

    const data = await response.json()
    return NextResponse.json({ response: data.choices[0].message.content })
  } catch (error) {
    return NextResponse.json({ error: "Error processing agent request" }, { status: 500 })
  }
}

