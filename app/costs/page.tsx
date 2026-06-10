import IframeEmbed from '@/components/IframeEmbed'

function SectionHeader({ title, description, badge }: { title: string; description: string; badge?: string }) {
  return (
    <div className="flex items-start justify-between px-6 py-4 border-b border-rv-border bg-rv-base flex-shrink-0">
      <div>
        <h2 className="text-[13px] font-semibold text-rv-text">{title}</h2>
        <p className="text-[12px] text-rv-text-3 mt-0.5 max-w-xl">{description}</p>
      </div>
      {badge && (
        <span className="flex items-center gap-1.5 text-[11px] text-rv-text-3 flex-shrink-0 ml-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {badge}
        </span>
      )}
    </div>
  )
}

export default function CostsPage() {
  const costsUrl = process.env.NEXT_PUBLIC_SHEETS_COSTS_URL
  const ledgerUrl = process.env.NEXT_PUBLIC_SHEETS_LEDGER_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-y-auto bg-rv-base">
      {/* Project Costs */}
      <section className="flex flex-col flex-shrink-0" style={{ height: '50%' }}>
        <SectionHeader
          title="Project Costs"
          description="Legal fees, professional services, and labor — everything outside hardware components."
          badge="Live via Sheets"
        />
        <div className="flex-1 overflow-hidden">
          <IframeEmbed src={costsUrl} title="Costs — Google Sheets" height="100%" />
        </div>
      </section>

      {/* Partner Ledger */}
      <section className="flex flex-col flex-shrink-0 border-t-2 border-rv-border" style={{ height: '50%' }}>
        <SectionHeader
          title="Partner Ledger"
          description="Who paid what and the running balance between Brian and Rob. Auto-calculates on the 60/40 split."
          badge="Live via Sheets"
        />
        <div className="flex-1 overflow-hidden">
          <IframeEmbed src={ledgerUrl} title="Partner Ledger — Google Sheets" height="100%" />
        </div>
      </section>
    </div>
  )
}
