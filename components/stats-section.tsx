"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"

interface Stat {
  value: number
  label: string
  suffix?: string
}

export function StatsSection() {
  const stats: Stat[] = [
    { value: 500, label: "Graduates", suffix: "+" },
    { value: 300, label: "Current Students", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 20, label: "Faculty Members", suffix: "+" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center p-6 bg-white/10 rounded-lg"
        >
          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          <span className="text-sm text-gray-200 mt-2">{stat.label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

