"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      let startTime: number
      let animationFrame: number

      const startAnimation = (timestamp: number) => {
        startTime = timestamp
        animateCount(timestamp)
      }

      const animateCount = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * end)

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateCount)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(startAnimation)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

