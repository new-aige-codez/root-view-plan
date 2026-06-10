'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Icon({ d }: { d: string }) {
  return (
    <svg className="w-[15px] h-[15px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={d} />
    </svg>
  )
}

const ICONS = {
  dashboard:  'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  wrench:     'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  code:       'M16 18l6-6-6-6M8 6l-6 6 6 6',
  clipboard:  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  currency:   'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  chart:      'M18 20V10M12 20V4M6 20v-6',
  briefcase:  'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
  shield:     'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  flow:       'M7 20l4-16m2 16l4-16M6 9h14M4 15h14',
  kanban:     'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
  film:       'M15 10l4.553-2.069A1 1 0 0121 8.869v6.262a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
}

const GROUPS = [
  {
    label: 'Overview',
    items: [
      { href: '/',          label: 'Dashboard',        icon: ICONS.dashboard },
    ],
  },
  {
    label: 'Build',
    items: [
      { href: '/prototyping', label: 'Prototyping',    icon: ICONS.wrench },
      { href: '/code',        label: 'Code',           icon: ICONS.code },
      { href: '/bom',         label: 'Bill of Materials', icon: ICONS.clipboard },
    ],
  },
  {
    label: 'Business',
    items: [
      { href: '/costs',     label: 'Costs & Ledger',   icon: ICONS.currency },
      { href: '/analytics', label: 'Analytics',        icon: ICONS.chart },
      { href: '/business',  label: 'Business & Exit',  icon: ICONS.briefcase },
    ],
  },
  {
    label: 'Legal',
    items: [
      { href: '/ip-legal',  label: 'IP & Legal',       icon: ICONS.shield },
    ],
  },
  {
    label: 'Tools',
    items: [
      { href: '/decision-tree', label: 'Decision Tree', icon: ICONS.flow },
      { href: '/board',         label: 'Board',          icon: ICONS.kanban },
      { href: '/media',         label: 'Evidence & Media', icon: ICONS.film },
    ],
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-rv-surface flex flex-col z-20 border-r border-rv-border">
      {/* Wordmark */}
      <div className="px-4 py-4 flex items-center gap-2.5 border-b border-rv-border">
        <div className="w-6 h-6 bg-emerald-500 rounded-[4px] flex items-center justify-center flex-shrink-0">
          <span className="text-[9px] font-bold text-black tracking-tight">RV</span>
        </div>
        <div>
          <div className="text-[13px] font-semibold text-rv-text leading-none">Root View</div>
          <div className="text-[10px] text-rv-text-3 mt-[3px] leading-none">R&amp;D Workspace</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3">
        {GROUPS.map(({ label, items }, gi) => {
          return (
            <div key={label} className={gi > 0 ? 'mt-4' : ''}>
              <div className="px-4 mb-1">
                <span className="text-[9.5px] font-semibold tracking-[0.12em] uppercase text-rv-text-3">
                  {label}
                </span>
              </div>
              {items.map(({ href, label: itemLabel, icon }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      flex items-center gap-2.5 mx-2 px-2.5 py-[6px] rounded-[5px] text-[12.5px]
                      transition-colors duration-150
                      ${active
                        ? 'bg-rv-elevated text-rv-text font-medium'
                        : 'text-rv-text-3 hover:bg-rv-raised hover:text-rv-text-2'
                      }
                    `}
                  >
                    <span className={active ? 'text-emerald-400' : 'text-rv-text-3'}>
                      <Icon d={icon} />
                    </span>
                    {itemLabel}
                    {active && (
                      <span className="ml-auto w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                    )}
                  </Link>
                )
              })}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-rv-border">
        <span className="text-[10px] text-[#2a2a2a]">Internal · Confidential</span>
      </div>
    </aside>
  )
}
