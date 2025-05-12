"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sword, Shield, Zap, Award } from "lucide-react"
import Image from "next/image"
import { characters } from "@/data/characters"
import JutsuEffect from "./jutsu-effects"
import HandSigns from "./hand-signs"
import BattleStatistics, { type BattleStats } from "./battle-statistics"
import { motion, AnimatePresence } from "framer-motion"

interface BattleSimulatorProps {
  character: {
    name: string
    stats: Record<string, number>
    jutsu: Array<
      | {
          name: string
          type: string
        }
      | string
    >
    image: string
  }
}

interface BattleCharacter {
  name: string
  hp: number
  maxHp: number
  attack: number
  defense: number
  speed: number
  chakra: number
  maxChakra: number
  image: string
  jutsu: Array<{
    name: string
    power: number
    chakraCost: number
    type: string
  }>
}

interface JutsuUsage {
  name: string
  count: number
  totalDamage: number
  type: string
}

// Map jutsu names to types for visual effects
const jutsuTypeMap: Record<string, string> = {
  Rasengan: "rasengan",
  "Shadow Clone": "shadow",
  "Sexy Jutsu": "normal",
  "Summoning Jutsu": "normal",
  Chidori: "chidori",
  "Fireball Jutsu": "fire",
  Amaterasu: "fire",
  Susanoo: "sharingan",
  Tsukuyomi: "sharingan",
  Sharingan: "sharingan",
  Byakugan: "normal",
  "Gentle Fist": "normal",
  "Eight Trigrams": "normal",
  "Sand Burial": "sand",
  "Sand Shield": "sand",
  "Sand Tsunami": "sand",
  "Mind Transfer": "normal",
  "Cherry Blossom Impact": "normal",
  "Healing Jutsu": "medical",
  Raikiri: "lightning",
  "Water Dragon": "water",
  "Water Prison": "water",
  "Earth Wall": "earth",
  "Mud Wall": "earth",
  "Wind Scythe": "wind",
  Rasenshuriken: "rasengan",
  Kamui: "sharingan",
  "Flying Thunder God": "lightning",
  "Reanimation Jutsu": "normal",
  "Wood Style": "earth",
  "Expansion Jutsu": "normal",
  "Shadow Possession": "shadow",
  "Shadow Strangle": "shadow",
  "Mind Destruction": "normal",
  "Particle Style": "normal",
  "Lava Style": "fire",
  "Boil Release": "water",
  "Ice Style": "water",
  "Storm Release": "lightning",
  "Magnet Release": "earth",
  "Explosion Release": "earth",
  "Dust Release": "earth",
  "Scorch Release": "fire",
  "Dark Release": "shadow",
  "Swift Release": "wind",
  "Steel Release": "earth",
  "Crystal Release": "earth",
}

// Battle environments
const battleEnvironments = ["forest", "desert", "water", "mountain", "village"]

export default function BattleSimulator({ character }: BattleSimulatorProps) {
  const [opponent, setOpponent] = useState<BattleCharacter | null>(null)
  const [player, setPlayer] = useState<BattleCharacter | null>(null)
  const [battleLog, setBattleLog] = useState<string[]>([])
  const [battleStarted, setBattleStarted] = useState(false)
  const [battleEnded, setBattleEnded] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)
  const [turn, setTurn] = useState<"player" | "opponent">("player")
  const [selectedJutsu, setSelectedJutsu] = useState<number | null>(null)
  const [battleAnimation, setBattleAnimation] = useState<string | null>(null)
  const [showJutsuEffect, setShowJutsuEffect] = useState(false)
  const [activeJutsuType, setActiveJutsuType] = useState<string>("normal")
  const [showHandSigns, setShowHandSigns] = useState(false)
  const [effectPosition, setEffectPosition] = useState<"left" | "right">("right")
  const [showStats, setShowStats] = useState(false)
  const [battleEnvironment, setBattleEnvironment] = useState("forest")
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false)
  const [isOpponentAttacking, setIsOpponentAttacking] = useState(false)
  const [isPlayerTakingDamage, setIsPlayerTakingDamage] = useState(false)
  const [isOpponentTakingDamage, setIsOpponentTakingDamage] = useState(false)

  // Battle statistics
  const [battleStartTime, setBattleStartTime] = useState<number | null>(null)
  const [battleDuration, setBattleDuration] = useState(0)
  const [playerDamageDealt, setPlayerDamageDealt] = useState(0)
  const [opponentDamageDealt, setOpponentDamageDealt] = useState(0)
  const [playerHighestDamage, setPlayerHighestDamage] = useState(0)
  const [opponentHighestDamage, setOpponentHighestDamage] = useState(0)
  const [playerTotalChakraUsed, setPlayerTotalChakraUsed] = useState(0)
  const [opponentTotalChakraUsed, setOpponentTotalChakraUsed] = useState(0)
  const [playerJutsuUsed, setPlayerJutsuUsed] = useState<JutsuUsage[]>([])
  const [opponentJutsuUsed, setOpponentJutsuUsed] = useState<JutsuUsage[]>([])
  const [playerHealingDone, setPlayerHealingDone] = useState(0)
  const [opponentHealingDone, setOpponentHealingDone] = useState(0)

  // Timer for battle duration
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const battleInitialized = useRef(false)

  // Initialize battle characters - only run once
  useEffect(() => {
    if (battleInitialized.current) return
    battleInitialized.current = true

    // Filter out the current character
    const availableOpponents = characters.filter((c) => c.name !== character.name)

    // Select a random opponent
    const randomOpponent = availableOpponents[Math.floor(Math.random() * availableOpponents.length)]

    // Select a random battle environment
    const randomEnv = battleEnvironments[Math.floor(Math.random() * battleEnvironments.length)]
    setBattleEnvironment(randomEnv)

    // Convert jutsu to the right format for battle
    const convertJutsu = (jutsuList: Array<{ name: string; type: string } | string>) => {
      return jutsuList
        .map((jutsu) => {
          const jutsuName = typeof jutsu === "string" ? jutsu : jutsu.name
          const jutsuType = typeof jutsu === "string" ? "normal" : jutsu.type || "normal"

          // Generate random power and chakra cost based on the character's stats
          return {
            name: jutsuName,
            power: Math.floor(Math.random() * 20) + 10,
            chakraCost: Math.floor(Math.random() * 10) + 5,
            type: jutsuTypeMap[jutsuName] || jutsuType || "normal",
          }
        })
        .slice(0, 4) // Limit to 4 jutsu for simplicity
    }

    // Create player character
    setPlayer({
      name: character.name,
      hp: 100,
      maxHp: 100,
      attack: character.stats?.strength || 5,
      defense: character.stats?.intelligence || 5,
      speed: character.stats?.speed || 5,
      chakra: 100,
      maxChakra: 100,
      image: character.image,
      jutsu: convertJutsu(character.jutsu),
    })

    // Create opponent character
    setOpponent({
      name: randomOpponent.name,
      hp: 100,
      maxHp: 100,
      attack: randomOpponent.stats?.strength || 5,
      defense: randomOpponent.stats?.intelligence || 5,
      speed: randomOpponent.stats?.speed || 5,
      chakra: 100,
      maxChakra: 100,
      image: randomOpponent.imageSrc,
      jutsu: convertJutsu(randomOpponent.jutsu),
    })

    // Initialize battle log
    setBattleLog(["Battle is ready to begin!"])

    // Reset statistics
    resetStatistics()

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [character])

  // Reset statistics
  const resetStatistics = () => {
    setPlayerDamageDealt(0)
    setOpponentDamageDealt(0)
    setPlayerHighestDamage(0)
    setOpponentHighestDamage(0)
    setPlayerTotalChakraUsed(0)
    setOpponentTotalChakraUsed(0)
    setPlayerJutsuUsed([])
    setOpponentJutsuUsed([])
    setBattleDuration(0)
    setPlayerHealingDone(0)
    setOpponentHealingDone(0)
    setBattleStartTime(null)
  }

  // Start battle
  const startBattle = () => {
    setBattleStarted(true)
    setBattleLog((prev) => [...prev, "Battle has begun!"])

    // Start battle timer
    const startTime = Math.floor(Date.now() / 1000)
    setBattleStartTime(startTime)

    timerRef.current = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000)
      setBattleDuration(currentTime - startTime)
    }, 1000)

    // Determine who goes first based on speed
    if (player && opponent) {
      if (player.speed >= opponent.speed) {
        setTurn("player")
        setBattleLog((prev) => [...prev, `${player.name} moves first due to higher speed!`])
      } else {
        setTurn("opponent")
        setBattleLog((prev) => [...prev, `${opponent.name} moves first due to higher speed!`])
        // If opponent goes first, execute their turn after a delay
        setTimeout(opponentTurn, 1500)
      }
    }
  }

  // Update jutsu usage statistics
  const updateJutsuUsage = (isPlayer: boolean, jutsuName: string, damage: number, jutsuType: string) => {
    if (isPlayer) {
      setPlayerJutsuUsed((prev) => {
        const existingJutsu = prev.find((j) => j.name === jutsuName)
        if (existingJutsu) {
          return prev.map((j) =>
            j.name === jutsuName ? { ...j, count: j.count + 1, totalDamage: j.totalDamage + damage } : j,
          )
        } else {
          return [...prev, { name: jutsuName, count: 1, totalDamage: damage, type: jutsuType }]
        }
      })
    } else {
      setOpponentJutsuUsed((prev) => {
        const existingJutsu = prev.find((j) => j.name === jutsuName)
        if (existingJutsu) {
          return prev.map((j) =>
            j.name === jutsuName ? { ...j, count: j.count + 1, totalDamage: j.totalDamage + damage } : j,
          )
        } else {
          return [...prev, { name: jutsuName, count: 1, totalDamage: damage, type: jutsuType }]
        }
      })
    }
  }

  // Player attacks
  const playerAttack = (jutsuIndex: number) => {
    if (!player || !opponent || turn !== "player" || battleEnded) return

    const jutsu = player.jutsu[jutsuIndex]

    // Check if player has enough chakra
    if (player.chakra < jutsu.chakraCost) {
      setBattleLog((prev) => [...prev, `${player.name} doesn't have enough chakra to use ${jutsu.name}!`])
      return
    }

    // Update player's chakra and track chakra usage
    const newChakra = Math.max(0, player.chakra - jutsu.chakraCost)
    setPlayer({
      ...player,
      chakra: newChakra,
    })
    setPlayerTotalChakraUsed((prev) => prev + jutsu.chakraCost)

    // Show hand signs
    setActiveJutsuType(jutsu.type)
    setEffectPosition("right")
    setShowHandSigns(true)
    setIsPlayerAttacking(true)

    // After hand signs, show jutsu effect
    setTimeout(() => {
      setShowHandSigns(false)
      setShowJutsuEffect(true)

      // Calculate damage
      const baseDamage = jutsu.power + player.attack
      const damageReduction = opponent.defense / 10
      const finalDamage = Math.max(5, Math.floor(baseDamage - damageReduction))

      // Update damage statistics
      setPlayerDamageDealt((prev) => prev + finalDamage)
      if (finalDamage > playerHighestDamage) {
        setPlayerHighestDamage(finalDamage)
      }

      // Update jutsu usage statistics
      updateJutsuUsage(true, jutsu.name, finalDamage, jutsu.type)

      // Show attack animation
      setBattleAnimation("player-attack")
      setIsOpponentTakingDamage(true)

      setTimeout(() => {
        setBattleAnimation(null)
        setIsOpponentTakingDamage(false)
      }, 1000)

      // Update opponent's HP immediately after calculating damage
      const newOpponentHp = Math.max(0, opponent.hp - finalDamage)
      setOpponent({
        ...opponent,
        hp: newOpponentHp,
      })

      // Update battle log and show jutsu effect
      setBattleLog((prev) => [
        ...prev,
        `${player.name} uses ${jutsu.name}!`,
        `${opponent.name} takes ${finalDamage} damage!`,
      ])

      // After jutsu effect completes
      setTimeout(() => {
        setShowJutsuEffect(false)
        setIsPlayerAttacking(false)

        // Check if opponent is defeated
        if (newOpponentHp <= 0) {
          endBattle(player.name)
          return
        }

        // Switch turn to opponent
        setTurn("opponent")
        setTimeout(opponentTurn, 1000)
      }, 1500)
    }, 1500)
  }

  // Opponent's turn
  const opponentTurn = () => {
    if (!player || !opponent || battleEnded) return

    // Select a random jutsu
    const availableJutsu = opponent.jutsu.filter((j) => j.chakraCost <= opponent.chakra)

    // If no jutsu available, use a basic attack
    let jutsu = {
      name: "Basic Attack",
      power: 5,
      chakraCost: 0,
      type: "normal",
    }

    if (availableJutsu.length > 0) {
      jutsu = availableJutsu[Math.floor(Math.random() * availableJutsu.length)]
    }

    // Update opponent's chakra and track chakra usage
    const newChakra = Math.max(0, opponent.chakra - jutsu.chakraCost)
    setOpponent({
      ...opponent,
      chakra: newChakra,
    })
    setOpponentTotalChakraUsed((prev) => prev + jutsu.chakraCost)

    // Show hand signs
    setActiveJutsuType(jutsu.type)
    setEffectPosition("left")
    setShowHandSigns(true)
    setIsOpponentAttacking(true)

    // After hand signs, show jutsu effect
    setTimeout(() => {
      setShowHandSigns(false)
      setShowJutsuEffect(true)

      // Calculate damage
      const baseDamage = jutsu.power + opponent.attack
      const damageReduction = player.defense / 10
      const finalDamage = Math.max(5, Math.floor(baseDamage - damageReduction))

      // Update damage statistics
      setOpponentDamageDealt((prev) => prev + finalDamage)
      if (finalDamage > opponentHighestDamage) {
        setOpponentHighestDamage(finalDamage)
      }

      // Update jutsu usage statistics
      updateJutsuUsage(false, jutsu.name, finalDamage, jutsu.type)

      // Show attack animation
      setBattleAnimation("opponent-attack")
      setIsPlayerTakingDamage(true)

      setTimeout(() => {
        setBattleAnimation(null)
        setIsPlayerTakingDamage(false)
      }, 1000)

      // Update player's HP immediately after calculating damage
      const newPlayerHp = Math.max(0, player.hp - finalDamage)
      setPlayer({
        ...player,
        hp: newPlayerHp,
      })

      // Update battle log and show jutsu effect
      setBattleLog((prev) => [
        ...prev,
        `${opponent.name} uses ${jutsu.name}!`,
        `${player.name} takes ${finalDamage} damage!`,
      ])

      // After jutsu effect completes
      setTimeout(() => {
        setShowJutsuEffect(false)
        setIsOpponentAttacking(false)

        // Check if player is defeated
        if (newPlayerHp <= 0) {
          endBattle(opponent.name)
          return
        }

        // Switch turn back to player
        setTurn("player")
      }, 1500)
    }, 1500)
  }

  // End battle and finalize statistics
  const endBattle = (winnerName: string) => {
    setBattleEnded(true)
    setWinner(winnerName)
    setBattleLog((prev) => [
      ...prev,
      `${winnerName === player?.name ? opponent?.name : player?.name} has been defeated!`,
      `${winnerName} wins the battle!`,
    ])

    // Stop the timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Show statistics automatically when battle ends
    setShowStats(true)

    // Ensure the defeated character's HP is set to 0 for visual clarity
    if (winnerName === player?.name && opponent) {
      setOpponent({
        ...opponent,
        hp: 0,
      })
    } else if (player) {
      setPlayer({
        ...player,
        hp: 0,
      })
    }
  }

  // Reset battle
  const resetBattle = () => {
    // First reset all battle state variables
    setBattleStarted(false)
    setBattleEnded(false)
    setWinner(null)
    setBattleLog(["Battle is ready to begin!"])
    setTurn("player")
    setSelectedJutsu(null)
    setBattleAnimation(null)
    setShowJutsuEffect(false)
    setShowHandSigns(false)
    setShowStats(false)
    setIsPlayerAttacking(false)
    setIsOpponentAttacking(false)
    setIsPlayerTakingDamage(false)
    setIsOpponentTakingDamage(false)

    // Reset statistics
    resetStatistics()

    // Stop the timer if it's running
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    // Select a new random opponent
    const availableOpponents = characters.filter((c) => c.name !== character.name)
    const randomOpponent = availableOpponents[Math.floor(Math.random() * availableOpponents.length)]

    // Select a new random environment
    const randomEnv = battleEnvironments[Math.floor(Math.random() * battleEnvironments.length)]
    setBattleEnvironment(randomEnv)

    // Convert jutsu to the right format for battle
    const convertJutsu = (jutsuList: Array<{ name: string; type: string } | string>) => {
      return jutsuList
        .map((jutsu) => {
          const jutsuName = typeof jutsu === "string" ? jutsu : jutsu.name
          const jutsuType = typeof jutsu === "string" ? "normal" : jutsu.type || "normal"

          // Generate random power and chakra cost based on the character's stats
          return {
            name: jutsuName,
            power: Math.floor(Math.random() * 20) + 10,
            chakraCost: Math.floor(Math.random() * 10) + 5,
            type: jutsuTypeMap[jutsuName] || jutsuType || "normal",
          }
        })
        .slice(0, 4) // Limit to 4 jutsu for simplicity
    }

    // Create fresh player character
    setPlayer({
      name: character.name,
      hp: 100,
      maxHp: 100,
      attack: character.stats?.strength || 5,
      defense: character.stats?.intelligence || 5,
      speed: character.stats?.speed || 5,
      chakra: 100,
      maxChakra: 100,
      image: character.image,
      jutsu: convertJutsu(character.jutsu),
    })

    // Create fresh opponent character
    setOpponent({
      name: randomOpponent.name,
      hp: 100,
      maxHp: 100,
      attack: randomOpponent.stats?.strength || 5,
      defense: randomOpponent.stats?.intelligence || 5,
      speed: randomOpponent.stats?.speed || 5,
      chakra: 100,
      maxChakra: 100,
      image: randomOpponent.imageSrc,
      jutsu: convertJutsu(randomOpponent.jutsu),
    })
  }

  // Get most used jutsu
  const getMostUsedJutsu = (jutsuList: JutsuUsage[]) => {
    if (jutsuList.length === 0) return ""
    return jutsuList.reduce((prev, current) => (prev.count > current.count ? prev : current)).name
  }

  // Prepare battle statistics for the component
  const getBattleStats = (): BattleStats => {
    return {
      playerName: player?.name || "",
      opponentName: opponent?.name || "",
      playerDamageDealt,
      opponentDamageDealt,
      playerJutsuUsed,
      opponentJutsuUsed,
      playerHighestDamage,
      opponentHighestDamage,
      playerTotalChakraUsed,
      opponentTotalChakraUsed,
      battleDuration,
      winner,
      playerHealingDone,
      opponentHealingDone,
      playerMostUsedJutsu: getMostUsedJutsu(playerJutsuUsed),
      opponentMostUsedJutsu: getMostUsedJutsu(opponentJutsuUsed),
    }
  }

  // If characters aren't loaded yet
  if (!player || !opponent) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Battle Simulator</h2>
        <p className="text-center py-8">Loading battle simulator...</p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Battle Simulator</h2>

      {!battleStarted ? (
        <div className="text-center py-4">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Prepare for battle! {player.name} vs {opponent.name}
          </p>
          <Button onClick={startBattle} className="bg-orange-500 hover:bg-orange-600 text-white">
            Start Battle
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Battle Arena */}
          <div
            className={`relative flex justify-between items-center p-4 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg min-h-[200px] overflow-hidden ${battleAnimation === "player-attack" ? "animate-pulse" : ""} ${battleAnimation === "opponent-attack" ? "animate-pulse" : ""}`}
            style={{
              backgroundImage: `url(/placeholder.svg?height=200&width=800&query=${battleEnvironment} anime battle arena)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Battle arena overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>

            {/* Player Character */}
            <div
              className={`relative z-10 flex flex-col items-center ${battleAnimation === "opponent-attack" ? "animate-shake" : ""}`}
            >
              <motion.div
                className="relative w-24 h-24 md:w-32 md:h-32 mb-2"
                animate={{
                  scale: isPlayerAttacking ? 1.1 : isPlayerTakingDamage ? 0.9 : 1,
                  x: isPlayerAttacking ? [0, 20, 0] : isPlayerTakingDamage ? [-10, 0] : 0,
                  rotate: isPlayerTakingDamage ? -5 : 0,
                }}
                transition={{
                  duration: isPlayerAttacking ? 0.5 : isPlayerTakingDamage ? 0.3 : 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Image
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                  fill
                  className="object-cover rounded-full border-4 border-orange-500 shadow-lg"
                />

                {/* Red flash when taking damage */}
                <AnimatePresence>
                  {isPlayerTakingDamage && (
                    <motion.div
                      className="absolute inset-0 bg-red-500 mix-blend-overlay rounded-full"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {turn === "player" && !battleEnded && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  />
                )}
              </motion.div>
              <span className="font-bold text-sm md:text-base text-white drop-shadow-md">{player.name}</span>

              {/* Player HP Bar */}
              <div className="w-full mt-2">
                <div className="flex justify-between text-xs mb-1 text-white drop-shadow-md">
                  <span>HP</span>
                  <span>{Math.floor((player.hp / player.maxHp) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 bg-opacity-60 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${player.hp > 50 ? "bg-green-500" : player.hp > 25 ? "bg-yellow-500" : "bg-red-500"}`}
                    initial={{ width: `${(player.hp / player.maxHp) * 100}%` }}
                    animate={{ width: `${(player.hp / player.maxHp) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>
              </div>

              {/* Player Chakra Bar */}
              <div className="w-full mt-2">
                <div className="flex justify-between text-xs mb-1 text-white drop-shadow-md">
                  <span>Chakra</span>
                  <span>{Math.floor((player.chakra / player.maxChakra) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 bg-opacity-60 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: `${(player.chakra / player.maxChakra) * 100}%` }}
                    animate={{ width: `${(player.chakra / player.maxChakra) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>
              </div>
            </div>

            {/* Battle Status */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
              {battleEnded ? (
                <motion.div
                  className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, y: [0, -10, 0] }}
                  transition={{
                    scale: { duration: 0.5 },
                    y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                  }}
                >
                  <Award className="inline-block mr-1" size={16} />
                  {winner} wins!
                </motion.div>
              ) : (
                <div className="text-2xl font-bold text-white drop-shadow-lg">VS</div>
              )}
            </div>

            {/* Jutsu Effects */}
            <JutsuEffect type={activeJutsuType as any} isActive={showJutsuEffect} position={effectPosition} />

            {/* Hand Signs */}
            <HandSigns isActive={showHandSigns} jutsuType={activeJutsuType} position={effectPosition} />

            {/* Opponent Character */}
            <div
              className={`relative z-10 flex flex-col items-center ${battleAnimation === "player-attack" ? "animate-shake" : ""}`}
            >
              <motion.div
                className="relative w-24 h-24 md:w-32 md:h-32 mb-2"
                animate={{
                  scale: isOpponentAttacking ? 1.1 : isOpponentTakingDamage ? 0.9 : 1,
                  x: isOpponentAttacking ? [0, -20, 0] : isOpponentTakingDamage ? [10, 0] : 0,
                  rotate: isOpponentTakingDamage ? 5 : 0,
                }}
                transition={{
                  duration: isOpponentAttacking ? 0.5 : isOpponentTakingDamage ? 0.3 : 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Image
                  src={opponent.image || "/placeholder.svg"}
                  alt={opponent.name}
                  fill
                  className="object-cover rounded-full border-4 border-red-500 shadow-lg"
                />

                {/* Red flash when taking damage */}
                <AnimatePresence>
                  {isOpponentTakingDamage && (
                    <motion.div
                      className="absolute inset-0 bg-red-500 mix-blend-overlay rounded-full"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {turn === "opponent" && !battleEnded && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  />
                )}
              </motion.div>
              <span className="font-bold text-sm md:text-base text-white drop-shadow-md">{opponent.name}</span>

              {/* Opponent HP Bar */}
              <div className="w-full mt-2">
                <div className="flex justify-between text-xs mb-1 text-white drop-shadow-md">
                  <span>HP</span>
                  <span>{Math.floor((opponent.hp / opponent.maxHp) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 bg-opacity-60 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${opponent.hp > 50 ? "bg-green-500" : opponent.hp > 25 ? "bg-yellow-500" : "bg-red-500"}`}
                    initial={{ width: `${(opponent.hp / opponent.maxHp) * 100}%` }}
                    animate={{ width: `${(opponent.hp / opponent.maxHp) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>
              </div>

              {/* Opponent Chakra Bar */}
              <div className="w-full mt-2">
                <div className="flex justify-between text-xs mb-1 text-white drop-shadow-md">
                  <span>Chakra</span>
                  <span>{Math.floor((opponent.chakra / opponent.maxChakra) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 bg-opacity-60 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: `${(opponent.chakra / opponent.maxChakra) * 100}%` }}
                    animate={{ width: `${(opponent.chakra / opponent.maxChakra) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Battle Controls */}
          {!battleEnded && turn === "player" && !showHandSigns && !showJutsuEffect && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {player.jutsu.map((jutsu, index) => {
                const isJutsuDisabled = player.chakra < jutsu.chakraCost
                const getJutsuButtonColor = () => {
                  if (isJutsuDisabled) return "bg-gray-400"

                  switch (jutsu.type) {
                    case "fire":
                      return "bg-gradient-to-r from-orange-500 to-red-600"
                    case "water":
                      return "bg-gradient-to-r from-blue-400 to-blue-600"
                    case "lightning":
                      return "bg-gradient-to-r from-yellow-400 to-blue-500"
                    case "earth":
                      return "bg-gradient-to-r from-amber-600 to-amber-800"
                    case "wind":
                      return "bg-gradient-to-r from-green-400 to-green-600"
                    case "rasengan":
                      return "bg-gradient-to-r from-blue-400 to-blue-600"
                    case "chidori":
                      return "bg-gradient-to-r from-blue-400 to-purple-600"
                    case "sharingan":
                      return "bg-gradient-to-r from-red-500 to-red-700"
                    case "sand":
                      return "bg-gradient-to-r from-yellow-500 to-amber-700"
                    case "shadow":
                      return "bg-gradient-to-r from-gray-600 to-gray-800"
                    default:
                      return "bg-gradient-to-r from-gray-500 to-gray-700"
                  }
                }

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: isJutsuDisabled ? 1 : 1.05 }}
                    whileTap={{ scale: isJutsuDisabled ? 1 : 0.95 }}
                  >
                    <Button
                      onClick={() => playerAttack(index)}
                      disabled={isJutsuDisabled}
                      className={`w-full ${getJutsuButtonColor()} text-white text-xs md:text-sm relative overflow-hidden`}
                    >
                      <Zap className="mr-1" size={16} />
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
          )}

          {/* Battle Log */}
          <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg p-3 h-32 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <h3 className="font-bold mb-2 text-sm">Battle Log:</h3>
            <div className="space-y-1 text-sm">
              {battleLog.slice(-5).map((log, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300">
                  {log}
                </p>
              ))}
            </div>
          </div>

          {/* Battle Stats */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-bold mb-2">{player.name}'s Stats</h3>
              <div className="space-y-1">
                <div className="flex items-center">
                  <Sword size={14} className="mr-1" /> Attack: {player.attack}
                </div>
                <div className="flex items-center">
                  <Shield size={14} className="mr-1" /> Defense: {player.defense}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">{opponent.name}'s Stats</h3>
              <div className="space-y-1">
                <div className="flex items-center">
                  <Sword size={14} className="mr-1" /> Attack: {opponent.attack}
                </div>
                <div className="flex items-center">
                  <Shield size={14} className="mr-1" /> Defense: {opponent.defense}
                </div>
              </div>
            </div>
          </div>

          {/* Battle Statistics */}
          {battleStarted && (
            <div className="mt-4">
              <BattleStatistics
                stats={getBattleStats()}
                isExpanded={showStats}
                toggleExpand={() => setShowStats(!showStats)}
              />
            </div>
          )}

          {/* Battle End Controls */}
          {battleEnded && (
            <div className="text-center mt-4 space-x-4">
              <Button onClick={resetBattle} className="bg-orange-500 hover:bg-orange-600 text-white">
                New Battle
              </Button>
              <Button onClick={() => setShowStats(!showStats)} className="bg-blue-500 hover:bg-blue-600 text-white">
                {showStats ? "Hide Stats" : "Show Stats"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
