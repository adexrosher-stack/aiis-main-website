"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, CheckCircle, User, FileCheck, Award } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define the AdmissionsPage component
const AdmissionsPage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState("DipTh")
  const [studentType, setStudentType] = useState("local")

  const programs = [
    { id: "DipTh", name: "Diploma in Theology (DipTh)", localFee: "700 ETB per credit hour", internationalFee: "25 USD per credit hour" },
    { id: "BTh", name: "Bachelor of Theology (BTh)", localFee: "700 ETB per credit hour", internationalFee: "25 USD per credit hour" },
    { id: "MDiv", name: "Master of Divinity (MDiv)", localFee: "800 ETB per credit hour", internationalFee: "50 USD per credit hour" },
    { id: "MTh", name: "Master of Theology (MTh)", localFee: "900 ETB per credit hour", internationalFee: "50 USD per credit hour" },
    { id: "MTh-PS", name: "Master of Theology in Practical Studies (MTh-PS)", localFee: "800 ETB per credit hour", internationalFee: "50 USD per credit hour" },
    { id: "MA-CP", name: "MA in Counseling Psychology", localFee: "800 ETB per credit hour", internationalFee: "50 USD per credit hour" },
    { id: "MA-DTS", name: "MA in Development and Theological Studies", localFee: "800 ETB per credit hour", internationalFee: "50 USD per credit hour" },
    { id: "MA-OL", name: "MA in Organizational Leadership", localFee: "800 ETB per credit hour", internationalFee: "50 USD per credit hour" },
    { id: "PhD", name: "Doctor of Philosophy (PhD)", localFee: "25,000 ETB per phase", internationalFee: "350 USD per phase" },
  ]

  const selectedProgramData = programs.find((program) => program.id === selectedProgram)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/PhD.jpeg"
            alt="Admissions"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Admissions</h1>
            <p className="text-xl text-gray-200">
              Begin your journey at the African Institute for International Studies. Our admission process is designed
              to identify and support students who are passionate about theological education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/admissions/apply">Start my Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section id="application-process" className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Application Process</h2>
                <p className="text-lg text-muted-foreground">
                  Follow these steps to apply for any of our undergraduate, graduate, or doctoral programs.
                </p>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/4 text-primary w-16 h-16 text-2xl font-bold mx-auto mb-4">
                      <User className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-center text-xl">Choose Your Program</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Explore our diverse programs and verify that you meet the eligibility criteria for your chosen field of study.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/4 text-primary w-16 h-16 text-2xl font-bold mx-auto mb-4">
                      <FileText className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-center text-xl">Submit Your Application</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Complete and submit the AIIS Application Form along with all required supporting documents.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/4 text-primary w-16 h-16 text-2xl font-bold mx-auto mb-4">
                      <FileCheck className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-center text-xl">Application Review</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our Admissions Committee will evaluate your application. Some programs may require an entrance exam.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/4 text-primary w-16 h-16 text-2xl font-bold mx-auto mb-4">
                      <Award className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-center text-xl">Acceptance & Enrollment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Upon acceptance, receive your admission letter and confirm enrollment by paying tuition fees.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center mt-12">
                <Button asChild className="gap-2 rounded-md bg-primary text-white hover:bg-primary/90">
                  <Link href="/AIIS Application Form.pdf" target="_blank">
                    <Download className="h-4 w-4" /> Download Application Form
                  </Link>
                </Button>
              </div>
            </section>

            <section id="required-documents" className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Required Documents</h2>
                <p className="text-lg text-muted-foreground">
                  To complete your application, submit the following documents based on your program of interest.
                </p>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>

              <Tabs defaultValue="graduate" className="space-y-8">
                <div className="flex justify-center">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="undergraduate" className="text-lg py-3">
                      Undergraduate
                    </TabsTrigger>
                    <TabsTrigger value="graduate" className="text-lg py-3">
                      Graduate
                    </TabsTrigger>
                    <TabsTrigger value="doctoral" className="text-lg py-3">
                      Doctoral
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="undergraduate" className="space-y-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Completed Application Form</h4>
                            <p className="text-sm text-muted-foreground">
                              Download and fill out the official AIIS application form
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Copy of High School Certificate or Equivalent</h4>
                            <p className="text-sm text-muted-foreground">
                              Provide a certified copy of your high school diploma
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Official Transcripts from Previous Institutions</h4>
                            <p className="text-sm text-muted-foreground">
                              Submit sealed transcripts from all previous educational institutions
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Recommendation Letter</h4>
                            <p className="text-sm text-muted-foreground">From a church leader or academic reference</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Personal Statement (200 words)</h4>
                            <p className="text-sm text-muted-foreground">
                              Describing your faith, ministry goals, and motivation for studying at AIIS
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="graduate" className="space-y-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Completed Application Form</h4>
                            <p className="text-sm text-muted-foreground">
                              Download and fill out the official AIIS application form
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Copy of Bachelor&apos;s Degree Certificate</h4>
                            <p className="text-sm text-muted-foreground">
                              Provide a certified copy of your undergraduate degree
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Official Undergraduate Transcripts</h4>
                            <p className="text-sm text-muted-foreground">
                              Submit sealed transcripts from your undergraduate institution
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Two Recommendation Letters</h4>
                            <p className="text-sm text-muted-foreground">
                              From an academic mentor & church/ministry leader
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Research Proposal</h4>
                            <p className="text-sm text-muted-foreground">For thesis-based programs only</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Personal Essay (200 words)</h4>
                            <p className="text-sm text-muted-foreground">
                              Outlining your spiritual journey, academic goals, and ministry experience
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="doctoral" className="space-y-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Completed Application Form</h4>
                            <p className="text-sm text-muted-foreground">
                              Download and fill out the official AIIS application form
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">
                              Copy of Master of Theology (MTh) or Equivalent Degree Certificate
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Provide a certified copy of your graduate degree
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Official Graduate Transcripts</h4>
                            <p className="text-sm text-muted-foreground">
                              Submit sealed transcripts from your graduate institution
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Three Recommendation Letters</h4>
                            <p className="text-sm text-muted-foreground">
                              From a professor, church/ministry leader, and previous thesis advisor
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Published or Unpublished Articles</h4>
                            <p className="text-sm text-muted-foreground">If available</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Research Prospectus (100 words)</h4>
                            <p className="text-sm text-muted-foreground">On the proposed PhD study</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold">Personal Statement (500 words)</h4>
                            <p className="text-sm text-muted-foreground">
                              Detailing your theological interests, academic background, and research goals
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <p className="text-center text-muted-foreground">
                Note: All documents must be scanned and emailed to AIIS Admissions Office, or submitted in person at our
                Addis Ababa office.
              </p>
            </section>

            <section id="tuition-fees" className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Tuition & Fees</h2>
                <p className="text-lg text-muted-foreground">
                  Our tuition rates are designed to make quality theological education accessible to all students.
                </p>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Select Program</label>
                        <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            {programs.map((program) => (
                              <SelectItem key={program.id} value={program.id}>
                                {program.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">Student Type</label>
                        <Select value={studentType} onValueChange={setStudentType}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select student type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="local">Local (Ethiopian)</SelectItem>
                            <SelectItem value="international">International</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-6 p-6 bg-primary/10 rounded-lg">
                      <h3 className="text-lg font-semibold">Tuition Fee</h3>
                      <p className="text-2xl font-bold text-primary">
                        {studentType === "local" ? selectedProgramData?.localFee : selectedProgramData?.internationalFee}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        For {selectedProgramData?.name} - {studentType === "local" ? "Local Students" : "International Students"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg mt-8">
                <CardHeader>
                  <CardTitle>Payment Options</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Payment Schedule Options</h4>
                          <p className="text-sm text-muted-foreground">Fees can be paid per semester or annually</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Bank Transfer</h4>
                          <p className="text-sm text-muted-foreground">Direct deposit to the AIIS bank account</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Mobile Payment</h4>
                          <p className="text-sm text-muted-foreground">Using local mobile payment services</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">In-Person Payment</h4>
                          <p className="text-sm text-muted-foreground">At the AIIS Addis Ababa office</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="financial-aid" className="space-y-8">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">Financial Aid</h2>
                <p className="text-lg text-muted-foreground">
                  Information about financial aid and scholarship opportunities at AIIS.
                </p>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <p className="text-muted-foreground">
                    Currently, the African Institute for International Studies (AIIS) does not have active financial aid or scholarship programs. Announcements will be made when financial aid and scholarship opportunities become available. In the meantime, prospective students can contact our admissions office to request detailed information about potential aid or scholarship options.
                  </p>
                  <div className="flex justify-center mt-6">
                    <Button asChild className="gap-2 rounded-md bg-primary text-white hover:bg-primary/90">
                      <Link href="/contact">Contact Admissions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 sticky top-24 font-sans">
              <CardHeader className="bg-primary/4 p-6 border-b border-gray-200">
                <CardTitle className="text-xl text-primary font-semibold tracking-tight">Apply Online</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Begin your academic journey at AIIS by submitting your application through our secure online portal. Track your progress effortlessly.
                </p>
                <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 text-base py-5 rounded-lg transition-colors duration-200">
                  <Link href="/admissions/apply">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 sticky top-[calc(24rem+2rem)] font-sans">
              <CardHeader className="bg-primary/4 p-6 border-b border-gray-200">
                <CardTitle className="text-xl text-primary font-semibold tracking-tight">Request Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover more about our programs and admission process. Connect with our admissions team for tailored guidance.
                </p>
                <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 text-base py-5 rounded-lg transition-colors duration-200">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Explicitly export the component as default
export default AdmissionsPage