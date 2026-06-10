import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

// ── Market sizing data ──────────────────────────────────────────────
const MARKETS = [
  {
    label: 'TAM — Global Candidate Facilities',
    hardware: '~$121M',
    recurring: '$24M/yr',
    facilities: '~40K facilities',
    barWidth: '100%',
    color: 'bg-emerald-500',
    note: 'US cannabis 17K (↓8.6% YoY) + US CEA produce + Canada + intl',
  },
  {
    label: 'SAM — US Mid/Large + CEA',
    hardware: '~$20M',
    recurring: '$3–5M/yr',
    facilities: '5–8K facilities',
    barWidth: '40%',
    color: 'bg-emerald-500/60',
    note: 'Per-zone pricing (5 zones/facility avg)',
  },
  {
    label: 'SOM — 5yr Capture',
    hardware: '$8M–$22M',
    recurring: '~$1.35M/yr',
    facilities: '5–10% of SAM',
    barWidth: '8%',
    color: 'bg-emerald-500/30',
    note: 'Cumulative hardware at modest penetration',
  },
]

const VALUATION_APPROACHES = [
  {
    label: 'Cost to Replicate',
    range: '$200K–$500K',
    basis: 'Prototype + PCT + R&D labor',
    color: 'border-rv-border-2',
    highlight: false,
  },
  {
    label: 'Current (IP / Acquihire)',
    range: '$300K–$1.5M',
    basis: '2-person team + 1 patent family + working prototype',
    color: 'border-emerald-500/30',
    highlight: true,
  },
  {
    label: 'Post-Milestone',
    range: '$2M–$4M',
    basis: 'Issued patent + benchmark data + first customer',
    color: 'border-blue-500/30',
    highlight: false,
  },
  {
    label: 'Strategic Ceiling',
    range: '$3M–$6M+',
    basis: 'Signed LOI + issued patent + pilot data',
    color: 'border-amber-500/30',
    highlight: false,
  },
]

const MILESTONES = [
  { done: false, active: true,  text: 'Bluelab benchmark — accuracy parity with Combo Meter',    impact: 'Unlocks strategic conversations' },
  { done: false, active: false, text: 'Pilot data from JAE LLC facility',                         impact: null },
  { done: false, active: false, text: 'Issued patent (not just filed)',                           impact: 'High valuation impact' },
  { done: false, active: false, text: 'Strategic LOI / evaluation agreement with acquirer',       impact: 'Highest valuation impact' },
  { done: false, active: false, text: 'First paying customer',                                    impact: null },
]

export default function AnalyticsPage() {
  const mdPath = path.join(process.cwd(), 'content', 'analytics.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">

      {/* Disclaimer */}
      <div className="bg-rv-surface border border-rv-border rounded-lg px-4 py-3 mb-8 flex gap-3">
        <svg className="w-4 h-4 text-rv-text-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-[12px] text-rv-text-3 leading-relaxed">
          All market-size figures are estimates unless labeled &ldquo;measured.&rdquo; TAM/SAM/SOM math is order-of-magnitude only.
        </p>
      </div>

      {/* ── Market Sizing Chart ───────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            Market Sizing
          </span>
          <div className="flex-1 h-px bg-rv-border" />
        </div>
        <div className="bg-rv-surface border border-rv-border rounded-lg p-5 space-y-4">
          {MARKETS.map((m) => (
            <div key={m.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[12px] font-medium text-rv-text-2">{m.label}</span>
                <div className="flex items-center gap-3 text-right">
                  <span className="text-[11px] text-rv-text-3">{m.facilities}</span>
                  <span className="text-[12px] font-semibold text-rv-text w-16 text-right">{m.hardware}</span>
                </div>
              </div>
              <div className="h-5 bg-rv-elevated rounded-sm overflow-hidden">
                <div
                  className={`h-full rounded-sm ${m.color} transition-all`}
                  style={{ width: m.barWidth }}
                />
              </div>
              <div className="text-[10px] text-rv-text-3 mt-1">{m.recurring} recurring</div>
              {m.note && <div className="text-[10px] text-rv-text-3/60 mt-0.5">{m.note}</div>}
            </div>
          ))}
          <p className="text-[11px] text-rv-text-3 pt-2 border-t border-rv-border">
            Standalone revenue is modest. The investable thesis is <span className="text-rv-text-2 font-medium">strategic value</span> — Root View as a feature acquisition for an established platform like AROYA.
          </p>
        </div>
      </section>

      {/* ── Valuation Estimates ───────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            Valuation Estimates
          </span>
          <div className="flex-1 h-px bg-rv-border" />
          <span className="text-[11px] text-rv-text-3">Pre-revenue, PCT-filed stage</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {VALUATION_APPROACHES.map((v) => (
            <div
              key={v.label}
              className={`bg-rv-surface border rounded-lg px-4 py-3 ${v.color} ${v.highlight ? 'ring-1 ring-emerald-500/20' : ''}`}
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-rv-text-3 mb-1.5">{v.label}</div>
              <div className="text-[15px] font-bold text-rv-text leading-tight mb-1.5">{v.range}</div>
              <div className="text-[10px] text-rv-text-3 leading-snug">{v.basis}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Value Milestones ─────────────────────────────────── */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            Milestones to $3M–$6M+
          </span>
          <div className="flex-1 h-px bg-rv-border" />
        </div>
        <div className="bg-rv-surface border border-rv-border rounded-lg divide-y divide-rv-border">
          {MILESTONES.map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0
                ${m.done
                  ? 'bg-emerald-500 border-emerald-500'
                  : m.active
                    ? 'border-emerald-500/50 bg-emerald-500/10'
                    : 'border-rv-border-2 bg-rv-elevated'
                }`}
              >
                {m.done && (
                  <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {!m.done && m.active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </div>
              <span className={`text-[12px] ${m.done ? 'text-rv-text-3 line-through' : m.active ? 'text-rv-text-2' : 'text-rv-text-3'}`}>
                {i + 1}. {m.text}
              </span>
              <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                {m.active && (
                  <span className="text-[10px] text-emerald-400 font-medium">In progress</span>
                )}
                {m.impact && (
                  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full border
                    ${m.impact.startsWith('Highest')
                      ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      : 'text-blue-400 bg-blue-500/10 border-blue-500/20'
                    }`}>
                    {m.impact}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full markdown reference */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
          Full Analysis
        </span>
        <div className="flex-1 h-px bg-rv-border" />
      </div>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
