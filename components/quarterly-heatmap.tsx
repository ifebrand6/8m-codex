// src/components/QuarterlyHeatmap.tsx
"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quarters, heatmapData as mockHeatmapData, HeatmapEntry } from "@/lib/data/heatmapData";
import dynamic from 'next/dynamic';

const DynamicHeatMapChart = dynamic(() => import('./charts/heatmapChart'), {
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

const QuarterlyHeatmap = React.memo(function QuarterlyHeatmap() {
  const [heatmapEntries, setHeatmapEntries] = useState<HeatmapEntry[]>([]);
  const [yCategories, setYCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeatmapData = async () => {
      try {
        setLoading(true);
        const data = mockHeatmapData;
        setHeatmapEntries(data);
        setYCategories(data.map((entry: HeatmapEntry) => entry.hotel));
        setError(null);
      } catch (err) {
        setError('Failed to fetch heatmap data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeatmapData();
  }, []);

  // Memoize the data processing
  const highchartsData = useMemo(() =>
    heatmapEntries.flatMap((entry, yIndex) =>
      entry.points.map((value, xIndex) => [xIndex, yIndex, value] as [number, number, number])
    ),
    [heatmapEntries]
  );

  // Memoize the series data
  const seriesData = useMemo<Highcharts.SeriesHeatmapOptions[]>(() => [
    {
      type: 'heatmap',
      name: 'Search Interest',
      borderWidth: 1,
      borderColor: '#4b5563',
      data: highchartsData,
      dataLabels: {
        enabled: true,
        color: '#d1d5db',
        style: { textOutline: 'none' },
      },
    },
  ], [highchartsData]);

  if (loading) {
    return (
      <Card
        className="bg-zinc-800 border-grey-700 rounded-xl"
        role="region"
        aria-labelledby="quarterly-heatmap-title"
      >
        <CardHeader>
          <CardTitle
            id="quarterly-heatmap-title"
            className="text-xl text-gray-200"
          >
            Query - Quarterly Heatmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            role="status"
            aria-label="Loading heatmap data"
            className="text-gray-300"
          >
            Loading...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card
        className="bg-zinc-800 border-grey-700 rounded-xl"
        role="region"
        aria-labelledby="quarterly-heatmap-title"
      >
        <CardHeader>
          <CardTitle
            id="quarterly-heatmap-title"
            className="text-xl text-gray-200"
          >
            Query - Quarterly Heatmap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            role="alert"
            aria-live="polite"
            className="text-red-500"
          >
            {error}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="bg-zinc-800 border-grey-700 rounded-xl"
      role="region"
      aria-labelledby="quarterly-heatmap-title"
    >
      <CardHeader>
        <CardTitle
          id="quarterly-heatmap-title"
          className="text-xl text-gray-200"
        >
          Query - Quarterly Heatmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="overflow-x-auto"
          role="region"
          aria-label="Quarterly heatmap showing search performance across different competitors from 2019 to 2023"
          tabIndex={0}
        >
          <DynamicHeatMapChart
            seriesData={seriesData}
            categories={quarters}
            yCategories={yCategories}
            heatmapEntries={heatmapEntries}
          />
        </div>
      </CardContent>
    </Card>
  );
});

export default QuarterlyHeatmap;
