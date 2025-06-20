"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Define program data structure
interface Program {
  id: string
  title: string
  level: "undergraduate" | "graduate" | "doctoral"
  format: "residential" | "remote" | "hybrid"
  duration: string
  credits: number
  campuses: string // Single string containing one or more campuses
  description: string
}

export function CourseFilter() {
  const [programs, setPrograms] = useState<Program[]>([
    {
      id: "diploma-in-theology",
      title: "Diploma in Theology (DipTh)",
      level: "undergraduate",
      format: "residential",
      duration: "2 years",
      credits: 60,
      campuses: "Addis Ababa",
      description:
        "The Diploma in Theology program offers essential theological training for those seeking to serve in ministry without completing a full bachelor's degree.",
    },
    {
      id: "bachelor-of-theology",
      title: "Bachelor of Theology (BTh)",
      level: "undergraduate",
      format: "residential",
      duration: "4 years",
      credits: 120,
      campuses: "Addis Ababa",
      description:
        "The Bachelor of Theology program provides students with a solid foundation in biblical studies, theology, church history, and practical ministry skills.",
    },
    {
      id: "master-of-divinity",
      title: "Master of Divinity (MDiv)",
      level: "graduate",
      format: "residential",
      duration: "3 years",
      credits: 90,
      campuses: "Addis Ababa",
      description:
        "A comprehensive, three-year residential program designed to prepare students for pastoral ministry, theological teaching, and leadership roles.",
    },
    {
      id: "master-of-theology",
      title: "Master of Theology (MTh)",
      level: "graduate",
      format: "hybrid",
      duration: "2 years",
      credits: 48,
      campuses: "Addis Ababa",
      description:
        "An advanced academic program designed to equip students with theological depth, critical research skills, and practical ministry applications.",
    },
    {
      id: "mth-in-practical-studies",
      title: "Master of Theology in Practical Studies (MTh-PS)",
      level: "graduate",
      format: "hybrid",
      duration: "2 years",
      credits: 48,
      campuses: "Addis Ababa, Adama",
      description:
        "Designed to equip students with practical ministry skills, leadership competence, and interdisciplinary knowledge.",
    },
    {
      id: "ma-in-counseling-psychology",
      title: "MA in Counseling Psychology",
      level: "graduate",
      format: "residential",
      duration: "2 years",
      credits: 48,
      campuses: "Addis Ababa",
      description:
        "Specialized program for counseling and pastoral care, integrating psychological principles with Christian counseling.",
    },
    {
      id: "ma-in-organizational-leadership",
      title: "MA in Organizational Leadership",
      level: "graduate",
      format: "residential",
      duration: "2 years",
      credits: 35,
      campuses: "Addis Ababa",
      description:
        "Leadership-focused program for professionals in church leadership, business, and nonprofit management.",
    },
    {
      id: "ma-in-developemt-studies",
      title: "MA in Developemt and Theological Studies",
      level: "graduate",
      format: "residential",
      duration: "2 years",
      credits: 35,
      campuses: "Addis Ababa, Adama",
      description:
        "Interdisciplinary program blending theology and development studies to address global challenges with faith-based solutions.",
    },
    {
      id: "doctor-of-philosophy",
      title: "Doctor of Philosophy (PhD)",
      level: "doctoral",
      format: "hybrid",
      duration: "3 years",
      credits: 60,
      campuses: "Addis Ababa",
      description:
        "Our premier doctoral program focusing on advanced research and scholarship in theology and related disciplines.",
    },
  ])

  const [filters, setFilters] = useState({
    level: [] as string[],
    format: [] as string[],
    duration: "" as string,
    campuses: [] as string[], // Added campuses filter
  })

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleLevelChange = (level: string) => {
    setFilters((prev) => {
      const newLevels = prev.level.includes(level) ? prev.level.filter((l) => l !== level) : [...prev.level, level]
      return { ...prev, level: newLevels }
    })
  }

  const handleFormatChange = (format: string) => {
    setFilters((prev) => {
      const newFormats = prev.format.includes(format)
        ? prev.format.filter((f) => f !== format)
        : [...prev.format, format]
      return { ...prev, format: newFormats }
    })
  }

  const handleCampusChange = (campus: string) => {
    setFilters((prev) => {
      const newCampuses = prev.campuses.includes(campus)
        ? prev.campuses.filter((c) => c !== campus)
        : [...prev.campuses, campus]
      return { ...prev, campuses: newCampuses }
    })
  }

  const handleDurationChange = (duration: string) => {
    setFilters((prev) => ({ ...prev, duration }))
  }

  const resetFilters = () => {
    setFilters({
      level: [],
      format: [],
      duration: "",
      campuses: [], // Reset campuses
    })
  }

  const filteredPrograms = programs.filter((program) => {
    const levelMatch = filters.level.length === 0 || filters.level.includes(program.level)
    const formatMatch = filters.format.length === 0 || filters.format.includes(program.format)
    const durationMatch =
      !filters.duration ||
      (filters.duration === "short" && Number.parseInt(program.duration) <= 2) ||
      (filters.duration === "long" && Number.parseInt(program.duration) > 2)
    const campusMatch =
      filters.campuses.length === 0 ||
      filters.campuses.some((campus) => program.campuses.includes(campus))

    return levelMatch && formatMatch && durationMatch && campusMatch
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Available Programs</h2>
        <Button
          variant="outline"
          className="flex items-center gap-2 md:hidden"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className={`md:block ${isFilterOpen ? "block" : "hidden"}`}>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Program Level</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="undergraduate"
                      checked={filters.level.includes("undergraduate")}
                      onCheckedChange={() => handleLevelChange("undergraduate")}
                    />
                    <Label htmlFor="undergraduate">Undergraduate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="graduate"
                      checked={filters.level.includes("graduate")}
                      onCheckedChange={() => handleLevelChange("graduate")}
                    />
                    <Label htmlFor="graduate">Graduate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="doctoral"
                      checked={filters.level.includes("doctoral")}
                      onCheckedChange={() => handleLevelChange("doctoral")}
                    />
                    <Label htmlFor="doctoral">Doctoral</Label>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border"></div>

              <div>
                <h3 className="font-medium mb-3">Format</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="residential"
                      checked={filters.format.includes("residential")}
                      onCheckedChange={() => handleFormatChange("residential")}
                    />
                    <Label htmlFor="residential">Residential</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remote"
                      checked={filters.format.includes("remote")}
                      onCheckedChange={() => handleFormatChange("remote")}
                    />
                    <Label htmlFor="remote">Remote</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hybrid"
                      checked={filters.format.includes("hybrid")}
                      onCheckedChange={() => handleFormatChange("hybrid")}
                    />
                    <Label htmlFor="hybrid">Hybrid</Label>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border"></div>

              <div>
                <h3 className="font-medium mb-3">Campuses</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="Addis Ababa"
                      checked={filters.campuses.includes("Addis Ababa")}
                      onCheckedChange={() => handleCampusChange("Addis Ababa")}
                    />
                    <Label htmlFor="Addis Ababa">Addis Ababa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="Adama"
                      checked={filters.campuses.includes("Adama")}
                      onCheckedChange={() => handleCampusChange("Adama")}
                    />
                    <Label htmlFor="Adama">Adama</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="Mekelle"
                      checked={filters.campuses.includes("Mekelle")}
                      onCheckedChange={() => handleCampusChange("Mekelle")}
                    />
                    <Label htmlFor="Mekelle">Mekelle</Label>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border"></div>

              <div>
                <h3 className="font-medium mb-3">Duration</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="short"
                      name="duration"
                      value="short"
                      checked={filters.duration === "short"}
                      onChange={() => handleDurationChange("short")}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="short">2 years or less</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="long"
                      name="duration"
                      value="long"
                      checked={filters.duration === "long"}
                      onChange={() => handleDurationChange("long")}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="long">More than 2 years</Label>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="col-span-1 md:col-span-3 space-y-4">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 mx-auto text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <h3 className="mt-4 text-lg font-medium">No programs match your filters</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filter criteria</p>
              <Button variant="outline" className="mt-4" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredPrograms.map((program) => (
                <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 p-4 flex justify-between items-center">
                      <h3 className="font-bold">{program.title}</h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{program.level}</span>
                    </div>
                    <div className="p-4 space-y-4">
                      <p className="text-muted-foreground line-clamp-2">{program.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Format</p>
                          <p className="font-medium capitalize">{program.format}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Duration</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Credits</p>
                          <p className="font-medium">{program.credits}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Campuses</p>
                          <p className="font-medium">{program.campuses}</p>
                        </div>
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/programs/${program.id}`}>View Details</Link

>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}