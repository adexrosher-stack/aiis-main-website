import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("http://localhost:8000/api/people/board")
    
    if (!response.ok) {
      throw new Error(`Laravel API responded with status: ${response.status}`)
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching board from Laravel:", error)
    return NextResponse.json(
      { error: "Failed to fetch board data" },
      { status: 500 }
    )
  }
}
