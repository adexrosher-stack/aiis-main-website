"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", flag: "🇪🇹" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: "🇹🇿" },
]

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = React.useState("en")

  // This would be replaced with actual i18n implementation
  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    // In a real implementation, you would use Next.js i18n routing
    // router.push(pathname, { locale: value })
  }

  const selectedLanguage = languages.find((lang) => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-1 border-none bg-transparent hover:bg-primary/10">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-flex items-center gap-1">
            <span className="mr-1">{selectedLanguage?.flag}</span>
            {selectedLanguage?.name}
          </span>
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={handleLanguageChange}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem key={lang.code} value={lang.code} className="cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-base">{lang.flag}</span>
                <div className="flex flex-col">
                  <span>{lang.name}</span>
                  <span className="text-xs text-muted-foreground">{lang.nativeName}</span>
                </div>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

