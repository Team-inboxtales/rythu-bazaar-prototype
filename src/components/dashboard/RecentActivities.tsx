
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, CheckCircle, Clock } from "lucide-react"

const recentActivities = [
  { id: 1, action: "New farmer registration", user: "Ramesh Kumar", time: "2 minutes ago", status: "success" },
  { id: 2, action: "Price update submitted", user: "Market Admin", time: "15 minutes ago", status: "pending" },
  { id: 3, action: "QR feedback received", user: "Customer #1234", time: "1 hour ago", status: "info" },
  { id: 4, action: "Stall allocation completed", user: "Lakshmi Devi", time: "2 hours ago", status: "success" },
  { id: 5, action: "Training session started", user: "Agriculture Officer", time: "3 hours ago", status: "active" }
]

export function RecentActivities() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activities
        </CardTitle>
        <CardDescription>Latest updates and actions in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
              <div className={`h-2 w-2 rounded-full ${
                activity.status === 'success' ? 'bg-success' :
                activity.status === 'pending' ? 'bg-warning' :
                activity.status === 'active' ? 'bg-info' : 'bg-muted-foreground'
              }`} />
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-muted-foreground">by {activity.user}</p>
              </div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
              {activity.status === 'success' && <CheckCircle className="h-4 w-4 text-success" />}
              {activity.status === 'pending' && <Clock className="h-4 w-4 text-warning" />}
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Activities
        </Button>
      </CardContent>
    </Card>
  )
}
