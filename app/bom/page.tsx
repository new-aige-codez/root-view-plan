import IframeEmbed from '@/components/IframeEmbed'

export default function BOMPage() {
  const bomUrl = process.env.NEXT_PUBLIC_SHEETS_BOM_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-shrink-0 px-6 py-4 border-b border-rv-border bg-rv-base">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] text-rv-text-2 max-w-xl">
              Every component — part name, supplier, quantity, unit cost, and line total.
              Version column tracks which hardware revision each part belongs to.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-rv-text-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Live via Google Sheets
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <IframeEmbed src={bomUrl} title="Bill of Materials — Google Sheets" height="100%" />
      </div>
    </div>
  )
}
