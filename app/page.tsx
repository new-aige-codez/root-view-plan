import IframeEmbed from '@/components/IframeEmbed'

export default function DashboardPage() {
  const dashboardUrl = process.env.NEXT_PUBLIC_SHEETS_DASHBOARD_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Status block — edit this file to update phase/priorities */}
      <div className="px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0">
        <div className="flex flex-wrap gap-6">
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Current Phase</span>
            <p className="text-gray-900 font-medium mt-0.5">Phase 1 — V.2 Prototype Build &amp; Validation</p>
          </div>
          <div className="border-l border-gray-200 pl-6">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Top 3 Priorities</span>
            <ol className="mt-0.5 space-y-0.5">
              <li className="text-sm text-gray-700"><span className="text-green-600 font-bold mr-1">1.</span>Complete V.2 hardware assembly and bench test</li>
              <li className="text-sm text-gray-700"><span className="text-green-600 font-bold mr-1">2.</span>Finalize partnership / IP agreement with Rob</li>
              <li className="text-sm text-gray-700"><span className="text-green-600 font-bold mr-1">3.</span>PCT national-phase research (deadline 5/26/2027)</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Google Sheets Dashboard tab */}
      <div className="flex-1 overflow-hidden">
        <IframeEmbed
          src={dashboardUrl}
          title="Dashboard – Google Sheets"
          height="100%"
        />
      </div>
    </div>
  )
}
