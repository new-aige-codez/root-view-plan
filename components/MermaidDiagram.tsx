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
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        themeVariables: {
          darkMode: true,
          background: '#111111',
          mainBkg: '#161616',
          primaryColor: '#1a2e1e',
          primaryTextColor: '#d0d0d0',
          primaryBorderColor: '#2a2a2a',
          lineColor: '#3a3a3a',
          secondaryColor: '#161616',
          tertiaryColor: '#1e1e1e',
          edgeLabelBackground: '#0a0a0a',
          clusterBkg: '#141414',
          titleColor: '#a0a0a0',
          nodeTextColor: '#c0c0c0',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          fontSize: '13px',
        },
      })

      if (!ref.current || cancelled) return
      const id = `mermaid-${Math.random().toString(36).slice(2)}`
      try {
        const { svg } = await mermaid.render(id, chart)
        if (ref.current && !cancelled) {
          ref.current.innerHTML = svg
          // Make SVG responsive
          const svgEl = ref.current.querySelector('svg')
          if (svgEl) {
            svgEl.style.maxWidth = '100%'
            svgEl.style.height = 'auto'
          }
        }
      } catch (e) {
        if (ref.current && !cancelled) {
          ref.current.innerHTML = `<pre class="text-red-400 text-xs p-4 bg-red-950/30 rounded border border-red-900/40">${String(e)}</pre>`
        }
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart])

  return <div ref={ref} className="overflow-x-auto" />
}
