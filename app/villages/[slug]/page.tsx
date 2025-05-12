import Link from "next/link"
import { ChevronLeft, Users, MapPin, Scroll, Shield, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NarutoLogo from "@/components/naruto-logo"
import FloatingLeaves from "@/components/floating-leaves"
import VillageTimeline from "@/components/village-timeline"
import VillageRelation from "@/components/village-relation"
import VillageLandmark from "@/components/village-landmark"
import NotableShinobi from "@/components/notable-shinobi"
import { VILLAGES } from "@/data/villages"
import { CHARACTERS } from "@/data/characters"

export function generateStaticParams() {
  return VILLAGES.map((village) => ({
    slug: village.slug,
  }))
}

export default function VillagePage({ params }: { params: { slug: string } }) {
  const village = VILLAGES.find((v) => v.slug === params.slug)

  if (!village) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-[#FFD700]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Village Not Found</h1>
          <p className="mb-6">This hidden village is truly hidden.</p>
          <Link href="/villages">
            <Button className="bg-[#FF7800] hover:bg-[#FF7800]/90 text-black font-bold">Return to Villages</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Get characters from this village
  const villageCharacters = CHARACTERS.filter(
    (character) =>
      character.village.includes(village.name) ||
      (village.name === "Hidden Leaf" && character.village.includes("Leaf")),
  )

  return (
    <div className="relative min-h-screen bg-[#121212] text-[#FFD700] pb-16">
      {/* Background effects */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/${village.slug}-bg.png')`,
          filter: "blur(3px)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121212]/70 via-[#121212] to-[#121212]" />
      <FloatingLeaves />

      {/* Village header */}
      <div
        className="relative z-10 h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, #121212), url('/images/${village.slug}-banner.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]" />

        {/* Back button */}
        <div className="absolute top-4 left-4 z-20">
          <Link href="/villages">
            <Button variant="ghost" className="text-[#FFD700] hover:text-[#FFD700] hover:bg-black/20">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Villages
            </Button>
          </Link>
        </div>

        {/* Home button */}
        <div className="absolute top-4 right-4 z-20">
          <Link href="/">
            <Button variant="ghost" className="text-[#FFD700] hover:text-[#FFD700] hover:bg-black/20">
              <NarutoLogo className="h-6 w-6 mr-2" />
              Home
            </Button>
          </Link>
        </div>

        {/* Village symbol */}
        <div className="relative z-10 text-center">
          <div
            className="w-32 h-32 mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: `${village.color}20`,
              boxShadow: `0 0 30px ${village.color}40`,
            }}
          >
            <div className="w-24 h-24 text-[#FFD700]" dangerouslySetInnerHTML={{ __html: village.symbol }} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2" style={{ color: village.color }}>
            {village.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl text-[#FFD700]/80">
            <span>{village.country}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-20">
        {/* Quick facts */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Users className="h-5 w-5" />, label: "Leader", value: village.leader },
            { icon: <MapPin className="h-5 w-5" />, label: "Location", value: village.location },
            { icon: <Scroll className="h-5 w-5" />, label: "Founded", value: village.founded },
            { icon: <Shield className="h-5 w-5" />, label: "Specialization", value: village.specialization },
          ].map((fact, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex flex-col items-center text-center"
            >
              <div
                className="p-2 rounded-full mb-2"
                style={{ backgroundColor: `${village.color}20`, color: village.color }}
              >
                {fact.icon}
              </div>
              <div className="text-sm text-[#FFD700]/60 mb-1">{fact.label}</div>
              <div className="font-semibold">{fact.value}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="bg-black/40 backdrop-blur-sm border border-white/10 w-full justify-start mb-6">
            <TabsTrigger
              value="history"
              className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
            >
              <History className="h-4 w-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger
              value="shinobi"
              className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
            >
              <Users className="h-4 w-4 mr-2" />
              Notable Shinobi
            </TabsTrigger>
            <TabsTrigger
              value="landmarks"
              className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Landmarks
            </TabsTrigger>
            <TabsTrigger
              value="relations"
              className="data-[state=active]:text-[#FF7800] data-[state=active]:bg-[#FF7800]/10"
            >
              <Shield className="h-4 w-4 mr-2" />
              Village Relations
            </TabsTrigger>
          </TabsList>

          {/* History tab */}
          <TabsContent value="history" className="mt-0">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">Village History</h2>

              <div className="space-y-6 text-[#FFD700]/90 mb-10">
                {village.history.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Timeline of Key Events</h3>
              <VillageTimeline events={village.timeline} color={village.color} />
            </div>
          </TabsContent>

          {/* Notable Shinobi tab */}
          <TabsContent value="shinobi" className="mt-0">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#FFD700]">Notable Shinobi</h2>
                <Link href={`/#characters`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/10 hover:border-[#FFD700]/40"
                  >
                    View All Characters
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Display characters from this village */}
                {villageCharacters.length > 0 ? (
                  villageCharacters.map((character) => (
                    <NotableShinobi
                      key={character.id}
                      name={character.name}
                      role={character.role}
                      description={character.description}
                      imageSrc={character.imageSrc}
                      color={character.color}
                      slug={character.slug}
                    />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8 text-[#FFD700]/60">
                    No character data available for this village.
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Clans and Bloodlines</h3>
                <div className="space-y-4 text-[#FFD700]/90">
                  {village.clans.map((clan, index) => (
                    <div key={index} className="border-l-2 pl-4 py-2" style={{ borderColor: village.color }}>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: village.color }}>
                        {clan.name}
                      </h4>
                      <p className="text-[#FFD700]/80">{clan.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Landmarks tab */}
          <TabsContent value="landmarks" className="mt-0">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">Village Landmarks</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {village.landmarks.map((landmark, index) => (
                  <VillageLandmark
                    key={index}
                    name={landmark.name}
                    description={landmark.description}
                    imageSrc={landmark.imageSrc}
                    color={village.color}
                  />
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Geography and Climate</h3>
                <div className="space-y-4 text-[#FFD700]/90">
                  {village.geography.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Relations tab */}
          <TabsContent value="relations" className="mt-0">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-6">
              <h2 className="text-2xl font-bold mb-6 text-[#FFD700]">Village Relations</h2>

              <div className="space-y-6">
                {village.relations.map((relation, index) => (
                  <VillageRelation
                    key={index}
                    villageName={relation.village}
                    status={relation.status}
                    description={relation.description}
                    color={village.color}
                  />
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Political Structure</h3>
                <div className="space-y-4 text-[#FFD700]/90">
                  {village.politics.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Navigation to other villages */}
      <div className="container mx-auto px-4 mt-16">
        <h3 className="text-xl font-bold mb-6 text-[#FFD700]">Explore Other Villages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VILLAGES.filter((v) => v.slug !== params.slug)
            .slice(0, 4)
            .map((otherVillage) => (
              <Link
                key={otherVillage.slug}
                href={`/villages/${otherVillage.slug}`}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div
                  className="w-12 h-12 mb-2 flex items-center justify-center"
                  style={{ color: otherVillage.color }}
                  dangerouslySetInnerHTML={{ __html: otherVillage.symbol }}
                />
                <div className="font-semibold" style={{ color: otherVillage.color }}>
                  {otherVillage.name}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
