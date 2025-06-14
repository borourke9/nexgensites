import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Home",
  description: "Transform your online presence with NexGenSites. We offer AI-powered websites, chatbots, and SEO services to help your business grow.",
  openGraph: {
    title: "NexGenSites - AI-Powered Websites & SEO",
    description: "Transform your online presence with NexGenSites. We offer AI-powered websites, chatbots, and SEO services to help your business grow.",
    url: "https://nexgensites.vercel.app",
  },
  twitter: {
    title: "NexGenSites - AI-Powered Websites & SEO",
    description: "Transform your online presence with NexGenSites. We offer AI-powered websites, chatbots, and SEO services to help your business grow.",
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
