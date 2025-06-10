"use client"

import { Button } from "@/components/ui/button"
import NeuralWave from "./neural-wave"
import { Phone, ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent" />
      <NeuralWave />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-teal-800 to-gray-700">
              Transform Your Online Presence with AI-Powered Websites
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              We build responsive websites, automate customer engagement with AI chatbots, and boost search rankings using advanced SEO — all in one service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 transition-all duration-300 rounded-lg border-2 border-teal-600 hover:border-teal-700 shadow-lg hover:shadow-teal-500/50 text-white hover:-translate-y-1"
              asChild
            >
              <a href="tel:+1(248-404-5768)">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-teal-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <a href="#how-it-works">
                <ArrowRight className="mr-2 h-5 w-5" />
                See How It Works
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
