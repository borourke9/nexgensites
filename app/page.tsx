"use client"

import { Button } from "@/components/ui/button"
import WhatWeDoSection from "@/components/what-we-do-section"
import ResultsSection from "@/components/results-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import ScrollIndicator from "@/components/scroll-indicator"
import { ArrowRight, Sparkles, Zap, TrendingUp, CheckCircle, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import HeroBackground from "@/components/hero-background"
import { useEffect, useState } from "react"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Navigation */}
      <Navigation />

      <div id="home" className="min-h-screen bg-[#f8f8f8] relative overflow-hidden pt-20">
        {/* Multiple animated background elements */}
        <HeroBackground />

        <main className="relative px-6 py-12 md:py-16">
          <div className="relative max-w-6xl mx-auto">
            {/* Hero Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Badge with animation */}
                <div 
                  className={`flex items-center space-x-2 text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full w-fit transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>NEXGEN GROWTH SYSTEMS</span>
                </div>

                {/* Headline with animation */}
                <h1 
                  className={`text-5xl md:text-7xl font-bold leading-tight tracking-tight transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  Done-For-You
                  <span className="block bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    Growth Systems.
                  </span>
                </h1>

                {/* Description with animation */}
                <p 
                  className={`text-xl leading-relaxed text-gray-600 max-w-lg transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-6'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  We build and manage high-converting websites, ad campaigns, and AI-powered automations — so you can
                  focus on running your business while we handle your digital growth.
                </p>

                {/* Trust badges with animation */}
                <div 
                  className={`flex items-center space-x-6 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Free Strategy Call</span>
                  </div>
                </div>

                {/* Buttons with animation */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <Button
                    onClick={() => {
                      const contactSection = document.getElementById("contact-section")
                      if (contactSection) {
                        const offsetTop = contactSection.offsetTop - 80
                        window.scrollTo({
                          top: offsetTop,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-pink-500/25 border-0 group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  >
                    🚀 Build My System
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={() => {
                      const resultsSection = document.getElementById("results-section")
                      if (resultsSection) {
                        const offsetTop = resultsSection.offsetTop - 80
                        window.scrollTo({
                          top: offsetTop,
                          behavior: "smooth",
                        })
                      }
                    }}
                    variant="outline"
                    className="border-2 border-gray-300 hover:border-pink-400 px-8 py-4 rounded-full font-semibold bg-transparent cursor-pointer hover:bg-pink-50 transition-all duration-300"
                  >
                    View Case Studies
                  </Button>
                </div>

                {/* Enhanced Stats with animation */}
                <div 
                  className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: '1200ms' }}
                >
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
                    <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
                    <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40">
                    <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              {/* Right side visual elements with animation */}
              <div 
                className={`relative transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm border border-white/40 rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">System Active</span>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                        <span className="text-sm font-medium">Website Conversion</span>
                        <span className="text-sm font-bold text-pink-600">+127%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                        <span className="text-sm font-medium">Lead Generation</span>
                        <span className="text-sm font-bold text-blue-600">+89%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                        <span className="text-sm font-medium">Revenue Growth</span>
                        <span className="text-sm font-bold text-green-600">+156%</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs text-gray-600">AI-Powered Optimization Running</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Trust indicators with animation */}
            <div 
              className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1400ms' }}
            >
              <div className="text-center mb-8">
                <p className="text-sm text-gray-500 font-medium mb-4">TRUSTED BY FORWARD-THINKING BUSINESSES</p>
                <div className="flex justify-center items-center space-x-12 opacity-60">
                  <div className="text-lg font-bold text-gray-400">STARTUPS</div>
                  <div className="text-lg font-bold text-gray-400">SCALE-UPS</div>
                  <div className="text-lg font-bold text-gray-400">ENTERPRISES</div>
                  <div className="text-lg font-bold text-gray-400">AGENCIES</div>
                </div>
              </div>
              
              {/* Additional trust elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-2">$200k+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-2">15,000+</div>
                  <div className="text-sm text-gray-600">Leads Generated</div>
                </div>
                <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-2">3.2x</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12">
            <ScrollIndicator />
          </div>
        </main>
      </div>

      {/* What We Do Section */}
      <div id="what-we-do-section">
        <WhatWeDoSection />
      </div>

      {/* Results Section */}
      <div id="results-section">
        <ResultsSection />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works-section">
        <HowItWorksSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials-section">
        <TestimonialsSection />
      </div>

      {/* About Section */}
      <div id="about-section">
        <AboutSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing-section">
        <PricingSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </>
  )
}
