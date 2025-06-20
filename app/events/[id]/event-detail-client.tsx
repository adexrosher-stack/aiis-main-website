"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Calendar, Share2, Bookmark, Clock, MapPin, User, Play, ExternalLink } from "lucide-react"
import { Event, NewsItem } from "@/lib/events-data"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

type Post = Event | NewsItem | any;

interface EventDetailClientProps {
  post: Post
  allPosts: Post[]
}

export default function EventDetailClient({ post, allPosts }: EventDetailClientProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [activeImage, setActiveImage] = useState(post.image)
  const [commentForm, setCommentForm] = useState({ name: "", email: "", comment: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Determine content type
  const isEvent = post.category === "Event"
  const isNews = post.category === "News"
  const isBlog = post.category === "Blog" || post.category === "Article"
  const hasVideo = !!post.videoUrl
  const hasGallery = !!post.gallery && post.gallery.length > 0
  
  // Function to generate unique fallback content based on post ID and category
  const renderFallbackContent = (post: Post) => {
    // Common intro paragraph for all posts
    const commonIntro = (
      <p>
        The African Institute for International Studies (AIIS) is committed to providing high-quality education
        and fostering a community of scholars dedicated to theological excellence and practical ministry.
      </p>
    );
    
    // Different content based on category and ID
    if (post.category === "Blog" || post.category === "Article") {
      return (
        <>
          {commonIntro}
          <h2>Theological Insights</h2>
          <p>
            This blog post explores important theological concepts relevant to the African context. 
            Our faculty regularly contributes insights that bridge academic theology with practical 
            ministry applications.
          </p>
          <p>
            Through thoughtful analysis and contextual understanding, we aim to provide resources 
            that serve both our students and the broader Christian community in Africa.
          </p>
          <h2>Join the Conversation</h2>
          <p>
            We invite you to engage with these ideas and share your own perspectives. 
            Theological education thrives through dialogue and the exchange of diverse viewpoints.
          </p>
        </>
      );
    } else if (post.category === "News") {
      return (
        <>
          {commonIntro}
          <h2>Latest Developments</h2>
          <p>
            This news update highlights recent developments at AIIS that impact our academic community.
            We strive to keep our stakeholders informed about important changes, achievements, and opportunities.
          </p>
          <p>
            As we continue to grow and evolve as an institution, we remain committed to our core mission
            of providing excellent theological education that is contextually relevant and globally informed.
          </p>
          <h2>Stay Connected</h2>
          <p>
            For more updates and news from AIIS, follow us on social media and subscribe to our newsletter.
          </p>
        </>
      );
    } else if (post.category === "Event") {
      return (
        <>
          {commonIntro}
          <h2>Event Details</h2>
          <p>
            We're excited to host this event as part of our commitment to creating enriching 
            experiences for our community. This gathering provides an opportunity for learning, 
            networking, and spiritual growth.
          </p>
          <p>
            Participants can expect to gain valuable insights, connect with peers and faculty, 
            and contribute to meaningful discussions about theology and ministry in the African context.
          </p>
          <h2>Registration Information</h2>
          <p>
            Please register in advance to secure your place. For any questions about this event, 
            contact our events team at events@aiis.edu.
          </p>
        </>
      );
    } else {
      // Default fallback content
      return (
        <>
          {commonIntro}
          <p>
            This content represents our ongoing commitment to academic excellence and community engagement. 
            We invite all members of our community to engage with these important developments.
          </p>
          <h2>About AIIS</h2>
          <p>
            AIIS is a premier theological institution in Africa, dedicated to providing contextually relevant
            theological education that equips students for effective ministry and leadership in diverse settings.
            Our programs combine academic rigor with practical ministry experience, preparing graduates who are
            both theologically sound and practically effective.
          </p>
        </>
      );
    }
  };
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)
  
  // Get upcoming events (if not viewing an event)
  const upcomingEvents = !isEvent 
    ? allPosts
        .filter(p => p.category === "Event" && new Date(p.date) > new Date())
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 3)
    : []

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      }).catch(err => console.error('Error sharing:', err))
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Error copying link:', err))
    }
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
    // In a real app, you would save this to user preferences/localStorage/database
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "comment",
          name: commentForm.name,
          email: commentForm.email,
          message: commentForm.comment,
          postTitle: post.title,
          postId: post.id,
        }),
      })

      if (response.ok) {
        toast({
          title: "Comment Submitted",
          description: "Thank you for your comment. It has been sent for review.",
        })
        setCommentForm({ name: "", email: "", comment: "" })
      } else {
        throw new Error("Failed to submit comment")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit comment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Main Content - Grid layout like news detail page */}
      <section className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Button asChild variant="ghost" size="sm" className="p-0 h-auto">
                <Link href="/events" className="flex items-center gap-1 hover:text-primary">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Events
                </Link>
              </Button>
            </div>

            {/* Title, Date, and Author section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                
                {(isBlog) && post.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Media content - Always show image/video/gallery at the top of content */}
            {hasVideo ? (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <iframe 
                  src={post.videoUrl} 
                  className="absolute inset-0 w-full h-full" 
                  allowFullScreen
                  title={post.title}
                />
              </div>
            ) : hasGallery ? (
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={activeImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    unoptimized={true}
                  />
                </div>
                {post.imageSource && (
                  <p className="text-sm text-muted-foreground italic">Image source: {post.imageSource}</p>
                )}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[post.image, ...(post.gallery || [])].filter(Boolean).map((img, index) => (
                    <button
                      key={index}
                      className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
                        activeImage === img ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setActiveImage(img)}
                    >
                      {img && (
                        <Image
                          src={img}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                          unoptimized={true}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    unoptimized={true}
                  />
                </div>
                {post.imageSource && (
                  <p className="text-sm text-muted-foreground italic">Image source: {post.imageSource}</p>
                )}
              </div>
            )}
            
            {/* Event details for Event category */}
            {isEvent && (
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-bold">Event Details</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {post.time && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Time</h3>
                        <p>{post.time}</p>
                      </div>
                    </div>
                  )}
                  {post.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p>{post.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">{post.description}</p>
              
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <>
                  {/* Generate different fallback content based on post ID */}
                  {renderFallbackContent(post)}
                </>
              )}
            </div>

            {/* Comments Section for Blogs and Articles */}
            {isBlog && (
              <div className="pt-8 border-t">
                <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
                <p className="text-muted-foreground mb-6">
                  Share with us your thoughts on this {post.category.toLowerCase()}.
                </p>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                      required
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-1">
                      Comment
                    </label>
                    <Textarea
                      id="comment"
                      value={commentForm.comment}
                      onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                      required
                      placeholder="Your comment"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Comment"}
                  </Button>
                </form>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-8 border-t">
              <Button variant="outline" className="flex items-center gap-2" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2" 
                onClick={handleSave}
              >
                <Bookmark className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                {isSaved ? "Saved" : "Save for Later"}
              </Button>
            </div>
          </div>

          {/* Sidebar - Similar to news detail page */}
          <div className="space-y-8">
            {/* Related Posts */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Related {post.category === "Event" ? "Events" : post.category === "News" ? "News" : "Articles"}</h3>

                <div className="space-y-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-4">
                        <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                            unoptimized={true}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold line-clamp-2">
                            <Link href={`/events/${relatedPost.id}`} className="hover:text-primary">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No related content found.</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/events?category=events"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Events</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">
                        {allPosts.filter(p => p.category === "Event").length}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events?category=news"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>News</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">
                        {allPosts.filter(p => p.category === "News").length}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events?category=blogs"
                      className="flex items-center justify-between hover:text-primary"
                    >
                      <span>Articles & Blogs</span>
                      <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-xs">
                        {allPosts.filter(p => p.category === "Article" || p.category === "Blog").length}
                      </span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
                <p>Stay updated with the latest news and events from AIIS.</p>
                <form className="space-y-4">
                  <input type="email" placeholder="Your email address" className="w-full p-2 rounded-md text-black" />
                  <Button className="w-full bg-white text-primary hover:bg-white/90">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}