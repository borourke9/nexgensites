import type React from "react"
import "./globals.css"
import CentralizedParallax from "@/components/centralized-parallax"
import Script from "next/script"

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
        
        {/* Schema.org Organization JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NexGen Sites",
              "description": "Boutique web design, local SEO, Google & Meta ads, and AI lead capture for service businesses in Northern Michigan",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Harbor Springs"
                },
                {
                  "@type": "City", 
                  "name": "Petoskey"
                },
                {
                  "@type": "City",
                  "name": "Charlevoix"
                }
              ],
              "url": "https://nexgensites.com",
              "sameAs": []
            })
          }}
        />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Website Design Northern Michigan | NexGen Sites | Websites, SEO & Ads',
  description: 'Website design Northern Michigan - Boutique web design, local SEO, Google & Meta ads, and AI lead capture. Serving Harbor Springs, Petoskey, Charlevoix. Free growth plan in 24 hours.',
  generator: 'v0.dev'
};
