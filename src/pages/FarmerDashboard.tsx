
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, Phone } from "lucide-react"
import { FarmerInfoCard } from "@/components/farmer/FarmerInfoCard"
import { SalesTracker } from "@/components/farmer/SalesTracker"
import { MarketPrices } from "@/components/farmer/MarketPrices"
import { CustomerFeedback } from "@/components/farmer/CustomerFeedback"
import { InventoryManager } from "@/components/farmer/InventoryManager"

// Sample data
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

const cropPrices = [
  { crop: "Tomato", price: "₹45/kg", change: "+15%", trend: "up" as const, category: "Vegetables" },
  { crop: "Onion", price: "₹32/kg", change: "-8%", trend: "down" as const, category: "Vegetables" },
  { crop: "Potato", price: "₹28/kg", change: "+5%", trend: "up" as const, category: "Vegetables" },
  { crop: "Cauliflower", price: "₹35/kg", change: "+12%", trend: "up" as const, category: "Vegetables" },
  { crop: "Green Chilli", price: "₹120/kg", change: "-3%", trend: "down" as const, category: "Spices" },
  { crop: "Coriander", price: "₹180/kg", change: "+25%", trend: "up" as const, category: "Herbs" }
]

const feedback = [
  { id: 1, rating: 5, comment: "Fresh vegetables, excellent quality!", customer: "Anonymous", time: "2 hours ago" },
  { id: 2, rating: 4, comment: "Reasonable prices, very helpful", customer: "Anonymous", time: "5 hours ago" },
  { id: 3, rating: 5, comment: "Best tomatoes in the market!", customer: "Anonymous", time: "1 day ago" }
]

const inventory = [
  { name: "Tomatoes", quantity: 45, unit: "kg", status: "good" as const, price: "₹45/kg" },
  { name: "Onions", quantity: 8, unit: "kg", status: "low" as const, price: "₹32/kg" },
  { name: "Green Chillies", quantity: 0, unit: "kg", status: "out" as const, price: "₹120/kg" },
  { name: "Coriander", quantity: 25, unit: "kg", status: "good" as const, price: "₹180/kg" }
]

export default function FarmerDashboard() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome {farmerInfo.name}! Manage your stall and track your business.
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
        <FarmerInfoCard farmer={farmerInfo} />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="prices">Market Prices</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <SalesTracker 
              sales={todaysSales}
              todayTotal="₹4,170"
              target="₹5,000"
              progress={83}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MarketPrices prices={cropPrices.slice(0, 3)} />
              <CustomerFeedback feedback={feedback.slice(0, 2)} />
            </div>
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <SalesTracker 
              sales={todaysSales}
              todayTotal="₹4,170"
              target="₹5,000"
              progress={83}
            />
          </TabsContent>

          <TabsContent value="prices" className="space-y-6">
            <MarketPrices prices={cropPrices} />
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <CustomerFeedback feedback={feedback} />
          </TabsContent>

          <TabsContent value="inventory" className="space-y-6">
            <InventoryManager inventory={inventory} />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
