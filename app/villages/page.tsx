import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NarutoLogo from "@/components/naruto-logo"
import FloatingLeaves from "@/components/floating-leaves"
import VillageCard from "@/components/village-card"
import { VILLAGES } from "@/data/villages"

export default function VillagesPage() {
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
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#FF7800]">HIDDEN</span> VILLAGES
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-[#FFD700]/90">
            Explore the great ninja villages of the shinobi world, each with their unique history, culture, and powerful
            ninja clans.
          </p>
        </div>

        {/* Village grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VILLAGES.map((village) => (
            <VillageCard
              key={village.slug}
              name={village.name}
              description={village.shortDescription}
              imageSrc={village.imageSrc}
              color={village.color}
              slug={village.slug}
              leader={village.leader}
              symbol={village.symbol}
            />
          ))}
        </div>

        {/* World map section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-[#FFD700]">SHINOBI</span> <span className="text-[#FF7800]">WORLD MAP</span>
          </h2>
          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden border border-white/10">
            <Image src="/images/ninja-world-map.png" alt="Ninja World Map" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

            {/* Map markers */}
            {VILLAGES.map((village) => (
              <Link
                key={village.slug}
                href={`/villages/${village.slug}`}
                className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 hover:z-10"
                style={{
                  backgroundColor: village.color,
                  boxShadow: `0 0 10px ${village.color}`,
                  top: village.mapPosition.top,
                  left: village.mapPosition.left,
                }}
              >
                <span className="sr-only">{village.name}</span>
              </Link>
            ))}

            <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1 rounded text-xs text-[#FFD700]/80">
              Click on a village marker to explore
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-[#FFD700]">DISCOVER</span> <span className="text-[#FF7800]">YOUR NINJA WAY</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#FFD700]/80">
            Learn about the rich history, powerful techniques, and legendary shinobi from each village.
          </p>
          <Link href="/#characters">
            <Button className="bg-[#FF7800] hover:bg-[#FF7800]/90 text-black font-bold px-8 py-6 text-lg">
              Explore Characters
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20 py-6 text-center text-[#FFD700]/60">
        <p>© {new Date().getFullYear()} Hidden Leaf Village. All rights reserved.</p>
      </footer>
    </div>
  )
}
