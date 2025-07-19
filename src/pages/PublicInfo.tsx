import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Cloud, 
  Thermometer, 
  Droplets, 
  Wind,
  Sun,
  QrCode,
  Star,
  Clock,
  MapPin,
  Calendar,
  TrendingUp,
  TrendingDown,
  MessageSquare
} from "lucide-react"

const weatherData = {
  location: "Visakhapatnam",
  temperature: "28°C",
  condition: "Partly Cloudy",
  humidity: "72%",
  windSpeed: "12 km/h",
  forecast: [
    { day: "Today", high: "30°C", low: "24°C", condition: "sunny" },
    { day: "Tomorrow", high: "32°C", low: "25°C", condition: "cloudy" },
    { day: "Friday", high: "29°C", low: "23°C", condition: "rainy" }
  ]
}

const marketPrices = [
  { crop: "Tomato", price: "₹45/kg", change: "+15%", trend: "up" },
  { crop: "Onion", price: "₹32/kg", change: "-8%", trend: "down" },
  { crop: "Potato", price: "₹28/kg", change: "+5%", trend: "up" },
  { crop: "Cauliflower", price: "₹35/kg", change: "+12%", trend: "up" },
  { crop: "Green Chilli", price: "₹120/kg", change: "-3%", trend: "down" },
  { crop: "Coriander", price: "₹180/kg", change: "+25%", trend: "up" }
]

const marketInfo = {
  timing: "6:00 AM - 6:00 PM",
  totalStalls: 180,
  occupiedStalls: 156,
  parkingAvailable: "Yes",
  facilities: ["Clean Toilets", "Drinking Water", "Security", "Banking Services"]
}

const notifications = [
  {
    id: 1,
    title: "Market Closed Tomorrow",
    message: "Rythu Bazaar will be closed on Friday due to maintenance work",
    time: "2 hours ago",
    priority: "high"
  },
  {
    id: 2,
    title: "New Farmer Registration",
    message: "Online registration for new farmers now available",
    time: "1 day ago",
    priority: "medium"
  }
]

export default function PublicInfo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Rythu Bazaar Visakhapatnam</h1>
            <p className="text-xl opacity-90">Fresh • Affordable • Direct from Farmers</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                MVP Colony, Visakhapatnam
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-primary-foreground">
                <Clock className="h-3 w-3 mr-1" />
                Open Today: 6 AM - 6 PM
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="accent" size="lg" className="h-auto p-6 flex-col gap-2">
            <QrCode className="h-8 w-8" />
            <div className="text-center">
              <p className="font-semibold">Scan QR for Feedback</p>
              <p className="text-sm opacity-90">Rate your shopping experience</p>
            </div>
          </Button>
          <Button variant="outline" size="lg" className="h-auto p-6 flex-col gap-2">
            <MessageSquare className="h-8 w-8" />
            <div className="text-center">
              <p className="font-semibold">Submit Complaint</p>
              <p className="text-sm text-muted-foreground">Report any issues</p>
            </div>
          </Button>
          <Button variant="outline" size="lg" className="h-auto p-6 flex-col gap-2">
            <Calendar className="h-8 w-8" />
            <div className="text-center">
              <p className="font-semibold">Market Schedule</p>
              <p className="text-sm text-muted-foreground">View opening hours</p>
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Prices */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Today's Market Prices</CardTitle>
                <CardDescription className="text-center">
                  Updated every hour • Last updated: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {marketPrices.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                      <div>
                        <h4 className="font-semibold text-lg">{item.crop}</h4>
                        <p className="text-2xl font-bold text-primary">{item.price}</p>
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${
                        item.trend === 'up' ? 'text-success' : 'text-destructive'
                      }`}>
                        {item.trend === 'up' ? 
                          <TrendingUp className="h-4 w-4" /> : 
                          <TrendingDown className="h-4 w-4" />
                        }
                        <span className="font-medium">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Information */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Market Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Operating Hours</h4>
                    <p className="text-lg text-primary font-semibold">{marketInfo.timing}</p>
                    <p className="text-sm text-muted-foreground mt-1">All days of the week</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Stall Availability</h4>
                    <p className="text-lg">
                      <span className="text-success font-semibold">{marketInfo.occupiedStalls}</span>
                      <span className="text-muted-foreground">/{marketInfo.totalStalls} occupied</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">87% capacity</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">Facilities Available</h4>
                    <div className="flex flex-wrap gap-2">
                      {marketInfo.facilities.map((facility, index) => (
                        <Badge key={index} variant="secondary">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Weather */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-5 w-5" />
                  Weather Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-primary">{weatherData.temperature}</p>
                  <p className="text-muted-foreground">{weatherData.condition}</p>
                  <p className="text-sm text-muted-foreground">{weatherData.location}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-info" />
                    <span>Humidity: {weatherData.humidity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-muted-foreground" />
                    <span>Wind: {weatherData.windSpeed}</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h5 className="font-medium">3-Day Forecast</h5>
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{day.day}</span>
                      <span>{day.high}/{day.low}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Important Notices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notice) => (
                    <div key={notice.id} className={`p-3 rounded-lg border-l-4 ${
                      notice.priority === 'high' ? 'border-l-destructive bg-destructive/5' :
                      notice.priority === 'medium' ? 'border-l-warning bg-warning/5' :
                      'border-l-info bg-info/5'
                    }`}>
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-medium text-sm">{notice.title}</h5>
                        <Badge variant={
                          notice.priority === 'high' ? 'destructive' :
                          notice.priority === 'medium' ? 'default' : 'secondary'
                        } className="text-xs">
                          {notice.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{notice.message}</p>
                      <p className="text-xs text-muted-foreground">{notice.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">Market Manager</p>
                  <p className="text-sm text-muted-foreground">+91 891 234 5678</p>
                </div>
                <div>
                  <p className="font-medium">Emergency</p>
                  <p className="text-sm text-muted-foreground">+91 891 234 5679</p>
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">
                    MVP Colony, Sector 7<br />
                    Visakhapatnam, Andhra Pradesh 530017
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2024 Government of Andhra Pradesh • Department of Agriculture & Cooperation
            </p>
            <p className="text-xs text-muted-foreground">
              Digital Rythu Bazaar Initiative • Building Better Agricultural Markets
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}