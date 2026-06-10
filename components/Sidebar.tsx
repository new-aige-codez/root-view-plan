'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/',              label: 'Dashboard' },
  { href: '/prototyping',   label: 'Prototyping' },
  { href: '/code',          label: 'Code' },
  { href: '/bom',           label: 'BOM' },
  { href: '/costs',         label: 'Costs & Ledger' },
  { href: '/ip-legal',      label: 'IP & Legal' },
  { href: '/analytics',     label: 'Analytics' },
  { href: '/business',      label: 'Business & Exit' },
  { href: '/decision-tree', label: 'Decision Tree' },
  { href: '/board',         label: 'Board' },
  { href: '/media',         label: 'Evidence & Media' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-gray-900 flex flex-col z-20">
      {/* Wordmark */}
      <div className="px-5 py-5 border-b border-gray-700">
        <span className="text-white font-bold text-base tracking-tight">Root View</span>
        <span className="block text-gray-400 text-xs mt-0.5">R&amp;D Workspace</span>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto py-3">
        {NAV.map(({ href, label }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center px-5 py-2.5 text-sm rounded-none transition-colors
                ${active
                  ? 'bg-gray-700 text-white font-medium'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-700">
        <span className="text-gray-500 text-xs">Internal use only</span>
      </div>
    </aside>
  )
}
