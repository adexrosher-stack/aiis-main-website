export function generateStaticParams() {
  // Return an array of objects with the id parameter
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    // Add all possible news IDs here
  ];
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>News Article {params.id}</h1>
      {/* Your individual news article content here */}
    </div>
  );
}