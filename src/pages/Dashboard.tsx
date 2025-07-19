import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Wheat, 
  TrendingUp, 
  AlertTriangle, 
  MapPin, 
  Calendar,
  DollarSign,
  Activity,
  CheckCircle,
  Clock,
  Smartphone
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

const recentActivities = [
  { id: 1, action: "New farmer registration", user: "Ramesh Kumar", time: "2 minutes ago", status: "success" },
  { id: 2, action: "Price update submitted", user: "Market Admin", time: "15 minutes ago", status: "pending" },
  { id: 3, action: "QR feedback received", user: "Customer #1234", time: "1 hour ago", status: "info" },
  { id: 4, action: "Stall allocation completed", user: "Lakshmi Devi", time: "2 hours ago", status: "success" },
  { id: 5, action: "Training session started", user: "Agriculture Officer", time: "3 hours ago", status: "active" }
]

const urgentAlerts = [
  { id: 1, type: "Price Update", message: "Tomato prices need immediate update", priority: "high" },
  { id: 2, type: "System", message: "Scheduled maintenance in 2 hours", priority: "medium" },
  { id: 3, type: "Inventory", message: "Low stock alert for onions", priority: "low" }
]

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
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

        {/* Stats Cards */}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="lg:col-span-2 shadow-soft">
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

          {/* Urgent Alerts & Quick Actions */}
          <div className="space-y-6">
            {/* Alerts */}
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

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <Button variant="outline" className="justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Register New Farmer
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Wheat className="h-4 w-4 mr-2" />
                    Update Crop Prices
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Allocate Stall
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Send SMS Updates
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
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
          </div>
        </div>
      </div>
    </AppLayout>
  )
}