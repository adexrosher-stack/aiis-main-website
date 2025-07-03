"use client"

import type React from "react"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Pencil, Trash, Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface BoardMember {
  id: string
  name: string
  position: string
  email: string
  phone: string
  bio: string
  imageUrl: string
}

export default function BoardMembersPage() {
  const { toast } = useToast()
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      position: "Chairperson",
      email: "sarah.johnson@aiis.edu",
      phone: "+1 (555) 123-4567",
      bio: "Dr. Sarah Johnson is a distinguished academic with over 20 years of experience in educational leadership. She has served on multiple university boards and brings valuable insights to our institution.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      name: "Prof. Michael Chen",
      position: "Vice Chairperson",
      email: "michael.chen@aiis.edu",
      phone: "+1 (555) 987-6543",
      bio: "Professor Chen is an expert in international education systems and has published extensively on educational policy reform. His global perspective is invaluable to our board.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      name: "Dr. Amina Patel",
      position: "Secretary",
      email: "amina.patel@aiis.edu",
      phone: "+1 (555) 456-7890",
      bio: "Dr. Patel brings expertise in curriculum development and assessment strategies. She has previously served as Dean of Education at a prestigious university.",
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ])

  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isAddEditDialogOpen, setIsAddEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentBoardMember, setCurrentBoardMember] = useState<BoardMember | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<Omit<BoardMember, "id">>({
    name: "",
    position: "",
    email: "",
    phone: "",
    bio: "",
    imageUrl: "/placeholder.svg?height=200&width=200",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleView = (boardMember: BoardMember) => {
    setCurrentBoardMember(boardMember)
    setIsViewDialogOpen(true)
  }

  const handleAdd = () => {
    setIsEditing(false)
    setFormData({
      name: "",
      position: "",
      email: "",
      phone: "",
      bio: "",
      imageUrl: "/placeholder.svg?height=200&width=200",
    })
    setIsAddEditDialogOpen(true)
  }

  const handleEdit = (boardMember: BoardMember) => {
    setIsEditing(true)
    setCurrentBoardMember(boardMember)
    setFormData({
      name: boardMember.name,
      position: boardMember.position,
      email: boardMember.email,
      phone: boardMember.phone,
      bio: boardMember.bio,
      imageUrl: boardMember.imageUrl,
    })
    setIsAddEditDialogOpen(true)
  }

  const handleDelete = (boardMember: BoardMember) => {
    setCurrentBoardMember(boardMember)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (currentBoardMember) {
      setBoardMembers((prev) => prev.filter((member) => member.id !== currentBoardMember.id))
      toast({
        title: "Board member deleted",
        description: `${currentBoardMember.name} has been removed from the board.`,
      })
      setIsDeleteDialogOpen(false)
    }
  }

  const handleSubmit = () => {
    if (isEditing && currentBoardMember) {
      // Update existing board member
      setBoardMembers((prev) =>
        prev.map((member) =>
          member.id === currentBoardMember.id ? { ...formData, id: currentBoardMember.id } : member,
        ),
      )
      toast({
        title: "Board member updated",
        description: `${formData.name}'s information has been updated.`,
      })
    } else {
      // Add new board member
      const newId = Math.random().toString(36).substring(2, 9)
      setBoardMembers((prev) => [...prev, { ...formData, id: newId }])
      toast({
        title: "Board member added",
        description: `${formData.name} has been added to the board.`,
      })
    }
    setIsAddEditDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Board Members Management</h1>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Board Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Board Members</CardTitle>
          <CardDescription>Manage the board members of the institution.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {boardMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.position}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon" onClick={() => handleView(member)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleEdit(member)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDelete(member)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Board Member Details</DialogTitle>
          </DialogHeader>
          {currentBoardMember && (
            <div className="grid gap-4 py-4">
              <div className="flex justify-center mb-4">
                {/* <img
                  src={currentBoardMember.imageUrl || "/placeholder.svg"}
                  alt={currentBoardMember.name}
                  className="rounded-full w-32 h-32 object-cover"
                /> */}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Name</Label>
                <div className="col-span-3">{currentBoardMember.name}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Position</Label>
                <div className="col-span-3">{currentBoardMember.position}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Email</Label>
                <div className="col-span-3">{currentBoardMember.email}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Phone</Label>
                <div className="col-span-3">{currentBoardMember.phone}</div>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right">Bio</Label>
                <div className="col-span-3">{currentBoardMember.bio}</div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsViewDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Dialog */}
      <Dialog open={isAddEditDialogOpen} onOpenChange={setIsAddEditDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Board Member" : "Add Board Member"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Update the board member's information." : "Fill in the details to add a new board member."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                Position
              </Label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="bio" className="text-right">
                Bio
              </Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="col-span-3"
                rows={5}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>{isEditing ? "Update" : "Add"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove {currentBoardMember?.name} from the board members list. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

