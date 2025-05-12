import Image from "next/image"

interface VillageLandmarkProps {
  name: string
  description: string
  imageSrc: string
  color: string
}

export default function VillageLandmark({ name, description, imageSrc, color }: VillageLandmarkProps) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg border border-white/10 bg-black/20 h-full">
      <div className="relative h-40 w-full overflow-hidden rounded-md">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 10px ${color}`,
            border: `1px solid ${color}40`,
          }}
        />
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2" style={{ color }}>
          {name}
        </h3>
        <p className="text-[#FFD700]/80 text-sm">{description}</p>
      </div>
    </div>
  )
}
