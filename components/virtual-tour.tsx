"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface TourLocation {
  id: string
  name: string
  image: string
  description: string
}

export function VirtualTour() {
  const [selectedLocation, setSelectedLocation] = useState<TourLocation | null>(null)

  const locations: TourLocation[] = [
    {
      id: "campus",
      name: "Main Campus",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Explore our beautiful main campus located in Addis Ababa, featuring modern classrooms, study areas, and community spaces.",
    },
    {
      id: "library",
      name: "Library",
      image: "/placeholder.svg?height=600&width=800",
      description: "Our extensive library houses over 10,000 volumes covering theology, philosophy, history, and more.",
    },
    {
      id: "chapel",
      name: "Chapel",
      image: "/placeholder.svg?height=600&width=800",
      description: "The AIIS chapel is a serene space for worship, reflection, and community gatherings.",
    },
    {
      id: "classrooms",
      name: "Classrooms",
      image: "/placeholder.svg?height=600&width=800",
      description: "Our modern classrooms are equipped with the latest technology to enhance the learning experience.",
    },
  ]

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Virtual Campus Tour</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our facilities and get a feel for life at AIIS without leaving your home.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedLocation(location)}
            >
              <div className="aspect-video relative">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{location.name}</h3>
                  <p className="text-white/80 text-sm mt-1 line-clamp-2">{location.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedLocation} onOpenChange={(open) => !open && setSelectedLocation(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={selectedLocation?.image || ""}
                alt={selectedLocation?.name || ""}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedLocation?.name}</DialogTitle>
              </DialogHeader>
              <p className="mt-4">{selectedLocation?.description}</p>
              <div className="mt-6 flex justify-center">
                <Button>Start 360° Tour</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href="https://youtu.be/example" target="_blank" rel="noopener noreferrer">
              Watch Full Campus Tour <Play className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

