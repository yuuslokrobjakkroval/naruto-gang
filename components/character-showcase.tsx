"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { characters } from "@/data/characters"

export default function CharacterShowcase() {
  const [selectedVillage, setSelectedVillage] = useState<string | null>(null)

  // Filter characters by village if a village is selected
  const filteredCharacters = selectedVillage
    ? characters.filter((char) => char.village.includes(selectedVillage))
    : characters

  // Get unique villages for the filter
  const villages = Array.from(new Set(characters.map((char) => char.village)))

  return (
    <div className="py-8">
      {/* Village filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <Button
          variant={selectedVillage === null ? "default" : "outline"}
          onClick={() => setSelectedVillage(null)}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          All Villages
        </Button>
        {villages.map((village) => (
          <Button
            key={village}
            variant={selectedVillage === village ? "default" : "outline"}
            onClick={() => setSelectedVillage(village)}
            className={selectedVillage === village ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
          >
            {village}
          </Button>
        ))}
      </div>

      {/* Character grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCharacters.map((character) => (
          <Link key={character.id} href={`/characters/${character.slug}`} className="group">
            <div
              className="relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 h-full border border-white/10 hover:border-white/20"
              style={{
                boxShadow: `0 0 15px ${character.color}20`,
              }}
            >
              {/* Background chakra effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${character.color}, transparent 70%)` }}
              />

              <div className="p-5">
                {/* Character image */}
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={character.imageSrc || "/placeholder.svg"}
                    alt={character.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 10px ${character.color}40`,
                    }}
                  />
                </div>

                {/* Character info */}
                <h3 className="text-xl font-bold mb-1" style={{ color: character.color }}>
                  {character.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#FFD700]/80 text-sm">{character.role}</span>
                  <span className="text-[#FFD700]/50 text-xs">•</span>
                  <span className="text-[#FFD700]/80 text-sm">{character.village}</span>
                </div>

                {/* Jutsu tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {character.jutsu.slice(0, 3).map((jutsu, index) => {
                    // Handle both string and object jutsu formats
                    const jutsuName = typeof jutsu === "string" ? jutsu : jutsu.name || ""
                    return (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-black/30 text-[#FFD700]/90 border-[#FFD700]/30"
                      >
                        {jutsuName}
                      </Badge>
                    )
                  })}
                </div>

                {/* View profile link */}
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="text-[#FFD700]/60 hover:text-[#FFD700] hover:bg-white/5">
                    View Profile
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View all characters link */}
      <div className="flex justify-center mt-8">
        <Link href="/characters">
          <Button className="bg-[#FF7800] hover:bg-[#FF7800]/90 text-black font-bold">
            View All Characters
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
