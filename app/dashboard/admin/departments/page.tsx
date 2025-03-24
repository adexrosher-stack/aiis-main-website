"use client"

import type React from "react"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  Download,
  Filter,
  Search,
  Trash2,
  PlusCircle,
  Users,
  FileText,
  BookOpen,
  GraduationCap,
  Edit,
  Eye,
  Home,
  Settings,
  BarChart,
  FolderTree,
} from "lucide-react"

// Department interface
interface Department {
  id: string
  name: string
  description: string
  headOfDepartment: string
  established: string
  numberOfCourses: number
  numberOfFaculty: number
  numberOfStudents: number
}

export default function DepartmentsPage() {
  const { toast } = useToast()
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: "DEP001",
      name: "Theology",
      description:
        "The Department of Theology focuses on the study of religious faith, practice, and experience, especially the study of God and God's relation to the world.",
      headOfDepartment: "Dr. Samuel Osei",
      established: "2005-09-01",
      numberOfCourses: 24,
      numberOfFaculty: 8,
      numberOfStudents: 120,
    },
    {
      id: "DEP002",
      name: "Biblical Studies",
      description:
        "The Department of Biblical Studies focuses on the critical interpretation of the Bible, including historical, literary, and theological approaches.",
      headOfDepartment: "Dr. Grace Adeyemi",
      established: "2007-01-15",
      numberOfCourses: 18,
      numberOfFaculty: 6,
      numberOfStudents: 95,
    },
    {
      id: "DEP003",
      name: "Religious Studies",
      description:
        "The Department of Religious Studies focuses on the comparative study of religions, including their histories, beliefs, and practices.",
      headOfDepartment: "Prof. Emmanuel Banda",
      established: "2010-09-01",
      numberOfCourses: 15,
      numberOfFaculty: 5,
      numberOfStudents: 85,
    },
    {
      id: "DEP004",
      name: "Philosophy",
      description:
        "The Department of Philosophy focuses on the study of fundamental questions about existence, knowledge, values, reason, mind, and language.",
      headOfDepartment: "Prof. David Mwangi",
      established: "2012-09-01",
      numberOfCourses: 12,
      numberOfFaculty: 4,
      numberOfStudents: 60,
    },
    {
      id: "DEP005",
      name: "Islamic Studies",
      description:
        "The Department of Islamic Studies focuses on the study of Islam, including its history, theology, law, and culture.",
      headOfDepartment: "Dr. Ibrahim Khalid",
      established: "2015-01-10",
      numberOfCourses: 14,
      numberOfFaculty: 5,
      numberOfStudents: 75,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState<Department>({
    id: "",
    name: "",
    description: "",
    headOfDepartment: "",
    established: "",
    numberOfCourses: 0,
    numberOfFaculty: 0,
    numberOfStudents: 0,
  })

  // Filter departments based on search term
  const filteredDepartments = departments.filter(
    (department) =>
      department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.headOfDepartment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle view department
  const handleViewDepartment = (department: Department) => {
    setSelectedDepartment(department)
    setIsViewDialogOpen(true)
  }

  // Handle edit department
  const handleEditDepartment = (department: Department) => {
    setSelectedDepartment(department)
    setEditFormData({ ...department })
    setIsEditDialogOpen(true)
  }

  // Handle delete department
  const handleDeleteDepartment = (department: Department) => {
    setSelectedDepartment(department)
    setIsDeleteDialogOpen(true)
  }

  // Handle edit form change
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditFormData({
      ...editFormData,
      [name]: value,
    })
  }

  // Handle edit form submit
  const handleEditFormSubmit = () => {
    const updatedDepartments = departments.map((department) =>
      department.id === editFormData.id ? { ...editFormData } : department,
    )
    setDepartments(updatedDepartments)
    setIsEditDialogOpen(false)
    toast({
      title: "Department updated",
      description: `${editFormData.name} department has been updated.`,
    })
  }

  // Handle delete confirm
  const handleDeleteConfirm = () => {
    if (selectedDepartment) {
      const updatedDepartments = departments.filter((department) => department.id !== selectedDepartment.id)
      setDepartments(updatedDepartments)
      setIsDeleteDialogOpen(false)
      toast({
        title: "Department deleted",
        description: `${selectedDepartment.name} department has been removed from the system.`,
        variant: "destructive",
      })
    }
  }

  // Handle add new department
  const handleAddNewDepartment = () => {
    const newDepartment = {
      ...editFormData,
      id: `DEP${String(departments.length + 1).padStart(3, "0")}`,
    }
    setDepartments([...departments, newDepartment])
    setIsAddDialogOpen(false)
    toast({
      title: "Department added",
      description: `${editFormData.name} department has been added to the system.`,
    })
  }

  // Navigation items for the dashboard
  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: <Home className="h-4 w-4" />,
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
      label: "Departments",
      href: "/dashboard/admin/departments",
      icon: <FolderTree className="h-4 w-4" />,
    },
    {
      label: "Applications",
      href: "/dashboard/admin/applications",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      label: "Reports",
      href: "/dashboard/admin/reports",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      label: "Settings",
      href: "/dashboard/admin/settings",
      icon: <Settings className="h-4 w-4" />,
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
            <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
            <p className="text-muted-foreground">Manage academic departments and their information</p>
          </div>
          <Button
            onClick={() => {
              setEditFormData({
                id: "",
                name: "",
                description: "",
                headOfDepartment: "",
                established: new Date().toISOString().split("T")[0],
                numberOfCourses: 0,
                numberOfFaculty: 0,
                numberOfStudents: 0,
              })
              setIsAddDialogOpen(true)
            }}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Department
          </Button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Search departments..."
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
              Export
            </Button>
          </div>
        </div>

        {/* Department Statistics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Departments</CardTitle>
              <FolderTree className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departments.length}</div>
              <p className="text-xs text-muted-foreground">Academic departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {departments.reduce((sum, dept) => sum + dept.numberOfCourses, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Across all departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {departments.reduce((sum, dept) => sum + dept.numberOfFaculty, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Academic staff</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {departments.reduce((sum, dept) => sum + dept.numberOfStudents, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Departments</CardTitle>
            <CardDescription>Manage academic departments and their information</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Head of Department</TableHead>
                  <TableHead>Established</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Faculty</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDepartments.map((department) => (
                  <TableRow key={department.id}>
                    <TableCell className="font-medium">{department.id}</TableCell>
                    <TableCell>{department.name}</TableCell>
                    <TableCell>{department.headOfDepartment}</TableCell>
                    <TableCell>{new Date(department.established).toLocaleDateString()}</TableCell>
                    <TableCell>{department.numberOfCourses}</TableCell>
                    <TableCell>{department.numberOfFaculty}</TableCell>
                    <TableCell>{department.numberOfStudents}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleViewDepartment(department)}>
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleEditDepartment(department)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteDepartment(department)}>
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
              Showing <strong>{filteredDepartments.length}</strong> of <strong>{departments.length}</strong> departments
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

      {/* View Department Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Department Details</DialogTitle>
            <DialogDescription>Comprehensive information about the department</DialogDescription>
          </DialogHeader>
          {selectedDepartment && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">{selectedDepartment.name}</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Department ID</h4>
                    <p>{selectedDepartment.id}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Head of Department</h4>
                    <p>{selectedDepartment.headOfDepartment}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Established</h4>
                    <p>{new Date(selectedDepartment.established).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Number of Courses</h4>
                    <p>{selectedDepartment.numberOfCourses}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Number of Faculty</h4>
                    <p>{selectedDepartment.numberOfFaculty}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Number of Students</h4>
                    <p>{selectedDepartment.numberOfStudents}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Description</h4>
                <p className="text-sm mb-6">{selectedDepartment.description}</p>

                <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Courses</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Introduction to {selectedDepartment.name}</li>
                  <li>Advanced {selectedDepartment.name} Studies</li>
                  <li>Research Methods in {selectedDepartment.name}</li>
                  <li>{selectedDepartment.name} Seminar</li>
                </ul>
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
                if (selectedDepartment) handleEditDepartment(selectedDepartment)
              }}
            >
              Edit Department
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Department Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Department</DialogTitle>
            <DialogDescription>Update department information in the system</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id" className="text-right">
                Department ID
              </Label>
              <Input id="id" name="id" value={editFormData.id} className="col-span-3" disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Department Name
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
              <Label htmlFor="headOfDepartment" className="text-right">
                Head of Department
              </Label>
              <Input
                id="headOfDepartment"
                name="headOfDepartment"
                value={editFormData.headOfDepartment}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="established" className="text-right">
                Established Date
              </Label>
              <Input
                id="established"
                name="established"
                type="date"
                value={editFormData.established}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={editFormData.description}
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

      {/* Delete Department Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this department? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedDepartment && (
            <div className="py-4">
              <h4 className="font-medium">{selectedDepartment.name}</h4>
              <p className="text-sm text-muted-foreground">
                {selectedDepartment.id} • Established {new Date(selectedDepartment.established).toLocaleDateString()}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This department has {selectedDepartment.numberOfCourses} courses, {selectedDepartment.numberOfFaculty}{" "}
                faculty members, and {selectedDepartment.numberOfStudents} students.
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete Department
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add New Department Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Department</DialogTitle>
            <DialogDescription>Enter the details of the new department to add to the system</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Department Name
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
              <Label htmlFor="headOfDepartment" className="text-right">
                Head of Department
              </Label>
              <Input
                id="headOfDepartment"
                name="headOfDepartment"
                value={editFormData.headOfDepartment}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="established" className="text-right">
                Established Date
              </Label>
              <Input
                id="established"
                name="established"
                type="date"
                value={editFormData.established}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={editFormData.description}
                onChange={handleEditFormChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddNewDepartment}>Add Department</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}

