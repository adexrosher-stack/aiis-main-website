"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Search,
  ArrowRight,
} from "lucide-react"

import { getPublicPosts } from "@/lib/public-posts.api"
import { mapPostToUI, UIPost } from "@/lib/post-mapper"

export default function EventsPage() {
  const [posts, setPosts] = useState<UIPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")

  /* ---------- FETCH POSTS ---------- */
 useEffect(() => {
  const fetchPosts = async () => {
    try {
      const result = await getPublicPosts(1);
      const rawPosts = result.posts ?? [];           
      const mapped = rawPosts.map(mapPostToUI);
      setPosts(mapped);
    } catch (err) {
      console.error("Failed to load posts", err);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

  /* ---------- FILTER ---------- */
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      filter === "all" ||
      (filter === "events" && post.category === "Event") ||
      (filter === "news" && post.category === "News") ||
      (filter === "blogs" && post.category === "Article")

    return matchesSearch && matchesFilter
  })

  return (
    <div>
      {/* HERO */}
      <section className="relative w-full py-20 overflow-hidden">
        <Image
          src="/images/programs/PhD.jpeg"
          alt="Knowledge & Events"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Knowledge & Events</h1>
          <p className="mt-4 text-xl">
            Latest events, news & articles from AIIS
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container py-16">
        {/* SEARCH + FILTER */}
  {/* SEARCH + FILTER */}
<div className="relative mb-10">
  {/* CENTERED TABS */}
 <Tabs
  value={filter}
  onValueChange={setFilter}
  className="flex justify-center"
>
  <TabsList
    className="
      mx-auto
      px-2
      py-2
      gap-2
      rounded-full
      bg-muted/40
      backdrop-blur
    "
  >
    <TabsTrigger
      value="all"
      className="px-6 py-2 text-base"
    >
      All
    </TabsTrigger>

    <TabsTrigger
      value="blogs"
      className="px-6 py-2 text-base"
    >
     Articles
    </TabsTrigger>

    <TabsTrigger
      value="news"
      className="px-6 py-2 text-base"
    >
      News
    </TabsTrigger>

    <TabsTrigger
      value="events"
      className="px-6 py-2 text-base"
    >
      Events
    </TabsTrigger>
  </TabsList>
</Tabs>


  {/* SEARCH RIGHT */}
  <div className="mt-6 md:mt-0 md:absolute md:right-0 md:top-0">
    <Input
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="md:w-64"
    />
  </div>
</div>




        {/* LIST */}
        {loading ? (
          <p>Loading posts...</p>
        ) : filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">
                    {post.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="line-clamp-3">{post.description}</p>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/events/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
