"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "Deep Learning Based Channel Estimation Using SRS",
    category: "AI/ML",
    description: "Developed an AI/ML-based precoder design for 5G NR gNB using SRS-based uplink CSI estimation. Implemented deep learning models for accurate channel prediction in high-mobility scenarios.",
    technologies: ["Python", "TensorFlow", "MATLAB", "5G NR", "Deep Learning"],
    highlights: [
      "95% CSI estimation accuracy",
      "Real-time processing capability",
      "3GPP Release 16 compliant"
    ],
    image: "/project1.jpg",
    github: "#",
    paper: "#",
  },
  {
    id: 2,
    title: "Doppler-Aware CSI Reuse Framework",
    category: "5G NR",
    description: "Created a slot-level performance evaluation framework for Doppler-adaptive CSI reuse in 5G NR MU-MIMO systems. Optimized BLER and throughput analysis across various mobility scenarios.",
    technologies: ["MATLAB", "5G NR", "MU-MIMO", "ZF Precoding", "RZF"],
    highlights: [
      "30% throughput improvement",
      "Mobility-aware optimization",
      "Published at IEEE NCC 2026"
    ],
    image: "/project2.jpg",
    github: "#",
    paper: "#",
  },
  {
    id: 3,
    title: "MATLAB 3GPP-Compliant Simulation Pipeline",
    category: "Simulation",
    description: "Built comprehensive simulation framework for 5G NR systems including synchronization, frequency hopping techniques, and ZF, RZF, BD precoders with slot-level granularity.",
    technologies: ["MATLAB", "3GPP", "Signal Processing", "BD Precoding", "JSDM"],
    highlights: [
      "Complete 3GPP compliance",
      "Modular architecture",
      "10+ precoding algorithms"
    ],
    image: "/project3.jpg",
    github: "#",
    paper: "#",
  },
  {
    id: 4,
    title: "Wideband Transmitarray Antenna Simulation",
    category: "Antenna",
    description: "Designed and simulated CST-based 2-bit filtering unit cells for wideband transmitarray antennas. Performed phase and transmission analysis with comprehensive antenna characterization.",
    technologies: ["CST Studio", "Antenna Design", "EM Simulation", "RF Engineering"],
    highlights: [
      "Wideband operation",
      "2-bit phase control",
      "High gain performance"
    ],
    image: "/project4.jpg",
    github: "#",
    paper: "#",
  },
  {
    id: 5,
    title: "Multicore Optical Fiber Crosstalk Analysis",
    category: "Optical",
    description: "Developed MATLAB-based optical communication analysis tools for inter-core crosstalk optimization in high-capacity optical fiber systems.",
    technologies: ["MATLAB", "Optical Communication", "Signal Processing", "Analysis"],
    highlights: [
      "Crosstalk minimization",
      "High-capacity systems",
      "Performance optimization"
    ],
    image: "/project5.jpg",
    github: "#",
    paper: "#",
  },
]

const categories = ["All", "AI/ML", "5G NR", "Simulation", "Antenna", "Optical"]

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] gradient-border">
        {/* Image/Visualization Area */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-background overflow-hidden">
          {/* Animated Grid */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
          
          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-24 h-24 border-2 border-primary/30 rounded-lg" />
          </motion.div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-primary">
            {project.category}
          </div>

          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {project.highlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {highlight}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Details
            </button>
            <a
              href={project.github}
              className="px-4 py-2 rounded-lg glass text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-2xl w-full glass-card rounded-2xl p-8 gradient-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="px-3 py-1 rounded-full glass text-xs font-medium text-primary">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-3">{project.title}</h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground mb-3">Key Achievements</h4>
              <div className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex-1 px-4 py-3 rounded-lg bg-primary text-primary-foreground text-center font-medium hover:opacity-90 transition-opacity"
              >
                View on GitHub
              </a>
              {project.paper && (
                <a
                  href={project.paper}
                  className="flex-1 px-4 py-3 rounded-lg glass text-center font-medium text-foreground hover:text-primary transition-colors"
                >
                  Read Paper
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
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
              Research Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Featured <span className="text-primary text-glow-cyan">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Cutting-edge research projects in wireless communication, AI/ML, and signal processing.
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
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
