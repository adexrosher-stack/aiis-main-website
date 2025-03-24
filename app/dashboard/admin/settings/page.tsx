"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Users,
  BarChart,
  Save,
  Moon,
  Sun,
  Laptop,
  Folders,
} from "lucide-react"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import GradeLevelsSettings from "./grade-levels"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  const adminInfo = {
    name: "Dr. Esckinder Taddesse",
    role: "Administrator",
    email: "esckinder.taddesse@aiis.edu",
    phone: "+251-911-123456",
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
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Manage your account and system preferences</p>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-6 w-full max-w-3xl">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Institution Information</CardTitle>
                <CardDescription>Update your institution's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution-name">Institution Name</Label>
                    <Input id="institution-name" defaultValue="African Institute for International Studies" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution-short">Short Name/Acronym</Label>
                    <Input id="institution-short" defaultValue="AIIS" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution-address">Address</Label>
                  <Textarea id="institution-address" defaultValue="123 Education Street, Addis Ababa, Ethiopia" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution-phone">Phone Number</Label>
                    <Input id="institution-phone" defaultValue="+251-111-234567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution-email">Email Address</Label>
                    <Input id="institution-email" defaultValue="info@aiis.edu" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution-website">Website</Label>
                  <Input id="institution-website" defaultValue="https://www.aiis.edu" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Academic Calendar</CardTitle>
                <CardDescription>Configure your academic year settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-semester">Current Semester</Label>
                    <Select defaultValue="fall2023">
                      <SelectTrigger id="current-semester">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fall2023">Fall 2023</SelectItem>
                        <SelectItem value="spring2024">Spring 2024</SelectItem>
                        <SelectItem value="summer2024">Summer 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="academic-year">Academic Year</Label>
                    <Select defaultValue="2023-2024">
                      <SelectTrigger id="academic-year">
                        <SelectValue placeholder="Select academic year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2022-2023">2022-2023</SelectItem>
                        <SelectItem value="2023-2024">2023-2024</SelectItem>
                        <SelectItem value="2024-2025">2024-2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="semester-start">Semester Start Date</Label>
                    <Input id="semester-start" type="date" defaultValue="2023-09-01" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semester-end">Semester End Date</Label>
                    <Input id="semester-end" type="date" defaultValue="2023-12-15" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="registration-open" defaultChecked />
                  <Label htmlFor="registration-open">Registration is currently open</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure global system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Put the system in maintenance mode</p>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Public Website</Label>
                    <p className="text-sm text-muted-foreground">Enable or disable the public website</p>
                  </div>
                  <Switch id="public-website" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Student Portal</Label>
                    <p className="text-sm text-muted-foreground">Enable or disable the student portal</p>
                  </div>
                  <Switch id="student-portal" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Faculty Portal</Label>
                    <p className="text-sm text-muted-foreground">Enable or disable the faculty portal</p>
                  </div>
                  <Switch id="faculty-portal" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Backups</Label>
                    <p className="text-sm text-muted-foreground">Enable automatic daily backups</p>
                  </div>
                  <Switch id="system-backups" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            {/* Account settings content - same as before */}
            <Card>
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                    <Image
                      src="/placeholder.svg?height=96&width=96&text=ET"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="full-name">Full Name</Label>
                        <Input id="full-name" defaultValue={adminInfo.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" defaultValue={adminInfo.role} readOnly />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={adminInfo.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={adminInfo.phone} />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Change Photo</Button>
                      <Button variant="outline">Remove Photo</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-6">
            {/* Appearance settings content - same as before */}
            <Card>
              <CardHeader>
                <CardTitle>Theme Preferences</CardTitle>
                <CardDescription>Customize the look and feel of the dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Color Theme</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="flex flex-col items-center justify-center h-24 p-4 border-primary"
                    >
                      <Sun className="h-8 w-8 mb-2" />
                      <span>Light</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center justify-center h-24 p-4">
                      <Moon className="h-8 w-8 mb-2" />
                      <span>Dark</span>
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center justify-center h-24 p-4">
                      <Laptop className="h-8 w-8 mb-2" />
                      <span>System</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            {/* Notifications settings content - same as before */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Control how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            {/* Security settings content - same as before */}
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Academic Settings */}
          <TabsContent value="academic" className="space-y-6">
            <GradeLevelsSettings />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

