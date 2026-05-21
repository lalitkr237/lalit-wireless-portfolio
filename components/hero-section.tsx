"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HeroScene } from "./hero-scene"
import { HeroStats } from "./hero-stats"

const buttons = [
  { label: "Explore Research", href: "#projects", primary: true },
  { label: "View Projects", href: "#projects", primary: false },
  { label: "Publications", href: "#publications", primary: false },
  { label: "Download CV", href: "https://drive.google.com/drive/folders/1g4Of8DZfu5lGgegFFHUVyvuAd_GiO8rF?usp=drive_link", primary: false },
  { label: "Contact Me", href: "#contact", primary: false },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">M.Tech @ IIT Patna | Communication Systems & Signal Processing</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Lalit Kumar</span>
            <br />
            <span className="text-primary text-glow-cyan">Bharti</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
            <span className="text-foreground font-medium">Wireless Communication Engineer</span> | 
            <span className="text-primary"> 5G NR Researcher</span> | 
            <span className="text-accent"> MATLAB Simulation Developer</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Developing next-generation wireless systems using SRS-based channel estimation, 
            MU-MIMO precoding, AI-driven signal processing, and 3GPP-compliant simulations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {buttons.map((button, index) => (
              <Link
                key={button.label}
                href={button.href}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  button.primary
                    ? "bg-primary text-primary-foreground glow-cyan hover:scale-105"
                    : "glass-card text-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {button.label}
                  {button.primary && (
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Stats */}
          <HeroStats />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-0.0005 md:bottom-0.0001 left-1/2 -translate-x-1/2 z-0"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
