import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, GraduationCap, BookOpen, Award, FileText } from "lucide-react"

// This would typically come from a database
export async function generateStaticParams() {
  return Object.keys(facultyMembers).map((id) => ({ id }));
}

// Add this before the facultyMembers definition
type FacultyMember = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  image: string;
  email: string;
  phone: string;
  bio: string;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  courses: string[];
  publications: Array<{
    title: string;
    year: string;
    publisher: string;
  }>;
  research: string[];
  officeHours?: {
    regular: Array<{
      day: string;
      hours: string;
    }>;
    appointmentInfo: string;
  };
};

const facultyMembers: Record<string, FacultyMember> = {
  "dr-esckinder-taddesse": {
    id: "dr-esckinder-taddesse",
    name: "Dr. Esckinder Taddesse",
    title: "Principal",
    credentials: "PhD, ThD",
    image:"/images/programs/The Director.jpeg",
    email: "touch.esck@yahoo.com",
    phone: "+251 927 95 68 70",
    bio: "Dr. Esckinder Taddesse serves as the Principal of AIIS and brings extensive experience in theological education and leadership. With a PhD and ThD, he has dedicated his career to advancing contextual theological education in Africa. His research interests include African Christian theology, leadership development, and missiology.",
    education: [
      { degree: "PhD in Philosophy", institution: "South African Theological Seminary Johannesburg, South Africa", year: "2015" },
      { degree: "ThD (Doctor of Theology)", institution: "Asia Baptist Graduate Theological Seminary (ABGTS), Philippines", year: "2012" },
      { degree: "MTh (Master of Theology)", institution: "Ethiopian Graduate School of Theology", year: "2008" },
      {
        degree: "BTh (Bachelor of Theology)",
        institution: "Evangelical Theological College, Addis Ababa",
        year: "2004",
      },
    ],
    courses: [
      "Advanced Systematic Theology",
      "Advanced Practical and Theological Studies",
      "Philosohy of Theology",
      "Biblical Hermeneutics",
      "Theological Research Methods",
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },
    ],
    research: [
      "Systematic Theology",
      "Christology",
      "Philosophy of Theology",
      "Biblical Hermeneutics",
      "The Ethiopian Orthodox Church context",
    ],
    // Add office hours for this faculty member
    officeHours: {
      regular: [
        { day: "Monday", hours: "10:00 AM - 2:00 PM" },
        { day: "Wednesday", hours: "1:00 PM - 5:00 PM" },
        { day: "Friday", hours: "9:00 AM - 12:00 PM" }
      ],
      appointmentInfo: "Students can schedule appointments outside of regular office hours by email or phone."
    }
  },
  "pr-tsadiku-abdo": {
    id: "pr-tsadiku-abdo",
    name: "Pr. Tsadiku Abdo",
    title: "President of ECFE",
    credentials: "BTh, MTh",
    image: "/images/programs/Tsadiku.jpg",
    email: "info@pastortsadiku.com",
    phone: "",
    bio: "Pastor Tsadiku Abdo is a prominent Ethiopian evangelical leader, theologian, and seasoned Christian minister with over 50 years of dedicated service. Currently, he serves as the President of the Evangelical Churches Fellowship of Ethiopia (ECFE) and Adjunct Faculty in AIIS. Pr. Tsadiku has substantial influence within Ethiopia's evangelical community",
    education: [
      { degree: "MTh (Master of Theology)", institution: "Ethiopian Graduate School of Theology", year: "" },
      {
        degree: "BTh (Bachelor of Theology)",
        institution: "East Africa School of Theology, Nairobi Kenya",
        year: "",
      },
    ],
    courses: [
 ],
    publications: [
],
    research: [
],
  },
  "eyob-mulatu": {
    id: "eyob-mulatu",
    name: "Inst. Eyob Mulatu",
    title: "Faculty Member",
    credentials: "BA, BTh, MTPS, MTh",
    image: "/images/programs/Ins. Eyob.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
 ],
    publications: [
],
    research: [
],
officeHours: {
  regular: [
    { day: "Monday", hours: "10:00 AM - 2:00 PM" },
    { day: "Wednesday", hours: "1:00 PM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 12:00 PM" }
  ],
  appointmentInfo: "Students can schedule appointments outside of regular office hours by email or phone."
}
  },
  "dr-endale-gebremeskel": {
    id: "dr-endale-gebremeskel",
    name: "Dr. Endale Gebremeskel",
    title: "Faculty Member",
    credentials: "MA, DMin",
    image: "/images/programs/Dr Endale.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "dr-lidetu-alemu": {
    id: "dr-lidetu-alemu",
    name: "Dr. Lidetu Alemu",
    title: "Adjunct Faculty",
    credentials: "DVM, PhD",
    image: "/images/programs/Dr. Lidetu 2.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "zetsaet-fiqadu": {
    id: "zetsaet-fiqadu",
    name: "Miss. Zetsaet Fiqadu",
    title: "Adjunct Faculty",
    credentials: "PhD candidate",
    image: "/images/programs/Zetseat.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "tesfaye-yakob": {
    id: "tesfaye-yakob",
    name: "Dr. Tesfaye Yakob",
    title: "Adjunct Faculty",
    credentials: "MD MTh, PhD candidate",
    image: "/images/programs/Dr. Tesfaye.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "bekele-deboch": {
    id: "bekele-deboch",
    name: "Dr. Bekele Deboch",
    title: "Adjunct Faculty",
    credentials: "BTh, MTh, PhD",
    image: "/images/programs/Dr. Bekele.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "tsedey-alemayehu": {
    id: "tsedey-alemayehu",
    name: "Dr. Tsedey Alemayehu",
    title: "Adjunct Faculty",
    credentials: "PhD",
    image: "/images/programs/Dr. Tsedey.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "yared-woldemariam": {
    id: "yared-woldemariam",
    name: "Kesis. Yared Woldemariam",
    title: "Adjunct Faculty",
    credentials: "MA, MADiev",
    image: "/images/programs/Yared.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "mengistu-woldemariam": {
    id: "mengistu-woldemariam",
    name: "Mr. Mengistu Woldemariam",
    title: "Adjunct Faculty",
    credentials: "MA, MPhil, MTh",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "dr-abeba-belay": {
    id: "dr-abeba-belay",
    name: "Dr. Abeba Belay",
    title: "Adjunct Faculty",
    credentials: "MA, PhD",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "dr-wendaferahu-adenew": {
    id: "dr-wendaferahu-adenew",
    name: "Dr. Wendaferahu Adenew",
    title: "Adjunct Faculty",
    credentials: "PhD",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "dr-menkir-isayas": {
    id: "dr-menkir-isayas",
    name: "Dr. Menkir Isayas",
    title: "Adjunct Faculty",
    credentials: "PhD",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "pr-chalew-mekere": {
    id: "pr-chalew-mekere",
    name: "Pr. Chalew Mekere",
    title: "Adjunct Faculty",
    credentials: "BTh/MA/MTh candidate",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "terefe-bulti": {
    id: "terefe-bulti",
    name: "Dr. Terefe Bulti",
    title: "Adjunct Faculty",
    credentials: "PhD",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "nahom-engida": {
    id: "nahom-engida",
    name: "Ins. Nahom Engida",
    title: "Adjunct Faculty",
    credentials: "BTh, MTh-PS, MTh Candidate",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "wasihun-hailu": {
    id: "wasihun-hailu",
    name: "Ins. Wasihun Hailu",
    title: "Adjunct Faculty",
    credentials: "BA, MA, MTh",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "kaleab-assefa": {
    id: "kaleab-assefa",
    name: "Kaleab Assefa",
    title: "Adjunct Faculty",
    credentials: "BA, Mdiv, MTh candidate",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "dr-sisay-desalegn": {
    id: "dr-sisay-desalegn",
    name: "Dr Sisay Desalegn",
    title: "Adjunct Faculty",
    credentials: "BA, Mdiv, MTh candidate",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
  ],
  },
  "edengenet": {
    id: "edengenet",
    name: "Edengenet",
    title: "Adjunct Faculty",
    credentials: "BA,MA,PhD candidate",
    image: "/images/programs/Ya.jpg",
    email: "",
    phone: "",
    bio: "",
    education: [
      { degree: "", institution: "", year: "" },
   ],
    courses: [
   
    ],
    publications: [
      {
        title: "",
        year: "",
        publisher: "",
      },

    ],
    research: [
      "",
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
            src="/images/programs/Leadership.jpg"
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

              {/* Tabs content */}
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

            {/* Only show office hours if the faculty member has them */}
            {faculty.officeHours && (
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl mt-8">
                <h3 className="text-2xl font-bold mb-6">Office Hours & Availability</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Regular Office Hours</h4>
                    <ul className="space-y-2">
                      {faculty.officeHours.regular.map((schedule, index) => (
                        <li key={index} className="flex justify-between">
                          <span>{schedule.day}</span>
                          <span>{schedule.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Appointments</h4>
                    <p className="text-muted-foreground">
                      {faculty.officeHours.appointmentInfo}
                    </p>
                    <Button asChild variant="outline">
                      <Link href={`mailto:${faculty.email}?subject=Appointment Request`}>Request Appointment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
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

