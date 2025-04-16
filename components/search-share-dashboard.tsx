"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MonthlyQueryChart from "@/components/monthly-query-chart"
import QuarterlyHeatmap from "@/components/quarterly-heatmap"

export default function SearchShareDashboard() {
  const [competitorBrand, setCompetitorBrand] = useState("all")

  return (
    <div role="main" aria-label="Search Share Dashboard">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Share Of Search</h1>
        <p className="text-gray-400" role="doc-subtitle">
          See how competitors search has changed over time.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-3" id="report-label">Report:</h2>
        <div className="max-w-xs">
          <Select
            defaultValue="competitor-brand"
            onValueChange={(value) => setCompetitorBrand(value)}
          >
            <SelectTrigger
              id="report-select"
              className="w-full bg-zinc-800 border-grey-700 rounded-sm"
              aria-labelledby="report-label report-select"
            >
              <SelectValue placeholder="Competitor Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                value="competitor-brand"
                aria-label="Competitor Brand Report"
              >
                Competitor Brand
              </SelectItem>
              <SelectItem
                value="other-report"
                aria-label="Other Report Type"
              >
                Other Report
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        className="space-y-6"
        role="region"
        aria-label="Search Share Charts"
      >
        <MonthlyQueryChart />
        <QuarterlyHeatmap />
      </div>
    </div>
  )
}

