interface TimelineEventProps {
  title: string
  description: string
  year: string
  color: string
  isFirst: boolean
  isLast: boolean
}

export default function TimelineEvent({ title, description, year, color, isFirst, isLast }: TimelineEventProps) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        className="absolute -left-[31px] w-5 h-5 rounded-full border-2"
        style={{ backgroundColor: "#121212", borderColor: color }}
      />

      {/* Year badge */}
      <div
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {year}
      </div>

      <h3 className="text-lg font-bold mb-2 text-[#FFD700]">{title}</h3>
      <p className="text-[#FFD700]/80">{description}</p>
    </div>
  )
}
