import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sprout, Globe, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"
import heroImage from "@/assets/hero-agriculture.jpg"

export default function Login() {
  const [language, setLanguage] = useState("en")
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40" />
          <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-4">
                Digital Rythu Bazaar
              </h1>
              <p className="text-xl mb-6">
                Transforming agricultural marketplaces with technology for better farmer livelihoods
              </p>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4" />
                <span>Government of Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <Sprout className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
              <p className="text-muted-foreground mt-2">
                Sign in to your Rythu Bazaar account
              </p>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="te">తెలుగు</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Login Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Login to Dashboard</CardTitle>
              <CardDescription>
                Enter your credentials to access the agricultural marketplace management system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or User ID</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="admin@rythubazaar.gov.in"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <div className="space-y-3">
            <p className="text-center text-sm text-muted-foreground">Quick Access</p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm" onClick={() => navigate("/farmer")}>
                Farmer Portal
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate("/public-info")}>
                Public Info
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground space-y-1">
            <p>© 2024 Government of Andhra Pradesh</p>
            <p>Department of Agriculture & Cooperation</p>
          </div>
        </div>
      </div>
    </div>
  )
}