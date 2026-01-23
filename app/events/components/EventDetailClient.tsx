"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { UIPost } from "@/lib/post-mapper"
import { Calendar, ArrowLeft } from "lucide-react"

interface EventDetailClientProps {
  post: UIPost
  allPosts: UIPost[] // Accept allPosts as a prop
}

export default function EventDetailClient({ post, allPosts }: EventDetailClientProps) {
  const [activeImage, setActiveImage] = useState(0)

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === post.gallery.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="container py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      {/* MAIN CONTENT */}
      <div className="lg:col-span-2">
        <Link
          href="/events"
          className="inline-flex items-center text-sm text-muted-foreground mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

        <p className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Calendar className="h-4 w-4" />
          {post.date}
        </p>

        {/* IMAGE GALLERY */}
        {post.gallery.length > 0 && (
          <div className="mb-8 space-y-4">
            {/* MAIN IMAGE */}
            <button
              onClick={nextImage}
              className="relative aspect-video w-full overflow-hidden rounded-xl cursor-pointer focus:outline-none"
              aria-label="Next image"
            >
              <Image
                src={post.gallery[activeImage]}
                alt={post.title}
                fill
                priority
                className="object-cover transition-opacity duration-300"
              />
            </button>

            {/* DOT NAVIGATION */}
            {post.gallery.length > 1 && (
              <div className="flex gap-2 justify-center">
                {post.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`h-2 w-2 rounded-full transition ${
                      activeImage === index
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* CONTENT */}
        <div className="prose prose-invert max-w-none">
          <h3>Event Details</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
        </div>
      </div>

      {/* SIDEBAR */}
      <aside className="space-y-8">
        <div>
          <h4 className="font-semibold mb-4">Related Events</h4>
          <p className="text-sm text-muted-foreground">
            No related content found.
          </p>
        </div>

        {/* CATEGORIES WITH COUNT */}
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            {Array.from(new Set(allPosts.map((post) => post.category))).map((category: string) => {
              const count = allPosts.filter((post) => post.category === category).length

              return (
                <li key={category} className="flex justify-between">
                  <Link
                    href={`/posts?category=${category.toLowerCase()}`}
                    className="hover:underline text-muted-foreground"
                  >
                    {category}
                  </Link>
                  <span className="text-sm text-muted-foreground">({count})</span>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </section>
  )
}
