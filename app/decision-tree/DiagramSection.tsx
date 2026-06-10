'use client'

import dynamic from 'next/dynamic'

const MermaidDiagram = dynamic(() => import('@/components/MermaidDiagram'), { ssr: false })

interface DiagramSectionProps {
  chart: string
}

export default function DiagramSection({ chart }: DiagramSectionProps) {
  return (
    <div className="bg-rv-surface border border-rv-border rounded-lg p-5 overflow-x-auto">
      <MermaidDiagram chart={chart} />
    </div>
  )
}
