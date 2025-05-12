"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface BattleArenaProps {
  environment: string
  children: React.ReactNode
  isAttacking: boolean
  attackDirection: "left" | "right" | null
  onAnimationComplete?: () => void
}

export default function BattleArena({
  environment,
  children,
  isAttacking,
  attackDirection,
  onAnimationComplete,
}: BattleArenaProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; duration: number }>
  >([])

  // Generate environment-specific particles when an attack happens
  useEffect(() => {
    if (isAttacking) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 2 + 1,
      }))
      setParticles(newParticles)

      const timer = setTimeout(() => {
        setParticles([])
        if (onAnimationComplete) onAnimationComplete()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isAttacking, onAnimationComplete])

  // Get environment-specific styles and elements
  const getEnvironmentStyles = () => {
    switch (environment) {
      case "forest":
        return {
          bgImage: "/images/battle-backgrounds/forest-arena.png",
          particleColor: "bg-green-500",
          overlayGradient: "from-green-900/20 to-transparent",
        }
      case "desert":
        return {
          bgImage: "/images/battle-backgrounds/desert-arena.png",
          particleColor: "bg-amber-500",
          overlayGradient: "from-amber-900/20 to-transparent",
        }
      case "water":
        return {
          bgImage: "/images/battle-backgrounds/water-arena.png",
          particleColor: "bg-blue-500",
          overlayGradient: "from-blue-900/20 to-transparent",
        }
      case "mountain":
        return {
          bgImage: "/images/battle-backgrounds/mountain-arena.png",
          particleColor: "bg-stone-500",
          overlayGradient: "from-stone-900/20 to-transparent",
        }
      case "village":
        return {
          bgImage: "/images/battle-backgrounds/village-arena.png",
          particleColor: "bg-orange-500",
          overlayGradient: "from-orange-900/20 to-transparent",
        }
      default:
        return {
          bgImage: "/images/battle-backgrounds/training-arena.png",
          particleColor: "bg-gray-500",
          overlayGradient: "from-gray-900/20 to-transparent",
        }
    }
  }

  const { bgImage, particleColor, overlayGradient } = getEnvironmentStyles()

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage || "/placeholder.svg?height=400&width=800&query=anime battle arena"}
          alt={`${environment} battle arena`}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient}`}></div>
      </div>

      {/* Screen shake effect when attacking */}
      <motion.div
        className="relative z-10 w-full h-full"
        animate={
          isAttacking
            ? {
                x: [0, attackDirection === "right" ? -5 : 5, 0, attackDirection === "right" ? -3 : 3, 0],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
      >
        {/* Battle content (characters, effects, etc.) */}
        {children}

        {/* Environment particles */}
        <AnimatePresence>
          {isAttacking &&
            particles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute rounded-full ${particleColor} opacity-60`}
                initial={{
                  x: attackDirection === "right" ? "25%" : "75%",
                  y: "50%",
                  opacity: 0.8,
                }}
                animate={{
                  x: `${particle.x}%`,
                  y: `${particle.y}%`,
                  opacity: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: particle.duration }}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
              />
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Battle arena floor reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
    </div>
  )
}
