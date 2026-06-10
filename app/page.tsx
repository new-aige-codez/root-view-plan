import IframeEmbed from '@/components/IframeEmbed'

const PHASE = 'Phase 1 — V.2 Prototype Build'
const PCT_DEADLINE = new Date('2027-11-26')
const daysLeft = Math.ceil((PCT_DEADLINE.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

const PRIORITIES = [
  'Complete V.2 hardware assembly & bench test',
  'Finalize partnership / IP agreement with Rob',
  'PCT national-phase research',
]

const KPI_CARDS = [
  {
    label: 'Current Phase',
    value: 'Phase 1',
    sub: 'V.2 Prototype Build',
    accent: 'text-emerald-400',
    dot: 'bg-emerald-500',
  },
  {
    label: 'PCT Deadline',
    value: `${daysLeft}d`,
    sub: 'Nov 26, 2027',
    accent: 'text-amber-400',
    dot: 'bg-amber-400',
  },
  {
    label: 'Build Status',
    value: 'Active',
    sub: 'ESP32 + Waveshare 2.8"',
    accent: 'text-emerald-400',
    dot: 'bg-emerald-500',
  },
  {
    label: 'Partnership',
    value: '60 / 40',
    sub: 'Verbal — pending formal doc',
    accent: 'text-amber-400',
    dot: 'bg-amber-400',
  },
]

export default function DashboardPage() {
  const dashboardUrl = process.env.NEXT_PUBLIC_SHEETS_DASHBOARD_URL

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Status strip */}
      <div className="flex-shrink-0 px-6 pt-5 pb-4 border-b border-rv-border bg-rv-base">
        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {KPI_CARDS.map((card) => (
            <div key={card.label} className="bg-rv-surface border border-rv-border rounded-lg px-4 py-3">
              <div className="flex items-center gap-1.5 mb-2">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${card.dot}`} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-rv-text-3">{card.label}</span>
              </div>
              <div className={`text-xl font-bold leading-none ${card.accent}`}>{card.value}</div>
              <div className="text-[11px] text-rv-text-3 mt-1 leading-snug">{card.sub}</div>
            </div>
          ))}
        </div>

        {/* Top priorities */}
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-rv-text-3 block mb-2">
            Top Priorities
          </span>
          <div className="flex items-center gap-6 flex-wrap">
            {PRIORITIES.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-emerald-500">{i + 1}</span>
                <span className="text-[12px] text-rv-text-2">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embed */}
      <div className="flex-1 overflow-hidden bg-rv-base">
        <IframeEmbed
          src={dashboardUrl}
          title="Dashboard — Google Sheets"
          height="100%"
        />
      </div>
    </div>
  )
}
