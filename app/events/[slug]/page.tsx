


import { notFound } from "next/navigation"
import { getPublicPosts, getPublicPostBySlug } from "@/lib/public-posts"
import { mapPostToUI } from "@/lib/post-mapper"
import EventDetailClient from "../components/EventDetailClient"



interface Props {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const {slug}=params
  const post = await getPublicPostBySlug(slug)

  if (!post) notFound()

  const allPosts = (await getPublicPosts()).map(mapPostToUI)

  return (
    <EventDetailClient
      post={mapPostToUI(post)}
      allPosts={allPosts}
    />
  )
}

export async function generateStaticParams() {
  const posts = await getPublicPosts()

  return posts
    .filter((p: any) => typeof p.slug === "string" && p.slug.length > 0)
    .map((p: any) => ({
      slug: p.slug,
    }))
}
