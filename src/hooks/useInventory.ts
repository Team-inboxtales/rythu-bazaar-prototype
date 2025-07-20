import { useLocalStorage } from './useLocalStorage'

export interface InventoryItem {
  id: number
  name: string
  category: 'vegetables' | 'fruits' | 'grains' | 'others'
  quantity: number
  unit: string
  price: number
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
  lastUpdated: string
  supplierId?: number
  supplierName?: string
  expiryDate?: string
  minStockLevel?: number
}

const initialInventory: InventoryItem[] = [
  {
    id: 1,
    name: "Tomatoes",
    category: "vegetables",
    quantity: 150,
    unit: "kg",
    price: 45,
    status: "in-stock",
    lastUpdated: "2024-01-20",
    supplierName: "Local Farm Co-op",
    minStockLevel: 50
  },
  {
    id: 2,
    name: "Rice",
    category: "grains",
    quantity: 25,
    unit: "kg",
    price: 65,
    status: "low-stock",
    lastUpdated: "2024-01-19",
    supplierName: "Andhra Rice Mills",
    minStockLevel: 100
  },
  {
    id: 3,
    name: "Bananas",
    category: "fruits",
    quantity: 0,
    unit: "dozen",
    price: 30,
    status: "out-of-stock",
    lastUpdated: "2024-01-18",
    supplierName: "Tropical Fruits Ltd",
    minStockLevel: 20
  },
  {
    id: 4,
    name: "Onions",
    category: "vegetables",
    quantity: 200,
    unit: "kg",
    price: 35,
    status: "in-stock",
    lastUpdated: "2024-01-20",
    supplierName: "Vegetable Co-op",
    minStockLevel: 75
  }
]

export function useInventory() {
  const [inventory, setInventory] = useLocalStorage<InventoryItem[]>('inventory', initialInventory)

  const addItem = (itemData: Omit<InventoryItem, 'id' | 'lastUpdated' | 'status'>) => {
    const newItem = {
      ...itemData,
      id: Math.max(...inventory.map(i => i.id), 0) + 1,
      lastUpdated: new Date().toISOString().split('T')[0],
      status: determineStatus(itemData.quantity, itemData.minStockLevel)
    }
    setInventory(prev => [...prev, newItem])
    return newItem
  }

  const updateItem = (id: number, itemData: Partial<InventoryItem>) => {
    setInventory(prev => 
      prev.map(item => {
        if (item.id === id) {
          const updatedItem = { 
            ...item, 
            ...itemData, 
            lastUpdated: new Date().toISOString().split('T')[0] 
          }
          updatedItem.status = determineStatus(
            updatedItem.quantity, 
            updatedItem.minStockLevel
          )
          return updatedItem
        }
        return item
      })
    )
  }

  const deleteItem = (id: number) => {
    setInventory(prev => prev.filter(item => item.id !== id))
  }

  const getItem = (id: number) => {
    return inventory.find(item => item.id === id)
  }

  const determineStatus = (quantity: number, minStockLevel?: number): InventoryItem['status'] => {
    if (quantity === 0) return 'out-of-stock'
    if (minStockLevel && quantity <= minStockLevel) return 'low-stock'
    return 'in-stock'
  }

  const getStats = () => {
    const total = inventory.length
    const inStock = inventory.filter(item => item.status === 'in-stock').length
    const lowStock = inventory.filter(item => item.status === 'low-stock').length
    const outOfStock = inventory.filter(item => item.status === 'out-of-stock').length
    const categories = [...new Set(inventory.map(item => item.category))].length

    return {
      total,
      inStock,
      lowStock,
      outOfStock,
      categories
    }
  }

  return {
    inventory,
    addItem,
    updateItem,
    deleteItem,
    getItem,
    getStats
  }
}