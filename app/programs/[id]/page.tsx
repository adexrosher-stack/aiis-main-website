import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, GraduationCap, BookOpen, Users, Calendar, MapPin } from "lucide-react";
import { BackToProgramsButton } from "@/components/back-to-programs-button";

// This would typically come from a database
export async function generateStaticParams() {
  return Object.keys(programs).map((id) => ({ id }));
}

const programs = {
  "bachelor-of-theology": {
    id: "bachelor-of-theology",
    title: "Bachelor of Theology (BTh)",
    level: "undergraduate",
    format: "residential",
    duration: "4 years",
    credits: 120,
    campuses: "Addis Ababa, Adama, Mekelle",
    image: "/images/programs/Bachelor.jpeg",
    description:
      "The Bachelor of Theology program provides students with a solid foundation in biblical studies, theology, church history, and practical ministry skills. This comprehensive program prepares graduates for various ministry roles or further academic study.",
    overview:
      "The Bachelor of Theology (BTh) is designed to provide students with a comprehensive understanding of biblical texts, theological concepts, church history, and practical ministry skills. This program combines academic rigor with practical application to prepare graduates for effective ministry in various contexts.",
    features: [
      "Foundational theological education for ministry and advanced studies.",
      "Offered in both Amharic and English for accessibility",
      "Prepares students for diverse roles in religious and community settings.",
    ],
    curriculum: [
      {
        courses: [
          "Introduction to Biblical Studies",
          "Old Testament Survey",
          "New Testament Survey",
          "Church History I",
          "Theological Foundations",
          "Academic Writing and Research",
          "Ministry Formation I",
          "Biblical Hermeneutics",
          "Systematic Theology I",
          "Church History II",
          "Introduction to Pastoral Ministry",
          "Biblical Languages (Hebrew/Greek)",
          "World Religions",
          "Ministry Formation II",
          "Systematic Theology II",
          "Biblical Exegesis",
          "Christian Ethics",
          "Homiletics",
          "Missiology",
          "Pastoral Counseling",
          "Ministry Formation III",
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
    faculty: [],
  },
  "master-of-divinity": {
    id: "master-of-divinity",
    title: "Master of Divinity (MDiv)",
    level: "graduate",
    format: "residential",
    duration: "3 years",
    credits: 90,
    campuses: "Addis Ababa",
    image: "/images/programs/Deiv.jpeg",
    description:
      "A comprehensive, three-year residential program designed to prepare students for pastoral ministry, theological teaching, and leadership roles in various contexts.",
    overview:
      "The Master of Divinity (MDiv) is our premier graduate program designed to prepare students for ordained ministry, pastoral leadership, and advanced theological study. This program provides comprehensive training in biblical studies, theology, church history, and practical ministry skills with a focus on contextual application in African settings.",
    features: [
      "Integrates rigorous academic study, spiritual formation, and practical ministry",
      "Prepares for pastoral leadership in diverse contexts.",
      "Foundations for doctoral studies in theology.",
    ],
    curriculum: [
      {
        courses: [
          "Advanced Biblical Interpretation",
          "Old Testament Theology",
          "New Testament Theology",
          "Church History and African Christianity",
          "Systematic Theology I",
          "Biblical Languages I",
          "Pastoral Ministry Foundations",
          "Biblical Exegesis",
          "Systematic Theology II",
          "Christian Ethics",
          "Preaching and Worship",
          "Missiology and Contextualization",
          "Biblical Languages II",
          "Pastoral Counseling",
          "Field Education I",
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
    faculty: [],
  },
  "master-of-theology": {
    id: "master-of-theology",
    title: "Master of Theology (MTh)",
    level: "graduate",
    format: "hybrid",
    duration: "2 years",
    credits: 48,
    campuses: "Addis Ababa",
    image: "/images/programs/MTh.jpeg",
    description:
      "An advanced academic program designed to equip students with theological depth, critical research skills, and practical ministry applications.",
    overview:
      "The Master of Theology (MTh) is an advanced academic degree designed for those who have completed an MDiv or equivalent and wish to pursue specialized study and research in a particular theological discipline. This program prepares students for academic teaching, advanced ministry positions, or doctoral studies.",
    features: [
      "Candidates must complete specialization seminars in one of the following areas: Systematic Theology, Biblical Studies, or Practical Theology.",
      "Each candidate is required to attend a minimum of seven seminar sessions, aligned with their chosen area of specialization. Alternatively, candidates may produce a research output of at least 20,000 words based on an approved prospectus.",
      "Foundations for doctoral studies in theology.",
    ],
    curriculum: [
      {
        courses: [
          "Guided Reading and Research in Biblical Foundations Area",
          "Guided Reading and Research in Biblical Studies Area (OT, NT)",
          "Guided Reading and Research in Theology Area",
          "Guided Reading in Historical Systematic Theology Area",
          "Research in Interpretation and Religious Language Games",
          "Guided Reading and Research in Practical Theology Area",
        ],
        programRequirements: [
          "Candidates must complete specialization seminars in one of the following areas: Systematic Theology, Biblical Studies, or Practical Theology.",
          "Each candidate is required to attend a minimum of seven seminar sessions, aligned with their chosen area of specialization. Alternatively, candidates may produce a research output of at least 20,000 words based on an approved prospectus.",
          "Candidates will receive assigned books from the seminar professor(s) relevant to their specialization. They are expected to submit a summary report for each book, focusing on its relevance to the specific area of study.",
          "Summary reports must be submitted to the professor(s) and all seminar participants at least 48 hours prior to the seminar date. During the seminar, all Master of Theology (MTh) students, along with the professor(s), will engage in a dialogue where candidates are expected to present and defend their reports.",
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
    faculty: [],
  },
  "diploma-in-theology": {
    id: "diploma-in-theology",
    title: "Diploma in Theology (DipTh)",
    level: "undergraduate",
    format: "residential",
    duration: "2 years",
    credits: 60,
    campuses: "Addis Ababa, Adama, Mekelle",
    image: "/images/programs/diplom.jpeg",
    description:
      "The Diploma in Theology program provides students with foundational knowledge in biblical studies, theology, and practical ministry skills, preparing them for effective service in church and community contexts.",
    overview:
      "The Diploma in Theology (DipTh) is designed for individuals seeking theological education without pursuing a full bachelor's degree. This program offers a solid foundation in biblical studies, theology, and practical ministry skills, equipping students for various ministry roles within churches and communities.",
    features: [
      "Foundational theological education for ministry and advanced studies.",
      "Offered in both Amharic and English for accessibility",
      "Prepares students for diverse roles in religious and community settings.",
    ],
    curriculum: [
      {
        courses: [
          "Introduction to Biblical Studies",
          "Old Testament Survey",
          "New Testament Survey",
          "Introduction to Theology",
          "Church History Overview",
          "Foundations of Ministry",
          "Biblical Interpretation",
          "Christian Ethics",
          "Evangelism and Discipleship",
          "Pastoral Care Basics",
          "Homiletics",
          "Ministry Practicum",
        ],
      },
    ],
    admissionRequirements: [
      "High school diploma or equivalent",
      "Completed application form",
      "Official transcripts from previous institutions",
      "One letter of recommendation from a pastor/church leader",
      "Personal statement of faith and ministry goals (300 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "Church Ministry Assistant",
      "Youth Ministry Worker",
      "Sunday School Coordinator",
      "Evangelism Team Member",
      "Church Administrator",
      "Mission Field Worker",
      "Community Outreach Coordinator",
    ],
    faculty: [],
  },
  "ma-in-organizational-leadership": {
    id: "ma-in-organizational-leadership",
    title: "MA in Organizational Leadership",
    level: "graduate",
    format: "residential",
    duration: "2 years",
    credits: 35,
    campuses: "Addis Ababa",
    image: "/images/programs/organization.jpeg",
    description:
      "Leadership-focused program for professionals in church leadership, business, and nonprofit management.",
    overview:
      "The Master of Arts in Organizational Leadership (MAOL) at AIIS is a leadership-focused program designed to equip professionals with advanced leadership, management, and strategic decision-making skills. This program is ideal for individuals in church leadership, business, and nonprofit management who seek to integrate Christian ethics with effective leadership practices.",
    features: [
      "Focuses on cross-cultural leadership, ethical decision-making, and change management.",
      "Prepares students for leadership roles in businesses, churches, and NGOs.",
      "Strategic planning and implementation",
      "Offers flexibility for working professionals.",
    ],
    curriculum: [
      {
        courses: [
          "Organizational Behavior and Communication",
          "Leadership Ethics and Corporate Social Responsibility",
          "Leadership in Global Contexts",
          "Human Resource Management.",
          "Research Methods in Leadership",
          "Leading Change and Innovation",
          "Strategic Leadership and Management",
          "Project Management Leadership",
          "Thesis in Organizational Leadership",
        ],
      },
    ],
    admissionRequirements: [
      "A Bachelor’s degree in Psychology, Counseling, Theology, or a related field.",
      "Completed application form",
      "Official transcripts from previous institutions",
      "One letter of recommendation from a pastor/church leader",
      "Personal statement of faith and ministry goals (300 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "Pastoral Counseling",
      "Christian Counseling",
      "Community Work",
      "Teaching and Training",
      "Marriage and Family Therapist",
      "Chaplaincy",
      "Addiction Counselor",
    ],
    faculty: [],
  },
  "ma-in-development-studies": {
    id: "ma-in-development-studies",
    title: "MA in Development and Theological Studies",
    level: "graduate",
    format: "residential",
    duration: "2 years",
    credits: 35,
    campuses: "Addis Ababa",
    image: "/images/programs/Development.jpeg",
    description:
      "Interdisciplinary program blending theology and development studies to address global challenges with faith-based solutions.",
    overview:
      "The MADTS at AIIS offers a dynamic blend of theological and development studies, equipping students with skills to address social, economic, and political challenges through a faith-informed perspective. It fosters expertise in sustainable development, governance, and cultural sensitivity, preparing graduates for impactful roles in international development, theological education, and community leadership.",
    features: [
      "Combines core development studies (covering social, political, and economic theories, plus themes like sustainable development and governance) with theological perspectives, fostering a holistic understanding of global issues.",
      "Prepares students for leadership roles in businesses, churches, and NGOs.",
      "Strategic planning and implementation",
      "Offers flexibility for working professionals.",
    ],
    curriculum: [
      {
        courses: [
          "Economics",
          "Safety in Fieldwork Workshop",
          "Anthropology:",
          "History & Politics",
          "Research Methods",
          "Project Leadership Management",
          "Organizational Leadership",
          "Business Management",
        ],
      },
    ],
    admissionRequirements: [
      "A Bachelor’s degree in Psychology, Counseling, Theology, or a related field.",
      "Completed application form",
      "Official transcripts from previous institutions",
      "One letter of recommendation from a pastor/church leader",
      "Personal statement of faith and ministry goals (300 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "International Development Specialist",
      "Policy Analyst (Faith-Based Organizations)",
      "Community Development Coordinator",
      "Missionary or Cross-Cultural Worker",
      "Researcher and Theological Educator",
      "Advocacy Specialist",
    ],
    faculty: [],
  },
  "mth-in-practical-studies": {
    id: "mth-in-practical-studies",
    title: "Master of Theology in Practical Studies (MTh-PS)",
    level: "graduate",
    format: "hybrid",
    duration: "2 years",
    credits: 48,
    campuses: "Addis Ababa",
    image: "/images/programs/MTh-PS.jpg",
    description:
      "Advanced theological education focused on practical ministry applications and leadership development.",
    overview:
      "The Master of Theology in Practical Studies is an advanced theological program designed to equip students with practical ministry skills, leadership competence, and interdisciplinary knowledge. This program focuses on real-world applications of theology in areas such as leadership, ethics, counseling, and mission work.",
    features: [
      "Emphasizes practical ministry skills through hands-on practicum and fieldwork experiences.",
      "Offers flexible completion paths: 42 credit hours of coursework, 4 credit hours of practicum, and 2 credit hours of fieldwork, or a 20,000-word thesis crafted under expert supervision.",
      "Foundations for doctoral studies in theology.",
    ],
    curriculum: [
      {
        courses: [
          "Cross Cultural Competence",
          "Brief History of Biblical Mission",
          "Understanding World Religions",
          "Cross Cultural Communication",
          "Philosophical Ethics",
          "Communication Theories",
          "Management Theory and Business Admin",
          "Ethical Challenges in Leadership",
          "Conflict Management",
          "Strategic Leadership",
          "Hermeneutics Across-the-board",
          "Ministerial Ethics",
          "Developing Leaders",
          "Leadership Theories",
          "Research Methodology",
          "Ministry Praxis",
          "Dissertation/Project",
        ],
      },
    ],
    admissionRequirements: [
      "A relevant Master's degree or equivalent theological background.",
      "Completed application form",
      "Official transcripts from previous institutions",
      "One letter of recommendation from a pastor/church leader",
      "Personal statement of faith and ministry goals (300 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "Pastor/Minister",
      "Chaplain",
      "Youth or Family Minister",
      "Academic Researcher",
      "Church Administrator",
      "Missionary",
      "Community Outreach Coordinator",
    ],
    faculty: [],
  },
  "doctor-of-philosophy": {
    id: "doctor-of-philosophy",
    title: "Doctor of Philosophy (PhD)",
    level: "graduate",
    format: "hybrid",
    duration: "3 years",
    credits: 48,
    campuses: "Addis Ababa",
    image: "/images/programs/PhD.jpeg",
    description:
      "Our premier doctoral program focusing on advanced research and scholarship in theology and related disciplines.",
    overview:
      "The Doctor of Philosophy (PhD) in Theology, Biblical Studies, and Liberal Arts at AIIS is a rigorous research-focused doctoral program designed for those seeking to contribute to theological scholarship, academic leadership, and ministry innovation.",
    features: [
      "Embarks students on a transformative research path through a compassionate, four-phase dissertation process, nurturing original contributions to theology, biblical studies, liberal arts, or ministerial leadership.",
      "Provides diverse research focus areas, including Theology & Biblical Studies, Liberal Arts & Ethics, and Ministerial Leadership & Interdisciplinary Studies",
      "Offers supervision by highly qualified faculty and external examiners, ensuring academic rigor and international recognition by accredited institutions.",
    ],
    curriculum: [
      {
        courses: [
          "Research in Theology and Biblical Studies",
          "Research in Liberal Arts and Ethics",
          "Research in Ministerial Leadership and Interdisciplinary Studies",
        ],
      },
    ],
    admissionRequirements: [
      "A relevant Master's degree or equivalent theological background.",
      "Completed application form",
      "Official transcripts from previous institutions",
      "One letter of recommendation from a pastor/church leader",
      "Personal statement of faith and ministry goals (300 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "Pastor/Minister",
      "Chaplain",
      "Youth or Family Minister",
      "Academic Researcher",
      "Church Administrator",
      "Missionary",
      "Community Outreach Coordinator",
    ],
    faculty: [],
  },
  "ma-in-counseling-psychology": {
    id: "ma-in-counseling-psychology",
    title: "MA in Counseling Psychology",
    level: "graduate",
    format: "residential",
    duration: "2 years",
    credits: 48,
    campuses: "Addis Ababa",
    image: "/images/programs/Council.jpeg",
    description:
      "Specialized program for counseling and pastoral care, integrating psychological principles with Christian counseling.",
    overview:
      "The Master of Arts in Counseling Psychology is an advanced program designed to equip students with practical counseling skills, psychological knowledge, and Christian principles. This program focuses on real-world applications in therapy, crisis intervention, and pastoral care.",
    features: [
      "Integrates psychological principles with Christian counseling.",
      "Equips students with practical skills for therapy, crisis intervention, and pastoral care.",
      "Prepares graduates for clinical and community-based counseling roles.",
      "Includes a practicum component for hands-on experience.",
    ],
    curriculum: [
      {
        courses: [
          "Research Methodology",
          "Advanced Counseling Theories Techniques & Skills",
          "Measurement and Statistics in Psychology",
          "Ethical and Multicultural Practice of Counseling with Pastoral Counseling",
          "Advanced Psychopathology",
          "Advanced Marriage and Family Counseling",
          "Advanced School and Career Counseling",
          "Assessment and Diagnosis in Counseling Psychology",
          "Practice in Counseling Psychology",
          "Interpretative Theories and Practices",
          "Stories of the Ancient Near East Texts",
          "Apologetics",
          "World Religions",
          "Philosophical Ethics",
        ],
      },
    ],
    admissionRequirements: [
      "A Bachelor’s degree in Psychology, Counseling, Theology, or a related field.",
      "Completed application form",
      "Official transcripts from previous institutions",
      "One letter of recommendation from a pastor/church leader",
      "Personal statement of faith and ministry goals (300 words)",
      "Application fee",
    ],
    careerOpportunities: [
      "Pastoral Counseling",
      "Christian Counseling",
      "Community Work",
      "Teaching and Training",
      "Marriage and Family Therapist",
      "Chaplaincy",
      "Addiction Counselor",
    ],
    faculty: [],
  },
};


type PageProps = {
  params: Promise<{ id: string }>;
};


export default async function ProgramDetailPage({ params }: PageProps) {
  // Await the params to resolve the Promise
  const { id } = await params;
  const program = programs[id as keyof typeof programs];

  if (!program) {
    return (
      <div className="container px-4 md:px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight">Program Not Found</h1>
        <p className="mt-4 text-muted-foreground">The program you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/academics">View All Programs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Add the BackToProgramsButton at the top of your component */}
      <BackToProgramsButton />
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
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Program Features</h2>
              <ul className="mt-2 space-y-2 pl-4">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-lg">
                    <svg
                      className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
                  {program.curriculum.map((item, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-xl font-semibold">Program Courses</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {item.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start gap-2">
                            <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                      {item.programRequirements && (
                        <div className="space-y-2">
                          <h5 className="text-lg font-semibold">Program Requirements</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            {item.programRequirements.map((req, reqIndex) => (
                              <li key={reqIndex}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                  {Array.isArray((program as any).specializations) && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold">Specializations</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {(program as any).specializations.map((specialization: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{specialization}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
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
                  {program.faculty.length > 0 ? (
                    program.faculty.map((faculty, index) => (
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
                    ))
                  ) : (
                    <p className="text-muted-foreground">Faculty information coming soon.</p>
                  )}
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
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Campuses</h4>
                      <p className="text-muted-foreground capitalize">{program.campuses}</p>
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
                  className="border-white text-white hover:bg-white/90 hover:text-primary rounded-md"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/images/programs/Leadership.jpg"
                alt="Students at AIIS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}