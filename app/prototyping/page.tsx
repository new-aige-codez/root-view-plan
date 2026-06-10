import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

export default function PrototypingPage() {
  const mdPath = path.join(process.cwd(), 'content', 'prototyping.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  const photos = [
    { src: '/pix/Trough Design - Iso View.png', caption: 'Trough Design — Isometric Render' },
    { src: '/pix/PXL_20251230_031210819.jpg',   caption: 'V.1 Prototype — Dec 2025' },
    { src: '/pix/PXL_20251231_003137798.jpg',   caption: 'V.1 Prototype — Dec 2025' },
    { src: '/pix/PXL_20251227_204219468.jpg',   caption: 'Components — Dec 2025' },
    { src: '/pix/PXL_20251230_025454867.jpg',   caption: 'Build Detail — Dec 2025' },
    { src: '/pix/PXL_20251230_025658375.jpg',   caption: 'Build Detail — Dec 2025' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Markdown content */}
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Photo gallery */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 border-b border-gray-200 pb-1">Photos &amp; Renders</h2>
        <p className="text-sm text-gray-500 mb-4">V.1 prototype photos and trough design render. V.2 renders to be added as they&apos;re created.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map(({ src, caption }) => (
            <figure key={src} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <Image
                  src={src}
                  alt={caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-gray-500">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* App screenshots (if any) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-1 border-b border-gray-200 pb-1">UI / App Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            '/pix/Screenshot_20260603-140505.png',
            '/pix/Screenshot_20260603-140531.png',
            '/pix/Screenshot_20260603-140605.png',
          ].map((src) => (
            <figure key={src} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '177%' }}>
                <Image src={src} alt="UI screenshot" fill className="object-contain" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
}
