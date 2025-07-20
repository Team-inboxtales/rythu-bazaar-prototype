
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SystemStatus() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>System Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Server Health</span>
              <span className="text-success">98%</span>
            </div>
            <Progress value={98} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Database Performance</span>
              <span className="text-success">94%</span>
            </div>
            <Progress value={94} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>API Response Time</span>
              <span className="text-warning">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
