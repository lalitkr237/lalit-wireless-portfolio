"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const timeline = [
  {
    year: "2024 - Present",
    title: "M.Tech in Communication Systems & Signal Processing",
    institution: "Indian Institute of Technology Patna",
    description: "Specializing in 5G NR uplink optimization and MU-MIMO systems",
    highlight: true,
  },
  {
    year: "2018 - 2022",
    title: "B.Tech in Electronics and Communication Engineering",
    institution: "Muzaffarpur Institute of Technology,(GOVT. OF BIHAR)",
    description: "Foundation in communication and signal processing",
    highlight: false,
  },
]

const researchInterests = [
  "5G NR Systems",
  "MU-MIMO",
  "CSI Estimation",
  "Beamforming",
  "AI for Wireless",
  "OFDM",
  "Precoding",
  "3GPP Standards",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full glass-card text-sm text-primary mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Pioneering the Future of{" "}
              <span className="text-primary text-glow-cyan">Wireless Communication</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A passionate researcher dedicated to advancing wireless communication systems 
              through innovative signal processing techniques and AI-driven solutions.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-8 gradient-border"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Profile
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am an M.Tech student in <span className="text-primary">Communication Systems & Signal Processing</span> at 
                  the <span className="text-foreground font-medium">Indian Institute of Technology Patna</span>, 
                  focused on advancing 5G NR uplink optimization and next-generation wireless technologies.
                </p>
                <p>
                  My research is part of an industry-collaborative project funded by <span className="text-accent">Rakuten Mobile</span>, 
                  where I work on developing cutting-edge solutions for MU-MIMO systems, CSI estimation, 
                  and AI-driven signal processing techniques.
                </p>
                <p>
                  I am passionate about bridging the gap between theoretical research and practical 
                  implementations through extensive 3GPP-compliant MATLAB simulations and deep learning approaches.
                </p>
              </div>

              {/* Research Interests Tags */}
              <div className="mt-8">
                <h4 className="text-sm font-medium text-foreground mb-4">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Education Timeline
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      item.highlight ? "bg-primary glow-cyan" : "bg-muted"
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${item.highlight ? "bg-primary-foreground" : "bg-muted-foreground"}`} />
                    </div>

                    <div className={`glass-card rounded-xl p-6 ${item.highlight ? "gradient-border" : ""}`}>
                      <span className="text-xs font-mono text-primary">{item.year}</span>
                      <h4 className="text-lg font-semibold text-foreground mt-2">{item.title}</h4>
                      <p className="text-sm text-accent mt-1">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Radar Chart Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 }}
                className="glass-card rounded-2xl p-6 mt-8"
              >
                <h4 className="text-sm font-medium text-foreground mb-4 text-center">Core Competencies</h4>
                <div className="relative w-48 h-48 mx-auto">
                  {/* Radar Background */}
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {[1, 2, 3, 4].map((level) => (
                      <polygon
                        key={level}
                        points="100,10 180,60 160,150 40,150 20,60"
                        fill="none"
                        stroke="currentColor"
                        className="text-border"
                        strokeWidth="1"
                        transform={`scale(${level * 0.25}) translate(${(1 - level * 0.25) * 200}, ${(1 - level * 0.25) * 200})`}
                        style={{ transformOrigin: "center" }}
                      />
                    ))}
                    {/* Skill Area */}
                    <polygon
                      points="100,20 170,55 150,140 50,140 30,55"
                      fill="url(#radarGradient)"
                      stroke="#00ffff"
                      strokeWidth="2"
                      className="animate-pulse"
                    />
                    <defs>
                      <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
                        <stop offset="100%" stopColor="rgba(139,92,246,0.3)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Labels */}
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs text-primary">5G NR</span>
                  <span className="absolute top-1/4 right-0 text-xs text-primary">MIMO</span>
                  <span className="absolute bottom-1/4 right-4 text-xs text-primary">AI/ML</span>
                  <span className="absolute bottom-1/4 left-4 text-xs text-primary">MATLAB</span>
                  <span className="absolute top-1/4 left-0 text-xs text-primary">DSP</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
