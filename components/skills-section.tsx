"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const skills = [
  { 
    name: "MATLAB", 
    category: "Tools", 
    level: 75,
    icon: "M",
    description: "3GPP-compliant simulations, signal processing algorithms"
  },
  { 
    name: "Python", 
    category: "Tools", 
    level: 65,
    icon: "Py",
    description: "Deep learning, data analysis, automation"
  },
  { 
    name: "CST Studio Suite", 
    category: "Tools", 
    level: 80,
    icon: "CST",
    description: "Antenna design, EM simulation, characterization"
  },
  { 
    name: "5G NR", 
    category: "Wireless", 
    level: 75,
    icon: "5G",
    description: "3GPP Release 15/16, uplink/downlink optimization"
  },
  { 
    name: "OFDM", 
    category: "Wireless", 
    level: 75,
    icon: "OF",
    description: "Subcarrier allocation, PAPR reduction, equalization"
  },
  { 
    name: "Massive MIMO", 
    category: "Wireless", 
    level: 75,
    icon: "MM",
    description: "Large-scale antenna systems, spatial multiplexing"
  },
  { 
    name: "Beamforming", 
    category: "Wireless", 
    level: 80,
    icon: "BF",
    description: "Digital/analog beamforming, beam management"
  },
  { 
    name: "MU-MIMO", 
    category: "Wireless", 
    level: 70,
    icon: "MU",
    description: "Multi-user detection, interference management"
  },
  { 
    name: "SRS-based CSI", 
    category: "Wireless", 
    level: 75,
    icon: "SR",
    description: "Channel estimation, Doppler-adaptive reuse"
  },
  { 
    name: "Deep Learning", 
    category: "AI/ML", 
    level: 65,
    icon: "DL",
    description: "CNN, RNN for channel prediction and estimation"
  },
  { 
    name: "Signal Processing", 
    category: "Core", 
    level: 62,
    icon: "SP",
    description: "Digital filters, spectral analysis, modulation"
  },
  { 
    name: "3GPP Standards", 
    category: "Standards", 
    level: 68,
    icon: "3G",
    description: "Specification compliance, protocol implementation"
  },
  { 
    name: "TDD Systems", 
    category: "Wireless", 
    level: 70,
    icon: "TD",
    description: "Time-division duplexing, frame structure"
  },
  { 
    name: "Precoding", 
    category: "Wireless", 
    level: 72,
    icon: "PC",
    description: "ZF, RZF, BD, JSDM precoding techniques"
  },
]

const categories = ["All", "Tools", "Wireless", "AI/ML", "Core", "Standards"]

function SkillCard({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105"
      style={{
        boxShadow: isHovered ? "0 0 30px rgba(0, 255, 255, 0.2)" : "none",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        {/* Animated Wave Pattern */}
        <svg className="absolute bottom-0 left-0 right-0 h-16 opacity-20" preserveAspectRatio="none" viewBox="0 0 100 20">
          <motion.path
            d="M0 10 Q 25 0, 50 10 T 100 10 V 20 H 0 Z"
            fill="url(#waveGradient)"
            animate={{
              d: isHovered
                ? "M0 8 Q 25 2, 50 8 T 100 8 V 20 H 0 Z"
                : "M0 10 Q 25 0, 50 10 T 100 10 V 20 H 0 Z",
            }}
            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
          <span className="text-lg font-bold text-primary font-mono">{skill.icon}</span>
        </div>

        {/* Name & Category */}
        <h3 className="text-lg font-semibold text-foreground mb-1">{skill.name}</h3>
        <span className="text-xs text-accent uppercase tracking-wider">{skill.category}</span>

        {/* Description */}
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{skill.description}</p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Proficiency</span>
            <span className="text-primary font-mono">{skill.level}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full glass-card text-sm text-primary mb-4"
            >
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Skills & <span className="text-primary text-glow-cyan">Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Specialized in cutting-edge wireless communication technologies, simulation tools, 
              and AI/ML techniques for next-generation systems.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
