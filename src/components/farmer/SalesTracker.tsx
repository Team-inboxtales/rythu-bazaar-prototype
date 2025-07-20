
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Plus, TrendingUp } from "lucide-react"

interface Sale {
  item: string
  quantity: string
  amount: string
  time: string
}

interface SalesTrackerProps {
  sales: Sale[]
  todayTotal: string
  target: string
  progress: number
}

export function SalesTracker({ sales, todayTotal, target, progress }: SalesTrackerProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 shadow-soft">
        <CardHeader>
          <CardTitle>Today's Sales</CardTitle>
          <CardDescription>Your transactions for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sales.map((sale, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="font-medium">{sale.item}</p>
                  <p className="text-sm text-muted-foreground">{sale.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-success">{sale.amount}</p>
                  <p className="text-xs text-muted-foreground">{sale.time}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            <Plus className="h-4 w-4 mr-2" />
            Add Manual Sale
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Today's Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Total Sales</span>
                <span className="font-semibold">{todayTotal}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Target: {target}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 mt-2" />
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-sm text-success">+12% from yesterday</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
