import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Wheat, 
  TrendingUp, 
  TrendingDown,
  MapPin, 
  Calendar,
  DollarSign,
  QrCode,
  Phone,
  MessageSquare,
  Star,
  Package
} from "lucide-react"

const cropPrices = [
  { crop: "Tomato", price: "₹45/kg", change: "+15%", trend: "up", category: "Vegetables" },
  { crop: "Onion", price: "₹32/kg", change: "-8%", trend: "down", category: "Vegetables" },
  { crop: "Potato", price: "₹28/kg", change: "+5%", trend: "up", category: "Vegetables" },
  { crop: "Cauliflower", price: "₹35/kg", change: "+12%", trend: "up", category: "Vegetables" },
  { crop: "Green Chilli", price: "₹120/kg", change: "-3%", trend: "down", category: "Spices" },
  { crop: "Coriander", price: "₹180/kg", change: "+25%", trend: "up", category: "Herbs" }
]

const farmerInfo = {
  name: "Ramesh Kumar",
  farmerId: "RB2024001",
  phone: "+91 98765 43210",
  village: "Rajahmundry",
  stallNumber: "A-23",
  rating: 4.8,
  totalSales: "₹1,25,000",
  thisMonth: "₹18,500"
}

const todaysSales = [
  { item: "Tomatoes", quantity: "50 kg", amount: "₹2,250", time: "9:30 AM" },
  { item: "Onions", quantity: "30 kg", amount: "₹960", time: "10:15 AM" },
  { item: "Green Chillies", quantity: "5 kg", amount: "₹600", time: "11:00 AM" },
  { item: "Coriander", quantity: "2 kg", amount: "₹360", time: "11:45 AM" }
]

const feedback = [
  { id: 1, rating: 5, comment: "Fresh vegetables, good quality!", customer: "Anonymous", time: "2 hours ago" },
  { id: 2, rating: 4, comment: "Reasonable prices, helpful farmer", customer: "Anonymous", time: "5 hours ago" },
  { id: 3, rating: 5, comment: "Best tomatoes in the market!", customer: "Anonymous", time: "1 day ago" }
]

export default function FarmerDashboard() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Farmer Portal</h1>
            <p className="text-muted-foreground">
              Welcome {farmerInfo.name}! Manage your stall and track your sales.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <QrCode className="h-4 w-4 mr-2" />
              My QR Code
            </Button>
            <Button variant="success" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>

        {/* Farmer Info Card */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Wheat className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{farmerInfo.name}</h3>
                  <p className="text-muted-foreground">ID: {farmerInfo.farmerId}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {farmerInfo.village}
                    </span>
                    <span>Stall: {farmerInfo.stallNumber}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="font-semibold">{farmerInfo.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Sales</p>
                  <p className="font-semibold text-success">{farmerInfo.totalSales}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="font-semibold text-primary">{farmerInfo.thisMonth}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prices">Today's Prices</TabsTrigger>
            <TabsTrigger value="sales">My Sales</TabsTrigger>
            <TabsTrigger value="feedback">Customer Feedback</TabsTrigger>
            <TabsTrigger value="inventory">My Inventory</TabsTrigger>
          </TabsList>

          {/* Today's Prices */}
          <TabsContent value="prices" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Market Prices Today
                </CardTitle>
                <CardDescription>Current wholesale prices at Rythu Bazaar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cropPrices.map((crop, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{crop.crop}</h4>
                          <p className="text-xs text-muted-foreground">{crop.category}</p>
                        </div>
                        <Badge variant={crop.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                          {crop.category}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-primary">{crop.price}</span>
                        <div className={`flex items-center gap-1 text-sm ${
                          crop.trend === 'up' ? 'text-success' : 'text-destructive'
                        }`}>
                          {crop.trend === 'up' ? 
                            <TrendingUp className="h-3 w-3" /> : 
                            <TrendingDown className="h-3 w-3" />
                          }
                          <span>{crop.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Sales */}
          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-soft">
                <CardHeader>
                  <CardTitle>Today's Sales</CardTitle>
                  <CardDescription>Your transactions for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {todaysSales.map((sale, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-medium">{sale.item}</p>
                          <p className="text-sm text-muted-foreground">{sale.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-success">{sale.amount}</p>
                          <p className="text-xs text-muted-foreground">{sale.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Add Manual Sale
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">Today's Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Total Sales</span>
                          <span className="font-semibold">₹4,170</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Target: ₹5,000</span>
                          <span>83%</span>
                        </div>
                        <Progress value={83} className="h-2 mt-2" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Items Sold</p>
                        <p className="text-2xl font-bold text-foreground">87 kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Transactions</p>
                        <p className="text-2xl font-bold text-foreground">4</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Customer Feedback */}
          <TabsContent value="feedback" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Customer Feedback
                </CardTitle>
                <CardDescription>What customers are saying about your stall</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedback.map((review) => (
                    <div key={review.id} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.time}</span>
                      </div>
                      <p className="text-sm mb-1">"{review.comment}"</p>
                      <p className="text-xs text-muted-foreground">- {review.customer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Inventory */}
          <TabsContent value="inventory" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Current Inventory
                </CardTitle>
                <CardDescription>Track your stock levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Inventory Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Keep track of your produce, quantities, and stock levels
                  </p>
                  <Button variant="accent">
                    Add Inventory Items
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}