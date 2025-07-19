import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wheat, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Bell,
  BarChart3,
  GraduationCap,
  QrCode,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const FarmerPortal = () => {
  const marketPrices = [
    { crop: "Tomatoes", price: "₹45/kg", change: "+5%", trend: "up" },
    { crop: "Rice", price: "₹35/kg", change: "-2%", trend: "down" },
    { crop: "Wheat", price: "₹28/kg", change: "+3%", trend: "up" },
    { crop: "Onions", price: "₹22/kg", change: "+8%", trend: "up" },
  ];

  const announcements = [
    { title: "New Subsidies Available", time: "2 hours ago", type: "policy" },
    { title: "Weather Alert: Heavy Rain Expected", time: "5 hours ago", type: "weather" },
    { title: "Market Day Schedule Updated", time: "1 day ago", type: "market" },
  ];

  const quickActions = [
    { title: "View Current Prices", icon: DollarSign, link: "/price-display", description: "Check latest market rates" },
    { title: "Training Resources", icon: GraduationCap, link: "/training", description: "Agricultural learning materials" },
    { title: "QR & Public Info", icon: QrCode, link: "/public-info", description: "Access public information" },
    { title: "Market Reports", icon: BarChart3, link: "/reports", description: "View market analytics" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-3">
          <Wheat className="h-10 w-10 text-primary" />
          Farmer Portal
        </h1>
        <p className="text-lg text-muted-foreground">Your gateway to agricultural resources and market information</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Avg Price</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹32.5/kg</div>
            <p className="text-xs text-muted-foreground">+5% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Crops</CardTitle>
            <Wheat className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">varieties available</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Status</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Open</div>
            <p className="text-xs text-muted-foreground">Closes at 6 PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weather</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28°C</div>
            <p className="text-xs text-muted-foreground">Partly cloudy</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="prices">Live Prices</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link to={action.link}>
                  <CardHeader className="text-center">
                    <action.icon className="h-12 w-12 mx-auto text-primary mb-2" />
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Access Now
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="prices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Market Prices</CardTitle>
              <CardDescription>Live rates updated every hour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketPrices.map((price, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wheat className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">{price.crop}</h3>
                        <p className="text-sm text-muted-foreground">Per kilogram</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{price.price}</div>
                      <Badge variant={price.trend === "up" ? "default" : "secondary"} className={price.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {price.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/price-display">
                  <Button className="w-full">View All Prices</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Latest Announcements
              </CardTitle>
              <CardDescription>Important updates and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{announcement.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{announcement.time}</span>
                        <Badge variant="outline" className="text-xs">{announcement.type}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Training Materials
                </CardTitle>
                <CardDescription>Learn modern farming techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Organic Farming Practices</li>
                  <li>• Crop Rotation Techniques</li>
                  <li>• Pest Management</li>
                  <li>• Water Conservation</li>
                </ul>
                <Link to="/training">
                  <Button className="w-full mt-4" variant="outline">Access Training</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Public Information
                </CardTitle>
                <CardDescription>Government schemes and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Subsidy Information</li>
                  <li>• Weather Updates</li>
                  <li>• Market Schedules</li>
                  <li>• Contact Directory</li>
                </ul>
                <Link to="/public-info">
                  <Button className="w-full mt-4" variant="outline">View Information</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FarmerPortal;