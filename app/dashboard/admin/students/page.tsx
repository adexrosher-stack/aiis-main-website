"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import {
  Download,
  Filter,
  Search,
  Trash2,
  UserPlus,
  Users,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  GraduationCap,
  Edit,
  Eye,
} from "lucide-react"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
  
// Mock data for students
const mockStudents = [
  {
    id: "STU001",
    name: "John Doe",
    email: "john.doe@example.com",
    program: "Bachelor of Theology",
    year: "3rd Year",
    status: "Active",
    gpa: "3.8",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    program: "Master of Divinity",
    year: "2nd Year",
    status: "Active",
    gpa: "3.9",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU003",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    program: "PhD in Religious Studies",
    year: "1st Year",
    status: "Active",
    gpa: "4.0",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU004",
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    program: "Certificate in Biblical Studies",
    year: "Completed",
    status: "Alumni",
    gpa: "3.7",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU005",
    name: "David Brown",
    email: "david.b@example.com",
    program: "Bachelor of Theology",
    year: "2nd Year",
    status: "On Leave",
    gpa: "3.5",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU006",
    name: "Emily Davis",
    email: "emily.d@example.com",
    program: "Master of Theology",
    year: "1st Year",
    status: "Active",
    gpa: "3.6",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU007",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    program: "Bachelor of Religious Education",
    year: "4th Year",
    status: "Active",
    gpa: "3.4",
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Mock data for student details
const studentDetails = {
  id: "STU001",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+254 712 345 678",
  address: "123 University Way, Nairobi, Kenya",
  dateOfBirth: "15 May 1998",
  nationality: "Kenyan",
  program: "Bachelor of Theology",
  year: "3rd Year",
  enrollmentDate: "September 2021",
  expectedGraduation: "June 2024",
  status: "Active",
  gpa: "3.8",
  advisor: "Dr. Sarah Johnson",
  image: "/placeholder.svg?height=200&width=200",
  courses: [
    { code: "THE101", name: "Introduction to Theology", grade: "A" },
    { code: "BIB201", name: "Biblical Hermeneutics", grade: "A-" },
    { code: "ETH301", name: "Christian Ethics", grade: "B+" },
    { code: "HIS202", name: "Church History", grade: "A" },
    { code: "MIN301", name: "Pastoral Ministry", grade: "A-" },
  ],
  financialStatus: "Scholarship (75%)",
  balance: "$1,250",
  lastPayment: "15 March 2023",
  activities: ["Student Council Representative", "Chapel Worship Team", "Community Outreach Program"],
}

// Mock programs for dropdown
const programs = [
  "Bachelor of Theology",
  "Master of Divinity",
  "Master of Theology",
  "PhD in Religious Studies",
  "Certificate in Biblical Studies",
  "Bachelor of Religious Education",
]

// Mock statuses for dropdown
const statuses = ["Active", "On Leave", "Suspended", "Alumni", "Withdrawn"]

export default function StudentsPage() {
  const { toast } = useToast()
  const [students, setStudents] = useState(mockStudents)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    email: "",
    program: "",
    year: "",
    status: "",
    gpa: "",
  })

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle view student
  const handleViewStudent = (student) => {
    setSelectedStudent(student)
    setIsViewDialogOpen(true)
  }

  // Handle edit student
  const handleEditStudent = (student) => {
    setSelectedStudent(student)
    setEditFormData({
      id: student.id,
      name: student.name,
      email: student.email,
      program: student.program,
      year: student.year,
      status: student.status,
      gpa: student.gpa,
    })
    setIsEditDialogOpen(true)
  }

  // Handle delete student
  const handleDeleteStudent = (student) => {
    setSelectedStudent(student)
    setIsDeleteDialogOpen(true)
  }

  // Handle edit form change
  const handleEditFormChange = (e) => {
    const { name, value } = e.target
    setEditFormData({
      ...editFormData,
      [name]: value,
    })
  }

  // Handle edit form submit
  const handleEditFormSubmit = () => {
    const updatedStudents = students.map((student) =>
      student.id === editFormData.id ? { ...student, ...editFormData } : student,
    )
    setStudents(updatedStudents)
    setIsEditDialogOpen(false)
    toast({
      title: "Student updated",
      description: `${editFormData.name}'s information has been updated.`,
    })
  }

  // Handle delete confirm
  const handleDeleteConfirm = () => {
    const updatedStudents = students.filter((student) => student.id !== selectedStudent.id)
    setStudents(updatedStudents)
    setIsDeleteDialogOpen(false)
    toast({
      title: "Student deleted",
      description: `${selectedStudent.name} has been removed from the system.`,
      variant: "destructive",
    })
  }

  // Handle add new student
  const handleAddNewStudent = () => {
    const newStudent = {
      id: `STU${String(students.length + 1).padStart(3, "0")}`,
      name: editFormData.name,
      email: editFormData.email,
      program: editFormData.program,
      year: editFormData.year,
      status: editFormData.status,
      gpa: editFormData.gpa,
      image: "/placeholder.svg?height=40&width=40",
    }
    setStudents([...students, newStudent])
    setIsAddDialogOpen(false)
    toast({
      title: "Student added",
      description: `${editFormData.name} has been added to the system.`,
    })
  }

  // Navigation items for the dashboard
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: "Students",
      href: "/dashboard/admin/students",
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: "Courses",
      href: "/dashboard/admin/courses",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      label: "Faculty",
      href: "/dashboard/admin/faculty",
      icon: <GraduationCap className="h-4 w-4" />,
    },
    {
      label: "Applications",
      href: "/dashboard/admin/applications",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Reports",
      href: "/dashboard/admin/reports",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Settings",
      href: "/dashboard/admin/settings",
      icon: <FileText className="h-4 w-4" />,
    },
  ]

  // Mock user for the dashboard shell
  const user = {
    name: "Admin User",
    role: "Administrator",
    image: "/placeholder.svg?height=32&width=32",
  }

  return (
    <DashboardShell navItems={navItems} user={user}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Students</h1>
            <p className="text-muted-foreground">Manage student records and information</p>
          </div>
          <Button
            onClick={() => {
              setEditFormData({
                id: "",
                name: "",
                email: "",
                program: "",
                year: "",
                status: "Active",
                gpa: "",
              })
              setIsAddDialogOpen(true)
            }}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Student
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Program</DropdownMenuLabel>
                {programs.map((program) => (
                  <DropdownMenuItem key={program}>{program}</DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Status</DropdownMenuLabel>
                {statuses.map((status) => (
                  <DropdownMenuItem key={status}>{status}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>GPA</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={student.image || "/placeholder.svg"}
                            alt={student.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span>{student.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          student.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : student.status === "On Leave"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : student.status === "Alumni"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {student.status}
                      </span>
                    </TableCell>
                    <TableCell>{student.gpa}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleViewStudent(student)}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleEditStudent(student)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteStudent(student)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t p-4">
            <div className="text-xs text-muted-foreground">
              Showing <strong>{filteredStudents.length}</strong> of <strong>{students.length}</strong> students
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* View Student Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Student Details</DialogTitle>
            <DialogDescription>Comprehensive information about the student</DialogDescription>
          </DialogHeader>
          {selectedStudent && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 flex flex-col items-center">
                <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src={studentDetails.image || "/placeholder.svg"}
                    alt={studentDetails.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{studentDetails.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{studentDetails.id}</p>
                <div className="flex items-center gap-1 text-sm mb-1">
                  <Mail className="h-4 w-4" />
                  <span>{studentDetails.email}</span>
                </div>
                <div className="flex items-center gap-1 text-sm mb-1">
                  <Phone className="h-4 w-4" />
                  <span>{studentDetails.phone}</span>
                </div>
                <div className="flex items-center gap-1 text-sm mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>{studentDetails.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>DOB: {studentDetails.dateOfBirth}</span>
                </div>
              </div>
              <div className="col-span-2">
                <Tabs defaultValue="general">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="academic">Academic</TabsTrigger>
                    <TabsTrigger value="financial">Financial</TabsTrigger>
                  </TabsList>
                  <TabsContent value="general" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Nationality</h4>
                        <p>{studentDetails.nationality}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                        <p>{studentDetails.status}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Program</h4>
                        <p>{studentDetails.program}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Year</h4>
                        <p>{studentDetails.year}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Enrollment Date</h4>
                        <p>{studentDetails.enrollmentDate}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Expected Graduation</h4>
                        <p>{studentDetails.expectedGraduation}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Advisor</h4>
                        <p>{studentDetails.advisor}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Activities & Involvement</h4>
                      <ul className="list-disc pl-5">
                        {studentDetails.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="academic" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Current Courses</h4>
                      <div className="text-sm font-medium">
                        GPA: <span className="text-primary">{studentDetails.gpa}</span>
                      </div>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course Code</TableHead>
                          <TableHead>Course Name</TableHead>
                          <TableHead>Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {studentDetails.courses.map((course, index) => (
                          <TableRow key={index}>
                            <TableCell>{course.code}</TableCell>
                            <TableCell>{course.name}</TableCell>
                            <TableCell>{course.grade}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>
                  <TabsContent value="financial" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Financial Status</h4>
                        <p>{studentDetails.financialStatus}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Current Balance</h4>
                        <p>{studentDetails.balance}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Last Payment</h4>
                        <p>{studentDetails.lastPayment}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Payment History</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>15 Mar 2023</TableCell>
                            <TableCell>Tuition Payment</TableCell>
                            <TableCell>$2,500</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>10 Jan 2023</TableCell>
                            <TableCell>Scholarship Credit</TableCell>
                            <TableCell>$5,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>05 Sep 2022</TableCell>
                            <TableCell>Tuition Payment</TableCell>
                            <TableCell>$3,000</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => {
                setIsViewDialogOpen(false)
                handleEditStudent(selectedStudent)
              }}
            >
              Edit Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Student Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Student</DialogTitle>
            <DialogDescription>Update student information in the system</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id" className="text-right">
                Student ID
              </Label>
              <Input id="id" name="id" value={editFormData.id} className="col-span-3" disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="program" className="text-right">
                Program
              </Label>
              <Select
                name="program"
                value={editFormData.program}
                onValueChange={(value) => setEditFormData({ ...editFormData, program: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="year" className="text-right">
                Year
              </Label>
              <Select
                name="year"
                value={editFormData.year}
                onValueChange={(value) => setEditFormData({ ...editFormData, year: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1st Year">1st Year</SelectItem>
                  <SelectItem value="2nd Year">2nd Year</SelectItem>
                  <SelectItem value="3rd Year">3rd Year</SelectItem>
                  <SelectItem value="4th Year">4th Year</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select
                name="status"
                value={editFormData.status}
                onValueChange={(value) => setEditFormData({ ...editFormData, status: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="gpa" className="text-right">
                GPA
              </Label>
              <Input
                id="gpa"
                name="gpa"
                value={editFormData.gpa}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditFormSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Student Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this student? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedStudent && (
            <div className="flex items-center gap-4 py-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={selectedStudent.image || "/placeholder.svg"}
                  alt={selectedStudent.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{selectedStudent.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedStudent.id} • {selectedStudent.program}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add New Student Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Student Registration</DialogTitle>
            <DialogDescription>Enter comprehensive details for the new student</DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="personal">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="academic">Academic Details</TabsTrigger>
              <TabsTrigger value="contact">Contact & Emergency</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    onChange={(e) => setEditFormData({ ...editFormData, dob: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select name="gender" onValueChange={(value) => setEditFormData({ ...editFormData, gender: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    name="nationality"
                    placeholder="Enter nationality"
                    onChange={(e) => setEditFormData({ ...editFormData, nationality: e.target.value })}
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="bio">Brief Biography</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Enter a brief biography"
                    onChange={(e) => setEditFormData({ ...editFormData, bio: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="academic" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="program">Program</Label>
                  <Select
                    name="program"
                    value={editFormData.program}
                    onValueChange={(value) => setEditFormData({ ...editFormData, program: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    name="department"
                    onValueChange={(value) => setEditFormData({ ...editFormData, department: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="theology">Theology</SelectItem>
                      <SelectItem value="religious_studies">Religious Studies</SelectItem>
                      <SelectItem value="biblical_studies">Biblical Studies</SelectItem>
                      <SelectItem value="philosophy">Philosophy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Select
                    name="year"
                    value={editFormData.year}
                    onValueChange={(value) => setEditFormData({ ...editFormData, year: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st Year">1st Year</SelectItem>
                      <SelectItem value="2nd Year">2nd Year</SelectItem>
                      <SelectItem value="3rd Year">3rd Year</SelectItem>
                      <SelectItem value="4th Year">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enrollmentDate">Enrollment Date</Label>
                  <Input
                    id="enrollmentDate"
                    name="enrollmentDate"
                    type="date"
                    onChange={(e) => setEditFormData({ ...editFormData, enrollmentDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    name="status"
                    value={editFormData.status}
                    onValueChange={(value) => setEditFormData({ ...editFormData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previousEducation">Previous Education</Label>
                  <Input
                    id="previousEducation"
                    name="previousEducation"
                    placeholder="Enter previous education"
                    onChange={(e) => setEditFormData({ ...editFormData, previousEducation: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Enter full address"
                    onChange={(e) => setEditFormData({ ...editFormData, address: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                  <Input
                    id="emergencyContact"
                    name="emergencyContact"
                    placeholder="Enter emergency contact name"
                    onChange={(e) => setEditFormData({ ...editFormData, emergencyContact: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                  <Input
                    id="emergencyPhone"
                    name="emergencyPhone"
                    placeholder="Enter emergency contact phone"
                    onChange={(e) => setEditFormData({ ...editFormData, emergencyPhone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationship">Relationship to Emergency Contact</Label>
                  <Input
                    id="relationship"
                    name="relationship"
                    placeholder="Enter relationship"
                    onChange={(e) => setEditFormData({ ...editFormData, relationship: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddNewStudent}>Register Student</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}

