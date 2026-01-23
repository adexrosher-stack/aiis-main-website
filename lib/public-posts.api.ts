import { api } from "./api"
import { PublicPost, PaginatedResponse } from "./public-posts.types"

export const getPublicPosts = async (
  page = 1
): Promise<PaginatedResponse<PublicPost>> => {
  const res = await api.get(`/posts?page=${page}`)
  return res.data
}
