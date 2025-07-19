import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Users, 
  Search,
  Filter,
  Grid,
  List,
  Phone,
  Mail,
  MapPin,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const employees = [
  {
    id: 1,
    name: "Ramesh Kumar",
    role: "Market Manager",
    department: "Administration",
    phone: "+91 98765 43210",
    email: "ramesh@rythubazaar.gov.in",
    location: "Visakhapatnam",
    status: "active",
    joinDate: "2022-03-15",
    avatar: ""
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Security Guard",
    department: "Security",
    phone: "+91 98765 43211",
    email: "priya@rythubazaar.gov.in",
    location: "Visakhapatnam",
    status: "active",
    joinDate: "2023-01-10",
    avatar: ""
  },
  {
    id: 3,
    name: "Mohan Das",
    role: "Maintenance Staff",
    department: "Maintenance",
    phone: "+91 98765 43212",
    email: "mohan@rythubazaar.gov.in",
    location: "Visakhapatnam",
    status: "on-leave",
    joinDate: "2022-08-20",
    avatar: ""
  },
  {
    id: 4,
    name: "Sunita Devi",
    role: "Helper",
    department: "Operations",
    phone: "+91 98765 43213",
    email: "sunita@rythubazaar.gov.in",
    location: "Visakhapatnam",
    status: "active",
    joinDate: "2023-06-05",
    avatar: ""
  },
  {
    id: 5,
    name: "Ravi Kumar",
    role: "Operations Supervisor",
    department: "Operations",
    phone: "+91 98765 43214",
    email: "ravi@rythubazaar.gov.in",
    location: "Visakhapatnam",
    status: "active",
    joinDate: "2021-11-12",
    avatar: ""
  },
  {
    id: 6,
    name: "Lakshmi Devi",
    role: "Admin Assistant",
    department: "Administration",
    phone: "+91 98765 43215",
    email: "lakshmi@rythubazaar.gov.in",
    location: "Visakhapatnam",
    status: "active",
    joinDate: "2022-05-30",
    avatar: ""
  }
]

export default function EmployeeDirectory() {
  const navigate = useNavigate()

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Employee Directory</h1>
            <p className="text-muted-foreground">
              Browse and manage all employees at Rythu Bazaar
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4 mr-2" />
              Grid View
            </Button>
            <Button variant="success" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, role, or department..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on-leave">On Leave</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <Card key={employee.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{employee.name}</h4>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                    </div>
                  </div>
                  <Badge variant={
                    employee.status === 'active' ? 'default' :
                    employee.status === 'on-leave' ? 'secondary' : 'outline'
                  }>
                    {employee.status}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{employee.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{employee.location}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => navigate(`/employee-profile/${employee.id}`)}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Directory Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Total Employees</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-success">5</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">1</p>
                <p className="text-sm text-muted-foreground">On Leave</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-muted-foreground">4</p>
                <p className="text-sm text-muted-foreground">Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}