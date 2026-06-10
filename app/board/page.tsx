'use client'

import dynamic from 'next/dynamic'

const TrelloBoard = dynamic(() => import('@/components/TrelloBoard'), { ssr: false })

const trelloUrl = process.env.NEXT_PUBLIC_TRELLO_URL
const boardId = trelloUrl?.split('/b/')[1]?.split('/')[0]

export default function BoardPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-shrink-0 px-6 py-4 border-b border-rv-border bg-rv-base">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-rv-text-2 max-w-xl">
            Kanban from idea to shipped decision.{' '}
            <span className="text-rv-text-3">
              Idea → Reviewed → Validated → To Do → In Progress → Review → Done
            </span>
          </p>
          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
            <div className="flex items-center gap-1.5 text-[11px] text-rv-text-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Live via Trello API
            </div>
            {trelloUrl && (
              <a
                href={trelloUrl.replace('.html', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-rv-text-3 hover:text-rv-text-2 border border-rv-border-2 rounded px-2.5 py-1 flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in Trello
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {boardId ? (
          <TrelloBoard boardId={boardId} />
        ) : (
          <div
            className="flex flex-col items-center justify-center border border-dashed border-rv-border-2 rounded-lg m-4"
            style={{ height: 'calc(100% - 2rem)' }}
          >
            <p className="text-rv-text-2 text-sm font-medium">Trello Board</p>
            <p className="text-rv-text-3 text-xs mt-1">
              Add{' '}
              <code className="bg-rv-raised px-1.5 py-0.5 rounded text-[10px] border border-rv-border-2 text-emerald-500">
                NEXT_PUBLIC_TRELLO_URL
              </code>{' '}
              to connect
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
