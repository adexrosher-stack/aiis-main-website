"use client"

import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

interface LanguageToastProps {
  currentLanguage: string
}

export function LanguageToast({ currentLanguage }: LanguageToastProps) {
  const { toast } = useToast()

  useEffect(() => {
    // Show toast when language changes
    toast({
      title: "Language Changed",
      description: `The website language has been changed to ${getLanguageName(currentLanguage)}.`,
      action: (
        <Button variant="outline" size="sm" onClick={() => {}}>
          Undo
        </Button>
      ),
    })
  }, [currentLanguage, toast])

  return null
}

function getLanguageName(code: string): string {
  const languages: Record<string, string> = {
    en: "English",
    am: "Amharic",
    fr: "French",
    ar: "Arabic",
    sw: "Swahili",
  }

  return languages[code] || code
}

