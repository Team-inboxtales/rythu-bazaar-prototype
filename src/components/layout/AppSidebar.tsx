import { useState } from "react"
import { 
  Home, 
  Users, 
  Settings, 
  BarChart3, 
  Wheat, 
  QrCode, 
  GraduationCap,
  ClipboardList,
  Monitor,
  Smartphone,
  ChevronRight,
  Sprout,
  UserCheck,
  Calendar,
  Clock,
  UserCog,
  Settings as HRSettingsIcon,
  Package
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home, category: "main" },
  { title: "Farmer Portal", url: "/farmer-portal", icon: Wheat, category: "portals" },
  { title: "Admin Portal", url: "/admin-portal", icon: Settings, category: "portals" },
  { title: "Operations", url: "/operations", icon: ClipboardList, category: "operations" },
  { title: "Inventory Management", url: "/inventory", icon: Package, category: "operations" },
  { title: "Price Management", url: "/price-display", icon: Monitor, category: "operations" },
  { title: "QR & Public Info", url: "/public-info", icon: QrCode, category: "public" },
  { title: "Reports & Analytics", url: "/reports", icon: BarChart3, category: "analytics" },
  { title: "Training Hub", url: "/training", icon: GraduationCap, category: "learning" },
  { title: "HR Dashboard", url: "/hr-dashboard", icon: UserCheck, category: "hr" },
  { title: "Employee Directory", url: "/employee-directory", icon: Users, category: "hr" },
  { title: "Leave Management", url: "/leave-management", icon: Calendar, category: "hr" },
  { title: "Attendance", url: "/attendance-overview", icon: Clock, category: "hr" },
  { title: "HR Settings", url: "/hr-settings", icon: HRSettingsIcon, category: "hr" },
  { title: "Mobile View", url: "/mobile", icon: Smartphone, category: "special" },
  { title: "System Settings", url: "/settings", icon: Settings, category: "system" },
]

const groupCategories = {
  main: "Main Dashboard",
  portals: "Access Portals",
  operations: "Operations",
  public: "Public Services", 
  analytics: "Analytics",
  learning: "Learning",
  hr: "Human Resources",
  special: "Special Views",
  system: "System"
}

export function AppSidebar() {
  const { state } = useSidebar()
  const collapsed = state === "collapsed"
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path || (path === "/dashboard" && currentPath === "/")
  
  const getNavClasses = (path: string) => cn(
    "transition-all duration-200",
    isActive(path) 
      ? "bg-primary/10 text-primary border-r-2 border-primary font-medium" 
      : "hover:bg-muted/50 text-foreground"
  )

  const groupedItems = navigationItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof navigationItems>)

  return (
    <Sidebar className={cn("border-r border-border bg-card", collapsed ? "w-16" : "w-64")} collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-primary flex items-center justify-center">
            <Sprout className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-semibold text-foreground">Rythu Bazaar</h2>
              <p className="text-xs text-muted-foreground">Digital Marketplace</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        {Object.entries(groupedItems).map(([category, items]) => (
          <SidebarGroup key={category}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-1">
                {groupCategories[category as keyof typeof groupCategories]}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavClasses(item.url)}>
                        <item.icon className={cn("h-4 w-4", !collapsed && "mr-3")} />
                        {!collapsed && (
                          <>
                            <span className="flex-1">{item.title}</span>
                            {isActive(item.url) && <ChevronRight className="h-4 w-4" />}
                          </>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}