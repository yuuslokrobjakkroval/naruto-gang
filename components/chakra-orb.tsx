"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ChakraOrb() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="relative w-32 h-32 md:w-40 md:h-40"></div>

  const isLight = theme === "light"
  const primaryColor = isLight ? "#FF7800" : "#3D5AFE"
  const secondaryColor = isLight ? "#B30000" : "#9575CD"

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      {/* Multiple spinning rings to represent chakra */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border-2 opacity-70"
          style={{
            borderColor: primaryColor,
            animation: `spin ${6 + i}s linear infinite`,
            transform: `rotate(${i * 15}deg)`,
            boxShadow: `0 0 15px ${primaryColor}`,
          }}
        />
      ))}

      {/* Inner orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          style={{
            background: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              backgroundColor: primaryColor,
              animation: "pulse 2s ease-in-out infinite",
              boxShadow: `0 0 20px ${primaryColor}, 0 0 40px ${primaryColor}`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
