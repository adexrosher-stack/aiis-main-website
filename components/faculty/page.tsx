"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

interface FacultyMember {
  name: string
  title: string
  email: string
  image: string
  description: string
}

const FacultyPage = () => {
  const [faculty, setFaculty] = useState<FacultyMember[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Replace with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Simulate fetching data from an API or database
        const mockFacultyData: FacultyMember[] = [
          {
            name: "John Doe",
            title: "Professor of Computer Science",
            email: "john.doe@example.com",
            image: "https://via.placeholder.com/150",
            description: "John Doe is a professor of computer science with expertise in artificial intelligence.",
          },
          {
            name: "Jane Smith",
            title: "Associate Professor of Mathematics",
            email: "jane.smith@example.com",
            image: "https://via.placeholder.com/150",
            description: "Jane Smith is an associate professor of mathematics specializing in topology.",
          },
          {
            name: "David Lee",
            title: "Assistant Professor of Physics",
            email: "david.lee@example.com",
            image: "https://via.placeholder.com/150",
            description: "David Lee is an assistant professor of physics researching quantum mechanics.",
          },
        ]
        setFaculty(mockFacultyData)
      } catch (error) {
        console.error("Error fetching faculty data:", error)
      }
    }

    fetchData()
  }, [])

  const filteredFaculty = faculty.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Faculty</h1>

      <div className="mb-5">
        <Label htmlFor="search">Search Faculty:</Label>
        <Input
          type="text"
          id="search"
          placeholder="Enter name or title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredFaculty.map((member, index) => (
          // Add links to faculty detail pages
          <Card
            key={index}
            className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => router.push(`/faculty/${member.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`)}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground text-center">{member.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FacultyPage

