"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Users,
  GraduationCap,
  FileText,
  Settings,
  User,
  BookOpen,
  Building,
  ClipboardList,
  Bell,
  FileEdit,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

interface DashboardShellProps {
  children: React.ReactNode
  role?: "admin" | "student" | "teacher"
}

export function DashboardShell({ children, role = "admin" }: DashboardShellProps) {
  const pathname = usePathname()
  const [sidebarVisible, setSidebarVisible] = useState(true)

  const adminNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Students",
      href: "/dashboard/admin/students",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Courses",
      href: "/dashboard/admin/courses",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
    },
    {
      title: "Faculty",
      href: "/dashboard/admin/faculty",
      icon: <GraduationCap className="mr-2 h-4 w-4" />,
    },
    {
      title: "Board Members",
      href: "/dashboard/admin/board",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Departments",
      href: "/dashboard/admin/departments",
      icon: <Building className="mr-2 h-4 w-4" />,
    },
    {
      title: "Applications",
      href: "/dashboard/admin/applications",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Announcements",
      href: "/dashboard/admin/announcements",
      icon: <Bell className="mr-2 h-4 w-4" />,
    },
    {
      title: "Content Management",
      href: "/dashboard/admin/content",
      icon: <FileEdit className="mr-2 h-4 w-4" />,
    },
    {
      title: "Research & Publications",
      href: "/dashboard/admin/research",
      icon: <ClipboardList className="mr-2 h-4 w-4" />,
    },
    {
      title: "Reports",
      href: "/dashboard/admin/reports",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/admin/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  const studentNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard/student",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Grades",
      href: "/dashboard/student/grades",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/dashboard/student/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
  ]

  const teacherNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard/teacher",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Grades",
      href: "/dashboard/teacher/grades",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/dashboard/teacher/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
  ]

  const navItems = role === "admin" ? adminNavItems : role === "student" ? studentNavItems : teacherNavItems

  const quickActions = [
    { title: "Add Student", href: "/dashboard/admin/students?action=add", icon: <Users className="h-4 w-4" /> },
    { title: "Add Course", href: "/dashboard/admin/courses?action=add", icon: <BookOpen className="h-4 w-4" /> },
    {
      title: "Add Announcement",
      href: "/dashboard/admin/announcements?action=add",
      icon: <Bell className="h-4 w-4" />,
    },
    { title: "Add Event", href: "/dashboard/admin/content?action=add-event", icon: <FileEdit className="h-4 w-4" /> },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar Toggle Button (Mobile) */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Sidebar */}
        <div
          className={cn(
            "fixed top-0 bottom-0 left-0 z-40 w-64 bg-background border-r transition-transform duration-300 ease-in-out",
            sidebarVisible ? "translate-x-0" : "-translate-x-full",
            "md:translate-x-0", // Always visible on desktop
          )}
        >
          <div className="flex h-16 items-center border-b px-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">AIIS Admin</span>
            </Link>
            {/* Desktop sidebar toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto hidden md:flex"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              <ChevronRight className={cn("h-5 w-5 transition-transform", !sidebarVisible && "rotate-180")} />
            </Button>
          </div>
          <div className="space-y-4 py-4">
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 mb-6">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Admin User</h3>
                  <p className="text-sm text-muted-foreground">admin@aiis.edu</p>
                </div>
              </div>
              <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                    )}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            sidebarVisible ? "md:ml-64" : "ml-0",
            "p-4 md:p-8",
          )}
        >
          {/* Quick Actions */}
          {role === "admin" && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <Card className="p-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-2 p-2 rounded-full bg-primary/10">{action.icon}</div>
                        <span className="text-sm font-medium">{action.title}</span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {children}
        </main>
      </div>
    </div>
  )
}

