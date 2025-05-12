"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Award, Swords, Shield, Zap } from "lucide-react"

interface BattleStatusIndicatorProps {
  status: "ready" | "active" | "complete"
  winner: string | null
  turnName: string | null
  isAttacking: boolean
  isDefending: boolean
}

export default function BattleStatusIndicator({
  status,
  winner,
  turnName,
  isAttacking,
  isDefending,
}: BattleStatusIndicatorProps) {
  // Render different indicators based on battle status
  const renderContent = () => {
    switch (status) {
      case "ready":
        return (
          <motion.div
            className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Swords className="inline-block mr-2" size={20} />
            Ready for Battle
          </motion.div>
        )

      case "active":
        if (isAttacking) {
          return (
            <motion.div
              className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Zap className="inline-block mr-2" size={20} />
              {turnName} Attacks!
            </motion.div>
          )
        }

        if (isDefending) {
          return (
            <motion.div
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="inline-block mr-2" size={20} />
              {turnName} Defends!
            </motion.div>
          )
        }

        return (
          <motion.div
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Swords className="inline-block mr-2" size={20} />
            {turnName}'s Turn
          </motion.div>
        )

      case "complete":
        return (
          <motion.div
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.1, 1], opacity: 1 }}
            transition={{
              scale: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 1.5,
              },
              opacity: { duration: 0.5 },
            }}
          >
            <Award className="inline-block mr-2" size={20} />
            {winner} Wins!
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </div>
  )
}
