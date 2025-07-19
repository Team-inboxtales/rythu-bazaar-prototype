import { AppLayout } from "@/components/layout/AppLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { 
  Settings as SettingsIcon, 
  Calendar,
  Users,
  Clock,
  Shield,
  Bell,
  Save
} from "lucide-react"

const holidays = [
  { name: "Republic Day", date: "2024-01-26", type: "national" },
  { name: "Holi", date: "2024-03-13", type: "festival" },
  { name: "Good Friday", date: "2024-03-29", type: "religious" },
  { name: "Independence Day", date: "2024-08-15", type: "national" },
  { name: "Gandhi Jayanti", date: "2024-10-02", type: "national" }
]

const roles = [
  { name: "Market Manager", permissions: ["full_access"], count: 1 },
  { name: "Operations Supervisor", permissions: ["operations", "reports"], count: 2 },
  { name: "Security Guard", permissions: ["attendance", "basic"], count: 6 },
  { name: "Maintenance Staff", permissions: ["maintenance", "basic"], count: 4 },
  { name: "Admin Assistant", permissions: ["hr", "basic"], count: 3 },
  { name: "Helper", permissions: ["basic"], count: 8 }
]

export default function HRSettings() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">HR Configuration</h1>
            <p className="text-muted-foreground">
              Configure HR policies, holidays, roles, and system settings
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Shield className="h-4 w-4 mr-2" />
              Backup Settings
            </Button>
            <Button variant="success" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save All Changes
            </Button>
          </div>
        </div>

        <Tabs defaultValue="policies" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="policies">Leave Policies</TabsTrigger>
            <TabsTrigger value="holidays">Holidays</TabsTrigger>
            <TabsTrigger value="roles">User Roles</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          {/* Leave Policies */}
          <TabsContent value="policies" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Annual Leave Policy</CardTitle>
                  <CardDescription>Configure annual leave allowances and rules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Annual Leave Days per Year</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[21]} max={30} min={15} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">21 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Carry Forward to Next Year</Label>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label>Maximum Carry Forward Days</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[5]} max={10} min={0} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">5 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Require Manager Approval</Label>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Sick Leave Policy</CardTitle>
                  <CardDescription>Configure sick leave allowances and medical requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Sick Leave Days per Year</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[12]} max={20} min={5} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">12 days</span>
                    </div>
                  </div>
                  <div>
                    <Label>Medical Certificate Required After</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[3]} max={7} min={1} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">3 days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Allow Half-Day Sick Leave</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Accumulate Unused Days</Label>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Casual Leave Policy</CardTitle>
                  <CardDescription>Configure casual leave rules and restrictions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Casual Leave Days per Year</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[8]} max={15} min={5} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">8 days</span>
                    </div>
                  </div>
                  <div>
                    <Label>Minimum Notice Period (Days)</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[1]} max={7} min={0} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">1 day</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Allow Consecutive Days</Label>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label>Maximum Consecutive Days</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[3]} max={7} min={1} step={1} className="flex-1" />
                      <span className="text-sm font-medium w-12">3 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Working Hours Policy</CardTitle>
                  <CardDescription>Configure standard working hours and overtime rules</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Work Start Time</Label>
                      <Input type="time" defaultValue="09:00" />
                    </div>
                    <div>
                      <Label>Work End Time</Label>
                      <Input type="time" defaultValue="18:00" />
                    </div>
                  </div>
                  <div>
                    <Label>Daily Working Hours</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[8]} max={12} min={6} step={0.5} className="flex-1" />
                      <span className="text-sm font-medium w-12">8.0 hrs</span>
                    </div>
                  </div>
                  <div>
                    <Label>Grace Period for Late Arrival (Minutes)</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Slider defaultValue={[15]} max={30} min={0} step={5} className="flex-1" />
                      <span className="text-sm font-medium w-12">15 min</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Enable Overtime Tracking</Label>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Holidays */}
          <TabsContent value="holidays" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Holiday Calendar 2024
                    </CardTitle>
                    <CardDescription>Manage public holidays and company-specific holidays</CardDescription>
                  </div>
                  <Button variant="success">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add Holiday
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holidays.map((holiday, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                      <div>
                        <h4 className="font-medium">{holiday.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(holiday.date).toLocaleDateString('en-IN', { 
                            weekday: 'long',
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Select defaultValue={holiday.type}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="national">National</SelectItem>
                            <SelectItem value="festival">Festival</SelectItem>
                            <SelectItem value="religious">Religious</SelectItem>
                            <SelectItem value="company">Company</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Roles */}
          <TabsContent value="roles" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      User Roles & Permissions
                    </CardTitle>
                    <CardDescription>Define roles and assign permissions for different user types</CardDescription>
                  </div>
                  <Button variant="success">
                    <Users className="h-4 w-4 mr-2" />
                    Create Role
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {roles.map((role, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                      <div>
                        <h4 className="font-medium">{role.name}</h4>
                        <p className="text-sm text-muted-foreground">{role.count} employees assigned</p>
                        <div className="flex gap-2 mt-2">
                          {role.permissions.map((permission, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                              {permission}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Edit Permissions</Button>
                        <Button variant="outline" size="sm">Manage</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>Configure automated notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Leave Application Notifications</Label>
                      <p className="text-sm text-muted-foreground">Notify managers when employees apply for leave</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Attendance Reminders</Label>
                      <p className="text-sm text-muted-foreground">Send daily attendance reminders to employees</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Late Arrival Alerts</Label>
                      <p className="text-sm text-muted-foreground">Alert managers about late arrivals</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Holiday Reminders</Label>
                      <p className="text-sm text-muted-foreground">Remind employees about upcoming holidays</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Monthly Reports</Label>
                      <p className="text-sm text-muted-foreground">Automatically generate and send monthly HR reports</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-4">Notification Channels</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Email Notifications</Label>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Send to managers</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Send to employees</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">Send to HR department</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label>SMS Notifications</Label>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">Critical alerts only</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked />
                          <span className="text-sm">Leave approvals</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" />
                          <span className="text-sm">Attendance reminders</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}