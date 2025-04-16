"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic';
import { useChartData } from '@/lib/hooks/useChartData';
import { ErrorBoundary } from './error-boundary';
import React from 'react';

const DynamicLineChart = dynamic(() => import('./charts/lineChart'), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      aria-label="Loading chart data"
      className="flex items-center justify-center h-full"
    >
      <p className="text-gray-400">Loading chart data...</p>
    </div>
  ),
});

const MonthlyQueryChart = React.memo(function MonthlyQueryChart() {
  const { data, isLoading } = useChartData<{ seriesData: any[]; categories: string[] }>('/api/chart-data/monthly');

  return (
    <ErrorBoundary>
      <Card
        className="bg-zinc-800 border-grey-700 rounded-xl"
        role="region"
        aria-labelledby="monthly-query-title"
      >
        <CardHeader>
          <CardTitle
            id="monthly-query-title"
            className="text-xl"
          >
            Query - By Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className="relative h-[400px] w-full rounded-md bg-zinc-900 p-4"
            role="img"
            aria-label="Monthly query chart showing search trends over time for different competitors"
            tabIndex={0}
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">Loading chart data...</p>
              </div>
            ) : (
              <DynamicLineChart
                seriesData={data?.seriesData || []}
                categories={data?.categories || []}
              />
            )}
          </div>

        </CardContent>
      </Card>
    </ErrorBoundary>
  );
});

export default MonthlyQueryChart;

