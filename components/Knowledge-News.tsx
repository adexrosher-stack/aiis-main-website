"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

import { getPublicPosts } from "@/lib/public-posts"
import { mapPostToUI, UIPost } from "@/lib/map-post-to-ui"

export default function KnowledgeNews() {
  const [posts, setPosts] = useState<UIPost[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  /* ---------- FETCH POSTS ---------- */
  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPublicPosts()
        const mapped = data.map(mapPostToUI)
        setPosts(mapped)
      } catch (err) {
        console.error("Failed to load public posts", err)
      }
    }

    loadPosts()
  }, [])

  /* ---------- ROTATION TIMER ---------- */
  useEffect(() => {
    if (posts.length < 3) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % posts.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [posts.length])

  /* ---------- SELECT 3 FEATURED ---------- */
  const featuredItems = useMemo(() => {
    if (!posts.length) return []

    return Array.from({ length: 3 }, (_, i) => {
      const index = (currentIndex + i) % posts.length
      return posts[index]
    })
  }, [posts, currentIndex])

  /* ---------- RENDER ---------- */
  return (
    <section className="w-full py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Knowledge and News
          </h2>
          <p className="text-muted-foreground mt-2">
            Stay updated with the latest events, news, and articles from AIIS
          </p>
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
                  <Badge
                    variant={
                      item.category === "Event"
                        ? "default"
                        : item.category === "News"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="p-4">
                <CardTitle className="line-clamp-2 text-xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground line-clamp-3">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex items-center gap-2">
                {item.author && (
                  <span className="text-sm text-muted-foreground">
                    By {item.author}
                  </span>
                )}

                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="ml-auto p-0"
                >
                  <Link href={`/events/${item.slug}`}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

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
