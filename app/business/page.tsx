import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default function BusinessPage() {
  const mdPath = path.join(process.cwd(), 'content', 'business.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
