import { api } from "./api"

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

/* ---------- LIST ---------- */
// lib/public-posts.ts
export const getPublicPosts = async () => {
  const res = await api.get("/posts/all")
  return res.data.data // ALWAYS FULL ARRAY
}



/* ---------- SINGLE ---------- */
/* ---------- SINGLE ---------- */
export const getPublicPostBySlug = async (slug: string) => {
  const res = await api.get(`/posts/${slug}`)
  return res.data.data ?? null // ✅ RETURN THE POST
}
