import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FacultyMember {
  id: string
  name: string
  title: string
  credentials: string
  image: string
}

interface BoardMember {
  id: string
  name: string
  role: string
  credentials: string
  image: string
}

export default function FacultyPage() {
  const facultyMembers: FacultyMember[] = [
    {
      id: "dr-esckinder-taddesse",
      name: "Dr. Esckinder Taddesse",
      title: "Principal",
      credentials: "PhD, ThD",
      image: "/images/programs/The Director.jpeg"
    },
    {
      id: "eyob-mulatu",
      name: "Inst. Eyob Mulatu",
      title: "Faculty Member",
      credentials: "BA, BTh, MTPS, MTh",
      image: "/images/programs/Ins. Eyob.jpg"
    },
    {
      id: "dr-endale-gebremeskel",
      name: "Dr. Endale Gebremeskel",
      title: "Faculty Member",
      credentials: "MA, DMin",
      image: "/images/programs/Dr Endale.jpg"
    },
    {
      id: "pr-tsadiku-abdo",
      name: "Pr. Tsadiku Abdo",
      title: "Adjunct Faculty",
      credentials: "BTh, MTh",
      image: "/images/programs/Tsadiku.jpg"
    },
    {
      id: "dr-lidetu-alemu",
      name: "Dr. Lidetu Alemu",
      title: "Adjunct Faculty",
      credentials: "DVM, PhD",
      image: "/images/programs/Dr. Lidetu 2.jpg"
    },
    {
      id: "zetsaet-fiqadu",
      name: "Miss. Zetsaet Fiqadu",
      title: "Adjunct Faculty",
      credentials: "PhD candidate",
      image: "/images/programs/Zetseat.jpg"
    },
    {
      id: "tesfaye-yakob",
      name: "Dr. Tesfaye Yakob",
      title: "Adjunct Faculty",
      credentials: "MD MTh, PhD candidate",
      image: "/images/programs/Dr. Tesfaye.jpg"
    },
    {
      id: "bekele-deboch",
      name: "Dr. Bekele Deboch",
      title: "Adjunct Faculty",
      credentials: "BTh, MTh, PhD",
      image: "/images/programs/Dr. Bekele.jpg"
    },
    {
      id: "tsedey-alemayehu",
      name: "Dr. Tsedey Alemayehu",
      title: "Adjunct Faculty",
      credentials: "PhD",
      image: "/images/programs/Dr. Tsedey.jpg"
    },
    {
      id: "yared-woldemariam",
      name: "Kesis. Yared Woldemariam",
      title: "Adjunct Faculty",
      credentials: "MA, MADiev",
      image: "/images/programs/Yared.jpg"
    },
    {
      id: "mengistu-woldemariam",
      name: "Mr. Mengistu Woldemariam",
      title: "Adjunct Faculty",
      credentials: "MA, MPhil, MTh",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "dr-abeba-belay",
      name: "Dr. Abeba Belay",
      title: "Adjunct Faculty",
      credentials: "MA, PhD",
      image: "/images/programs/Ya.jpg"
    },

    {
      id: "dr-wendaferahu-adenew",
      name: "Dr. Wendaferahu Adenew",
      title: "Adjunct Faculty",
      credentials: "PhD",
      image: "/images/programs/Ya.jpg"
    },

    {
      id: "dr-menkir-isayas",
      name: "Dr. Menkir Isayas",
      title: "Adjunct Faculty",
      credentials: "PhD",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "pr-chalew-mekere",
      name: "Pr. Chalew Mekere",
      title: "Adjunct Faculty",
      credentials: "BTh/MA/MTh candidate",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "terefe-bulti",
      name: "Dr. Terefe Bulti",
      title: "Adjunct Faculty",
      credentials: "PhD",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "nahom-engida",
      name: "Ins. Nahom Engida",
      title: "Adjunct Faculty",
      credentials: "BTh, MTh-PS, MTh Candidate",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "wasihun-hailu",
      name: "Ins. Wasihun Hailu",
      title: "Adjunct Faculty",
      credentials: "BA, MA, MTh",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "kaleab-assefa",
      name: "Kaleab Assefa",
      title: "Adjunct Faculty",
      credentials: "BA, Mdiv, MTh candidate",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "dr-sisay-desalegn",
      name: "Dr Sisay Desalegn",
      title: "Adjunct Faculty",
      credentials: "BA, Mdiv, MTh candidate",
      image: "/images/programs/Ya.jpg"
    },
    {
      id: "edengenet",
      name: "Edengenet",
      title: "Adjunct Faculty",
      credentials: "BA,MA,PhD candidate",
      image: "/images/programs/Ya.jpg"
    },
  ]

  const boardMembers: BoardMember[] = [
    {
      id: "beyene-geleta",
      name: "Beyene Geleta",
      role: "Board Chairman",
      credentials: "BSc, MSc, MDiv, MTh Candidate",
      image: "/images/programs/Beyene.jpg"
    },
    {
      id: "zebene-fikre",
      name: "Zebene Fikre",
      role: "Board Member",
      credentials: "LLB, LLM, MDiv Candidate",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "dr-esckinder-taddesse-board",
      name: "Dr. Esckinder Taddesse",
      role: "Board Member",
      credentials: "MTh, PhD, ThD",
      image: "/images/programs/The Director.jpeg"
    },
    {
      id: "eyob-mulatu-board",
      name: "Eyob Mulatu",
      role: "Board Member",
      credentials: "BA, BTh, MTPS, MTh",
      image: "/images/programs/Ins. Eyob.jpg"
    },
    {
      id: "kidist-bekele",
      name: "Kidist Bekele",
      role: "Board Member",
      credentials: "BA, BTh",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "kebron-jorga",
      name: "Kebron Jorga",
      role: "Board Member",
      credentials: "BA, BTh",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "ermias-belete",
      name: "Ermias Belete",
      role: "Board Member",
      credentials: "BA, MDiv",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "nahom-engida",
      name: "Nahom Engida",
      role: "Board Member",
      credentials: "BA, MDiv, MTPS, MTh Candidate",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/Leadership.jpg"
            alt="Faculty"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Faculty & Leadership</h1>
            <p className="text-xl text-gray-200">
              Meet our dedicated faculty members and leadership team who are committed to providing high-quality
              theological education.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <Tabs defaultValue="faculty" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="faculty" className="text-lg py-3">
                Faculty
              </TabsTrigger>
              <TabsTrigger value="board" className="text-lg py-3">
                Board
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="faculty" className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Our Faculty</h2>
              <p className="text-lg text-muted-foreground">
                Our distinguished faculty members bring a wealth of academic knowledge and practical ministry experience
                to provide students with a comprehensive theological education.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {facultyMembers.map((member) => (
                <Link href={`/faculty/${member.id}`} key={member.id}>
                  <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 bg-white dark:bg-slate-900">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-primary font-medium mt-1">{member.title}</p>
                      <p className="text-sm text-muted-foreground mt-2">{member.credentials}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="board" className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Board Members</h2>
              <p className="text-lg text-muted-foreground">
                Our board of directors provides strategic leadership and governance to ensure AIIS fulfills its mission
                and vision.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {boardMembers.map((member) => (
                <Card
                  key={member.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 bg-white dark:bg-slate-900">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-primary font-medium mt-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.credentials}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section id="leadership-structure" className="mt-20 space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Leadership Structure</h2>
            <p className="text-lg text-muted-foreground">
              The African Institute for International Studies (AIIS) is led by a dedicated team of professionals
              committed to providing high-quality theological education.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-xl mt-8">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  Our leadership structure ensures effective governance and academic excellence. The institute is
                  governed by a Board of Directors who provide strategic direction and oversight. The day-to-day
                  operations are managed by the Principal and the Academic Affairs team.
                </p>
                <p className="text-lg">
                  Each academic department is led by experienced faculty members who bring expertise in their respective
                  fields. This structure allows for efficient decision-making and ensures that our programs maintain
                  high academic standards while remaining responsive to the needs of our students and the communities we
                  serve.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="/images/programs/Leadership.jpg"
                  alt="Leadership Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

