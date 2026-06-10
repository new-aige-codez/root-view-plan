import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

const VERSIONS = [
  {
    id: 'v1',
    label: 'V.1',
    date: 'Dec 2025',
    status: 'retired' as const,
    summary: 'Arduino + plywood box. Bench-proven concept. Abandoned: impeller sensor required 9" elevation, incompatible with mobile grow tables.',
  },
  {
    id: 'v2',
    label: 'V.2',
    date: 'Jan 2026 →',
    status: 'active' as const,
    summary: 'ESP32 + Waveshare 2.8" touchscreen. Ultrasonic flow sensor (horizontal-compatible). 3D-printed enclosure. DF Robot pH probe.',
  },
  {
    id: 'v3',
    label: 'V.3+',
    date: 'Future',
    status: 'planned' as const,
    summary: 'Solar power option. IoT cloud backend. Per-plant catch basin + remote valve expansion module.',
  },
]

const STATUS_STYLES = {
  active:  { dot: 'bg-emerald-500', badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', label: 'Active Build' },
  retired: { dot: 'bg-[#444]',       badge: 'text-[#666] bg-rv-raised border-rv-border-2',             label: 'Retired' },
  planned: { dot: 'bg-blue-500/60',   badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',         label: 'Planned' },
}

const PHOTOS = [
  { src: '/pix/Trough Design - Iso View.png', caption: 'Trough Design — Isometric Render', version: 'V.2' },
  { src: '/pix/PXL_20251230_031210819.jpg',   caption: 'V.1 Prototype',                    version: 'V.1' },
  { src: '/pix/PXL_20251231_003137798.jpg',   caption: 'V.1 Prototype',                    version: 'V.1' },
  { src: '/pix/PXL_20251227_204219468.jpg',   caption: 'Components',                       version: 'V.1' },
  { src: '/pix/PXL_20251230_025454867.jpg',   caption: 'Build Detail',                     version: 'V.1' },
  { src: '/pix/PXL_20251230_025658375.jpg',   caption: 'Build Detail',                     version: 'V.1' },
]

const APP_SCREENSHOTS = [
  '/pix/Screenshot_20260603-140505.png',
  '/pix/Screenshot_20260603-140531.png',
  '/pix/Screenshot_20260603-140605.png',
]

export default function PrototypingPage() {
  const mdPath = path.join(process.cwd(), 'content', 'prototyping.md')
  const content = fs.readFileSync(mdPath, 'utf-8')

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">

      {/* Version Timeline */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            Version History
          </span>
          <div className="flex-1 h-px bg-rv-border" />
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-rv-border-2" />
          <div className="space-y-4">
            {VERSIONS.map((v) => {
              const s = STATUS_STYLES[v.status]
              return (
                <div key={v.id} className="flex gap-4 items-start">
                  {/* Dot */}
                  <div className={`w-[38px] h-[38px] rounded-full border border-rv-border-2 bg-rv-surface flex items-center justify-center flex-shrink-0 relative z-10`}>
                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-rv-surface border border-rv-border rounded-lg px-4 py-3 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[13px] font-semibold text-rv-text">{v.label}</span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${s.badge}`}>
                        {s.label}
                      </span>
                      <span className="text-[11px] text-rv-text-3 ml-auto">{v.date}</span>
                    </div>
                    <p className="text-[12px] text-rv-text-3 leading-relaxed">{v.summary}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical details */}
      <div className="prose mb-10">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Hardware Photos */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            Photos &amp; Renders
          </span>
          <div className="flex-1 h-px bg-rv-border" />
          <span className="text-[11px] text-rv-text-3">V.1 + V.2 design</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PHOTOS.map(({ src, caption, version }) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rv-surface border border-rv-border rounded-lg overflow-hidden hover:border-rv-border-2 transition-colors"
            >
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <Image
                  src={src}
                  alt={caption}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-[11px] text-rv-text-3">{caption}</span>
                <span className="text-[10px] font-medium text-rv-text-3 bg-rv-raised px-1.5 py-0.5 rounded border border-rv-border">
                  {version}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* App Screenshots */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-rv-text-3">
            App UI
          </span>
          <div className="flex-1 h-px bg-rv-border" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {APP_SCREENSHOTS.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rv-surface border border-rv-border rounded-lg overflow-hidden hover:border-rv-border-2 transition-colors"
            >
              <div className="relative w-full" style={{ paddingBottom: '177%' }}>
                <Image
                  src={src}
                  alt={`UI Screenshot ${i + 1}`}
                  fill
                  className="object-contain group-hover:opacity-90 transition-opacity"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
