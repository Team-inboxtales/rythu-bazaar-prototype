import { useState } from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { FeedbackForm } from "@/components/feedback/FeedbackForm"
import { QRScannerService, ScanResult } from "@/services/qrScanner"
import { useToast } from "@/hooks/use-toast"
import { 
  Smartphone, 
  QrCode, 
  DollarSign, 
  Star, 
  MapPin, 
  Camera,
  CheckCircle,
  AlertCircle
} from "lucide-react"

const mockPrices = [
  { crop: "Tomato", price: "₹45/kg", change: "+15%" },
  { crop: "Onion", price: "₹32/kg", change: "-8%" },
  { crop: "Potato", price: "₹28/kg", change: "+5%" }
]

interface FeedbackData {
  rating: number
  category: string
  comment: string
  stallId: string
  farmerId: string
  timestamp: string
}

export default function MobileView() {
  const [isScanning, setIsScanning] = useState(false)
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [stallInfo, setStallInfo] = useState<{
    stallId: string
    farmerId: string
    farmerName?: string
  } | null>(null)
  const { toast } = useToast()

  const handleScanQR = async () => {
    setIsScanning(true)
    
    try {
      toast({
        title: "Starting Scanner",
        description: "Position the QR code in front of your camera",
      })

      const result: ScanResult | null = await QRScannerService.startScan()
      
      if (result) {
        const parsedQR = QRScannerService.parseFeedbackQR(result.text)
        
        if (parsedQR && parsedQR.type === 'feedback') {
          setStallInfo({
            stallId: parsedQR.stallId || 'Unknown',
            farmerId: parsedQR.farmerId || 'Unknown',
            farmerName: parsedQR.farmerId === 'RAMESH' ? 'Ramesh Kumar' : undefined
          })
          setShowFeedbackForm(true)
          
          toast({
            title: "QR Code Scanned!",
            description: `Found stall #${parsedQR.stallId}`,
          })
        } else if (parsedQR && parsedQR.type === 'product') {
          toast({
            title: "Product QR Detected",
            description: `Product: ${parsedQR.productId} from Stall #${parsedQR.stallId}`,
          })
        } else {
          toast({
            title: "Unknown QR Code",
            description: "This QR code is not recognized for feedback.",
            variant: "destructive"
          })
        }
      } else {
        toast({
          title: "Scan Cancelled",
          description: "No QR code was scanned",
        })
      }
    } catch (error) {
      console.error('QR scan error:', error)
      toast({
        title: "Scan Failed",
        description: "There was an error with the QR scanner. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsScanning(false)
    }
  }

  const handleFeedbackSubmit = async (feedbackData: FeedbackData) => {
    try {
      // Store feedback in localStorage for demo purposes
      const existingFeedback = JSON.parse(localStorage.getItem('customerFeedback') || '[]')
      const newFeedback = {
        id: Date.now(),
        ...feedbackData
      }
      existingFeedback.push(newFeedback)
      localStorage.setItem('customerFeedback', JSON.stringify(existingFeedback))
      
      console.log('Feedback submitted:', newFeedback)
      
      toast({
        title: "Feedback Saved!",
        description: "Your feedback helps farmers improve their service.",
      })
    } catch (error) {
      console.error('Error saving feedback:', error)
      throw error
    }
  }

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Mobile Experience Preview</h1>
          <p className="text-muted-foreground">Interactive QR scanning for customer feedback</p>
        </div>

        <div className="flex justify-center">
          <div className="w-80 bg-card border-8 border-muted rounded-3xl shadow-strong p-4">
            {/* Mobile App UI */}
            <div className="space-y-4">
              <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg text-center">
                <h2 className="text-xl font-bold">Rythu Bazaar</h2>
                <p className="text-sm opacity-90">Live Market Prices</p>
              </div>
              
              <div className="space-y-2">
                {mockPrices.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-muted/50 rounded">
                    <span className="font-medium">{item.crop}</span>
                    <div className="text-right">
                      <p className="font-bold text-primary">{item.price}</p>
                      <Badge variant="outline" className="text-xs">{item.change}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                variant="accent" 
                className="w-full"
                onClick={handleScanQR}
                disabled={isScanning}
              >
                {isScanning ? (
                  <>
                    <Camera className="h-4 w-4 mr-2 animate-pulse" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <QrCode className="h-4 w-4 mr-2" />
                    Scan for Feedback
                  </>
                )}
              </Button>
              
              {/* Status indicators */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <span>QR Scanner Ready</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <AlertCircle className="h-3 w-3 text-info" />
                  <span>Scan farmer stall QR codes for feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Instructions */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-lg">How to Use QR Scanner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">1</div>
              <p>Tap "Scan for Feedback" button above</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">2</div>
              <p>Point camera at farmer's QR code</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">3</div>
              <p>Fill out the feedback form</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-success text-success-foreground text-xs flex items-center justify-center font-bold">✓</div>
              <p>Help farmers improve their service!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Form Dialog */}
      <Dialog open={showFeedbackForm} onOpenChange={setShowFeedbackForm}>
        <DialogContent className="p-0 max-w-md">
          {stallInfo && (
            <FeedbackForm
              stallInfo={stallInfo}
              onClose={() => setShowFeedbackForm(false)}
              onSubmit={handleFeedbackSubmit}
            />
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  )
}