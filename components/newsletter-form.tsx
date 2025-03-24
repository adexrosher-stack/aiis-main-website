"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setErrorMessage("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setStatus("success")
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input
          placeholder="Your email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={isSubmitting || status === "success"}
        />
        <Button type="submit" disabled={isSubmitting || status === "success"}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      {status === "success" && (
        <Alert
          variant="default"
          className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-900"
        >
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>Thank you for subscribing to our newsletter!</AlertDescription>
        </Alert>
      )}

      {status === "error" && (
        <Alert
          variant="destructive"
          className="bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-900"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

