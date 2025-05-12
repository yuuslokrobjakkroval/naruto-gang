import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { characters } from "@/data/characters"
import { characterProgressions } from "@/data/progressions"
import CharacterRelationship from "@/components/character-relationship"
import JutsuDetail from "@/components/jutsu-detail"
import CharacterVoiceButton from "@/components/character-voice-button"
import BattleSimulator from "@/components/battle-simulator"
import CharacterProgressionComponent from "@/components/character-progression"

export default function CharacterPage({ params }: { params: { slug: string } }) {
  const character = characters.find((c) => c.slug === params.slug)
  const progression = characterProgressions[params.slug]

  if (!character) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/characters"
        className="inline-flex items-center mb-4 text-orange-500 hover:text-orange-600 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Characters
      </Link>
      <div className="relative h-64 md:h-80 w-full mb-8 rounded-xl overflow-hidden">
        <Image
          src={
            character.backgroundImage ||
            `/placeholder.svg?height=400&width=1200&query=${character.name || "/placeholder.svg"} background from Naruto`
          }
          alt={`${character.name} background`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 flex items-end">
          <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src={character.imageSrc || "/placeholder.svg"} alt={character.name} fill className="object-cover" />
          </div>
          <div className="ml-4 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">{character.name}</h1>
            <div className="flex flex-wrap gap-2 mt-2">
              {character.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-orange-500/20 text-orange-100 border-orange-500/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <CharacterVoiceButton character={character} />
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="jutsu">Jutsu</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
          <TabsTrigger value="battle">Battle Simulator</TabsTrigger>
          <TabsTrigger value="progression">Progression</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Biography</h2>
                <p className="text-gray-700 dark:text-gray-300">{character.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Personality</h2>
                <p className="text-gray-700 dark:text-gray-300">{character.personality}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Notable Achievements</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {character.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Character Stats</h2>
                <div className="space-y-4">
                  {Object.entries(character.stats).map(([stat, value]) => (
                    <div key={stat} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm capitalize">{stat}</span>
                        <span className="text-sm font-medium">{value}/10</span>
                      </div>
                      <Progress value={value * 10} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold mb-4">Personal Details</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Age:</span>
                    <span>{character.personalDetails.age}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Birthday:</span>
                    <span>{character.personalDetails.birthday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Height:</span>
                    <span>{character.personalDetails.height}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Weight:</span>
                    <span>{character.personalDetails.weight}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Blood Type:</span>
                    <span>{character.personalDetails.bloodType}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Ninja Rank:</span>
                    <span>{character.personalDetails.rank}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Affiliation:</span>
                    <span>{character.personalDetails.affiliation}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="jutsu">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {character.jutsu.map((jutsu, index) => {
              // Handle both string and object jutsu formats
              if (typeof jutsu === "string") {
                // Create a simple jutsu object for string entries
                return (
                  <JutsuDetail
                    key={index}
                    jutsu={{
                      name: jutsu,
                      description: "No detailed information available.",
                      type: "Unknown",
                      rank: "Unknown",
                      chakraNature: "Unknown",
                    }}
                  />
                )
              } else if (typeof jutsu === "object" && jutsu !== null) {
                // For object entries, ensure all required properties exist
                return (
                  <JutsuDetail
                    key={index}
                    jutsu={{
                      name: jutsu.name || "",
                      description: jutsu.description || "",
                      type: jutsu.type || "",
                      rank: jutsu.rank || "",
                      chakraNature: jutsu.chakraNature || "",
                    }}
                  />
                )
              }
              return null // Skip invalid entries
            })}
          </div>
        </TabsContent>

        <TabsContent value="relationships">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {character.relationships.map((relationship, index) => (
              <CharacterRelationship key={index} relationship={relationship} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="battle">
          <BattleSimulator character={character} />
        </TabsContent>

        <TabsContent value="progression">
          {progression ? (
            <CharacterProgressionComponent progression={progression} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Progression data not available</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Character progression information for {character.name} is still being compiled.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Other Characters Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Other Characters</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
          {characters
            .filter((c) => c.slug !== params.slug)
            .slice(0, 6)
            .map((character, index) => (
              <Link key={index} href={`/characters/${character.slug}`} className="block group">
                <div className="relative h-40 w-full rounded-lg overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition-all duration-300">
                  <Image
                    src={character.imageSrc || "/placeholder.svg"}
                    alt={character.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-3">
                      <h3 className="text-white font-semibold text-sm">{character.name}</h3>
                      <p className="text-orange-300 text-xs">{character.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  )
}
