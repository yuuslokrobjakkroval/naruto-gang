"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Zap, Shield, Sword } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface JutsuOption {
  name: string
  power: number
  chakraCost: number
  type: string
}

interface BattleControlsProps {
  jutsuOptions: JutsuOption[]
  onJutsuSelect: (index: number) => void
  currentChakra: number
  isDisabled: boolean
}

export default function BattleControls({
  jutsuOptions,
  onJutsuSelect,
  currentChakra,
  isDisabled,
}: BattleControlsProps) {
  const [hoveredJutsu, setHoveredJutsu] = useState<number | null>(null)

  // Get jutsu type icon
  const getJutsuIcon = (type: string) => {
    switch (type) {
      case "fire":
      case "lightning":
      case "rasengan":
      case "chidori":
        return <Zap className="mr-1" size={16} />
      case "earth":
      case "sand":
      case "shadow":
        return <Shield className="mr-1" size={16} />
      default:
        return <Sword className="mr-1" size={16} />
    }
  }

  // Get jutsu button color
  const getJutsuButtonColor = (type: string, isDisabled: boolean) => {
    if (isDisabled) return "bg-gray-400"

    switch (type) {
      case "fire":
        return "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
      case "water":
        return "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
      case "lightning":
        return "bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600"
      case "earth":
        return "bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900"
      case "wind":
        return "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
      case "rasengan":
        return "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
      case "chidori":
        return "bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-500 hover:to-purple-700"
      case "sharingan":
        return "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
      case "sand":
        return "bg-gradient-to-r from-yellow-500 to-amber-700 hover:from-yellow-600 hover:to-amber-800"
      case "medical":
        return "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
      case "shadow":
        return "bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800"
    }
  }

  return (
    <div className="relative">
      {/* Jutsu tooltip */}
      <AnimatePresence>
        {hoveredJutsu !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white p-3 rounded-md shadow-lg z-10 pointer-events-none"
          >
            <div className="text-center font-bold mb-1">{jutsuOptions[hoveredJutsu].name}</div>
            <div className="flex justify-between text-xs space-x-4">
              <div>
                Power: <span className="text-orange-400">{jutsuOptions[hoveredJutsu].power}</span>
              </div>
              <div>
                Chakra: <span className="text-blue-400">{jutsuOptions[hoveredJutsu].chakraCost}</span>
              </div>
              <div>
                Type: <span className="text-green-400">{jutsuOptions[hoveredJutsu].type}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jutsu buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {jutsuOptions.map((jutsu, index) => {
          const isJutsuDisabled = isDisabled || currentChakra < jutsu.chakraCost

          return (
            <motion.div
              key={index}
              whileHover={{ scale: isJutsuDisabled ? 1 : 1.05 }}
              whileTap={{ scale: isJutsuDisabled ? 1 : 0.95 }}
            >
              <Button
                onClick={() => onJutsuSelect(index)}
                disabled={isJutsuDisabled}
                onMouseEnter={() => setHoveredJutsu(index)}
                onMouseLeave={() => setHoveredJutsu(null)}
                className={`w-full ${getJutsuButtonColor(jutsu.type, isJutsuDisabled)} text-white text-xs md:text-sm relative overflow-hidden`}
              >
                {getJutsuIcon(jutsu.type)}
                <span className="mr-1">{jutsu.name}</span>
                <span className="text-xs opacity-80">({jutsu.chakraCost})</span>

                {/* Chakra cost indicator */}
                <div
                  className="absolute bottom-0 left-0 h-1 bg-blue-300 opacity-50"
                  style={{ width: `${(jutsu.chakraCost / 30) * 100}%` }}
                ></div>
              </Button>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
