"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

// Hand signs for jutsu casting
const HAND_SIGNS = [
  "子", // Ne (Rat)
  "丑", // Ushi (Ox)
  "寅", // Tora (Tiger)
  "卯", // U (Rabbit)
  "辰", // Tatsu (Dragon)
  "巳", // Mi (Snake)
]

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentHandSign, setCurrentHandSign] = useState(-1)
  const [showJutsuEffect, setShowJutsuEffect] = useState(false)
  const [showFinalEffect, setShowFinalEffect] = useState(false)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)

    // Initialize theme-specific variables when component mounts
    if (theme) {
      updateThemeColors(theme)
    }
  }, [theme])

  // Add this function to update all theme-related CSS variables
  const updateThemeColors = (currentTheme: string) => {
    const isLightTheme = currentTheme === "light"

    // Update CSS variables for theme colors
    document.documentElement.style.setProperty("--primary-color", isLightTheme ? "#FF7800" : "#3D5AFE")
    document.documentElement.style.setProperty("--secondary-color", isLightTheme ? "#B30000" : "#9575CD")
    document.documentElement.style.setProperty("--background-color", isLightTheme ? "#f8f5e6" : "#121212")
    document.documentElement.style.setProperty("--text-color", isLightTheme ? "#121212" : "#FFD700")

    // Update specific component colors
    document.documentElement.style.setProperty("--button-hover", isLightTheme ? "#FF7800/20" : "#3D5AFE/20")
    document.documentElement.style.setProperty("--card-border", isLightTheme ? "#FF7800/40" : "#3D5AFE/40")

    // Add a transition class to the body for smooth color changes
    document.body.classList.add("theme-transition")

    // Remove the transition class after the transition completes to avoid affecting other animations
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
    }, 500)
  }

  if (!mounted) {
    return null
  }

  const isLight = theme === "light"

  const createParticles = (isDark: boolean) => {
    if (!particlesRef.current) return

    const particleCount = 20
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full w-1 h-1"
      particle.style.backgroundColor = isDark ? "#9575CD" : "#FF7800"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animation = `particleAnimation ${Math.random() * 1 + 0.5}s ease-out forwards`
      particle.style.transform = `translate(-50%, -50%)`

      particlesRef.current.appendChild(particle)

      // Clean up particles after animation
      setTimeout(() => {
        particle.remove()
      }, 1000)
    }
  }

  // Update the handleToggle function to use the new updateThemeColors function
  const handleToggle = () => {
    if (isAnimating) return

    setIsAnimating(true)

    // Start hand sign sequence
    setCurrentHandSign(0)

    // Hand sign animation sequence
    const handSignInterval = setInterval(() => {
      setCurrentHandSign((prev) => {
        if (prev >= HAND_SIGNS.length - 1) {
          clearInterval(handSignInterval)

          // After hand signs, show chakra gathering
          createParticles(!isLight)
          setShowJutsuEffect(true)

          // After chakra gathering, show final effect and change theme
          setTimeout(() => {
            setShowJutsuEffect(false)
            setShowFinalEffect(true)

            // Change theme
            const newTheme = isLight ? "dark" : "light"
            setTheme(newTheme)
            updateThemeColors(newTheme)

            // Reset animation states after everything completes
            setTimeout(() => {
              setShowFinalEffect(false)
              setCurrentHandSign(-1)
              setIsAnimating(false)
            }, 1000)
          }, 800)

          return -1
        }
        return prev + 1
      })
    }, 200) // Speed of hand signs
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500",
          "border-2 overflow-hidden",
          isLight
            ? "bg-gradient-to-br from-[#FFD700]/20 to-[#FF7800]/40 border-[#FF7800]"
            : "bg-gradient-to-br from-[#3D5AFE]/20 to-[#9575CD]/40 border-[#3D5AFE]",
          isAnimating && "scale-110",
        )}
        aria-label={isLight ? "Switch to Moonlight theme" : "Switch to Land of Fire theme"}
        disabled={isAnimating}
      >
        {/* Theme indicator icon (only shown when not animating) */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-500",
            (isAnimating || currentHandSign >= 0) && "opacity-0 scale-0",
          )}
        >
          {isLight ? <Sun className="h-6 w-6 text-[#FF7800]" /> : <Moon className="h-6 w-6 text-[#9575CD]" />}
        </div>

        {/* Hand sign animation */}
        {currentHandSign >= 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold animate-handSign" style={{ color: isLight ? "#B30000" : "#3D5AFE" }}>
              {HAND_SIGNS[currentHandSign]}
            </span>
          </div>
        )}

        {/* Chakra gathering effect */}
        {showJutsuEffect && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-8 h-8 rounded-full animate-chakraGather"
              style={{
                backgroundColor: isLight ? "#B30000" : "#3D5AFE",
                boxShadow: `0 0 15px ${isLight ? "#FF7800" : "#9575CD"}`,
              }}
            />
          </div>
        )}

        {/* Particles container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

        {/* Final jutsu effect */}
        {showFinalEffect && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 animate-jutsuRelease rounded-full"
              style={{
                backgroundColor: isLight ? "#3D5AFE" : "#FF7800",
                opacity: 0.8,
              }}
            />
            <span
              className="text-lg font-bold animate-jutsuSymbol z-10"
              style={{ color: isLight ? "#121212" : "#FFFFFF" }}
            >
              {isLight ? "月" : "火"}
            </span>
          </div>
        )}

        {/* Chakra ripple effect */}
        {isAnimating && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={cn("absolute inset-0 rounded-full", "animate-ripple")}
              style={{
                border: `2px solid ${isLight ? "#3D5AFE" : "#FF7800"}`,
                backgroundColor: "transparent",
              }}
            />
          </div>
        )}
      </button>
    </div>
  )
}
