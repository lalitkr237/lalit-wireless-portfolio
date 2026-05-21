"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
  delay?: number
}

function StatCounter({ end, suffix = "", label, delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [end, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary text-glow-cyan">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  )
}

export function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mt-12 glass-card rounded-xl p-6"
    >
      <StatCounter end={3} suffix="+" label="IEEE Publications" delay={1600} />
      <StatCounter end={5} suffix="+" label="Research Projects" delay={1800} />
      <StatCounter end={10} suffix="+" label="MATLAB Simulations" delay={2000} />
      <StatCounter end={15} suffix="+" label="Wireless Technologies" delay={2200} />
      <StatCounter end={20} suffix="+" label="Technical Skills" delay={2400} />
    </motion.div>
  )
}
