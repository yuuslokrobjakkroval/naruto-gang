"use client"

interface ProgressionStage {
  stage: string
  age: string
  image: string
  description: string
  abilities: string[]
  stats: {
    strength: number
    speed: number
    intelligence: number
    chakraControl: number
    stamina: number
  }
  keyEvents: {
    title: string
    description: string
  }[]
}

interface ProgressionProps {
  progression: {
    character: string
    stages: ProgressionStage[]
  }
}

export default function CharacterProgressionComponent({ progression }: ProgressionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Character Progression</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Track {progression.character}'s growth and development throughout the series.
      </p>

      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">
          Progression timeline is currently in development. Check back soon!
        </p>
      </div>
    </div>
  )
}
