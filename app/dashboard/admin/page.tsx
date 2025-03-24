"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Bell,
  Users,
  BarChart,
  PlusCircle,
  Search,
  CheckCircle,
  XCircle,
  TrendingUp,
  School,
  Globe,
  ChevronRight,
  DollarSign,
} from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Progress } from "@/components/ui/progress"

interface Student {
  id: string
  name: string
  program: string
  year: string
  status: "active" | "inactive" | "probation"
  gpa: number
}

interface Course {
  id: string
  code: string
  title: string
  instructor: string
  semester: string
  year: string
  students: number
  status: "active" | "upcoming" | "completed"
}

interface ApplicationRequest {
  id: string
  name: string
  program: string
  date: string
  status: "pending" | "approved" | "rejected"
}

export default function AdminDashboard() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "STU2023001",
      name: "John Doe",
      program: "Bachelor of Theology",
      year: "2nd Year",
      status: "active",
      gpa: 3.75,
    },
    {
      id: "STU2023002",
      name: "Jane Smith",
      program: "Master of Divinity",
      year: "1st Year",
      status: "active",
      gpa: 3.9,
    },
    {
      id: "STU2023003",
      name: "Michael Johnson",
      program: "Bachelor of Theology",
      year: "3rd Year",
      status: "probation",
      gpa: 2.1,
    },
    {
      id: "STU2023004",
      name: "Sarah Williams",
      program: "Master of Theology",
      year: "2nd Year",
      status: "active",
      gpa: 3.6,
    },
    {
      id: "STU2023005",
      name: "David Brown",
      program: "PhD in Theology",
      year: "1st Year",
      status: "active",
      gpa: 3.8,
    },
  ])

  const [courses, setCourses] = useState<Course[]>([
    {
      id: "theo101",
      code: "THEO101",
      title: "Introduction to Biblical Studies",
      instructor: "Dr. Esckinder Taddesse",
      semester: "Fall",
      year: "2023",
      students: 35,
      status: "active",
    },
    {
      id: "theo203",
      code: "THEO203",
      title: "Systematic Theology I",
      instructor: "Dr. Endale Gebremeskel",
      semester: "Fall",
      year: "2023",
      students: 28,
      status: "active",
    },
    {
      id: "hist202",
      code: "HIST202",
      title: "Church History II",
      instructor: "Pr. Tsadiku Abdo",
      semester: "Fall",
      year: "2023",
      students: 22,
      status: "active",
    },
    {
      id: "theo301",
      code: "THEO301",
      title: "Biblical Hermeneutics",
      instructor: "Dr. Abeba Belay",
      semester: "Spring",
      year: "2024",
      students: 0,
      status: "upcoming",
    },
    {
      id: "theo102",
      code: "THEO102",
      title: "Old Testament Survey",
      instructor: "Dr. Endale Gebremeskel",
      semester: "Spring",
      year: "2023",
      students: 42,
      status: "completed",
    },
  ])

  const [applications, setApplications] = useState<ApplicationRequest[]>([
    {
      id: "APP2023045",
      name: "Robert Chen",
      program: "Master of Divinity",
      date: "2023-11-10",
      status: "pending",
    },
    {
      id: "APP2023046",
      name: "Emily Davis",
      program: "Bachelor of Theology",
      date: "2023-11-08",
      status: "pending",
    },
    {
      id: "APP2023047",
      name: "Thomas Wilson",
      program: "PhD in Theology",
      date: "2023-11-05",
      status: "approved",
    },
    {
      id: "APP2023048",
      name: "Maria Garcia",
      program: "Master of Theology",
      date: "2023-11-02",
      status: "rejected",
    },
  ])

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  }

  const stats = {
    totalStudents: 145,
    activeCourses: 12,
    facultyMembers: 18,
    pendingApplications: applications.filter((app) => app.status === "pending").length,
    totalRevenue: 245000,
    graduationRate: 92,
    retentionRate: 88,
    internationalStudents: 35,
  }

  const announcements = [
    {
      id: 1,
      title: "Faculty Meeting",
      date: "November 15, 2023",
      content: "Reminder: Faculty meeting scheduled for 2:00 PM in the conference room.",
    },
    {
      id: 2,
      title: "Grade Submission Deadline",
      date: "December 10, 2023",
      content: "Final grades for Fall 2023 semester must be submitted by December 10.",
    },
  ]

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
            <h1 className="text-3xl font-bold tracking-tight">Welcome, Dr. Taddesse</h1>
            <p className="text-muted-foreground">Here's what's happening at AIIS today</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              November 12, 2023
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <div className="rounded-full bg-primary/10 p-2">
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500 font-medium">+5.2%</span>
                <span>from last semester</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <div className="rounded-full bg-blue-500/10 p-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeCourses}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Fall 2023 Semester</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
              <div className="rounded-full bg-amber-500/10 p-2">
                <GraduationCap className="h-4 w-4 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.facultyMembers}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>12 full-time, 6 part-time</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <div className="rounded-full bg-red-500/10 p-2">
                <FileText className="h-4 w-4 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingApplications}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Requires review</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid gap-6 md:grid-cols-7">
          <div className="md:col-span-4 space-y-6">
            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Institution Performance</CardTitle>
                <CardDescription>Key metrics for the current academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <School className="h-4 w-4 text-primary" />
                        <span className="font-medium">Graduation Rate</span>
                      </div>
                      <span className="font-bold">{stats.graduationRate}%</span>
                    </div>
                    <Progress value={stats.graduationRate} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span className="font-medium">Retention Rate</span>
                      </div>
                      <span className="font-bold">{stats.retentionRate}%</span>
                    </div>
                    <Progress value={stats.retentionRate} className="h-2 bg-blue-100 dark:bg-blue-950">
                      <div className="h-full bg-blue-500" style={{ width: `${stats.retentionRate}%` }} />
                    </Progress>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-amber-500" />
                        <span className="font-medium">International Students</span>
                      </div>
                      <span className="font-bold">{stats.internationalStudents}</span>
                    </div>
                    <Progress
                      value={(stats.internationalStudents / stats.totalStudents) * 100}
                      className="h-2 bg-amber-100 dark:bg-amber-950"
                    >
                      <div
                        className="h-full bg-amber-500"
                        style={{ width: `${(stats.internationalStudents / stats.totalStudents) * 100}%` }}
                      />
                    </Progress>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span className="font-medium">Revenue Target</span>
                      </div>
                      <span className="font-bold">{Math.round((stats.totalRevenue / 300000) * 100)}%</span>
                    </div>
                    <Progress
                      value={(stats.totalRevenue / 300000) * 100}
                      className="h-2 bg-green-100 dark:bg-green-950"
                    >
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${(stats.totalRevenue / 300000) * 100}%` }}
                      />
                    </Progress>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Manage admission applications</CardDescription>
                </div>
                <Button asChild size="sm">
                  <Link href="/dashboard/admin/applications">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div
                      key={application.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div>
                        <div className="font-semibold">{application.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {application.program} • Application ID: {application.id}
                        </div>
                        <div className="text-sm text-muted-foreground">Submitted: {application.date}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            application.status === "approved"
                              ? "default"
                              : application.status === "rejected"
                                ? "destructive"
                                : "outline"
                          }
                          className={
                            application.status === "approved"
                              ? "bg-green-500 hover:bg-green-600"
                              : application.status === "rejected"
                                ? ""
                                : ""
                          }
                        >
                          {application.status === "approved"
                            ? "Approved"
                            : application.status === "rejected"
                              ? "Rejected"
                              : "Pending"}
                        </Badge>
                        {application.status === "pending" && (
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-50"
                            >
                              <CheckCircle className="h-5 w-5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <XCircle className="h-5 w-5" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50/50 dark:bg-slate-800/50 px-6 py-3">
                <Button variant="ghost" asChild className="w-full text-primary">
                  <Link href="/dashboard/admin/applications" className="flex items-center justify-center gap-1">
                    <span>View All Applications</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Active Courses */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Active Courses</CardTitle>
                  <CardDescription>Current semester courses</CardDescription>
                </div>
                <Button asChild size="sm">
                  <Link href="/dashboard/admin/courses">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses
                    .filter((course) => course.status === "active")
                    .map((course) => (
                      <div
                        key={course.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{course.code}</span>
                            <Badge variant="outline">
                              {course.semester} {course.year}
                            </Badge>
                          </div>
                          <div>{course.title}</div>
                          <div className="text-sm text-muted-foreground">Instructor: {course.instructor}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{course.students}</div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50/50 dark:bg-slate-800/50 px-6 py-3">
                <Button variant="ghost" asChild className="w-full text-primary">
                  <Link href="/dashboard/admin/courses" className="flex items-center justify-center gap-1">
                    <span>View All Courses</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-6">
            {/* Quick Actions */}
            <Card className="border-none bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription className="text-white/80">Frequently used administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="secondary"
                    className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border-0"
                  >
                    <PlusCircle className="h-5 w-5" />
                    <span>Add Student</span>
                  </Button>
                  <Button
                    variant="secondary"
                    className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border-0"
                  >
                    <PlusCircle className="h-5 w-5" />
                    <span>Add Course</span>
                  </Button>
                  <Button
                    variant="secondary"
                    className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border-0"
                  >
                    <Bell className="h-5 w-5" />
                    <span>Send Announcement</span>
                  </Button>
                  <Button
                    variant="secondary"
                    className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border-0"
                  >
                    <BarChart className="h-5 w-5" />
                    <span>Generate Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Student Search */}
            <Card>
              <CardHeader>
                <CardTitle>Student Search</CardTitle>
                <CardDescription>Quickly find student information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Search by name or ID" className="flex-1" />
                    <Button variant="default" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Recent Students</h4>
                    {students.slice(0, 3).map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                            <Image
                              src={`/placeholder.svg?height=40&width=40&text=${student.name.charAt(0)}`}
                              alt={student.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{student.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {student.id} • {student.program}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant={
                            student.status === "active"
                              ? "default"
                              : student.status === "inactive"
                                ? "outline"
                                : "destructive"
                          }
                          className={
                            student.status === "active"
                              ? "bg-green-500 hover:bg-green-600"
                              : student.status === "inactive"
                                ? ""
                                : ""
                          }
                        >
                          {student.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50/50 dark:bg-slate-800/50 px-6 py-3">
                <Button variant="ghost" asChild className="w-full text-primary">
                  <Link href="/dashboard/admin/students" className="flex items-center justify-center gap-1">
                    <span>View All Students</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Announcements */}
            <Card>
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>Recent announcements to faculty and students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="space-y-2 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="font-semibold">{announcement.title}</div>
                      <div className="text-sm text-muted-foreground">{announcement.date}</div>
                      <p className="text-sm">{announcement.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-slate-50/50 dark:bg-slate-800/50 px-6 py-3">
                <Button variant="outline" className="w-full">
                  Create Announcement
                </Button>
              </CardFooter>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current status of all AIIS systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Student Portal</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Faculty Portal</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Admin Dashboard</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <span>Online Library</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Maintenance</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Last updated: November 12, 2023, 9:45 AM</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

