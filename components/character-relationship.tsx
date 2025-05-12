interface RelationshipProps {
  relationship: {
    name: string
    relationship: string
    description: string
    imageSrc: string
  }
}

export default function CharacterRelationship({ relationship }: RelationshipProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 flex gap-4">
      <div className="relative h-16 w-16 flex-shrink-0 rounded-full overflow-hidden">
        <img src={relationship.imageSrc || "/placeholder.svg"} alt={relationship.name} className="object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-bold">{relationship.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{relationship.relationship}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{relationship.description}</p>
      </div>
    </div>
  )
}
