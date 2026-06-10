interface IframeEmbedProps {
  src: string | undefined
  title: string
  height?: string
}

export default function IframeEmbed({ src, title, height = 'calc(100vh - 4rem)' }: IframeEmbedProps) {
  if (!src) {
    return (
      <div
        className="flex flex-col items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg mx-6 my-6"
        style={{ height: 'calc(100vh - 10rem)' }}
      >
        <svg className="w-10 h-10 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <p className="text-gray-500 font-medium">{title} — not connected yet</p>
        <p className="text-gray-400 text-sm mt-1">
          Add the URL to <code className="bg-gray-100 px-1 rounded">.env.local</code> following{' '}
          <span className="text-green-600">SETUP_GUIDE_FOR_BRIAN.md</span>
        </p>
      </div>
    )
  }

  return (
    <iframe
      src={src}
      title={title}
      className="w-full border-0"
      style={{ height }}
      allowFullScreen
    />
  )
}
