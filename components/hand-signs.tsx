"use client"

import { useEffect, useState } from "react"

interface HandSignsProps {
  isActive: boolean
  jutsuType: string
  position: "left" | "right"
}

export default function HandSigns({ isActive, jutsuType, position }: HandSignsProps) {
  const [currentSign, setCurrentSign] = useState(0)
  const [signs, setSigns] = useState<string[]>([])

  useEffect(() => {
    if (isActive) {
      // Set hand signs based on jutsu type
      const jutsuSigns = getHandSigns(jutsuType)
      setSigns(jutsuSigns)

      // Reset to first sign
      setCurrentSign(0)

      // Cycle through signs
      const interval = setInterval(() => {
        setCurrentSign((prev) => {
          if (prev >= jutsuSigns.length - 1) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 300)

      return () => clearInterval(interval)
    }
  }, [isActive, jutsuType])

  // Get hand signs based on jutsu type
  const getHandSigns = (type: string): string[] => {
    switch (type) {
      case "fire":
        return ["Tiger", "Ram", "Monkey", "Boar", "Horse", "Tiger"]
      case "water":
        return ["Tiger", "Ox", "Monkey", "Rabbit", "Ram", "Boar", "Ox", "Horse", "Bird"]
      case "lightning":
        return ["Ox", "Rabbit", "Monkey", "Dragon", "Rat", "Bird", "Ox", "Snake", "Dog", "Tiger"]
      case "earth":
        return ["Tiger", "Hare", "Boar", "Dog"]
      case "wind":
        return ["Bird", "Monkey", "Dragon", "Rat", "Ox", "Snake", "Tiger"]
      case "rasengan":
        return ["Focus Chakra"]
      case "chidori":
        return ["Ox", "Rabbit", "Monkey"]
      case "sharingan":
        return ["Focus Chakra", "Eye Activation"]
      case "sand":
        return ["Focus Chakra", "Sand Control"]
      case "medical":
        return ["Ox", "Tiger", "Horse", "Rabbit"]
      case "shadow":
        return ["Rat", "Ox", "Monkey"]
      default:
        return ["Focus Chakra"]
    }
  }

  if (!isActive || signs.length === 0) return null

  return (
    <div
      className={`absolute z-20 ${position === "left" ? "left-1/4" : "right-1/4"} top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center`}
    >
      <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-md animate-handSign">
        {signs[currentSign]}
      </div>
    </div>
  )
}
