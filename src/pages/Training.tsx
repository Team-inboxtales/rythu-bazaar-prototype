import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  GraduationCap, 
  Play, 
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  Star,
  Video,
  FileText,
  Award
} from "lucide-react"

const courseCategories = [
  {
    title: "Digital Marketing for Farmers",
    description: "Learn to sell your produce online",
    duration: "2 hours",
    level: "Beginner",
    enrolled: 45,
    rating: 4.8,
    progress: 0,
    status: "available"
  },
  {
    title: "Quality Standards & Grading",
    description: "Understanding crop quality and pricing",
    duration: "1.5 hours", 
    level: "Intermediate",
    enrolled: 32,
    rating: 4.6,
    progress: 65,
    status: "in-progress"
  },
  {
    title: "Customer Service Excellence",
    description: "Building lasting customer relationships",
    duration: "3 hours",
    level: "All Levels",
    enrolled: 28,
    rating: 4.9,
    progress: 100,
    status: "completed"
  },
  {
    title: "Financial Planning for Farmers",
    description: "Managing income and planning investments",
    duration: "2.5 hours",
    level: "Intermediate",
    enrolled: 15,
    rating: 4.7,
    progress: 0,
    status: "available"
  }
]

const recentSessions = [
  {
    title: "Market Price Analysis Workshop",
    instructor: "Dr. Ramesh Agricultural Officer",
    date: "Tomorrow, 10:00 AM",
    attendees: 25,
    type: "live",
    status: "upcoming"
  },
  {
    title: "Sustainable Farming Practices",
    instructor: "Prof. Lakshmi Environment Expert",
    date: "Today, 2:00 PM",
    attendees: 18,
    type: "live",
    status: "ongoing"
  },
  {
    title: "Digital Payment Systems",
    instructor: "Suresh Banking Specialist",
    date: "Yesterday, 11:00 AM",
    attendees: 22,
    type: "recorded",
    status: "completed"
  }
]

const learningPaths = [
  {
    title: "New Farmer Onboarding",
    description: "Complete guide for farmers joining Rythu Bazaar",
    courses: 4,
    duration: "6 hours",
    progress: 25
  },
  {
    title: "Digital Skills for Agriculture",
    description: "Essential digital literacy for modern farming",
    courses: 6,
    duration: "8 hours", 
    progress: 0
  },
  {
    title: "Business Development",
    description: "Growing your agricultural business",
    courses: 5,
    duration: "10 hours",
    progress: 60
  }
]

export default function Training() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Training Hub</h1>
            <p className="text-muted-foreground">
              Empower farmers with knowledge and skills for better livelihoods
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Instructor Panel
            </Button>
            <Button variant="success" size="sm">
              <Video className="h-4 w-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Learners</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                  <p className="text-sm text-success">+12% this month</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Courses Available</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">6 new added</p>
                </div>
                <BookOpen className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                  <p className="text-2xl font-bold text-foreground">78%</p>
                  <p className="text-sm text-success">+5% improvement</p>
                </div>
                <Award className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Hours</p>
                  <p className="text-2xl font-bold text-foreground">1,240</p>
                  <p className="text-sm text-muted-foreground">Learning time</p>
                </div>
                <Clock className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Available Courses</TabsTrigger>
            <TabsTrigger value="sessions">Live Sessions</TabsTrigger>
            <TabsTrigger value="paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="progress">My Progress</TabsTrigger>
          </TabsList>

          {/* Available Courses */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseCategories.map((course, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{course.title}</h4>
                          <Badge variant={
                            course.status === 'completed' ? 'default' :
                            course.status === 'in-progress' ? 'secondary' : 'outline'
                          }>
                            {course.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {course.enrolled} enrolled
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-warning fill-current" />
                            {course.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {course.progress > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        variant={course.status === 'completed' ? 'outline' : 'default'} 
                        size="sm" 
                        className="flex-1"
                      >
                        {course.status === 'completed' ? (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Review
                          </>
                        ) : course.status === 'in-progress' ? (
                          <>
                            <Play className="h-3 w-3 mr-1" />
                            Continue
                          </>
                        ) : (
                          <>
                            <Play className="h-3 w-3 mr-1" />
                            Start Course
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm">
                        <BookOpen className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Sessions */}
          <TabsContent value="sessions" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Upcoming & Recent Sessions
                </CardTitle>
                <CardDescription>Interactive live training sessions with agricultural experts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{session.title}</h4>
                          <p className="text-sm text-muted-foreground">by {session.instructor}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={
                            session.status === 'upcoming' ? 'default' :
                            session.status === 'ongoing' ? 'secondary' : 'outline'
                          }>
                            {session.status}
                          </Badge>
                          {session.type === 'live' && session.status === 'ongoing' && (
                            <div className="h-2 w-2 bg-destructive rounded-full animate-pulse" />
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{session.date}</span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {session.attendees} attendees
                          </span>
                        </div>
                        <Button size="sm" variant={session.status === 'upcoming' ? 'default' : 'outline'}>
                          {session.status === 'upcoming' ? 'Join Session' :
                           session.status === 'ongoing' ? 'Join Now' : 'Watch Recording'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Paths */}
          <TabsContent value="paths" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">{path.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{path.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{path.courses} courses</span>
                        <span>{path.duration}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                    <Button variant="outline" className="w-full">
                      {path.progress === 0 ? 'Start Path' : 'Continue Learning'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Progress */}
          <TabsContent value="progress" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Learning Progress Overview</CardTitle>
                <CardDescription>Track your learning journey and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your Learning Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Track courses completed, certificates earned, and learning milestones
                  </p>
                  <Button variant="accent">
                    View Detailed Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}