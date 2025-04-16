"use client"

import { useState } from "react"
import { ChevronDown, User } from "lucide-react"

export default function DashboardHeader() {
  const [activeTab, setActiveTab] = useState("search-visibility")

  return (
    <header className="border-b border-zinc-800" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-white" role="img" aria-label="Codex Logo">
              c<span className="text-gray-400">o</span>dex
            </div>

            <nav className="hidden md:block" aria-label="Main Navigation">
              <ul className="flex space-x-1" role="menubar">
                {[
                  { id: "admin", label: "Admin" },
                  { id: "overview", label: "Overview" },
                  { id: "website-health", label: "Website Health" },
                  { id: "search-visibility", label: "Search Visibility" },
                  { id: "performance", label: "Performance & Forecasting" },
                  { id: "budget", label: "Budget Tracker" },
                ].map((item) => (
                  <li key={item.id} role="none">
                    <button
                      role="menuitem"
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                        activeTab === item.id ? "text-white" : "text-gray-400 hover:text-white hover:bg-zinc-800"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                      aria-current={activeTab === item.id ? "page" : undefined}
                      aria-label={`${item.label} section`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center">
            <button
              aria-label="User profile menu"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700"
              aria-haspopup="true"
            >
              <User className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
