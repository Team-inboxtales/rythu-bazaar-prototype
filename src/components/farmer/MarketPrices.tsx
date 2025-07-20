
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"

interface CropPrice {
  crop: string
  price: string
  change: string
  trend: "up" | "down"
  category: string
}

interface MarketPricesProps {
  prices: CropPrice[]
}

export function MarketPrices({ prices }: MarketPricesProps) {
  return (
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
          {prices.map((crop, index) => (
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
  )
}
