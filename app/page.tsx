import Image from "next/image"
import Link from "next/link"
import { characters } from "@/data/characters"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import NarutoLogo from "@/components/naruto-logo"
import FloatingLeaves from "@/components/floating-leaves"
import ChakraOrb from "@/components/chakra-orb"

export default function HomePage() {
  // Get featured characters for the homepage
  const featuredCharacters = characters.slice(0, 4)

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-16">
        <Image src="/images/team7.png" alt="Team 7" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="mb-6">
            <NarutoLogo className="w-64 h-auto mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore the Ninja World</h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Discover characters, jutsu, villages, and more from the world of Naruto
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/characters"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              View Characters
            </Link>
            <Link
              href="/villages"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Explore Villages
            </Link>
          </div>
        </div>
        <FloatingLeaves count={20} />
      </div>

      {/* Featured Characters Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Characters</h2>
          <Link href="/characters" className="text-orange-500 hover:text-orange-600 font-semibold">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCharacters.map((character) => (
            <Link key={character.id} href={`/characters/${character.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-64">
                  <Image
                    src={character.imageSrc || "/placeholder.svg"}
                    alt={character.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{character.name}</h3>
                    <p className="text-white/80">{character.role}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">{character.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {character.jutsu.slice(0, 3).map((jutsu, index) => {
                      // Check if jutsu is a string or an object
                      const jutsuName = typeof jutsu === "string" ? jutsu : jutsu.name || ""
                      return (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                        >
                          {jutsuName}
                        </Badge>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore Villages Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Explore Villages</h2>
          <Link href="/villages" className="text-orange-500 hover:text-orange-600 font-semibold">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VillageCard
            name="Hidden Leaf Village"
            image="/images/hidden-leaf-village.png"
            description="Home to Team 7 and the Will of Fire"
            slug="hidden-leaf"
          />
          <VillageCard
            name="Hidden Sand Village"
            image="/images/hidden-sand-village.png"
            description="Desert village led by the Kazekage"
            slug="hidden-sand"
          />
          <VillageCard
            name="Hidden Mist Village"
            image="/images/hidden-mist-village.png"
            description="Known for the Seven Ninja Swordsmen"
            slug="hidden-mist"
          />
        </div>
      </section>

      {/* Chakra Orb */}
      <div className="fixed bottom-8 right-8 z-10">
        <ChakraOrb />
      </div>
    </main>
  )
}

// Village Card Component
function VillageCard({
  name,
  image,
  description,
  slug,
}: { name: string; image: string; description: string; slug: string }) {
  return (
    <Link href={`/villages/${slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{name}</h3>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
