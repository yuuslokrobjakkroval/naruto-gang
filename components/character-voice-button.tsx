"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Character-specific voice lines
const CHARACTER_VOICE_LINES: Record<string, string[]> = {
  "naruto-uzumaki": [
    "Believe it!",
    "I'm going to be Hokage someday!",
    "Shadow Clone Jutsu!",
    "Rasengan!",
    "That's my ninja way!",
  ],
  "sasuke-uchiha": [
    "Chidori!",
    "You're still too weak.",
    "I will restore my clan.",
    "Amaterasu!",
    "You don't have enough hatred.",
  ],
  "sakura-haruno": ["Cha!", "I won't be a burden anymore!", "Shannaro!", "I've finally caught up to them."],
  "kakashi-hatake": [
    "A thousand years of death!",
    "I'm always late because I got lost on the path of life.",
    "Look underneath the underneath.",
    "Lightning Blade!",
  ],
  "itachi-uchiha": [
    "Foolish little brother.",
    "You lack hatred.",
    "Tsukuyomi!",
    "Every jutsu has a weakness.",
    "Forgive me, Sasuke.",
  ],
  "hinata-hyuga": ["Naruto-kun...", "I won't give up!", "Gentle Fist!", "Byakugan!", "I'll do my best!"],
  gaara: [
    "Sand Coffin!",
    "Sand Burial!",
    "I fight only for myself.",
    "My existence will not disappear.",
    "Blood... Mother wants your blood!",
  ],
  // Default lines for characters without specific ones
  default: ["This is my ninja way!", "I won't give up!", "Prepare yourself!", "Feel my power!"],
}

// Japanese voice lines for characters with more authentic phrases
const JAPANESE_VOICE_LINES: Record<string, string[]> = {
  "naruto-uzumaki": [
    "だってばよ！",
    "俺は火影になるんだってばよ！",
    "影分身の術！",
    "螺旋丸！",
    "それが俺の忍道だ！",
    "九尾の力を借りるってばよ！",
  ],
  "sasuke-uchiha": [
    "千鳥！",
    "まだ弱いな。",
    "俺は一族を復活させる。",
    "天照！",
    "お前には憎しみが足りない。",
    "写輪眼！",
  ],
  "sakura-haruno": [
    "しゃーんなろー！",
    "もう足手まといにはならない！",
    "しゃんなろ！",
    "やっと二人に追いついた。",
    "私が守る番よ！",
  ],
  "kakashi-hatake": ["千年殺し！", "道に迷ってね。", "裏を読め。", "雷切！", "コピー忍者のカカシだ。"],
  "itachi-uchiha": [
    "愚かな弟よ。",
    "憎しみが足りない。",
    "月読！",
    "すべての術には弱点がある。",
    "許せサスケ、これで最後だ。",
    "またいつか会おう。",
  ],
  "hinata-hyuga": ["ナルトくん...", "私、諦めない！", "柔拳！", "白眼！", "頑張ります！", "これが日向の力です！"],
  gaara: [
    "砂縛柩！",
    "砂葬！",
    "私は自分だけのために戦う。",
    "私の存在は消えない。",
    "血...母さんは血が欲しいんだ！",
    "砂の盾。",
  ],
  // Default Japanese lines
  default: ["これが私の忍道だ！", "諦めない！", "覚悟しろ！", "私の力を見せてやる！", "忍として生きる！"],
}

interface CharacterVoiceButtonProps {
  character: {
    name: string
    color?: string
  }
}

export default function CharacterVoiceButton({ character }: CharacterVoiceButtonProps) {
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [currentLine, setCurrentLine] = useState("")
  const effectContainerRef = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<"english" | "japanese">("english")

  useEffect(() => {
    setIsMounted(true)

    // Check if user has previously set sound preference
    const savedSoundPreference = localStorage.getItem("characterSoundEnabled")
    if (savedSoundPreference !== null) {
      setSoundEnabled(savedSoundPreference === "true")
    }
  }, [])

  // Clean up effects when component unmounts
  useEffect(() => {
    return () => {
      if (effectContainerRef.current) {
        effectContainerRef.current.innerHTML = ""
      }
    }
  }, [])

  if (!isMounted) return null

  const toggleSound = () => {
    const newSetting = !soundEnabled
    setSoundEnabled(newSetting)
    localStorage.setItem("characterSoundEnabled", newSetting.toString())
  }

  // Create character-specific visual effects
  const createVisualEffect = () => {
    if (!effectContainerRef.current) return

    // Clear previous effects
    effectContainerRef.current.innerHTML = ""

    // Create different effects based on character
    switch (character.name) {
      case "naruto-uzumaki":
        createNarutoEffect()
        break
      case "sasuke-uchiha":
        createSasukeEffect()
        break
      case "sakura-haruno":
        createSakuraEffect()
        break
      case "kakashi-hatake":
        createKakashiEffect()
        break
      case "itachi-uchiha":
        createItachiEffect()
        break
      case "hinata-hyuga":
        createHinataEffect()
        break
      case "gaara":
        createGaaraEffect()
        break
      default:
        createDefaultEffect()
    }
  }

  // Naruto: Rasengan-like spiral effect
  const createNarutoEffect = () => {
    if (!effectContainerRef.current) return

    // Create spiraling chakra particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      const size = Math.random() * 6 + 2
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 40 + 10
      const duration = Math.random() * 1 + 1

      particle.className = "absolute rounded-full"
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.backgroundColor = "#FF7800"
      particle.style.boxShadow = "0 0 5px #FF7800"
      particle.style.left = "50%"
      particle.style.top = "50%"
      particle.style.transform = "translate(-50%, -50%)"
      particle.style.opacity = "0"

      // Create spiral animation
      particle.animate(
        [
          {
            transform: "translate(-50%, -50%) rotate(0deg)",
            opacity: 0,
          },
          {
            transform: `translate(calc(-50% + ${Math.cos(angle) * radius}px), calc(-50% + ${
              Math.sin(angle) * radius
            }px)) rotate(180deg)`,
            opacity: 0.8,
          },
          {
            transform: `translate(calc(-50% + ${Math.cos(angle + Math.PI) * radius * 0.5}px), calc(-50% + ${
              Math.sin(angle + Math.PI) * radius * 0.5
            }px)) rotate(360deg)`,
            opacity: 0,
          },
        ],
        {
          duration: duration * 1000,
          iterations: 2,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(particle)
    }

    // Add rasengan core
    const core = document.createElement("div")
    core.className = "absolute rounded-full"
    core.style.width = "20px"
    core.style.height = "20px"
    core.style.backgroundColor = "#FF7800"
    core.style.boxShadow = "0 0 15px #FF7800"
    core.style.left = "50%"
    core.style.top = "50%"
    core.style.transform = "translate(-50%, -50%)"
    core.style.opacity = "0"

    core.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
        { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(core)
  }

  // Sasuke: Chidori-like lightning effect
  const createSasukeEffect = () => {
    if (!effectContainerRef.current) return

    // Create lightning bolts
    for (let i = 0; i < 15; i++) {
      const bolt = document.createElement("div")
      const angle = Math.random() * Math.PI * 2
      const length = Math.random() * 50 + 20
      const width = Math.random() * 2 + 1
      const delay = Math.random() * 0.5

      bolt.className = "absolute bg-blue-500"
      bolt.style.width = `${width}px`
      bolt.style.height = `${length}px`
      bolt.style.backgroundColor = "#3D5AFE"
      bolt.style.boxShadow = "0 0 8px #3D5AFE"
      bolt.style.left = "50%"
      bolt.style.top = "50%"
      bolt.style.transformOrigin = "center bottom"
      bolt.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`
      bolt.style.opacity = "0"
      bolt.style.borderRadius = "2px"

      // Create zigzag shape for lightning
      bolt.style.clipPath = "polygon(0 0, 100% 0, 50% 30%, 100% 60%, 50% 100%, 0 60%, 50% 30%)"

      bolt.animate(
        [
          { opacity: 0, transform: `translate(-50%, -50%) rotate(${angle}rad) scale(0.2)` },
          { opacity: 0.9, transform: `translate(-50%, -50%) rotate(${angle}rad) scale(1)` },
          { opacity: 0, transform: `translate(-50%, -50%) rotate(${angle}rad) scale(0.2)` },
        ],
        {
          duration: 500,
          iterations: 4,
          delay: delay * 1000,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(bolt)
    }

    // Add electric core
    const core = document.createElement("div")
    core.className = "absolute rounded-full"
    core.style.width = "15px"
    core.style.height = "15px"
    core.style.backgroundColor = "#3D5AFE"
    core.style.boxShadow = "0 0 15px #3D5AFE"
    core.style.left = "50%"
    core.style.top = "50%"
    core.style.transform = "translate(-50%, -50%)"
    core.style.opacity = "0"

    core.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
        { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.5)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(core)
  }

  // Sakura: Cherry blossom petals
  const createSakuraEffect = () => {
    if (!effectContainerRef.current) return

    // Create cherry blossom petals
    for (let i = 0; i < 25; i++) {
      const petal = document.createElement("div")
      const size = Math.random() * 8 + 4
      const startX = Math.random() * 100 - 50
      const startY = Math.random() * 100 - 50
      const endX = Math.random() * 200 - 100
      const endY = Math.random() * 200 - 100
      const duration = Math.random() * 2 + 1
      const delay = Math.random() * 0.5

      petal.className = "absolute"
      petal.style.width = `${size}px`
      petal.style.height = `${size}px`
      petal.style.backgroundColor = "#F06292"
      petal.style.borderRadius = "100% 0 100% 0"
      petal.style.boxShadow = "0 0 5px #F06292"
      petal.style.left = "50%"
      petal.style.top = "50%"
      petal.style.transform = `translate(${startX}px, ${startY}px) rotate(${Math.random() * 360}deg)`
      petal.style.opacity = "0"

      petal.animate(
        [
          { opacity: 0, transform: `translate(${startX}px, ${startY}px) rotate(0deg)` },
          { opacity: 0.8, transform: `translate(${startX * 0.5}px, ${startY * 0.5}px) rotate(180deg)` },
          { opacity: 0, transform: `translate(${endX}px, ${endY}px) rotate(360deg)` },
        ],
        {
          duration: duration * 1000,
          iterations: 1,
          delay: delay * 1000,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(petal)
    }

    // Add impact effect
    const impact = document.createElement("div")
    impact.className = "absolute rounded-full"
    impact.style.width = "30px"
    impact.style.height = "30px"
    impact.style.backgroundColor = "#F06292"
    impact.style.boxShadow = "0 0 15px #F06292"
    impact.style.left = "50%"
    impact.style.top = "50%"
    impact.style.transform = "translate(-50%, -50%)"
    impact.style.opacity = "0"

    impact.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.2)" },
        { opacity: 0.7, transform: "translate(-50%, -50%) scale(1)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(2)" },
      ],
      {
        duration: 800,
        iterations: 1,
        easing: "ease-out",
      },
    )

    effectContainerRef.current.appendChild(impact)
  }

  // Kakashi: Copy wheel and lightning
  const createKakashiEffect = () => {
    if (!effectContainerRef.current) return

    // Create sharingan-like effect
    const sharingan = document.createElement("div")
    sharingan.className = "absolute rounded-full"
    sharingan.style.width = "30px"
    sharingan.style.height = "30px"
    sharingan.style.backgroundColor = "#B30000"
    sharingan.style.boxShadow = "0 0 10px #B30000"
    sharingan.style.left = "50%"
    sharingan.style.top = "50%"
    sharingan.style.transform = "translate(-50%, -50%)"
    sharingan.style.opacity = "0"

    // Add tomoe (comma-like marks in sharingan)
    for (let i = 0; i < 3; i++) {
      const tomoe = document.createElement("div")
      tomoe.className = "absolute"
      tomoe.style.width = "8px"
      tomoe.style.height = "12px"
      tomoe.style.backgroundColor = "black"
      tomoe.style.borderRadius = "50% 50% 50% 50% / 80% 80% 20% 20%"
      tomoe.style.left = "50%"
      tomoe.style.top = "25%"
      tomoe.style.transformOrigin = "center 150%"
      tomoe.style.transform = `translate(-50%, -50%) rotate(${i * 120}deg)`

      sharingan.appendChild(tomoe)
    }

    sharingan.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5) rotate(0deg)" },
        { opacity: 0.9, transform: "translate(-50%, -50%) scale(1) rotate(180deg)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5) rotate(360deg)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(sharingan)

    // Add lightning bolts
    for (let i = 0; i < 8; i++) {
      const bolt = document.createElement("div")
      const angle = (i * Math.PI) / 4
      const length = Math.random() * 30 + 20
      const width = Math.random() * 2 + 1
      const delay = Math.random() * 0.3

      bolt.className = "absolute"
      bolt.style.width = `${width}px`
      bolt.style.height = `${length}px`
      bolt.style.backgroundColor = "#90A4AE"
      bolt.style.boxShadow = "0 0 5px #90A4AE"
      bolt.style.left = "50%"
      bolt.style.top = "50%"
      bolt.style.transformOrigin = "center bottom"
      bolt.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`
      bolt.style.opacity = "0"

      bolt.animate(
        [
          { opacity: 0, height: "0px" },
          { opacity: 0.8, height: `${length}px` },
          { opacity: 0, height: "0px" },
        ],
        {
          duration: 500,
          iterations: 2,
          delay: delay * 1000,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(bolt)
    }
  }

  // Itachi: Crow silhouettes
  const createItachiEffect = () => {
    if (!effectContainerRef.current) return

    // Create crow silhouettes
    for (let i = 0; i < 12; i++) {
      const crow = document.createElement("div")
      const size = Math.random() * 10 + 5
      const startX = 0
      const startY = 0
      const endX = (Math.random() - 0.5) * 200
      const endY = (Math.random() - 0.5) * 200
      const duration = Math.random() * 1.5 + 1
      const delay = Math.random() * 0.5

      crow.className = "absolute"
      crow.style.width = `${size}px`
      crow.style.height = `${size}px`
      crow.style.backgroundColor = "#000000"
      crow.style.boxShadow = "0 0 5px #B30000"
      crow.style.left = "50%"
      crow.style.top = "50%"
      crow.style.clipPath = "polygon(40% 0%, 40% 20%, 100% 50%, 40% 80%, 40% 100%, 0% 50%)"
      crow.style.transform = `translate(${startX}px, ${startY}px) rotate(${Math.random() * 360}deg)`
      crow.style.opacity = "0"

      crow.animate(
        [
          { opacity: 0, transform: `translate(${startX}px, ${startY}px) rotate(0deg)` },
          { opacity: 0.9, transform: `translate(${endX * 0.3}px, ${endY * 0.3}px) rotate(${Math.random() * 360}deg)` },
          { opacity: 0, transform: `translate(${endX}px, ${endY}px) rotate(${Math.random() * 360}deg)` },
        ],
        {
          duration: duration * 1000,
          iterations: 1,
          delay: delay * 1000,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(crow)
    }

    // Add mangekyo sharingan effect
    const sharingan = document.createElement("div")
    sharingan.className = "absolute rounded-full"
    sharingan.style.width = "30px"
    sharingan.style.height = "30px"
    sharingan.style.backgroundColor = "#B30000"
    sharingan.style.boxShadow = "0 0 15px #B30000"
    sharingan.style.left = "50%"
    sharingan.style.top = "50%"
    sharingan.style.transform = "translate(-50%, -50%)"
    sharingan.style.opacity = "0"

    // Add mangekyo pattern (simplified)
    const pattern = document.createElement("div")
    pattern.className = "absolute"
    pattern.style.width = "20px"
    pattern.style.height = "20px"
    pattern.style.left = "50%"
    pattern.style.top = "50%"
    pattern.style.transform = "translate(-50%, -50%)"
    pattern.style.borderRadius = "50%"
    pattern.style.border = "2px solid black"
    pattern.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"

    sharingan.appendChild(pattern)

    sharingan.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5) rotate(0deg)" },
        { opacity: 0.9, transform: "translate(-50%, -50%) scale(1) rotate(180deg)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5) rotate(360deg)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(sharingan)
  }

  // Hinata: Gentle fist ripples
  const createHinataEffect = () => {
    if (!effectContainerRef.current) return

    // Create byakugan effect
    const byakugan = document.createElement("div")
    byakugan.className = "absolute rounded-full"
    byakugan.style.width = "30px"
    byakugan.style.height = "30px"
    byakugan.style.backgroundColor = "#9575CD"
    byakugan.style.boxShadow = "0 0 15px #9575CD"
    byakugan.style.left = "50%"
    byakugan.style.top = "50%"
    byakugan.style.transform = "translate(-50%, -50%)"
    byakugan.style.opacity = "0"

    byakugan.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
        { opacity: 0.8, transform: "translate(-50%, -50%) scale(1)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(byakugan)

    // Create gentle fist ripples
    for (let i = 0; i < 4; i++) {
      const ripple = document.createElement("div")
      ripple.className = "absolute rounded-full border-2"
      ripple.style.width = "20px"
      ripple.style.height = "20px"
      ripple.style.borderColor = "#9575CD"
      ripple.style.boxShadow = "0 0 5px #9575CD"
      ripple.style.left = "50%"
      ripple.style.top = "50%"
      ripple.style.transform = "translate(-50%, -50%)"
      ripple.style.opacity = "0"

      ripple.animate(
        [
          { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
          { opacity: 0.8, transform: "translate(-50%, -50%) scale(2)" },
          { opacity: 0, transform: "translate(-50%, -50%) scale(4)" },
        ],
        {
          duration: 1500,
          iterations: 1,
          delay: i * 300,
          easing: "ease-out",
        },
      )

      effectContainerRef.current.appendChild(ripple)
    }

    // Create chakra points
    for (let i = 0; i < 8; i++) {
      const point = document.createElement("div")
      const angle = (i * Math.PI) / 4
      const distance = 40

      point.className = "absolute rounded-full"
      point.style.width = "5px"
      point.style.height = "5px"
      point.style.backgroundColor = "#9575CD"
      point.style.boxShadow = "0 0 5px #9575CD"
      point.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`
      point.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`
      point.style.opacity = "0"

      point.animate([{ opacity: 0 }, { opacity: 0.8 }, { opacity: 0 }], {
        duration: 1000,
        iterations: 2,
        delay: i * 100,
        easing: "ease-in-out",
      })

      effectContainerRef.current.appendChild(point)
    }
  }

  // Gaara: Sand particles
  const createGaaraEffect = () => {
    if (!effectContainerRef.current) return

    // Create sand particles
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div")
      const size = Math.random() * 4 + 2
      const startX = (Math.random() - 0.5) * 100
      const startY = (Math.random() - 0.5) * 100
      const endX = (Math.random() - 0.5) * 50
      const endY = (Math.random() - 0.5) * 50
      const duration = Math.random() * 2 + 1
      const delay = Math.random() * 0.5

      particle.className = "absolute rounded-full"
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.backgroundColor = "#E6A23C"
      particle.style.boxShadow = "0 0 2px #E6A23C"
      particle.style.left = "50%"
      particle.style.top = "50%"
      particle.style.transform = `translate(${startX}px, ${startY}px)`
      particle.style.opacity = "0"

      particle.animate(
        [
          { opacity: 0, transform: `translate(${startX}px, ${startY}px)` },
          { opacity: 0.8, transform: `translate(${endX}px, ${endY}px)` },
          { opacity: 0, transform: `translate(${startX}px, ${startY}px)` },
        ],
        {
          duration: duration * 1000,
          iterations: 1,
          delay: delay * 1000,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(particle)
    }

    // Add sand core
    const core = document.createElement("div")
    core.className = "absolute rounded-full"
    core.style.width = "30px"
    core.style.height = "30px"
    core.style.backgroundColor = "#E6A23C"
    core.style.boxShadow = "0 0 15px #E6A23C"
    core.style.left = "50%"
    core.style.top = "50%"
    core.style.transform = "translate(-50%, -50%)"
    core.style.opacity = "0"

    core.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
        { opacity: 0.7, transform: "translate(-50%, -50%) scale(1)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(core)
  }

  // Default effect for other characters
  const createDefaultEffect = () => {
    if (!effectContainerRef.current) return

    // Create chakra particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      const size = Math.random() * 6 + 2
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 50 + 10
      const duration = Math.random() * 1.5 + 0.5
      const delay = Math.random() * 0.5

      particle.className = "absolute rounded-full"
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.backgroundColor = character.color || "#9CA3AF"
      particle.style.boxShadow = `0 0 5px ${character.color || "#9CA3AF"}`
      particle.style.left = "50%"
      particle.style.top = "50%"
      particle.style.transform = "translate(-50%, -50%)"
      particle.style.opacity = "0"

      particle.animate(
        [
          { opacity: 0, transform: "translate(-50%, -50%)" },
          {
            opacity: 0.8,
            transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${
              Math.sin(angle) * distance
            }px))`,
          },
          { opacity: 0, transform: "translate(-50%, -50%)" },
        ],
        {
          duration: duration * 1000,
          iterations: 1,
          delay: delay * 1000,
          easing: "ease-in-out",
        },
      )

      effectContainerRef.current.appendChild(particle)
    }

    // Add chakra core
    const core = document.createElement("div")
    core.className = "absolute rounded-full"
    core.style.width = "20px"
    core.style.height = "20px"
    core.style.backgroundColor = character.color || "#9CA3AF"
    core.style.boxShadow = `0 0 15px ${character.color || "#9CA3AF"}`
    core.style.left = "50%"
    core.style.top = "50%"
    core.style.transform = "translate(-50%, -50%)"
    core.style.opacity = "0"

    core.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
        { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" },
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.5)" },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      },
    )

    effectContainerRef.current.appendChild(core)
  }

  const playVoiceLine = () => {
    if (!soundEnabled || isPlaying) return

    // Get character-specific lines based on selected language
    const lines =
      language === "english"
        ? CHARACTER_VOICE_LINES[character.name] || CHARACTER_VOICE_LINES.default
        : JAPANESE_VOICE_LINES[character.name] || JAPANESE_VOICE_LINES.default

    const randomLine = lines[Math.floor(Math.random() * lines.length)]
    setCurrentLine(randomLine)

    // Create visual effects
    createVisualEffect()

    // Use the Web Speech API for voice synthesis
    if ("speechSynthesis" in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(randomLine)

      // Set language based on selection
      utterance.lang = language === "english" ? "en-US" : "ja-JP"

      // Customize voice based on character
      if (character.name === "naruto-uzumaki") {
        utterance.pitch = 1.2
        utterance.rate = 1.1
      } else if (character.name === "sasuke-uchiha" || character.name === "itachi-uchiha") {
        utterance.pitch = 0.9
        utterance.rate = 0.9
      } else if (character.name === "sakura-haruno" || character.name === "hinata-hyuga") {
        utterance.pitch = 1.4
        utterance.rate = 1.0
      } else if (character.name === "kakashi-hatake") {
        utterance.pitch = 1.0
        utterance.rate = 0.9
      } else if (character.name === "gaara") {
        utterance.pitch = 0.8
        utterance.rate = 0.8
      } else {
        utterance.pitch = 1.1
        utterance.rate = 1.0
      }

      utterance.volume = 0.8

      // Try to get appropriate voice if available
      const voices = window.speechSynthesis.getVoices()

      if (language === "japanese") {
        // Try to find a Japanese voice
        const japaneseVoice = voices.find(
          (voice) =>
            voice.lang.includes("ja") ||
            voice.name.toLowerCase().includes("japan") ||
            voice.name.toLowerCase().includes("ja-"),
        )

        if (japaneseVoice) {
          utterance.voice = japaneseVoice
          console.log("Using Japanese voice:", japaneseVoice.name)
        } else {
          console.log("No Japanese voice found, using default voice")
        }
      } else {
        // English voices based on character gender and personality
        if (character.name === "sakura-haruno" || character.name === "hinata-hyuga") {
          const femaleVoice = voices.find(
            (voice) =>
              voice.name.includes("Female") || voice.name.includes("woman") || voice.name.toLowerCase().includes("f_"),
          )
          if (femaleVoice) utterance.voice = femaleVoice
        } else if (character.name === "gaara" || character.name === "itachi-uchiha") {
          // Deeper voice for serious characters
          const deepVoice = voices.find(
            (voice) => voice.name.includes("Male") && (voice.name.includes("Deep") || voice.name.includes("Low")),
          )
          if (deepVoice) utterance.voice = deepVoice
        } else {
          const maleVoice = voices.find((voice) => voice.name.includes("Male"))
          if (maleVoice) utterance.voice = maleVoice
        }
      }

      // Set playing state
      setIsPlaying(true)

      // Reset playing state when done
      utterance.onend = () => {
        setIsPlaying(false)
        setCurrentLine("")
      }

      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <Button
          onClick={playVoiceLine}
          variant="ghost"
          size="sm"
          disabled={!soundEnabled || isPlaying}
          className={cn(
            "flex items-center gap-1 transition-all",
            isPlaying ? "animate-pulse" : "",
            !soundEnabled ? "opacity-50" : "",
          )}
          style={{ color: character.color }}
        >
          <Volume2 className="h-4 w-4 mr-1" />
          Hear {character.name}
        </Button>

        <button
          onClick={toggleSound}
          className={cn(
            "p-1 rounded-full transition-colors",
            soundEnabled ? "text-[#FFD700] hover:bg-[#FFD700]/10" : "text-[#FFD700]/50 hover:bg-[#FFD700]/5",
          )}
          aria-label={soundEnabled ? "Disable character sounds" : "Enable character sounds"}
        >
          {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>

        <button
          onClick={() => setLanguage((lang) => (lang === "english" ? "japanese" : "english"))}
          className={cn(
            "px-2 py-1 rounded transition-colors ml-1",
            "border border-[#FFD700]/20 hover:bg-[#FFD700]/10",
            language === "japanese" ? "bg-[#FFD700]/10 text-[#FFD700]" : "text-[#FFD700]/70",
          )}
          aria-label={language === "english" ? "Switch to Japanese" : "Switch to English"}
          title={language === "english" ? "Switch to Japanese" : "Switch to English"}
        >
          <span className="text-xs font-bold">{language === "english" ? "日本語" : "English"}</span>
        </button>
      </div>

      {/* Visual effects container */}
      <div className="relative w-full h-12">
        {/* Current line display */}
        {currentLine && (
          <div
            className="absolute inset-0 flex items-center justify-center text-sm font-medium animate-pulse"
            style={{ color: character.color }}
          >
            "{currentLine}"
          </div>
        )}

        {/* Effects container */}
        <div ref={effectContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden"></div>
      </div>
    </div>
  )
}
