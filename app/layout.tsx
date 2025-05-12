import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeModeScript } from "@/components/theme-mode-script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Naruto Shinobi World",
  description: "Explore the world of Naruto, its characters, villages, and jutsu",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ThemeModeScript />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
