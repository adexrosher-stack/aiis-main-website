import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/PhD.jpeg"
            alt="Contact"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="text-xl text-gray-200">
              We'd love to hear from you. Reach out to us with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about our programs, admissions process, or anything else? We're here to help.
              </p>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-muted-foreground mt-1">Megenagna-CMC Rd, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground mt-1">+251 927 95 68 70 / +251 912 35 70 38</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground mt-1">
                  touch.esck@yahoo.com
                    <br />
                    touch.esckinder@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Hours</h3>
                  <p className="text-muted-foreground mt-1">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">International Inquiries</h3>
                  <p className="text-muted-foreground mt-1">
                    For international student inquiries:
                    <br />
                    touch.esck@yahoo.com
                    <br />
                    chale.eshetu@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1010.0443387068914!2d38.84269316421424!3d9.021848488968862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1746357675293!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="font-medium">
                          First Name
                        </Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="font-medium">
                          Last Name
                        </Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">
                        Phone (Optional)
                      </Label>
                      <Input id="phone" placeholder="+251 123 456 789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-medium">
                        Subject
                      </Label>
                      <Input id="subject" placeholder="Inquiry about MTh Program" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-medium">
                        Message
                      </Label>
                      <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

