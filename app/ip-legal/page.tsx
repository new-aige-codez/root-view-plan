import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

function DaysUntilDeadline() {
  // Static calculation at build time for static export
  // The PCT 30-month national-phase deadline is approx. Nov 26, 2027
  const deadline = new Date('2027-11-26')
  const today = new Date()
  const days = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const months = Math.floor(days / 30)

  return (
    <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6">
      <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="text-sm font-semibold text-amber-800">
          PCT National-Phase Deadline: ~November 26, 2027
        </p>
        <p className="text-xs text-amber-600">
          Approximately {days} days ({months} months) remaining as of site build date.
          Verify exact date with Shem Lachhman.
        </p>
      </div>
    </div>
  )
}

export default function IPLegalPage() {
  const mdPath = path.join(process.cwd(), 'content', 'ip-legal.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <DaysUntilDeadline />
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
