
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

const urgentAlerts = [
  { id: 1, type: "Price Update", message: "Tomato prices need immediate update", priority: "high" },
  { id: 2, type: "System", message: "Scheduled maintenance in 2 hours", priority: "medium" },
  { id: 3, type: "Inventory", message: "Low stock alert for onions", priority: "low" }
]

export function UrgentAlerts() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Urgent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {urgentAlerts.map((alert) => (
            <div key={alert.id} className="p-3 rounded-lg border-l-4 border-l-warning bg-warning/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{alert.type}</span>
                <Badge variant={alert.priority === 'high' ? 'destructive' : alert.priority === 'medium' ? 'default' : 'secondary'}>
                  {alert.priority}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{alert.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
