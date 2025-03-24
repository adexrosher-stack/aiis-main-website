import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, GraduationCap, BookOpen, Award, FileText } from "lucide-react"

// This would typically come from a database
const facultyMembers = {
  "dr-esckinder-taddesse": {
    id: "dr-esckinder-taddesse",
    name: "Dr. Esckinder Taddesse",
    title: "Principal",
    credentials: "PhD, ThD",
    image: "/placeholder.svg?height=600&width=600",
    email: "touch.esck@yahoo.com",
    phone: "+251 927 95 68 70",
    bio: "Dr. Esckinder Taddesse serves as the Principal of AIIS and brings extensive experience in theological education and leadership. With a PhD and ThD, he has dedicated his career to advancing contextual theological education in Africa. His research interests include African Christian theology, leadership development, and missiology.",
    education: [
      { degree: "PhD in Theology", institution: "Faith Theological Seminary, Nagaland, India", year: "2015" },
      { degree: "ThD (Doctor of Theology)", institution: "International Theological Seminary", year: "2012" },
      { degree: "MTh (Master of Theology)", institution: "Ethiopian Graduate School of Theology", year: "2008" },
      {
        degree: "BTh (Bachelor of Theology)",
        institution: "Evangelical Theological College, Addis Ababa",
        year: "2004",
      },
    ],
    courses: [
      "Advanced Systematic Theology",
      "African Christian Theology",
      "Leadership and Administration",
      "Missiology",
      "Theological Research Methods",
    ],
    publications: [
      {
        title: "Contextualizing Theology in the Ethiopian Context",
        year: "2018",
        publisher: "African Theological Journal",
      },
      {
        title: "Leadership Development in African Churches",
        year: "2016",
        publisher: "International Journal of Missiology",
      },
      {
        title: "The Role of Theological Education in Community Transformation",
        year: "2014",
        publisher: "Journal of Contextual Theology",
      },
    ],
    research: [
      "Contextual Theology in East Africa",
      "Leadership Development in African Churches",
      "Integration of Faith and Culture",
      "Theological Education Models for the Global South",
    ],
  },
  "pr-tsadiku-abdo": {
    id: "pr-tsadiku-abdo",
    name: "Pr. Tsadiku Abdo",
    title: "President of ECFE",
    credentials: "BTh, MTh",
    image: "/placeholder.svg?height=600&width=600",
    email: "tsadiku.abdo@aiis.edu",
    phone: "+251 911 23 45 67",
    bio: "Pr. Tsadiku Abdo serves as the President of the Evangelical Churches Fellowship of Ethiopia (ECFE) and is a valued faculty member at AIIS. With extensive experience in church leadership and theological education, he brings practical insights to his teaching and mentorship of students. His passion is to equip the next generation of church leaders with solid theological foundations and practical ministry skills.",
    education: [
      { degree: "MTh (Master of Theology)", institution: "Ethiopian Graduate School of Theology", year: "2010" },
      {
        degree: "BTh (Bachelor of Theology)",
        institution: "Evangelical Theological College, Addis Ababa",
        year: "2005",
      },
    ],
    courses: [
      "Pastoral Ministry",
      "Church Leadership",
      "Homiletics",
      "Evangelism and Church Growth",
      "Christian Ethics",
    ],
    publications: [
      { title: "Effective Church Leadership in the Ethiopian Context", year: "2017", publisher: "ECFE Publications" },
      { title: "Evangelism Strategies for Urban Ethiopia", year: "2015", publisher: "Journal of African Missiology" },
    ],
    research: [
      "Church Growth in Urban Settings",
      "Leadership Development in Ethiopian Churches",
      "Evangelism and Discipleship Models",
      "Pastoral Care in African Contexts",
    ],
  },
  "dr-endale-gebremeskel": {
    id: "dr-endale-gebremeskel",
    name: "Dr. Endale Gebremeskel",
    title: "Faculty Member",
    credentials: "MA, DMin",
    image: "/placeholder.svg?height=600&width=600",
    email: "endale.gebremeskel@aiis.edu",
    phone: "+251 922 33 44 55",
    bio: "Dr. Endale Gebremeskel is a distinguished faculty member at AIIS with expertise in practical theology and pastoral ministry. With a Doctor of Ministry degree, he combines academic excellence with practical ministry experience. His teaching approach emphasizes the integration of theological principles with real-world ministry applications, particularly in the African context.",
    education: [
      { degree: "DMin (Doctor of Ministry)", institution: "Fuller Theological Seminary, USA", year: "2013" },
      { degree: "MA in Theology", institution: "Ethiopian Graduate School of Theology", year: "2007" },
      { degree: "BA in Bible and Theology", institution: "Evangelical Theological College", year: "2003" },
    ],
    courses: [
      "Pastoral Counseling",
      "Practical Theology",
      "Ministry Formation",
      "Spiritual Formation",
      "Contextual Ministry",
    ],
    publications: [
      {
        title: "Pastoral Counseling in the Ethiopian Church Context",
        year: "2016",
        publisher: "Journal of Pastoral Care",
      },
      {
        title: "Spiritual Formation for African Church Leaders",
        year: "2014",
        publisher: "African Journal of Theology",
      },
      {
        title: "Contextualizing Ministry Training in East Africa",
        year: "2012",
        publisher: "International Journal of Practical Theology",
      },
    ],
    research: [
      "Pastoral Care and Counseling in African Contexts",
      "Spiritual Formation and Discipleship",
      "Contextual Ministry Models",
      "Church-Based Theological Education",
    ],
  },
}

export default function FacultyDetailPage({ params }: { params: { id: string } }) {
  const faculty = facultyMembers[params.id as keyof typeof facultyMembers]

  if (!faculty) {
    return (
      <div className="container px-4 md:px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight">Faculty Member Not Found</h1>
        <p className="mt-4 text-muted-foreground">The faculty member you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/faculty">View All Faculty</Link>
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
            src="/placeholder.svg?height=1080&width=1920"
            alt="Faculty Background"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{faculty.name}</h1>
            <p className="text-xl text-gray-200">
              {faculty.title} • {faculty.credentials}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
              <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">{faculty.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">{faculty.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href={`mailto:${faculty.email}`}>Contact {faculty.name.split(" ")[0]}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Courses Taught</h3>
                <ul className="space-y-2">
                  {faculty.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Biography</h2>
              <div className="w-20 h-1 bg-primary"></div>
              <p className="text-lg">{faculty.bio}</p>
            </div>

            <Tabs defaultValue="education" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="space-y-6">
                <h3 className="text-2xl font-bold">Education</h3>
                <div className="space-y-6">
                  {faculty.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="publications" className="space-y-6">
                <h3 className="text-2xl font-bold">Publications</h3>
                <div className="space-y-6">
                  {faculty.publications.map((pub, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{pub.title}</h4>
                        <p className="text-muted-foreground">{pub.publisher}</p>
                        <p className="text-sm text-muted-foreground">{pub.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="research" className="space-y-6">
                <h3 className="text-2xl font-bold">Research Interests</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {faculty.research.map((research, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                      <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{research}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-bold mb-6">Office Hours & Availability</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold">Regular Office Hours</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Wednesday</span>
                      <span>1:00 PM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Appointments</h4>
                  <p className="text-muted-foreground">
                    Students can schedule appointments outside of regular office hours by email or phone.
                  </p>
                  <Button asChild variant="outline">
                    <Link href={`mailto:${faculty.email}?subject=Appointment Request`}>Request Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Faculty Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Other Faculty Members</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our other distinguished faculty members at AIIS.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.values(facultyMembers)
              .filter((f) => f.id !== faculty.id)
              .map((otherFaculty) => (
                <Card
                  key={otherFaculty.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={otherFaculty.image || "/placeholder.svg"}
                      alt={otherFaculty.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 bg-white dark:bg-slate-900">
                    <h3 className="font-bold text-lg">{otherFaculty.name}</h3>
                    <p className="text-primary font-medium mt-1">{otherFaculty.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">{otherFaculty.credentials}</p>
                    <Button asChild variant="outline" className="w-full mt-4">
                      <Link href={`/faculty/${otherFaculty.id}`}>View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

