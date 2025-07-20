import { useLocation, Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/employee-directory': 'Employee Directory',
  '/inventory': 'Inventory Management',
  '/leave-management': 'Leave Management',
  '/training': 'Training Hub',
  '/farmer': 'Farmer Dashboard',
  '/farmer-portal': 'Farmer Portal',
  '/admin-portal': 'Admin Portal',
  '/public-info': 'Public Information',
  '/price-display': 'Price Display',
  '/reports': 'Reports',
  '/hr-dashboard': 'HR Dashboard',
  '/hr-settings': 'HR Settings',
  '/attendance-overview': 'Attendance Overview',
  '/operations': 'Operations',
  '/settings': 'Settings',
  '/mobile-view': 'Mobile View'
}

export function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (location.pathname === '/') {
    return null
  }

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground px-4 py-2 border-b bg-muted/30">
      <Link 
        to="/" 
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const label = routeLabels[routeTo] || pathname.charAt(0).toUpperCase() + pathname.slice(1)

        return (
          <div key={routeTo} className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="font-medium text-foreground">{label}</span>
            ) : (
              <Link 
                to={routeTo}
                className="hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}