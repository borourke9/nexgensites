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

      <main className="relative z-0 px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="relative max-w-8xl mx-auto">
          {/* Hero Content - Responsive Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
            {/* Left Column - Content */}
                          <div className="text-center lg:text-left space-y-3 sm:space-y-6 lg:space-y-8 lg:pl-4 xl:pl-8 2xl:pl-12">
                              {/* Badge with animation */}
                <div 
                  className={`inline-flex items-center space-x-2 text-sm xl:text-base 2xl:text-lg font-medium text-rose-700 bg-rose-50 px-4 py-2 rounded-full border border-rose-200 transition-all duration-1000 ease-out ${
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
                className={`text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-wide text-stone-900 transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                We Build <span className="text-[#b31334] font-semibold">Websites</span>, <span className="text-[#b31334] font-semibold">SEO</span>, and <span className="text-[#b31334] font-semibold">Ads</span> That Get More <span className="relative">
                  Jobs for You
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#b31334]"></div>
                </span>.
              </h1>

              {/* Description with animation */}
              <p 
                className={`text-base sm:text-lg lg:text-xl leading-relaxed text-stone-600 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 font-light transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-6'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Custom <span className="text-[#b31334] font-medium">sites</span>, local <span className="text-[#b31334] font-medium">SEO</span>, Google & Meta <span className="text-[#b31334] font-medium">ads</span>, plus optional <span className="text-[#b31334] font-medium">AI</span> to capture every lead — built for service businesses in Northern Michigan.
              </p>

              {/* Primary CTA with subtext */}
              <div 
                className={`space-y-3 transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
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
                    Get My Growth Plan
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-sm text-stone-500 text-center lg:text-left">
                  Free custom plan in 24 hours
                </p>
              </div>

              {/* Secondary link/button - Button on mobile, text link on desktop */}
              <div 
                className={`flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                {/* Mobile: Outlined button */}
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById("pricing-section")
                    if (pricingSection) {
                      const offsetTop = pricingSection.offsetTop - 80
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="lg:hidden border border-stone-300 text-stone-700 font-medium px-6 py-2.5 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                >
                  See Pricing
                </button>
                
                {/* Desktop: Text link */}
                <button
                  onClick={() => {
                    const pricingSection = document.getElementById("pricing-section")
                    if (pricingSection) {
                      const offsetTop = pricingSection.offsetTop - 80
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="hidden lg:inline text-stone-600 hover:text-stone-900 font-medium underline underline-offset-4 transition-colors duration-300 lg:text-lg xl:text-xl 2xl:text-2xl"
                >
                  See pricing
                </button>
              </div>
            </div>

            {/* Right Column - 3-Tile Project Montage */}
            <div 
              className={`flex justify-center lg:justify-end mt-8 lg:mt-0 transition-all duration-1000 ease-out ${
                isLoaded 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                {/* Project Montage Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Large tile (top left) */}
                  <div className="col-span-2 bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-stone-900">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-stone-100">
                      <img
                        src="/malone_electrical_optimized.jpg"
                        alt="Malone Electrical Website"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                  
                  {/* Small tiles (bottom row) */}
                  <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 border border-stone-900">
                    <div className="aspect-square rounded-lg overflow-hidden bg-stone-100">
                      <img
                        src="/back-optimized.jpg"
                        alt="Happy Trails RV Rentals Website"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 border border-stone-900">
                    <div className="aspect-square rounded-lg overflow-hidden bg-stone-100">
                      <img
                        src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=600"
                        alt="Harbor View Med Spa Website"
                        className="w-full h-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <p className="text-center text-sm text-stone-600 mt-4 font-medium">
                  Recent work
                </p>
                
                {/* Subtle drop shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent rounded-xl -z-10 transform translate-y-3 sm:translate-y-4 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Social Proof Bar */}
          <div 
            className={`mt-16 sm:mt-20 lg:mt-24 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
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
            className={`mt-8 sm:mt-12 transition-all duration-1000 ease-out ${
              isLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Lead Generation */}
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-[#fce4ec] to-transparent hover:scale-105 hover:shadow-lg transition-transform duration-200">
                    <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-rose-600 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1">+40% leads</h3>
                <p className="text-sm text-stone-600">in 90 days</p>
              </div>
              
              {/* Response Time */}
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-[#fff8e1] to-transparent hover:scale-105 hover:shadow-lg transition-transform duration-200">
                    <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1">Sub-24h response</h3>
                <p className="text-sm text-stone-600">to new leads</p>
              </div>
              
              {/* Performance */}
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-[#e8f5e9] to-transparent hover:scale-105 hover:shadow-lg transition-transform duration-200">
                    <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 stroke-[1.5]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-1">Sites load in &lt;1s</h3>
                <p className="text-sm text-stone-600">on mobile</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 