'use client'

import { useEffect, useRef } from 'react'

interface MermaidDiagramProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    async function render() {
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' })

      if (!ref.current || cancelled) return
      const id = `mermaid-${Math.random().toString(36).slice(2)}`
      try {
        const { svg } = await mermaid.render(id, chart)
        if (ref.current && !cancelled) {
          ref.current.innerHTML = svg
        }
      } catch (e) {
        if (ref.current && !cancelled) {
          ref.current.innerHTML = `<pre class="text-red-600 text-xs p-4 bg-red-50 rounded">${String(e)}</pre>`
        }
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart])

  return <div ref={ref} className="overflow-x-auto" />
}
