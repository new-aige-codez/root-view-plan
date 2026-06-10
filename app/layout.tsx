import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'

export const metadata: Metadata = {
  title: 'Root View – R&D',
  description: 'Internal R&D workspace for the Root View hydroponic runoff device.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Sidebar />
        <TopBar />
        {/* Offset for fixed sidebar (w-56 = 224px) and topbar (h-16 = 64px) */}
        <main className="ml-56 mt-16 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  )
}
