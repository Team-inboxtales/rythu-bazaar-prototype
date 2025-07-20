
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wheat, MapPin, Star, Phone } from "lucide-react"

interface FarmerInfoProps {
  farmer: {
    name: string
    farmerId: string
    phone: string
    village: string
    stallNumber: string
    rating: number
    totalSales: string
    thisMonth: string
  }
}

export function FarmerInfoCard({ farmer }: FarmerInfoProps) {
  return (
    <Card className="shadow-soft">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <Wheat className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{farmer.name}</h3>
              <p className="text-muted-foreground">ID: {farmer.farmerId}</p>
              <div className="flex items-center gap-4 mt-1 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {farmer.village}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {farmer.phone}
                </span>
                <Badge variant="outline">Stall: {farmer.stallNumber}</Badge>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Rating</p>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 text-warning fill-current" />
                <span className="font-semibold">{farmer.rating}</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Sales</p>
              <p className="font-semibold text-success">{farmer.totalSales}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="font-semibold text-primary">{farmer.thisMonth}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
