import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Calendar, 
  Plus,
  CheckCircle,
  Clock,
  XCircle,
  User,
  CalendarDays,
  Filter
} from "lucide-react"

const leaveRequests = [
  {
    id: 1,
    employee: "Ramesh Kumar",
    type: "Annual Leave",
    from: "2024-01-22",
    to: "2024-01-24",
    days: 3,
    reason: "Family function",
    status: "pending",
    appliedOn: "2024-01-15",
    department: "Administration"
  },
  {
    id: 2,
    employee: "Priya Sharma",
    type: "Sick Leave",
    from: "2024-01-20",
    to: "2024-01-20",
    days: 1,
    reason: "Medical checkup",
    status: "approved",
    appliedOn: "2024-01-19",
    department: "Security"
  },
  {
    id: 3,
    employee: "Mohan Das",
    type: "Casual Leave",
    from: "2024-01-25",
    to: "2024-01-25",
    days: 1,
    reason: "Personal work",
    status: "rejected",
    appliedOn: "2024-01-18",
    department: "Maintenance"
  }
]

const leaveCalendar = [
  { date: "2024-01-20", employee: "Priya Sharma", type: "sick", status: "approved" },
  { date: "2024-01-22", employee: "Ramesh Kumar", type: "annual", status: "pending" },
  { date: "2024-01-23", employee: "Ramesh Kumar", type: "annual", status: "pending" },
  { date: "2024-01-24", employee: "Ramesh Kumar", type: "annual", status: "pending" },
  { date: "2024-01-25", employee: "Mohan Das", type: "casual", status: "rejected" }
]

export default function LeaveManagement() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leave Management</h1>
            <p className="text-muted-foreground">
              Manage employee leave requests and maintain leave calendar
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <CalendarDays className="h-4 w-4 mr-2" />
              Leave Calendar
            </Button>
            <Button variant="success" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Apply Leave
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                  <p className="text-2xl font-bold text-warning">1</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Approved Today</p>
                  <p className="text-2xl font-bold text-success">1</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">On Leave Today</p>
                  <p className="text-2xl font-bold text-info">1</p>
                </div>
                <User className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-primary">5</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requests">Leave Requests</TabsTrigger>
            <TabsTrigger value="calendar">Leave Calendar</TabsTrigger>
            <TabsTrigger value="apply">Apply Leave</TabsTrigger>
          </TabsList>

          {/* Leave Requests */}
          <TabsContent value="requests" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Leave Requests</CardTitle>
                    <CardDescription>Review and manage employee leave applications</CardDescription>
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Requests</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{request.employee}</h4>
                          <p className="text-sm text-muted-foreground">{request.department}</p>
                        </div>
                        <Badge variant={
                          request.status === 'approved' ? 'default' :
                          request.status === 'pending' ? 'secondary' : 'destructive'
                        }>
                          {request.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-muted-foreground">Leave Type</p>
                          <p className="text-sm font-medium">{request.type}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="text-sm font-medium">
                            {new Date(request.from).toLocaleDateString('en-IN')} - {new Date(request.to).toLocaleDateString('en-IN')}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Days</p>
                          <p className="text-sm font-medium">{request.days} day(s)</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Applied On</p>
                          <p className="text-sm font-medium">{new Date(request.appliedOn).toLocaleDateString('en-IN')}</p>
                        </div>
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

          {/* Leave Calendar */}
          <TabsContent value="calendar" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Leave Calendar - January 2024
                </CardTitle>
                <CardDescription>Visual overview of all employee leaves</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center p-2 font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }, (_, i) => {
                    const date = i + 1
                    const dateStr = `2024-01-${date.toString().padStart(2, '0')}`
                    const hasLeave = leaveCalendar.find(l => l.date === dateStr)
                    
                    return (
                      <div
                        key={date}
                        className={`aspect-square p-2 text-center rounded border text-sm ${
                          hasLeave 
                            ? hasLeave.status === 'approved' 
                              ? hasLeave.type === 'sick' 
                                ? 'bg-destructive/20 border-destructive text-destructive' 
                                : 'bg-primary/20 border-primary text-primary'
                              : 'bg-warning/20 border-warning text-warning'
                            : 'bg-background hover:bg-muted/50'
                        }`}
                      >
                        <div className="font-medium">{date}</div>
                        {hasLeave && (
                          <div className="text-xs truncate">
                            {hasLeave.employee.split(' ')[0]}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary/20 border border-primary" />
                    <span>Annual Leave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-destructive/20 border border-destructive" />
                    <span>Sick Leave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-warning/20 border border-warning" />
                    <span>Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Apply Leave */}
          <TabsContent value="apply" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Apply for Leave</CardTitle>
                <CardDescription>Submit a new leave application</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employee">Employee</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employee" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ramesh">Ramesh Kumar</SelectItem>
                          <SelectItem value="priya">Priya Sharma</SelectItem>
                          <SelectItem value="mohan">Mohan Das</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="leaveType">Leave Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select leave type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="annual">Annual Leave</SelectItem>
                          <SelectItem value="sick">Sick Leave</SelectItem>
                          <SelectItem value="casual">Casual Leave</SelectItem>
                          <SelectItem value="emergency">Emergency Leave</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fromDate">From Date</Label>
                      <Input type="date" id="fromDate" />
                    </div>
                    <div>
                      <Label htmlFor="toDate">To Date</Label>
                      <Input type="date" id="toDate" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reason">Reason for Leave</Label>
                    <Textarea 
                      id="reason" 
                      placeholder="Please provide a reason for your leave request"
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button variant="default" className="flex-1">
                      Submit Application
                    </Button>
                    <Button variant="outline">
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}