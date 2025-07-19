import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Download,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity
} from "lucide-react"

const salesData = [
  { month: "Jan", revenue: 125000, farmers: 45, transactions: 1200 },
  { month: "Feb", revenue: 145000, farmers: 52, transactions: 1350 },
  { month: "Mar", revenue: 165000, farmers: 58, transactions: 1580 },
  { month: "Apr", revenue: 155000, farmers: 61, transactions: 1420 },
  { month: "May", revenue: 185000, farmers: 65, transactions: 1650 },
  { month: "Jun", revenue: 195000, farmers: 68, transactions: 1720 }
]

const topProducts = [
  { product: "Tomatoes", sales: "₹45,000", percentage: "22%" },
  { product: "Onions", sales: "₹38,000", percentage: "18%" },
  { product: "Potatoes", sales: "₹32,000", percentage: "15%" },
  { product: "Green Vegetables", sales: "₹28,000", percentage: "14%" },
  { product: "Others", sales: "₹62,000", percentage: "31%" }
]

const reportTypes = [
  {
    title: "Daily Sales Report",
    description: "Comprehensive daily transaction summary",
    icon: FileText,
    frequency: "Daily",
    lastGenerated: "Today, 6:00 PM"
  },
  {
    title: "Farmer Performance",
    description: "Individual farmer sales and ratings",
    icon: Users,
    frequency: "Weekly",
    lastGenerated: "Monday"
  },
  {
    title: "Revenue Analytics",
    description: "Monthly revenue trends and analysis",
    icon: TrendingUp,
    frequency: "Monthly",
    lastGenerated: "1st June"
  },
  {
    title: "Inventory Summary",
    description: "Stock levels and product availability",
    icon: Activity,
    frequency: "Weekly",
    lastGenerated: "Monday"
  }
]

export default function Reports() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground">
              Comprehensive insights and data analysis for informed decision making
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button variant="success" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales Analysis</TabsTrigger>
            <TabsTrigger value="farmers">Farmer Reports</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold text-foreground">₹12,45,000</p>
                      <p className="text-sm text-success">+15% from last month</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Farmers</p>
                      <p className="text-2xl font-bold text-foreground">68</p>
                      <p className="text-sm text-success">+8 new this month</p>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Daily Transactions</p>
                      <p className="text-2xl font-bold text-foreground">156</p>
                      <p className="text-sm text-success">+12% avg daily</p>
                    </div>
                    <Activity className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Stall Occupancy</p>
                      <p className="text-2xl font-bold text-foreground">87%</p>
                      <p className="text-sm text-muted-foreground">156/180 stalls</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-info" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Revenue Trend (6 Months)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2 p-4">
                    {salesData.map((month, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="bg-gradient-primary rounded-t w-8"
                          style={{ height: `${(month.revenue / 200000) * 200}px` }}
                        />
                        <p className="text-xs mt-2 text-muted-foreground">{month.month}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Top Selling Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full bg-primary"
                            style={{ opacity: 1 - (index * 0.15) }}
                          />
                          <span className="font-medium">{product.product}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{product.sales}</p>
                          <p className="text-sm text-muted-foreground">{product.percentage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sales Analysis */}
          <TabsContent value="sales" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Sales Performance Analysis</CardTitle>
                <CardDescription>Detailed breakdown of sales metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Advanced Sales Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive charts and detailed sales breakdowns coming soon
                  </p>
                  <Button variant="accent">
                    Generate Sales Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Farmer Reports */}
          <TabsContent value="farmers" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Farmer Performance Reports</CardTitle>
                <CardDescription>Individual farmer analytics and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Farmer Analytics Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Track individual farmer performance, sales, and customer ratings
                  </p>
                  <Button variant="accent">
                    View Farmer Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Custom Reports */}
          <TabsContent value="custom" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportTypes.map((report, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <report.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{report.title}</h4>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Frequency:</span>
                        <Badge variant="secondary">{report.frequency}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Generated:</span>
                        <span className="text-muted-foreground">{report.lastGenerated}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        Generate New
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}