"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function TrustSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const clientLogos = [
    {
      name: "Northside Electric",
      logo: "/placeholder-logo.svg",
      url: "#"
    },
    {
      name: "Serenity Spa",
      logo: "/placeholder-logo.svg", 
      url: "#"
    },
    {
      name: "Happy Trails RV",
      logo: "/placeholder-logo.svg",
      url: "#"
    },
    {
      name: "Harbor View Med Spa",
      logo: "/placeholder-logo.svg",
      url: "#"
    },
    {
      name: "Local Business",
      logo: "/placeholder-logo.svg",
      url: "#"
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
    <section className="py-20 bg-boutique-section-animated relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Client Logos Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h3 className="text-sm font-medium text-stone-600 mb-8 tracking-wider">
            TRUSTED BY BUSINESSES NATIONWIDE
          </h3>
          
          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-8">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group transition-all duration-300 ease-out hover:scale-105"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-20 h-12 md:w-24 md:h-14 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="mt-8">
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