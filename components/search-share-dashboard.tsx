"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MonthlyQueryChart from "@/components/monthly-query-chart"
import QuarterlyHeatmap from "@/components/quarterly-heatmap"

export default function SearchShareDashboard() {
  const [competitorBrand, setCompetitorBrand] = useState("all")

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Share Of Search</h1>
        <p className="text-gray-400">See how competitors search has changed over time.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-3">Report:</h2>
        <div className="max-w-xs">
          <Select defaultValue="competitor-brand">
            <SelectTrigger id="report-select" className="w-full bg-zinc-800 border-grey-700 rounded-sm">
              <SelectValue placeholder="Competitor Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="competitor-brand">Competitor Brand</SelectItem>
              <SelectItem value="other-report">Other Report</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        <MonthlyQueryChart />
        <QuarterlyHeatmap />
      </div>
    </div>
  )
}

