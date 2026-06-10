import IframeEmbed from '@/components/IframeEmbed'

export default function BOMPage() {
  const bomUrl = process.env.NEXT_PUBLIC_SHEETS_BOM_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0">
        <p className="text-sm text-gray-600 max-w-2xl">
          Live bill of materials for the Root View device. Tracks every component — part name, supplier,
          quantity, unit cost, and line total. Edit directly in Google Sheets; changes reflect here automatically.
          Version column tracks which hardware revision each part belongs to.
        </p>
      </div>
      <div className="flex-1 overflow-hidden">
        <IframeEmbed src={bomUrl} title="Bill of Materials – Google Sheets" height="100%" />
      </div>
    </div>
  )
}
