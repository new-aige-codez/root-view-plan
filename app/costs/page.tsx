import IframeEmbed from '@/components/IframeEmbed'

export default function CostsPage() {
  const costsUrl = process.env.NEXT_PUBLIC_SHEETS_COSTS_URL
  const ledgerUrl = process.env.NEXT_PUBLIC_SHEETS_LEDGER_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto">
      {/* Costs */}
      <section className="flex-shrink-0">
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Project Costs</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Legal fees, professional services, and labor — everything outside hardware components.
          </p>
        </div>
        <div style={{ height: '45vh' }}>
          <IframeEmbed src={costsUrl} title="Costs – Google Sheets" height="100%" />
        </div>
      </section>

      {/* Ledger */}
      <section className="flex-shrink-0 border-t-4 border-gray-200">
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Partner Ledger</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Tracks who paid what and the running balance between Brian and Rob. Running balance formula
            auto-calculates based on the 60/40 split assumption.
          </p>
        </div>
        <div style={{ height: '45vh' }}>
          <IframeEmbed src={ledgerUrl} title="Partner Ledger – Google Sheets" height="100%" />
        </div>
      </section>
    </div>
  )
}
