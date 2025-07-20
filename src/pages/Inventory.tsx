import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { InventoryForm } from "@/components/forms/InventoryForm"
import { useInventory, InventoryItem } from "@/hooks/useInventory"
import { useToast } from "@/hooks/use-toast"
import { Package, Plus, Search, AlertTriangle, TrendingUp, TrendingDown, Edit, Trash2 } from "lucide-react"

const Inventory = () => {
  const { inventory, addItem, updateItem, deleteItem, getStats } = useInventory()
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<InventoryItem | undefined>()
  
  const stats = getStats()
  
  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.supplierName?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const inventoryItems = [
    { id: 1, name: "Tomatoes", category: "Vegetables", quantity: 150, unit: "kg", status: "In Stock", lastUpdated: "2024-01-15" },
    { id: 2, name: "Rice", category: "Grains", quantity: 25, unit: "kg", status: "Low Stock", lastUpdated: "2024-01-14" },
    { id: 3, name: "Apples", category: "Fruits", quantity: 80, unit: "kg", status: "In Stock", lastUpdated: "2024-01-15" },
    { id: 4, name: "Wheat", category: "Grains", quantity: 5, unit: "kg", status: "Out of Stock", lastUpdated: "2024-01-13" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return <Badge variant="default" className="bg-green-100 text-green-800">In Stock</Badge>;
      case "Low Stock":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
      case "Out of Stock":
        return <Badge variant="destructive">Out of Stock</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleAddItem = (itemData: Omit<InventoryItem, 'id' | 'lastUpdated' | 'status'>) => {
    addItem(itemData)
    setIsFormOpen(false)
    toast({
      title: "Success",
      description: "Item added successfully"
    })
  }

  const openAddForm = () => {
    setEditingItem(undefined)
    setIsFormOpen(true)
  }

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground">Track and manage marketplace inventory</p>
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={openAddForm}>
              <Plus className="h-4 w-4" />
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <InventoryForm
              item={editingItem}
              onSubmit={handleAddItem}
              onCancel={() => setIsFormOpen(false)}
              isEditing={!!editingItem}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">260</div>
            <p className="text-xs text-muted-foreground">kg in inventory</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">items need restocking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">items out of stock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">active categories</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          <TabsTrigger value="fruits">Fruits</TabsTrigger>
          <TabsTrigger value="grains">Grains</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Items</CardTitle>
              <CardDescription>Current stock levels and item details</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell>{item.quantity} {item.unit}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vegetables">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Vegetable inventory items will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fruits">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Fruit inventory items will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grains">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Grain inventory items will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </AppLayout>
  )
};

export default Inventory;