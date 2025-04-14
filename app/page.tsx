import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calendar, GraduationCap, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { HeroSection } from "@/components/hero-section"
import { VirtualTour } from "@/components/virtual-tour"
import { CourseFilter } from "@/components/course-filter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <HeroSection />

      {/* About Brief Section */}
      <section className="w-full py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image src="/placeholder.svg?height=720&width=1280" alt="AIIS Campus" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">About AIIS</h2>
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
              <Button asChild className="mt-4 rounded-md">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <VirtualTour />

      {/* Featured Programs Section */}
      <section className="w-full py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our most popular academic programs designed to prepare you for impactful ministry and leadership.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <CourseFilter />
        </div>
     
      </section>

      {/* Testimonials Section */}
      
      <section className="w-full py-16 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Student Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our students and alumni about their experiences at AIIS.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="w-full py-20 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of programs, resources, and opportunities designed to support your
              theological education journey.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Academic Programs</h3>
                  <p className="text-muted-foreground">
                    AIIS offers programs from certificate levels to higher-level Master's and PhD studies in religion
                    and leadership.
                  </p>
                  <Link
                    href="/academics"
                    className="text-primary hover:underline inline-flex items-center font-medium mt-2"
                  >
                    View All Programs <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Faculty</h3>
                  <p className="text-muted-foreground">
                    Learn from our distinguished faculty members with extensive academic credentials and practical
                    ministry experience.
                  </p>
                  <Link
                    href="/faculty"
                    className="text-primary hover:underline inline-flex items-center font-medium mt-2"
                  >
                    Meet Our Faculty <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Contextual Approach</h3>
                  <p className="text-muted-foreground">
                    Our unique educational model integrates academic knowledge with African cultural perspectives and
                    community-oriented learning.
                  </p>
                  <Link
                    href="/about#approach"
                    className="text-primary hover:underline inline-flex items-center font-medium mt-2"
                  >
                    Learn About Our Approach <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Events & Workshops</h3>
                  <p className="text-muted-foreground">
                    Participate in our conferences, seminars, and workshops designed to enhance your learning
                    experience.
                  </p>
                  <Link
                    href="/events"
                    className="text-primary hover:underline inline-flex items-center font-medium mt-2"
                  >
                    View Upcoming Events <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Research & Publications</h3>
                  <p className="text-muted-foreground">
                    Explore our collection of theological articles, research papers, and media resources produced by our
                    faculty and students.
                  </p>
                  <Link
                    href="/resources"
                    className="text-primary hover:underline inline-flex items-center font-medium mt-2"
                  >
                    Browse Resources <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Accreditation</h3>
                  <p className="text-muted-foreground">
                    AIIS is accredited by Faith Theological Seminary (Nagaland, India) and collaborates with the African
                    Network of Theological Schools.
                  </p>
                  <Link
                    href="/about#accreditation"
                    className="text-primary hover:underline inline-flex items-center font-medium mt-2"
                  >
                    View Accreditations <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Why Choose AIIS?</h2>
                <div className="w-20 h-1 bg-primary mt-4"></div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Contextual Theological Education</h3>
                    <p className="text-muted-foreground">
                      Our programs are designed with African contexts in mind, providing relevant theological education.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Experienced Faculty</h3>
                    <p className="text-muted-foreground">
                      Learn from scholars with extensive academic credentials and practical ministry experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Flexible Learning Options</h3>
                    <p className="text-muted-foreground">
                      Choose from residential, online, and hybrid programs to fit your schedule and learning
                      preferences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">International Recognition</h3>
                    <p className="text-muted-foreground">
                      Our accreditation ensures that your degree is recognized globally in academic and ministry
                      contexts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=400" alt="AIIS Campus" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-xl overflow-hidden mt-12">
                <Image src="/placeholder.svg?height=400&width=400" alt="AIIS Students" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-xl overflow-hidden -mt-12">
                <Image src="/placeholder.svg?height=400&width=400" alt="AIIS Library" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="AIIS Graduation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary text-white">
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

