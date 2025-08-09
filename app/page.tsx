"use client"

import { Button } from "@/components/ui/button"
import ClientStories from "@/components/what-we-do-section"
import ResultsSection from "@/components/results-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"

import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import TrustSection from "@/components/trust-section"
import ScrollIndicator from "@/components/scroll-indicator"
import ParallaxWordmark, { ReducedMotionWordmark } from "@/components/parallax-wordmark"
import { ArrowRight, Sparkles, CheckCircle, Star, Play, Palette, Users, Heart, Building2, Car, Scissors, Sparkles as SparklesIcon } from "lucide-react"
import Navigation from "@/components/navigation"
import HeroBackground from "@/components/hero-background"
import { useEffect, useState } from "react"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      clearTimeout(timer)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <div>
      {/* Navigation */}
      <Navigation />
      
            {/* Masked Parallax Background Wordmark - Only visible in hero and industries sections */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100vh, rgba(0,0,0,0.8) 120vh, rgba(0,0,0,0) 140vh)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100vh, rgba(0,0,0,0.8) 120vh, rgba(0,0,0,0) 140vh)'
          }}
        >
          {prefersReducedMotion ? (
            <ReducedMotionWordmark 
              text="NEXGEN" 
              opacity={0.6} 
              stroke={false}
            />
          ) : (
            <ParallaxWordmark 
              text="NEXGEN"
              from={-80}
              to={120}
              opacity={0.6} 
              stroke={false}
            />
          )}
        </div>
      </div>

      <div id="home" className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-rose-50 relative overflow-hidden">
        {/* Subtle textured background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <main className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28">
          <div className="relative max-w-8xl mx-auto">
            {/* Hero Content - Responsive Two-Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left space-y-6 sm:space-y-8 lg:pl-4 xl:pl-8 2xl:pl-12">
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
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight tracking-wide text-stone-900 transition-all duration-1000 ease-out ${
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
                  <span className="block font-medium text-stone-900">
                    connect & convert.
                  </span>
                </h1>

                {/* Description with animation */}
                <p 
                  className={`text-base sm:text-lg lg:text-xl leading-relaxed text-stone-600 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 font-medium transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-6'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  From websites that tell your story to AI that never sleeps — we build the digital foundation your business needs to grow.
                </p>

                {/* Single centered button with enhanced hover animations */}
                <div 
                  className={`flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
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
                </div>

                {/* Trust badges with animation - centered */}
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

              {/* Right Column - Responsive MacBook Pro Mockup */}
              <div 
                className={`flex justify-center lg:justify-end mt-8 lg:mt-0 transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                  {/* MacBook Pro Mockup */}
                  <div
                    className={`relative transition-all duration-1000 ease-out ${
                      isLoaded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    {/* MacBook Pro Frame */}
                    <div className="relative bg-stone-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
                      {/* Screen Bezel */}
                      <div className="bg-stone-900 rounded-lg sm:rounded-xl p-2 sm:p-3">
                        {/* Screen */}
                        <div className="aspect-[16/10] bg-white rounded-md sm:rounded-lg overflow-hidden shadow-inner">
                          <img
                            src="/nvw_compressed.jpg"
                            alt="Northern Viking Woodworks Website"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      {/* MacBook Base */}
                      <div className="mt-2 sm:mt-3 h-2 sm:h-3 bg-stone-700 rounded-b-lg"></div>
                      {/* MacBook Stand */}
                      <div className="mt-1 sm:mt-2 h-0.5 sm:h-1 bg-stone-600 rounded-full mx-auto w-12 sm:w-16"></div>
                    </div>
                    
                    {/* Subtle drop shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent rounded-xl sm:rounded-2xl -z-10 transform translate-y-3 sm:translate-y-4 blur-xl"></div>
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
