
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sprout, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,183,77,0.2),transparent_50%)] opacity-40" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Stats Badge */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <TrendingUp className="h-4 w-4 mr-2" />
            120+ Rythu Bazaars Digitized
          </Badge>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
              <Sprout className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Rythu Bazaar
              </h1>
              <p className="text-xl text-muted-foreground">Digital Agricultural Marketplace</p>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Empowering Farmers, <span className="text-primary">Digitally.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital transformation for agricultural marketplaces. 
            Connecting farmers, administrators, and customers in a modern, 
            transparent, and efficient ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/farmer-portal">
              <Button size="xl" variant="hero" className="min-w-[200px]">
                Explore Farmer Portal
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="xl" variant="outline" className="min-w-[200px]">
                Login to Your Market
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">1,247</div>
              <div className="text-sm text-muted-foreground">Active Farmers</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-success mb-1">₹2.45L</div>
              <div className="text-sm text-muted-foreground">Daily Sales</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-warning mb-1">156/180</div>
              <div className="text-sm text-muted-foreground">Stalls Occupied</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-info mb-1">98%</div>
              <div className="text-sm text-muted-foreground">System Health</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
