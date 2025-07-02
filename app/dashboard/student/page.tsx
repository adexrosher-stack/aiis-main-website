"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Calendar,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Home,
  Settings,
  User,
  Bell,
  BarChart,
} from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"

interface Course {
  id: string
  code: string
  title: string
  instructor: string
  credits: number
  grade?: string
  status: "in-progress" | "completed" | "upcoming"
  progress?: number
}

interface Assignment {
  id: string
  title: string
  course: string
  dueDate: string
  status: "submitted" | "pending" | "graded"
  grade?: string
}

export default function StudentDashboard() {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "theo101",
      code: "THEO101",
      title: "Introduction to Biblical Studies",
      instructor: "Dr. Esckinder Taddesse",
      credits: 3,
      grade: "A",
      status: "completed",
      progress: 100,
    },
    {
      id: "theo203",
      code: "THEO203",
      title: "Systematic Theology I",
      instructor: "Dr. Endale Gebremeskel",
      credits: 3,
      status: "in-progress",
      progress: 65,
    },
    {
      id: "hist202",
      code: "HIST202",
      title: "Church History II",
      instructor: "Pr. Tsadiku Abdo",
      credits: 3,
      status: "in-progress",
      progress: 42,
    },
    {
      id: "prac301",
      code: "PRAC301",
      title: "Homiletics",
      instructor: "Inst. Eyob Mulau",
      credits: 2,
      status: "upcoming",
    },
  ])

  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: "assign1",
      title: "Theological Reflection Paper",
      course: "THEO203",
      dueDate: "2023-11-15",
      status: "submitted",
    },
    {
      id: "assign2",
      title: "Exegesis Assignment",
      course: "THEO203",
      dueDate: "2023-11-22",
      status: "pending",
    },
    {
      id: "assign3",
      title: "Church History Timeline",
      course: "HIST202",
      dueDate: "2023-11-18",
      status: "graded",
      grade: "B+",
    },
  ])

  const studentInfo = {
    name: "John Doe",
    id: "STU2023001",
    program: "Bachelor of Theology",
    year: "2nd Year",
    advisor: "Dr. Endale Gebremeskel",
    gpa: "3.75",
    credits: {
      completed: 36,
      inProgress: 9,
      required: 120,
    },
  }

  const announcements = [
    {
      id: 1,
      title: "Registration for Spring 2024 Now Open",
      date: "November 10, 2023",
      content:
        "Registration for Spring 2024 semester is now open. Please consult with your academic advisor before registering.",
    },

  ]

  return (
    <DashboardShell
      user={{
        name: studentInfo.name,
        role: "Student",
        image: "/placeholder.svg?height=32&width=32",
      }}
      navItems={[
        { label: "Dashboard", icon: <Home className="h-4 w-4" />, href: "/dashboard/student" },
        { label: "Courses", icon: <BookOpen className="h-4 w-4" />, href: "/dashboard/student/courses" },
        { label: "Grades", icon: <BarChart className="h-4 w-4" />, href: "/dashboard/student/grades" },
        { label: "Calendar", icon: <Calendar className="h-4 w-4" />, href: "/dashboard/student/calendar" },
        { label: "Profile", icon: <User className="h-4 w-4" />, href: "/dashboard/student/profile" },
        { label: "Settings", icon: <Settings className="h-4 w-4" />, href: "/dashboard/student/settings" },
      ]}
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <Button variant="outline" size="sm" className="gap-2">
            <Bell className="h-4 w-4" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentInfo.gpa}</div>
              <p className="text-xs text-muted-foreground">Last updated: November 10, 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credits Completed</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentInfo.credits.completed}</div>
              <Progress
                value={(studentInfo.credits.completed / studentInfo.credits.required) * 100}
                className="h-2 mt-2"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {studentInfo.credits.completed} of {studentInfo.credits.required} credits (
                {Math.round((studentInfo.credits.completed / studentInfo.credits.required) * 100)}%)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.filter((c) => c.status === "in-progress").length}</div>
              <p className="text-xs text-muted-foreground">{studentInfo.credits.inProgress} credits in progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Assignments</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground">
                Next due: {assignments.find((a) => a.status === "pending")?.dueDate}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
                <CardDescription>Your enrolled courses for this semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses
                    .filter((course) => course.status !== "upcoming")
                    .map((course) => (
                      <div key={course.id} className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{course.code}</span>
                              <Badge variant={course.status === "completed" ? "outline" : "default"}>
                                {course.status === "completed" ? "Completed" : "In Progress"}
                              </Badge>
                            </div>
                            <p>{course.title}</p>
                            <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                          </div>
                          <div className="text-right">
                            {course.grade && <div className="text-lg font-bold">{course.grade}</div>}
                            <div className="text-sm">{course.credits} credits</div>
                          </div>
                        </div>
                        {course.progress !== undefined && (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/student/courses">View All Courses</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assignments</CardTitle>
                <CardDescription>Your recent and upcoming assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{assignment.title}</div>
                        <div className="text-sm text-muted-foreground">Course: {assignment.course}</div>
                        <div className="text-sm text-muted-foreground">Due: {assignment.dueDate}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            assignment.status === "submitted"
                              ? "secondary"
                              : assignment.status === "graded"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {assignment.status === "submitted"
                            ? "Submitted"
                            : assignment.status === "graded"
                              ? "Graded"
                              : "Pending"}
                        </Badge>
                        {assignment.grade && <div className="font-bold">{assignment.grade}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Assignments
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4 mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt={studentInfo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{studentInfo.name}</h3>
                    <p className="text-muted-foreground">{studentInfo.id}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Program:</span>
                    <span className="font-medium">{studentInfo.program}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-medium">{studentInfo.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Academic Advisor:</span>
                    <span className="font-medium">{studentInfo.advisor}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/dashboard/student/profile">View Full Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="space-y-2">
                      <div className="font-semibold">{announcement.title}</div>
                      <div className="text-sm text-muted-foreground">{announcement.date}</div>
                      <p className="text-sm">{announcement.content}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Announcements
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Academic Calendar</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Download className="h-5 w-5" />
                    <span>Download Transcript</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <FileText className="h-5 w-5" />
                    <span>Course Catalog</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                    <Settings className="h-5 w-5" />
                    <span>Account Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

