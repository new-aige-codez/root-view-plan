'use client'

import { usePathname } from 'next/navigation'

const PAGE_TITLES: Record<string, string> = {
  '/':              'Dashboard',
  '/prototyping':   'Prototyping',
  '/code':          'Code',
  '/bom':           'Bill of Materials',
  '/costs':         'Costs & Ledger',
  '/ip-legal':      'IP & Legal',
  '/analytics':     'Analytics & Projections',
  '/business':      'Business & Exit',
  '/decision-tree': 'Decision Tree',
  '/board':         'Board',
  '/media':         'Evidence & Media',
}

const PCT_DEADLINE = new Date('2027-11-26')

export default function TopBar() {
  const pathname = usePathname()
  const title = PAGE_TITLES[pathname] ?? PAGE_TITLES[Object.keys(PAGE_TITLES).find(k => k !== '/' && pathname.startsWith(k)) ?? ''] ?? 'Root View'
  const notebooklmUrl = process.env.NEXT_PUBLIC_NOTEBOOKLM_URL

  const daysLeft = Math.ceil((PCT_DEADLINE.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  const pctUrgent = daysLeft < 365

  return (
    <header className="fixed top-0 left-56 right-0 h-16 bg-rv-base border-b border-rv-border flex items-center justify-between px-6 z-10">
      <h1 className="text-[14px] font-semibold text-rv-text tracking-tight">{title}</h1>

      <div className="flex items-center gap-2">
        {/* Phase pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-rv-surface rounded-full border border-rv-border-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          <span className="text-[11px] text-emerald-400 font-medium">Phase 1</span>
        </div>

        {/* PCT countdown */}
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium
          ${pctUrgent
            ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
            : 'bg-rv-surface border-rv-border-2 text-rv-text-2'
          }`}>
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {daysLeft}d PCT
        </div>

        {/* Chat / NotebookLM */}
        {notebooklmUrl ? (
          <a
            href={notebooklmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rv-surface hover:bg-rv-elevated border border-rv-border-2 rounded-[5px] text-[12px] text-rv-text-2 hover:text-rv-text transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
            </svg>
            Chat
          </a>
        ) : (
          <span className="px-3 py-1.5 bg-rv-surface border border-rv-border rounded-[5px] text-[12px] text-rv-text-3 cursor-default">
            Chat
          </span>
        )}
      </div>
    </header>
  )
}
