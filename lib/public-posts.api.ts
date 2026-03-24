import { api } from "./api"
import { PublicPost, PaginatedResponse } from "./public-posts.types"

export const getPublicPosts = async (page = 1) => {
  try {
    const response = await api.get(`/posts/all`, {
      params: { page }, // cleaner than string interpolation
    });

    const apiData = response.data;

    // The API returns data directly as an array, not nested under posts
    return {
      posts: Array.isArray(apiData?.data) ? apiData.data : [],
      pagination: apiData?.pagination ?? null,
    };
  } catch (error: any) {
    console.error("getPublicPosts failed:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    return { posts: [], pagination: null, errorMessage: "Network or server error" };
  }
};

export const getPublicPostBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/posts/${slug}`);
    return response.data.data ?? null;
  } catch (error: any) {
    console.error("getPublicPostBySlug failed:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    return null;
  }
};
