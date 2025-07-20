import { useLocalStorage } from './useLocalStorage'

export interface Employee {
  id: number
  name: string
  role: string
  department: string
  phone: string
  email: string
  location: string
  status: 'active' | 'on-leave' | 'inactive'
  joinDate: string
  avatar?: string
}

const initialEmployees: Employee[] = [
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

export function useEmployees() {
  const [employees, setEmployees] = useLocalStorage<Employee[]>('employees', initialEmployees)

  const addEmployee = (employeeData: Omit<Employee, 'id'>) => {
    const newEmployee = {
      ...employeeData,
      id: Math.max(...employees.map(e => e.id), 0) + 1
    }
    setEmployees(prev => [...prev, newEmployee])
    return newEmployee
  }

  const updateEmployee = (id: number, employeeData: Partial<Employee>) => {
    setEmployees(prev => 
      prev.map(emp => emp.id === id ? { ...emp, ...employeeData } : emp)
    )
  }

  const deleteEmployee = (id: number) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id))
  }

  const getEmployee = (id: number) => {
    return employees.find(emp => emp.id === id)
  }

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
  }
}