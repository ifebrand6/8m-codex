import { NextResponse } from 'next/server';
import { heatmapData, quarters } from '@/lib/data/heatmapData';

//TODO implement get api endpoint here
export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Transform the data into the format expected by the heatmap component
  const data = heatmapData.flatMap((entry, yIndex) =>
    entry.points.map((value, xIndex) => ({
      x: xIndex,
      y: yIndex,
      value: value,
      name: quarters[xIndex]
    }))
  );

  return NextResponse.json({
    data,
    xCategories: quarters,
    yCategories: heatmapData.map(entry => entry.hotel)
  });
}
