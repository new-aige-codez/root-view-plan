import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import IframeEmbed from '@/components/IframeEmbed'

export default function CodePage() {
  const mdPath = path.join(process.cwd(), 'content', 'code.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  const codeEmbedUrl = process.env.NEXT_PUBLIC_CODE_EMBED_URL
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* GitHub link */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2C5.67 21.46 4.96 19.38 4.96 19.38c-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.69.82.57C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}

      {/* PRD + Architecture content */}
      <div className="prose mb-10">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Live code embed */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-1 border-b border-gray-200 pb-1">Live Code Preview</h2>
        <p className="text-sm text-gray-500 mb-3">
          Expo Snack or StackBlitz embed showing the latest runnable code.
          Add <code className="bg-gray-100 px-1 rounded text-xs">NEXT_PUBLIC_CODE_EMBED_URL</code> to <code className="bg-gray-100 px-1 rounded text-xs">.env.local</code> to activate.
        </p>
        <IframeEmbed src={codeEmbedUrl} title="Code Preview" height="600px" />
      </section>
    </div>
  )
}
