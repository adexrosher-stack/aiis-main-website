"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, FileText, BarChart } from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"

interface Course {
  id: string
  code: string
  title: string
  instructor: string
  semester: string
  year: string
  credits: number
  grade?: string
  status: "in-progress" | "completed"
}

interface GradeItem {
  id: string
  courseId: string
  title: string
  type: "assignment" | "quiz" | "exam" | "project" | "participation"
  weight: number
  score: number
  maxScore: number
  date: string
}

export default function StudentGradesPage() {
  const [courses] = useState<Course[]>([
    {
      id: "theo101",
      code: "THEO101",
      title: "Introduction to Biblical Studies",
      instructor: "Dr. Esckinder Taddesse",
      semester: "Fall",
      year: "2022",
      credits: 3,
      grade: "A",
      status: "completed",
    },
    {
      id: "theo102",
      code: "THEO102",
      title: "Old Testament Survey",
      instructor: "Dr. Endale Gebremeskel",
      semester: "Fall",
      year: "2022",
      credits: 3,
      grade: "A-",
      status: "completed",
    },
    {
      id: "hist101",
      code: "HIST101",
      title: "Church History I",
      instructor: "Pr. Tsadiku Abdo",
      semester: "Fall",
      year: "2022",
      credits: 3,
      grade: "B+",
      status: "completed",
    },
    {
      id: "theo201",
      code: "THEO201",
      title: "New Testament Survey",
      instructor: "Dr. Esckinder Taddesse",
      semester: "Spring",
      year: "2023",
      credits: 3,
      grade: "A",
      status: "completed",
    },
    {
      id: "theo202",
      code: "THEO202",
      title: "Biblical Hermeneutics",
      instructor: "Dr. Abeba Belay",
      semester: "Spring",
      year: "2023",
      credits: 3,
      grade: "B",
      status: "completed",
    },
    {
      id: "theo203",
      code: "THEO203",
      title: "Systematic Theology I",
      instructor: "Dr. Endale Gebremeskel",
      semester: "Fall",
      year: "2023",
      credits: 3,
      status: "in-progress",
    },
    {
      id: "hist202",
      code: "HIST202",
      title: "Church History II",
      instructor: "Pr. Tsadiku Abdo",
      semester: "Fall",
      year: "2023",
      credits: 3,
      status: "in-progress",
    },
  ])

  const [gradeItems] = useState<GradeItem[]>([
    {
      id: "item1",
      courseId: "theo203",
      title: "Midterm Exam",
      type: "exam",
      weight: 30,
      score: 85,
      maxScore: 100,
      date: "2023-10-15",
    },
    {
      id: "item2",
      courseId: "theo203",
      title: "Research Paper",
      type: "assignment",
      weight: 20,
      score: 90,
      maxScore: 100,
      date: "2023-10-30",
    },
    {
      id: "item3",
      courseId: "theo203",
      title: "Quiz 1",
      type: "quiz",
      weight: 10,
      score: 18,
      maxScore: 20,
      date: "2023-09-20",
    },
    {
      id: "item4",
      courseId: "hist202",
      title: "Midterm Exam",
      type: "exam",
      weight: 30,
      score: 78,
      maxScore: 100,
      date: "2023-10-18",
    },
    {
      id: "item5",
      courseId: "hist202",
      title: "Timeline Project",
      type: "project",
      weight: 25,
      score: 88,
      maxScore: 100,
      date: "2023-11-05",
    },
  ])

  const [selectedCourse, setSelectedCourse] = useState<string>("theo203")
  const [selectedSemester, setSelectedSemester] = useState<string>("all")

  const studentInfo = {
    name: "John Doe",
    id: "STU2023001",
    program: "Bachelor of Theology",
    gpa: "3.75",
  }

  const filteredCourses =
    selectedSemester === "all"
      ? courses
      : courses.filter((course) => `${course.semester}-${course.year}` === selectedSemester)

  const courseGradeItems = gradeItems.filter((item) => item.courseId === selectedCourse)
  const selectedCourseInfo = courses.find((course) => course.id === selectedCourse)

  // Calculate weighted average for the selected course
  const totalWeight = courseGradeItems.reduce((sum, item) => sum + item.weight, 0)
  const weightedSum = courseGradeItems.reduce((sum, item) => sum + (item.score / item.maxScore) * item.weight, 0)
  const weightedAverage = totalWeight > 0 ? (weightedSum / totalWeight) * 100 : 0

  // Get unique semesters
  const semesters = Array.from(new Set(courses.map((course) => `${course.semester}-${course.year}`)))

  return (
    <DashboardShell
      user={{
        name: studentInfo.name,
        role: "Student",
        image: "/placeholder.svg?height=32&width=32",
      }}
      navItems={[
        { label: "Dashboard", icon: <FileText className="h-4 w-4" />, href: "/dashboard/student" },
        { label: "Courses", icon: <FileText className="h-4 w-4" />, href: "/dashboard/student/courses" },
        { label: "Grades", icon: <BarChart className="h-4 w-4" />, href: "/dashboard/student/grades" },
        { label: "Calendar", icon: <FileText className="h-4 w-4" />, href: "/dashboard/student/calendar" },
        { label: "Profile", icon: <FileText className="h-4 w-4" />, href: "/dashboard/student/profile" },
        { label: "Settings", icon: <FileText className="h-4 w-4" />, href: "/dashboard/student/settings" },
      ]}
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Academic Records</h1>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download Transcript
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Cumulative GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{studentInfo.gpa}</div>
              <p className="text-sm text-muted-foreground mt-2">
                Based on {courses.filter((c) => c.status === "completed").length} completed courses
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Credits Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                {courses.filter((c) => c.status === "completed").reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Out of 120 required for graduation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Current Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">Fall 2023</div>
              <p className="text-sm text-muted-foreground mt-2">
                {courses.filter((c) => c.status === "in-progress").length} courses in progress
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          <Card className="md:col-span-5">
            <CardHeader>
              <CardTitle>Course History</CardTitle>
              <CardDescription>View your grades by semester</CardDescription>
              <div className="mt-2">
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    {semesters.map((semester) => (
                      <SelectItem key={semester} value={semester}>
                        {semester}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
                  <div className="col-span-2">Code</div>
                  <div className="col-span-6">Course</div>
                  <div className="col-span-2">Credits</div>
                  <div className="col-span-2 text-right">Grade</div>
                </div>
                <div className="space-y-2">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className={`grid grid-cols-12 py-2 px-2 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 ${selectedCourse === course.id ? "bg-slate-100 dark:bg-slate-800" : ""}`}
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      <div className="col-span-2 font-medium">{course.code}</div>
                      <div className="col-span-6">{course.title}</div>
                      <div className="col-span-2">{course.credits}</div>
                      <div className="col-span-2 text-right font-medium">
                        {course.grade || (course.status === "in-progress" ? "IP" : "N/A")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-7">
            <CardHeader>
              <CardTitle>{selectedCourseInfo?.title || "Select a course"}</CardTitle>
              <CardDescription>
                {selectedCourseInfo
                  ? `${selectedCourseInfo.code} • ${selectedCourseInfo.instructor} • ${selectedCourseInfo.semester} ${selectedCourseInfo.year}`
                  : "View detailed grade breakdown"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedCourseInfo ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Current Grade</div>
                      <div className="text-3xl font-bold">
                        {selectedCourseInfo.grade ||
                          (weightedAverage > 0 ? `${weightedAverage.toFixed(1)}%` : "In Progress")}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Status</div>
                      <div className="font-medium capitalize">{selectedCourseInfo.status.replace("-", " ")}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3">Grade Breakdown</h4>
                    {courseGradeItems.length > 0 ? (
                      <div className="space-y-3">
                        <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
                          <div className="col-span-5">Item</div>
                          <div className="col-span-2">Type</div>
                          <div className="col-span-2">Weight</div>
                          <div className="col-span-3 text-right">Score</div>
                        </div>
                        <div className="space-y-2">
                          {courseGradeItems.map((item) => (
                            <div key={item.id} className="grid grid-cols-12 py-2">
                              <div className="col-span-5 font-medium">{item.title}</div>
                              <div className="col-span-2 capitalize">{item.type}</div>
                              <div className="col-span-2">{item.weight}%</div>
                              <div className="col-span-3 text-right">
                                {item.score}/{item.maxScore} ({((item.score / item.maxScore) * 100).toFixed(1)}%)
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No grade items available for this course yet.
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  Select a course from the list to view detailed grade information.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}

