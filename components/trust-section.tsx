"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Wrench, Scissors, Home, Car, Heart, ShoppingCart } from "lucide-react"

export default function TrustSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const industries = [
    {
      name: "Custom Fabrication",
      icon: Wrench,
      caption: "Bespoke builds",
      bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=70"
    },
    {
      name: "Beauty & Wellness",
      icon: Scissors,
      caption: "Premium care spaces",
      bgImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=70"
    },
    {
      name: "Real Estate",
      icon: Home,
      caption: "Dream home showcases",
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=70"
    },
    {
      name: "Automotive",
      icon: Car,
      caption: "Performance & precision",
      bgImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=70"
    },
    {
      name: "Healthcare",
      icon: Heart,
      caption: "Trusted medical care",
      bgImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=70"
    },
    {
      name: "E-Commerce",
      icon: ShoppingCart,
      caption: "Digital storefronts",
      bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=70"
    }
  ]

  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      subline: "Across 12 industries"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      subline: "Based on reviews"
    },
    {
      number: "24/7",
      label: "AI Support",
      subline: "Never miss a lead"
    },
    {
      number: "$200k+",
      label: "Value Created",
      subline: "For our clients"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-stone-100">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Industries We Serve Section */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h3 className="text-lg font-semibold text-stone-800 mb-2 tracking-wide">
            Industries We Serve
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto mb-10"></div>
          
          {/* Industries Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={industry.name}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out aspect-[4/3] ring-1 ring-white/20"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
                    <img
                      src={industry.bgImage}
                      alt={`${industry.name} background`}
                      className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Enhanced Duotone Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-amber-50/50 to-stone-100/60 group-hover:from-rose-200/70 group-hover:via-amber-100/60 group-hover:to-stone-200/70 transition-all duration-300"></div>
                  
                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-900/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm shadow-xl mb-3 sm:mb-4 group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-300 ring-2 ring-white/30">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-stone-700" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 leading-tight drop-shadow-sm">
                      {industry.name}
                    </h4>
                    <p className="text-xs text-stone-700 font-semibold drop-shadow-sm">
                      {industry.caption}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Link */}
          <div className="mt-12">
            <a
              href="#client-stories-section"
              className="inline-flex items-center text-sm text-stone-600 hover:text-stone-800 transition-colors duration-200 group"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('client-stories-section')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <span className="mr-2">View Client Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="w-24 h-px bg-stone-300 mx-auto mb-16"></div>

        {/* Stats Section */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center transition-all duration-300 ease-out hover:scale-105"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-light text-stone-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-stone-600 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500">
                  {stat.subline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 