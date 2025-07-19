import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Users, 
  MapPin, 
  Wrench,
  ClipboardList,
  UserPlus,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search
} from "lucide-react"

const stallAllocations = [
  { stallNo: "A-01", farmer: "Ramesh Kumar", crop: "Tomatoes", status: "active", phone: "9876543210" },
  { stallNo: "A-02", farmer: "Lakshmi Devi", crop: "Onions", status: "active", phone: "9876543211" },
  { stallNo: "A-03", farmer: "", crop: "", status: "vacant", phone: "" },
  { stallNo: "A-04", farmer: "Krishna Murthy", crop: "Vegetables", status: "maintenance", phone: "9876543212" },
  { stallNo: "B-01", farmer: "Sita Rama", crop: "Green Vegetables", status: "active", phone: "9876543213" },
  { stallNo: "B-02", farmer: "", crop: "", status: "vacant", phone: "" }
]

const staffList = [
  { name: "Ravi Kumar", role: "Market Manager", shift: "Morning", status: "present" },
  { name: "Priya Sharma", role: "Security Guard", shift: "Day", status: "present" },
  { name: "Mohan Das", role: "Cleaner", shift: "Morning", status: "absent" },
  { name: "Sunita Devi", role: "Helper", shift: "Evening", status: "present" }
]

const maintenanceRequests = [
  { id: 1, area: "Stall A-04", issue: "Electrical problem", priority: "high", status: "pending", date: "2024-01-15" },
  { id: 2, area: "Toilet Block", issue: "Water leakage", priority: "medium", status: "in-progress", date: "2024-01-14" },
  { id: 3, area: "Parking Area", issue: "Pothole repair", priority: "low", status: "completed", date: "2024-01-13" }
]

export default function Operations() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Operations Management</h1>
            <p className="text-muted-foreground">
              Manage stall allocations, staff, and maintenance activities
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <ClipboardList className="h-4 w-4 mr-2" />
              Daily Report
            </Button>
            <Button variant="success" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New Farmer
            </Button>
          </div>
        </div>

        <Tabs defaultValue="stalls" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stalls">Stall Management</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          {/* Stall Management */}
          <TabsContent value="stalls" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-success">4</p>
                  <p className="text-sm text-muted-foreground">Active Stalls</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-warning">2</p>
                  <p className="text-sm text-muted-foreground">Vacant Stalls</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-destructive">1</p>
                  <p className="text-sm text-muted-foreground">Under Maintenance</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">180</p>
                  <p className="text-sm text-muted-foreground">Total Stalls</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Stall Allocations</CardTitle>
                    <CardDescription>Current farmer allocations and stall status</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search stalls..." className="pl-10 w-64" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Stall No.</th>
                        <th className="text-left py-3">Farmer Name</th>
                        <th className="text-left py-3">Crop/Product</th>
                        <th className="text-left py-3">Contact</th>
                        <th className="text-left py-3">Status</th>
                        <th className="text-left py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stallAllocations.map((stall, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 font-medium">{stall.stallNo}</td>
                          <td className="py-3">{stall.farmer || "—"}</td>
                          <td className="py-3">{stall.crop || "—"}</td>
                          <td className="py-3">{stall.phone || "—"}</td>
                          <td className="py-3">
                            <Badge variant={
                              stall.status === 'active' ? 'default' :
                              stall.status === 'vacant' ? 'secondary' :
                              'destructive'
                            }>
                              {stall.status}
                            </Badge>
                          </td>
                          <td className="py-3">
                            <div className="flex gap-2">
                              {stall.status === 'vacant' ? (
                                <Button size="sm" variant="outline">Allocate</Button>
                              ) : (
                                <>
                                  <Button size="sm" variant="ghost">Edit</Button>
                                  <Button size="sm" variant="ghost">Remove</Button>
                                </>
                              )}
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

          {/* Staff Management */}
          <TabsContent value="staff" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-success">3</p>
                  <p className="text-sm text-muted-foreground">Present Today</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-destructive">1</p>
                  <p className="text-sm text-muted-foreground">Absent</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground">Total Staff</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Staff Attendance</CardTitle>
                <CardDescription>Today's staff status and shift assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {staffList.map((staff, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center gap-4">
                        <div className={`h-3 w-3 rounded-full ${
                          staff.status === 'present' ? 'bg-success' : 'bg-destructive'
                        }`} />
                        <div>
                          <p className="font-medium">{staff.name}</p>
                          <p className="text-sm text-muted-foreground">{staff.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{staff.shift} Shift</p>
                        <Badge variant={staff.status === 'present' ? 'default' : 'destructive'}>
                          {staff.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Maintenance */}
          <TabsContent value="maintenance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-destructive">1</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-warning">1</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-success">1</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Maintenance Requests</CardTitle>
                    <CardDescription>Track and manage maintenance activities</CardDescription>
                  </div>
                  <Button variant="accent">
                    <Wrench className="h-4 w-4 mr-2" />
                    New Request
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceRequests.map((request) => (
                    <div key={request.id} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {request.status === 'pending' && <Clock className="h-4 w-4 text-destructive" />}
                          {request.status === 'in-progress' && <Settings className="h-4 w-4 text-warning animate-spin" />}
                          {request.status === 'completed' && <CheckCircle className="h-4 w-4 text-success" />}
                          <div>
                            <p className="font-medium">{request.area}</p>
                            <p className="text-sm text-muted-foreground">{request.issue}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={
                            request.priority === 'high' ? 'destructive' :
                            request.priority === 'medium' ? 'default' :
                            'secondary'
                          }>
                            {request.priority} priority
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{request.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        {request.status === 'pending' && (
                          <Button size="sm" variant="default">Assign Technician</Button>
                        )}
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