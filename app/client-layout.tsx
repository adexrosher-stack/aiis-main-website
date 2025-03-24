"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the current path to determine if we're in the dashboard
  const isDashboard = typeof window !== "undefined" ? window.location.pathname.startsWith("/dashboard") : false

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {!isDashboard && <Header />}
          <main>
            {typeof window !== "undefined" && <ScrollToTop />}
            {children}
          </main>
          {!isDashboard && <Footer />}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

