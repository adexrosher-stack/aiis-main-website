import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, GraduationCap, BookOpen, Users, Calendar } from "lucide-react"

// This would typically come from a database
const programs = {
  "bachelor-of-theology": {
    id: "bachelor-of-theology",
    title: "Bachelor of Theology (BTh)",
    level: "undergraduate",
    format: "residential",
    duration: "4 years",
    credits: 120,
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "The Bachelor of Theology program provides students with a solid foundation in biblical studies, theology, church history, and practical ministry skills. This comprehensive program prepares graduates for various ministry roles or further academic study.",
    overview:
      "The Bachelor of Theology (BTh) is designed to provide students with a comprehensive understanding of biblical texts, theological concepts, church history, and practical ministry skills. This program combines academic rigor with practical application to prepare graduates for effective ministry in various contexts.",
    curriculum: [
      {
        year: "Year 1",
        courses: [
          "Introduction to Biblical Studies",
          "Old Testament Survey",
          "New Testament Survey",
          "Church History I",
          "Theological Foundations",
          "Academic Writing and Research",
          "Ministry Formation I",
        ],
      },
      {
        year: "Year 2",
        courses: [
          "Biblical Hermeneutics",
          "Systematic Theology I",
          "Church History II",
          "Introduction to Pastoral Ministry",
          "Biblical Languages (Hebrew/Greek)",
          "World Religions",
          "Ministry Formation II",
        ],
      },
      {
        year: "Year 3",
        courses: [
          "Systematic Theology II",
          "Biblical Exegesis",
          "Christian Ethics",
          "Homiletics",
          "Missiology",
          "Pastoral Counseling",
          "Ministry Formation III",
        ],
      },
      {
        year: "Year 4",
        courses: [
          "Advanced Theological Studies",
          "Contemporary Theological Issues",
          "Leadership and Administration",
          "Contextual Theology",
          "Senior Thesis",
          "Ministry Practicum",
          "Capstone Project",
        ],
      },
    ],
    admissionRequirements: [
      "High school diploma or equivalent",
      "Completed application form",
      "Official transcripts from previous institutions",
      "Two letters of recommendation (one from a pastor/church leader)",
      "Personal statement of faith and ministry goals (500 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "Pastor or Associate Pastor",
      "Youth Minister",
      "Missionary",
      "Church Planter",
      "Christian Education Director",
      "Bible Teacher",
      "Ministry Coordinator",
      "Further graduate studies",
    ],
    faculty: ["Dr. Esckinder Taddesse", "Pr. Tsadiku Abdo", "Inst. Eyob Mulau"],
  },
  "master-of-divinity": {
    id: "master-of-divinity",
    title: "Master of Divinity (MDiv)",
    level: "graduate",
    format: "residential",
    duration: "3 years",
    credits: 90,
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "A comprehensive, three-year residential program designed to prepare students for pastoral ministry, theological teaching, and leadership roles in various contexts.",
    overview:
      "The Master of Divinity (MDiv) is our premier graduate program designed to prepare students for ordained ministry, pastoral leadership, and advanced theological study. This program provides comprehensive training in biblical studies, theology, church history, and practical ministry skills with a focus on contextual application in African settings.",
    curriculum: [
      {
        year: "Year 1",
        courses: [
          "Advanced Biblical Interpretation",
          "Old Testament Theology",
          "New Testament Theology",
          "Church History and African Christianity",
          "Systematic Theology I",
          "Biblical Languages I",
          "Pastoral Ministry Foundations",
        ],
      },
      {
        year: "Year 2",
        courses: [
          "Biblical Exegesis",
          "Systematic Theology II",
          "Christian Ethics",
          "Preaching and Worship",
          "Missiology and Contextualization",
          "Biblical Languages II",
          "Pastoral Counseling",
          "Field Education I",
        ],
      },
      {
        year: "Year 3",
        courses: [
          "Advanced Preaching",
          "Leadership and Church Administration",
          "Contemporary Theological Issues",
          "African Theological Perspectives",
          "Capstone Integration Project",
          "Field Education II",
          "Ministry Specialization Electives",
        ],
      },
    ],
    admissionRequirements: [
      "Bachelor's degree from an accredited institution",
      "Minimum GPA of 3.0 on a 4.0 scale",
      "Completed application form",
      "Official transcripts from all previous institutions",
      "Three letters of recommendation (academic, pastoral, and character)",
      "Personal statement of calling and ministry goals (1000 words)",
      "Interview with faculty committee",
    ],
    careerOpportunities: [
      "Senior Pastor",
      "Denominational Leader",
      "Theological Educator",
      "Chaplain",
      "Missionary",
      "Church Planter",
      "Non-profit Organization Leader",
      "Doctoral Studies",
    ],
    faculty: ["Dr. Esckinder Taddesse", "Dr. Endale Gebremeskel", "Mr. Mengistu Woldemariam", "Dr. Abeba Belay"],
  },
  "master-of-theology": {
    id: "master-of-theology",
    title: "Master of Theology (MTh)",
    level: "graduate",
    format: "hybrid",
    duration: "2 years",
    credits: 48,
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "An advanced academic program designed to equip students with theological depth, critical research skills, and practical ministry applications.",
    overview:
      "The Master of Theology (MTh) is an advanced academic degree designed for those who have completed an MDiv or equivalent and wish to pursue specialized study and research in a particular theological discipline. This program prepares students for academic teaching, advanced ministry positions, or doctoral studies.",
    curriculum: [
      {
        year: "Year 1",
        courses: [
          "Advanced Research Methods",
          "Contemporary Theological Methods",
          "Specialized Concentration Courses (4)",
          "Interdisciplinary Seminar",
          "Thesis Proposal Development",
        ],
      },
      {
        year: "Year 2",
        courses: [
          "Advanced Specialized Courses (2)",
          "Thesis Research and Writing",
          "Thesis Defense",
          "Teaching Practicum (optional)",
        ],
      },
    ],
    specializations: [
      "Biblical Studies (Old or New Testament)",
      "Systematic Theology",
      "Historical Theology",
      "Practical Theology",
      "Missiology",
      "African Christian Theology",
    ],
    admissionRequirements: [
      "Master of Divinity or equivalent theological degree",
      "Minimum GPA of 3.3 on a 4.0 scale",
      "Completed application form",
      "Official transcripts from all previous institutions",
      "Three academic references",
      "Research writing sample (15-20 pages)",
      "Research proposal outline",
      "Interview with faculty committee",
    ],
    careerOpportunities: [
      "Theological Educator",
      "Academic Researcher",
      "Denominational Leader",
      "Specialized Ministry Leader",
      "Doctoral Studies (PhD, ThD)",
      "Theological Writer/Publisher",
    ],
    faculty: ["Dr. Esckinder Taddesse", "Dr. Menkir Isayas", "Dr. Wendaferahu Adenew", "Dr. Lidetu Alemu"],
  },
}

export default function ProgramDetailPage({ params }: { params: { id: string } }) {
  const program = programs[params.id as keyof typeof programs]

  if (!program) {
    return (
      <div className="container px-4 md:px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight">Program Not Found</h1>
        <p className="mt-4 text-muted-foreground">The program you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/academics">View All Programs</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.image || "/placeholder.svg"}
            alt={program.title}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
              <span className="capitalize">{program.level} Program</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{program.title}</h1>
            <p className="text-xl text-gray-200">{program.description}</p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Program Overview</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-lg">{program.overview}</p>
            </div>

            <Tabs defaultValue="curriculum" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
                <TabsTrigger value="careers">Careers</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="space-y-6">
                <h3 className="text-2xl font-bold">Program Curriculum</h3>
                <p className="text-muted-foreground">
                  Our curriculum is designed to provide a comprehensive education that balances academic rigor with
                  practical ministry application.
                </p>

                <div className="space-y-8 mt-6">
                  {program.curriculum.map((year) => (
                    <div key={year.year} className="space-y-4">
                      <h4 className="text-xl font-semibold">{year.year}</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {year.courses.map((course, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {program.specializations && (
                  <div className="mt-8 space-y-4">
                    <h4 className="text-xl font-semibold">Specializations</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {program.specializations.map((specialization, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{specialization}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="admission" className="space-y-6">
                <h3 className="text-2xl font-bold">Admission Requirements</h3>
                <p className="text-muted-foreground">
                  The following requirements must be met for admission to the {program.title} program.
                </p>

                <ul className="space-y-3 mt-6">
                  {program.admissionRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3">Application Process</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Review admission requirements and program details</li>
                    <li>Complete the online application form</li>
                    <li>Submit all required documents</li>
                    <li>Pay the application fee</li>
                    <li>Interview with faculty committee (if required)</li>
                    <li>Receive admission decision</li>
                  </ol>
                </div>
              </TabsContent>

              <TabsContent value="careers" className="space-y-6">
                <h3 className="text-2xl font-bold">Career Opportunities</h3>
                <p className="text-muted-foreground">
                  Graduates of the {program.title} program are prepared for various ministry and leadership roles.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  {program.careerOpportunities.map((career, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{career}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faculty" className="space-y-6">
                <h3 className="text-2xl font-bold">Program Faculty</h3>
                <p className="text-muted-foreground">
                  Our distinguished faculty members bring extensive academic credentials and practical ministry
                  experience.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  {program.faculty.map((faculty, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{faculty}</h4>
                          <Link
                            href={`/faculty/${faculty.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-primary text-sm hover:underline"
                          >
                            View Profile
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Program Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Degree Level</h4>
                      <p className="text-muted-foreground capitalize">{program.level}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p className="text-muted-foreground">{program.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Credits</h4>
                      <p className="text-muted-foreground">{program.credits} credit hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Format</h4>
                      <p className="text-muted-foreground capitalize">{program.format}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Start Dates</h4>
                      <p className="text-muted-foreground">September & January</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/admissions/apply">Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Request Information</h3>
                <p>Interested in learning more about this program? Contact our admissions team for more information.</p>
                <Button asChild variant="outline" className="w-full bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Download Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <BookOpen className="h-4 w-4" />
                      Program Brochure
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <BookOpen className="h-4 w-4" />
                      Course Catalog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                      <BookOpen className="h-4 w-4" />
                      Tuition & Fees
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Related Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore other academic programs that might interest you.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.values(programs)
              .filter((p) => p.id !== program.id)
              .slice(0, 3)
              .map((relatedProgram) => (
                <Card
                  key={relatedProgram.id}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedProgram.image || "/placeholder.svg"}
                      alt={relatedProgram.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">{relatedProgram.title}</h4>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{relatedProgram.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        {relatedProgram.duration}
                      </span>
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        {relatedProgram.credits} Credits
                      </span>
                      <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full capitalize">
                        {relatedProgram.format}
                      </span>
                    </div>
                    <Button asChild variant="outline" className="w-full mt-2">
                      <Link href={`/programs/${relatedProgram.id}`}>View Program</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Begin Your Journey?</h2>
              <p className="text-lg text-white/80">
                Take the next step in your theological education. Apply now to join our community of scholars and
                leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-accent text-black hover:bg-accent/90 rounded-md">
                  <Link href="/admissions/apply">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-md"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Students at AIIS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

