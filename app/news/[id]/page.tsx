import { newsItems } from "@/lib/events-data";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: String(item.id),
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = newsItems.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      {/* Render other article details */}
    </div>
  );
}