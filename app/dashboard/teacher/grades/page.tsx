"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import {
  BookOpen,
  FileText,
  Home,
  Settings,
  Users,
  Save,
  Download,
  Filter,
  Search,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Student interface
interface Student {
  id: string
  name: string
  email: string
  program: string
  year: string
}

// Course interface
interface Course {
  id: string
  code: string
  name: string
  department: string
  credits: number
}

// Grade item interface
interface GradeItem {
  id: string
  name: string
  weight: number
  maxScore: number
}

// Student grade interface
interface StudentGrade {
  studentId: string
  gradeItemId: string
  score: number | null
  letterGrade: string | null
}

// Grade level interface
interface GradeLevel {
  letter: string
  minScore: number
  maxScore: number
  gpa: number
}

export default function TeacherGradesPage() {
  const { toast } = useToast()

  // Mock data for students
  const [students] = useState<Student[]>([
    {
      id: "STU001",
      name: "John Doe",
      email: "john.doe@example.com",
      program: "Bachelor of Theology",
      year: "3rd Year",
    },
    {
      id: "STU002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      program: "Master of Divinity",
      year: "2nd Year",
    },
    {
      id: "STU003",
      name: "Michael Johnson",
      email: "michael.j@example.com",
      program: "PhD in Religious Studies",
      year: "1st Year",
    },
    {
      id: "STU004",
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      program: "Certificate in Biblical Studies",
      year: "Completed",
    },
    {
      id: "STU005",
      name: "David Brown",
      email: "david.b@example.com",
      program: "Bachelor of Theology",
      year: "2nd Year",
    },
  ])

  // Mock data for courses
  const [courses] = useState<Course[]>([
    {
      id: "CRS001",
      code: "TH101",
      name: "Introduction to Theology",
      department: "Theology",
      credits: 3,
    },
    {
      id: "CRS002",
      code: "BIB201",
      name: "Biblical Hermeneutics",
      department: "Biblical Studies",
      credits: 4,
    },
    {
      id: "CRS003",
      code: "ETH301",
      name: "Christian Ethics",
      department: "Theology",
      credits: 3,
    },
    {
      id: "CRS004",
      code: "HIS202",
      name: "Church History",
      department: "Religious Studies",
      credits: 3,
    },
    {
      id: "CRS005",
      code: "MIN301",
      name: "Pastoral Ministry",
      department: "Theology",
      credits: 4,
    },
  ])

  // Mock data for grade items
  const [gradeItems, setGradeItems] = useState<GradeItem[]>([
    {
      id: "GI001",
      name: "Midterm Exam",
      weight: 30,
      maxScore: 100,
    },
    {
      id: "GI002",
      name: "Final Exam",
      weight: 40,
      maxScore: 100,
    },
    {
      id: "GI003",
      name: "Research Paper",
      weight: 20,
      maxScore: 100,
    },
    {
      id: "GI004",
      name: "Participation",
      weight: 10,
      maxScore: 100,
    },
  ])

  // Mock data for student grades
  const [studentGrades, setStudentGrades] = useState<StudentGrade[]>([
    { studentId: "STU001", gradeItemId: "GI001", score: 85, letterGrade: "A-" },
    { studentId: "STU001", gradeItemId: "GI002", score: 92, letterGrade: "A" },
    { studentId: "STU001", gradeItemId: "GI003", score: 88, letterGrade: "A-" },
    { studentId: "STU001", gradeItemId: "GI004", score: 95, letterGrade: "A+" },

    { studentId: "STU002", gradeItemId: "GI001", score: 78, letterGrade: "B" },
    { studentId: "STU002", gradeItemId: "GI002", score: 85, letterGrade: "A-" },
    { studentId: "STU002", gradeItemId: "GI003", score: 90, letterGrade: "A" },
    { studentId: "STU002", gradeItemId: "GI004", score: 88, letterGrade: "A-" },

    { studentId: "STU003", gradeItemId: "GI001", score: 92, letterGrade: "A" },
    { studentId: "STU003", gradeItemId: "GI002", score: 95, letterGrade: "A+" },
    { studentId: "STU003", gradeItemId: "GI003", score: 97, letterGrade: "A+" },
    { studentId: "STU003", gradeItemId: "GI004", score: 98, letterGrade: "A+" },

    { studentId: "STU004", gradeItemId: "GI001", score: 75, letterGrade: "B" },
    { studentId: "STU004", gradeItemId: "GI002", score: 80, letterGrade: "B+" },
    { studentId: "STU004", gradeItemId: "GI003", score: 82, letterGrade: "B+" },
    { studentId: "STU004", gradeItemId: "GI004", score: 85, letterGrade: "A-" },

    { studentId: "STU005", gradeItemId: "GI001", score: 68, letterGrade: "C+" },
    { studentId: "STU005", gradeItemId: "GI002", score: 72, letterGrade: "B-" },
    { studentId: "STU005", gradeItemId: "GI003", score: 75, letterGrade: "B" },
    { studentId: "STU005", gradeItemId: "GI004", score: 80, letterGrade: "B+" },
  ])

  // Grade levels for calculating letter grades
  const gradeLevels: GradeLevel[] = [
    { letter: "A+", minScore: 95, maxScore: 100, gpa: 4.0 },
    { letter: "A", minScore: 90, maxScore: 94.99, gpa: 4.0 },
    { letter: "A-", minScore: 85, maxScore: 89.99, gpa: 3.7 },
    { letter: "B+", minScore: 80, maxScore: 84.99, gpa: 3.3 },
    { letter: "B", minScore: 75, maxScore: 79.99, gpa: 3.0 },
    { letter: "B-", minScore: 70, maxScore: 74.99, gpa: 2.7 },
    { letter: "C+", minScore: 65, maxScore: 69.99, gpa: 2.3 },
    { letter: "C", minScore: 60, maxScore: 64.99, gpa: 2.0 },
    { letter: "C-", minScore: 55, maxScore: 59.99, gpa: 1.7 },
    { letter: "D", minScore: 50, maxScore: 54.99, gpa: 1.0 },
    { letter: "F", minScore: 0, maxScore: 49.99, gpa: 0.0 },
  ]

  // State for selected course
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(courses[0])
  const [ ] = useState<GradeItem | null>(null)
  const [isAddGradeItemDialogOpen, setIsAddGradeItemDialogOpen] = useState(false)
  const [newGradeItem, setNewGradeItem] = useState<Omit<GradeItem, "id">>({
    name: "",
    weight: 0,
    maxScore: 100,
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [isGradeDetailsDialogOpen, setIsGradeDetailsDialogOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)

  // Calculate letter grade based on score
  const calculateLetterGrade = (score: number): string => {
    const gradeLevel = gradeLevels.find((level) => score >= level.minScore && score <= level.maxScore)
    return gradeLevel ? gradeLevel.letter : "N/A"
  }

  // Calculate final grade for a student
  const calculateFinalGrade = (studentId: string): { score: number; letterGrade: string } => {
    let totalWeightedScore = 0
    let totalWeight = 0

    gradeItems.forEach((item) => {
      const grade = studentGrades.find((g) => g.studentId === studentId && g.gradeItemId === item.id)
      if (grade && grade.score !== null) {
        totalWeightedScore += (grade.score / item.maxScore) * item.weight
        totalWeight += item.weight
      }
    })

    if (totalWeight === 0) return { score: 0, letterGrade: "N/A" }

    const finalScore = (totalWeightedScore / totalWeight) * 100
    return {
      score: Number.parseFloat(finalScore.toFixed(2)),
      letterGrade: calculateLetterGrade(finalScore),
    }
  }

  // Handle grade change
  const handleGradeChange = (studentId: string, gradeItemId: string, score: string) => {
    const numericScore = score === "" ? null : Number.parseFloat(score)
    const letterGrade = numericScore !== null ? calculateLetterGrade(numericScore) : null

    setStudentGrades((prevGrades) => {
      const existingGradeIndex = prevGrades.findIndex((g) => g.studentId === studentId && g.gradeItemId === gradeItemId)

      if (existingGradeIndex !== -1) {
        // Update existing grade
        const updatedGrades = [...prevGrades]
        updatedGrades[existingGradeIndex] = {
          ...updatedGrades[existingGradeIndex],
          score: numericScore,
          letterGrade,
        }
        return updatedGrades
      } else {
        // Add new grade
        return [
          ...prevGrades,
          {
            studentId,
            gradeItemId,
            score: numericScore,
            letterGrade,
          },
        ]
      }
    })
  }

  // Handle adding a new grade item
  const handleAddGradeItem = () => {
    if (!newGradeItem.name || newGradeItem.weight <= 0) {
      toast({
        title: "Invalid input",
        description: "Please provide a name and a positive weight for the grade item.",
        variant: "destructive",
      })
      return
    }

    const totalWeight = gradeItems.reduce((sum, item) => sum + item.weight, 0) + newGradeItem.weight
    if (totalWeight > 100) {
      toast({
        title: "Weight exceeds 100%",
        description: "The total weight of all grade items cannot exceed 100%.",
        variant: "destructive",
      })
      return
    }

    const newId = `GI${String(gradeItems.length + 1).padStart(3, "0")}`
    setGradeItems([...gradeItems, { ...newGradeItem, id: newId }])
    setNewGradeItem({
      name: "",
      weight: 0,
      maxScore: 100,
    })
    setIsAddGradeItemDialogOpen(false)
    toast({
      title: "Grade item added",
      description: `${newGradeItem.name} has been added to the grading scheme.`,
    })
  }

  // Handle saving all grades
  const handleSaveGrades = () => {
    toast({
      title: "Grades saved",
      description: "All grades have been saved successfully.",
    })
  }

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Get grade for a specific student and grade item
  const getGrade = (studentId: string, gradeItemId: string): number | null => {
    const grade = studentGrades.find((g) => g.studentId === studentId && g.gradeItemId === gradeItemId)
    return grade ? grade.score : null
  }

  // View student grade details
  const handleViewStudentGrades = (student: Student) => {
    setSelectedStudent(student)
    setIsGradeDetailsDialogOpen(true)
  }

  // Navigation items for the dashboard
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard/teacher",
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: "Students",
      href: "/dashboard/teacher/students",
      icon: <Users className="h-4 w-4" />,
    },
    {
      label: "Courses",
      href: "/dashboard/teacher/courses",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      label: "Grades",
      href: "/dashboard/teacher/grades",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Settings",
      href: "/dashboard/teacher/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ]

  // Mock user for the dashboard shell
  const user = {
    name: "Dr. Sarah Johnson",
    role: "Teacher",
    image: "/placeholder.svg?height=32&width=32",
  }

  return (
    <DashboardShell navItems={navItems} user={user}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Grade Management</h1>
            <p className="text-muted-foreground">Manage student grades and assessments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsAddGradeItemDialogOpen(true)}>
              Add Grade Item
            </Button>
            <Button onClick={handleSaveGrades}>
              <Save className="mr-2 h-4 w-4" />
              Save All Grades
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Course Selection</CardTitle>
              <CardDescription>Select a course to manage grades</CardDescription>
            </CardHeader>
            <CardContent>
              <Select
                value={selectedCourse?.id}
                onValueChange={(value) => {
                  const course = courses.find((c) => c.id === value)
                  setSelectedCourse(course || null)
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.code}: {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
              <CardDescription>Current grade distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>A+ to A-</span>
                  <span className="text-sm font-medium">
                    {
                      students.filter((s) => {
                        const { letterGrade } = calculateFinalGrade(s.id)
                        return ["A+", "A", "A-"].includes(letterGrade)
                      }).length
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>B+ to B-</span>
                  <span className="text-sm font-medium">
                    {
                      students.filter((s) => {
                        const { letterGrade } = calculateFinalGrade(s.id)
                        return ["B+", "B", "B-"].includes(letterGrade)
                      }).length
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>C+ to C-</span>
                  <span className="text-sm font-medium">
                    {
                      students.filter((s) => {
                        const { letterGrade } = calculateFinalGrade(s.id)
                        return ["C+", "C", "C-"].includes(letterGrade)
                      }).length
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>D or below</span>
                  <span className="text-sm font-medium">
                    {
                      students.filter((s) => {
                        const { letterGrade } = calculateFinalGrade(s.id)
                        return ["D", "F"].includes(letterGrade)
                      }).length
                    }
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
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
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Grades
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Grades</CardTitle>
            <CardDescription>
              Enter and manage grades for {selectedCourse?.code}: {selectedCourse?.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  {gradeItems.map((item) => (
                    <TableHead key={item.id}>
                      {item.name} ({item.weight}%)
                    </TableHead>
                  ))}
                  <TableHead>Final Grade</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    {gradeItems.map((item) => (
                      <TableCell key={item.id}>
                        <Input
                          type="number"
                          min="0"
                          max={item.maxScore}
                          value={getGrade(student.id, item.id) || ""}
                          onChange={(e) => handleGradeChange(student.id, item.id, e.target.value)}
                          className="w-16"
                        />
                      </TableCell>
                    ))}
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{calculateFinalGrade(student.id).letterGrade}</span>
                        <span className="text-xs text-muted-foreground">{calculateFinalGrade(student.id).score}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewStudentGrades(student)}>
                        View Details
                      </Button>
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
            <Button onClick={handleSaveGrades}>Save Grades</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Add Grade Item Dialog */}
      <Dialog open={isAddGradeItemDialogOpen} onOpenChange={setIsAddGradeItemDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Grade Item</DialogTitle>
            <DialogDescription>Add a new assessment or grade item to the course</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newGradeItem.name}
                onChange={(e) => setNewGradeItem({ ...newGradeItem, name: e.target.value })}
                className="col-span-3"
                placeholder="e.g., Midterm Exam"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="weight" className="text-right">
                Weight (%)
              </Label>
              <Input
                id="weight"
                type="number"
                min="0"
                max="100"
                value={newGradeItem.weight}
                onChange={(e) => setNewGradeItem({ ...newGradeItem, weight: Number.parseFloat(e.target.value) })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="maxScore" className="text-right">
                Max Score
              </Label>
              <Input
                id="maxScore"
                type="number"
                min="1"
                value={newGradeItem.maxScore}
                onChange={(e) => setNewGradeItem({ ...newGradeItem, maxScore: Number.parseFloat(e.target.value) })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddGradeItemDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddGradeItem}>Add Grade Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Student Grade Details Dialog */}
      <Dialog open={isGradeDetailsDialogOpen} onOpenChange={setIsGradeDetailsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Student Grade Details</DialogTitle>
            <DialogDescription>
              Detailed grade information for {selectedStudent?.name} ({selectedStudent?.id})
            </DialogDescription>
          </DialogHeader>
          {selectedStudent && (
            <div className="py-4">
              <Tabs defaultValue="grades">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="grades">Grades</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="grades" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Student Information</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="font-medium">{selectedStudent.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ID:</span>
                          <span className="font-medium">{selectedStudent.id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Program:</span>
                          <span className="font-medium">{selectedStudent.program}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span className="font-medium">{selectedStudent.year}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Final Grade</h4>
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <div className="text-3xl font-bold">
                            {calculateFinalGrade(selectedStudent.id).letterGrade}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {calculateFinalGrade(selectedStudent.id).score}%
                          </div>
                        </div>
                        <Badge
                          className={
                            calculateFinalGrade(selectedStudent.id).letterGrade.startsWith("A")
                              ? "bg-green-500"
                              : calculateFinalGrade(selectedStudent.id).letterGrade.startsWith("B")
                                ? "bg-blue-500"
                                : calculateFinalGrade(selectedStudent.id).letterGrade.startsWith("C")
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                          }
                        >
                          {calculateFinalGrade(selectedStudent.id).letterGrade.startsWith("A")
                            ? "Excellent"
                            : calculateFinalGrade(selectedStudent.id).letterGrade.startsWith("B")
                              ? "Good"
                              : calculateFinalGrade(selectedStudent.id).letterGrade.startsWith("C")
                                ? "Satisfactory"
                                : "Needs Improvement"}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-sm font-medium text-muted-foreground mt-4 mb-2">Grade Breakdown</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Assessment</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Out of</TableHead>
                        <TableHead>Percentage</TableHead>
                        <TableHead>Letter Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {gradeItems.map((item) => {
                        const grade = studentGrades.find(
                          (g) => g.studentId === selectedStudent.id && g.gradeItemId === item.id,
                        )
                        const score = grade?.score || 0
                        const percentage = ((score / item.maxScore) * 100).toFixed(2)
                        const letterGrade = calculateLetterGrade(Number.parseFloat(percentage))

                        return (
                          <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.weight}%</TableCell>
                            <TableCell>{score}</TableCell>
                            <TableCell>{item.maxScore}</TableCell>
                            <TableCell>{percentage}%</TableCell>
                            <TableCell>{letterGrade}</TableCell>
                          </TableRow>
                        )
                      })}
                      <TableRow className="font-medium">
                        <TableCell>Final Grade</TableCell>
                        <TableCell>100%</TableCell>
                        <TableCell colSpan={2}></TableCell>
                        <TableCell>{calculateFinalGrade(selectedStudent.id).score}%</TableCell>
                        <TableCell>{calculateFinalGrade(selectedStudent.id).letterGrade}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Performance Relative to Class</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Student&apos;s Score</span>
                              <span>{calculateFinalGrade(selectedStudent.id).score}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary"
                                style={{ width: `${calculateFinalGrade(selectedStudent.id).score}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Class Average</span>
                              <span>
                                {(
                                  students.reduce((sum, student) => sum + calculateFinalGrade(student.id).score, 0) /
                                  students.length
                                ).toFixed(2)}
                                %
                              </span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-500"
                                style={{
                                  width: `${
                                    students.reduce((sum, student) => sum + calculateFinalGrade(student.id).score, 0) /
                                    students.length
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">Assessment Performance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {gradeItems.map((item) => {
                            const grade = studentGrades.find(
                              (g) => g.studentId === selectedStudent.id && g.gradeItemId === item.id,
                            )
                            const score = grade?.score || 0
                            const percentage = (score / item.maxScore) * 100

                            return (
                              <div key={item.id}>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{item.name}</span>
                                  <span>{percentage.toFixed(2)}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${
                                      percentage >= 85
                                        ? "bg-green-500"
                                        : percentage >= 70
                                          ? "bg-blue-500"
                                          : percentage >= 60
                                            ? "bg-yellow-500"
                                            : "bg-red-500"
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Feedback and Comments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-md">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="font-medium">Strengths</span>
                          </div>
                          <p className="text-sm">
                            {selectedStudent.name} demonstrates excellent critical thinking and analysis in their work.
                            Their research paper was particularly well-structured and showed deep understanding of the
                            subject matter.
                          </p>
                        </div>
                        <div className="p-3 border rounded-md">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                            <span className="font-medium">Areas for Improvement</span>
                          </div>
                          <p className="text-sm">
                            Could improve participation in class discussions. Some assignments could benefit from more
                            thorough proofreading and attention to detail.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsGradeDetailsDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsGradeDetailsDialogOpen(false)}>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}

