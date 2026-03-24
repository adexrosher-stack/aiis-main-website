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
export function mapPostToUI(raw: any): UIPost {
  if (!raw || !raw.id) {
    console.warn("Invalid post:", raw);
    return {
      id: 0,
      slug: "",
      title: "Untitled",
      description: "",
      content: "",
      image: "/placeholder.svg",
      gallery: [],
      category: "Article" as const,
      date: "",
      featured_image_url: null,
      published_at: "",
      excerpt: "",
    };
  }

  const featuredPath = raw.featured_image;
  const featuredUrl = featuredPath ? `/storage/${featuredPath}` : null;

  const gallery: string[] = featuredUrl ? [featuredUrl] : [];

  const typeToCategory: Record<string, UIPost["category"]> = {
    event: "Event",
    news: "News",
    article: "Article",
  };

  return {
    id: raw.id,
    slug: raw.slug || "",
    title: raw.title || "No title",
    description: raw.excerpt || raw.description || "",
    content: raw.content ?? "",
    image: featuredUrl || "/placeholder.svg",
    gallery,
    category: typeToCategory[raw.type] || "Article",
    date: raw.published_at
      ? new Date(raw.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "No date",
    featured_image_url: featuredUrl,
    published_at: raw.published_at ?? "",
    excerpt: raw.excerpt ?? "",
  };
}
