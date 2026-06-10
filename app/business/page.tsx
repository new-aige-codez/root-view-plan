import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

const EXIT_OPTIONS = [
  {
    label: 'License IP',
    desc: 'Exclusive license + $100K–$400K upfront + 3–6% royalty.',
    color: 'text-emerald-400',
    dot: 'bg-emerald-500',
    preferred: true,
  },
  {
    label: 'Sell IP + Proto',
    desc: 'One-time acquisition. Cleanest exit; walk-away floor ~$1M.',
    color: 'text-blue-400',
    dot: 'bg-blue-500',
    preferred: false,
  },
  {
    label: 'Build + Sell',
    desc: 'Operate to revenue, then sell. Highest upside, most risk.',
    color: 'text-amber-400',
    dot: 'bg-amber-400',
    preferred: false,
  },
]

const PRIMARY_TARGETS = [
  { label: 'AROYA (Addium, Inc.)',    tier: 'Primary',   reason: 'Documented per-zone gap; warm beta-tester relationship; CEO Scott Campbell, Pullman WA' },
  { label: 'CEA Produce (Greenhouse)', tier: 'Secondary', reason: 'Rockwool/coco produce — Ridder DrainChecker present but cannabis-software niche is open' },
  { label: 'Independent',              tier: 'Fallback',  reason: 'Bootstrap to revenue then raise or sell' },
]

const VALUATION_STAGES = [
  { stage: 'Today — PCT filed, prototype in build', value: '$0.3M–$1.5M' },
  { stage: '+ Bluelab benchmark + working proto',   value: '$1M–$2.5M' },
  { stage: '+ Issued patent + first customer',      value: '$2M–$4M' },
  { stage: '+ Strategic LOI',                       value: '$3M–$6M+', highlight: true },
]

export default function BusinessPage() {
  const mdPath = path.join(process.cwd(), 'content', 'business.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">

      {/* Exit strategy overview cards */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">Exit Strategies</span>
          <div className="flex-1 h-px bg-rv-border" />
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {EXIT_OPTIONS.map((opt) => (
            <div key={opt.label} className={`bg-rv-surface border rounded-lg px-4 py-3 relative ${opt.preferred ? 'border-emerald-500/30 ring-1 ring-emerald-500/10' : 'border-rv-border'}`}>
              {opt.preferred && (
                <span className="absolute top-2.5 right-3 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
                  Preferred
                </span>
              )}
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${opt.dot}`} />
                <span className={`text-[13px] font-semibold ${opt.color}`}>{opt.label}</span>
              </div>
              <p className="text-[11px] text-rv-text-3 leading-snug pr-8">{opt.desc}</p>
            </div>
          ))}
        </div>

        {/* Valuation stage map */}
        <div className="bg-rv-surface border border-rv-border rounded-lg divide-y divide-rv-border mb-4">
          <div className="px-4 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">Staged Valuation</span>
          </div>
          {VALUATION_STAGES.map((s) => (
            <div key={s.stage} className={`flex items-center justify-between px-4 py-2.5 ${s.highlight ? 'bg-emerald-500/5' : ''}`}>
              <span className="text-[12px] text-rv-text-3">{s.stage}</span>
              <span className={`text-[13px] font-semibold flex-shrink-0 ml-4 ${s.highlight ? 'text-emerald-400' : 'text-rv-text-2'}`}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Acquisition targets */}
        <div className="bg-rv-surface border border-rv-border rounded-lg divide-y divide-rv-border">
          <div className="px-4 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">Acquisition Targets</span>
          </div>
          {PRIMARY_TARGETS.map((t) => (
            <div key={t.label} className="flex items-center gap-3 px-4 py-3">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0
                ${t.tier === 'Primary'   ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' :
                  t.tier === 'Secondary' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' :
                                           'text-rv-text-3 bg-rv-elevated border-rv-border-2'}`}>
                {t.tier}
              </span>
              <span className="text-[13px] font-medium text-rv-text-2">{t.label}</span>
              <span className="text-[11px] text-rv-text-3 ml-auto text-right max-w-xs">{t.reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Full content */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">Full Analysis</span>
        <div className="flex-1 h-px bg-rv-border" />
      </div>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
