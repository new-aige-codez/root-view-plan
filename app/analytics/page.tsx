import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default function AnalyticsPage() {
  const mdPath = path.join(process.cwd(), 'content', 'analytics.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> All market-size figures on this page are estimates unless labeled &ldquo;measured.&rdquo;
          Where sources conflict, ranges are shown. Treat TAM/SAM/SOM math as order-of-magnitude only.
        </p>
      </div>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
