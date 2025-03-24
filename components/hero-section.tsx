"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  image: string
  cta: {
    text: string
    link: string
  }
}

export function HeroSection() {
  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "A Foundation for Contextualized Theology in Africa",
      subtitle:
        "A center for theological and international studies dedicated to academic excellence, research, and community engagement.",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: {
        text: "Explore Programs",
        link: "/academics",
      },
    },
    {
      id: 2,
      title: "Transformative Education with African Perspectives",
      subtitle:
        "Integrating universally valid academic knowledge with African cultural contexts for holistic learning.",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: {
        text: "Our Approach",
        link: "/about#approach",
      },
    },
    {
      id: 3,
      title: "Join Our Global Community of Scholars",
      subtitle: "Connect with students and faculty from across Africa and around the world.",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: {
        text: "Apply Now",
        link: "/admissions/apply",
      },
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
          <div className="container h-full px-4 md:px-6 mx-auto relative z-20 flex items-center">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                <span>Accredited Theological Education</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                {slide.title}
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl mb-8">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-black rounded-md">
                  <Link href={slide.cta.link}>
                    {slide.cta.text} <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20 rounded-md"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Slide navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

