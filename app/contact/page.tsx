"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, Globe, Star, CheckCircle, CircleDashed } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting || submissionSuccess) return

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "inquiry",
          ...formData,
        }),
      })

      if (response.ok) {
        setSubmissionSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setTimeout(() => setSubmissionSuccess(false), 5000) // Hide success message after 5 seconds
      } else {
        const errorData = await response.json()
        setErrorMessage(errorData.error || "Failed to send inquiry. Please try again.")
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
              We&apos;d love to hear from you. Reach out to us with any questions or inquiries.
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
                Have questions about our programs, admissions process, or anything else? We&apos;re here to help.
              </p>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Main Office Address</h3>
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
                    info.aiis.edu@gmail.com
                    <br />
                    touch.esck@yahoo.com
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Adama Campus Inquiries</h3>
                  <p className="text-muted-foreground mt-1">
                    Regarding Adama Campus inquiries:
                    <br />
                    Pr Tadesse Alemayehu: +251 911 61 4175
                    <br />
                    touch.esck@yahoo.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0987654321!2d38.842591!3d9.021094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMTYuNSJOIDM4wrA1MCcxNS4zIkU!5e0!3m2!1sen!2set!4v1698765432123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map of Main Office in Addis Ababa"
                ></iframe>
              </div>
              <div className="mt-4">
                <Button
                  asChild
                  variant="default"
                  className="w-full sm:w-auto"
                >
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9.021195,38.842577"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show Directions
                  </a>
                </Button>
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
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="font-medium">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting || submissionSuccess}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="font-medium">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting || submissionSuccess}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting || submissionSuccess}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium">
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+251 123 456 789"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting || submissionSuccess}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-medium">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Inquiry about MTh Program"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting || submissionSuccess}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-medium">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting || submissionSuccess}
                      />
                    </div>
                    {errorMessage && (
                      <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                    {submissionSuccess && (
                      <div className="bg-green-50 dark:bg-green-900 border border-green-500 p-4 rounded-lg">
                        <p className="text-green-700 dark:text-green-300 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          <span> Inquiry sent successfully! We&apos;ll get back to you soon.</span>
                        </p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting || submissionSuccess}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <CircleDashed className="h-4 w-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
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