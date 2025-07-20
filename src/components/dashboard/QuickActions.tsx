
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Wheat, MapPin, Smartphone } from "lucide-react"

export function QuickActions() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          <Button variant="outline" className="justify-start">
            <Users className="h-4 w-4 mr-2" />
            Register New Farmer
          </Button>
          <Button variant="outline" className="justify-start">
            <Wheat className="h-4 w-4 mr-2" />
            Update Crop Prices
          </Button>
          <Button variant="outline" className="justify-start">
            <MapPin className="h-4 w-4 mr-2" />
            Allocate Stall
          </Button>
          <Button variant="outline" className="justify-start">
            <Smartphone className="h-4 w-4 mr-2" />
            Send SMS Updates
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
