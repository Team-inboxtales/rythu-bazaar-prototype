import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Monitor, 
  Edit3, 
  Save,
  RefreshCw,
  Eye,
  Settings,
  Smartphone,
  Tv,
  DollarSign
} from "lucide-react"

const currentPrices = [
  { id: 1, crop: "Tomato", price: "45", unit: "kg", change: "+15%", lastUpdated: "10 mins ago" },
  { id: 2, crop: "Onion", price: "32", unit: "kg", change: "-8%", lastUpdated: "10 mins ago" },
  { id: 3, crop: "Potato", price: "28", unit: "kg", change: "+5%", lastUpdated: "10 mins ago" },
  { id: 4, crop: "Cauliflower", price: "35", unit: "kg", change: "+12%", lastUpdated: "10 mins ago" },
  { id: 5, crop: "Green Chilli", price: "120", unit: "kg", change: "-3%", lastUpdated: "10 mins ago" },
  { id: 6, crop: "Coriander", price: "180", unit: "kg", change: "+25%", lastUpdated: "10 mins ago" }
]

const displayBoards = [
  { id: 1, name: "Main Entrance Board", location: "Gate 1", status: "online", type: "LED", resolution: "1920x1080" },
  { id: 2, name: "Central Display", location: "Center", status: "online", type: "LCD", resolution: "1366x768" },
  { id: 3, name: "Exit Board", location: "Gate 2", status: "offline", type: "LED", resolution: "1920x1080" },
  { id: 4, name: "Mobile App", location: "Digital", status: "online", type: "App", resolution: "responsive" }
]

export default function PriceDisplay() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Price Display Management</h1>
            <p className="text-muted-foreground">
              Control digital price boards and displays across the market
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview Display
            </Button>
            <Button variant="success" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Update All Boards
            </Button>
          </div>
        </div>

        {/* Display Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayBoards.map((board) => (
            <Card key={board.id} className="shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {board.type === 'App' ? <Smartphone className="h-4 w-4" /> : 
                     board.type === 'LED' ? <Tv className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
                    <h4 className="font-medium text-sm">{board.name}</h4>
                  </div>
                  <Badge variant={board.status === 'online' ? 'default' : 'destructive'}>
                    {board.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{board.location}</p>
                <p className="text-xs text-muted-foreground">{board.resolution}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Price Management */}
          <Card className="lg:col-span-2 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Current Market Prices
              </CardTitle>
              <CardDescription>Edit and update prices for display boards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentPrices.map((item) => (
                  <div key={item.id} className="p-4 rounded-lg border bg-card/50">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <p className="font-medium">{item.crop}</p>
                        <p className="text-xs text-muted-foreground">Last updated: {item.lastUpdated}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">₹</span>
                        <Input 
                          value={item.price} 
                          className="w-20" 
                          type="number"
                        />
                        <span className="text-sm text-muted-foreground">/{item.unit}</span>
                      </div>
                      <div className="text-center">
                        <Badge variant={item.change.startsWith('+') ? 'default' : 'secondary'}>
                          {item.change}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit3 className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="default">
                          <Save className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="accent" className="flex-1">
                  Save All Changes
                </Button>
                <Button variant="outline">
                  Add New Item
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Display Controls */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Display Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Update Frequency</Label>
                  <Select defaultValue="auto">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto (5 minutes)</SelectItem>
                      <SelectItem value="manual">Manual Only</SelectItem>
                      <SelectItem value="hourly">Every Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Display Language</Label>
                  <Select defaultValue="bilingual">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English Only</SelectItem>
                      <SelectItem value="telugu">Telugu Only</SelectItem>
                      <SelectItem value="bilingual">English + Telugu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Display Mode</Label>
                  <Select defaultValue="prices">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prices">Prices Only</SelectItem>
                      <SelectItem value="with-weather">Prices + Weather</SelectItem>
                      <SelectItem value="full">Full Information</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" className="w-full">
                  Apply Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh All Displays
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Monitor className="h-4 w-4 mr-2" />
                  Test Display Connection
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Layout
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Display Diagnostics
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Network Connection</span>
                    <Badge variant="default">Connected</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Update</span>
                    <span className="text-sm text-muted-foreground">10 mins ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Displays</span>
                    <span className="text-sm font-medium">3/4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Server Status</span>
                    <Badge variant="default">Online</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Preview Section */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Display Preview</CardTitle>
            <CardDescription>How the price board will appear to customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">RYTHU BAZAAR</h2>
                <p className="text-lg opacity-90">Today's Market Prices</p>
                <p className="text-sm opacity-80">Updated: {new Date().toLocaleTimeString('en-IN')}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentPrices.slice(0, 6).map((item) => (
                  <div key={item.id} className="bg-white/10 rounded p-3 text-center">
                    <p className="font-semibold">{item.crop}</p>
                    <p className="text-xl font-bold">₹{item.price}/{item.unit}</p>
                    <p className="text-sm opacity-80">{item.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}