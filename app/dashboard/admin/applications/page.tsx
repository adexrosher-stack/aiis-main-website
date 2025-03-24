"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
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
  XCircle,
  AlertCircle,
  Edit,
  Eye,
  Mail,
  Clock,
} from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Application {
  id: string
  name: string
  email: string
  phone: string
  program: string
  date: string
  status: "pending" | "approved" | "rejected" | "waitlisted" | "incomplete"
  education: {
    institution: string
    degree: string
    year: string
    gpa: string
  }[]
  documents: {
    name: string
    status: "submitted" | "pending" | "missing"
    url?: string
  }[]
  notes: string[]
  reviewDate?: string
  reviewedBy?: string
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: "APP2023045",
      name: "Robert Chen",
      email: "robert.chen@example.com",
      phone: "+251-911-123456",
      program: "Master of Divinity",
      date: "2023-11-10",
      status: "pending",
      education: [
        {
          institution: "University of Addis Ababa",
          degree: "Bachelor of Arts in Religious Studies",
          year: "2022",
          gpa: "3.7",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "submitted", url: "#" },
        { name: "Recommendation Letters", status: "submitted", url: "#" },
        { name: "Statement of Purpose", status: "submitted", url: "#" },
      ],
      notes: ["Initial review completed on November 11, 2023. Strong academic background."],
    },
    {
      id: "APP2023046",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+251-911-234567",
      program: "Bachelor of Theology",
      date: "2023-11-08",
      status: "pending",
      education: [
        {
          institution: "Mekane Yesus High School",
          degree: "High School Diploma",
          year: "2023",
          gpa: "3.9",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "submitted", url: "#" },
        { name: "Recommendation Letters", status: "pending" },
        { name: "Statement of Purpose", status: "submitted", url: "#" },
      ],
      notes: ["Waiting for final recommendation letter. Excellent academic record."],
    },
    {
      id: "APP2023047",
      name: "Thomas Wilson",
      email: "thomas.wilson@example.com",
      phone: "+251-911-345678",
      program: "PhD in Theology",
      date: "2023-11-05",
      status: "approved",
      education: [
        {
          institution: "Ethiopian Graduate School of Theology",
          degree: "Master of Theology",
          year: "2021",
          gpa: "3.8",
        },
        {
          institution: "Evangelical Theological College",
          degree: "Bachelor of Theology",
          year: "2018",
          gpa: "3.7",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "submitted", url: "#" },
        { name: "Recommendation Letters", status: "submitted", url: "#" },
        { name: "Research Proposal", status: "submitted", url: "#" },
        { name: "Writing Sample", status: "submitted", url: "#" },
      ],
      notes: [
        "Excellent research proposal on contextual theology.",
        "Approved by faculty committee on November 12, 2023.",
      ],
      reviewDate: "2023-11-12",
      reviewedBy: "Dr. Esckinder Taddesse",
    },
    {
      id: "APP2023048",
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      phone: "+251-911-456789",
      program: "Master of Theology",
      date: "2023-11-02",
      status: "rejected",
      education: [
        {
          institution: "University of Nairobi",
          degree: "Bachelor of Arts in Philosophy",
          year: "2020",
          gpa: "3.2",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "submitted", url: "#" },
        { name: "Recommendation Letters", status: "submitted", url: "#" },
        { name: "Statement of Purpose", status: "submitted", url: "#" },
      ],
      notes: [
        "Insufficient background in theological studies.",
        "Recommended to apply for certificate program first.",
        "Decision communicated on November 15, 2023.",
      ],
      reviewDate: "2023-11-15",
      reviewedBy: "Dr. Endale Gebremeskel",
    },
    {
      id: "APP2023049",
      name: "David Kimani",
      email: "david.kimani@example.com",
      phone: "+251-911-567890",
      program: "Master of Divinity",
      date: "2023-11-15",
      status: "pending",
      education: [
        {
          institution: "Kenya Christian University",
          degree: "Bachelor of Theology",
          year: "2022",
          gpa: "3.5",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "submitted", url: "#" },
        { name: "Recommendation Letters", status: "submitted", url: "#" },
        { name: "Statement of Purpose", status: "submitted", url: "#" },
      ],
      notes: ["Strong ministerial experience. Currently serving as youth pastor."],
    },
    {
      id: "APP2023050",
      name: "Sarah Mekonnen",
      email: "sarah.mekonnen@example.com",
      phone: "+251-911-678901",
      program: "Bachelor of Theology",
      date: "2023-11-14",
      status: "incomplete",
      education: [
        {
          institution: "Addis Ababa High School",
          degree: "High School Diploma",
          year: "2023",
          gpa: "3.6",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "missing" },
        { name: "Recommendation Letters", status: "pending" },
        { name: "Statement of Purpose", status: "submitted", url: "#" },
      ],
      notes: [
        "Application incomplete. Missing transcripts and recommendation letters.",
        "Email reminder sent on November 16, 2023.",
      ],
    },
    {
      id: "APP2023051",
      name: "Michael Abebe",
      email: "michael.abebe@example.com",
      phone: "+251-911-789012",
      program: "PhD in Theology",
      date: "2023-11-12",
      status: "waitlisted",
      education: [
        {
          institution: "Ethiopian Graduate School of Theology",
          degree: "Master of Theology",
          year: "2020",
          gpa: "3.6",
        },
        {
          institution: "Mekane Yesus Seminary",
          degree: "Bachelor of Theology",
          year: "2017",
          gpa: "3.5",
        },
      ],
      documents: [
        { name: "Application Form", status: "submitted", url: "#" },
        { name: "Transcripts", status: "submitted", url: "#" },
        { name: "Recommendation Letters", status: "submitted", url: "#" },
        { name: "Research Proposal", status: "submitted", url: "#" },
        { name: "Writing Sample", status: "submitted", url: "#" },
      ],
      notes: [
        "Good application but limited spaces available.",
        "Placed on waitlist on November 16, 2023.",
        "Will reconsider if space becomes available.",
      ],
      reviewDate: "2023-11-16",
      reviewedBy: "Dr. Wendaferahu Adenew",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [programFilter, setProgramFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [reviewNote, setReviewNote] = useState("")

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  }

  // Filter applications based on search query and filters
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesProgram = programFilter === "all" || app.program === programFilter
    const matchesStatus = statusFilter === "all" || app.status === statusFilter

    return matchesSearch && matchesProgram && matchesStatus
  })

  // Get unique programs for filter options
  const programs = Array.from(new Set(applications.map((app) => app.program)))

  // Handle view application details
  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application)
    setIsViewDialogOpen(true)
  }

  // Handle application status change
  const handleStatusChange = (id: string, newStatus: "approved" | "rejected" | "waitlisted" | "pending") => {
    setApplications(
      applications.map((app) =>
        app.id === id
          ? {
              ...app,
              status: newStatus,
              reviewDate: new Date().toISOString().split("T")[0],
              reviewedBy: adminInfo.name,
            }
          : app,
      ),
    )

    if (selectedApplication && selectedApplication.id === id) {
      setSelectedApplication({
        ...selectedApplication,
        status: newStatus,
        reviewDate: new Date().toISOString().split("T")[0],
        reviewedBy: adminInfo.name,
      })
    }
  }

  // Handle adding a review note
  const handleAddNote = (id: string) => {
    if (!reviewNote.trim()) return

    setApplications(
      applications.map((app) =>
        app.id === id
          ? {
              ...app,
              notes: [...app.notes, reviewNote],
            }
          : app,
      ),
    )

    if (selectedApplication && selectedApplication.id === id) {
      setSelectedApplication({
        ...selectedApplication,
        notes: [...selectedApplication.notes, reviewNote],
      })
    }

    setReviewNote("")
  }

  // Calculate statistics
  const pendingApplications = applications.filter((app) => app.status === "pending").length
  const approvedApplications = applications.filter((app) => app.status === "approved").length
  const rejectedApplications = applications.filter((app) => app.status === "rejected").length
  const incompleteApplications = applications.filter((app) => app.status === "incomplete").length

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
            <h1 className="text-3xl font-bold tracking-tight">Application Management</h1>
            <p className="text-muted-foreground">Review and process admission applications</p>
          </div>
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Application
          </Button>
        </div>

        {/* Application Statistics */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <div className="rounded-full bg-amber-500/10 p-2">
                <Clock className="h-4 w-4 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingApplications}</div>
              <div className="text-xs text-muted-foreground">Awaiting review</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <div className="rounded-full bg-green-500/10 p-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{approvedApplications}</div>
              <div className="text-xs text-muted-foreground">Ready for enrollment</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rejected</CardTitle>
              <div className="rounded-full bg-red-500/10 p-2">
                <XCircle className="h-4 w-4 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rejectedApplications}</div>
              <div className="text-xs text-muted-foreground">Not accepted</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Incomplete</CardTitle>
              <div className="rounded-full bg-blue-500/10 p-2">
                <AlertCircle className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{incompleteApplications}</div>
              <div className="text-xs text-muted-foreground">Missing documents</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search by name, ID, or email"
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
                <Select value={programFilter} onValueChange={setProgramFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    {programs.map((program) => (
                      <SelectItem key={program} value={program}>
                        {program}
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
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="waitlisted">Waitlisted</SelectItem>
                    <SelectItem value="incomplete">Incomplete</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
            <CardDescription>
              Showing {filteredApplications.length} of {applications.length} applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-medium">{application.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{application.name}</span>
                        <span className="text-xs text-muted-foreground">{application.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>{application.program}</TableCell>
                    <TableCell>{new Date(application.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <span>{application.documents.filter((doc) => doc.status === "submitted").length}</span>
                        <span className="text-muted-foreground">/</span>
                        <span>{application.documents.length}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          application.status === "approved"
                            ? "default"
                            : application.status === "rejected"
                              ? "destructive"
                              : application.status === "waitlisted"
                                ? "outline"
                                : application.status === "incomplete"
                                  ? "secondary"
                                  : "outline"
                        }
                        className={
                          application.status === "approved"
                            ? "bg-green-500 hover:bg-green-600"
                            : application.status === "waitlisted"
                              ? "border-amber-500 text-amber-500"
                              : ""
                        }
                      >
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleViewApplication(application)}>
                          <Eye className="h-4 w-4" />
                        </Button>

                        {application.status === "pending" && (
                          <>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-green-500 hover:text-green-600 hover:bg-green-50"
                              onClick={() => handleStatusChange(application.id, "approved")}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                              onClick={() => handleStatusChange(application.id, "rejected")}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t px-6 py-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>{filteredApplications.length}</strong> of <strong>{applications.length}</strong>{" "}
              applications
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

        {/* Application Details Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="max-w-4xl">
            {selectedApplication && (
              <>
                <DialogHeader>
                  <DialogTitle>Application Details</DialogTitle>
                  <DialogDescription>
                    Review application {selectedApplication.id} from {selectedApplication.name}
                  </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                  <Tabs defaultValue="details">
                    <TabsList className="grid grid-cols-4 mb-4">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="education">Education</TabsTrigger>
                      <TabsTrigger value="documents">Documents</TabsTrigger>
                      <TabsTrigger value="notes">Notes & Review</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details" className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Personal Information</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between border-b pb-1">
                              <span className="text-muted-foreground">Full Name</span>
                              <span className="font-medium">{selectedApplication.name}</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                              <span className="text-muted-foreground">Email</span>
                              <span className="font-medium">{selectedApplication.email}</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                              <span className="text-muted-foreground">Phone</span>
                              <span className="font-medium">{selectedApplication.phone}</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                              <span className="text-muted-foreground">Application Date</span>
                              <span className="font-medium">
                                {new Date(selectedApplication.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Application Status</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between border-b pb-1">
                              <span className="text-muted-foreground">Program</span>
                              <span className="font-medium">{selectedApplication.program}</span>
                            </div>
                            <div className="flex justify-between border-b pb-1">
                              <span className="text-muted-foreground">Current Status</span>
                              <Badge
                                variant={
                                  selectedApplication.status === "approved"
                                    ? "default"
                                    : selectedApplication.status === "rejected"
                                      ? "destructive"
                                      : selectedApplication.status === "waitlisted"
                                        ? "outline"
                                        : selectedApplication.status === "incomplete"
                                          ? "secondary"
                                          : "outline"
                                }
                                className={
                                  selectedApplication.status === "approved"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : selectedApplication.status === "waitlisted"
                                      ? "border-amber-500 text-amber-500"
                                      : ""
                                }
                              >
                                {selectedApplication.status.charAt(0).toUpperCase() +
                                  selectedApplication.status.slice(1)}
                              </Badge>
                            </div>
                            {selectedApplication.reviewDate && (
                              <div className="flex justify-between border-b pb-1">
                                <span className="text-muted-foreground">Review Date</span>
                                <span className="font-medium">{selectedApplication.reviewDate}</span>
                              </div>
                            )}
                            {selectedApplication.reviewedBy && (
                              <div className="flex justify-between border-b pb-1">
                                <span className="text-muted-foreground">Reviewed By</span>
                                <span className="font-medium">{selectedApplication.reviewedBy}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {selectedApplication.status === "pending" && (
                        <div className="flex flex-col gap-4 mt-6 p-4 border rounded-md bg-slate-50 dark:bg-slate-900">
                          <h4 className="font-medium">Update Application Status</h4>
                          <div className="flex gap-2">
                            <Button
                              className="flex-1 bg-green-500 hover:bg-green-600"
                              onClick={() => handleStatusChange(selectedApplication.id, "approved")}
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1 border-amber-500 text-amber-500 hover:bg-amber-50"
                              onClick={() => handleStatusChange(selectedApplication.id, "waitlisted")}
                            >
                              <Clock className="h-4 w-4 mr-2" />
                              Waitlist
                            </Button>
                            <Button
                              variant="destructive"
                              className="flex-1"
                              onClick={() => handleStatusChange(selectedApplication.id, "rejected")}
                            >
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="education" className="space-y-4">
                      <h4 className="font-medium mb-2">Educational Background</h4>
                      {selectedApplication.education.length > 0 ? (
                        <div className="space-y-4">
                          {selectedApplication.education.map((edu, index) => (
                            <div key={index} className="p-3 border rounded-md">
                              <div className="grid md:grid-cols-2 gap-2">
                                <div className="flex justify-between border-b pb-1">
                                  <span className="text-muted-foreground">Institution</span>
                                  <span className="font-medium">{edu.institution}</span>
                                </div>
                                <div className="flex justify-between border-b pb-1">
                                  <span className="text-muted-foreground">Degree</span>
                                  <span className="font-medium">{edu.degree}</span>
                                </div>
                                <div className="flex justify-between border-b pb-1">
                                  <span className="text-muted-foreground">Year</span>
                                  <span className="font-medium">{edu.year}</span>
                                </div>
                                <div className="flex justify-between border-b pb-1">
                                  <span className="text-muted-foreground">GPA</span>
                                  <span className="font-medium">{edu.gpa}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No educational background provided.</p>
                      )}
                    </TabsContent>

                    <TabsContent value="documents" className="space-y-4">
                      <h4 className="font-medium mb-2">Required Documents</h4>
                      <div className="space-y-2">
                        {selectedApplication.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-primary" />
                              <span>{doc.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  doc.status === "submitted"
                                    ? "default"
                                    : doc.status === "pending"
                                      ? "outline"
                                      : "destructive"
                                }
                                className={
                                  doc.status === "submitted"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : doc.status === "missing"
                                      ? "bg-red-500 hover:bg-red-600"
                                      : ""
                                }
                              >
                                {doc.status}
                              </Badge>
                              {doc.url && (
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={doc.url} target="_blank" className="flex items-center gap-1">
                                    <Eye className="h-4 w-4" />
                                    <span>View</span>
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="notes" className="space-y-4">
                      <div className="flex flex-col gap-4">
                        <h4 className="font-medium">Review Notes</h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto p-2 border rounded-md">
                          {selectedApplication.notes.length > 0 ? (
                            selectedApplication.notes.map((note, index) => (
                              <div key={index} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
                                <p>{note}</p>
                              </div>
                            ))
                          ) : (
                            <p className="text-muted-foreground p-3">No notes have been added yet.</p>
                          )}
                        </div>

                        <div className="space-y-2 mt-4">
                          <h4 className="font-medium">Add Note</h4>
                          <Textarea
                            placeholder="Enter review notes here..."
                            value={reviewNote}
                            onChange={(e) => setReviewNote(e.target.value)}
                          />
                          <Button onClick={() => handleAddNote(selectedApplication.id)} disabled={!reviewNote.trim()}>
                            Add Note
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <DialogFooter className="flex justify-between items-center">
                  <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                    Close
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Applicant
                    </Button>
                    <Button>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Application
                    </Button>
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>

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
    </DashboardShell>
  )
}

