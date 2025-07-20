import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Wheat, 
  BarChart3, 
  Settings, 
  ArrowRight, 
  ChevronRight,
  Smartphone,
  Monitor,
  Package,
  GraduationCap,
  Calendar,
  Sprout,
  Globe,
  QrCode,
  TrendingUp,
  UserCheck
} from "lucide-react"

const quickAccessCards = [
  {
    title: "Admin Dashboard",
    description: "Complete management system for marketplace operations",
    icon: BarChart3,
    href: "/dashboard",
    gradient: "from-blue-500 to-blue-600",
    features: ["Analytics", "Employee Management", "Operations"],
    status: "Fully Functional"
  },
  {
    title: "Farmer Portal", 
    description: "Dedicated interface for farmers to manage stalls and sales",
    icon: Wheat,
    href: "/farmer",
    gradient: "from-green-500 to-green-600",
    features: ["Sales Tracking", "Price Updates", "Customer Feedback"],
    status: "Active"
  },
  {
    title: "Employee Directory",
    description: "Manage all marketplace employees with full CRUD operations",
    icon: Users,
    href: "/employee-directory", 
    gradient: "from-purple-500 to-purple-600",
    features: ["Add/Edit/Delete", "Search & Filter", "Live Statistics"],
    status: "✅ CRUD Ready"
  },
  {
    title: "Inventory Management",
    description: "Stock management and tracking with real-time updates",
    icon: Package,
    href: "/inventory",
    gradient: "from-orange-500 to-orange-600", 
    features: ["Stock Tracking", "Category Management", "Auto Status"],
    status: "✅ CRUD Ready"
  },
  {
    title: "Training Hub",
    description: "Employee training programs and skill development",
    icon: GraduationCap,
    href: "/training",
    gradient: "from-indigo-500 to-indigo-600",
    features: ["Course Catalog", "Live Sessions", "Progress Tracking"],
    status: "View Mode"
  },
  {
    title: "Leave Management",
    description: "Employee leave requests and approval workflow",
    icon: Calendar,
    href: "/leave-management",
    gradient: "from-teal-500 to-teal-600",
    features: ["Request Forms", "Approval System", "Calendar View"],
    status: "Partial"
  }
]

const publicServices = [
  {
    title: "Public Information",
    description: "General marketplace information for visitors",
    icon: Globe,
    href: "/public-info"
  },
  {
    title: "Current Prices",
    description: "Live market prices for all produce",
    icon: TrendingUp,
    href: "/price-display"
  },
  {
    title: "QR Services",
    description: "Quick access codes for farmers and customers",
    icon: QrCode,
    href: "/public-info"
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Rythu Bazaar
                </h1>
                <p className="text-lg text-muted-foreground">Digital Agricultural Marketplace</p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive management system connecting farmers, administrators, and customers 
              in a modern agricultural marketplace ecosystem
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Active Farmers</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-2xl font-bold text-success">₹2.45L</div>
              <div className="text-sm text-muted-foreground">Daily Sales</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-2xl font-bold text-warning">156/180</div>
              <div className="text-sm text-muted-foreground">Stalls Occupied</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border">
              <div className="text-2xl font-bold text-info">98%</div>
              <div className="text-sm text-muted-foreground">System Health</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Portal Access */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">Management Portals</h2>
          <p className="text-center text-muted-foreground mb-8">
            Choose your access point to the agricultural marketplace system
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`h-12 w-12 rounded-lg bg-gradient-to-r ${card.gradient} flex items-center justify-center`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant={card.status.includes("✅") ? "default" : card.status === "Active" ? "secondary" : "outline"}>
                      {card.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Features:</div>
                    <div className="flex flex-wrap gap-1">
                      {card.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link to={card.href}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Access Portal
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Public Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-4">Public Services</h2>
          <p className="text-center text-muted-foreground mb-8">
            Services available to the general public and marketplace visitors
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publicServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.href}>
                    <Button variant="outline" className="w-full">
                      Visit
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/hr-dashboard">
              <Button variant="outline" className="gap-2">
                <UserCheck className="h-4 w-4" />
                HR Dashboard
              </Button>
            </Link>
            <Link to="/reports">
              <Button variant="outline" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                View Reports
              </Button>
            </Link>
            <Link to="/mobile-view">
              <Button variant="outline" className="gap-2">
                <Smartphone className="h-4 w-4" />
                Mobile View
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="outline" className="gap-2">
                <Settings className="h-4 w-4" />
                System Settings
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
