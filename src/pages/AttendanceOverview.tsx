import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Clock, 
  Calendar,
  TrendingUp,
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download,
  Filter
} from "lucide-react"

const attendanceStats = [
  {
    title: "Overall Attendance",
    value: "87.5%",
    change: "+2.3% from last month",
    icon: CheckCircle,
    color: "success"
  },
  {
    title: "Present Today",
    value: "21/24",
    change: "3 on leave",
    icon: Users,
    color: "primary"
  },
  {
    title: "Late Arrivals",
    value: "4",
    change: "This week",
    icon: Clock,
    color: "warning"
  },
  {
    title: "Avg. Working Hours",
    value: "8.2h",
    change: "+0.3h from target",
    icon: TrendingUp,
    color: "info"
  }
]

const dailyAttendance = [
  { employee: "Ramesh Kumar", department: "Administration", checkIn: "09:00 AM", checkOut: "06:00 PM", hours: "8.0", status: "present" },
  { employee: "Priya Sharma", department: "Security", checkIn: "08:30 AM", checkOut: "05:30 PM", hours: "8.0", status: "present" },
  { employee: "Mohan Das", department: "Maintenance", checkIn: "—", checkOut: "—", hours: "0", status: "sick-leave" },
  { employee: "Sunita Devi", department: "Operations", checkIn: "09:15 AM", checkOut: "06:10 PM", hours: "7.9", status: "present" },
  { employee: "Ravi Kumar", department: "Operations", checkIn: "08:45 AM", checkOut: "05:45 PM", hours: "8.0", status: "present" },
  { employee: "Lakshmi Devi", department: "Administration", checkIn: "09:30 AM", checkOut: "06:30 PM", hours: "8.0", status: "late" }
]

const monthlyData = [
  { date: "Jan 1", present: 22, absent: 2, late: 1 },
  { date: "Jan 2", present: 21, absent: 2, late: 2 },
  { date: "Jan 3", present: 23, absent: 1, late: 0 },
  { date: "Jan 4", present: 20, absent: 3, late: 2 },
  { date: "Jan 5", present: 22, absent: 1, late: 1 },
  { date: "Jan 6", present: 21, absent: 2, late: 1 },
  { date: "Jan 7", present: 24, absent: 0, late: 0 }
]

const correctionRequests = [
  {
    id: 1,
    employee: "Ravi Kumar",
    date: "2024-01-10",
    issue: "Forgot to check out",
    requestedTime: "06:00 PM",
    reason: "System error, manually left at 6 PM",
    status: "pending"
  },
  {
    id: 2,
    employee: "Sunita Devi", 
    date: "2024-01-08",
    issue: "Late check-in",
    requestedTime: "09:00 AM",
    reason: "Traffic jam due to festival",
    status: "approved"
  }
]

export default function AttendanceOverview() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance Overview</h1>
            <p className="text-muted-foreground">
              Monitor daily attendance and track working patterns
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="success" size="sm">
              <Clock className="h-4 w-4 mr-2" />
              Mark Attendance
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attendanceStats.map((stat, index) => (
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

        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">Daily Attendance</TabsTrigger>
            <TabsTrigger value="monthly">Monthly Overview</TabsTrigger>
            <TabsTrigger value="corrections">Corrections</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Daily Attendance */}
          <TabsContent value="daily" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Today's Attendance</CardTitle>
                    <CardDescription>Real-time attendance status for all employees</CardDescription>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="administration">Administration</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Employee</th>
                        <th className="text-left py-3">Department</th>
                        <th className="text-left py-3">Check In</th>
                        <th className="text-left py-3">Check Out</th>
                        <th className="text-left py-3">Hours</th>
                        <th className="text-left py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dailyAttendance.map((record, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 font-medium">{record.employee}</td>
                          <td className="py-3 text-muted-foreground">{record.department}</td>
                          <td className="py-3">{record.checkIn}</td>
                          <td className="py-3">{record.checkOut}</td>
                          <td className="py-3">{record.hours}h</td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              {record.status === 'present' && <CheckCircle className="h-4 w-4 text-success" />}
                              {record.status === 'sick-leave' && <XCircle className="h-4 w-4 text-destructive" />}
                              {record.status === 'late' && <AlertTriangle className="h-4 w-4 text-warning" />}
                              <Badge variant={
                                record.status === 'present' ? 'default' :
                                record.status === 'sick-leave' ? 'destructive' :
                                'secondary'
                              }>
                                {record.status}
                              </Badge>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monthly Overview */}
          <TabsContent value="monthly" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Monthly Attendance Trend
                </CardTitle>
                <CardDescription>Week-by-week attendance patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2 p-4">
                  {monthlyData.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex flex-col gap-1 mb-2">
                        <div 
                          className="bg-success rounded-t w-8"
                          style={{ height: `${(day.present / 24) * 150}px` }}
                          title={`Present: ${day.present}`}
                        />
                        <div 
                          className="bg-warning w-8"
                          style={{ height: `${(day.late / 24) * 150}px` }}
                          title={`Late: ${day.late}`}
                        />
                        <div 
                          className="bg-destructive rounded-b w-8"
                          style={{ height: `${(day.absent / 24) * 150}px` }}
                          title={`Absent: ${day.absent}`}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{day.date}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-success" />
                    <span>Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-warning" />
                    <span>Late</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-destructive" />
                    <span>Absent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Correction Requests */}
          <TabsContent value="corrections" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Attendance Correction Requests</CardTitle>
                <CardDescription>Review and approve attendance corrections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {correctionRequests.map((request) => (
                    <div key={request.id} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{request.employee}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date(request.date).toLocaleDateString('en-IN')} - {request.issue}
                          </p>
                        </div>
                        <Badge variant={request.status === 'approved' ? 'default' : 'secondary'}>
                          {request.status}
                        </Badge>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground">Requested Time</p>
                        <p className="text-sm font-medium">{request.requestedTime}</p>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground">Reason</p>
                        <p className="text-sm">{request.reason}</p>
                      </div>

                      {request.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button size="sm" variant="default">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Attendance Reports</CardTitle>
                <CardDescription>Generate detailed attendance reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Detailed Attendance Reports</h3>
                  <p className="text-muted-foreground mb-4">
                    Generate comprehensive reports for payroll and performance analysis
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button variant="accent">
                      <Download className="h-4 w-4 mr-2" />
                      Monthly Report
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Custom Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}