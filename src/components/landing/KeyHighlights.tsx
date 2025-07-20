
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Shield, BarChart3 } from "lucide-react"

const highlights = [
  {
    icon: Settings,
    title: "What We Do",
    description: "Digitizing Stall Management, Pricing, HR & More",
    details: "Complete digital transformation of traditional marketplace operations with modern tools and workflows."
  },
  {
    icon: Shield, 
    title: "Smart & Secure",
    description: "AI Insights, QR Feedback, Zero-Trust Security",
    details: "Advanced technology stack with intelligent analytics and enterprise-grade security protocols."
  },
  {
    icon: BarChart3,
    title: "Transparency",
    description: "Live Pricing Boards, Open Data Access",
    details: "Real-time market data and transparent operations accessible to all stakeholders."
  }
]

export function KeyHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for the modern agricultural ecosystem with cutting-edge technology and farmer-first approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-medium group-hover:shadow-strong transition-shadow">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{highlight.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
