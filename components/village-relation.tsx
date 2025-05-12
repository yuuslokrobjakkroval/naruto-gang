import { AlertCircle, Check, X } from "lucide-react"

interface VillageRelationProps {
  villageName: string
  status: "Ally" | "Enemy" | "Neutral" | "Complex"
  description: string
  color: string
}

export default function VillageRelation({ villageName, status, description, color }: VillageRelationProps) {
  // Determine icon and status color based on relationship status
  const getStatusInfo = () => {
    switch (status) {
      case "Ally":
        return { icon: <Check className="h-4 w-4" />, color: "#4CAF50" }
      case "Enemy":
        return { icon: <X className="h-4 w-4" />, color: "#F44336" }
      case "Complex":
        return { icon: <AlertCircle className="h-4 w-4" />, color: "#FF9800" }
      case "Neutral":
      default:
        return { icon: <AlertCircle className="h-4 w-4" />, color: "#9E9E9E" }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-white/10 bg-black/20">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-lg font-bold" style={{ color }}>
            {villageName}
          </h3>
          <div
            className="flex items-center px-2 py-1 rounded-full bg-black/30 text-xs"
            style={{ color: statusInfo.color }}
          >
            {statusInfo.icon}
            <span className="ml-1">{status}</span>
          </div>
        </div>

        <p className="text-[#FFD700]/80 text-sm">{description}</p>
      </div>
    </div>
  )
}
