"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, FileText, GraduationCap, Home, Settings, Users, BarChart, PlusCircle, Search, MoreHorizontal, Trash2, Edit, Eye, Mail, Phone, Award, BookMarked } from 'lucide-react'
import { DashboardShell } from "@/components/dashboard-shell"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Textarea } from "@/components/ui/textarea"

interface Faculty {
  id: string
  name: string
  email: string
  position: string
  department: string
  status: "active" | "on leave" | "retired"
  joinDate: string
  specialization: string
  imageUrl: string
  courses: string[]
  publications: number
}

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([
    {
      id: "FAC2023001",
      name: "Dr. Samuel Osei",
      email: "samuel.osei@aiis.edu",
      position: "Professor",
      department: "Theology",
      status: "active",
      joinDate: "2015-09-01",
      specialization: "Biblical Theology",
      imageUrl: "/placeholder.svg?height=200&width=200&text=SO",
      courses: ["TH101", "TH305", "BIB401"],
      publications: 24,
    },
    {
      id: "FAC2023002",
      name: "Dr. Amina Diallo",
      email: "amina.diallo@aiis.edu",
      position: "Associate Professor",
      department: "Religious Studies",
      status: "active",
      joinDate: "2018-01-15",
      specialization: "Comparative Religion",
      imageUrl: "/placeholder.svg?height=200&width=200&text=AD",
      courses: ["RS201", "RS305", "TH202"],
      publications: 18,
    },
    {
      id: "FAC2023003",
      name: "Prof. David Mwangi",
      email: "david.mwangi@aiis.edu",
      position: "Professor",
      department: "Philosophy",
      status: "active",
      joinDate: "2010-08-01",
      specialization: "Ethics and Moral Philosophy",
      imageUrl: "/placeholder.svg?height=200&width=200&text=DM",
      courses: ["PH101", "ETH201", "PH405"],
      publications: 35,
    },
    {
      id: "FAC2023004",
      name: "Dr. Grace Adeyemi",
      email: "grace.adeyemi@aiis.edu",
      position: "Assistant Professor",
      department: "Biblical Studies",
      status: "active",
      joinDate: "2020-09-01",
      specialization: "New Testament Studies",
      imageUrl: "/placeholder.svg?height=200&width=200&text=GA",
      courses: ["BIB201", "BIB305", "NT101"],
      publications: 9,
    },
    {
      id: "FAC2023005",
      name: "Dr. Ibrahim Khalid",
      email: "ibrahim.khalid@aiis.edu",
      position: "Professor",
      department: "Islamic Studies",
      status: "on leave",
      joinDate: "2016-01-10",
      specialization: "Islamic Theology",
      imageUrl: "/placeholder.svg?height=200&width=200&text=IK",
      courses: ["IS101", "IS305", "TH405"],
      publications: 27,
    },
    {
      id: "FAC2023006",
      name: "Dr. Rachel Nkosi",
      email: "rachel.nkosi@aiis.edu",
      position: "Associate Professor",
      department: "Theology",
      status: "active",
      joinDate: "2019-08-15",
      specialization: "Systematic Theology",
      imageUrl: "/placeholder.svg?height=200&width=200&text=RN",
      courses: ["TH201", "TH305", "SYS401"],
      publications: 14,
    },
    {
      id: "FAC2023007",
      name: "Prof. Emmanuel Banda",
      email: "emmanuel.banda@aiis.edu",
      position: "Professor",
      department: "Religious Studies",
      status: "retired",
      joinDate: "2005-09-01",
      specialization: "African Traditional Religions",
      imageUrl: "/placeholder.svg?height=200&width=200&text=EB",
      courses: [],
      publications: 42,
    },
    {
      id: "FAC2023008",
      name: "Dr. Fatima Hassan",
      email: "fatima.hassan@aiis.edu",
      position: "Assistant Professor",
      department: "Islamic Studies",
      status: "active",
      joinDate: "2021-01-10",
      specialization: "Islamic Ethics",
      imageUrl: "/placeholder.svg?height=200&width=200&text=FH",
      courses: ["IS201", "ETH305", "IS101"],
      publications: 7,
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [positionFilter, setPositionFilter] = useState("all")
  
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState<Faculty | null>(null)

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  }

  // Filter faculty based on search query and filters
  const filteredFaculty = faculty.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter
    const matchesStatus = statusFilter === "all" || member.status === statusFilter
    const matchesPosition = positionFilter === "all" || member.position === positionFilter

    return matchesSearch && matchesDepartment && matchesStatus && matchesPosition
  })

  // Get unique departments, positions for filter options
  const departments = Array.from(new Set(faculty.map((member) => member.department)))
  const positions = Array.from(new Set(faculty.map((member) => member.position)))

  // Handle view faculty
  const handleViewFaculty = (member: Faculty) => {
    setSelectedFaculty(member)
    setIsViewDialogOpen(true)
  }

  // Handle edit faculty
  const handleEditFaculty = (member: Faculty) => {
    setSelectedFaculty(member)
    setEditFormData({...member})
    setIsEditDialogOpen(true)
  }

  // Handle delete faculty
  const handleDeleteFaculty = (member: Faculty) => {
    setSelectedFaculty(member)
    setIsDeleteDialogOpen(true)
  }

  // Handle edit form change
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [e.target.name]: e.target.value
      })
    }
  }

  // Handle save edit
  const handleSaveEdit = () => {
    if (editFormData && selectedFaculty) {
      const updatedFaculty = faculty.map(member => 
        member.id === selectedFaculty.id ? editFormData : member
      )
      setFaculty(updatedFaculty)
      setIsEditDialogOpen(false)
      toast({
        title: "Faculty updated",
        description: `${editFormData.name}'s information has been updated successfully.`,
      })
    } else if (editFormData) {
      // Add new faculty
      setFaculty([...faculty, editFormData])
      setIsEditDialogOpen(false)
      toast({
        title: "Faculty added",
        description: `${editFormData.name} has been added successfully.`,
      })
    }
  }

  // Handle confirm delete
  const handleConfirmDelete = () => {
    if (selectedFaculty) {
      const updatedFaculty = faculty.filter(member => member.id !== selectedFaculty.id)
      setFaculty(updatedFaculty)
      setIsDeleteDialogOpen(false)
      toast({
        title: "Faculty deleted",
        description: `${selectedFaculty.name} has been removed from the system.`,
        variant: "destructive"
      })
    }
  }

  // Handle add new faculty
  const handleAddNewFaculty = () => {
    const newId = `FAC${new Date().getFullYear()}${(faculty.length + 1).toString().padStart(3, '0')}`
    const newFaculty: Faculty = {
      id: newId,
      name: "New Faculty Member",
      email: "new.faculty@aiis.edu",
      position: "Assistant Professor",
      department: departments[0],
      status: "active",
      joinDate: new Date().toISOString().split('T')[0],
      specialization: "",
      imageUrl: "/placeholder.svg?height=200&width=200&text=NF",
      courses: [],
      publications: 0,
    }
    
    setSelectedFaculty(null)
    setEditFormData(newFaculty)
    setIsEditDialogOpen(true)
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
            <h1 className="text-3xl font-bold tracking-tight">Faculty Management</h1>
            <p className="text-muted-foreground">View and manage faculty members</p>
          </div>
          <Button className="gap-2" onClick={handleAddNewFaculty}>
            <PlusCircle className="h-4 w-4" />
            Add New Faculty
          </Button>
        </div>

        {/* Faculty Statistics */}
        {/* <div className="grid gap-6 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
              <div className="rounded-full bg-primary/10 p-2">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.length}</div>
              <div className="text-xs text-muted-foreground">
                {faculty.filter((m) => m.status === "full-time").length} full-time,{" "}
                {faculty.filter((m) => m.status !== "full-time").length} part-time
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <div className="rounded-full bg-blue-500/10 p-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{departments.length}</div>
              <div className="text-xs text-muted-foreground">Academic departments</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Professors</CardTitle>
              <div className="rounded-full bg-amber-500/10 p-2">
                <User className="h-4 w-4 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.filter((m) => m.title === "Professor").length}</div>
              <div className="text-xs text-muted-foreground">Full professors</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Publications</CardTitle>
              <div className="rounded-full bg-green-500/10 p-2">
                <FileText className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {faculty.reduce((sum, member) => sum + member.publications.length, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Academic publications</div>
            </CardContent>
          </Card>
        </div> */}

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-5">
              <div className="md:col-span-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search by name, ID, email, or specialization"
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
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.map((department) => (
                      <SelectItem key={department} value={department}>
                        {department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={positionFilter} onValueChange={setPositionFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Positions</SelectItem>
                    {positions.map((position) => (
                      <SelectItem key={position} value={position}>
                        {position}
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
                    <SelectItem value="on leave">On Leave</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Table */}
        <Card>
          <CardHeader>
            <CardTitle>Faculty Members</CardTitle>
            <CardDescription>
              Showing {filteredFaculty.length} of {faculty.length} faculty members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Faculty ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFaculty.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                          <Image
                            src={member.imageUrl || `/placeholder.svg?height=32&width=32&text=${member.name.charAt(0)}`}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div>{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>{member.position}</TableCell>
                    <TableCell>{member.specialization}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          member.status === "active"
                            ? "default"
                            : member.status === "on leave"
                              ? "outline"
                              : "secondary"
                        }
                        className={
                          member.status === "active"
                            ? "bg-green-500 hover:bg-green-600"
                            : member.status === "on leave"
                              ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                              : "bg-gray-500/10 text-gray-500"
                        }
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleViewFaculty(member)} className="cursor-pointer">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEditFaculty(member)} className="cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Faculty
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <BookMarked className="h-4 w-4 mr-2" />
                            View Courses
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDeleteFaculty(member)} className="text-red-600 cursor-pointer">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete Faculty
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
              Showing <strong>{filteredFaculty.length}</strong> of <strong>{faculty.length}</strong> faculty members
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

      {/* View Faculty Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Faculty Details</DialogTitle>
            <DialogDescription>
              Comprehensive information about the selected faculty member.
            </DialogDescription>
          </DialogHeader>
          
          {selectedFaculty && (
            <div className="space-y-6 py-4">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <Image
                    src={selectedFaculty.imageUrl || `/placeholder.svg?height=80&width=80&text=${selectedFaculty.name.charAt(0)}`}
                    alt={selectedFaculty.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{selectedFaculty.name}</h3>
                  <p className="text-muted-foreground">{selectedFaculty.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant={
                        selectedFaculty.status === "active"
                          ? "default"
                          : selectedFaculty.status === "on leave"
                            ? "outline"
                            : "secondary"
                      }
                      className={
                        selectedFaculty.status === "active"
                          ? "bg-green-500 hover:bg-green-600"
                          : selectedFaculty.status === "on leave"
                            ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                            : "bg-gray-500/10 text-gray-500"
                      }
                    >
                      {selectedFaculty.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">ID: {selectedFaculty.id}</span>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="professional">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="professional">Professional</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="professional" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Department</Label>
                      <p className="font-medium">{selectedFaculty.department}</p>
                    </div>
                    <div>
                      <Label>Position</Label>
                      <p className="font-medium">{selectedFaculty.position}</p>
                    </div>
                    <div>
                      <Label>Specialization</Label>
                      <p className="font-medium">{selectedFaculty.specialization}</p>
                    </div>
                    <div>
                      <Label>Join Date</Label>
                      <p className="font-medium">{new Date(selectedFaculty.joinDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <Label>Years of Service</Label>
                      <p className="font-medium">
                        {new Date().getFullYear() - new Date(selectedFaculty.joinDate).getFullYear()} years
                      </p>
                    </div>
                    <div>
                      <Label>Contact</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedFaculty.email}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="courses" className="space-y-4 mt-4">
                  <div>
                    <Label>Current Courses</Label>
                    <div className="mt-2 space-y-2">
                      {selectedFaculty.courses.length > 0 ? (
                        selectedFaculty.courses.map((course, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-accent rounded-md">
                            <span>{course}: {getCourseTitle(course)}</span>
                            <Badge>Current</Badge>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground">No current courses</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label>Past Courses</Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between p-2 bg-accent rounded-md">
                        <span>TH202: Advanced Theological Concepts</span>
                        <Badge variant="outline">Past</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-accent rounded-md">
                        <span>BIB101: Introduction to Biblical Studies</span>
                        <Badge variant="outline">Past</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="publications" className="space-y-4 mt-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <Label>Publications</Label>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        {selectedFaculty.publications} Total
                      </Badge>
                    </div>
                    <div className="mt-2 space-y-3">
                      <div className="p-3 border rounded-md">
                        <p className="font-medium">The Role of Theology in Modern African Society</p>
                        <p className="text-sm text-muted-foreground">Journal of African Theological Studies, 2022</p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <p className="font-medium">Comparative Analysis of Religious Practices in East Africa</p>
                        <p className="text-sm text-muted-foreground">International Religious Studies Review, 2021</p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <p className="font-medium">Ethics and Morality: A Theological Perspective</p>
                        <p className="text-sm text-muted-foreground">African Journal of Ethics, 2020</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>Close</Button>
            <Button onClick={() => {
              setIsViewDialogOpen(false);
              if (selectedFaculty) handleEditFaculty(selectedFaculty);
            }}>Edit Faculty</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Faculty Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedFaculty ? "Edit Faculty" : "Add New Faculty"}</DialogTitle>
            <DialogDescription>
              {selectedFaculty ? "Update faculty information in the system." : "Add a new faculty member to the system."}
            </DialogDescription>
          </DialogHeader>
          
          {editFormData && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={editFormData.name} 
                    onChange={handleEditFormChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={editFormData.email} 
                    onChange={handleEditFormChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select 
                    name="department" 
                    value={editFormData.department} 
                    onValueChange={(value) => setEditFormData({...editFormData, department: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((department) => (
                        <SelectItem key={department} value={department}>
                          {department}
                        </SelectItem>
                      ))}
                      <SelectItem value="Theology">Theology</SelectItem>
                      <SelectItem value="Biblical Studies">Biblical Studies</SelectItem>
                      <SelectItem value="Religious Studies">Religious Studies</SelectItem>
                      <SelectItem value="Philosophy">Philosophy</SelectItem>
                      <SelectItem value="Islamic Studies">Islamic Studies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Select 
                    name="position" 
                    value={editFormData.position} 
                    onValueChange={(value) => setEditFormData({...editFormData, position: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Professor">Professor</SelectItem>
                      <SelectItem value="Associate Professor">Associate Professor</SelectItem>
                      <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
                      <SelectItem value="Lecturer">Lecturer</SelectItem>
                      <SelectItem value="Adjunct Professor">Adjunct Professor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select 
                    name="status" 
                    value={editFormData.status} 
                    onValueChange={(value: "active" | "on leave" | "retired") => setEditFormData({...editFormData, status: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="on leave">On Leave</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="joinDate">Join Date</Label>
                  <Input 
                    id="joinDate" 
                    name="joinDate" 
                    type="date" 
                    value={editFormData.joinDate} 
                    onChange={handleEditFormChange} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="publications">Publications</Label>
                  <Input 
                    id="publications" 
                    name="publications" 
                    type="number" 
                    min="0" 
                    value={editFormData.publications} 
                    onChange={(e) => setEditFormData({...editFormData, publications: parseInt(e.target.value) || 0})} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="id">Faculty ID</Label>
                  <Input 
                    id="id" 
                    name="id" 
                    value={editFormData.id} 
                    onChange={handleEditFormChange}
                    disabled={selectedFaculty !== null} 
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Textarea 
                    id="specialization" 
                    name="specialization" 
                    value={editFormData.specialization} 
                    onChange={handleEditFormChange} 
                  />
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveEdit}>
              {selectedFaculty ? "Save Changes" : "Add Faculty"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete {selectedFaculty?.name}&apos;s
              record and remove their data from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardShell>
  )
}

// Helper function to get course title from course code
function getCourseTitle(courseCode: string): string {
  const courseTitles: Record<string, string> = {
    "TH101": "Introduction to Theology",
    "TH202": "Advanced Theological Concepts",
    "TH305": "Systematic Theology",
    "TH405": "Contemporary Theological Issues",
    "BIB101": "Introduction to Biblical Studies",
    "BIB201": "Old Testament Studies",
    "BIB305": "New Testament Studies",
    "BIB401": "Biblical Exegesis",
    "RS201": "World Religions",
    "RS305": "Religious Traditions in Africa",
    "PH101": "Introduction to Philosophy",
    "ETH201": "Ethics and Morality",
    "ETH305": "Applied Ethics",
    "PH405": "Philosophy of Religion",
    "IS101": "Introduction to Islamic Studies",
    "IS201": "Islamic Theology",
    "IS305": "Islamic Ethics",
    "NT101": "New Testament Introduction",
    "SYS401": "Systematic Theology Seminar",
  }
  
  return courseTitles[courseCode] || "Unknown Course"
}

