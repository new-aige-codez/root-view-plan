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
    J --> L["V.2 — ESP32 + Waveshare 2.8\\"\\n✅ Active build"]
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
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-1 border-b border-gray-200 pb-1">Live Decision Map</h2>
        <p className="text-sm text-gray-500 mb-4">
          Major forks, active paths (✅), abandoned paths (❌), and open decisions (⚠️/🕐).
          Edit the diagram by modifying the <code className="bg-gray-100 px-1 rounded text-xs">DECISION_TREE</code> constant
          in <code className="bg-gray-100 px-1 rounded text-xs">app/decision-tree/page.tsx</code>.
        </p>
        <DiagramSection chart={DECISION_TREE} />
      </section>

      <section className="mt-10">
        <div className="prose">
          <ReactMarkdown>{archive}</ReactMarkdown>
        </div>
      </section>
    </div>
  )
}
