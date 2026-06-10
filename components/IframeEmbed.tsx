interface IframeEmbedProps {
  src: string | undefined
  title: string
  height?: string
}

export default function IframeEmbed({ src, title, height = 'calc(100vh - 4rem)' }: IframeEmbedProps) {
  if (!src) {
    return (
      <div
        className="flex flex-col items-center justify-center border border-dashed border-rv-border-2 rounded-lg mx-4 my-4"
        style={{ height: 'calc(100% - 2rem)' }}
      >
        <svg className="w-8 h-8 text-rv-text-3 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <p className="text-rv-text-2 text-sm font-medium">{title}</p>
        <p className="text-rv-text-3 text-xs mt-1">
          Add URL to{' '}
          <code className="bg-rv-raised px-1.5 py-0.5 rounded text-[10px] border border-rv-border-2 text-emerald-500">
            .env.local
          </code>
          {' '}to connect
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
