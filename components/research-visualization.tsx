"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function WaveVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    let animationId: number
    let time = 0
    
    const draw = () => {
      ctx.fillStyle = "rgba(8, 8, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw OFDM subcarriers
      for (let i = 0; i < 32; i++) {
        const x = (i / 32) * canvas.width
        const frequency = 1 + i * 0.2
        const amplitude = 20 + Math.sin(time * 0.01 + i * 0.3) * 10
        
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 + Math.sin(time * 0.02 + i) * 0.2})`
        ctx.lineWidth = 2
        
        for (let y = 0; y < canvas.height; y += 2) {
          const wave = Math.sin(y * 0.05 * frequency + time * 0.05) * amplitude
          ctx.lineTo(x + wave, y)
        }
        ctx.stroke()
      }
      
      time++
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => cancelAnimationFrame(animationId)
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      className="w-full h-full rounded-lg"
    />
  )
}

function ConstellationDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    let animationId: number
    let time = 0
    
    // 16-QAM constellation points
    const points = [
      [-3, -3], [-3, -1], [-3, 1], [-3, 3],
      [-1, -3], [-1, -1], [-1, 1], [-1, 3],
      [1, -3], [1, -1], [1, 1], [1, 3],
      [3, -3], [3, -1], [3, 1], [3, 3],
    ]
    
    const draw = () => {
      ctx.fillStyle = "rgba(8, 8, 20, 0.95)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const scale = 20
      
      // Draw grid
      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)"
      ctx.lineWidth = 1
      
      // Horizontal line
      ctx.beginPath()
      ctx.moveTo(0, centerY)
      ctx.lineTo(canvas.width, centerY)
      ctx.stroke()
      
      // Vertical line
      ctx.beginPath()
      ctx.moveTo(centerX, 0)
      ctx.lineTo(centerX, canvas.height)
      ctx.stroke()
      
      // Draw constellation points
      points.forEach((point, i) => {
        const noise = Math.sin(time * 0.05 + i) * 3
        const x = centerX + point[0] * scale + noise
        const y = centerY + point[1] * scale + Math.cos(time * 0.05 + i) * 3
        
        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 10)
        gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)")
        gradient.addColorStop(1, "rgba(0, 255, 255, 0)")
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, 10, 0, Math.PI * 2)
        ctx.fill()
        
        // Center dot
        ctx.fillStyle = "#00ffff"
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fill()
      })
      
      time++
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => cancelAnimationFrame(animationId)
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className="w-full h-full rounded-lg"
    />
  )
}

function BeamformingPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    let animationId: number
    let time = 0
    
    const draw = () => {
      ctx.fillStyle = "rgba(8, 8, 20, 0.95)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height - 20
      
      // Draw beams
      for (let beam = 0; beam < 5; beam++) {
        const angle = -Math.PI / 2 + (beam - 2) * 0.3 + Math.sin(time * 0.02) * 0.1
        const length = 150
        
        const gradient = ctx.createLinearGradient(
          centerX,
          centerY,
          centerX + Math.cos(angle) * length,
          centerY + Math.sin(angle) * length
        )
        
        const hue = beam === 2 ? "0, 255, 255" : "139, 92, 246"
        gradient.addColorStop(0, `rgba(${hue}, 0.8)`)
        gradient.addColorStop(1, `rgba(${hue}, 0)`)
        
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        
        // Draw beam cone
        const spread = 0.15
        ctx.lineTo(
          centerX + Math.cos(angle - spread) * length,
          centerY + Math.sin(angle - spread) * length
        )
        ctx.lineTo(
          centerX + Math.cos(angle + spread) * length,
          centerY + Math.sin(angle + spread) * length
        )
        ctx.closePath()
        
        ctx.fillStyle = gradient
        ctx.fill()
      }
      
      // Draw antenna array
      for (let i = 0; i < 8; i++) {
        const x = centerX - 35 + i * 10
        ctx.fillStyle = "#00ffff"
        ctx.fillRect(x, centerY, 6, 15)
      }
      
      time++
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => cancelAnimationFrame(animationId)
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      className="w-full h-full rounded-lg"
    />
  )
}

function SpectrumAnalyzer() {
  const [bars, setBars] = useState<number[]>(Array(32).fill(50))
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map((_, i) => {
        const base = 30 + Math.sin(Date.now() * 0.002 + i * 0.5) * 20
        return base + Math.random() * 30
      }))
    }, 50)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="w-full h-full flex items-end justify-between gap-1 p-4 bg-card/50 rounded-lg">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 rounded-t transition-all duration-75"
          style={{
            height: `${height}%`,
            background: `linear-gradient(to top, #00ffff, ${i % 2 === 0 ? "#8b5cf6" : "#00ffff"})`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  )
}

export function ResearchVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const visualizations = [
    {
      title: "OFDM Subcarrier Animation",
      description: "Real-time visualization of orthogonal frequency-division multiplexing subcarriers",
      component: <WaveVisualization />,
    },
    {
      title: "16-QAM Constellation",
      description: "Quadrature amplitude modulation constellation diagram with noise effects",
      component: <ConstellationDiagram />,
    },
    {
      title: "Beamforming Patterns",
      description: "Animated beam steering visualization for massive MIMO antenna arrays",
      component: <BeamformingPattern />,
    },
    {
      title: "Spectrum Analyzer",
      description: "Real-time frequency spectrum visualization dashboard",
      component: <SpectrumAnalyzer />,
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
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
              Live Simulations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Research <span className="text-primary text-glow-cyan">Visualizations</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Interactive visualizations of wireless communication concepts and research areas.
            </motion.p>
          </div>

          {/* Visualizations Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {visualizations.map((viz, index) => (
              <motion.div
                key={viz.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 gradient-border"
              >
                <div className="h-48 mb-4 bg-background/50 rounded-lg overflow-hidden">
                  {viz.component}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{viz.title}</h3>
                <p className="text-sm text-muted-foreground">{viz.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
