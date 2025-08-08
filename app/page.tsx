"use client"

import { Button } from "@/components/ui/button"
import ClientStories from "@/components/what-we-do-section"
import ResultsSection from "@/components/results-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import MeetFounderSection from "@/components/meet-founder-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import TrustSection from "@/components/trust-section"
import ScrollIndicator from "@/components/scroll-indicator"
import { ArrowRight, Sparkles, CheckCircle, Star, Play, Palette, Users, Heart, Building2, Car, Scissors, Sparkles as SparklesIcon } from "lucide-react"
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
    <div>
      {/* Navigation */}
      <Navigation />

      <div id="home" className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-rose-50 relative overflow-hidden">
        {/* Subtle textured background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <main className="relative px-6 py-12 md:py-20 lg:py-32">
          <div className="relative max-w-6xl mx-auto">
            {/* Hero Content - Center Aligned */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-10">
                {/* Badge with animation */}
                <div 
                  className={`inline-flex items-center space-x-2 text-sm font-medium text-rose-700 bg-rose-50 px-4 py-2 rounded-full border border-rose-200 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>NEXGEN CREATIVE</span>
                </div>

                {/* Headline with animation */}
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide text-stone-900 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-8'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  We craft digital
                  <span className="block font-medium text-rose-800">
                    experiences that
                  </span>
                  <span className="block font-light text-stone-700">
                    connect & convert.
                  </span>
                </h1>

                {/* Description with animation */}
                <p 
                  className={`text-lg leading-relaxed text-stone-600 max-w-xl mx-auto lg:mx-0 font-medium transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-6'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  From websites that tell your story to AI that never sleeps — we build the digital foundation your business deserves.
                </p>

                {/* Buttons with enhanced hover animations */}
                <div 
                  className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: '800ms' }}
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
                    className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-3 rounded-none border border-stone-900 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Build My System
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-stone-700 hover:text-rose-700 px-8 py-3 font-medium underline-offset-4 hover:underline transition-all duration-300 hover:scale-105"
                  >
                    Watch Demo
                  </Button>
                </div>

                {/* Trust badges with animation */}
                <div 
                  className={`flex items-center justify-center lg:justify-start space-x-8 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-stone-600">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500" />
                    <span className="text-sm text-stone-600">Handcrafted with care</span>
                  </div>
                </div>
              </div>

              {/* Right side - Real Business Mockup */}
              <div 
                className={`relative transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="relative">
                  {/* Main business mockup */}
                  <div className="relative bg-white/90 backdrop-blur-sm border border-stone-200 rounded-2xl p-8 shadow-lg">
                    <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-rose-50 rounded-xl overflow-hidden">
                      {/* Spa/Wellness Business Mockup */}
                      <div className="h-full bg-gradient-to-br from-rose-50 to-amber-50 p-6 flex flex-col justify-between">
                        <div className="text-center space-y-3">
                          <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto">
                            <SparklesIcon className="w-6 h-6 text-rose-600" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-medium text-stone-900">Serenity Spa & Wellness</h3>
                            <p className="text-sm text-stone-600">Premium spa services & treatments</p>
                          </div>
                        </div>
                        
                        {/* Mock website elements */}
                        <div className="space-y-2">
                          <div className="h-2 bg-rose-200 rounded-full"></div>
                          <div className="h-2 bg-rose-100 rounded-full w-3/4"></div>
                          <div className="h-2 bg-rose-50 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay elements for visual interest */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center border border-rose-200">
                      <Palette className="w-6 h-6 text-rose-600" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center border border-stone-200">
                      <Heart className="w-5 h-5 text-stone-600" />
                    </div>
                  </div>

                  {/* Floating testimonial card with fade-up animation */}
                  <div 
                    className={`absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-xl p-4 shadow-lg max-w-xs transition-all duration-1000 ease-out ${
                      isLoaded 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '1200ms' }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-rose-700">S</span>
                      </div>
                      <div>
                        <p className="text-sm text-stone-700 font-medium">"They transformed our online presence completely."</p>
                        <p className="text-xs text-stone-500 mt-1">Sarah, Serenity Spa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* Trust Section */}
            <div 
              className={`mt-24 transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1600ms' }}
            >
              <TrustSection />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16">
            <ScrollIndicator />
          </div>
        </main>
      </div>

      {/* Client Stories Section */}
      <div id="client-stories-section">
        <ClientStories />
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

      {/* Meet the Founder Section */}
      <div id="meet-founder-section">
        <MeetFounderSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing-section">
        <PricingSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </div>
  )
}
