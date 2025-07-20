
import { HeroSection } from "@/components/landing/HeroSection"
import { KeyHighlights } from "@/components/landing/KeyHighlights" 
import { TargetUserEntry } from "@/components/landing/TargetUserEntry"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KeyHighlights />
      <TargetUserEntry />
    </div>
  )
}
