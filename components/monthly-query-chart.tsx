"use client"

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { highchartSeriesData, categories } from "@/lib/data/lineChartData";
import dynamic from 'next/dynamic';
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
  return (
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
          <DynamicLineChart
            seriesData={highchartSeriesData}
            categories={categories}
          />
        </div>

        {/* Legend */}
        <div
          className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2 hidden"
          role="list"
          aria-label="Chart legend"
        >
          {[
            { name: "Cliveden House", color: "bg-teal-400" },
            { name: "Chewton Glen", color: "bg-purple-500" },
            { name: "The Grove", color: "bg-green-400" },
            { name: "Gleneagles", color: "bg-orange-400" },
            { name: "Old Course Hotel", color: "bg-purple-400" },
            { name: "Beaverbrook Hotel", color: "bg-yellow-400" },
            { name: "Hedfield House", color: "bg-blue-400" },
            { name: "Cameron House", color: "bg-red-500" },
            { name: "Coworth Park", color: "bg-indigo-400" },
            { name: "Four Seasons Hampshire", color: "bg-blue-500" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2"
              role="listitem"
            >
              <div
                className={`h-3 w-3 ${item.color}`}
                aria-hidden="true"
              />
              <div className="text-xs">{item.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
});

export default MonthlyQueryChart;

