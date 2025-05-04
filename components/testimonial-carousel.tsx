"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
}

export function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ruth Debebe",
      role: "MTh Graduate, 2024",
      quote:
        "AIIS is more than an institute—it’s a launchpad for ministry and scholarship, and I couldn’t be more thankful to be part of the 2024 batch. To anyone considering theological or leadership training, I wholeheartedly recommend AIIS. Here, you’ll find knowledge, purpose, and a family that challenges and supports you every step of the way.",
      image: "/images/programs/Testimony1.jpg"
    },

    {
      id: 3,
      name: "Daniel Mulugeta",
      role: "BTh Graduate, 2021",
      quote:
        "AIIS provided me with a solid theological foundation while honoring my cultural context. The community-oriented approach to education created a supportive environment for learning and growth.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute top-8 left-8 text-primary/10">
        <Quote className="h-24 w-24" />
      </div>

      <div className="relative z-10">
        <div className="flex transition-transform duration-500 ease-in-out">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`w-full flex-shrink-0 border-none shadow-none transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-8 p-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4 text-center md:text-left">
                    <p className="text-lg italic mb-4">{testimonial.quote}</p>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm shadow-md pointer-events-auto"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm shadow-md pointer-events-auto"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

