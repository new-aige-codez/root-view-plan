'use client'

import dynamic from 'next/dynamic'

const MermaidDiagram = dynamic(() => import('@/components/MermaidDiagram'), { ssr: false })

interface DiagramSectionProps {
  chart: string
}

export default function DiagramSection({ chart }: DiagramSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 overflow-x-auto">
      <MermaidDiagram chart={chart} />
    </div>
  )
}
