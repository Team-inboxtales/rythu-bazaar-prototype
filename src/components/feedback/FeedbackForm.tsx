import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { 
  QrCode, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Send, 
  X,
  CheckCircle
} from "lucide-react"

interface FeedbackFormProps {
  stallInfo: {
    stallId: string
    farmerId: string
    farmerName?: string
  }
  onClose: () => void
  onSubmit: (feedback: FeedbackData) => void
}

interface FeedbackData {
  rating: number
  category: string
  comment: string
  stallId: string
  farmerId: string
  timestamp: string
}

export function FeedbackForm({ stallInfo, onClose, onSubmit }: FeedbackFormProps) {
  const [rating, setRating] = useState<number>(0)
  const [category, setCategory] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating)
  }

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive"
      })
      return
    }

    if (!category) {
      toast({
        title: "Category Required", 
        description: "Please select a feedback category.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      const feedbackData: FeedbackData = {
        rating,
        category,
        comment,
        stallId: stallInfo.stallId,
        farmerId: stallInfo.farmerId,
        timestamp: new Date().toISOString()
      }

      await onSubmit(feedbackData)
      
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback.",
      })
      
      onClose()
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Feedback</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>
          Stall #{stallInfo.stallId} • {stallInfo.farmerName || `Farmer #${stallInfo.farmerId}`}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Rating Stars */}
        <div>
          <Label className="text-sm font-medium">Rate your experience</Label>
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingClick(star)}
                className="transition-colors"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300 hover:text-yellow-200"
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-muted-foreground mt-1">
              {rating === 1 && "Poor"}
              {rating === 2 && "Fair"}
              {rating === 3 && "Good"}
              {rating === 4 && "Very Good"}
              {rating === 5 && "Excellent"}
            </p>
          )}
        </div>

        {/* Feedback Category */}
        <div>
          <Label className="text-sm font-medium">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select feedback category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product-quality">Product Quality</SelectItem>
              <SelectItem value="pricing">Pricing</SelectItem>
              <SelectItem value="service">Customer Service</SelectItem>
              <SelectItem value="cleanliness">Cleanliness</SelectItem>
              <SelectItem value="variety">Product Variety</SelectItem>
              <SelectItem value="packaging">Packaging</SelectItem>
              <SelectItem value="general">General Experience</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Comment */}
        <div>
          <Label className="text-sm font-medium">Comments (Optional)</Label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your detailed feedback..."
            className="mt-2 min-h-[80px]"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground mt-1">
            {comment.length}/500 characters
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setRating(5)
              setCategory("general")
              setComment("Great experience!")
            }}
            className="flex-1"
          >
            <ThumbsUp className="h-4 w-4 mr-1" />
            Quick Positive
          </Button>
          <Button
            variant="outline"
            size="sm" 
            onClick={() => {
              setRating(2)
              setCategory("service")
              setComment("Needs improvement.")
            }}
            className="flex-1"
          >
            <ThumbsDown className="h-4 w-4 mr-1" />
            Quick Negative
          </Button>
        </div>

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting || rating === 0}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Submit Feedback
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}