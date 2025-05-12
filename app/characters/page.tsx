import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import NarutoLogo from "@/components/naruto-logo"
import FloatingLeaves from "@/components/floating-leaves"
import ThemeToggle from "@/components/theme-toggle"
import { characters } from "@/data/characters"

export const dynamic = "force-dynamic"

export default function CharactersPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121212] text-[#FFD700]">
      {/* Background with Hidden Leaf Village silhouette */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hidden-leaf-village.png')",
          filter: "blur(2px)",
        }}
      />

      {/* Mist overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#121212]/80" />

      {/* Floating leaves animation */}
      <FloatingLeaves />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="flex items-center gap-2">
          <NarutoLogo className="h-10 w-10" />
          <span className="text-xl font-bold tracking-wider">SHINOBI</span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/">
            <Button variant="ghost" className="text-[#FFD700] hover:text-[#FFD700] hover:bg-black/20">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-[#FFD700]">LEGENDARY</span> <span className="text-[#FF7800]">SHINOBI</span>
        </h1>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {characters.map((character) => (
            <Link key={character.id} href={`/characters/${character.slug}`} className="group">
              <div
                className="relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 h-full"
                style={{
                  boxShadow: `0 0 15px ${character.color}40`,
                  borderLeft: `3px solid ${character.color}`,
                }}
              >
                {/* Background chakra effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${character.color}, transparent 70%)` }}
                />

                <div className="flex flex-col h-full">
                  <div className="flex flex-col md:flex-row gap-4 p-5">
                    {/* Character image with chakra border */}
                    <div className="relative flex-shrink-0 w-full md:w-32 h-40 md:h-32 overflow-hidden rounded-md">
                      <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          boxShadow: `inset 0 0 10px ${character.color}`,
                          border: `1px solid ${character.color}40`,
                        }}
                      />
                      <Image
                        src={character.imageSrc || "/placeholder.svg"}
                        alt={character.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Character info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1" style={{ color: character.color }}>
                        {character.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[#FFD700]/80 text-sm">{character.role}</span>
                        <span className="text-[#FFD700]/50 text-xs">•</span>
                        <span className="text-[#FFD700]/80 text-sm">{character.village}</span>
                      </div>
                      <p className="text-[#FFD700]/70 text-sm line-clamp-2 md:line-clamp-3">{character.description}</p>
                    </div>
                  </div>

                  {/* Jutsu tags */}
                  <div className="px-5 pb-5 mt-auto">
                    <h4 className="text-[#FFD700] text-sm font-semibold mb-2">Signature Jutsu:</h4>
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20 py-6 text-center text-[#FFD700]/60">
        <p>© {new Date().getFullYear()} Hidden Leaf Village. All rights reserved.</p>
      </footer>
    </div>
  )
}
