"use client"

import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"

interface BattleLogProps {
  entries: string[]
}

export default function BattleLog({ entries }: BattleLogProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new entries are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [entries])

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 shadow-inner">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-sm">Battle Log</h3>
        <span className="text-xs text-gray-500">{entries.length} entries</span>
      </div>

      <ScrollArea className="h-32" ref={scrollAreaRef as any}>
        <div className="space-y-1 pr-2">
          <AnimatePresence initial={false}>
            {entries.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm"
              >
                {/* Format different types of log entries */}
                {entry.includes("takes") ? (
                  <p className="text-red-600 dark:text-red-400">{entry}</p>
                ) : entry.includes("uses") ? (
                  <p className="text-blue-600 dark:text-blue-400">{entry}</p>
                ) : entry.includes("wins") ? (
                  <p className="text-green-600 dark:text-green-400 font-bold">{entry}</p>
                ) : entry.includes("defeated") ? (
                  <p className="text-orange-600 dark:text-orange-400">{entry}</p>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{entry}</p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </div>
  )
}
