
import { AppLayout } from "@/components/layout/AppLayout"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { RecentActivities } from "@/components/dashboard/RecentActivities"
import { UrgentAlerts } from "@/components/dashboard/UrgentAlerts"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { SystemStatus } from "@/components/dashboard/SystemStatus"

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <DashboardHeader />
        
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivities />
          </div>

          <div className="space-y-6">
            <UrgentAlerts />
            <QuickActions />
            <SystemStatus />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
