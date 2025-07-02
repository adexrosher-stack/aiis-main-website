"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

// Import all data sources
import { upcomingEvents, newsItems } from "@/lib/events-data"
import { blogPosts } from "@/lib/blog-data" // This will need to be created if it doesn't exist

export default function KnowledgeNews() {
  const [featuredItems, setFeaturedItems] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    // Combine all content types
    const allItems = [
      ...(blogPosts || []),
      ...(newsItems || []),
      ...(upcomingEvents || [])
    ].filter(item => item) // Filter out any undefined items
    
    // Rotate featured items every 10 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 3) % Math.max(allItems.length, 3))
    }, 10000)
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    // Combine all content types
    const allItems = [
      ...(blogPosts || []),
      ...(newsItems || []),
      ...(upcomingEvents || [])
    ].filter(item => item) // Filter out any undefined items
    
    // Get 3 items starting from currentIndex, wrapping around if needed
    const items = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % allItems.length
      items.push(allItems[index])
    }
    
    setFeaturedItems(items)
  }, [currentIndex])

  return (
    <section className="w-full py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Centered title section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Knowledge and News</h2>
          <p className="text-muted-foreground mt-2">Stay updated with the latest events, news, and articles from AIIS</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={item.category === "Event" ? "default" : item.category === "News" ? "secondary" : "outline"}>
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-2 text-xl">{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground line-clamp-3">{item.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                {item.author && (
                  <span className="text-sm text-muted-foreground">By {item.author}</span>
                )}
                {item.location && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </div>
                )}
                {item.time && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {item.time}
                  </div>
                )}
                <Button asChild variant="link" size="sm" className="ml-auto p-0">
                  <Link href={`/events/${item.id}`}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All button moved to the bottom */}
        <div className="text-center mt-12">
          <Button asChild className="gap-2">
            <Link href="/events">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

