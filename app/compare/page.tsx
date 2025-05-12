"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ArrowLeftRight, Star, Zap, Heart, Shield, Target, Info, Swords } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import NarutoLogo from "@/components/naruto-logo"
import FloatingLeaves from "@/components/floating-leaves"
import { CHARACTERS } from "@/data/characters"
import { cn } from "@/lib/utils"
import ComparisonChart from "@/components/comparison-chart"
import BattleSimulator from "@/components/battle-simulator"

export default function ComparePage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const leftParam = searchParams.get("left")
  const rightParam = searchParams.get("right")

  const [leftCharId, setLeftCharId] = useState<string>(leftParam || "1")
  const [rightCharId, setRightCharId] = useState<string>(rightParam || "2")

  const leftCharacter = CHARACTERS.find((char) => char.id.toString() === leftCharId)
  const rightCharacter = CHARACTERS.find((char) => char.id.toString() === rightCharId)

  useEffect(() => {
    // Update URL when selections change
    const params = new URLSearchParams()
    params.set("left", leftCharId)
    params.set("right", rightCharId)
    router.push(`/compare?${params.toString()}`, { scroll: false })
  }, [leftCharId, rightCharId, router])

  const handleSwapCharacters = () => {
    const temp = leftCharId
    setLeftCharId(rightCharId)
    setRightCharId(temp)
  }

  if (!leftCharacter || !rightCharacter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-[#FFD700]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Characters Not Found</h1>
          <p className="mb-6">Please select valid characters to compare.</p>
          <Link href="/#characters">
            <Button className="bg-[#FF7800] hover:bg-[#FF7800]/90 text-black font-bold">Return to Characters</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Calculate stat differences
  const statComparison = leftCharacter.stats.map((leftStat, index) => {
    const rightStat = rightCharacter.stats[index]
    const difference = leftStat.value - rightStat.value

    return {
      name: leftStat.name,
      leftValue: leftStat.value,
      rightValue: rightStat.value,
      difference,
      icon: leftStat.icon,
    }
  })

  // Find common and unique jutsu
  const leftJutsuSet = new Set(leftCharacter.jutsu)
  const rightJutsuSet = new Set(rightCharacter.jutsu)

  const commonJutsu = leftCharacter.jutsu.filter((jutsu) => rightJutsuSet.has(jutsu))
  const uniqueLeftJutsu = leftCharacter.jutsu.filter((jutsu) => !rightJutsuSet.has(jutsu))
  const uniqueRightJutsu = leftCharacter.jutsu.filter((jutsu) => !leftJutsuSet.has(jutsu))

  return (
    <div className="relative min-h-screen bg-[#121212] text-[#FFD700] pb-16">
      {/* Background effects */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hidden-leaf-village.png')",
          filter: "blur(3px)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121212]/70 via-[#121212] to-[#121212]" />
      <FloatingLeaves />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="flex items-center gap-2">
          <NarutoLogo className="h-10 w-10" />
          <span className="text-xl font-bold tracking-wider">SHINOBI</span>
        </Link>

        <Link href="/#characters">
          <Button variant="ghost" className="text-[#FFD700] hover:text-[#FFD700] hover:bg-black/20">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Characters
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-4 relative z-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-[#FFD700]">CHARACTER</span> <span className="text-[#FF7800]">COMPARISON</span>
        </h1>

        {/* Character Selection */}
        <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-2/5">
              <label className="block text-[#FFD700]/70 text-sm mb-2">First Character</label>
              <Select value={leftCharId} onValueChange={setLeftCharId}>
                <SelectTrigger className="bg-black/30 border-[#FFD700]/20 text-[#FFD700]">
                  <SelectValue placeholder="Select character" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-[#FFD700]/20 text-[#FFD700]">
                  {CHARACTERS.map((char) => (
                    <SelectItem key={`left-${char.id}`} value={char.id.toString()}>
                      {char.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSwapCharacters}
                className="h-10 w-10 rounded-full bg-[#FF7800]/20 hover:bg-[#FF7800]/30 text-[#FF7800]"
              >
                <ArrowLeftRight className="h-5 w-5" />
                <span className="sr-only">Swap characters</span>
              </Button>
            </div>

            <div className="w-full md:w-2/5">
              <label className="block text-[#FFD700]/70 text-sm mb-2">Second Character</label>
              <Select value={rightCharId} onValueChange={setRightCharId}>
                <SelectTrigger className="bg-black/30 border-[#FFD700]/20 text-[#FFD700]">
                  <SelectValue placeholder="Select character" />
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-[#FFD700]/20 text-[#FFD700]">
                  {CHARACTERS.map((char) => (
                    <SelectItem key={`right-${char.id}`} value={char.id.toString()}>
                      {char.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="compare" className="w-full">
          <TabsList className="bg-black/40 backdrop-blur-sm border border-white/10 w-full justify-center mb-6">
            <TabsTrigger
              value="compare"
              className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
            >
              <Info className="h-4 w-4 mr-2" />
              Compare Stats
            </TabsTrigger>
            <TabsTrigger
              value="battle"
              className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
            >
              <Swords className="h-4 w-4 mr-2" />
              Battle Simulator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="compare" className="mt-0 space-y-8">
            {/* Character Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Character */}
              <div
                className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
                style={{ borderLeft: `3px solid ${leftCharacter.color}` }}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={leftCharacter.imageSrc || "/placeholder.svg"}
                    alt={leftCharacter.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-2xl font-bold" style={{ color: leftCharacter.color }}>
                      {leftCharacter.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FFD700]/80">{leftCharacter.role}</span>
                      <span className="text-[#FFD700]/50">•</span>
                      <span className="text-[#FFD700]/80">{leftCharacter.village}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#FFD700]/70 mb-4">{leftCharacter.description}</p>
                  <Link href={`/characters/${leftCharacter.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40"
                    >
                      View Full Profile
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Character */}
              <div
                className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
                style={{ borderLeft: `3px solid ${rightCharacter.color}` }}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={rightCharacter.imageSrc || "/placeholder.svg"}
                    alt={rightCharacter.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-2xl font-bold" style={{ color: rightCharacter.color }}>
                      {rightCharacter.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FFD700]/80">{rightCharacter.role}</span>
                      <span className="text-[#FFD700]/50">•</span>
                      <span className="text-[#FFD700]/80">{rightCharacter.village}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#FFD700]/70 mb-4">{rightCharacter.description}</p>
                  <Link href={`/characters/${rightCharacter.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40"
                    >
                      View Full Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats Comparison */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="text-[#FFD700]">STATS</span> <span className="text-[#FF7800]">COMPARISON</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Stat Bars */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Abilities Comparison</h3>

                  <div className="space-y-6">
                    {statComparison.map((stat) => (
                      <div key={stat.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            {stat.icon === "strength" && <Zap className="h-4 w-4 mr-2 text-[#FFD700]" />}
                            {stat.icon === "intelligence" && <Star className="h-4 w-4 mr-2 text-[#FFD700]" />}
                            {stat.icon === "speed" && <Target className="h-4 w-4 mr-2 text-[#FFD700]" />}
                            {stat.icon === "stamina" && <Shield className="h-4 w-4 mr-2 text-[#FFD700]" />}
                            {stat.icon === "chakra" && <Heart className="h-4 w-4 mr-2 text-[#FFD700]" />}
                            <span className="text-sm text-[#FFD700]">{stat.name}</span>
                          </div>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold" style={{ color: leftCharacter.color }}>
                                    {stat.leftValue}
                                  </span>
                                  <span className="text-[#FFD700]/50">vs</span>
                                  <span className="text-sm font-bold" style={{ color: rightCharacter.color }}>
                                    {stat.rightValue}
                                  </span>
                                  <Info className="h-3 w-3 text-[#FFD700]/50" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-black/90 border-[#FFD700]/20 text-[#FFD700]">
                                <p>
                                  {stat.difference > 0
                                    ? `${leftCharacter.name} is stronger by ${stat.difference} points`
                                    : stat.difference < 0
                                      ? `${rightCharacter.name} is stronger by ${Math.abs(stat.difference)} points`
                                      : "Both characters are equal"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-[45%]">
                            <Progress
                              value={stat.leftValue * 10}
                              className="h-2"
                              indicatorClassName={`bg-current`}
                              style={{ color: leftCharacter.color }}
                            />
                          </div>

                          <div className="w-[10%] flex justify-center">
                            <div
                              className={cn(
                                "w-4 h-4 rounded-full flex items-center justify-center",
                                stat.difference > 0
                                  ? "bg-green-500/20"
                                  : stat.difference < 0
                                    ? "bg-red-500/20"
                                    : "bg-gray-500/20",
                              )}
                            >
                              <div
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  stat.difference > 0
                                    ? "bg-green-500"
                                    : stat.difference < 0
                                      ? "bg-red-500"
                                      : "bg-gray-500",
                                )}
                              />
                            </div>
                          </div>

                          <div className="w-[45%]">
                            <Progress
                              value={stat.rightValue * 10}
                              className="h-2"
                              indicatorClassName={`bg-current`}
                              style={{ color: rightCharacter.color }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Radar Chart */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Stats Visualization</h3>
                  <div className="h-[300px] w-full">
                    <ComparisonChart
                      character1={{
                        name: leftCharacter.name,
                        color: leftCharacter.color,
                        stats: leftCharacter.stats,
                      }}
                      character2={{
                        name: rightCharacter.name,
                        color: rightCharacter.color,
                        stats: rightCharacter.stats,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Jutsu Comparison */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="text-[#FFD700]">JUTSU</span> <span className="text-[#FF7800]">COMPARISON</span>
              </h2>

              <Tabs defaultValue="unique" className="w-full">
                <TabsList className="bg-black/40 backdrop-blur-sm border border-white/10 w-full justify-center mb-6">
                  <TabsTrigger
                    value="unique"
                    className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
                  >
                    Unique Abilities
                  </TabsTrigger>
                  <TabsTrigger
                    value="common"
                    className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
                  >
                    Shared Techniques
                  </TabsTrigger>
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
                  >
                    All Jutsu
                  </TabsTrigger>
                </TabsList>

                {/* Unique Jutsu Tab */}
                <TabsContent value="unique" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Character Unique Jutsu */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                      <h3 className="text-xl font-bold mb-4" style={{ color: leftCharacter.color }}>
                        {leftCharacter.name}'s Unique Jutsu
                      </h3>

                      {uniqueLeftJutsu.length > 0 ? (
                        <ul className="space-y-2">
                          {uniqueLeftJutsu.map((jutsu, index) => (
                            <li key={index} className="flex items-center text-[#FFD700]/80">
                              <span
                                className="inline-block w-2 h-2 mr-2 rounded-full"
                                style={{ backgroundColor: leftCharacter.color }}
                              />
                              {jutsu}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[#FFD700]/50 italic">No unique jutsu found.</p>
                      )}
                    </div>

                    {/* Right Character Unique Jutsu */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                      <h3 className="text-xl font-bold mb-4" style={{ color: rightCharacter.color }}>
                        {rightCharacter.name}'s Unique Jutsu
                      </h3>

                      {uniqueRightJutsu.length > 0 ? (
                        <ul className="space-y-2">
                          {uniqueRightJutsu.map((jutsu, index) => (
                            <li key={index} className="flex items-center text-[#FFD700]/80">
                              <span
                                className="inline-block w-2 h-2 mr-2 rounded-full"
                                style={{ backgroundColor: rightCharacter.color }}
                              />
                              {jutsu}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[#FFD700]/50 italic">No unique jutsu found.</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Common Jutsu Tab */}
                <TabsContent value="common" className="mt-0">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Shared Techniques</h3>

                    {commonJutsu.length > 0 ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {commonJutsu.map((jutsu, index) => (
                          <li key={index} className="flex items-center text-[#FFD700]/80">
                            <span className="inline-block w-2 h-2 mr-2 rounded-full bg-[#FF7800]" />
                            {jutsu}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#FFD700]/50 italic text-center">
                        No shared jutsu found between these characters.
                      </p>
                    )}
                  </div>
                </TabsContent>

                {/* All Jutsu Tab */}
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Character All Jutsu */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                      <h3 className="text-xl font-bold mb-4" style={{ color: leftCharacter.color }}>
                        {leftCharacter.name}'s Jutsu
                      </h3>

                      <ul className="space-y-2">
                        {leftCharacter.jutsu.map((jutsu, index) => (
                          <li key={index} className="flex items-center text-[#FFD700]/80">
                            <span
                              className={cn(
                                "inline-block w-2 h-2 mr-2 rounded-full",
                                commonJutsu.includes(jutsu) ? "bg-[#FF7800]" : "",
                              )}
                              style={{ backgroundColor: commonJutsu.includes(jutsu) ? "#FF7800" : leftCharacter.color }}
                            />
                            {jutsu}
                            {commonJutsu.includes(jutsu) && (
                              <span className="ml-2 text-xs text-[#FF7800]">(shared)</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Character All Jutsu */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                      <h3 className="text-xl font-bold mb-4" style={{ color: rightCharacter.color }}>
                        {rightCharacter.name}'s Jutsu
                      </h3>

                      <ul className="space-y-2">
                        {rightCharacter.jutsu.map((jutsu, index) => (
                          <li key={index} className="flex items-center text-[#FFD700]/80">
                            <span
                              className={cn(
                                "inline-block w-2 h-2 mr-2 rounded-full",
                                commonJutsu.includes(jutsu) ? "bg-[#FF7800]" : "",
                              )}
                              style={{
                                backgroundColor: commonJutsu.includes(jutsu) ? "#FF7800" : rightCharacter.color,
                              }}
                            />
                            {jutsu}
                            {commonJutsu.includes(jutsu) && (
                              <span className="ml-2 text-xs text-[#FF7800]">(shared)</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Quick Facts Comparison */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="text-[#FFD700]">QUICK</span> <span className="text-[#FF7800]">FACTS</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Character Facts */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: leftCharacter.color }}>
                    {leftCharacter.name}
                  </h3>

                  <ul className="space-y-3">
                    {leftCharacter.quickFacts.map((fact, index) => (
                      <li key={index} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-[#FFD700]/50">{fact.label}:</span>
                        <span className="text-[#FFD700]">{fact.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Character Facts */}
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: rightCharacter.color }}>
                    {rightCharacter.name}
                  </h3>

                  <ul className="space-y-3">
                    {rightCharacter.quickFacts.map((fact, index) => (
                      <li key={index} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-[#FFD700]/50">{fact.label}:</span>
                        <span className="text-[#FFD700]">{fact.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Share Comparison */}
            <div className="text-center">
              <p className="text-[#FFD700]/70 mb-4">Share this comparison with friends:</p>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Link copied to clipboard!")
                  }}
                >
                  Copy Comparison Link
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Battle Simulator Tab */}
          <TabsContent value="battle" className="mt-0">
            <BattleSimulator leftCharacter={leftCharacter} rightCharacter={rightCharacter} />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="relative z-10 border-t border-white/10 mt-20 py-6 text-center text-[#FFD700]/60">
        <p>© {new Date().getFullYear()} Hidden Leaf Village. All rights reserved.</p>
      </footer>
    </div>
  )
}
