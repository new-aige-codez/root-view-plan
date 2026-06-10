import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        rv: {
          base:    '#0a0a0a',
          surface: '#111111',
          raised:  '#161616',
          elevated:'#1e1e1e',
          muted:   '#252525',
          border:  '#1e1e1e',
          'border-2': '#2a2a2a',
          text:    '#f2f2f2',
          'text-2':'#a0a0a0',
          'text-3':'#555555',
        },
      },
    },
  },
  plugins: [],
}

export default config
