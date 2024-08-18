import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const response = await fetch(
      'https://api.geckoterminal.com/api/v2/simple/networks/solana/token_price/CiwMDzUZ7jzi4e8thjPJquKcrUesLsUGjo9jtzyvpump',
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch token price')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching token price:', error)
    return NextResponse.json(
      { error: 'Error fetching token price' },
      { status: 500 }
    )
  }
}

