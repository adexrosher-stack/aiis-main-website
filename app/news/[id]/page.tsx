import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Calendar, Share2, Bookmark } from "lucide-react"

export async function generateStaticParams() {
  return Object.keys(newsItems).map((id) => ({ id }));
}

// This would typically come from a database
const newsItems = {
  "aiis-signs-new-partnership": {
    id: "aiis-signs-new-partnership",
    title: "AIIS Signs New Partnership with Global Theological Network",
    date: "February 15, 2023",
    author: "AIIS Communications Team",
    category: "Partnerships",
    description:
      "AIIS has established a new partnership with the Global Theological Network, expanding opportunities for student exchanges and collaborative research.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>The African Institute for International Studies (AIIS) is pleased to announce a new strategic partnership with the Global Theological Network (GTN), an international consortium of theological institutions committed to advancing theological education worldwide.</p>
      
      <p>This partnership, formalized during a signing ceremony held on February 10, 2023, at the AIIS campus in Addis Ababa, marks a significant milestone in AIIS's commitment to providing high-quality, globally recognized theological education with African perspectives.</p>
      
      <h2>Expanding Opportunities</h2>
      
      <p>The partnership with GTN will create numerous opportunities for AIIS students and faculty, including:</p>
      
      <ul>
        <li><strong>Student Exchange Programs:</strong> AIIS students will have opportunities to study at partner institutions across Africa, Asia, Europe, and North America.</li>
        <li><strong>Faculty Development:</strong> Enhanced opportunities for faculty research, sabbaticals, and collaborative teaching with international colleagues.</li>
        <li><strong>Collaborative Research:</strong> Joint research initiatives addressing pressing theological and social issues from diverse global perspectives.</li>
        <li><strong>Resource Sharing:</strong> Access to expanded library resources, digital collections, and educational technologies.</li>
        <li><strong>Curriculum Development:</strong> Collaborative development of courses and programs that integrate global and contextual perspectives.</li>
      </ul>
      
      <h2>Leadership Perspectives</h2>
      
      <p>Dr. Esckinder Taddesse, Principal of AIIS, expressed enthusiasm about the partnership: "This collaboration with the Global Theological Network represents a significant step forward in our mission to provide contextually relevant theological education with global recognition. Our students and faculty will benefit immensely from the expanded opportunities for learning, research, and cross-cultural engagement."</p>
      
      <p>Dr. James Thompson, Executive Director of GTN, added: "We are delighted to welcome AIIS into our network. African theological perspectives are vital to the global theological conversation, and AIIS brings a wealth of expertise and contextual insights that will enrich our collective work. We look forward to the mutual learning and collaboration this partnership will foster."</p>
      
      <h2>Implementation Timeline</h2>
      
      <p>The partnership will be implemented in phases, with initial activities beginning in the 2023-2024 academic year:</p>
      
      <ul>
        <li><strong>Phase 1 (2023-2024):</strong> Establishment of faculty exchange programs and joint research initiatives.</li>
        <li><strong>Phase 2 (2024-2025):</strong> Launch of student exchange programs and collaborative course offerings.</li>
        <li><strong>Phase 3 (2025-2026):</strong> Development of joint degree programs and expanded digital resource sharing.</li>
      </ul>
      
      <h2>About Global Theological Network</h2>
      
      <p>The Global Theological Network (GTN) is an international consortium of over 50 theological institutions across six continents. Founded in 2010, GTN is committed to fostering collaboration, resource sharing, and mutual learning among theological institutions worldwide. The network emphasizes contextual approaches to theological education while maintaining high academic standards and global relevance.</p>
      
      <p>For more information about this partnership or to explore opportunities for involvement, please contact the AIIS International Relations Office.</p>
    `,
    tags: ["Partnership", "Global Education", "Research", "Student Exchange"],
    relatedNews: ["faculty-research-grant-awarded", "new-mth-program-launched"],
  },
  "faculty-research-grant-awarded": {
    id: "faculty-research-grant-awarded",
    title: "Faculty Research Grant Awarded",
    date: "January 30, 2023",
    author: "AIIS Research Office",
    category: "Research",
    description:
      "Dr. Esckinder Taddesse has been awarded a prestigious research grant to study contextual theology in East Africa.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>The African Institute for International Studies (AIIS) is proud to announce that Dr. Esckinder Taddesse, Principal of AIIS, has been awarded a prestigious research grant from the International Theological Research Foundation (ITRF). The grant, totaling $75,000, will fund a two-year research project titled "Contextualizing Theological Education in East Africa: Models, Challenges, and Opportunities."</p>
      
      <h2>Research Focus</h2>
      
      <p>Dr. Taddesse's research will examine how theological education in East Africa can be more effectively contextualized to address local realities while maintaining academic rigor and global relevance. The project will involve:</p>
      
      <ul>
        <li>Comprehensive analysis of current theological education models in Ethiopia, Kenya, Tanzania, and Uganda</li>
        <li>Interviews with theological educators, church leaders, and students across the region</li>
        <li>Development of contextual theological education frameworks that integrate African cultural perspectives with global theological discourse</li>
        <li>Creation of practical resources for theological institutions seeking to enhance the contextual relevance of their programs</li>
      </ul>
      
      <h2>Significance of the Research</h2>
      
      <p>"This research addresses a critical need in theological education across Africa," said Dr. Taddesse. "While we have made significant progress in developing African theological perspectives, we still face challenges in fully integrating these perspectives into our educational systems and curricula. This project aims to develop practical frameworks and resources that will help theological institutions across East Africa provide education that is both academically rigorous and contextually relevant."</p>
      
      <p>Dr. Abeba Belay, Dean of Academic Affairs at AIIS, highlighted the broader impact of the research: "Dr. Taddesse's work will not only benefit AIIS but will contribute significantly to theological education across the continent. By developing models that authentically integrate African perspectives, we can better prepare leaders who understand both global theological discourse and the specific contexts in which they will serve."</p>
      
      <h2>Research Team and Collaboration</h2>
      
      <p>Dr. Taddesse will lead a research team that includes faculty members from AIIS and partner institutions across East Africa. The project will also involve collaboration with church leaders, theological educators, and students from diverse denominational backgrounds.</p>
      
      <p>The research team includes:</p>
      <ul>
        <li>Dr. Esckinder Taddesse (Principal Investigator, AIIS)</li>
        <li>Dr. Endale Gebremeskel (AIIS)</li>
        <li>Dr. Sarah Kimani (St. Paul's University, Kenya)</li>
        <li>Dr. Emmanuel Mbennah (Tumaini University, Tanzania)</li>
        <li>Dr. Josephine Kasaija (Uganda Christian University)</li>
      </ul>
      
      <h2>About the International Theological Research Foundation</h2>
      
      <p>The International Theological Research Foundation (ITRF) is a global organization dedicated to supporting innovative theological research that addresses contemporary challenges and contributes to the development of contextual theological perspectives. The foundation provides grants to scholars and institutions engaged in research that advances theological understanding and practice in diverse cultural contexts.</p>
      
      <p>For more information about this research project or opportunities to participate, please contact the AIIS Research Office.</p>
    `,
    tags: ["Research", "Contextual Theology", "East Africa", "Grant"],
    relatedNews: ["aiis-signs-new-partnership", "new-mth-program-launched"],
  },
  "new-mth-program-launched": {
    id: "new-mth-program-launched",
    title: "New MTh Program Launched",
    date: "December 10, 2022",
    author: "AIIS Academic Affairs Office",
    category: "Academics",
    description:
      "AIIS is proud to announce the launch of a new Master of Theology program with specialization in African Christian Ethics.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>The African Institute for International Studies (AIIS) is pleased to announce the launch of a new Master of Theology (MTh) program with specialization in African Christian Ethics. This innovative program, set to begin in the Fall 2023 semester, responds to the growing need for advanced theological education that addresses ethical challenges in contemporary African contexts.</p>
      
      <h2>Program Overview</h2>
      
      <p>The MTh in African Christian Ethics is designed for students who have completed an MDiv or equivalent degree and wish to develop specialized expertise in ethical reflection from African Christian perspectives. The program combines rigorous academic study with practical engagement with ethical issues facing African communities and churches.</p>
      
      <p>Key features of the program include:</p>
      
      <ul>
        <li><strong>Contextual Focus:</strong> Courses examine ethical issues within African cultural, social, and religious contexts.</li>
        <li><strong>Interdisciplinary Approach:</strong> Integration of theological ethics with insights from African philosophy, social sciences, and cultural studies.</li>
        <li><strong>Research Emphasis:</strong> Strong focus on original research addressing contemporary ethical challenges.</li>
        <li><strong>Practical Application:</strong> Field research and community engagement components that connect theory with practice.</li>
        <li><strong>Flexible Delivery:</strong> Options for full-time and part-time study, with some courses available in hybrid format.</li>
      </ul>
      
      <h2>Curriculum</h2>
      
      <p>The MTh program requires 48 credit hours of coursework and thesis research, typically completed over two years of full-time study. The curriculum includes:</p>
      
      <ul>
        <li>Core courses in theological ethics and African Christian thought</li>
        <li>Specialized courses addressing specific ethical issues in African contexts</li>
        <li>Research methodology courses</li>
        <li>Electives from related disciplines</li>
        <li>Thesis research and writing</li>
      </ul>
      
      <p>Specific courses include:</p>
      
      <ul>
        <li>Foundations of African Christian Ethics</li>
        <li>African Moral Traditions and Christian Ethics</li>
        <li>Ethics of Community and Ubuntu</li>
        <li>Environmental Ethics in African Contexts</li>
        <li>Ethics of Development and Economic Justice</li>
        <li>Gender, Family, and Sexual Ethics</li>
        <li>Political Ethics and Leadership</li>
        <li>Health Care Ethics in African Contexts</li>
        <li>Research Methods in Theological Ethics</li>
      </ul>
      
      <h2>Faculty</h2>
      
      <p>The program will be led by a team of distinguished faculty with expertise in theological ethics, African philosophy, and contextual theology:</p>
      
      <ul>
        <li>Dr. Abeba Belay (Program Coordinator)</li>
        <li>Dr. Esckinder Taddesse</li>
        <li>Dr. Lidetu Alemu</li>
        <li>Dr. Wendaferahu Adenew</li>
        <li>Visiting faculty from partner institutions</li>
      </ul>
      
      <h2>Career Opportunities</h2>
      
      <p>Graduates of the MTh in African Christian Ethics will be prepared for:</p>
      
      <ul>
        <li>Teaching positions in theological institutions</li>
        <li>Leadership roles in church ethics committees and commissions</li>
        <li>Positions in faith-based organizations addressing social and ethical issues</li>
        <li>Doctoral studies in theological ethics or related fields</li>
        <li>Consulting roles in ethics for organizations and institutions</li>
      </ul>
      
      <h2>Admission Requirements</h2>
      
      <p>Applicants to the program must have:</p>
      
      <ul>
        <li>MDiv degree or equivalent from an accredited institution</li>
        <li>Minimum GPA of 3.3 on a 4.0 scale</li>
        <li>Demonstrated interest and background in theological ethics</li>
        <li>Three letters of recommendation</li>
        <li>Writing sample demonstrating research and analytical abilities</li>
        <li>Statement of purpose outlining research interests and career goals</li>
      </ul>
      
      <p>Applications for the Fall 2023 cohort are now being accepted, with a priority deadline of April 30, 2023.</p>
      
      <p>For more information about the MTh in African Christian Ethics or to request an application package, please contact the AIIS Admissions Office or visit our website.</p>
    `,
    tags: ["Academics", "Ethics", "MTh Program", "African Christianity"],
    relatedNews: ["aiis-signs-new-partnership", "faculty-research-grant-awarded"],
  },
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = newsItems[params.id as keyof typeof newsItems]

  if (!news) {
    return (
      <div className="container px-4 md:px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight">News Article Not Found</h1>
        <p className="mt-4 text-muted-foreground">The news article you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/events">View All News</Link>
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
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm mb-2">
              <span>{news.category}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{news.title}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
              <span className="mx-2">•</span>
              <span>{news.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                <Link href="/events" className="flex items-center gap-1 hover:text-primary">
                  <ChevronLeft className="h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: news.content }} />
            </div>

            <div className="pt-8 border-t">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/events?tag=${encodeURIComponent(tag.toLowerCase())}`}
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t">
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Article
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                Save for Later
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Related News</h3>

                <div className="space-y-6">
                  {news.relatedNews.map((relatedNewsId) => {
                    const relatedNews = newsItems[relatedNewsId as keyof typeof newsItems]
                    return (
                      <div key={relatedNews.id} className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
                          <Image
                            src={relatedNews.image || "/placeholder.svg"}
                            alt={relatedNews.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold line-clamp-2">
                            <Link href={`/news/${relatedNews.id}`} className="hover:text-primary">
                              {relatedNews.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">{relatedNews.date}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/events?category=academics"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Academics</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">12</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events?category=research"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Research</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">8</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events?category=partnerships"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Partnerships</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">5</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events?category=events"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Events</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">15</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events?category=student-life"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Student Life</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">7</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
                <p>Stay updated with the latest news and events from AIIS.</p>
                <form className="space-y-4">
                  <input type="email" placeholder="Your email address" className="w-full p-2 rounded-md text-black" />
                  <Button className="w-full bg-white text-primary hover:bg-white/90">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

