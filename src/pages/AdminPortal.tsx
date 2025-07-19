import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Users, 
  Package, 
  BarChart3, 
  Settings,
  ClipboardList,
  Monitor,
  Calendar,
  Clock,
  UserCheck,
  TrendingUp,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminPortal = () => {
  const systemStats = [
    { title: "Total Users", value: "1,247", change: "+12%", icon: Users },
    { title: "Active Operations", value: "23", change: "+5%", icon: ClipboardList },
    { title: "Inventory Items", value: "156", change: "-2%", icon: Package },
    { title: "System Health", value: "98.5%", change: "+0.3%", icon: CheckCircle },
  ];

  const operationsModules = [
    { 
      title: "Operations Management", 
      icon: ClipboardList, 
      link: "/operations", 
      description: "Manage daily operations and workflows",
      status: "active"
    },
    { 
      title: "Inventory Control", 
      icon: Package, 
      link: "/inventory", 
      description: "Track and manage stock levels",
      status: "active"
    },
    { 
      title: "Price Management", 
      icon: Monitor, 
      link: "/price-display", 
      description: "Control pricing and market rates",
      status: "active"
    },
    { 
      title: "Reports & Analytics", 
      icon: BarChart3, 
      link: "/reports", 
      description: "View detailed analytics and reports",
      status: "active"
    },
  ];

  const hrModules = [
    { 
      title: "HR Dashboard", 
      icon: UserCheck, 
      link: "/hr-dashboard", 
      description: "Overview of HR operations",
      status: "active"
    },
    { 
      title: "Employee Directory", 
      icon: Users, 
      link: "/employee-directory", 
      description: "Manage employee information",
      status: "active"
    },
    { 
      title: "Leave Management", 
      icon: Calendar, 
      link: "/leave-management", 
      description: "Handle leave requests and approvals",
      status: "active"
    },
    { 
      title: "Attendance Tracking", 
      icon: Clock, 
      link: "/attendance-overview", 
      description: "Monitor attendance and timesheets",
      status: "active"
    },
    { 
      title: "HR Settings", 
      icon: Settings, 
      link: "/hr-settings", 
      description: "Configure HR policies and settings",
      status: "active"
    },
  ];

  const recentAlerts = [
    { type: "warning", message: "Low inventory: Rice below threshold", time: "2 hours ago" },
    { type: "info", message: "New employee onboarding scheduled", time: "4 hours ago" },
    { type: "success", message: "Monthly reports generated successfully", time: "1 day ago" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
          <Shield className="h-10 w-10 text-primary" />
          Admin Portal
        </h1>
        <p className="text-lg text-muted-foreground">Comprehensive management and administration dashboard</p>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="hr">Human Resources</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/operations">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <ClipboardList className="h-4 w-4" />
                    Manage Operations
                  </Button>
                </Link>
                <Link to="/hr-dashboard">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <UserCheck className="h-4 w-4" />
                    HR Dashboard
                  </Button>
                </Link>
                <Link to="/reports">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <BarChart3 className="h-4 w-4" />
                    View Reports
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Settings className="h-4 w-4" />
                    System Settings
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current system health and performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Server Status</span>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Database</span>
                  <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Backup Status</span>
                  <Badge className="bg-green-100 text-green-800">Up to Date</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Security</span>
                  <Badge className="bg-green-100 text-green-800">Secure</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="operations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {operationsModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <module.icon className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{module.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link to={module.link}>
                    <Button className="w-full">Access Module</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hr" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hrModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <module.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-base">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={module.link}>
                    <Button variant="outline" className="w-full">Open</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Alerts & Notifications
              </CardTitle>
              <CardDescription>Recent system alerts and important notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className={`h-2 w-2 rounded-full mt-2 ${
                      alert.type === 'warning' ? 'bg-yellow-500' :
                      alert.type === 'info' ? 'bg-blue-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                    <Badge variant="outline" className={
                      alert.type === 'warning' ? 'border-yellow-500 text-yellow-600' :
                      alert.type === 'info' ? 'border-blue-500 text-blue-600' : 
                      'border-green-500 text-green-600'
                    }>
                      {alert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPortal;