import IframeEmbed from '@/components/IframeEmbed'

export default function MediaPage() {
  const driveFolderUrl = process.env.NEXT_PUBLIC_DRIVE_FOLDER_URL
  const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL

  // Convert Google Drive folder share link to embed URL
  // Share link: https://drive.google.com/drive/folders/FOLDER_ID?usp=sharing
  // Embed URL:  https://drive.google.com/embeddedfolderview?id=FOLDER_ID
  function toEmbedUrl(shareUrl: string | undefined): string | undefined {
    if (!shareUrl) return undefined
    const match = shareUrl.match(/folders\/([^?]+)/)
    if (match) return `https://drive.google.com/embeddedfolderview?id=${match[1]}`
    return shareUrl
  }

  const driveEmbedUrl = toEmbedUrl(driveFolderUrl)

  return (
    <div className="flex flex-col gap-8 px-6 py-8">
      {/* Google Drive folder */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Files &amp; Renders — Google Drive</h2>
        <p className="text-sm text-gray-500 mb-3">
          Renders, MVP photos, test data, and reference files. Edit directly in Drive; this view updates automatically.
          {driveFolderUrl && (
            <> <a href={driveFolderUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 underline ml-1">Open in Drive ↗</a></>
          )}
        </p>
        <div style={{ height: '50vh' }}>
          <IframeEmbed src={driveEmbedUrl} title="Google Drive Folder" height="100%" />
        </div>
      </section>

      {/* YouTube demo video */}
      {videoUrl && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Demo Video</h2>
          <div className="aspect-video w-full max-w-3xl">
            <iframe
              src={videoUrl.replace('watch?v=', 'embed/')}
              title="Root View Demo"
              className="w-full h-full rounded-lg border border-gray-200"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {!videoUrl && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Demo Video</h2>
          <div className="flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg" style={{ height: '200px' }}>
            <p className="text-gray-400 text-sm">No demo video yet — add <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_VIDEO_URL</code> to .env.local</p>
          </div>
        </section>
      )}
    </div>
  )
}
