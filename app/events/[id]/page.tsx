import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Calendar, ChevronLeft, Share2, Download } from "lucide-react"

// This would typically come from a database
export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }));
}

const events = {
  "theological-symposium-2023": {
    id: "theological-symposium-2023",
    title: "Theological Symposium 2023",
    date: "March 25, 2023",
    time: "9:00 AM - 4:00 PM",
    location: "AIIS Main Campus, Addis Ababa",
    description: "Join us for a day of theological discussions and presentations by leading scholars in the field.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <h2>About the Event</h2>
      <p>The AIIS Theological Symposium 2023 brings together leading scholars, pastors, and students for a day of engaging theological discussions and presentations. This year's theme, "Contextual Theology in the 21st Century: African Perspectives," explores the intersection of theological traditions with contemporary African contexts.</p>
      
      <h2>Event Schedule</h2>
      <p><strong>9:00 AM - 9:30 AM:</strong> Registration and Welcome</p>
      <p><strong>9:30 AM - 10:30 AM:</strong> Keynote Address: "The Future of African Theology" by Dr. Esckinder Taddesse</p>
      <p><strong>10:30 AM - 11:00 AM:</strong> Coffee Break</p>
      <p><strong>11:00 AM - 12:30 PM:</strong> Panel Discussion: "Contextualizing Theological Education in Africa"</p>
      <p><strong>12:30 PM - 1:30 PM:</strong> Lunch</p>
      <p><strong>1:30 PM - 3:00 PM:</strong> Breakout Sessions:
        <ul>
          <li>Session A: "Biblical Interpretation in African Contexts"</li>
          <li>Session B: "Theological Responses to Contemporary African Challenges"</li>
          <li>Session C: "Integrating African Traditional Values in Christian Theology"</li>
        </ul>
      </p>
      <p><strong>3:00 PM - 3:30 PM:</strong> Coffee Break</p>
      <p><strong>3:30 PM - 4:00 PM:</strong> Closing Remarks and Next Steps</p>
      
      <h2>Speakers</h2>
      <p>The symposium will feature presentations from distinguished scholars including:</p>
      <ul>
        <li>Dr. Esckinder Taddesse (AIIS)</li>
        <li>Dr. Endale Gebremeskel (AIIS)</li>
        <li>Prof. Samuel Ngewa (Nairobi Evangelical Graduate School of Theology)</li>
        <li>Dr. Josephine Mutuku (Africa International University)</li>
        <li>Dr. Tite Tiénou (Trinity Evangelical Divinity School)</li>
      </ul>
      
      <h2>Registration Information</h2>
      <p>Registration fee includes access to all sessions, conference materials, refreshments, and lunch.</p>
      <ul>
        <li>Regular Registration: 500 ETB</li>
        <li>Student Registration: 250 ETB</li>
        <li>Faculty/Staff: 350 ETB</li>
      </ul>
      <p>Early bird registration (before March 10): 20% discount</p>
    `,
    speakers: [
      { name: "Dr. Esckinder Taddesse", role: "Principal, AIIS", image: "/placeholder.svg?height=200&width=200" },
      { name: "Dr. Endale Gebremeskel", role: "Faculty Member, AIIS", image: "/placeholder.svg?height=200&width=200" },
      { name: "Prof. Samuel Ngewa", role: "NEGST", image: "/placeholder.svg?height=200&width=200" },
    ],
    relatedEvents: ["leadership-workshop-series", "graduation-ceremony-2023"],
  },
  "leadership-workshop-series": {
    id: "leadership-workshop-series",
    title: "Leadership Workshop Series",
    date: "April 10-12, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "AIIS Conference Hall",
    description: "A three-day workshop focusing on developing leadership skills for ministry contexts.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <h2>About the Workshop Series</h2>
      <p>The Leadership Workshop Series is designed to equip current and aspiring ministry leaders with practical skills and biblical principles for effective leadership. Over three days, participants will engage in interactive sessions, case studies, and hands-on exercises to develop their leadership capabilities.</p>
      
      <h2>Workshop Topics</h2>
      <p><strong>Day 1: Biblical Foundations of Leadership</strong></p>
      <ul>
        <li>Biblical Models of Leadership</li>
        <li>Servant Leadership in the 21st Century</li>
        <li>Character Development for Leaders</li>
        <li>Practical Exercise: Personal Leadership Assessment</li>
      </ul>
      
      <p><strong>Day 2: Organizational Leadership</strong></p>
      <ul>
        <li>Strategic Planning for Ministry</li>
        <li>Team Building and Delegation</li>
        <li>Conflict Resolution in Ministry Settings</li>
        <li>Practical Exercise: Ministry Vision Development</li>
      </ul>
      
      <p><strong>Day 3: Leadership in Context</strong></p>
      <ul>
        <li>Contextual Leadership Challenges in Africa</li>
        <li>Leading Change in Traditional Settings</li>
        <li>Mentoring and Developing New Leaders</li>
        <li>Practical Exercise: Leadership Action Plan</li>
      </ul>
      
      <h2>Workshop Facilitators</h2>
      <p>The workshop will be facilitated by experienced leaders and educators including:</p>
      <ul>
        <li>Pr. Tsadiku Abdo (President, ECFE)</li>
        <li>Dr. Esckinder Taddesse (Principal, AIIS)</li>
        <li>Mr. Mengistu Woldemariam (Leadership Consultant)</li>
      </ul>
      
      <h2>Registration Information</h2>
      <p>Registration fee includes workshop materials, certificate of completion, refreshments, and lunch for all three days.</p>
      <ul>
        <li>Regular Registration: 1,200 ETB</li>
        <li>AIIS Alumni: 900 ETB</li>
        <li>Current AIIS Students: 600 ETB</li>
      </ul>
      <p>Early bird registration (before March 25): 15% discount</p>
      <p>Group registration (3 or more from same organization): 10% discount per person</p>
    `,
    speakers: [
      { name: "Pr. Tsadiku Abdo", role: "President, ECFE", image: "/placeholder.svg?height=200&width=200" },
      { name: "Dr. Esckinder Taddesse", role: "Principal, AIIS", image: "/placeholder.svg?height=200&width=200" },
      {
        name: "Mr. Mengistu Woldemariam",
        role: "Leadership Consultant",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    relatedEvents: ["theological-symposium-2023", "graduation-ceremony-2023"],
  },
  "graduation-ceremony-2023": {
    id: "graduation-ceremony-2023",
    title: "Graduation Ceremony 2023",
    date: "May 20, 2023",
    time: "2:00 PM - 5:00 PM",
    location: "AIIS Auditorium",
    description: "Celebrating our graduates and their academic achievements.",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <h2>About the Ceremony</h2>
      <p>Join us as we celebrate the achievements of our graduating class of 2023. This year, we are proud to honor students who have completed various programs including Bachelor of Theology, Master of Divinity, Master of Theology, and Doctor of Philosophy degrees.</p>
      
      <h2>Event Schedule</h2>
      <p><strong>2:00 PM - 2:30 PM:</strong> Arrival and Seating of Guests</p>
      <p><strong>2:30 PM - 3:00 PM:</strong> Processional and Opening Ceremony</p>
      <p><strong>3:00 PM - 3:30 PM:</strong> Welcome Address by Dr. Esckinder Taddesse, Principal</p>
      <p><strong>3:30 PM - 4:00 PM:</strong> Keynote Address by Guest Speaker</p>
      <p><strong>4:00 PM - 4:45 PM:</strong> Conferring of Degrees and Presentation of Graduates</p>
      <p><strong>4:45 PM - 5:00 PM:</strong> Closing Remarks and Benediction</p>
      <p><strong>5:00 PM - 6:30 PM:</strong> Reception and Refreshments</p>
      
      <h2>Guest Speaker</h2>
      <p>We are honored to have Dr. Tite Tiénou, Senior Professor of Theology at Trinity Evangelical Divinity School, as our keynote speaker. Dr. Tiénou is a distinguished theologian with extensive experience in theological education in Africa and globally.</p>
      
      <h2>Information for Graduates</h2>
      <p><strong>Graduation Rehearsal:</strong> May 19, 2023, 2:00 PM - 4:00 PM</p>
      <p><strong>Regalia Collection:</strong> May 15-19, 2023, 9:00 AM - 4:00 PM at the Registrar's Office</p>
      <p><strong>Graduate Assembly:</strong> May 20, 2023, 1:00 PM in Room 101</p>
      
      <h2>Information for Guests</h2>
      <p>Each graduate is allowed to invite up to 5 guests. Additional guest tickets may be available on a first-come, first-served basis after May 10, 2023.</p>
      <p>Parking is available in the main campus parking lot. Additional parking can be found at the CMC Church parking area (5-minute walk).</p>
      <p>Photography services will be available during and after the ceremony. Professional photos will be available for purchase.</p>
    `,
    speakers: [
      { name: "Dr. Esckinder Taddesse", role: "Principal, AIIS", image: "/placeholder.svg?height=200&width=200" },
      { name: "Dr. Tite Tiénou", role: "Guest Speaker, TEDS", image: "/placeholder.svg?height=200&width=200" },
    ],
    relatedEvents: ["theological-symposium-2023", "leadership-workshop-series"],
  },
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events[params.id as keyof typeof events]

  if (!event) {
    return (
      <div className="container px-4 md:px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight">Event Not Found</h1>
        <p className="mt-4 text-muted-foreground">The event you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/events">View All Events</Link>
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
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm mb-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{event.title}</h1>
            <p className="text-xl text-gray-200">{event.description}</p>
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
                  Back to Events
                </Link>
              </Button>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: event.content }} />
            </div>

            <div className="flex flex-wrap gap-4 pt-8 border-t">
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Event
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Brochure
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Event Details</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Date</h4>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Time</h4>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="#registration">Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {event.speakers && event.speakers.length > 0 && (
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold">Speakers</h3>

                  <div className="space-y-4">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{speaker.name}</h4>
                          <p className="text-sm text-muted-foreground">{speaker.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Need More Information?</h3>
                <p>If you have any questions about this event, please contact our events team.</p>
                <Button asChild variant="outline" className="w-full bg-white text-primary hover:bg-white/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Related Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You might also be interested in these upcoming events.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {event.relatedEvents.map((relatedEventId) => {
              const relatedEvent = events[relatedEventId as keyof typeof events]
              return (
                <Card
                  key={relatedEvent.id}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56">
                    <Image
                      src={relatedEvent.image || "/placeholder.svg"}
                      alt={relatedEvent.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {relatedEvent.date}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedEvent.title}</h3>
                    <div className="space-y-3 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{relatedEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{relatedEvent.location}</span>
                      </div>
                    </div>
                    <p className="mb-4 line-clamp-2">{relatedEvent.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/events/${relatedEvent.id}`}>View Event</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Register for This Event</h2>
              <p className="text-lg text-muted-foreground">Complete the form below to register for {event.title}.</p>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input id="firstName" className="w-full p-2 border rounded-md" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input id="lastName" className="w-full p-2 border rounded-md" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input id="email" type="email" className="w-full p-2 border rounded-md" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-medium">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input id="phone" className="w-full p-2 border rounded-md" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="organization" className="font-medium">
                        Organization/Church
                      </label>
                      <input id="organization" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="specialRequests" className="font-medium">
                        Special Requests or Accommodations
                      </label>
                      <textarea id="specialRequests" rows={3} className="w-full p-2 border rounded-md"></textarea>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Complete Registration
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    By registering, you agree to our terms and conditions.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

