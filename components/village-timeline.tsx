interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface VillageTimelineProps {
  events: TimelineEvent[]
  color: string
}

export default function VillageTimeline({ events, color }: VillageTimelineProps) {
  return (
    <div className="relative border-l-2 pl-6 ml-3 space-y-10" style={{ borderColor: color }}>
      {events.map((event, index) => (
        <div key={index} className="relative">
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
            {event.year}
          </div>

          <h3 className="text-lg font-bold mb-2 text-[#FFD700]">{event.title}</h3>
          <p className="text-[#FFD700]/80">{event.description}</p>
        </div>
      ))}
    </div>
  )
}
