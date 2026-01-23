export type PublicPost = {
  id: number;
  title: string;
  slug: string;
  type: "event" | "news" | "article";
  excerpt: string;
  content: string;
  published_at: string;
  featured_image: string | null;
  images: {
    id: number;
    url: string;
    caption: string | null;
  }[];
};

export async function getPublicPosts(page = 1) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}`,
    { cache: "no-store" }
  );
  return res.json();
}

export async function getPublicPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`,
    { cache: "no-store" }
  );
  return res.json();
}
