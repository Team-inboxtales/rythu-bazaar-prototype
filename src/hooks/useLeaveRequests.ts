import { useLocalStorage } from './useLocalStorage'

export interface LeaveRequest {
  id: number
  employeeId: number
  employee: string
  type: 'annual' | 'sick' | 'casual' | 'emergency'
  from: string
  to: string
  days: number
  reason: string
  status: 'pending' | 'approved' | 'rejected'
  appliedOn: string
  department: string
  approvedBy?: string
  approvedOn?: string
  rejectionReason?: string
}

const initialLeaveRequests: LeaveRequest[] = [
  {
    id: 1,
    employeeId: 1,
    employee: "Ramesh Kumar",
    type: "annual",
    from: "2024-01-22",
    to: "2024-01-24",
    days: 3,
    reason: "Family function",
    status: "pending",
    appliedOn: "2024-01-15",
    department: "Administration"
  },
  {
    id: 2,
    employeeId: 2,
    employee: "Priya Sharma",
    type: "sick",
    from: "2024-01-20",
    to: "2024-01-20",
    days: 1,
    reason: "Medical checkup",
    status: "approved",
    appliedOn: "2024-01-19",
    department: "Security",
    approvedBy: "HR Manager",
    approvedOn: "2024-01-19"
  },
  {
    id: 3,
    employeeId: 3,
    employee: "Mohan Das",
    type: "casual",
    from: "2024-01-25",
    to: "2024-01-25",
    days: 1,
    reason: "Personal work",
    status: "rejected",
    appliedOn: "2024-01-18",
    department: "Maintenance",
    rejectionReason: "Peak season, cannot approve casual leave"
  }
]

export function useLeaveRequests() {
  const [leaveRequests, setLeaveRequests] = useLocalStorage<LeaveRequest[]>('leaveRequests', initialLeaveRequests)

  const addLeaveRequest = (requestData: Omit<LeaveRequest, 'id' | 'appliedOn' | 'status'>) => {
    const newRequest = {
      ...requestData,
      id: Math.max(...leaveRequests.map(r => r.id), 0) + 1,
      appliedOn: new Date().toISOString().split('T')[0],
      status: 'pending' as const
    }
    setLeaveRequests(prev => [...prev, newRequest])
    return newRequest
  }

  const updateLeaveRequest = (id: number, requestData: Partial<LeaveRequest>) => {
    setLeaveRequests(prev => 
      prev.map(request => request.id === id ? { ...request, ...requestData } : request)
    )
  }

  const approveLeaveRequest = (id: number, approvedBy: string) => {
    updateLeaveRequest(id, {
      status: 'approved',
      approvedBy,
      approvedOn: new Date().toISOString().split('T')[0]
    })
  }

  const rejectLeaveRequest = (id: number, rejectionReason: string) => {
    updateLeaveRequest(id, {
      status: 'rejected',
      rejectionReason
    })
  }

  const deleteLeaveRequest = (id: number) => {
    setLeaveRequests(prev => prev.filter(request => request.id !== id))
  }

  const getLeaveRequest = (id: number) => {
    return leaveRequests.find(request => request.id === id)
  }

  const getStats = () => {
    const pending = leaveRequests.filter(r => r.status === 'pending').length
    const approved = leaveRequests.filter(r => r.status === 'approved').length
    const rejected = leaveRequests.filter(r => r.status === 'rejected').length
    
    const today = new Date().toISOString().split('T')[0]
    const onLeaveToday = leaveRequests.filter(r => 
      r.status === 'approved' && 
      r.from <= today && 
      r.to >= today
    ).length

    return {
      pending,
      approved,
      rejected,
      onLeaveToday,
      total: leaveRequests.length
    }
  }

  return {
    leaveRequests,
    addLeaveRequest,
    updateLeaveRequest,
    approveLeaveRequest,
    rejectLeaveRequest,
    deleteLeaveRequest,
    getLeaveRequest,
    getStats
  }
}