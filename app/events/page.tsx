import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, ArrowRight } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Theological Symposium 2023",
      date: "March 25, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "AIIS Main Campus, Addis Ababa",
      description: "Join us for a day of theological discussions and presentations by leading scholars in the field.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 2,
      title: "Leadership Workshop Series",
      date: "April 10-12, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "AIIS Conference Hall",
      description: "A three-day workshop focusing on developing leadership skills for ministry contexts.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 3,
      title: "Graduation Ceremony 2023",
      date: "May 20, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "AIIS Auditorium",
      description: "Celebrating our graduates and their academic achievements.",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  const newsItems = [
    {
      id: 1,
      title: "AIIS Signs New Partnership with Global Theological Network",
      date: "February 15, 2023",
      description:
        "AIIS has established a new partnership with the Global Theological Network, expanding opportunities for student exchanges and collaborative research.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 2,
      title: "Faculty Research Grant Awarded",
      date: "January 30, 2023",
      description:
        "Dr. Esckinder Taddesse has been awarded a prestigious research grant to study contextual theology in East Africa.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 3,
      title: "New MTh Program Launched",
      date: "December 10, 2022",
      description:
        "AIIS is proud to announce the launch of a new Master of Theology program with specialization in African Christian Ethics.",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Contextualizing Theology in the African Context",
      author: "Dr. Endale Gebremeskel",
      date: "February 20, 2023",
      description: "Exploring the importance of contextual theology in African Christian communities.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 2,
      title: "The Role of Theological Education in Community Transformation",
      author: "Pr. Chalachew Mekere",
      date: "January 25, 2023",
      description: "How theological education can be a catalyst for positive social change in communities.",
      image: "/placeholder.svg?height=400&width=800",
    },
    {
      id: 3,
      title: "Biblical Languages and African Hermeneutics",
      author: "Inst. Eyob Mulau",
      date: "December 15, 2022",
      description: "Examining the intersection of biblical languages and African interpretive approaches.",
      image: "/placeholder.svg?height=400&width=800",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Events"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">News & Events</h1>
            <p className="text-xl text-gray-200">
              Stay updated with the latest news, events, and resources from the African Institute for International
              Studies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <Tabs defaultValue="events" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="events" className="text-lg py-3">
                Events
              </TabsTrigger>
              <TabsTrigger value="news" className="text-lg py-3">
                News
              </TabsTrigger>
              <TabsTrigger value="blog" className="text-lg py-3">
                Blog & Podcast
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="events" className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground">
                Join us for these exciting events and opportunities to learn, connect, and grow.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                View All Events <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
              <p className="text-lg text-muted-foreground">
                Stay informed about the latest developments, achievements, and announcements from AIIS.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {newsItems.map((news) => (
                <Card
                  key={news.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                    <p className="text-muted-foreground">{news.description}</p>
                    <Link
                      href={`/news/aiis-signs-new-partnership`}
                      className="text-primary hover:underline inline-flex items-center mt-4 font-medium"
                    >
                      Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                View All News <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="blog" className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Blog & Podcast</h2>
              <p className="text-lg text-muted-foreground">
                Explore our collection of theological articles, research papers, and media resources.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary font-medium">{post.date}</span>
                      <span className="text-sm text-muted-foreground">By {post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground">{post.description}</p>
                    <Link href="#" className="text-primary hover:underline inline-flex items-center mt-4 font-medium">
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-20 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
              <p className="text-lg">
                Stay updated with the latest news, events, and resources from AIIS. Subscribe to our newsletter to
                receive monthly updates.
              </p>
              <form className="flex gap-4 max-w-md">
                <Input placeholder="Your email address" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Newsletter" fill className="object-cover" />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

