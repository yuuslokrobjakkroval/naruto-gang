"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Shield } from "lucide-react"

interface CharacterBattleAvatarProps {
  name: string
  image: string
  isActive: boolean
  isAttacking: boolean
  isDefending: boolean
  isTakingDamage: boolean
  hp: number
  maxHp: number
  chakra: number
  maxChakra: number
  position: "left" | "right"
}

export default function CharacterBattleAvatar({
  name,
  image,
  isActive,
  isAttacking,
  isDefending,
  isTakingDamage,
  hp,
  maxHp,
  chakra,
  maxChakra,
  position,
}: CharacterBattleAvatarProps) {
  const [showDamageEffect, setShowDamageEffect] = useState(false)
  const [showDefenseEffect, setShowDefenseEffect] = useState(false)
  const [damageValue, setDamageValue] = useState<number | null>(null)
  const [previousHp, setPreviousHp] = useState(hp)

  // Detect HP changes to show damage numbers
  useEffect(() => {
    if (previousHp > hp) {
      const damage = previousHp - hp
      setDamageValue(damage)
      setShowDamageEffect(true)

      const timer = setTimeout(() => {
        setShowDamageEffect(false)
        setDamageValue(null)
      }, 1500)

      return () => clearTimeout(timer)
    }
    setPreviousHp(hp)
  }, [hp, previousHp])

  // Show defense effect when defending
  useEffect(() => {
    if (isDefending) {
      setShowDefenseEffect(true)
      const timer = setTimeout(() => {
        setShowDefenseEffect(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isDefending])

  // Calculate HP and chakra percentages
  const hpPercentage = Math.max(0, Math.min(100, (hp / maxHp) * 100))
  const chakraPercentage = Math.max(0, Math.min(100, (chakra / maxChakra) * 100))

  // Determine HP bar color based on remaining HP
  const getHpColor = () => {
    if (hpPercentage > 50) return "bg-green-500"
    if (hpPercentage > 25) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className={`flex flex-col items-center ${position === "left" ? "mr-auto" : "ml-auto"}`}>
      {/* Character container with effects */}
      <div className="relative">
        {/* Character image with animation states */}
        <motion.div
          className="relative w-28 h-28 md:w-36 md:h-36"
          animate={{
            scale: isAttacking ? 1.1 : isTakingDamage ? 0.9 : 1,
            x: isAttacking
              ? position === "left"
                ? [0, 20, 0]
                : [0, -20, 0]
              : isTakingDamage
                ? position === "left"
                  ? [-10, 0]
                  : [10, 0]
                : 0,
            rotate: isTakingDamage ? (position === "left" ? -5 : 5) : 0,
          }}
          transition={{
            duration: isAttacking ? 0.5 : isTakingDamage ? 0.3 : 0.2,
            type: "spring",
            stiffness: 200,
          }}
        >
          {/* Character image */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden border-4 shadow-lg"
            style={{ borderColor: isActive ? "#ff7800" : "#666" }}
          >
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" priority />

            {/* Red flash when taking damage */}
            <AnimatePresence>
              {isTakingDamage && (
                <motion.div
                  className="absolute inset-0 bg-red-500 mix-blend-overlay"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Active indicator */}
          {isActive && (
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          )}

          {/* Defense shield effect */}
          <AnimatePresence>
            {showDefenseEffect && (
              <motion.div
                className="absolute -inset-2 rounded-full border-4 border-blue-400 opacity-70"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 0.7 }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Shield
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400"
                  size={24}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Damage number popup */}
          <AnimatePresence>
            {showDamageEffect && damageValue !== null && (
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-2 py-1 rounded-md font-bold text-sm shadow-lg"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -20, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                -{damageValue}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Character name */}
      <h3 className="font-bold text-sm md:text-base mt-2 text-center">{name}</h3>

      {/* HP Bar with animation */}
      <div className="w-full mt-2">
        <div className="flex justify-between text-xs mb-1">
          <span>HP</span>
          <span>{Math.floor(hpPercentage)}%</span>
        </div>
        <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${getHpColor()} rounded-full`}
            initial={{ width: `${hpPercentage}%` }}
            animate={{ width: `${hpPercentage}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>

      {/* Chakra Bar with animation */}
      <div className="w-full mt-2">
        <div className="flex justify-between text-xs mb-1">
          <span>Chakra</span>
          <span>{Math.floor(chakraPercentage)}%</span>
        </div>
        <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            initial={{ width: `${chakraPercentage}%` }}
            animate={{ width: `${chakraPercentage}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>
    </div>
  )
}
