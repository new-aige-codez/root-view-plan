import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import IframeEmbed from '@/components/IframeEmbed'

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-5 mt-10">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">{label}</span>
      <div className="flex-1 h-px bg-rv-border" />
    </div>
  )
}

export default function CodePage() {
  const mdPath = path.join(process.cwd(), 'content', 'code.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  const codeEmbedUrl = process.env.NEXT_PUBLIC_CODE_EMBED_URL
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-8">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-rv-surface hover:bg-rv-elevated border border-rv-border-2 rounded-[5px] text-[12px] text-rv-text-2 hover:text-rv-text transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2C5.67 21.46 4.96 19.38 4.96 19.38c-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.82.57C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-rv-surface border border-rv-border rounded-[5px] text-[12px] text-rv-text-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2C5.67 21.46 4.96 19.38 4.96 19.38c-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.82.57C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub not connected
          </span>
        )}
      </div>

      <SectionDivider label="PRD & Architecture" />
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <SectionDivider label="Live Code Preview" />
      <p className="text-[12px] text-rv-text-3 mb-3">
        Expo Snack or StackBlitz embed. Set{' '}
        <code className="bg-rv-raised px-1.5 py-0.5 rounded text-[10px] border border-rv-border-2 text-emerald-500">
          NEXT_PUBLIC_CODE_EMBED_URL
        </code>
        {' '}in <code className="bg-rv-raised px-1.5 py-0.5 rounded text-[10px] border border-rv-border-2 text-emerald-500">.env.local</code> to activate.
      </p>
      <div className="border border-rv-border rounded-lg overflow-hidden">
        <IframeEmbed src={codeEmbedUrl} title="Code Preview" height="600px" />
      </div>
    </div>
  )
}
