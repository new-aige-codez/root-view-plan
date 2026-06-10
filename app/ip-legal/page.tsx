import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

const PCT_DEADLINE = new Date('2027-11-26')
const today = new Date()
const daysLeft = Math.ceil((PCT_DEADLINE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
const monthsLeft = Math.floor(daysLeft / 30)
const urgent = daysLeft < 365

export default function IPLegalPage() {
  const mdPath = path.join(process.cwd(), 'content', 'ip-legal.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">

      {/* Deadline card */}
      <div className={`rounded-xl border p-5 mb-8 ${urgent ? 'bg-amber-500/5 border-amber-500/20' : 'bg-rv-surface border-rv-border'}`}>
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${urgent ? 'bg-amber-500/10' : 'bg-rv-elevated'}`}>
            <svg className={`w-5 h-5 ${urgent ? 'text-amber-400' : 'text-rv-text-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className={`text-[15px] font-semibold ${urgent ? 'text-amber-300' : 'text-rv-text'}`}>
                PCT National-Phase Deadline
              </h2>
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${urgent ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-rv-elevated text-rv-text-2 border border-rv-border-2'}`}>
                {daysLeft} days remaining
              </span>
            </div>
            <p className={`text-[13px] mt-1 ${urgent ? 'text-amber-400/70' : 'text-rv-text-3'}`}>
              ~November 26, 2027 &nbsp;·&nbsp; {monthsLeft} months as of build date
            </p>
            <p className="text-[11px] text-rv-text-3 mt-2">
              Verify exact date with Shem Lachhman. Missing this deadline forfeits international patent rights.
            </p>
          </div>
        </div>
      </div>

      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
