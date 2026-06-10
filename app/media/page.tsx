import IframeEmbed from '@/components/IframeEmbed'

function EmbedSection({
  title,
  description,
  badge,
  externalUrl,
  children,
}: {
  title: string
  description: string
  badge: string
  externalUrl?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col border-b border-rv-border last:border-0" style={{ height: '50%' }}>
      <div className="flex items-start justify-between px-6 py-4 border-b border-rv-border flex-shrink-0">
        <div>
          <h2 className="text-[13px] font-semibold text-rv-text">{title}</h2>
          <p className="text-[12px] text-rv-text-3 mt-0.5 max-w-xl">
            {description}
            {externalUrl && (
              <>
                {' '}
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  Open ↗
                </a>
              </>
            )}
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] text-rv-text-3 flex-shrink-0 ml-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {badge}
        </span>
      </div>
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </section>
  )
}

export default function MediaPage() {
  const driveFolderUrl = process.env.NEXT_PUBLIC_DRIVE_FOLDER_URL
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL

  function toEmbedUrl(shareUrl: string | undefined): string | undefined {
    if (!shareUrl) return undefined
    const match = shareUrl.match(/folders\/([^?]+)/)
    if (match) return `https://drive.google.com/embeddedfolderview?id=${match[1]}`
    return shareUrl
  }

  const driveEmbedUrl = toEmbedUrl(driveFolderUrl)
  const videoEmbedUrl = videoUrl?.replace('watch?v=', 'embed/') ?? undefined

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-rv-base">
      <EmbedSection
        title="Files & Renders — Google Drive"
        description="Renders, MVP photos, test data, and reference files. Edit in Drive; view updates automatically."
        badge="Live via Google Drive"
        externalUrl={driveFolderUrl}
      >
        <IframeEmbed src={driveEmbedUrl} title="Google Drive Folder" height="100%" />
      </EmbedSection>

      <EmbedSection
        title="Demo Video"
        description="Prototype demonstration footage."
        badge="YouTube"
      >
        {videoEmbedUrl ? (
          <div className="p-4 h-full">
            <iframe
              src={videoEmbedUrl}
              title="Root View Demo"
              className="w-full h-full rounded-lg border border-rv-border"
              allowFullScreen
            />
          </div>
        ) : (
          <IframeEmbed src={undefined} title="Demo Video" height="100%" />
        )}
      </EmbedSection>
    </div>
  )
}
