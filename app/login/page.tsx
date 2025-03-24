import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Login"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-4 text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student & Faculty Portal</h1>
            <p className="text-xl text-gray-200">Access your courses, grades, and academic resources</p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="flex-1 flex items-center justify-center py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md">
            <Card className="border-none shadow-xl">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
                <CardDescription className="text-center">Enter your credentials to access your portal</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="student" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="student">Student</TabsTrigger>
                    <TabsTrigger value="faculty">Faculty/Admin</TabsTrigger>
                  </TabsList>
                  <TabsContent value="student">
                    <form>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="student-id">Student ID</Label>
                          <Input id="student-id" placeholder="Enter your student ID" required />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="student-password">Password</Label>
                            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <Input id="student-password" type="password" placeholder="••••••••" required />
                        </div>
                        <Button type="submit" className="w-full" asChild>
                          <Link href="/dashboard/student">Sign In</Link>
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                  <TabsContent value="faculty">
                    <form>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="faculty-id">Faculty/Admin ID</Label>
                          <Input id="faculty-id" placeholder="Enter your ID" required />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="faculty-password">Password</Label>
                            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                          <Input id="faculty-password" type="password" placeholder="••••••••" required />
                        </div>
                        <Button type="submit" className="w-full" asChild>
                          <Link href="/dashboard/admin">Sign In</Link>
                        </Button>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-muted-foreground">
                  <p>First time logging in? Use your student/faculty ID and the temporary password provided to you.</p>
                </div>
                <div className="text-sm text-center">
                  <p>
                    Need help?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact support
                    </Link>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

