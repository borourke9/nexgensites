"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, CheckCircle, Clock, Zap, Building2, Car, Scissors, Heart, Wrench } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-rose-50 relative overflow-hidden">
      {/* Subtle textured background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <main className="relative z-0 px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-20 lg:pt-24 xl:pt-32 pb-16 sm:pb-20 lg:pb-24 xl:pb-32">
        <div className="relative max-w-6xl mx-auto">
          {/* Hero Content - Responsive Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-8 lg:space-y-10">
              {/* Badge with animation */}
              <div 
                className={`inline-flex items-center space-x-2 text-sm xl:text-base font-medium text-rose-700 bg-rose-50 px-4 py-2 rounded-full border border-rose-200 transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <span>NEXGEN CREATIVE</span>
              </div>

              {/* Headline with animation */}
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-wide text-stone-900 transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Websites & Marketing That Bring You{" "}
                <span className="relative">
                  More Jobs
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-rose-500 rounded-full"></div>
                </span>
                .
              </h1>

              {/* Subheadline with animation */}
              <p 
                className={`text-lg sm:text-xl lg:text-2xl leading-relaxed text-stone-600 max-w-2xl lg:max-w-none mx-auto lg:mx-0 font-light transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-6'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Custom websites, SEO, and ads designed for service businesses in Northern Michigan — with every detail built to help you grow.
              </p>

              {/* CTA Buttons with animation */}
              <div 
                className={`space-y-6 transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                {/* Main CTA Button */}
                <div className="flex justify-center lg:justify-start">
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
                    className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:px-12 lg:py-6 lg:text-xl xl:px-16 xl:py-8 xl:text-2xl 2xl:px-20 2xl:py-10 2xl:text-3xl rounded-none border border-stone-900 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Get Your Free Growth Plan
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Secondary Link */}
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      const whatWeDoSection = document.getElementById("what-we-do-section")
                      if (whatWeDoSection) {
                        const offsetTop = whatWeDoSection.offsetTop - 80
                        window.scrollTo({
                          top: offsetTop,
                          behavior: "smooth",
                        })
                      }
                    }}
                    className="text-stone-600 hover:text-stone-800 font-medium underline underline-offset-4 transition-colors duration-300 text-base sm:text-lg lg:text-xl"
                  >
                    See Our Work
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Single Clean Mockup */}
            <div 
              className={`flex justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Single Mockup Image */}
                <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-stone-200">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="/malone_electrical_optimized.jpg"
                      alt="Professional Website Mockup"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
                
                {/* Subtle drop shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent rounded-2xl -z-10 transform translate-y-4 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Social Proof Bar */}
          <div 
            className={`mt-20 sm:mt-24 lg:mt-32 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-2xl p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10">
                {/* Left: Rating */}
                <div className="flex items-center space-x-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-stone-900">4.9/5</span>
                  <span className="text-sm text-stone-600">from local business owners</span>
                </div>
                
                {/* Middle: Trust text */}
                <div className="text-center sm:text-left">
                  <p className="text-sm text-stone-600">
                    Trusted by businesses across <span className="font-medium text-stone-900">Harbor Springs</span>, <span className="font-medium text-stone-900">Petoskey</span>, and <span className="font-medium text-stone-900">Charlevoix</span>
                  </p>
                </div>
                
                {/* Right: Industry icons */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-stone-100 border border-stone-300 rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-stone-600" />
                  </div>
                  <div className="w-8 h-8 bg-stone-100 border border-stone-300 rounded-full flex items-center justify-center">
                    <Car className="w-4 h-4 text-stone-600" />
                  </div>
                  <div className="w-8 h-8 bg-stone-100 border border-stone-300 rounded-full flex items-center justify-center">
                    <Scissors className="w-4 h-4 text-stone-600" />
                  </div>
                  <div className="w-8 h-8 bg-stone-100 border border-stone-300 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-stone-600" />
                  </div>
                  <div className="w-8 h-8 bg-stone-100 border border-stone-300 rounded-full flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-stone-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Teaser Strip */}
          <div 
            className={`mt-12 sm:mt-16 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
              {/* Lead Generation */}
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-rose-100 to-transparent hover:scale-105 hover:shadow-lg transition-transform duration-200">
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-rose-600 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">+40% leads</h3>
                <p className="text-sm text-stone-600">in 90 days</p>
              </div>
              
              {/* Response Time */}
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-amber-100 to-transparent hover:scale-105 hover:shadow-lg transition-transform duration-200">
                    <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Sub-24h response</h3>
                <p className="text-sm text-stone-600">to new leads</p>
              </div>
              
              {/* Performance */}
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-emerald-100 to-transparent hover:scale-105 hover:shadow-lg transition-transform duration-200">
                    <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Sites load in &lt;1s</h3>
                <p className="text-sm text-stone-600">on mobile</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 