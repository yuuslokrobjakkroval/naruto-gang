"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface EnhancedHandSignsProps {
  isActive: boolean
  jutsuType: string
  position: "left" | "right"
  onComplete?: () => void
}

// Hand sign images mapping
const handSignImages: Record<string, string> = {
  Tiger: "/images/hand-signs/tiger.png",
  Snake: "/images/hand-signs/snake.png",
  Rat: "/images/hand-signs/rat.png",
  Ox: "/images/hand-signs/ox.png",
  Dragon: "/images/hand-signs/dragon.png",
  Horse: "/images/hand-signs/horse.png",
  Monkey: "/images/hand-signs/monkey.png",
  Hare: "/images/hand-signs/hare.png",
  Ram: "/images/hand-signs/ram.png",
  Bird: "/images/hand-signs/bird.png",
  Dog: "/images/hand-signs/dog.png",
  Boar: "/images/hand-signs/boar.png",
  "Focus Chakra": "/images/hand-signs/focus-chakra.png",
  "Focus Chakra to Eyes": "/images/hand-signs/focus-eyes.png",
  "Sand Control": "/images/hand-signs/sand-control.png",
  "Eye Activation": "/images/hand-signs/eye-activation.png",
}

export default function EnhancedHandSigns({ isActive, jutsuType, position, onComplete }: EnhancedHandSignsProps) {
  const [currentSign, setCurrentSign] = useState(0)
  const [signs, setSigns] = useState<string[]>([])
  const [chakraGlow, setChakraGlow] = useState(false)

  // Define hand signs based on jutsu type
  useEffect(() => {
    if (isActive) {
      let jutsuSigns: string[] = []

      // Different jutsu types have different hand sign sequences
      switch (jutsuType) {
        case "fire":
          jutsuSigns = ["Snake", "Ram", "Monkey", "Boar", "Horse", "Tiger"]
          break
        case "water":
          jutsuSigns = ["Tiger", "Ox", "Monkey", "Rabbit", "Ram", "Boar", "Ox", "Horse", "Monkey"]
          break
        case "lightning":
          jutsuSigns = ["Ox", "Rabbit", "Monkey", "Dragon", "Rat", "Bird", "Ox", "Snake", "Dog", "Tiger"]
          break
        case "earth":
          jutsuSigns = ["Tiger", "Hare", "Boar", "Dog"]
          break
        case "wind":
          jutsuSigns = ["Bird", "Boar", "Dragon", "Hare", "Ram"]
          break
        case "rasengan":
          jutsuSigns = ["Focus Chakra"]
          break
        case "chidori":
          jutsuSigns = ["Ox", "Rabbit", "Monkey"]
          break
        case "sharingan":
          jutsuSigns = ["Focus Chakra to Eyes", "Eye Activation"]
          break
        case "sand":
          jutsuSigns = ["Focus Chakra", "Sand Control"]
          break
        case "medical":
          jutsuSigns = ["Ox", "Tiger", "Horse"]
          break
        case "shadow":
          jutsuSigns = ["Rat"]
          break
        default:
          jutsuSigns = ["Tiger", "Boar", "Ox", "Dog"]
      }

      setSigns(jutsuSigns)
      setCurrentSign(0)

      // Show chakra glow effect
      setChakraGlow(true)
      setTimeout(() => setChakraGlow(false), 500)

      // Cycle through hand signs
      const interval = setInterval(() => {
        setCurrentSign((prev) => {
          if (prev >= jutsuSigns.length - 1) {
            clearInterval(interval)
            // Call onComplete after the last sign
            setTimeout(() => {
              if (onComplete) onComplete()
            }, 500)
            return prev
          }
          return prev + 1
        })
      }, 400)

      return () => clearInterval(interval)
    }
  }, [isActive, jutsuType, onComplete])

  if (!isActive || signs.length === 0) return null

  // Get chakra color based on jutsu type
  const getChakraColor = () => {
    switch (jutsuType) {
      case "fire":
        return "from-orange-500 to-red-600"
      case "water":
        return "from-blue-400 to-blue-600"
      case "lightning":
        return "from-yellow-300 to-blue-400"
      case "earth":
        return "from-amber-600 to-amber-800"
      case "wind":
        return "from-green-300 to-green-500"
      case "rasengan":
        return "from-blue-300 to-blue-500"
      case "chidori":
        return "from-blue-300 to-purple-500"
      case "sharingan":
        return "from-red-500 to-red-700"
      case "sand":
        return "from-yellow-400 to-amber-600"
      case "medical":
        return "from-green-400 to-green-600"
      case "shadow":
        return "from-gray-600 to-gray-800"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`absolute ${position === "left" ? "left-1/4" : "right-1/4"} top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20`}
        >
          {/* Chakra glow effect */}
          <AnimatePresence>
            {chakraGlow && (
              <motion.div
                className={`absolute inset-0 -m-6 rounded-full bg-gradient-radial ${getChakraColor()} opacity-50`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0.5 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>

          {/* Hand sign display */}
          <div className="relative bg-black bg-opacity-80 rounded-lg p-3 border border-gray-700 shadow-lg">
            <div className="text-center text-white font-bold mb-1 text-sm">{signs[currentSign]}</div>

            {/* Hand sign image */}
            <div className="relative w-16 h-16 mx-auto">
              <Image
                src={handSignImages[signs[currentSign]] || "/placeholder.svg?height=64&width=64&query=hand sign"}
                alt={signs[currentSign]}
                fill
                className="object-contain"
              />
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center mt-2 space-x-1">
              {signs.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentSign ? "bg-orange-500" : "bg-gray-500"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
