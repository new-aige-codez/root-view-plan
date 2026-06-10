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

export default function TopBar() {
  const pathname = usePathname()
  const title = PAGE_TITLES[pathname] ?? PAGE_TITLES[Object.keys(PAGE_TITLES).find(k => k !== '/' && pathname.startsWith(k)) ?? ''] ?? 'Root View'
  const notebooklmUrl = process.env.NEXT_PUBLIC_NOTEBOOKLM_URL

  return (
    <header className="fixed top-0 left-56 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
      <h1 className="text-gray-900 font-semibold text-lg">{title}</h1>
      {notebooklmUrl ? (
        <a
          href={notebooklmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
          </svg>
          Chat
        </a>
      ) : (
        <span className="px-4 py-2 bg-gray-100 text-gray-400 text-sm rounded-lg cursor-default">Chat</span>
      )}
    </header>
  )
}
