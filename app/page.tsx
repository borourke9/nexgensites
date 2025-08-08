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

              {/* Right side - Northern Viking Woodworks Device Mockup */}
              <div 
                className={`relative transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="relative">
                  {/* Laptop Mockup */}
                  <div
                    className={`relative transform rotate-3 transition-all duration-1000 ease-out ${
                      isLoaded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    {/* Laptop Frame */}
                    <div className="relative bg-stone-800 rounded-2xl p-3 shadow-2xl">
                      {/* Screen Bezel */}
                      <div className="bg-stone-900 rounded-xl p-2">
                        {/* Screen */}
                        <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden shadow-inner">
                          <img
                            src="/nvw_compressed.jpg"
                            alt="Northern Viking Woodworks Website"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* Laptop Base */}
                      <div className="mt-2 h-2 bg-stone-700 rounded-b-lg"></div>
                    </div>
                  </div>
                  
                  {/* Smartphone Mockup */}
                  <div
                    className={`absolute -top-8 -right-8 transform -rotate-12 transition-all duration-1000 ease-out ${
                      isLoaded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '1000ms' }}
                  >
                    {/* Phone Frame */}
                    <div className="relative bg-stone-800 rounded-3xl p-2 shadow-xl">
                      {/* Screen */}
                      <div className="aspect-[9/16] bg-white rounded-2xl overflow-hidden shadow-inner">
                        <img
                          src="/nvw_compressed.jpg"
                          alt="Northern Viking Woodworks Mobile Website"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-stone-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Floating testimonial card */}
                  <div 
                    className={`absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-xl p-4 shadow-lg max-w-xs transition-all duration-1000 ease-out ${
                      isLoaded 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: '1200ms' }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-amber-700">N</span>
                      </div>
                      <div>
                        <p className="text-sm text-stone-700 font-medium">"Our custom woodwork business now has a professional online presence."</p>
                        <p className="text-xs text-stone-500 mt-1">Northern Viking Woodworks</p>
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
