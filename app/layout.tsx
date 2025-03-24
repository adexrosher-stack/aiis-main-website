import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "African Institute for International Studies",
  description: "Empowering future leaders through theological education",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

