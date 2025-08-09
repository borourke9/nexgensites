import type React from "react"
import "./globals.css"
import CentralizedParallax from "@/components/centralized-parallax"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CentralizedParallax text="NEXGEN" opacity={0.6} stroke={false} />
        {children}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
