'use client'

import { useEffect, useState } from 'react'

interface TrelloLabel {
  id: string
  color: string
  name: string
}

interface TrelloCard {
  id: string
  name: string
  labels: TrelloLabel[]
  shortUrl: string
  idList: string
}

interface TrelloList {
  id: string
  name: string
  cards: TrelloCard[]
}

const LABEL_COLORS: Record<string, string> = {
  green:  'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  yellow: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  orange: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  red:    'bg-red-500/15 text-red-400 border-red-500/25',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  blue:   'bg-blue-500/15 text-blue-400 border-blue-500/25',
  sky:    'bg-sky-500/15 text-sky-400 border-sky-500/25',
  lime:   'bg-lime-500/15 text-lime-400 border-lime-500/25',
  pink:   'bg-pink-500/15 text-pink-400 border-pink-500/25',
}

export default function TrelloBoard({ boardId }: { boardId: string }) {
  const [lists, setLists] = useState<TrelloList[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [listsRes, cardsRes] = await Promise.all([
          fetch(`https://api.trello.com/1/boards/${boardId}/lists?filter=open`),
          fetch(`https://api.trello.com/1/boards/${boardId}/cards?filter=open`),
        ])

        if (listsRes.status === 401 || listsRes.status === 403) {
          throw new Error('Board is private — set visibility to Public in Trello board settings')
        }
        if (!listsRes.ok) throw new Error(`Trello API error (${listsRes.status})`)
        if (!cardsRes.ok) throw new Error(`Trello cards error (${cardsRes.status})`)

        const rawLists: any[] = await listsRes.json()
        const rawCards: TrelloCard[] = await cardsRes.json()

        const cardsByList = rawCards.reduce<Record<string, TrelloCard[]>>((acc, card) => {
          if (!acc[card.idList]) acc[card.idList] = []
          acc[card.idList].push(card)
          return acc
        }, {})

        setLists(rawLists.map(list => ({ ...list, cards: cardsByList[list.id] ?? [] })))
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [boardId])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center gap-2 text-rv-text-3">
          <div className="w-3 h-3 border border-rv-border-2 border-t-emerald-500 rounded-full animate-spin" />
          <span className="text-[12px]">Loading board...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
        <svg className="w-7 h-7 text-rv-text-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
        <div>
          <p className="text-[13px] text-rv-text-2 font-medium mb-1">Board unavailable</p>
          <p className="text-[11px] text-rv-text-3 max-w-sm leading-relaxed">{error}</p>
        </div>
      </div>
    )
  }

  const totalCards = lists.reduce((n, l) => n + l.cards.length, 0)

  return (
    <div className="flex gap-3 px-4 py-4 overflow-x-auto h-full items-start">
      {lists.map(list => (
        <div
          key={list.id}
          className="flex-shrink-0 w-52 flex flex-col bg-rv-surface border border-rv-border rounded-lg overflow-hidden"
          style={{ maxHeight: 'calc(100vh - 9rem)' }}
        >
          <div className="flex-shrink-0 px-3 py-2.5 border-b border-rv-border flex items-center justify-between">
            <span className="text-[10px] font-semibold text-rv-text-2 uppercase tracking-[0.1em] truncate mr-2">
              {list.name}
            </span>
            {list.cards.length > 0 && (
              <span className="text-[10px] text-rv-text-3 bg-rv-elevated px-1.5 py-0.5 rounded-full flex-shrink-0">
                {list.cards.length}
              </span>
            )}
          </div>
          <div className="flex-1 p-2 space-y-1.5 overflow-y-auto">
            {list.cards.length === 0 && (
              <p className="text-[10px] text-rv-text-3/40 px-1 py-3 text-center">—</p>
            )}
            {list.cards.map(card => (
              <a
                key={card.id}
                href={card.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-rv-raised border border-rv-border-2 rounded px-2.5 py-2 hover:border-rv-border hover:bg-rv-elevated transition-colors group"
              >
                {card.labels.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {card.labels.map(label => (
                      <span
                        key={label.id}
                        className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full border uppercase tracking-wide ${
                          LABEL_COLORS[label.color] ?? 'bg-rv-elevated text-rv-text-3 border-rv-border-2'
                        }`}
                      >
                        {label.name || label.color}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-[11px] text-rv-text-2 leading-snug group-hover:text-rv-text transition-colors">
                  {card.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      ))}

      {totalCards === 0 && lists.length > 0 && (
        <p className="text-[11px] text-rv-text-3 self-center pl-2">Board is empty</p>
      )}
    </div>
  )
}
