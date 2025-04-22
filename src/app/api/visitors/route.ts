import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For now, return static data
    // In a real implementation, you would fetch this from your analytics service
    return NextResponse.json({
      unique: 0,  // This will become 100 after the offset in VisitorCounter
      total: 0,   // This will become 150 after the offset in VisitorCounter
    });
  } catch (error) {
    console.error('Error fetching visitor data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor data' },
      { status: 500 }
    );
  }
} 