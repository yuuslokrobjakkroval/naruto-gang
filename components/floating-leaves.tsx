"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function FloatingLeaves() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLight = theme === "light"

  // Generate random leaves
  const leaves = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 10 + 10}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 10 + 15}s`,
  }))

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute opacity-30"
          style={{
            left: leaf.left,
            top: "-20px",
            width: leaf.size,
            height: leaf.size,
            animation: `floatLeaf ${leaf.duration} ease-in-out ${leaf.delay} infinite`,
            background: isLight
              ? "radial-gradient(circle, #FFD700 10%, transparent 70%)"
              : "radial-gradient(circle, #9575CD 10%, transparent 70%)",
            boxShadow: isLight ? "0 0 5px #FFD700" : "0 0 5px #9575CD",
            borderRadius: "50% 0 50% 0",
            transform: "rotate(45deg)",
          }}
        />
      ))}
    </div>
  )
}
