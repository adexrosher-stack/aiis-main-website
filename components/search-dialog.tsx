"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const searchCategories = [
  { id: "programs", name: "Programs", results: ["Bachelor of Theology", "Master of Divinity", "PhD in Theology"] },
  { id: "faculty", name: "Faculty", results: ["Dr. Esckinder Taddesse", "Pr. Tsadiku Abdo", "Dr. Endale Gebremeskel"] },
  {
    id: "events",
    name: "Events",
    results: ["Theological Symposium 2023", "Leadership Workshop Series", "Graduation Ceremony 2023"],
  },
]

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setOpen(false)
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 border-none bg-transparent">
          <Search className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Search AIIS</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="mt-4">
          <div className="flex gap-2">
            <Input
              placeholder="Search for programs, faculty, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button type="submit">Search</Button>
          </div>
        </form>

        {searchQuery.length > 0 && (
          <div className="mt-6 space-y-6">
            {searchCategories.map((category) => {
              const filteredResults = category.results.filter((result) =>
                result.toLowerCase().includes(searchQuery.toLowerCase()),
              )

              if (filteredResults.length === 0) return null

              return (
                <div key={category.id} className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground">{category.name}</h3>
                  <ul className="space-y-1">
                    {filteredResults.map((result, index) => (
                      <li key={index}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left h-auto py-2"
                          onClick={() => {
                            setOpen(false)
                            // In a real app, you would navigate to the specific page
                            router.push(`/search?q=${encodeURIComponent(result)}`)
                          }}
                        >
                          {result}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

