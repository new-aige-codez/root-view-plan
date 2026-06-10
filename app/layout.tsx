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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-rv-base text-rv-text antialiased">
        <Sidebar />
        <TopBar />
        <main className="ml-56 mt-16 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  )
}
