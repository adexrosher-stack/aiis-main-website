import type React from "react"
import type { Course } from "@/types/Course"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CourseFilterProps {
  courses: Course[]
  Additional: Course[]
}

const CourseFilter: React.FC<CourseFilterProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="border rounded-md p-4">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
          <p>Instructor: {course.instructor}</p>
          <p>Duration: {course.duration}</p>
          <Button asChild variant="outline" className="w-full mt-2">
            <Link href={`/programs/${course.id}`}>View Details</Link>
          </Button>
        </div>
      ))}
    </div>
  )
}

export default CourseFilter

