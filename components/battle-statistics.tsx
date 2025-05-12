"use client"

import { useState } from "react"
import { BarChart, Activity, Zap, Timer, Award, Target } from "lucide-react"

interface JutsuUsage {
  name: string
  count: number
  totalDamage: number
  type: string
}

export interface BattleStats {
  playerName: string
  opponentName: string
  playerDamageDealt: number
  opponentDamageDealt: number
  playerJutsuUsed: JutsuUsage[]
  opponentJutsuUsed: JutsuUsage[]
  playerHighestDamage: number
  opponentHighestDamage: number
  playerTotalChakraUsed: number
  opponentTotalChakraUsed: number
  battleDuration: number
  winner: string | null
  playerHealingDone: number
  opponentHealingDone: number
  playerMostUsedJutsu: string
  opponentMostUsedJutsu: string
}

interface BattleStatisticsProps {
  stats: BattleStats
  isExpanded: boolean
  toggleExpand: () => void
}

export default function BattleStatistics({ stats, isExpanded, toggleExpand }: BattleStatisticsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "player" | "opponent">("overview")

  // Calculate percentages for comparison
  const totalDamage = stats.playerDamageDealt + stats.opponentDamageDealt
  const playerDamagePercent = totalDamage > 0 ? (stats.playerDamageDealt / totalDamage) * 100 : 0
  const opponentDamagePercent = totalDamage > 0 ? (stats.opponentDamageDealt / totalDamage) * 100 : 0

  const totalChakra = stats.playerTotalChakraUsed + stats.opponentTotalChakraUsed
  const playerChakraPercent = totalChakra > 0 ? (stats.playerTotalChakraUsed / totalChakra) * 100 : 0
  const opponentChakraPercent = totalChakra > 0 ? (stats.opponentTotalChakraUsed / totalChakra) * 100 : 0

  // Format time from seconds to MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  if (!isExpanded) {
    return (
      <button
        onClick={toggleExpand}
        className="flex items-center justify-between w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center">
          <BarChart className="mr-2 text-orange-500" size={18} />
          <span className="font-medium">Battle Statistics</span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">Click to view</span>
      </button>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold flex items-center">
          <BarChart className="mr-2 text-orange-500" size={20} />
          Battle Statistics
        </h3>
        <button
          onClick={toggleExpand}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "overview"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "player"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("player")}
        >
          {stats.playerName}
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            activeTab === "opponent"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("opponent")}
        >
          {stats.opponentName}
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Battle Result */}
            {stats.winner && (
              <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="mr-2 text-orange-500" size={18} />
                  <span className="font-medium">Winner:</span>
                </div>
                <span className="font-bold">{stats.winner}</span>
              </div>
            )}

            {/* Battle Duration */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Timer className="mr-2 text-gray-500" size={16} />
                <span>Battle Duration:</span>
              </div>
              <span className="font-medium">{formatTime(stats.battleDuration)}</span>
            </div>

            {/* Damage Comparison */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Damage Dealt</span>
                <span className="font-medium">{totalDamage} HP</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{stats.playerName}</span>
                  <span>
                    {stats.playerDamageDealt} ({Math.round(playerDamagePercent)}%)
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: `${playerDamagePercent}%` }}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{stats.opponentName}</span>
                  <span>
                    {stats.opponentDamageDealt} ({Math.round(opponentDamagePercent)}%)
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: `${opponentDamagePercent}%` }}></div>
                </div>
              </div>
            </div>

            {/* Chakra Usage Comparison */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Chakra Used</span>
                <span className="font-medium">{totalChakra}</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{stats.playerName}</span>
                  <span>
                    {stats.playerTotalChakraUsed} ({Math.round(playerChakraPercent)}%)
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${playerChakraPercent}%` }}></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{stats.opponentName}</span>
                  <span>
                    {stats.opponentTotalChakraUsed} ({Math.round(opponentChakraPercent)}%)
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${opponentChakraPercent}%` }}></div>
                </div>
              </div>
            </div>

            {/* Highest Damage */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <Target className="mr-1 text-orange-500" size={14} />
                  <span className="font-medium">{stats.playerName}'s Highest Damage</span>
                </div>
                <span className="text-lg font-bold">{stats.playerHighestDamage}</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <Target className="mr-1 text-red-500" size={14} />
                  <span className="font-medium">{stats.opponentName}'s Highest Damage</span>
                </div>
                <span className="text-lg font-bold">{stats.opponentHighestDamage}</span>
              </div>
            </div>

            {/* Most Used Jutsu */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <Zap className="mr-1 text-orange-500" size={14} />
                  <span className="font-medium">{stats.playerName}'s Most Used</span>
                </div>
                <span className="font-medium">{stats.playerMostUsedJutsu || "None"}</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                <div className="flex items-center mb-1">
                  <Zap className="mr-1 text-red-500" size={14} />
                  <span className="font-medium">{stats.opponentName}'s Most Used</span>
                </div>
                <span className="font-medium">{stats.opponentMostUsedJutsu || "None"}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "player" && (
          <div className="space-y-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
              <h4 className="font-bold text-sm mb-2">{stats.playerName}'s Battle Performance</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <Activity className="mr-1 text-orange-500" size={14} />
                  <span>Total Damage: </span>
                  <span className="ml-1 font-medium">{stats.playerDamageDealt}</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-1 text-blue-500" size={14} />
                  <span>Chakra Used: </span>
                  <span className="ml-1 font-medium">{stats.playerTotalChakraUsed}</span>
                </div>
                <div className="flex items-center">
                  <Target className="mr-1 text-red-500" size={14} />
                  <span>Highest Damage: </span>
                  <span className="ml-1 font-medium">{stats.playerHighestDamage}</span>
                </div>
                {stats.playerHealingDone > 0 && (
                  <div className="flex items-center">
                    <span className="text-green-500 mr-1">+</span>
                    <span>Healing Done: </span>
                    <span className="ml-1 font-medium">{stats.playerHealingDone}</span>
                  </div>
                )}
              </div>
            </div>

            <h4 className="font-medium text-sm">Jutsu Usage</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
              {stats.playerJutsuUsed.length > 0 ? (
                stats.playerJutsuUsed.map((jutsu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{jutsu.name}</span>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                        Used {jutsu.count} times
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Total Damage</span>
                      <span>{jutsu.totalDamage}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Avg. Damage</span>
                      <span>{jutsu.count > 0 ? Math.round(jutsu.totalDamage / jutsu.count) : 0}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">No jutsu used</div>
              )}
            </div>
          </div>
        )}

        {activeTab === "opponent" && (
          <div className="space-y-4">
            <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg">
              <h4 className="font-bold text-sm mb-2">{stats.opponentName}'s Battle Performance</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <Activity className="mr-1 text-red-500" size={14} />
                  <span>Total Damage: </span>
                  <span className="ml-1 font-medium">{stats.opponentDamageDealt}</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-1 text-blue-500" size={14} />
                  <span>Chakra Used: </span>
                  <span className="ml-1 font-medium">{stats.opponentTotalChakraUsed}</span>
                </div>
                <div className="flex items-center">
                  <Target className="mr-1 text-red-500" size={14} />
                  <span>Highest Damage: </span>
                  <span className="ml-1 font-medium">{stats.opponentHighestDamage}</span>
                </div>
                {stats.opponentHealingDone > 0 && (
                  <div className="flex items-center">
                    <span className="text-green-500 mr-1">+</span>
                    <span>Healing Done: </span>
                    <span className="ml-1 font-medium">{stats.opponentHealingDone}</span>
                  </div>
                )}
              </div>
            </div>

            <h4 className="font-medium text-sm">Jutsu Usage</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
              {stats.opponentJutsuUsed.length > 0 ? (
                stats.opponentJutsuUsed.map((jutsu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{jutsu.name}</span>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                        Used {jutsu.count} times
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Total Damage</span>
                      <span>{jutsu.totalDamage}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Avg. Damage</span>
                      <span>{jutsu.count > 0 ? Math.round(jutsu.totalDamage / jutsu.count) : 0}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">No jutsu used</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
