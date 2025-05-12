import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VillageCardProps {
  name: string
  description: string
  imageSrc: string
  color: string
  slug: string
  leader: string
  symbol: string
}

export default function VillageCard({ name, description, imageSrc, color, slug, leader, symbol }: VillageCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 h-full flex flex-col"
      style={{
        boxShadow: `0 0 15px ${color}40`,
        borderLeft: `3px solid ${color}`,
      }}
    >
      {/* Background chakra effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
      />

      {/* Village image */}
      <div className="relative h-48 w-full overflow-hidden">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 10px ${color}`,
            border: `1px solid ${color}40`,
          }}
        />
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Village info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 flex-shrink-0 text-[#FFD700]" dangerouslySetInnerHTML={{ __html: symbol }} />
          <h3 className="text-xl font-bold" style={{ color }}>
            {name}
          </h3>
        </div>

        <p className="text-[#FFD700]/70 text-sm mb-4">{description}</p>

        <div className="text-sm text-[#FFD700]/80 mb-4">
          <span className="text-[#FFD700]/50">Leader:</span> {leader}
        </div>

        <div className="mt-auto">
          <Link href={`/villages/${slug}`}>
            <Button
              variant="outline"
              className="w-full border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40"
            >
              Explore Village
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
