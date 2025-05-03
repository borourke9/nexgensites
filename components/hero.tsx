"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          AI-Powered Websites, Chatbots & SEO for Modern Businesses
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We build responsive websites, automate customer engagement with AI chatbots, and boost search rankings using advanced SEO — all in one service.
        </p>
      </div>
      <Button size="lg" onClick={scrollToFeatures}>
        See How It Works
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  )
}
