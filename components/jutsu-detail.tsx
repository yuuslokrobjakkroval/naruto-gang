interface JutsuDetailProps {
  jutsu: {
    name: string
    description: string
    type: string
    rank: string
    chakraNature: string
  }
}

export default function JutsuDetail({ jutsu }: JutsuDetailProps) {
  // Ensure all properties exist to prevent rendering objects directly
  const { name = "", description = "", type = "", rank = "", chakraNature = "" } = jutsu || {}

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{description}</p>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
          <span className="block text-gray-500 dark:text-gray-400">Type</span>
          <span className="font-medium">{type}</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
          <span className="block text-gray-500 dark:text-gray-400">Rank</span>
          <span className="font-medium">{rank}</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
          <span className="block text-gray-500 dark:text-gray-400">Nature</span>
          <span className="font-medium">{chakraNature}</span>
        </div>
      </div>
    </div>
  )
}
