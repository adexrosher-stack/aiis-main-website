import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="AIIS Campus"
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
              A center for theological and international studies dedicated to academic excellence, research, and
              community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="max-w-4xl mx-auto space-y-16">
          <section id="about" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  AIIS exists for high-quality learning, educational availability, and transformative education with
                  contextual relevance. African Institute of International Studies (AIIS) is committed to providing
                  education at different levels through a variety of programs adaptable to the diverse needs of
                  students.
                </p>
                <p className="text-lg">
                  To realize this mission, AIIS ensures that theological education is accessible to all in need through
                  face-to-face and virtual delivery, including recorded lectures in Amharic and English. AIIS also
                  provides academic e-books and PowerPoint lecture notes for all courses, ensuring that students receive
                  a comprehensive education regardless of their location.
                </p>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="AIIS Mission" fill className="object-cover" />
              </div>
            </div>
          </section>

          <section id="directors-message" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Director's Message</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <div className="relative h-full min-h-[300px] md:min-h-full">
                      <Image src="/placeholder.svg?height=600&width=400" alt="Director" fill className="object-cover" />
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
                        "Have you been looking for a place to expand your knowledge of Theology and Arts? AIIS
                        specializes in contextualization, rooted in African theological frameworks. We offer accredited
                        degrees at the Bachelor's and Master's levels, focusing on both quality and flexibility to
                        ensure that you receive the best education in a way that suits you.ation, rooted in African
                        theological frameworks. We offer accredited degrees at the Bachelor's and Master's levels,
                        focusing on both quality and flexibility to ensure that you receive the best education in a way
                        that suits you.
                      </p>
                      <p className="text-lg italic">
                        AIIS is accredited by Faith Theological Seminary (Nagaland, India) and collaborates with the
                        African Network of Theological Schools (ANTS), which operates in West, Central, South, and East
                        Africa. Our commitment is to provide theological education that is academically sound,
                        contextually relevant, and widely accessible."
                      </p>
                      <div className="flex items-center gap-4 mt-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=128&width=128"
                            alt="Director Portrait"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">Pr. Esckinder Taddesse</h4>
                          <p className="text-muted-foreground">Principal, AIIS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="approach" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <p className="text-lg">
                  AIIS adopts a unique educational model that integrates universally valid academic knowledge with
                  African cultural perspectives. The African way of learning is community-oriented, nature-centered, and
                  beyond traditional scholastic methods.
                </p>
                <p className="text-lg">
                  At AIIS, education is not just about systematic learning but also about life-to-life mentorship,
                  flexible time structures, and diverse program offerings.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Community-Oriented Learning</h4>
                      <p className="text-muted-foreground">Education that fosters community and collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Contextual Relevance</h4>
                      <p className="text-muted-foreground">Theological education adapted to African contexts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Flexible Learning</h4>
                      <p className="text-muted-foreground">Programs designed to accommodate diverse student needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 relative aspect-square rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=600" alt="AIIS Approach" fill className="object-cover" />
              </div>
            </div>
          </section>

          <section id="accreditation" className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Accreditation</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <p className="text-lg">
                    AIIS is accredited by Faith Theological Seminary (FTS) – Nagaland, India. Additionally, AIIS
                    collaborates with theological institutions in West Africa (Côte d'Ivoire) and East Africa (Addis
                    Ababa) through the African Network of Theological Schools (ANTS).
                  </p>
                  <p className="text-lg">
                    Our accreditation ensures that our programs meet high academic standards and are recognized
                    internationally, providing our graduates with credentials that are respected in theological and
                    academic communities worldwide.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-center justify-center">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Faith Theological Seminary"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex items-center justify-center">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="African Network of Theological Schools"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

