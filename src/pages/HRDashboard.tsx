import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  UserCheck, 
  Clock,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  UserPlus,
  FileText,
  Activity
} from "lucide-react"

const hrStats = [
  {
    title: "Total Employees",
    value: "24",
    change: "+2 this month",
    icon: Users,
    color: "primary"
  },
  {
    title: "Present Today",
    value: "22",
    change: "91.7% attendance",
    icon: UserCheck,
    color: "success"
  },
  {
    title: "On Leave",
    value: "2",
    change: "1 sick, 1 casual",
    icon: Calendar,
    color: "warning"
  },
  {
    title: "Pending Approvals",
    value: "3",
    change: "Leave requests",
    icon: Clock,
    color: "info"
  }
]

const recentActivities = [
  { id: 1, action: "Leave approved", employee: "Ramesh Kumar", time: "30 minutes ago", type: "approval" },
  { id: 2, action: "New employee onboarded", employee: "Priya Sharma", time: "2 hours ago", type: "onboard" },
  { id: 3, action: "Attendance correction", employee: "Mohan Das", time: "4 hours ago", type: "correction" },
  { id: 4, action: "Leave application", employee: "Sunita Devi", time: "1 day ago", type: "request" }
]

const upcomingLeaves = [
  { employee: "Ravi Kumar", dates: "Jan 22-24", type: "Annual Leave", status: "approved" },
  { employee: "Lakshmi Devi", dates: "Jan 25", type: "Sick Leave", status: "pending" },
  { employee: "Krishna Murthy", dates: "Jan 28-30", type: "Personal", status: "approved" }
]

const departmentStats = [
  { department: "Administration", total: 8, present: 7, percentage: 87.5 },
  { department: "Security", total: 6, present: 6, percentage: 100 },
  { department: "Maintenance", total: 4, present: 3, percentage: 75 },
  { department: "Operations", total: 6, present: 6, percentage: 100 }
]

export default function HRDashboard() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">HR Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of employee management and attendance at Rythu Bazaar
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="success" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hrStats.map((stat, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
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
                Recent HR Activities
              </CardTitle>
              <CardDescription>Latest employee actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                    <div className={`h-2 w-2 rounded-full ${
                      activity.type === 'approval' ? 'bg-success' :
                      activity.type === 'onboard' ? 'bg-primary' :
                      activity.type === 'correction' ? 'bg-warning' : 'bg-info'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.employee}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                    {activity.type === 'approval' && <CheckCircle className="h-4 w-4 text-success" />}
                    {activity.type === 'request' && <Clock className="h-4 w-4 text-warning" />}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Leaves & Quick Actions */}
          <div className="space-y-6">
            {/* Upcoming Leaves */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-warning" />
                  Upcoming Leaves
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingLeaves.map((leave, index) => (
                    <div key={index} className="p-3 rounded-lg border-l-4 border-l-primary bg-primary/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{leave.employee}</span>
                        <Badge variant={leave.status === 'approved' ? 'default' : 'secondary'}>
                          {leave.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{leave.dates} • {leave.type}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Leave Calendar
                </Button>
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
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add New Employee
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Clock className="h-4 w-4 mr-2" />
                    Mark Attendance
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Approve Leaves
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Payroll
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department-wise Attendance */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Department-wise Attendance Today</CardTitle>
            <CardDescription>Current attendance status across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{dept.department}</h4>
                    <Badge variant={dept.percentage === 100 ? 'default' : dept.percentage >= 90 ? 'secondary' : 'outline'}>
                      {dept.percentage}%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {dept.present}/{dept.total} present
                  </p>
                  <Progress value={dept.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}