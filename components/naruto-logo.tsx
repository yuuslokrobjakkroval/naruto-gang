"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface NarutoLogoProps {
  className?: string
}

export default function NarutoLogo({ className = "" }: NarutoLogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <div className={`relative ${className}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#FF7800" />
        </svg>
      </div>
    )
  }

  const isLight = theme === "light"
  const primaryColor = isLight ? "#FF7800" : "#3D5AFE"
  const secondaryColor = isLight ? "#B30000" : "#9575CD"

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill={primaryColor} />
        <path
          d="M50 15 C 70 30, 70 70, 50 85 C 30 70, 30 30, 50 15"
          fill={secondaryColor}
          stroke="#000"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="10" fill="#000" />
      </svg>
    </div>
  )
}
