import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, CheckCircle } from "lucide-react"

export default function AdmissionsPage() {
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
                <Link href="#application-process">Start my Application</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#contact">Contact Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="space-y-16">
          <section id="application-process" className="space-y-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Application Process</h2>
              <p className="text-lg text-muted-foreground">
                Follow these steps to apply for any of our undergraduate, graduate, or doctoral programs.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 text-xl font-bold">
                      1
                    </div>
                    <span>Choose Your Program</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Review the list of available programs and ensure you meet the eligibility requirements.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 text-xl font-bold">
                      2
                    </div>
                    <span>Submit Your Application</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Download and fill out the AIIS Application Form. Attach all required documents.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 text-xl font-bold">
                      3
                    </div>
                    <span>Application Review</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your application will be reviewed by the Admissions Committee. Some programs may require an entrance
                    exam.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 text-xl font-bold">
                      4
                    </div>
                    <span>Acceptance & Enrollment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If accepted, you will receive an official admission letter. Confirm enrollment by paying tuition
                    fees.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild className="gap-2 rounded-md">
                <Link href="/application-form.pdf" target="_blank">
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
                          <h4 className="font-semibold">Copy of Bachelor's Degree Certificate</h4>
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

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h3 className="text-xl font-bold">Local Students</h3>
                  <p className="text-white/80">Fees for Ethiopian students</p>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-4 border-b">
                      <span className="font-medium">MA, MDiv, MTh-PS:</span>
                      <span className="text-xl font-bold">
                        800 ETB <span className="text-sm font-normal text-muted-foreground">per credit hour</span>
                      </span>
                    </li>
                    <li className="flex justify-between items-center pb-4 border-b">
                      <span className="font-medium">MTh:</span>
                      <span className="text-xl font-bold">
                        900 ETB <span className="text-sm font-normal text-muted-foreground">per credit hour</span>
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">PhD:</span>
                      <span className="text-xl font-bold">
                        350 USD <span className="text-sm font-normal text-muted-foreground">per phase</span>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h3 className="text-xl font-bold">International Students</h3>
                  <p className="text-white/80">Fees for non-Ethiopian students</p>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-4 border-b">
                      <span className="font-medium">MA/MDiv/MTPS:</span>
                      <span className="text-xl font-bold">
                        25 USD <span className="text-sm font-normal text-muted-foreground">per credit hour</span>
                      </span>
                    </li>
                    <li className="flex justify-between items-center pb-4 border-b">
                      <span className="font-medium">MTh:</span>
                      <span className="text-xl font-bold">
                        30 USD <span className="text-sm font-normal text-muted-foreground">per credit hour</span>
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">PhD:</span>
                      <span className="text-xl font-bold">
                        50 USD <span className="text-sm font-normal text-muted-foreground">per seminar session</span>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

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

          <section id="contact" className="space-y-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Contact Admissions</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about the application process? Our admissions team is here to help.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <FileText className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-lg">For Academic inquiries:</h3>
                        <p className="text-muted-foreground mt-2">
                          Esckinder Taddesse; Principal also Head to the Graduate and Postgraduate Faculty
                          <br />
                          Tel. No. 0927 95 68 70
                          <br />
                          Eyob Mulatu, head of Academic Affairs- 0912357038
                          <br />
                          E-mail: touch.esck@yahoo.com; touch.esckinder@gmail.com / aiisseminary@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FileText className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-lg">Canada Center:</h3>
                        <p className="text-muted-foreground mt-2">
                          Chalachew Mekere Eshetu(Pr): BTh, MA, MTh
                          <br />
                          Alberta-Canada center
                          <br />
                          Email: chale.eshetu@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FileText className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-lg">Mailing Address:</h3>
                        <p className="text-muted-foreground mt-2">P O Box 24211 Addis Ababa-Ethiopia</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-4">Quick Contact Form</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name" className="text-sm font-medium">
                            First Name
                          </label>
                          <input id="first-name" className="w-full p-2 border rounded-md" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name" className="text-sm font-medium">
                            Last Name
                          </label>
                          <input id="last-name" className="w-full p-2 border rounded-md" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input id="email" type="email" className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="program" className="text-sm font-medium">
                          Program of Interest
                        </label>
                        <select id="program" className="w-full p-2 border rounded-md">
                          <option>Select a program</option>
                          <option>Bachelor of Theology (BTh)</option>
                          <option>Master of Divinity (MDiv)</option>
                          <option>Master of Theology (MTh)</option>
                          <option>PhD in Theology</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea id="message" rows={4} className="w-full p-2 border rounded-md"></textarea>
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Inquiry
                      </Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </div>
  )
}

