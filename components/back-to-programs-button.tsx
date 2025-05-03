import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export function BackToProgramsButton() {
  return (
    <Button asChild variant="ghost" size="sm" className="gap-1 hover:text-primary">
      <Link href="/academics">
        <ChevronLeft className="h-4 w-4" />
        Back to Programs
      </Link>
    </Button>
  )
}