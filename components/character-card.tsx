"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CharacterCardProps {
  id: number
  name: string
  role: string
  village: string
  description: string
  imageSrc: string
  color: string
  jutsu: string[]
  slug: string
}

export default function CharacterCard({
  id,
  name,
  role,
  village,
  description,
  imageSrc,
  color,
  jutsu,
  slug,
}: CharacterCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Add this function before the return statement
  const handleProfileClick = () => {
    setIsLoading(true)
    // The loading state will be reset when the page navigates
  }

  // Ensure the slug is properly formatted
  // Remove this line:
  // const formattedSlug = slug.trim().toLowerCase()

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500",
        isExpanded ? "md:col-span-2 md:row-span-2" : "",
      )}
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

      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row gap-4 p-5">
          {/* Character image with chakra border */}
          <div className="relative flex-shrink-0 w-full md:w-32 h-40 md:h-32 overflow-hidden rounded-md">
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

          {/* Character info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1" style={{ color }}>
              {name}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#FFD700]/80 text-sm">{role}</span>
              <span className="text-[#FFD700]/50 text-xs">•</span>
              <span className="text-[#FFD700]/80 text-sm">{village}</span>
            </div>
            <p className="text-[#FFD700]/70 text-sm line-clamp-2 md:line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Expandable content */}
        <div className={cn("overflow-hidden transition-all duration-500 px-5", isExpanded ? "max-h-96" : "max-h-0")}>
          <div className="pt-2 pb-5">
            <h4 className="text-[#FFD700] font-semibold mb-2">Signature Jutsu:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {jutsu.map((technique, index) => (
                <li key={index} className="flex items-center text-[#FFD700]/70 text-sm">
                  <span className="inline-block w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: color }} />
                  {technique}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-auto p-3 flex justify-between items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#FFD700]/60 hover:text-[#FFD700] hover:bg-white/5"
          >
            {isExpanded ? "Less" : "More"} Info
            <ChevronRight
              className={cn("ml-1 h-4 w-4 transition-transform duration-300", isExpanded ? "rotate-90" : "")}
            />
          </Button>

          {/* Simplified View Profile button with direct link */}
          <Link
            href={`/characters/${slug}`}
            className="inline-flex items-center justify-center border border-[#FFD700]/20 rounded-md px-3 py-1 text-sm font-medium text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40 transition-colors cursor-pointer"
            prefetch={true}
            onClick={handleProfileClick}
          >
            {isLoading ? (
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent mr-1"></span>
            ) : (
              "View Profile"
            )}
            <ChevronRight className={`inline-block ml-1 h-4 w-4 ${isLoading ? "opacity-50" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  )
}
