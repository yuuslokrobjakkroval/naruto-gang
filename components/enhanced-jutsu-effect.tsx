"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

type JutsuType =
  | "fire"
  | "water"
  | "lightning"
  | "earth"
  | "wind"
  | "normal"
  | "sharingan"
  | "rasengan"
  | "chidori"
  | "sand"
  | "medical"
  | "shadow"

interface EnhancedJutsuEffectProps {
  type: JutsuType
  name: string
  power: number
  isActive: boolean
  position: "left" | "right"
  onComplete?: () => void
}

export default function EnhancedJutsuEffect({
  type,
  name,
  power,
  isActive,
  position,
  onComplete,
}: EnhancedJutsuEffectProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number; rotation: number; color: string }>
  >([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showName, setShowName] = useState(false)

  // Initialize effect when activated
  useEffect(() => {
    if (isActive) {
      // Show jutsu name
      setShowName(true)
      setTimeout(() => setShowName(false), 800)

      // Generate particles based on jutsu type
      const colors = getJutsuColors(type)
      const newParticles = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        size: Math.random() * 15 + 5,
        delay: Math.random() * 0.8,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
      setParticles(newParticles)

      // For powerful jutsu, add confetti effect
      if (power > 20) {
        const confettiCanvas = canvasRef.current
        if (confettiCanvas) {
          const context = confettiCanvas.getContext("2d")
          if (context) {
            // Clear previous confetti
            context.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height)

            // Create confetti effect
            const confettiColors = getJutsuColors(type)
            const confettiSettings = {
              particleCount: 100,
              spread: 70,
              origin: { y: 0.5, x: position === "left" ? 0.25 : 0.75 },
              colors: confettiColors,
              disableForReducedMotion: true,
            }

            confetti.create(confettiCanvas, {
              resize: true,
              useWorker: true,
            })(confettiSettings)
          }
        }
      }

      // Call onComplete after animation finishes
      const timer = setTimeout(() => {
        if (onComplete) onComplete()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isActive, onComplete, power, position, type])

  // Get colors based on jutsu type
  const getJutsuColors = (jutsuType: JutsuType): string[] => {
    switch (jutsuType) {
      case "fire":
        return ["#ff4500", "#ff8c00", "#ffcc00", "#ff0000"]
      case "water":
        return ["#00bfff", "#1e90ff", "#87cefa", "#4169e1"]
      case "lightning":
        return ["#ffff00", "#ffd700", "#f0e68c", "#add8e6"]
      case "earth":
        return ["#8b4513", "#a0522d", "#cd853f", "#d2b48c"]
      case "wind":
        return ["#98fb98", "#90ee90", "#3cb371", "#2e8b57"]
      case "rasengan":
        return ["#1e90ff", "#00bfff", "#87cefa", "#b0e0e6"]
      case "chidori":
        return ["#00ffff", "#00bfff", "#1e90ff", "#f0ffff"]
      case "sharingan":
        return ["#8b0000", "#b22222", "#cd5c5c", "#ff0000"]
      case "sand":
        return ["#f4a460", "#d2b48c", "#deb887", "#f5deb3"]
      case "medical":
        return ["#90ee90", "#98fb98", "#00fa9a", "#00ff7f"]
      case "shadow":
        return ["#2f4f4f", "#696969", "#808080", "#a9a9a9"]
      default:
        return ["#dcdcdc", "#d3d3d3", "#c0c0c0", "#a9a9a9"]
    }
  }

  // Get main effect style based on jutsu type
  const getMainEffectStyle = () => {
    const baseStyle = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"

    switch (type) {
      case "fire":
        return `${baseStyle} bg-gradient-radial from-yellow-500 via-orange-500 to-red-600 shadow-[0_0_50px_#ff4500]`
      case "water":
        return `${baseStyle} bg-gradient-radial from-blue-300 via-blue-500 to-blue-700 shadow-[0_0_50px_#1e90ff]`
      case "lightning":
        return `${baseStyle} bg-gradient-radial from-yellow-200 via-yellow-400 to-blue-500 shadow-[0_0_50px_#ffff00]`
      case "earth":
        return `${baseStyle} bg-gradient-radial from-amber-300 via-amber-600 to-amber-900 shadow-[0_0_50px_#8b4513]`
      case "wind":
        return `${baseStyle} bg-gradient-radial from-green-200 via-green-400 to-green-600 shadow-[0_0_50px_#98fb98]`
      case "rasengan":
        return `${baseStyle} bg-gradient-radial from-blue-300 via-blue-500 to-blue-700 shadow-[0_0_50px_#1e90ff]`
      case "chidori":
        return `${baseStyle} bg-gradient-radial from-blue-300 via-blue-500 to-purple-600 shadow-[0_0_50px_#00ffff]`
      case "sharingan":
        return `${baseStyle} bg-gradient-radial from-red-500 via-red-600 to-red-800 shadow-[0_0_50px_#8b0000]`
      case "sand":
        return `${baseStyle} bg-gradient-radial from-yellow-200 via-amber-400 to-amber-600 shadow-[0_0_50px_#f4a460]`
      case "medical":
        return `${baseStyle} bg-gradient-radial from-green-300 via-green-500 to-green-700 shadow-[0_0_50px_#90ee90]`
      case "shadow":
        return `${baseStyle} bg-gradient-radial from-gray-500 via-gray-700 to-gray-900 shadow-[0_0_50px_#2f4f4f]`
      default:
        return `${baseStyle} bg-gradient-radial from-gray-300 via-gray-500 to-gray-700 shadow-[0_0_50px_#a9a9a9]`
    }
  }

  // Get animation based on jutsu type
  const getAnimationVariants = () => {
    const baseVariants = {
      initial: {
        opacity: 0,
        scale: 0.2,
      },
      animate: {
        opacity: 1,
        scale: 1,
      },
      exit: {
        opacity: 0,
        scale: 2,
      },
    }

    switch (type) {
      case "fire":
        return {
          ...baseVariants,
          animate: {
            ...baseVariants.animate,
            rotate: [0, 45, -45, 0],
            scale: [0.2, 1.2, 1],
          },
        }
      case "water":
        return {
          ...baseVariants,
          animate: {
            ...baseVariants.animate,
            borderRadius: ["50%", "40%", "50%", "45%", "50%"],
            scale: [0.2, 1.1, 0.9, 1],
          },
        }
      case "lightning":
        return {
          ...baseVariants,
          animate: {
            ...baseVariants.animate,
            scale: [0.2, 0.8, 1.2, 0.9, 1.1, 1],
            opacity: [0, 1, 0.7, 1, 0.8, 1],
          },
        }
      case "rasengan":
        return {
          ...baseVariants,
          animate: {
            ...baseVariants.animate,
            rotate: [0, 180, 360],
            scale: [0.2, 1.1, 1],
          },
        }
      case "chidori":
        return {
          ...baseVariants,
          animate: {
            ...baseVariants.animate,
            scale: [0.2, 1.3, 0.9, 1.1, 1],
            opacity: [0, 1, 0.8, 1, 0.9, 1],
          },
        }
      default:
        return baseVariants
    }
  }

  // Get special effect based on jutsu type
  const renderSpecialEffect = () => {
    switch (type) {
      case "rasengan":
        return (
          <>
            <div className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-70 animate-spin"></div>
            <div
              className="absolute inset-2 rounded-full border-4 border-blue-400 opacity-60 animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border-4 border-blue-500 opacity-50 animate-spin"
              style={{ animationDuration: "0.5s" }}
            ></div>
          </>
        )
      case "chidori":
        return (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 h-1 bg-blue-300 animate-pulse"
                style={{
                  width: `${Math.random() * 40 + 20}px`,
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  opacity: Math.random() * 0.5 + 0.5,
                  animationDuration: `${Math.random() * 0.5 + 0.2}s`,
                }}
              ></div>
            ))}
          </>
        )
      case "sharingan":
        return (
          <>
            <div className="absolute inset-4 rounded-full bg-black"></div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-8 bg-black rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateY(-12px)`,
                }}
              ></div>
            ))}
          </>
        )
      case "fire":
        return (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-orange-500 rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 15 + 5}px`,
                  height: `${Math.random() * 15 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animationDuration: `${Math.random() * 0.8 + 0.4}s`,
                }}
              ></div>
            ))}
          </>
        )
      default:
        return null
    }
  }

  if (!isActive) return null

  return (
    <>
      {/* Canvas for confetti effects */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30" width={800} height={600} />

      <AnimatePresence>
        {isActive && (
          <div
            className={`absolute z-20 ${position === "left" ? "left-1/4" : "right-1/4"} top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          >
            {/* Jutsu name display */}
            <AnimatePresence>
              {showName && (
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md font-bold text-lg z-30"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {name}!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main jutsu effect */}
            <motion.div
              className={`relative w-40 h-40 ${getMainEffectStyle()}`}
              variants={getAnimationVariants()}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.5 }}
            >
              {renderSpecialEffect()}
            </motion.div>

            {/* Particle effects */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: particle.rotation,
                }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0,
                  scale: 0,
                  rotate: particle.rotation + 360,
                }}
                transition={{
                  duration: 1.5,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  boxShadow: `0 0 10px ${particle.color}`,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
