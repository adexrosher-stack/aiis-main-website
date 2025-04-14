import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Briefcase,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(boardMembers).map((id) => ({ id }));
}

// This would typically come from a database
const boardMembers = {
  "beyene-geleta": {
    id: "beyene-geleta",
    name: "Beyene Geleta",
    role: "Board Chairman",
    credentials: "BSc, MSc, MDiv, MTh (in process)",
    image: "/placeholder.svg?height=600&width=600",
    email: "beyene.geleta@aiis.edu",
    phone: "+251 911 12 34 56",
    bio: "Beyene Geleta serves as the Chairman of the AIIS Board of Directors. With extensive experience in both academic and ministry settings, he brings valuable leadership and vision to the institute. His background in science and theology provides a unique perspective on integrating faith and learning.",
    education: [
      {
        degree: "MSc in Computer Science",
        institution: "Addis Ababa University",
        year: "2010",
      },
      {
        degree: "BSc in Information Technology",
        institution: "Jimma University",
        year: "2005",
      },
      {
        degree: "MDiv (Master of Divinity)",
        institution: "Ethiopian Graduate School of Theology",
        year: "2015",
      },
      {
        degree: "MTh (Master of Theology)",
        institution: "AIIS",
        year: "In progress",
      },
    ],
    experience: [
      {
        position: "IT Director",
        organization: "Ethiopian Airlines",
        period: "2010-2018",
        description:
          "Led the IT department, overseeing systems development and digital transformation initiatives.",
      },
      {
        position: "Senior Pastor",
        organization: "Mekanisa Evangelical Church",
        period: "2018-Present",
        description:
          "Provides spiritual leadership and oversees church ministries and community outreach programs.",
      },
      {
        position: "Board Member",
        organization: "Ethiopian Evangelical Church Fellowship",
        period: "2016-2020",
        description:
          "Contributed to strategic planning and governance of the national church fellowship.",
      },
    ],
    committees: [
      "Executive Committee (Chair)",
      "Finance Committee",
      "Academic Affairs Committee",
    ],
    contributions: [
      "Led the strategic planning process for AIIS's five-year development plan",
      "Established partnerships with international theological institutions",
      "Spearheaded the digital transformation of AIIS's administrative systems",
      "Developed the institute's financial sustainability framework",
    ],
  },
  "zebene-fikre": {
    id: "zebene-fikre",
    name: "Zebene Fikre",
    role: "Board Member",
    credentials: "LLB, LLM, MDiv (in process)",
    image: "/placeholder.svg?height=600&width=600",
    email: "zebene.fikre@aiis.edu",
    phone: "+251 922 23 45 67",
    bio: "Zebene Fikre brings legal expertise to the AIIS Board of Directors. As a practicing attorney with specialization in non-profit and educational law, he provides crucial guidance on legal and regulatory matters. His ongoing theological studies reflect his commitment to integrating faith with his professional practice.",
    education: [
      {
        degree: "LLM in International Law",
        institution: "University of Pretoria, South Africa",
        year: "2014",
      },
      {
        degree: "LLB (Bachelor of Laws)",
        institution: "Addis Ababa University",
        year: "2008",
      },
      {
        degree: "MDiv (Master of Divinity)",
        institution: "AIIS",
        year: "In progress",
      },
    ],
    experience: [
      {
        position: "Senior Partner",
        organization: "Fikre & Associates Law Office",
        period: "2015-Present",
        description:
          "Leads a law practice specializing in non-profit, educational, and corporate law.",
      },
      {
        position: "Legal Advisor",
        organization: "Ethiopian Ministry of Education",
        period: "2010-2015",
        description:
          "Provided legal counsel on educational policy and regulatory frameworks.",
      },
      {
        position: "Lecturer (Part-time)",
        organization: "Addis Ababa University Law School",
        period: "2012-2018",
        description: "Taught courses on non-profit law and educational policy.",
      },
    ],
    committees: [
      "Legal Affairs Committee (Chair)",
      "Governance Committee",
      "Ethics Committee",
    ],
    contributions: [
      "Developed AIIS's legal and regulatory compliance framework",
      "Led the revision of the institute's bylaws and governance policies",
      "Established the legal framework for AIIS's international partnerships",
      "Provides ongoing legal counsel on institutional matters",
    ],
  },
  "kidist-bekele": {
    id: "kidist-bekele",
    name: "Kidist Bekele",
    role: "Board Member",
    credentials: "BA, BTh",
    image: "/placeholder.svg?height=600&width=600",
    email: "kidist.bekele@aiis.edu",
    phone: "+251 933 34 56 78",
    bio: "Kidist Bekele serves on the AIIS Board with a focus on community engagement and women's leadership development. Her background in theology and community development enables her to advocate for inclusive theological education and community-based ministry approaches. She is particularly passionate about empowering women in ministry and theological education.",
    education: [
      {
        degree: "BA in Community Development",
        institution: "Unity University",
        year: "2010",
      },
      {
        degree: "BTh (Bachelor of Theology)",
        institution: "Evangelical Theological College",
        year: "2015",
      },
    ],
    experience: [
      {
        position: "Director",
        organization:
          "Women's Ministry Development, Ethiopian Kale Heywet Church",
        period: "2016-Present",
        description:
          "Leads programs focused on women's leadership development and ministry training.",
      },
      {
        position: "Program Manager",
        organization: "Compassion International Ethiopia",
        period: "2011-2016",
        description:
          "Managed child development programs and community initiatives.",
      },
      {
        position: "Board Member",
        organization: "Ethiopian Women Theologians Network",
        period: "2017-Present",
        description:
          "Contributes to advocacy and networking for women in theological education.",
      },
    ],
    committees: [
      "Student Affairs Committee (Chair)",
      "Community Engagement Committee",
      "Curriculum Committee",
    ],
    contributions: [
      "Established AIIS's women's leadership development program",
      "Developed community engagement frameworks for theological education",
      "Created mentorship programs for female theology students",
      "Led initiatives to increase female enrollment in theological programs",
    ],
  },
};

export default function BoardMemberDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const member = boardMembers[params.id as keyof typeof boardMembers];

  if (!member) {
    return (
      <div className="container px-4 md:px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Board Member Not Found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The board member you are looking for does not exist.
        </p>
        <Button asChild className="mt-8">
          <Link href="/faculty">View All Board Members</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Board Member Background"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {member.name}
            </h1>
            <p className="text-xl text-gray-200">
              {member.role} • {member.credentials}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover"
              />
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
                      <p className="text-muted-foreground">{member.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">{member.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href={`mailto:${member.email}`}>
                      Contact {member.name.split(" ")[0]}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Committee Memberships</h3>
                <ul className="space-y-2">
                  {member.committees.map((committee, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{committee}</span>
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
              <p className="text-lg">{member.bio}</p>
            </div>

            <Tabs defaultValue="education" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="space-y-6">
                <h3 className="text-2xl font-bold">Education</h3>
                <div className="space-y-6">
                  {member.education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <h3 className="text-2xl font-bold">Professional Experience</h3>
                <div className="space-y-6">
                  {member.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{exp.position}</h4>
                        <p className="text-muted-foreground">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                        <p className="mt-2">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="contributions" className="space-y-6">
                <h3 className="text-2xl font-bold">Contributions to AIIS</h3>
                <div className="grid gap-4">
                  {member.contributions.map((contribution, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg"
                    >
                      <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-bold mb-6">
                Board Responsibilities
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold">Governance</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>Strategic planning and oversight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>Policy development and approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>Financial stewardship</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Leadership</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>Institutional vision and mission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>Community representation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>Advocacy and partnership development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Board Members Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Other Board Members
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet our other distinguished board members at AIIS.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.values(boardMembers)
              .filter((m) => m.id !== member.id)
              .map((otherMember) => (
                <Card
                  key={otherMember.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={otherMember.image || "/placeholder.svg"}
                      alt={otherMember.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 bg-white dark:bg-slate-900">
                    <h3 className="font-bold text-lg">{otherMember.name}</h3>
                    <p className="text-primary font-medium mt-1">
                      {otherMember.role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {otherMember.credentials}
                    </p>
                    <Button asChild variant="outline" className="w-full mt-4">
                      <Link href={`/board/${otherMember.id}`}>
                        View Profile
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
