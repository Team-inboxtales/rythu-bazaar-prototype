import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, QrCode, DollarSign, Star, MapPin } from "lucide-react"

const mockPrices = [
  { crop: "Tomato", price: "₹45/kg", change: "+15%" },
  { crop: "Onion", price: "₹32/kg", change: "-8%" },
  { crop: "Potato", price: "₹28/kg", change: "+5%" }
]

export default function MobileView() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mobile Experience Preview</h1>
          <p className="text-muted-foreground">How the app appears on mobile devices</p>
        </div>

        <div className="flex justify-center">
          <div className="w-80 bg-card border-8 border-muted rounded-3xl shadow-strong p-4">
            {/* Mobile App UI */}
            <div className="space-y-4">
              <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg text-center">
                <h2 className="text-xl font-bold">Rythu Bazaar</h2>
                <p className="text-sm opacity-90">Live Market Prices</p>
              </div>
              
              <div className="space-y-2">
                {mockPrices.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded">
                    <span className="font-medium">{item.crop}</span>
                    <div className="text-right">
                      <p className="font-bold text-primary">{item.price}</p>
                      <Badge variant="outline" className="text-xs">{item.change}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="accent" className="w-full">
                <QrCode className="h-4 w-4 mr-2" />
                Scan for Feedback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}