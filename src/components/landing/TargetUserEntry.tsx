
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wheat, UserCog, Eye, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const userTypes = [
  {
    icon: Wheat,
    title: "I'm a Farmer",
    description: "Access your stall management, sales tracking, and customer feedback tools",
    href: "/farmer-portal",
    gradient: "from-green-500 to-green-600",
    features: ["Stall Management", "Sales Analytics", "Customer Feedback"]
  },
  {
    icon: UserCog,
    title: "I'm an Officer/Admin", 
    description: "Manage marketplace operations, employees, and system administration",
    href: "/admin-portal",
    gradient: "from-blue-500 to-blue-600", 
    features: ["Employee Management", "Operations Control", "System Settings"]
  },
  {
    icon: Eye,
    title: "Just Browsing",
    description: "View public information, current prices, tutorials, and market gallery",
    href: "/public-info",
    gradient: "from-purple-500 to-purple-600",
    features: ["Live Pricing", "Market Info", "Tutorials"]
  }
]

export function TargetUserEntry() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Different access points tailored for farmers, administrators, and visitors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {userTypes.map((userType, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-card h-full">
              <CardHeader className="text-center pb-4">
                <div className={`h-20 w-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${userType.gradient} flex items-center justify-center shadow-medium group-hover:shadow-strong group-hover:scale-105 transition-all`}>
                  <userType.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{userType.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {userType.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Key Features:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {userType.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-muted text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={userType.href} className="block">
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
