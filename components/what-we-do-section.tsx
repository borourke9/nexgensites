"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Globe, Bot, Target, Search, BarChart3, Mic } from "lucide-react"

interface ServiceCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  comingSoon?: boolean
}

const services: ServiceCard[] = [
  {
    icon: Globe,
    title: "Website Design",
    description:
      "High-converting websites that turn visitors into customers with modern design and seamless user experience.",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "24/7 intelligent customer support that qualifies leads and answers questions automatically.",
  },
  {
    icon: Target,
    title: "Paid Ads",
    description: "Strategic ad campaigns across Google, Facebook, and LinkedIn that maximize your ROI and reach.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Dominate search results with our proven SEO strategies that drive organic traffic and leads.",
  },
  {
    icon: BarChart3,
    title: "Lead Tracking",
    description: "Advanced analytics and CRM integration to track, nurture, and convert every lead effectively.",
  },
  {
    icon: Mic,
    title: "Voice Agent",
    description: "AI-powered phone agents that handle calls, book appointments, and qualify prospects.",
    comingSoon: true,
  },
]

function ServiceCard({ service, index }: { service: ServiceCard; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 100) // Stagger animation delay-100 to delay-500
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const Icon = service.icon

  // Blue-purple color scheme for services
  const glowColors = [
    "bg-blue-400/30",
    "bg-indigo-300/25",
    "bg-purple-200/30",
    "bg-blue-300/25",
    "bg-indigo-400/30",
    "bg-purple-300/25",
  ]

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer
        transition-all duration-700 ease-out transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        hover:scale-105
      `}
    >
      {/* Circular blurred glow behind card */}
      <div
        className={`
          absolute inset-0 -z-10 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500
          ${glowColors[index % glowColors.length]}
        `}
        style={{
          transform: "scale(0.8)",
        }}
      />

      {/* Glassmorphism card for light theme */}
      <div className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl shadow-blue-500/10 hover:bg-white/90 hover:border-white/60 hover:shadow-blue-500/20 transition-all duration-300">
        {service.comingSoon && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-indigo-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Coming Soon
          </div>
        )}

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-400/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-indigo-400/30 transition-all duration-300 backdrop-blur-sm border border-white/20">
            <Icon className="w-8 h-8 text-gray-800" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{service.title}</h3>

          <p className="text-gray-600 leading-relaxed text-sm font-normal">{service.description}</p>
        </div>
      </div>
    </div>
  )
}

function AnimatedTitle() {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={titleRef} className="text-center mb-16">
      <h2
        className={`
          text-4xl md:text-6xl font-semibold tracking-tight mb-6 
          bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-500 bg-clip-text text-transparent
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
          animate-gradient-x bg-[length:200%_200%]
        `}
        style={{
          backgroundImage: "linear-gradient(-45deg, #111827, #2563eb, #6366f1, #8b5cf6, #111827)",
          backgroundSize: "400% 400%",
          animation: isVisible ? "gradient 8s ease infinite" : "none",
        }}
      >
        What We Do
      </h2>
      <p
        className={`
          text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal
          transition-all duration-1000 ease-out transform delay-300
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        We build complete growth systems that work together to scale your business. From websites to AI automation, we
        handle the tech so you can focus on what matters.
      </p>
    </div>
  )
}

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do-section" className="min-h-screen bg-[#f8f8f8] py-20 px-6 relative overflow-hidden">
      {/* Blue-purple glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-300 via-blue-400 to-purple-300 rounded-full blur-3xl opacity-25 animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-200 via-blue-300 to-indigo-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-20 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-200 rounded-full blur-2xl opacity-25" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <AnimatedTitle />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6 font-normal">Ready to transform your business with our growth systems?</p>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-400 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-600 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20 backdrop-blur-sm border border-white/20">
            Get Started Today
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  )
}
