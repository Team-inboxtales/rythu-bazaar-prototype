import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeaveRequest } from "@/hooks/useLeaveRequests"
import { useEmployees } from "@/hooks/useEmployees"

interface LeaveRequestFormProps {
  leaveRequest?: LeaveRequest
  onSubmit: (data: Omit<LeaveRequest, 'id' | 'appliedOn' | 'status'>) => void
  onCancel: () => void
  isEditing?: boolean
}

export function LeaveRequestForm({ leaveRequest, onSubmit, onCancel, isEditing = false }: LeaveRequestFormProps) {
  const { employees } = useEmployees()
  const [formData, setFormData] = useState({
    employeeId: leaveRequest?.employeeId || 0,
    employee: leaveRequest?.employee || '',
    type: leaveRequest?.type || 'annual' as const,
    from: leaveRequest?.from || '',
    to: leaveRequest?.to || '',
    days: leaveRequest?.days || 1,
    reason: leaveRequest?.reason || '',
    department: leaveRequest?.department || '',
    approvedBy: leaveRequest?.approvedBy || '',
    approvedOn: leaveRequest?.approvedOn || '',
    rejectionReason: leaveRequest?.rejectionReason || ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Calculate days between from and to dates
    const fromDate = new Date(formData.from)
    const toDate = new Date(formData.to)
    const diffTime = Math.abs(toDate.getTime() - fromDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1

    onSubmit({
      ...formData,
      days: diffDays
    })
  }

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleEmployeeChange = (employeeId: string) => {
    const employee = employees.find(emp => emp.id === parseInt(employeeId))
    if (employee) {
      setFormData(prev => ({
        ...prev,
        employeeId: employee.id,
        employee: employee.name,
        department: employee.department
      }))
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit Leave Request' : 'Apply for Leave'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="employee">Employee</Label>
              <Select value={formData.employeeId.toString()} onValueChange={handleEmployeeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employee" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map(employee => (
                    <SelectItem key={employee.id} value={employee.id.toString()}>
                      {employee.name} ({employee.department})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="leaveType">Leave Type</Label>
              <Select value={formData.type} onValueChange={(value) => handleChange('type', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select leave type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="annual">Annual Leave</SelectItem>
                  <SelectItem value="sick">Sick Leave</SelectItem>
                  <SelectItem value="casual">Casual Leave</SelectItem>
                  <SelectItem value="emergency">Emergency Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fromDate">From Date</Label>
              <Input
                id="fromDate"
                type="date"
                value={formData.from}
                onChange={(e) => handleChange('from', e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="toDate">To Date</Label>
              <Input
                id="toDate"
                type="date"
                value={formData.to}
                onChange={(e) => handleChange('to', e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="reason">Reason for Leave</Label>
            <Textarea 
              id="reason"
              value={formData.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              placeholder="Please provide a reason for your leave request"
              rows={3}
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? 'Update Request' : 'Submit Application'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}