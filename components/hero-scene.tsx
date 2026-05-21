"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function WaveRings() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.PI / 2
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  const rings = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      radius: 1.5 + i * 0.4,
      opacity: 0.3 - i * 0.03,
    }))
  }, [])

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[0, 0, i * 0.2]}>
          <ringGeometry args={[ring.radius, ring.radius + 0.02, 64]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={ring.opacity} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}

function SignalBeams() {
  const beamsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.children.forEach((beam, i) => {
        const scale = 0.8 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3
        beam.scale.set(1, scale, 1)
      })
    }
  })

  const beamPositions = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2
      return {
        x: Math.cos(angle) * 3,
        y: Math.sin(angle) * 3,
        rotation: angle,
      }
    })
  }, [])

  return (
    <group ref={beamsRef} position={[0, 0, -3]}>
      {beamPositions.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, 0]} rotation={[0, 0, pos.rotation]}>
          <boxGeometry args={[0.02, 1.5, 0.02]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#00ffff" : "#8b5cf6"} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function AntennaArray() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  const antennas = useMemo(() => {
    const arr = []
    for (let x = -2; x <= 2; x++) {
      for (let y = -2; y <= 2; y++) {
        arr.push({ x: x * 0.3, y: y * 0.3 })
      }
    }
    return arr
  }, [])

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {antennas.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
        </mesh>
      ))}
      {/* Base plate */}
      <mesh position={[0, 0, -0.25]}>
        <boxGeometry args={[1.8, 1.8, 0.1]} />
        <meshBasicMaterial color="#1a1a3a" transparent opacity={0.9} />
      </mesh>
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <WaveRings />
        <SignalBeams />
        <AntennaArray />
      </Canvas>
    </div>
  )
}
