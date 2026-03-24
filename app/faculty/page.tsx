


"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getFaculty, getBoard } from "@/lib/people"
import { useEffect, useState } from "react"

export default function FacultyPage() {
  const [faculty, setFaculty] = useState<any[]>([])
  const [board, setBoard] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [facultyData, boardData] = await Promise.all([
          getFaculty(),
          getBoard(),
        ])
        setFaculty(facultyData)
        setBoard(boardData)
      } catch (error) {
        console.error("Error fetching faculty/board data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden">
        <Image
          src="/images/programs/Leadership.jpg"
          alt="Faculty"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold">Faculty & Leadership</h1>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <Tabs defaultValue="faculty">
          <TabsList className="mx-auto grid w-[300px] grid-cols-2">
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="board">Board</TabsTrigger>
          </TabsList>

          {/* FACULTY */}
          <TabsContent value="faculty">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {faculty.map((m) => (
                <Link key={m.id} href={`/faculty/${m.id}`}>
                  <Card className="hover:shadow-xl transition">
                    <div className="relative aspect-square">
                      <Image
                        src={m.image_url ?? "/placeholder.svg"}
                        alt={m.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-bold">{m.name}</h3>
                      {m.title && (
                        <p className="text-primary">{m.title}</p>
                      )}
                      {m.degrees && (
                        <p className="text-sm text-muted-foreground">
                          {m.degrees}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* BOARD */}
          <TabsContent value="board">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {board.map((m) => (
                <Card key={m.id}>
                  <div className="relative aspect-square">
                    <Image
                      src={m.image_url ?? "/placeholder.svg"}
                      alt={m.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold">{m.name}</h3>
                    {m.title && (
                      <p className="text-primary">{m.title}</p>
                    )}
                    {m.degrees && (
                      <p className="text-sm text-muted-foreground">
                        {m.degrees}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
