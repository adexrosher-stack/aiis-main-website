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

// ────────────────────────────────────────────────
// Define the return type here (this was missing)
export type PostsResult = {
  posts: PublicPost[]
  // You can add more fields later, e.g.:
  // pagination?: {
  //   total: number
  //   per_page: number
  //   current_page: number
  //   last_page: number
  // } | null
}
// ────────────────────────────────────────────────

export const getPublicPosts = async (page = 1): Promise<PostsResult> => {
  try {
    const response = await api.get(`/posts/all?page=${page}`)
    const apiData = response.data // { success, message, data: [posts...] }

    // The API returns data directly as an array, not nested under posts
    return {
      posts: Array.isArray(apiData?.data) ? apiData.data : [],   // Direct array access
    }
  } catch (err) {
    console.error("Fetch error:", err)
    return { posts: [] }
  }
}

export const getPublicPostBySlug = async (slug: string) => {
  const res = await api.get(`/posts/${slug}`)
  return res.data.data ?? null // RETURN THE POST
}