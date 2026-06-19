"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    title: "Teaching Assistant",
    organization: "Indian Institute of Technology Patna",
    period: "2024 - 2026",
    type: "Academic",
    description: "Assisting in teaching and lab sessions for core electronics and communication courses.",
    responsibilities: [
      {
        course: "Wireless Communication Lab (EC5201)-- 01/2026 - 05/2026",
        details: "Guiding students through practical experiments in wireless systems, MATLAB simulations, and antenna measurements.",
      },
      {
        course: "Analog Electronics Lab (EC2101)-- 07/2025 - 11/2025",
        details: "Supervising circuit design, amplifier experiments, and hands-on electronic measurements.",
      },
      {
        course: "Electrical Science Lab (EE1101)-- 07/2025 - 11/2025",
        details: "Teaching fundamental electrical concepts, circuit analysis, and instrumentation techniques.",
      },
    ],
    icon: "academic",
  },
  {
    title: "Industrial Training",
    organization: "East Central Railway",
    period: "Oct 2021 - Nov 2021",
    type: "Industry",
    description: "Gained hands-on experience in railway signaling and telecommunication systems.",
    responsibilities: [
      {
        course: "Signaling Systems ",
        details: "Studied electronic interlocking systems, track circuits, and automated train protection mechanisms.",
      },
      {
        course: "Telecom Infrastructure",
        details: "Explored optical fiber communication networks and radio communication systems used in railway operations.",
      },
    ],
    icon: "industry",
  },
]

const certifications = [
  {
    name: "5G for Everyone",
    issuer: "Qualcomm Wireless Academy",
    date: "2024",
    badge: "5G",
    color: "primary",
  },
  {
    name: "Introduction to Networks",
    issuer: "Cisco CCNA",
    date: "2023",
    badge: "NET",
    color: "accent",
  },
  {
    name: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco CCNA",
    date: "2023",
    badge: "SRW",
    color: "accent",
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
              Professional Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Experience & <span className="text-primary text-glow-cyan">Certifications</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Experience
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title + exp.organization}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      exp.type === "Academic" ? "bg-primary glow-cyan" : "bg-accent glow-violet"
                    }`}>
                      {exp.icon === "academic" ? (
                        <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                    </div>

                    <div className="glass-card rounded-xl p-6 gradient-border">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-sm text-accent">{exp.organization}</p>
                        </div>
                        <span className="text-xs font-mono text-primary px-3 py-1 rounded-full glass">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                      <div className="space-y-3">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="p-3 rounded-lg bg-muted/30">
                            <h5 className="text-sm font-medium text-foreground mb-1">{resp.course}</h5>
                            <p className="text-xs text-muted-foreground">{resp.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-card rounded-xl p-6 group hover:scale-[1.02] transition-transform cursor-pointer"
                    style={{
                      boxShadow: cert.color === "primary" 
                        ? "0 0 0 1px rgba(0, 255, 255, 0.1)" 
                        : "0 0 0 1px rgba(139, 92, 246, 0.1)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-sm ${
                        cert.color === "primary" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-accent/20 text-accent"
                      }`}>
                        {cert.badge}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-2 font-mono">{cert.date}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        cert.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                      }`}>
                        <svg className={`w-4 h-4 ${cert.color === "primary" ? "text-primary" : "text-accent"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="mt-8 glass-card rounded-xl p-6 gradient-border"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Actively pursuing additional certifications and courses in advanced wireless technologies, 
                  machine learning for communications, and next-generation network systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["6G Research", "AI/ML Courses", "RF Engineering", "Network Security"].map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
