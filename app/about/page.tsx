
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Users, Award, BookOpen, GraduationCap, Building, MapPin } from "lucide-react"
import { Lightbulb, UserCheck, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/about-hero.jpeg"
            alt="About AIIS"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About AIIS</h1>
            <p className="text-xl text-gray-200">
              Discover our mission, vision, and commitment to theological education in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <Tabs defaultValue="mission" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-4xl grid-cols-3">
              <TabsTrigger value="mission" className="text-lg py-3">
                Who are we?
              </TabsTrigger>
              <TabsTrigger value="approach" className="text-lg py-3">
                Our Approach
              </TabsTrigger>
              <TabsTrigger value="accreditation" className="text-lg py-3">
                Accreditation
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Mission & Vision Tab */}
          <TabsContent value="mission" className="space-y-12">
            {/* About Brief Section - Moved inside Mission tab */}
            <section className="w-full py-16 bg-slate-50 dark:bg-slate-900">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-10 lg:grid-cols-2 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image src="/images/programs/logo 2.jpg" alt="AIIS Campus" fill className="object-contain" />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight">About AIIS</h2>
                      <div className="w-20 h-1 bg-primary mt-4"></div>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      AIIS exists for high-quality learning, educational availability, and transformative education with
                      contextual relevance. We are committed to providing education in different levels through variety of
                      programs adaptable to the diverse needs of students.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Our programs integrate universally valid academic knowledge with African cultural perspectives, creating
                      a unique educational model that is community-oriented and beyond traditional scholastic methods.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      AIIS operates across three campuses located in Addis Ababa, Adama, and Mekelle, making our programs more accessible to a wider community. 
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                  <div className="w-20 h-1 bg-primary mt-4"></div>
                </div>
                <p className="text-lg text-muted-foreground">
                  AIIS exists for high-quality learning, educational availability, and transformative education with
                  contextual relevance. We are committed to providing education at different levels through a variety of
                  programs adaptable to the diverse needs of students.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our programs integrate universally valid academic knowledge with African cultural perspectives, creating
                  a unique educational model that is community-oriented and beyond traditional scholastic methods.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
                <Image src="/images/programs/Vision.jpeg" alt="AIIS Mission" fill className="object-cover" />
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl order-last lg:order-first">
                <Image src="/images/programs/Mission.jpeg" alt="AIIS Vision" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
                  <div className="w-20 h-1 bg-primary mt-4"></div>
                </div>
                <p className="text-lg text-muted-foreground">
                  To be a premier theological institution in Africa, recognized for academic excellence, contextual
                  relevance, and transformative impact on communities.
                </p>
                <p className="text-lg text-muted-foreground">
                  We envision graduates who are equipped to address the unique challenges and opportunities of African
                  contexts through theological reflection, leadership, and service.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-10 mt-8">
              <div className="text-center space-y-4 mb-10">
                <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
                <div className="w-20 h-1 bg-primary mt-4"></div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Skill</h3>
                      <p className="text-muted-foreground">
                        We are committed to developing practical skills and competencies that enable effective ministry and leadership.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserCheck className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Model</h3>
                      <p className="text-muted-foreground">
                        We strive to exemplify the values and principles we teach, serving as models of integrity and excellence.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Servanthood</h3>
                      <p className="text-muted-foreground">
                        We embrace a spirit of service, putting the needs of others before our own and leading through humble service.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col space-y-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Globe className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Mission</h3>
                      <p className="text-muted-foreground">
                        We are dedicated to our mission of transforming lives through contextual theological education and community engagement.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Our Campuses Section */}
            <section id="campuses" className="w-full py-16 bg-slate-50 dark:bg-slate-900 rounded-xl">
              <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center space-y-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tight"> Our Campuses</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    AIIS currently operates three campuses in different regions of Ethiopia, strategically positioned to 
                    address and serve a broad community across the country.
                  </p>
                  <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/programs/Addis.jpg"
                        alt="Addis Ababa Campus"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Addis Ababa Campus</h3>
                      <p className="text-muted-foreground mb-4">
                        Located in the capital city of Ethiopia, our main campus offers 
                        the full range of programs and serves as the administrative headquarters.
                      </p>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Addis Ababa, Ethiopia</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/programs/Adama.jpg"
                        alt="Adama Campus"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Adama Campus</h3>
                      <p className="text-muted-foreground mb-4">
                        Situated in the Oromia Regional State, our Adama campus provides 
                        theological education with a focus on contextual relevance to the region.
                      </p>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Adama, Oromia Regional State</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src="/images/programs/mekellee.jpg"
                        alt="Mekelle Campus"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Mekelle Campus</h3>
                      <p className="text-muted-foreground mb-4">
                        Located in the Tigray Regional State, our Mekelle campus extends our 
                        educational mission to the northern region of Ethiopia.
                      </p>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Mekelle, Tigray Regional State</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Director's Message Section */}
            <section id="director-message" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-center">
                  The Principal's Message
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <div className="relative h-full min-h-[300px] md:min-h-full">
                        <Image
                          src="/images/programs/The Director.jpeg"
                          alt="AIIS Principal"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8 md:p-10 bg-slate-50 dark:bg-slate-900">
                      <div className="space-y-6">
                        <svg
                          className="h-10 w-10 text-primary opacity-20"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-lg italic">
                          Have you been looking for a place to expand your knowledge of Theology and Arts? AIIS specializes in contextualization, rooted in African theological frameworks. We offer accredited degrees at the Bachelor's and Master's levels, focusing on both quality and flexibility to ensure that you receive the best education in a way that suits you.
                        </p>
                        <p className="text-lg italic">
                          AIIS is accredited by Faith Theological Seminary (Nagaland, India) and collaborates with the African Network of Theological Schools (ANTS), which operates in West, Central, South, and East Africa. Our commitment is to provide theological education that is academically sound, contextually relevant, and widely accessible.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image
                              src="/images/programs/The Director.jpeg"
                              alt="AIIS Director Portrait"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">
                              Dr. Esckinder Taddesse
                            </h4>
                            <p className="text-muted-foreground">
                              Principal, AIIS
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            
            {/* Academic Dean Section */}
            <section id="academic-dean" className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-center">
                  Academic Leadership
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-4xl">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src="/images/programs/Ins. Eyob.jpg"
                      alt="Academic Dean"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-lg mt-2">
                     Ins. Eyob Mulatu
                    </h4>
                    <p className="text-muted-foreground">
                      Academic Dean, AIIS
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Approach Tab */}
          <TabsContent value="approach" id="approach" className="space-y-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight">Our Educational Approach</h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                AIIS employs a unique educational model that integrates academic rigor with contextual relevance,
                preparing students for effective ministry and leadership in African contexts.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">Contextual Theology</h3>
                  <p className="text-lg text-muted-foreground">
                    Our curriculum is designed to engage with African realities, addressing theological questions
                    from perspectives that are relevant to local contexts while maintaining global academic standards.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Integration of African cultural perspectives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Addressing contemporary African challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Dialogue between global and local theological traditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">Holistic Formation</h3>
                  <p className="text-lg text-muted-foreground">
                    We believe in education that transforms the whole person—intellectually, spiritually, and
                    professionally—preparing graduates for multifaceted leadership roles.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Spiritual formation and character development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Practical ministry skills and field experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Leadership and community engagement training</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">Community-Oriented Learning</h3>
                  <p className="text-lg text-muted-foreground">
                    Our educational model extends beyond traditional classroom grabbing to engage with communities,
                    creating opportunities for applied learning and service.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Community-based research projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Service-learning opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Partnerships with local churches and organizations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">Flexible Learning Pathways</h3>
                  <p className="text-lg text-muted-foreground">
                    We offer diverse educational formats to accommodate different student needs and circumstances,
                    making quality theological education accessible to all.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Residential, online, and hybrid program options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Part-time and full-time study opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span>Multiple campus locations across Ethiopia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Accreditation Tab */}
          <TabsContent value="accreditation" id="accreditation" className="space-y-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight">Accreditation & Partnerships</h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-muted-foreground">
                AIIS maintains high academic standards through accreditation and strategic partnerships with
                respected institutions globally.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Institutional Accreditation</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    AIIS is accredited by Faith Theological Seminary (Nagaland, India), ensuring that our degrees
                    are recognized internationally.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We are also a member of the African Network of Theological Schools, collaborating with
                    institutions across the continent to maintain high educational standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Program Recognition</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Our academic programs meet international standards for theological education, with graduates
                    accepted into advanced degree programs at universities worldwide.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    AIIS degrees are recognized by churches, ministries, and organizations throughout Africa and
                    beyond for ministry and leadership positions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-10 mt-8">
              <div className="text-center space-y-4 mb-10">
                <h3 className="text-2xl font-bold">Our Global Partners</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  AIIS collaborates with these institutions to enhance our educational offerings and provide
                  opportunities for our students and faculty.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
                  <Building className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-semibold">Faith Theological Seminary</h4>
                    <p className="text-sm text-muted-foreground">Nagaland, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
                  <Building className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-semibold">African Network of Theological Schools (ANTS) - Côte d'Ivoire Center</h4>
                    <p className="text-sm text-muted-foreground">West & Central Africa</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg shadow">
                  <Building className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-semibold">African Network of Theological Schools (ANTS) - Addis Ababa Center</h4>
                    <p className="text-sm text-muted-foreground">East & North Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Join Our Community</h2>
              <p className="text-lg text-white/80">
                Take the next step in your theological education journey. Apply now to join our diverse community of
                scholars and leaders at AIIS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-md">
                  <Link href="/admissions">Apply Now</Link>
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
                src="/images/programs/MTh-PS.jpg"
                alt="AIIS Campus"
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
``