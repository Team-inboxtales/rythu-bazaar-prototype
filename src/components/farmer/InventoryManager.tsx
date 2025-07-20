
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Plus, AlertTriangle } from "lucide-react"

interface InventoryItem {
  name: string
  quantity: number
  unit: string
  status: "good" | "low" | "out"
  price: string
}

interface InventoryManagerProps {
  inventory: InventoryItem[]
}

export function InventoryManager({ inventory }: InventoryManagerProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "default"
      case "low": return "warning"
      case "out": return "destructive"
      default: return "secondary"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "good": return "In Stock"
      case "low": return "Low Stock"
      case "out": return "Out of Stock"
      default: return "Unknown"
    }
  }

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Current Inventory
        </CardTitle>
        <CardDescription>Track your stock levels and manage inventory</CardDescription>
      </CardHeader>
      <CardContent>
        {inventory.length > 0 ? (
          <div className="space-y-4">
            {inventory.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                <div className="flex items-center gap-3">
                  <Package className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} {item.unit} • {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.status === "low" && <AlertTriangle className="h-4 w-4 text-warning" />}
                  <Badge variant={getStatusColor(item.status)}>
                    {getStatusText(item.status)}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add New Item
            </Button>
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Inventory Items</h3>
            <p className="text-muted-foreground mb-4">
              Start tracking your produce by adding inventory items
            </p>
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-2" />
              Add First Item
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
