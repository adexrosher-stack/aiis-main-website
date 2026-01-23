/* ---------- API TYPES ---------- */
export type PublicPost = {
  id: number
  title: string
  slug: string
  type: "event" | "news" | "article"
  excerpt: string
  content: string
  published_at: string
  featured_image_url: string | null
  images: {
    id: number
    url: string
    caption: string | null
  }[]
}

/* ---------- UI TYPE ---------- */
export type UIPost = {
  id: number
  slug: string
  title: string
  description: string
  content?: string
  image: string
  gallery: string[]
  category: "Event" | "News" | "Blog" | "Article"
  date: string
  author?: string
  featured_image_url: string | null
  published_at: string
  excerpt: string
}

/* ---------- MAPPER ---------- */
export function mapPostToUI(post: PublicPost): UIPost {
  if (!post) {
    throw new Error("mapPostToUI called with undefined post")
  }

  const gallery: string[] = [
    post.featured_image_url,
    ...(Array.isArray(post.images)
      ? post.images.map((img) => img.url)
      : []),
  ].filter(Boolean) as string[]

  return {
    id: post.id,
    slug: post.slug,

    title: post.title,
    description: post.excerpt ?? "",
    content: post.content ?? "",

    image: gallery[0] || "/placeholder.svg",
    gallery,

    category:
      post.type === "event"
        ? "Event"
        : post.type === "news"
        ? "News"
        : post.type === "article"
        ? "Article"
        : "Blog",

    date: post.published_at
      ? new Date(post.published_at).toLocaleDateString()
      : "",

    featured_image_url: post.featured_image_url ?? null,
    published_at: post.published_at ?? "",
    excerpt: post.excerpt ?? "",
  }
}
