import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotableShinobiProps {
  name: string
  role: string
  description: string
  imageSrc: string
  color: string
  slug: string
}

export default function NotableShinobi({ name, role, description, imageSrc, color, slug }: NotableShinobiProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-white/10 bg-black/20">
      <div className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-md">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 10px ${color}`,
            border: `1px solid ${color}40`,
          }}
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <h3 className="text-lg font-bold" style={{ color }}>
            {name}
          </h3>
          <div className="text-sm text-[#FFD700]/80">{role}</div>
        </div>

        <p className="text-[#FFD700]/70 text-sm line-clamp-2">{description}</p>

        <div className="mt-auto pt-2">
          <Link href={`/characters/${slug}`} className="inline-block">
            <Button variant="ghost" size="sm" className="text-[#FFD700]/60 hover:text-[#FFD700] hover:bg-white/5">
              View Profile
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
