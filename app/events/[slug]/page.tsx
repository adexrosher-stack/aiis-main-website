import { notFound } from "next/navigation"
import { getPublicPosts, getPublicPostBySlug } from "@/lib/public-posts.api"
import { mapPostToUI } from "@/lib/post-mapper"
import EventDetailClient from "@/components/EventDetailClient"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await getPublicPostBySlug(slug)
  if (!post) notFound()

  const allPosts = (await getPublicPosts()).posts.map(mapPostToUI)

  return (
    <EventDetailClient
      post={mapPostToUI(post)}
      allPosts={allPosts}
    />
  )
}

export async function generateStaticParams() {
  const posts = await getPublicPosts()

  return posts.posts
    .filter((p: any) => typeof p.slug === "string" && p.slug.length > 0)
    .map((p: any) => ({
      slug: p.slug,
    }))
}
