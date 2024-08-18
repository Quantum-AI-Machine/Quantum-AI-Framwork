import { NextResponse } from 'next/server'

const AGENT_PROMPTS = {
  CHRONO: 'You are CHRONO, a Timeline Specialist. Respond with deep insights about temporal mechanics and alternate histories. BE VERY CONCISE - limit responses to 4-5 lines maximum.',
  PARADOX: 'You are PARADOX, a Quantum Paradox Expert. Analyze temporal paradoxes with mathematical precision. BE VERY CONCISE - limit responses to 4-5 lines maximum.',
  NEXUS: 'You are NEXUS, a Reality Navigation Guide. Help users explore parallel universes with scientific accuracy. BE VERY CONCISE - limit responses to 4-5 lines maximum.',
  CIPHER: 'You are CIPHER, a Quantum Blockchain Architect. Explain advanced blockchain concepts in the context of quantum computing. BE VERY CONCISE - limit responses to 4-5 lines maximum.'
}

export async function POST(req: Request) {
  try {
    const { agent, message, personality, context } = await req.json()

    // Special handling for CHRONO
    if (agent === 'CHRONO') {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: 'mistral-medium',
          messages: [
            {
              role: 'system',
              content: AGENT_PROMPTS.CHRONO
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.7,
          max_tokens: 150
        })
      })

      const data = await response.json()
      return NextResponse.json({ response: data.choices[0].message.content })
    }

    // Handle other agents
    if (!AGENT_PROMPTS[agent as keyof typeof AGENT_PROMPTS]) {
      return NextResponse.json(
        { error: 'Agent not found or deactivated' },
        { status: 404 }
      )
    }

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          {
            role: 'system',
            content: AGENT_PROMPTS[agent as keyof typeof AGENT_PROMPTS]
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    })

    const data = await response.json()
    return NextResponse.json({ response: data.choices[0].message.content })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error processing agent request' },
      { status: 500 }
    )
  }
}

