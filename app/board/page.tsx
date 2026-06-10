import IframeEmbed from '@/components/IframeEmbed'

export default function BoardPage() {
  const trelloUrl = process.env.NEXT_PUBLIC_TRELLO_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0">
        <p className="text-sm text-gray-600 max-w-2xl">
          Kanban board tracking everything from raw idea to shipped decision.
          Column flow:{' '}
          <span className="font-medium text-gray-800">Idea → Reviewed → Validated / Worth Exploring → To Do → In Progress → Review → Done</span>.
          Edit directly in Trello; the view here is read-only.
        </p>
      </div>
      <div className="flex-1 overflow-hidden">
        <IframeEmbed src={trelloUrl} title="Trello Board" height="100%" />
      </div>
    </div>
  )
}
