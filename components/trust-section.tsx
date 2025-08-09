"use client"

import React, { useEffect, useState } from "react"
import { Wind, Scissors, Home, Car, Zap, ShoppingCart } from "lucide-react"
import SectionHeading from "./section-heading"

export default function TrustSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const industries = [
    {
      name: "HVAC",
      icon: Wind,
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=70"
    },
    {
      name: "Beauty & Wellness",
      icon: Scissors,
      bgImage: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=70"
    },
    {
      name: "Real Estate",
      icon: Home,
      bgImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=70"
    },
    {
      name: "Automotive",
      icon: Car,
      bgImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=70"
    },
    {
      name: "Electricians",
      icon: Zap,
      bgImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=70"
    },
    {
      name: "E-Commerce",
      icon: ShoppingCart,
      bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=70"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-stone-100">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Enhanced Section Header */}
        <SectionHeading 
          title="Industries we"
          accentText="serve"
          subtitle="From HVAC to electricians, we create tailored solutions for every industry."
          showUnderline={true}
        />
          
        {/* Industries Grid - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div
                key={industry.name}
                className={`
                  relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 ease-out group cursor-pointer
                  ring-1 ring-white/20 hover:ring-white/40
                  transform hover:scale-105 hover:-translate-y-2
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ 
                  transitionDelay: `${(index + 1) * 150}ms`,
                  aspectRatio: '4/3'
                }}
              >
                {/* Background Image with Duotone Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={industry.bgImage}
                    alt={`${industry.name} background`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Duotone overlay - cream/blush tones with vignette */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-rose-100/70 to-stone-200/90 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-stone-900/30"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <IconComponent 
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" 
                    />
                  </div>
                  
                  {/* Industry Name */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 drop-shadow-md">
                    {industry.name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}