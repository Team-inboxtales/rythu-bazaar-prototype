import { useLocalStorage } from './useLocalStorage'

export interface Course {
  id: number
  title: string
  description: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  category: string
  enrolled: number
  rating: number
  progress: number
  status: 'available' | 'in-progress' | 'completed'
  instructor?: string
  createdDate: string
  tags?: string[]
}

export interface TrainingSession {
  id: number
  title: string
  instructor: string
  date: string
  attendees: number
  type: 'live' | 'recorded'
  status: 'upcoming' | 'ongoing' | 'completed'
  description?: string
  duration?: string
  maxAttendees?: number
}

export interface LearningPath {
  id: number
  title: string
  description: string
  courses: number[]
  duration: string
  progress: number
  category: string
}

const initialCourses: Course[] = [
  {
    id: 1,
    title: "Digital Marketing for Farmers",
    description: "Learn to sell your produce online",
    duration: "2 hours",
    level: "Beginner",
    category: "Marketing",
    enrolled: 45,
    rating: 4.8,
    progress: 0,
    status: "available",
    instructor: "Dr. Marketing Expert",
    createdDate: "2024-01-01",
    tags: ["digital", "marketing", "online-sales"]
  },
  {
    id: 2,
    title: "Quality Standards & Grading",
    description: "Understanding crop quality and pricing",
    duration: "1.5 hours", 
    level: "Intermediate",
    category: "Quality Control",
    enrolled: 32,
    rating: 4.6,
    progress: 65,
    status: "in-progress",
    instructor: "Prof. Quality Specialist",
    createdDate: "2024-01-05",
    tags: ["quality", "grading", "standards"]
  },
  {
    id: 3,
    title: "Customer Service Excellence",
    description: "Building lasting customer relationships",
    duration: "3 hours",
    level: "All Levels",
    category: "Customer Relations",
    enrolled: 28,
    rating: 4.9,
    progress: 100,
    status: "completed",
    instructor: "Customer Service Expert",
    createdDate: "2024-01-10",
    tags: ["customer-service", "relationships", "communication"]
  },
  {
    id: 4,
    title: "Financial Planning for Farmers",
    description: "Managing income and planning investments",
    duration: "2.5 hours",
    level: "Intermediate",
    category: "Finance",
    enrolled: 15,
    rating: 4.7,
    progress: 0,
    status: "available",
    instructor: "Financial Advisor",
    createdDate: "2024-01-15",
    tags: ["finance", "planning", "investment"]
  }
]

const initialSessions: TrainingSession[] = [
  {
    id: 1,
    title: "Market Price Analysis Workshop",
    instructor: "Dr. Ramesh Agricultural Officer",
    date: "2024-01-22T10:00:00",
    attendees: 25,
    type: "live",
    status: "upcoming",
    description: "Learn to analyze market trends and price fluctuations",
    duration: "2 hours",
    maxAttendees: 50
  },
  {
    id: 2,
    title: "Sustainable Farming Practices",
    instructor: "Prof. Lakshmi Environment Expert",
    date: "2024-01-21T14:00:00",
    attendees: 18,
    type: "live",
    status: "ongoing",
    description: "Implementing eco-friendly farming techniques",
    duration: "1.5 hours",
    maxAttendees: 30
  },
  {
    id: 3,
    title: "Digital Payment Systems",
    instructor: "Suresh Banking Specialist",
    date: "2024-01-20T11:00:00",
    attendees: 22,
    type: "recorded",
    status: "completed",
    description: "Understanding modern payment solutions for farmers",
    duration: "1 hour",
    maxAttendees: 40
  }
]

export function useTraining() {
  const [courses, setCourses] = useLocalStorage<Course[]>('courses', initialCourses)
  const [sessions, setSessions] = useLocalStorage<TrainingSession[]>('sessions', initialSessions)

  // Course CRUD operations
  const addCourse = (courseData: Omit<Course, 'id' | 'createdDate' | 'enrolled' | 'rating' | 'progress' | 'status'>) => {
    const newCourse = {
      ...courseData,
      id: Math.max(...courses.map(c => c.id), 0) + 1,
      createdDate: new Date().toISOString().split('T')[0],
      enrolled: 0,
      rating: 0,
      progress: 0,
      status: 'available' as const
    }
    setCourses(prev => [...prev, newCourse])
    return newCourse
  }

  const updateCourse = (id: number, courseData: Partial<Course>) => {
    setCourses(prev => 
      prev.map(course => course.id === id ? { ...course, ...courseData } : course)
    )
  }

  const deleteCourse = (id: number) => {
    setCourses(prev => prev.filter(course => course.id !== id))
  }

  const getCourse = (id: number) => {
    return courses.find(course => course.id === id)
  }

  // Session CRUD operations
  const addSession = (sessionData: Omit<TrainingSession, 'id' | 'attendees' | 'status'>) => {
    const newSession = {
      ...sessionData,
      id: Math.max(...sessions.map(s => s.id), 0) + 1,
      attendees: 0,
      status: 'upcoming' as const
    }
    setSessions(prev => [...prev, newSession])
    return newSession
  }

  const updateSession = (id: number, sessionData: Partial<TrainingSession>) => {
    setSessions(prev => 
      prev.map(session => session.id === id ? { ...session, ...sessionData } : session)
    )
  }

  const deleteSession = (id: number) => {
    setSessions(prev => prev.filter(session => session.id !== id))
  }

  const getSession = (id: number) => {
    return sessions.find(session => session.id === id)
  }

  const getStats = () => {
    const totalCourses = courses.length
    const activeLearners = courses.reduce((sum, course) => sum + course.enrolled, 0)
    const completionRate = courses.length > 0 
      ? Math.round(courses.filter(c => c.status === 'completed').length / courses.length * 100)
      : 0
    const totalHours = courses.reduce((sum, course) => {
      const hours = parseFloat(course.duration.replace(' hours', ''))
      return sum + (hours * course.enrolled)
    }, 0)

    return {
      totalCourses,
      activeLearners,
      completionRate,
      totalHours: Math.round(totalHours),
      upcomingSessions: sessions.filter(s => s.status === 'upcoming').length,
      ongoingSessions: sessions.filter(s => s.status === 'ongoing').length
    }
  }

  return {
    courses,
    sessions,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourse,
    addSession,
    updateSession,
    deleteSession,
    getSession,
    getStats
  }
}