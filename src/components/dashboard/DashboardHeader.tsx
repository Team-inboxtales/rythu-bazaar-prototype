
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening at Rythu Bazaar today.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Today: {new Date().toLocaleDateString('en-IN')}
        </Button>
        <Button variant="accent" size="sm">
          Generate Report
        </Button>
      </div>
    </div>
  )
}
