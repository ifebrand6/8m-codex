"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This is a placeholder component for the quarterly heatmap
export default function QuarterlyHeatmap() {
  // Heatmap data would normally be passed as props or fetched here

  // Generate a sample color based on value
  const getHeatmapColor = (value: number) => {
    if (value < 25) return "bg-teal-400"
    if (value < 50) return "bg-green-400"
    if (value < 75) return "bg-yellow-400"
    return "bg-red-500"
  }

  // Generate sample data for the heatmap
  const generateHeatmapData = () => {
    const hotels = [
      "The Newt",
      "Four Seasons Hampshire",
      "Coworth Park",
      "Cameron House",
      "Hedfield House",
      "Beaverbrook Hotel",
      "Old Course Hotel",
      "Chewton Glen",
      "The Grove",
      "Cliveden House",
    ]

    const quarters = [
      "Q2",
      "Q3",
      "Q4",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q1",
      "Q2",
    ]
    const years = [2019, 2020, 2021, 2022, 2023]

    return hotels.map((hotel) => ({
      name: hotel,
      values: quarters.map(() => Math.floor(Math.random() * 100)),
    }))
  }

  const heatmapData = generateHeatmapData()

  return (
    <Card className="bg-zinc-800 border-grey-700 rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl">Query - Quarterly Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="overflow-x-auto"
          role="img"
          aria-label="Quarterly heatmap showing search performance across different competitors from 2019 to 2023"
        >
          <div className="min-w-[800px] h-[400px] bg-gray-900">
           {/*TODO CHARTS GOES HERE */}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

