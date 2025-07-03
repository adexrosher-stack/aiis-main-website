"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Download,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Users,
  BarChart,
  Mail,
  PieChart,
  LineChart,
  BarChart2,
  TrendingUp,
} from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("enrollment")
  const [timeframe, setTimeframe] = useState("year")

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  }

  return (
    <DashboardShell
      user={{
        name: adminInfo.name,
        role: adminInfo.role,
        image: "/placeholder.svg?height=32&width=32",
      }}
      navItems={[
        { label: "Dashboard", icon: <Home className="h-4 w-4" />, href: "/dashboard/admin" },
        { label: "Students", icon: <Users className="h-4 w-4" />, href: "/dashboard/admin/students" },
        { label: "Courses", icon: <BookOpen className="h-4 w-4" />, href: "/dashboard/admin/courses" },
        { label: "Faculty", icon: <GraduationCap className="h-4 w-4" />, href: "/dashboard/admin/faculty" },
        { label: "Applications", icon: <FileText className="h-4 w-4" />, href: "/dashboard/admin/applications" },
        { label: "Reports", icon: <BarChart className="h-4 w-4" />, href: "/dashboard/admin/reports" },
        { label: "Settings", icon: <Settings className="h-4 w-4" />, href: "/dashboard/admin/settings" },
      ]}
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate and view institutional reports</p>
          </div>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Reports
          </Button>
        </div>

        {/* Report Controls */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Report Type</label>
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Report Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enrollment">Enrollment Statistics</SelectItem>
                    <SelectItem value="academic">Academic Performance</SelectItem>
                    <SelectItem value="financial">Financial Overview</SelectItem>
                    <SelectItem value="admissions">Admissions Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Timeframe</label>
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="5year">Last 5 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <div className="flex gap-2">
                  <Input type="date" defaultValue="2023-01-01" />
                  <span className="flex items-center">to</span>
                  <Input type="date" defaultValue="2023-12-31" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Report Content */}
        <Tabs defaultValue="enrollment" value={reportType} onValueChange={setReportType}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
          </TabsList>

          {/* Enrollment Report */}
          <TabsContent value="enrollment" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Enrollment Trends</CardTitle>
                  <CardDescription>Student enrollment over time by program</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Enrollment trend visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Data shows increasing enrollment in Master&apos;s programs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Summary</CardTitle>
                  <CardDescription>Current academic year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Students</span>
                      <span className="font-bold">145</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Undergraduate</span>
                      <span className="font-bold">87</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Graduate</span>
                      <span className="font-bold">48</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Doctoral</span>
                      <span className="font-bold">10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Full-time</span>
                      <span className="font-bold">112</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Part-time</span>
                      <span className="font-bold">33</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment by Program</CardTitle>
                  <CardDescription>Distribution across academic programs</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Program distribution chart would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">Bachelor of Theology has highest enrollment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Demographics</CardTitle>
                  <CardDescription>Age, gender, and nationality distribution</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Demographics visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">35 international students from 12 countries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Academic Report */}
          <TabsContent value="academic" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Academic Performance Trends</CardTitle>
                  <CardDescription>Average GPA by program over time</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">GPA trend visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Average GPA has increased by 0.2 points since last year
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Metrics</CardTitle>
                  <CardDescription>Current academic year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Average GPA</span>
                      <span className="font-bold">3.42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Graduation Rate</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Retention Rate</span>
                      <span className="font-bold">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Course Completion</span>
                      <span className="font-bold">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Academic Probation</span>
                      <span className="font-bold">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Course Performance</CardTitle>
                  <CardDescription>Average grades by course</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Course performance chart would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">THEO101 has highest average grade at 3.8</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Faculty Performance</CardTitle>
                  <CardDescription>Student evaluations by instructor</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Faculty evaluation visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">Average faculty rating is 4.6/5.0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Financial Report */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                  <CardDescription>Revenue and expenses over time</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Financial trend visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">Revenue has increased by 12% year-over-year</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Summary</CardTitle>
                  <CardDescription>Current fiscal year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Revenue</span>
                      <span className="font-bold">$245,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Tuition Revenue</span>
                      <span className="font-bold">$198,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Donations</span>
                      <span className="font-bold">$47,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Expenses</span>
                      <span className="font-bold">$210,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Net Income</span>
                      <div className="flex items-center gap-1 text-green-500">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-bold">$35,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Sources of institutional revenue</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Revenue breakdown chart would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">Tuition accounts for 81% of total revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Breakdown</CardTitle>
                  <CardDescription>Institutional expense categories</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Expense breakdown chart would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Faculty salaries are the largest expense at 58%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Admissions Report */}
          <TabsContent value="admissions" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Application Trends</CardTitle>
                  <CardDescription>Applications and admissions over time</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Application trend visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Applications have increased by 15% since last year
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admissions Summary</CardTitle>
                  <CardDescription>Current application cycle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Applications</span>
                      <span className="font-bold">87</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Accepted</span>
                      <span className="font-bold">52</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Waitlisted</span>
                      <span className="font-bold">15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Rejected</span>
                      <span className="font-bold">20</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Acceptance Rate</span>
                      <span className="font-bold">60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Yield Rate</span>
                      <span className="font-bold">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Applications by Program</CardTitle>
                  <CardDescription>Distribution across academic programs</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Program applications chart would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Master of Divinity has highest application volume
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Applicant Demographics</CardTitle>
                  <CardDescription>Geographic and background distribution</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Applicant demographics visualization would appear here</p>
                      <p className="text-xs text-muted-foreground mt-2">42% of applicants are international</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Report Actions */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Email Report
          </Button>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            Generate Full Report
          </Button>
        </div>
      </div>
    </DashboardShell>
  )
}

