"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, Calendar, BookOpen, ArrowRight } from "lucide-react";

export default function AcademicsPage() {
  // Program data from course-filter.tsx
  const programs = [
    {
      id: "diploma-in-theology",
      title: "Diploma in Theology (DipTh)",
      level: "undergraduate",
      format: "residential",
      duration: "2 years",
      credits: 60,
      campus: "Addis Ababa",
      description: "The Diploma in Theology program offers essential theological training for those seeking to serve in ministry without completing a full bachelor's degree.",
      features: [
        "Foundational theological education for ministry and advanced studies.",
        "Offered in both Amharic and English for accessibility",
        "Prepares students for diverse roles in religious and community settings.",
      ]
    },
    {
      id: "bachelor-of-theology",
      title: "Bachelor of Theology (BTh)",
      level: "undergraduate",
      format: "residential",
      duration: "4 years",
      credits: 120,
      description: "The Bachelor of Theology program provides students with a solid foundation in biblical studies, theology, church history, and practical ministry skills.",

    },
    {
      id: "master-of-divinity",
      title: "Master of Divinity (MDiv)",
      level: "graduate",
      format: "residential",
      duration: "3 years",
      credits: 90,
      description: "A comprehensive, three-year residential program designed to prepare students for pastoral ministry, theological teaching, and leadership roles.",
      features: [
        "Integrates rigorous academic study, spiritual formation, and practical ministry",
        "Prepares for pastoral leadership in diverse contexts.",
        "Foundations for doctoral studies in theology.",
      ]
    },
    {
      id: "master-of-theology",
      title: "Master of Theology (MTh)",
      level: "graduate",
      format: "hybrid",
      duration: "2 years",
      credits: 48,
      description: "An advanced academic program designed to equip students with theological depth, critical research skills, and practical ministry applications.",
      features: [
        "Candidates must complete specialization seminars in one of the following areas: Systematic Theology, Biblical Studies, or Practical Theology.",
        "Each candidate is required to attend a minimum of seven seminar sessions, aligned with their chosen area of specialization. Alternatively, candidates may produce a research output of at least 20,000 words based on an approved prospectus.",
        "Foundations for doctoral studies in theology.",
      ]
    },
    {
      id: "mth-in-practical-studies",
      title: "Master of Theology in Practical Studies (MTh-PS)",
      level: "graduate",
      format: "hybrid",
      duration: "2 years",
      credits: 48,
      description: "Designed to equip students with practical ministry skills, leadership competence, and interdisciplinary knowledge.",
      features: [
        "Emphasizes practical ministry skills through hands-on practicum and fieldwork experiences.",
        "Offers flexible completion paths: 42 credit hours of coursework, 4 credit hours of practicum, and 2 credit hours of fieldwork, or a 20,000-word thesis crafted under expert supervision.",
        "Foundations for doctoral studies in theology.",
      ]
    },
    {
      id: "ma-in-counseling-psychology",
      title: "MA in Counseling Psychology",
      level: "graduate",
      format: "residential",
      duration: "2 years",
      credits: 48,
      description: "Specialized program for counseling and pastoral care, integrating psychological principles with Christian counseling.",
      features: [
        "Integrates psychological principles with Christian counseling.",
        "Equips students with practical skills for therapy, crisis intervention, and pastoral care.",
        "Prepares graduates for clinical and community-based counseling roles.",
        "Includes a practicum component for hands-on experience."
      ]
    },
    {
      id: "ma-in-organizational-leadership",
      title: "MA in Organizational Leadership",
      level: "graduate",
      format: "residential",
      duration: "2 years",
      credits: 35,
      description: "Leadership-focused program for professionals in church leadership, business, and nonprofit management.",
      features: [
        "Focuses on cross-cultural leadership, ethical decision-making, and change management.",
        "Prepares students for leadership roles in businesses, churches, and NGOs.",
        "Strategic planning and implementation",
        "Offers flexibility for working professionals."
      ]
    },
    {
      id: "ma-in-developemt-studies",
      title: "MA in Developemt and Theological Studies",
      level: "graduate",
      format: "residential",
      duration: "2 years",
      credits: 35,
      description: "Interdisciplinary program blending theology and development studies to address global challenges with faith-based solutions.",
      features: [
        "Combines core development studies (covering social, political, and economic theories, plus themes like sustainable development and governance) with theological perspectives, fostering a holistic understanding of global issues.",
        "Prepares students for leadership roles in businesses, churches, and NGOs.",
        "Strategic planning and implementation",
        "Offers flexibility for working professionals."
      ]
    },
    {
      id: "doctor-of-philosophy",
      title: "Doctor of Philosophy (PhD)",
      level: "doctoral",
      format: "residential",
      duration: "4-5 years",
      credits: 60,
      description: "Our premier doctoral program focusing on advanced research and scholarship in theology and related disciplines.",
      features: [
        "Embarks students on a transformative research path through a compassionate, four-phase dissertation process, nurturing original contributions to theology, biblical studies, liberal arts, or ministerial leadership.",
        "Provides diverse research focus areas, including Theology & Biblical Studies, Liberal Arts & Ethics, and Ministerial Leadership & Interdisciplinary Studies",
        "Offers supervision by highly qualified faculty and external examiners, ensuring academic rigor and international recognition by accredited institutions.",
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/Faculity.jpg"
            alt="Academics"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Academic Programs</h1>
            <p className="text-xl text-gray-200">
              Discover our comprehensive range of theological education programs designed to equip you for impactful ministry and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Programs</h2>
          <p className="text-lg text-muted-foreground">
            AIIS offers a variety of academic programs to meet the diverse needs of students at different stages of their educational journey.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-5 w-full max-w-3xl">
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="doctoral">Doctoral</TabsTrigger>
              <TabsTrigger value="certificate">Certificates</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <Link href={`/programs/${program.id}`} key={program.id} className="block h-full">
                  <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:translate-y-[-5px] cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <Badge variant="outline" className="capitalize">
                          {program.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <GraduationCap className="h-4 w-4" />
                        <span>{program.credits} Credits</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="undergraduate" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs
                .filter((program) => program.level === "undergraduate")
                .map((program) => (
                  <Link href={`/programs/${program.id}`} key={program.id} className="block h-full">
                    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:translate-y-[-5px] cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <Badge variant="outline" className="capitalize">
                            {program.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground">{program.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span>{program.credits} Credits</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="graduate" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs
                .filter((program) => program.level === "graduate")
                .map((program) => (
                  <Link href={`/programs/${program.id}`} key={program.id} className="block h-full">
                    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:translate-y-[-5px] cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <Badge variant="outline" className="capitalize">
                            {program.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground">{program.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span>{program.credits} Credits</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="doctoral" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs
                .filter((program) => program.level === "doctoral")
                .map((program) => (
                  <Link href={`/programs/${program.id}`} key={program.id} className="block h-full">
                    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:translate-y-[-5px] cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <Badge variant="outline" className="capitalize">
                            {program.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground">{program.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span>{program.credits} Credits</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="certificate" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs
                .filter((program) => program.level === "certificate")
                .map((program) => (
                  <Link href={`/programs/${program.id}`} key={program.id} className="block h-full">
                    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:translate-y-[-5px] cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <Badge variant="outline" className="capitalize">
                            {program.level}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-muted-foreground">{program.description}</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4" />
                          <span>{program.credits} Credits</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Academic Approach Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Academic Approach</h2>
                <div className="w-20 h-1 bg-primary mt-4"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                At AIIS, we believe in an integrated approach to theological education that combines academic rigor with practical application and spiritual formation.
              </p>
              <p className="text-lg text-muted-foreground">
                Our programs are designed to be contextually relevant, addressing the unique challenges and opportunities of ministry in the African context while maintaining global theological perspectives.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Academic Excellence</h3>
                    <p className="text-muted-foreground">Rigorous scholarship that meets international standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Contextual Relevance</h3>
                    <p className="text-muted-foreground">Education that addresses African realities and perspectives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image src="/images/programs/about-hero.jpeg" alt="Academic Approach" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  