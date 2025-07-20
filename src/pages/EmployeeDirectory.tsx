import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { EmployeeForm } from "@/components/forms/EmployeeForm"
import { useEmployees, Employee } from "@/hooks/useEmployees"
import { useToast } from "@/hooks/use-toast"
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
  MoreHorizontal,
  Trash2
} from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function EmployeeDirectory() {
  const navigate = useNavigate()
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees()
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState<Employee | undefined>()

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || employee.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || employee.department.toLowerCase() === departmentFilter
    
    return matchesSearch && matchesStatus && matchesDepartment
  })

  const handleAddEmployee = (employeeData: Omit<Employee, 'id'>) => {
    addEmployee(employeeData)
    setIsFormOpen(false)
    toast({
      title: "Success",
      description: "Employee added successfully"
    })
  }

  const handleEditEmployee = (employeeData: Omit<Employee, 'id'>) => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, employeeData)
      setEditingEmployee(undefined)
      setIsFormOpen(false)
      toast({
        title: "Success",
        description: "Employee updated successfully"
      })
    }
  }

  const handleDeleteEmployee = (id: number) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id)
      toast({
        title: "Success",
        description: "Employee deleted successfully"
      })
    }
  }

  const openEditForm = (employee: Employee) => {
    setEditingEmployee(employee)
    setIsFormOpen(true)
  }

  const openAddForm = () => {
    setEditingEmployee(undefined)
    setIsFormOpen(true)
  }

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
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button variant="success" size="sm" onClick={openAddForm}>
                  <Users className="h-4 w-4 mr-2" />
                  Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <EmployeeForm
                  employee={editingEmployee}
                  onSubmit={editingEmployee ? handleEditEmployee : handleAddEmployee}
                  onCancel={() => setIsFormOpen(false)}
                  isEditing={!!editingEmployee}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, role, or department..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
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
              <Select value={statusFilter} onValueChange={setStatusFilter}>
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
          {filteredEmployees.map((employee) => (
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
                  <Button variant="outline" size="sm" onClick={() => openEditForm(employee)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDeleteEmployee(employee.id)}>
                    <Trash2 className="h-3 w-3" />
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
                <p className="text-2xl font-bold text-primary">{employees.length}</p>
                <p className="text-sm text-muted-foreground">Total Employees</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-success">{employees.filter(e => e.status === 'active').length}</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-warning">{employees.filter(e => e.status === 'on-leave').length}</p>
                <p className="text-sm text-muted-foreground">On Leave</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-muted-foreground">{[...new Set(employees.map(e => e.department))].length}</p>
                <p className="text-sm text-muted-foreground">Departments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}