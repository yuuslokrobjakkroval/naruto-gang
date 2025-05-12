"use client"

import { useEffect, useState } from "react"

interface JutsuEffectProps {
  type:
    | "fire"
    | "water"
    | "lightning"
    | "earth"
    | "wind"
    | "rasengan"
    | "chidori"
    | "sharingan"
    | "sand"
    | "medical"
    | "shadow"
    | "normal"
  isActive: boolean
  position: "left" | "right"
}

export default function JutsuEffect({ type, isActive, position }: JutsuEffectProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number; delay: number }>
  >([])

  useEffect(() => {
    if (isActive) {
      // Generate particles for the effect
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        size: Math.random() * 10 + 5,
        opacity: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 0.5,
      }))
      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [isActive])

  if (!isActive) return null

  // Define colors based on jutsu type
  const getColors = () => {
    switch (type) {
      case "fire":
        return {
          primary: "bg-orange-500",
          secondary: "bg-red-600",
          glow: "shadow-orange-500/50",
          animation: "animate-fireJutsu",
        }
      case "water":
        return {
          primary: "bg-blue-400",
          secondary: "bg-blue-600",
          glow: "shadow-blue-500/50",
          animation: "animate-waterJutsu",
        }
      case "lightning":
        return {
          primary: "bg-yellow-300",
          secondary: "bg-blue-500",
          glow: "shadow-yellow-300/50",
          animation: "animate-lightningJutsu",
        }
      case "earth":
        return {
          primary: "bg-amber-700",
          secondary: "bg-amber-900",
          glow: "shadow-amber-700/50",
          animation: "animate-earthJutsu",
        }
      case "wind":
        return {
          primary: "bg-teal-300",
          secondary: "bg-cyan-500",
          glow: "shadow-teal-300/50",
          animation: "animate-windJutsu",
        }
      case "rasengan":
        return {
          primary: "bg-blue-400",
          secondary: "bg-blue-600",
          glow: "shadow-blue-400/70",
          animation: "animate-rasenganJutsu",
        }
      case "chidori":
        return {
          primary: "bg-blue-400",
          secondary: "bg-purple-500",
          glow: "shadow-blue-400/70",
          animation: "animate-chidoriJutsu",
        }
      case "sharingan":
        return {
          primary: "bg-red-600",
          secondary: "bg-red-800",
          glow: "shadow-red-600/70",
          animation: "animate-sharinganJutsu",
        }
      case "sand":
        return {
          primary: "bg-amber-300",
          secondary: "bg-yellow-600",
          glow: "shadow-amber-300/50",
          animation: "animate-sandJutsu",
        }
      case "medical":
        return {
          primary: "bg-green-400",
          secondary: "bg-green-600",
          glow: "shadow-green-400/50",
          animation: "animate-medicalJutsu",
        }
      case "shadow":
        return {
          primary: "bg-gray-700",
          secondary: "bg-gray-900",
          glow: "shadow-gray-700/50",
          animation: "animate-shadowJutsu",
        }
      default:
        return {
          primary: "bg-gray-400",
          secondary: "bg-gray-600",
          glow: "shadow-gray-400/50",
          animation: "animate-normalJutsu",
        }
    }
  }

  const { primary, secondary, glow, animation } = getColors()

  // Render specific effects based on jutsu type
  const renderSpecificEffect = () => {
    switch (type) {
      case "rasengan":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-16 h-16 rounded-full ${primary} ${animation} shadow-lg ${glow}`}></div>
            <div className="absolute w-24 h-24 rounded-full border-2 border-blue-400 opacity-50 animate-spin"></div>
            <div
              className="absolute w-32 h-32 rounded-full border-2 border-blue-300 opacity-30 animate-spin"
              style={{ animationDirection: "reverse" }}
            ></div>
          </div>
        )
      case "chidori":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-16 h-16 rounded-full ${primary} ${animation} shadow-lg ${glow}`}></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-blue-300 opacity-70"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 30 + 20}px`,
                  transform: `rotate(${i * 45}deg) translateY(-30px)`,
                  animation: "lightningFlash 0.5s infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        )
      case "sharingan":
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-20 h-20 rounded-full bg-red-700 ${animation} shadow-lg ${glow} flex items-center justify-center`}
            >
              <div className="w-10 h-10 rounded-full bg-black"></div>
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-6 bg-black rounded-full"
                  style={{
                    transform: `rotate(${i * 120}deg) translateY(-6px)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-20 h-20 rounded-full ${primary} ${animation} shadow-lg ${glow}`}></div>
          </div>
        )
    }
  }

  return (
    <div
      className={`absolute z-10 w-40 h-40 ${position === "left" ? "left-1/4" : "right-1/4"} top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      {renderSpecificEffect()}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${Math.random() > 0.5 ? primary : secondary}`}
          style={
            {
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: "50%",
              top: "50%",
              opacity: particle.opacity,
              transform: `translate(-50%, -50%)`,
              animation: `particleFade 1s forwards ${particle.delay}s`,
              "--x": `${particle.x}px`,
              "--y": `${particle.y}px`,
            } as any
          }
        ></div>
      ))}
    </div>
  )
}
