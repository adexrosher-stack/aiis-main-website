"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Download,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Users,
  BarChart,
  PlusCircle,
  Search,
  CheckCircle,
  MoreHorizontal,
  Trash2,
  Edit,
  Eye,
  CalendarDays,
  Folders,
} from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Add the following imports at the top of the file
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

interface Department {
  id: string
  name: string
  code: string
}

interface Course {
  id: string
  code: string
  title: string
  instructor: string
  semester: string
  year: string
  students: number
  credits: number
  status: "active" | "upcoming" | "completed"
  startDate?: string
  endDate?: string
  department: string
  departmentId?: string
  description?: string
  enrollmentCount?: number
  term?: string
}

export default function CoursesPage() {
  const [departments, setDepartments] = useState<Department[]>([
    { id: "dept-001", name: "Biblical Studies", code: "BIB" },
    { id: "dept-002", name: "Systematic Theology", code: "THEO" },
    { id: "dept-003", name: "Church History", code: "HIST" },
    { id: "dept-004", name: "Practical Theology", code: "PRAC" },
    { id: "dept-005", name: "Missiology", code: "MISS" },
    { id: "dept-006", name: "Ethics", code: "ETH" },
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
      credits: 3,
      status: "active",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      department: "Biblical Studies",
      departmentId: "dept-001",
      description:
        "An introductory course to the study of the Bible, covering its historical context, literary genres, and theological themes.",
      enrollmentCount: 35,
      term: "Fall 2023",
    },
    {
      id: "theo203",
      code: "THEO203",
      title: "Systematic Theology I",
      instructor: "Dr. Endale Gebremeskel",
      semester: "Fall",
      year: "2023",
      students: 28,
      credits: 3,
      status: "active",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      department: "Systematic Theology",
      departmentId: "dept-002",
      description:
        "A comprehensive study of the doctrines of the Christian faith, including the nature of God, creation, and humanity.",
      enrollmentCount: 28,
      term: "Fall 2023",
    },
    {
      id: "hist202",
      code: "HIST202",
      title: "Church History II",
      instructor: "Pr. Tsadiku Abdo",
      semester: "Fall",
      year: "2023",
      students: 22,
      credits: 3,
      status: "active",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      department: "Church History",
      departmentId: "dept-003",
      description:
        "A survey of the history of the Christian church from the Reformation to the present day, examining key events, figures, and movements.",
      enrollmentCount: 22,
      term: "Fall 2023",
    },
    {
      id: "theo301",
      code: "THEO301",
      title: "Biblical Hermeneutics",
      instructor: "Dr. Abeba Belay",
      semester: "Spring",
      year: "2024",
      students: 0,
      credits: 3,
      status: "upcoming",
      startDate: "2024-01-15",
      endDate: "2024-05-10",
      department: "Biblical Studies",
      departmentId: "dept-001",
      description:
        "An exploration of the principles and methods of interpreting the Bible, with attention to historical, literary, and theological contexts.",
      enrollmentCount: 0,
      term: "Spring 2024",
    },
    {
      id: "theo102",
      code: "THEO102",
      title: "Old Testament Survey",
      instructor: "Dr. Endale Gebremeskel",
      semester: "Spring",
      year: "2023",
      students: 42,
      credits: 3,
      status: "completed",
      startDate: "2023-01-15",
      endDate: "2023-05-10",
      department: "Biblical Studies",
      departmentId: "dept-001",
      description: "A comprehensive overview of the Old Testament, covering its major books, characters, and themes.",
      enrollmentCount: 42,
      term: "Spring 2023",
    },
    {
      id: "theo201",
      code: "THEO201",
      title: "New Testament Survey",
      instructor: "Dr. Esckinder Taddesse",
      semester: "Spring",
      year: "2023",
      students: 38,
      credits: 3,
      status: "completed",
      startDate: "2023-01-15",
      endDate: "2023-05-10",
      department: "Biblical Studies",
      departmentId: "dept-001",
      description: "A comprehensive overview of the New Testament, covering its major books, characters, and themes.",
      enrollmentCount: 38,
      term: "Spring 2023",
    },
    {
      id: "prac301",
      code: "PRAC301",
      title: "Homiletics",
      instructor: "Inst. Eyob Mulau",
      semester: "Fall",
      year: "2023",
      students: 18,
      credits: 2,
      status: "active",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      department: "Practical Theology",
      departmentId: "dept-004",
      description:
        "A study of the art and science of preaching, with attention to sermon preparation, delivery, and evaluation.",
      enrollmentCount: 18,
      term: "Fall 2023",
    },
    {
      id: "miss201",
      code: "MISS201",
      title: "Introduction to Missiology",
      instructor: "Dr. Lidetu Alemu",
      semester: "Fall",
      year: "2023",
      students: 25,
      credits: 3,
      status: "active",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      department: "Missiology",
      departmentId: "dept-005",
      description: "An introduction to the study of Christian missions, covering its history, theology, and practice.",
      enrollmentCount: 25,
      term: "Fall 2023",
    },
    {
      id: "theo401",
      code: "THEO401",
      title: "Advanced Systematic Theology",
      instructor: "Dr. Wendaferahu Adenew",
      semester: "Spring",
      year: "2024",
      students: 0,
      credits: 3,
      status: "upcoming",
      startDate: "2024-01-15",
      endDate: "2024-05-10",
      department: "Systematic Theology",
      departmentId: "dept-002",
      description:
        "An in-depth study of selected topics in systematic theology, with attention to contemporary issues and debates.",
      enrollmentCount: 0,
      term: "Spring 2024",
    },
    {
      id: "eth301",
      code: "ETH301",
      title: "Christian Ethics",
      instructor: "Dr. Menkir Isayas",
      semester: "Spring",
      year: "2024",
      students: 0,
      credits: 3,
      status: "upcoming",
      startDate: "2024-01-15",
      endDate: "2024-05-10",
      department: "Ethics",
      departmentId: "dept-006",
      description:
        "An examination of the ethical teachings of the Christian faith, with attention to their application to contemporary moral issues.",
      enrollmentCount: 0,
      term: "Spring 2024",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [semesterFilter, setSemesterFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  // Add these state variables inside the CoursesPage component, after the existing useState declarations
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState<Course | null>(null)

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  }

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSemester = semesterFilter === "all" || `${course.semester} ${course.year}` === semesterFilter
    const matchesStatus = statusFilter === "all" || course.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || course.department === departmentFilter

    return matchesSearch && matchesSemester && matchesStatus && matchesDepartment
  })

  // Get unique semesters, departments for filter options
  const semesters = Array.from(new Set(courses.map((course) => `${course.semester} ${course.year}`)))
  // const departments = Array.from(new Set(courses.map((course) => course.department)))

  // Calculate statistics
  const activeCourses = courses.filter((course) => course.status === "active").length
  const upcomingCourses = courses.filter((course) => course.status === "upcoming").length
  const completedCourses = courses.filter((course) => course.status === "completed").length
  const totalStudentsEnrolled = courses
    .filter((course) => course.status === "active")
    .reduce((sum, course) => sum + course.students, 0)

  // Add these functions inside the CoursesPage component, before the return statement
  const handleViewCourse = (course: Course) => {
    setSelectedCourse(course)
    setIsViewDialogOpen(true)
  }

  const handleEditCourse = (course: Course) => {
    setSelectedCourse(course)
    setEditFormData({ ...course })
    setIsEditDialogOpen(true)
  }

  const handleDeleteCourse = (course: Course) => {
    setSelectedCourse(course)
    setIsDeleteDialogOpen(true)
  }

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const saveEditedCourse = () => {
    if (editFormData && selectedCourse) {
      // Update department name based on selected departmentId
      const selectedDept = departments.find((dept) => dept.id === editFormData.departmentId)
      if (selectedDept) {
        editFormData.department = selectedDept.name
      }

      const updatedCourses = courses.map((course) => (course.id === selectedCourse.id ? editFormData : course))
      setCourses(updatedCourses)
      setIsEditDialogOpen(false)
      toast({
        title: "Course updated",
        description: `${editFormData.title} has been updated successfully.`,
      })
    }
  }

  const confirmDeleteCourse = () => {
    if (selectedCourse) {
      const updatedCourses = courses.filter((course) => course.id !== selectedCourse.id)
      setCourses(updatedCourses)
      setIsDeleteDialogOpen(false)
      toast({
        title: "Course deleted",
        description: `${selectedCourse.title} has been removed from the system.`,
        variant: "destructive",
      })
    }
  }

  const addNewCourse = () => {
    const newId = `CRS${new Date().getFullYear()}${(courses.length + 1).toString().padStart(3, "0")}`
    const defaultDepartmentId = departments[0]?.id || ""
    const defaultDepartment = departments[0]?.name || ""

    const newCourse: Course = {
      id: newId,
      code: "NEW101",
      title: "New Course",
      department: defaultDepartment,
      departmentId: defaultDepartmentId,
      credits: 3,
      instructor: "TBD",
      status: "upcoming",
      description: "Course description goes here",
      enrollmentCount: 0,
      term: "Fall 2023",
      semester: "Fall",
      year: "2023",
      students: 0,
    }

    setCourses([newCourse, ...courses])
    setSelectedCourse(newCourse)
    setEditFormData(newCourse)
    setIsEditDialogOpen(true)
    toast({
      title: "New course added",
      description: "Please complete the course information.",
    })
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
        { label: "Departments", icon: <Folders className="h-4 w-4" />, href: "/dashboard/admin/departments" },
        { label: "Faculty", icon: <GraduationCap className="h-4 w-4" />, href: "/dashboard/admin/faculty" },
        { label: "Applications", icon: <FileText className="h-4 w-4" />, href: "/dashboard/admin/applications" },
        { label: "Reports", icon: <BarChart className="h-4 w-4" />, href: "/dashboard/admin/reports" },
        { label: "Settings", icon: <Settings className="h-4 w-4" />, href: "/dashboard/admin/settings" },
      ]}
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Course Management</h1>
            <p className="text-muted-foreground">View and manage all courses</p>
          </div>
          <Button className="gap-2" onClick={addNewCourse}>
            <PlusCircle className="h-4 w-4" />
            Add New Course
          </Button>
        </div>

        {/* Course Statistics */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <div className="rounded-full bg-primary/10 p-2">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeCourses}</div>
              <div className="text-xs text-muted-foreground">Fall 2023 Semester</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Courses</CardTitle>
              <div className="rounded-full bg-blue-500/10 p-2">
                <CalendarDays className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{upcomingCourses}</div>
              <div className="text-xs text-muted-foreground">Spring 2024 Semester</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
              <div className="rounded-full bg-amber-500/10 p-2">
                <CheckCircle className="h-4 w-4 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedCourses}</div>
              <div className="text-xs text-muted-foreground">Previous Semesters</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students Enrolled</CardTitle>
              <div className="rounded-full bg-green-500/10 p-2">
                <Users className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudentsEnrolled}</div>
              <div className="text-xs text-muted-foreground">Current Semester</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="md:col-span-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search by title, code, or instructor"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="default" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Semester" />
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

              <div>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map((department) => (
                      <SelectItem key={department.id} value={department.name}>
                        {department.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses Table */}
        <Card>
          <CardHeader>
            <CardTitle>Courses</CardTitle>
            <CardDescription>
              Showing {filteredCourses.length} of {courses.length} courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Semester</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.code}</TableCell>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.department}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>
                      {course.semester} {course.year}
                    </TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>{course.credits}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          course.status === "active"
                            ? "default"
                            : course.status === "upcoming"
                              ? "outline"
                              : "secondary"
                        }
                        className={
                          course.status === "active"
                            ? "bg-green-500 hover:bg-green-600"
                            : course.status === "upcoming"
                              ? "border-blue-500 text-blue-500"
                              : ""
                        }
                      >
                        {course.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        {/* Update the DropdownMenuContent in the Actions dropdown with this updated version */}
                        {/* Find: <DropdownMenuContent align="end"> */}
                        {/* Replace with: */}
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer" onClick={() => handleViewCourse(course)}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer" onClick={() => handleEditCourse(course)}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Course
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Users className="h-4 w-4 mr-2" />
                            Manage Students
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-red-600 cursor-pointer"
                            onClick={() => handleDeleteCourse(course)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Course
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t px-6 py-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>{filteredCourses.length}</strong> of <strong>{courses.length}</strong> courses
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Export Options */}
        <div className="flex justify-end gap-4">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>
      {/* Add these dialog components at the end of the return statement, just before the closing </DashboardShell> tag */}
      {/* Add after: </div> (the last div before the closing DashboardShell tag) */}

      {/* View Course Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Course Details</DialogTitle>
            <DialogDescription>Comprehensive information about the course.</DialogDescription>
          </DialogHeader>

          {selectedCourse && (
            <div className="grid gap-6 py-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{selectedCourse.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant={
                        selectedCourse.status === "active"
                          ? "default"
                          : selectedCourse.status === "completed"
                            ? "outline"
                            : "secondary"
                      }
                      className={selectedCourse.status === "active" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {selectedCourse.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">Code: {selectedCourse.code}</span>
                    <span className="text-sm text-muted-foreground">ID: {selectedCourse.id}</span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="students">Students</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Department</h4>
                      <p>{selectedCourse.department}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Credits</h4>
                      <p>{selectedCourse.credits}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Instructor</h4>
                      <p>{selectedCourse.instructor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Term</h4>
                      <p>{selectedCourse.term}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Enrollment</h4>
                      <p>{selectedCourse.enrollmentCount} students</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Description</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm">{selectedCourse.description}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="syllabus" className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Course Objectives</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Understand key theological concepts</li>
                        <li>Develop critical thinking skills in biblical interpretation</li>
                        <li>Apply theological principles to contemporary issues</li>
                        <li>Engage with diverse perspectives in theological discourse</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Weekly Schedule</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Week 1: Introduction to Course</p>
                      <p className="text-sm">Overview of key concepts and expectations</p>
                      <p className="text-sm font-medium mt-2">Week 2: Foundations</p>
                      <p className="text-sm">Historical context and development</p>
                      <p className="text-sm font-medium mt-2">Week 3-4: Core Principles</p>
                      <p className="text-sm">Detailed examination of fundamental concepts</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Assessment</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm">Midterm Exam: 30%</p>
                      <p className="text-sm">Final Paper: 40%</p>
                      <p className="text-sm">Participation: 10%</p>
                      <p className="text-sm">Weekly Assignments: 20%</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="students" className="space-y-4">
                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium">Enrolled Students ({selectedCourse.enrollmentCount})</p>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-1 border-b">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                          <p className="text-sm">John Doe</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                          <p className="text-sm">Jane Smith</p>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                          <p className="text-sm">Michael Johnson</p>
                        </div>
                        <Badge variant="outline">Probation</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                setIsViewDialogOpen(false)
                if (selectedCourse) handleEditCourse(selectedCourse)
              }}
            >
              Edit Course
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Course Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedCourse?.id ? "Edit Course" : "Add New Course"}</DialogTitle>
            <DialogDescription>
              {selectedCourse?.id
                ? "Make changes to the course information here."
                : "Enter details for the new course."}
            </DialogDescription>
          </DialogHeader>

          {editFormData && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Course Code</Label>
                  <Input id="code" name="code" value={editFormData.code} onChange={handleEditFormChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input id="title" name="title" value={editFormData.title} onChange={handleEditFormChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="departmentId">Department</Label>
                  <Select
                    name="departmentId"
                    value={editFormData.departmentId}
                    onValueChange={(value) => setEditFormData({ ...editFormData, departmentId: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((department) => (
                        <SelectItem key={department.id} value={department.id}>
                          {department.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="credits">Credits</Label>
                  <Input
                    id="credits"
                    name="credits"
                    type="number"
                    min="1"
                    max="6"
                    value={editFormData.credits}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        credits: Number.parseInt(e.target.value) || 3,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructor</Label>
                  <Input
                    id="instructor"
                    name="instructor"
                    value={editFormData.instructor}
                    onChange={handleEditFormChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    name="status"
                    value={editFormData.status}
                    onValueChange={(value: "active" | "upcoming" | "completed") =>
                      setEditFormData({ ...editFormData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="term">Term</Label>
                  <Input id="term" name="term" value={editFormData.term} onChange={handleEditFormChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enrollmentCount">Enrollment Count</Label>
                  <Input
                    id="enrollmentCount"
                    name="enrollmentCount"
                    type="number"
                    min="0"
                    value={editFormData.enrollmentCount}
                    onChange={(e) =>
                      setEditFormData({
                        ...editFormData,
                        enrollmentCount: Number.parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={editFormData.description}
                    onChange={handleEditFormChange}
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditedCourse}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the course "{selectedCourse?.title}" from the system. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteCourse} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardShell>
  )
}

