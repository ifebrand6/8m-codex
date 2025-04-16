// src/components/QuarterlyHeatmap.tsx
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { useChartData } from '@/lib/hooks/useChartData';
import { ErrorBoundary } from './error-boundary';
import type { SeriesHeatmapOptions } from 'highcharts';

const DynamicHeatmap = dynamic(() => import('./charts/heatmapChart'), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      aria-label="Loading heatmap data"
      className="flex items-center justify-center h-full"
    >
      <p className="text-gray-400">Loading heatmap data...</p>
    </div>
  ),
});

interface HeatmapData {
  data: Array<{
    x: number;
    y: number;
    value: number;
    name: string;
  }>;
  xCategories: string[];
  yCategories: string[];
}

const QuarterlyHeatmap = React.memo(function QuarterlyHeatmap() {
  const { data, isLoading } = useChartData<HeatmapData>('/api/chart-data/quarterly');

  const seriesData: SeriesHeatmapOptions[] = React.useMemo(() => [{
    type: 'heatmap',
    name: 'Search Interest',
    borderWidth: 1,
    borderColor: '#4b5563',
    data: data?.data.map(point => [point.x, point.y, point.value]) || [],
    dataLabels: {
      enabled: true,
      color: '#d1d5db',
      style: { textOutline: 'none' },
    },
  }], [data]);

  return (
    <ErrorBoundary>
      <Card
        className="bg-zinc-800 border-grey-700 rounded-xl"
        role="region"
        aria-labelledby="quarterly-heatmap-title"
      >
        <CardHeader>
          <CardTitle
            id="quarterly-heatmap-title"
            className="text-xl"
          >
            Query - By Quarter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="relative h-[400px] w-full rounded-md bg-zinc-900 p-4"
            role="img"
            aria-label="Quarterly heatmap showing search performance across competitors"
            tabIndex={0}
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">Loading heatmap data...</p>
              </div>
            ) : (
              <DynamicHeatmap
                seriesData={seriesData}
                categories={data?.xCategories || []}
                yCategories={data?.yCategories || []}
                heatmapEntries={data?.data || []}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </ErrorBoundary>
  );
});

export default QuarterlyHeatmap;
