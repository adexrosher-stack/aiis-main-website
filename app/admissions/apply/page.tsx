import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EnhancedApplicationForm } from "@/components/enhanced-application-form"

export default function ApplyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/PhD.jpeg"
            alt="Apply to AIIS"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Apply to AIIS</h1>
            <p className="text-xl text-gray-200">
              Begin your journey at the African Institute for International Studies. Our application process is designed
              to be straightforward and supportive.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="space-y-8 mb-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Application Form</h2>
                <p className="text-lg text-muted-foreground">
                  Please complete the application form below. All fields marked with an asterisk (*) are required.
                </p>
                <div className="w-20 h-1 bg-primary"></div>
              </div>
            </div>

            <EnhancedApplicationForm />
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Application Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Before You Begin</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Review program requirements and eligibility criteria</li>
                    <li>Prepare all required documents in digital format</li>
                    <li>Have your academic history information ready</li>
                    <li>Prepare contact information for references</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Required Documents</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Official transcripts from previous institutions</li>
                    <li>Letters of recommendation</li>
                    <li>Personal statement</li>
                    <li>Copy of government-issued ID</li>
                    <li>Passport-sized photograph</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Application Timeline</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <strong>Enrollment Guidelines:</strong> AIIS accepts applications year-round and places eligible students at the start of their respective courses, based on availability and program schedules.
                    </li>
                    <li>Applications are reviewed within 4 weeks</li>
                    <li>Admission decisions are sent via email and Phone</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-slate-100 dark:bg-slate-800">
                <CardTitle>Need Assistance?</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p>
                  Our admissions team is here to help you through the application process. If you have any questions or
                  need assistance, please don't hesitate to contact us.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-sm text-muted-foreground">+251 927 95 68 70 / +251 912 35 70 38</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-sm text-muted-foreground">info.aiis.edu@gmail.com</p>
                      <p className="text-sm text-muted-foreground">touch.esck@yahoo.com</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full mt-4">
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Application Fee</h3>
                <p>A non-refundable application fee is required to process your application.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Local Students:</span>
                    <span className="font-bold">500 ETB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>International Students:</span>
                    <span className="font-bold">50 USD</span>
                  </div>
                </div>
                <p className="text-sm mt-4">Payment instructions will be provided after submitting your application.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

