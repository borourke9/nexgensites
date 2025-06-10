import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata, Viewport } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nexgensites.vercel.app'),
  title: {
    default: "NexGenSites - AI-Powered Websites & SEO",
    template: "%s | NexGenSites"
  },
  description: "We build responsive websites, automate customer engagement with AI chatbots, and boost search rankings using advanced SEO — all in one service.",
  keywords: ["AI websites", "SEO services", "web development", "AI chatbots", "digital marketing", "business websites"],
  authors: [{ name: "NexGenSites" }],
  creator: "NexGenSites",
  publisher: "NexGenSites",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexgensites.vercel.app",
    title: "NexGenSites - AI-Powered Websites & SEO",
    description: "We build responsive websites, automate customer engagement with AI chatbots, and boost search rankings using advanced SEO — all in one service.",
    siteName: "NexGenSites",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexGenSites - AI-Powered Websites & SEO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGenSites - AI-Powered Websites & SEO",
    description: "We build responsive websites, automate customer engagement with AI chatbots, and boost search rankings using advanced SEO — all in one service.",
    images: ["/twitter-image.jpg"],
    creator: "@nexgensites"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NexGenSites",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="VgedMaHX_D-hYwSt_GD7ZRDlnIlGzhAJFNg3J3MJfvk" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
