import DashboardHeader from "@/components/dashboard-header"
import SearchShareDashboard from "@/components/search-share-dashboard"
import Controls from '@/components/controls';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-6">
        <Controls />
        <SearchShareDashboard />
      </div>
    </main>
  )
}

