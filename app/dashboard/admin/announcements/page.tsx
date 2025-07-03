"use client";

import type React from "react";

import { DashboardShell } from "@/components/dashboard-shell";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  BarChart,
  Bell,
  BookOpen,
  Edit,
  FileText,
  GraduationCap,
  Home,
  MoreHorizontal,
  PlusCircle,
  Search,
  Send,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  targets: string[];
  status: "draft" | "published" | "scheduled" | string;
  scheduledDate?: string;
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "ANN2023001",
      title: "Faculty Meeting",
      content:
        "Reminder: Faculty meeting scheduled for 2:00 PM in the conference room.",
      date: "2023-11-15",
      author: "Dr. Esckinder Taddesse",
      targets: ["faculty"],
      status: "published",
    },
    {
      id: "ANN2023002",
      title: "Grade Submission Deadline",
      content:
        "Final grades for Fall 2023 semester must be submitted by December 10.",
      date: "2023-11-20",
      author: "Dr. Esckinder Taddesse",
      targets: ["faculty"],
      status: "published",
    },
    {
      id: "ANN2023003",
      title: "Library Hours Extended",
      content:
        "The library will extend its hours during finals week, staying open until 10:00 PM.",
      date: "2023-11-25",
      author: "Dr. Esckinder Taddesse",
      targets: ["students", "faculty"],
      status: "scheduled",
      scheduledDate: "2023-12-01",
    },
    {
      id: "ANN2023004",
      title: "Board Meeting",
      content:
        "The quarterly board meeting will be held on December 15 at 9:00 AM in the boardroom.",
      date: "2023-11-30",
      author: "Dr. Esckinder Taddesse",
      targets: ["board"],
      status: "draft",
    },
    {
      id: "ANN2023005",
      title: "New Course Offerings",
      content:
        "We are excited to announce new course offerings for the Spring 2024 semester. Registration opens December 1.",
      date: "2023-11-30",
      author: "Dr. Esckinder Taddesse",
      targets: ["students", "subscribers"],
      status: "draft",
    },
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null);
  const [formData, setFormData] = useState<
    Omit<Announcement, "id" | "author" | "date">
  >({
    title: "",
    content: "",
    targets: [],
    status: "draft",
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [targetFilter, setTargetFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
  };

  // Filter announcements based on filters and search
  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesStatus =
      statusFilter === "all" || announcement.status === statusFilter;
    const matchesTarget =
      targetFilter === "all" || announcement.targets.includes(targetFilter);
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesTarget && matchesSearch;
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle target checkbox changes
  const handleTargetChange = (target: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        targets: [...formData.targets, target],
      });
    } else {
      setFormData({
        ...formData,
        targets: formData.targets.filter((t) => t !== target),
      });
    }
  };

  // Handle status change
  const handleStatusChange = (status: "draft" | "published" | "scheduled") => {
    setFormData({
      ...formData,
      status,
    });
  };

  // Create new announcement
  const handleCreateAnnouncement = () => {
    const newAnnouncement: Announcement = {
      id: `ANN${new Date().getFullYear()}${(announcements.length + 1)
        .toString()
        .padStart(3, "0")}`,
      title: formData.title,
      content: formData.content,
      date: new Date().toISOString().split("T")[0],
      author: adminInfo.name,
      targets: formData.targets,
      status: formData.status,
      scheduledDate:
        formData.status === "scheduled" ? formData.scheduledDate : undefined,
    };

    setAnnouncements([...announcements, newAnnouncement]);
    setIsCreateDialogOpen(false);
    resetForm();

    toast({
      title: "Announcement created",
      description: `"${newAnnouncement.title}" has been created successfully.`,
    });
  };

  // Edit announcement
  const handleEditAnnouncement = () => {
    if (!selectedAnnouncement) return;

    const updatedAnnouncements = announcements.map((announcement) =>
      announcement.id === selectedAnnouncement.id
        ? {
            ...announcement,
            title: formData.title,
            content: formData.content,
            targets: formData.targets,
            status: formData.status,
            scheduledDate:
              formData.status === "scheduled"
                ? formData.scheduledDate
                : undefined,
          }
        : announcement
    );

    setAnnouncements(updatedAnnouncements);
    setIsEditDialogOpen(false);
    resetForm();

    toast({
      title: "Announcement updated",
      description: `"${formData.title}" has been updated successfully.`,
    });
  };

  // Delete announcement
  const handleDeleteAnnouncement = () => {
    if (!selectedAnnouncement) return;

    const updatedAnnouncements = announcements.filter(
      (announcement) => announcement.id !== selectedAnnouncement.id
    );

    setAnnouncements(updatedAnnouncements);
    setIsDeleteDialogOpen(false);

    toast({
      title: "Announcement deleted",
      description: `"${selectedAnnouncement.title}" has been deleted.`,
      variant: "destructive",
    });
  };

  // Send announcement
  const handleSendAnnouncement = () => {
    if (!selectedAnnouncement) return;

    // In a real application, this would send the announcement to the selected targets
    // For now, we'll just update the status to published
    const updatedAnnouncements = announcements.map((announcement) =>
      announcement.id === selectedAnnouncement.id
        ? {
            ...announcement,
            status: "published",
          }
        : announcement
    );

    setAnnouncements(updatedAnnouncements);
    setIsSendDialogOpen(false);

    toast({
      title: "Announcement sent",
      description: `"${
        selectedAnnouncement.title
      }" has been sent to ${selectedAnnouncement.targets.join(", ")}.`,
    });
  };

  // Open edit dialog
  const openEditDialog = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      targets: announcement.targets,
      status: announcement.status,
      scheduledDate: announcement.scheduledDate,
    });
    setIsEditDialogOpen(true);
  };

  // Open delete dialog
  const openDeleteDialog = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
    setIsDeleteDialogOpen(true);
  };

  // Open send dialog
  const openSendDialog = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
    setIsSendDialogOpen(true);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      targets: [],
      status: "draft",
      scheduledDate: undefined,
    });
    setSelectedAnnouncement(null);
  };

  // Open create dialog
  const openCreateDialog = () => {
    resetForm();
    setIsCreateDialogOpen(true);
  };

  return (
    <DashboardShell
      user={{
        name: adminInfo.name,
        role: adminInfo.role,
        image: "/placeholder.svg?height=32&width=32",
      }}
      navItems={[
        {
          label: "Dashboard",
          icon: <Home className="h-4 w-4" />,
          href: "/dashboard/admin",
        },
        {
          label: "Students",
          icon: <Users className="h-4 w-4" />,
          href: "/dashboard/admin/students",
        },
        {
          label: "Courses",
          icon: <BookOpen className="h-4 w-4" />,
          href: "/dashboard/admin/courses",
        },
        {
          label: "Faculty",
          icon: <GraduationCap className="h-4 w-4" />,
          href: "/dashboard/admin/faculty",
        },
        {
          label: "Board",
          icon: <Users className="h-4 w-4" />,
          href: "/dashboard/admin/board",
        },
        {
          label: "Announcements",
          icon: <Bell className="h-4 w-4" />,
          href: "/dashboard/admin/announcements",
        },
        {
          label: "Applications",
          icon: <FileText className="h-4 w-4" />,
          href: "/dashboard/admin/applications",
        },
        {
          label: "Reports",
          icon: <BarChart className="h-4 w-4" />,
          href: "/dashboard/admin/reports",
        },
        {
          label: "Settings",
          icon: <Settings className="h-4 w-4" />,
          href: "/dashboard/admin/settings",
        },
      ]}
    >
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Announcements</h1>
            <p className="text-muted-foreground">
              Create and manage announcements for students, faculty, and board
              members
            </p>
          </div>
          <Button className="gap-2" onClick={openCreateDialog}>
            <PlusCircle className="h-4 w-4" />
            Create Announcement
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search announcements..."
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
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={targetFilter} onValueChange={setTargetFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by target" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Targets</SelectItem>
                    <SelectItem value="students">Students</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="board">Board</SelectItem>
                    <SelectItem value="subscribers">Subscribers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Announcements Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Announcements</CardTitle>
            <CardDescription>
              Showing {filteredAnnouncements.length} of {announcements.length}{" "}
              announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Target Audience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAnnouncements.map((announcement) => (
                  <TableRow key={announcement.id}>
                    <TableCell className="font-medium">
                      {announcement.title}
                    </TableCell>
                    <TableCell>
                      {new Date(announcement.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {announcement.targets.map((target) => (
                          <Badge key={target} variant="outline">
                            {target}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          announcement.status === "published"
                            ? "default"
                            : announcement.status === "scheduled"
                            ? "outline"
                            : "secondary"
                        }
                        className={
                          announcement.status === "published"
                            ? "bg-green-500 hover:bg-green-600"
                            : announcement.status === "scheduled"
                            ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                            : ""
                        }
                      >
                        {announcement.status}
                        {announcement.status === "scheduled" &&
                          announcement.scheduledDate &&
                          ` (${new Date(
                            announcement.scheduledDate
                          ).toLocaleDateString()})`}
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
                          <DropdownMenuItem
                            onClick={() => openEditDialog(announcement)}
                            className="cursor-pointer"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          {announcement.status === "draft" && (
                            <DropdownMenuItem
                              onClick={() => openSendDialog(announcement)}
                              className="cursor-pointer"
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Send Now
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            onClick={() => openDeleteDialog(announcement)}
                            className="text-red-600 cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredAnnouncements.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No announcements found. Try adjusting your filters or
                      create a new announcement.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Create Announcement Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Announcement</DialogTitle>
            <DialogDescription>
              Create a new announcement to send to students, faculty, or board
              members.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter announcement title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Enter announcement content"
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label>Target Audience</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="target-students"
                      checked={formData.targets.includes("students")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("students", checked as boolean)
                      }
                    />
                    <Label htmlFor="target-students">Students</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="target-faculty"
                      checked={formData.targets.includes("faculty")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("faculty", checked as boolean)
                      }
                    />
                    <Label htmlFor="target-faculty">Faculty</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="target-board"
                      checked={formData.targets.includes("board")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("board", checked as boolean)
                      }
                    />
                    <Label htmlFor="target-board">Board Members</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="target-subscribers"
                      checked={formData.targets.includes("subscribers")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("subscribers", checked as boolean)
                      }
                    />
                    <Label htmlFor="target-subscribers">Subscribers</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Publishing Options</Label>
                <div className="grid grid-cols-1 gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="status-draft"
                      name="status"
                      checked={formData.status === "draft"}
                      onChange={() => handleStatusChange("draft")}
                    />
                    <Label htmlFor="status-draft">Save as Draft</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="status-published"
                      name="status"
                      checked={formData.status === "published"}
                      onChange={() => handleStatusChange("published")}
                    />
                    <Label htmlFor="status-published">
                      Publish Immediately
                    </Label>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="status-scheduled"
                        name="status"
                        checked={formData.status === "scheduled"}
                        onChange={() => handleStatusChange("scheduled")}
                      />
                      <Label htmlFor="status-scheduled">
                        Schedule for Later
                      </Label>
                    </div>
                    {formData.status === "scheduled" && (
                      <div className="ml-6">
                        <Input
                          type="date"
                          name="scheduledDate"
                          value={formData.scheduledDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateAnnouncement}
              disabled={
                !formData.title ||
                !formData.content ||
                formData.targets.length === 0 ||
                (formData.status === "scheduled" && !formData.scheduledDate)
              }
            >
              {formData.status === "published"
                ? "Create & Publish"
                : formData.status === "scheduled"
                ? "Schedule"
                : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Announcement Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Announcement</DialogTitle>
            <DialogDescription>
              Update the announcement details.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter announcement title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-content">Content</Label>
                <Textarea
                  id="edit-content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Enter announcement content"
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label>Target Audience</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edit-target-students"
                      checked={formData.targets.includes("students")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("students", checked as boolean)
                      }
                    />
                    <Label htmlFor="edit-target-students">Students</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edit-target-faculty"
                      checked={formData.targets.includes("faculty")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("faculty", checked as boolean)
                      }
                    />
                    <Label htmlFor="edit-target-faculty">Faculty</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edit-target-board"
                      checked={formData.targets.includes("board")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("board", checked as boolean)
                      }
                    />
                    <Label htmlFor="edit-target-board">Board Members</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="edit-target-subscribers"
                      checked={formData.targets.includes("subscribers")}
                      onCheckedChange={(checked) =>
                        handleTargetChange("subscribers", checked as boolean)
                      }
                    />
                    <Label htmlFor="edit-target-subscribers">Subscribers</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Publishing Options</Label>
                <div className="grid grid-cols-1 gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="edit-status-draft"
                      name="edit-status"
                      checked={formData.status === "draft"}
                      onChange={() => handleStatusChange("draft")}
                    />
                    <Label htmlFor="edit-status-draft">Save as Draft</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="edit-status-published"
                      name="edit-status"
                      checked={formData.status === "published"}
                      onChange={() => handleStatusChange("published")}
                    />
                    <Label htmlFor="edit-status-published">
                      Publish Immediately
                    </Label>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="edit-status-scheduled"
                        name="edit-status"
                        checked={formData.status === "scheduled"}
                        onChange={() => handleStatusChange("scheduled")}
                      />
                      <Label htmlFor="edit-status-scheduled">
                        Schedule for Later
                      </Label>
                    </div>
                    {formData.status === "scheduled" && (
                      <div className="ml-6">
                        <Input
                          type="date"
                          name="scheduledDate"
                          value={formData.scheduledDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditAnnouncement}
              disabled={
                !formData.title ||
                !formData.content ||
                formData.targets.length === 0 ||
                (formData.status === "scheduled" && !formData.scheduledDate)
              }
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              announcement "{selectedAnnouncement?.title}" from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAnnouncement}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Send Announcement Dialog */}
      <AlertDialog open={isSendDialogOpen} onOpenChange={setIsSendDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send Announcement</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to send "{selectedAnnouncement?.title}" to{" "}
              {selectedAnnouncement?.targets.join(", ")}? This action will
              immediately publish the announcement.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSendAnnouncement}>
              Send Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardShell>
  );
}
