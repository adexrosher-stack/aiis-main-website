export type PostType = "event" | "news" | "article"

export interface PublicPostImage {
  id: number
  url: string
  caption: string | null
}

export interface PublicPost {
  id: number
  title: string
  slug: string
  type: PostType
  excerpt: string
  content: string
  status: "published"
  published_at: string
  featured_image: string | null
  images: PublicPostImage[]
}

export interface PaginatedResponse<T> {
  data: T[]
  current_page: number
  last_page: number
  per_page: number
  total: number
}
