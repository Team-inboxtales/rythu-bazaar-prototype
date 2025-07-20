
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Star } from "lucide-react"

interface Feedback {
  id: number
  rating: number
  comment: string
  customer: string
  time: string
}

interface CustomerFeedbackProps {
  feedback: Feedback[]
}

export function CustomerFeedback({ feedback }: CustomerFeedbackProps) {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Recent Customer Feedback
        </CardTitle>
        <CardDescription>What customers are saying about your stall</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {feedback.map((review) => (
            <div key={review.id} className="p-4 rounded-lg border bg-card/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.time}</span>
              </div>
              <p className="text-sm mb-1">"{review.comment}"</p>
              <p className="text-xs text-muted-foreground">- {review.customer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
