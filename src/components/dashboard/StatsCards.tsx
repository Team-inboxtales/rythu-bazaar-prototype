
import { Card, CardContent } from "@/components/ui/card"
import { 
  Users, 
  DollarSign, 
  MapPin, 
  Activity,
  TrendingUp
} from "lucide-react"

const statsCards = [
  {
    title: "Active Farmers",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "success"
  },
  {
    title: "Daily Sales",
    value: "₹2,45,678",
    change: "+8.2%",
    trend: "up", 
    icon: DollarSign,
    color: "primary"
  },
  {
    title: "Stalls Occupied",
    value: "156/180",
    change: "87%",
    trend: "neutral",
    icon: MapPin,
    color: "warning"
  },
  {
    title: "Today's Visitors",
    value: "892",
    change: "+15%",
    trend: "up",
    icon: Activity,
    color: "info"
  }
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => (
        <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-success" />
                  <span className="text-xs text-success">{stat.change}</span>
                </div>
              </div>
              <div className={`h-12 w-12 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
