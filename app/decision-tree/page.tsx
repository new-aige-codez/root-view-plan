import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import DiagramSection from './DiagramSection'

const DECISION_TREE = `
flowchart TD
    A[Root View Device] --> B{Exit Strategy}
    B --> C[License IP]
    B --> D[Sell IP + Prototype]
    B --> E[Build + Sell Product]
    C --> F{Primary Target}
    D --> F
    F --> G[AROYA / Addium]
    F --> H[CEA Produce Licensee]
    F --> I[Independent Commercialization]

    A --> J{Hardware Platform}
    J --> K["V.1 — Arduino + plywood box\\n❌ Abandoned: impeller sensor height req."]
    J --> L["V.2 — ESP32 + Waveshare 2.8in\\n✅ Active build"]
    L --> M{Enclosure}
    M --> N["Commercial IP-rated\\n❌ No suitable form factor found"]
    M --> O["Custom 3D print (Elegoo Saturn / outsourced)\\n✅ Active"]

    A --> P{Partnership Agreement}
    P --> Q["Formal co-inventor / IP doc\\n⚠️ Not yet drafted"]
    P --> R["Verbal 60/40 split\\n⚠️ Operating assumption only"]

    A --> S{IoT Backend}
    S --> T["Supabase — recommended\\n🕐 Not yet decided"]
    S --> U["Firebase / AWS IoT / Other\\n🕐 Under evaluation"]
`

export default function DecisionTreePage() {
  const archivePath = path.join(process.cwd(), 'content', 'decision-tree.md')
  const archive = fs.readFileSync(archivePath, 'utf-8')

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            Live Decision Map
          </span>
          <div className="flex-1 h-px bg-rv-border" />
          <span className="text-[11px] text-rv-text-3">
            ✅ active &nbsp;·&nbsp; ❌ abandoned &nbsp;·&nbsp; ⚠️ open &nbsp;·&nbsp; 🕐 pending
          </span>
        </div>
        <p className="text-[12px] text-rv-text-3 mb-4">
          Edit by modifying the{' '}
          <code className="bg-rv-raised px-1.5 py-0.5 rounded text-[10px] border border-rv-border-2 text-emerald-500">
            DECISION_TREE
          </code>
          {' '}constant in{' '}
          <code className="bg-rv-raised px-1.5 py-0.5 rounded text-[10px] border border-rv-border-2 text-emerald-500">
            app/decision-tree/page.tsx
          </code>.
        </p>
        <DiagramSection chart={DECISION_TREE} />
      </section>

      <div className="flex items-center gap-2 mb-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
          Decision Archive
        </span>
        <div className="flex-1 h-px bg-rv-border" />
      </div>
      <div className="prose">
        <ReactMarkdown>{archive}</ReactMarkdown>
      </div>
    </div>
  )
}
