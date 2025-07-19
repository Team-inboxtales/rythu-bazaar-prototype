import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Users, 
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Edit,
  FileText,
  Award,
  CheckCircle,
  XCircle
} from "lucide-react"
import { useParams } from "react-router-dom"

const employeeData = {
  id: 1,
  name: "Ramesh Kumar",
  role: "Market Manager",
  department: "Administration",
  phone: "+91 98765 43210",
  email: "ramesh@rythubazaar.gov.in",
  address: "123 MVP Colony, Visakhapatnam, AP 530017",
  joinDate: "2022-03-15",
  employeeId: "RB2022001",
  status: "active",
  manager: "District Collector",
  salary: "₹45,000",
  workLocation: "Rythu Bazaar, Visakhapatnam"
}

const attendanceData = [
  { date: "2024-01-15", checkIn: "09:00 AM", checkOut: "06:00 PM", status: "present", hours: "8.0" },
  { date: "2024-01-14", checkIn: "09:15 AM", checkOut: "06:05 PM", status: "present", hours: "7.8" },
  { date: "2024-01-13", checkIn: "—", checkOut: "—", status: "sick-leave", hours: "0" },
  { date: "2024-01-12", checkIn: "08:55 AM", checkOut: "06:10 PM", status: "present", hours: "8.2" },
  { date: "2024-01-11", checkIn: "09:05 AM", checkOut: "06:00 PM", status: "present", hours: "7.9" }
]

const leaveHistory = [
  { 
    type: "Sick Leave", 
    from: "2024-01-13", 
    to: "2024-01-13", 
    days: 1, 
    status: "approved",
    reason: "Fever",
    appliedOn: "2024-01-12"
  },
  { 
    type: "Annual Leave", 
    from: "2023-12-25", 
    to: "2023-12-26", 
    days: 2, 
    status: "approved",
    reason: "Festival celebration",
    appliedOn: "2023-12-20"
  },
  { 
    type: "Casual Leave", 
    from: "2023-11-15", 
    to: "2023-11-15", 
    days: 1, 
    status: "approved",
    reason: "Personal work",
    appliedOn: "2023-11-14"
  }
]

export default function EmployeeProfile() {
  const { id } = useParams()

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Employee Profile</h1>
            <p className="text-muted-foreground">
              Detailed information and records for {employeeData.name}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="success" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Profile Header Card */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">{employeeData.name}</h2>
                    <p className="text-lg text-muted-foreground">{employeeData.role}</p>
                    <p className="text-sm text-muted-foreground">ID: {employeeData.employeeId}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="default" className="mb-2">
                      {employeeData.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Joined: {new Date(employeeData.joinDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="employment">Employment</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="leave">Leave History</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Basic personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Phone Number</p>
                        <p className="text-sm text-muted-foreground">{employeeData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Email Address</p>
                        <p className="text-sm text-muted-foreground">{employeeData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">{employeeData.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Employee ID</p>
                      <p className="text-sm text-muted-foreground">{employeeData.employeeId}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Department</p>
                      <p className="text-sm text-muted-foreground">{employeeData.department}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Work Location</p>
                      <p className="text-sm text-muted-foreground">{employeeData.workLocation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Employment Details */}
          <TabsContent value="employment" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Employment Details</CardTitle>
                <CardDescription>Job role, responsibilities, and career information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Position</p>
                      <p className="text-sm text-muted-foreground">{employeeData.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Department</p>
                      <p className="text-sm text-muted-foreground">{employeeData.department}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Reporting Manager</p>
                      <p className="text-sm text-muted-foreground">{employeeData.manager}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Join Date</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(employeeData.joinDate).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Employment Status</p>
                      <Badge variant="default">{employeeData.status}</Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Monthly Salary</p>
                      <p className="text-sm text-muted-foreground">{employeeData.salary}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Attendance Records */}
          <TabsContent value="attendance" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Recent Attendance</CardTitle>
                <CardDescription>Daily attendance records and working hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Date</th>
                        <th className="text-left py-3">Check In</th>
                        <th className="text-left py-3">Check Out</th>
                        <th className="text-left py-3">Hours</th>
                        <th className="text-left py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceData.map((record, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">{new Date(record.date).toLocaleDateString('en-IN')}</td>
                          <td className="py-3">{record.checkIn}</td>
                          <td className="py-3">{record.checkOut}</td>
                          <td className="py-3">{record.hours}h</td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              {record.status === 'present' ? (
                                <CheckCircle className="h-4 w-4 text-success" />
                              ) : (
                                <XCircle className="h-4 w-4 text-destructive" />
                              )}
                              <Badge variant={record.status === 'present' ? 'default' : 'destructive'}>
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

          {/* Leave History */}
          <TabsContent value="leave" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Leave History</CardTitle>
                <CardDescription>Past leave applications and approvals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveHistory.map((leave, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{leave.type}</h4>
                          <p className="text-sm text-muted-foreground">{leave.reason}</p>
                        </div>
                        <Badge variant="default">{leave.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div>
                          <p className="font-medium">From</p>
                          <p>{new Date(leave.from).toLocaleDateString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="font-medium">To</p>
                          <p>{new Date(leave.to).toLocaleDateString('en-IN')}</p>
                        </div>
                        <div>
                          <p className="font-medium">Days</p>
                          <p>{leave.days}</p>
                        </div>
                        <div>
                          <p className="font-medium">Applied On</p>
                          <p>{new Date(leave.appliedOn).toLocaleDateString('en-IN')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}