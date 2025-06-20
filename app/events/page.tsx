"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Search, Filter, ArrowRight, User } from "lucide-react"
import { upcomingEvents, newsItems } from "@/lib/events-data"
import { blogPosts } from "@/lib/blog-data" // If this exists

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")

  // Combine all posts for filtering
  const allPosts = [
    ...(Array.isArray(upcomingEvents) ? upcomingEvents : []), 
    ...(Array.isArray(newsItems) ? newsItems : []), 
    ...(Array.isArray(blogPosts) ? blogPosts : [])
  ]

  // Filter posts based on search query and category filter
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Enhanced filtering logic for the four categories
    const matchesFilter = 
      filter === "all" || 
      (filter === "blogs" && (post.category === "Blog" || post.category === "Article")) ||
      (filter === "news" && post.category === "News") ||
      (filter === "events" && post.category === "Event")
    
    return matchesSearch && matchesFilter
  })

  return (
    <div>
      {/* Hero Section - Image Background */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs/Bachelor.jpeg"
            alt="Admissions"
            fill
            className="object-cover brightness-[0.6] shadow-inner"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-20">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Knowledge & Events</h1>
            <p className="text-xl text-gray-200">
              Stay updated with the latest events, news, and announcements from AIIS
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest Updates</h2>
            <p className="text-muted-foreground mt-2">Discover what's happening at AIIS</p>
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events & news..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Horizontal Filter Bar */}
        <div className="mb-8">
          <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
              <TabsTrigger value="all" className="text-center py-2">All</TabsTrigger>
              <TabsTrigger value="blogs" className="text-center py-2">Blogs & Articles</TabsTrigger>
              <TabsTrigger value="news" className="text-center py-2">News</TabsTrigger>
              <TabsTrigger value="events" className="text-center py-2">Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">Showing {filteredPosts.length} results</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image 
                src={post.image} 
                alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge variant={post.category === "Event" ? "default" : post.category === "News" ? "secondary" : "outline"}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{post.description}</p>
                {post.category === "Event" && "time" in post && (
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {post.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{String(post.time)}</span>
                      </div>
                    )}
                    {"location" in post && post.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{String(post.location)}</span>
                      </div>
                    )}
                  </div>
                )}
                {(post.category === "Article" || post.category === "Blog") && post.author && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/events/${post.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>
    </div>
  )
}

