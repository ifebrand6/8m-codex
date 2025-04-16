import { NextResponse } from 'next/server';
import { highchartSeriesData, categories } from '@/lib/data/lineChartData';

//TODO implement with actual endpoint here
export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return NextResponse.json({
    seriesData: highchartSeriesData,
    categories: categories
  });
}
