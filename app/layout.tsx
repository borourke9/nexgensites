// app/layout.tsx
import './globals.css'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', weight: ['700','800'] })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['500','600'] })

export const metadata = {
  title: 'NEXGEN',
  description: 'Websites, SEO, and Ads — perfectly balanced for growth.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable}`}>
      <body className="bg-cream text-black">{children}</body>
    </html>
  )
}
