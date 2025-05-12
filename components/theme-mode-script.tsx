"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeModeScript() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // Apply theme-specific body classes
    if (theme === "light") {
      document.body.classList.add("light-mode")
      document.body.classList.remove("dark-mode")
      document.documentElement.style.setProperty("--page-background", "#f8f5e6")
      document.documentElement.style.setProperty("--text-primary", "#121212")

      // Update theme color variables
      document.documentElement.style.setProperty("--primary-color", "#FF7800")
      document.documentElement.style.setProperty("--secondary-color", "#B30000")
      document.documentElement.style.setProperty("--background-color", "#f8f5e6")
      document.documentElement.style.setProperty("--text-color", "#121212")
      document.documentElement.style.setProperty("--button-hover", "rgba(255, 120, 0, 0.2)")
      document.documentElement.style.setProperty("--card-border", "rgba(255, 120, 0, 0.4)")
    } else {
      document.body.classList.add("dark-mode")
      document.body.classList.remove("light-mode")
      document.documentElement.style.setProperty("--page-background", "#121212")
      document.documentElement.style.setProperty("--text-primary", "#FFD700")

      // Update theme color variables
      document.documentElement.style.setProperty("--primary-color", "#3D5AFE")
      document.documentElement.style.setProperty("--secondary-color", "#9575CD")
      document.documentElement.style.setProperty("--background-color", "#121212")
      document.documentElement.style.setProperty("--text-color", "#FFD700")
      document.documentElement.style.setProperty("--button-hover", "rgba(61, 90, 254, 0.2)")
      document.documentElement.style.setProperty("--card-border", "rgba(61, 90, 254, 0.4)")
    }

    // Add after the existing code in the useEffect hook
    document.documentElement.style.setProperty("--x", `${Math.random() * 40 - 20}px`)
    document.documentElement.style.setProperty("--y", `${Math.random() * 40 - 20}px`)

    // Add a transition class for smooth color changes
    document.body.classList.add("theme-transition")

    // Remove the transition class after the transition completes
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
    }, 500)

    // Force a repaint to ensure all theme changes are applied
    const repaint = document.body.offsetHeight
  }, [theme])

  return null
}
