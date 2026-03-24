import Image from "next/image"
import { notFound } from "next/navigation"
import { getFaculty } from "@/lib/people"

export default async function FacultyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const faculty = await getFaculty()

  const person = faculty.find(
    (p) => p.id === Number(id)
  )

  if (!person) notFound()

  return (
    <section className="container mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={person.image_url ?? "/placeholder.svg"}
            alt={person.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{person.name}</h1>

          {person.title && (
            <p className="text-xl text-primary">{person.title}</p>
          )}

          {person.degrees && (
            <p className="text-lg text-muted-foreground">
              {person.degrees}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

/* ✅ REQUIRED for output: export */
export async function generateStaticParams() {
  const faculty = await getFaculty()

  return faculty.map((person) => ({
    id: String(person.id),
  }))
}
