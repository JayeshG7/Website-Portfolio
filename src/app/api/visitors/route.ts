import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Initialize the Google Analytics client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  projectId: process.env.GOOGLE_PROJECT_ID,
});

export async function GET() {
  try {
    // Get the current date and 30 days ago for the date range
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);

    // Fetch data from Google Analytics
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GOOGLE_ANALYTICS_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: thirtyDaysAgo.toISOString().split('T')[0],
          endDate: today.toISOString().split('T')[0],
        },
      ],
      dimensions: [
        {
          name: 'date',
        },
      ],
      metrics: [
        {
          name: 'totalUsers',
        },
        {
          name: 'screenPageViews',
        },
      ],
    });

    // Calculate unique visitors and total visits
    const uniqueVisitors = response.rows?.reduce((sum, row) => {
      return sum + parseInt(row.metricValues?.[0].value || '0', 10);
    }, 0) || 0;

    const totalVisits = response.rows?.reduce((sum, row) => {
      return sum + parseInt(row.metricValues?.[1].value || '0', 10);
    }, 0) || 0;

    return NextResponse.json({
      unique: uniqueVisitors,
      total: totalVisits,
    });
  } catch (error) {
    console.error('Error fetching visitor data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor data' },
      { status: 500 }
    );
  }
} 