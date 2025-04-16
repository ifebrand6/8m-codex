import { NextResponse } from 'next/server';
import { highchartSeriesData, categories } from '@/lib/data/lineChartData';
//TODO implement get api endpoint here
export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return NextResponse.json({
    seriesData: highchartSeriesData,
    categories: categories
  });
}
