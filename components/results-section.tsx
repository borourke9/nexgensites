"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, DollarSign, Clock } from "lucide-react"

interface StatCard {
  icon: React.ComponentType<{ className?: string }>
  stat: string
  label: string
  color: string
  glowColor: string
}

const stats: StatCard[] = [
  {
    icon: TrendingUp,
    stat: "+127%",
    label: "Website Conversion",
    color: "text-emerald-600",
    glowColor: "shadow-emerald-500/20 hover:shadow-emerald-500/40",
  },
  {
    icon: Users,
    stat: "+89%",
    label: "Lead Generation",
    color: "text-teal-600",
    glowColor: "shadow-teal-500/20 hover:shadow-teal-500/40",
  },
  {
    icon: DollarSign,
    stat: "+156%",
    label: "Revenue Growth",
    color: "text-green-600",
    glowColor: "shadow-green-500/20 hover:shadow-green-500/40",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "AI Booking Enabled",
    color: "text-cyan-600",
    glowColor: "shadow-cyan-500/20 hover:shadow-cyan-500/40",
  },
]

function StatCard({ stat, index }: { stat: StatCard; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150) // Stagger animation
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const Icon = stat.icon

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
      {/* Soft glow behind card */}
      <div className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br from-emerald-300/30 via-teal-200/20 to-green-200/30" />

      {/* Glassmorphism card */}
      <div
        className={`
          relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-8 
          shadow-xl ${stat.glowColor} transition-all duration-300
          hover:bg-white/90 hover:border-white/60
          group-hover:border-2
        `}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-300 border border-gray-200/50">
            <Icon className={`w-8 h-8 ${stat.color}`} />
          </div>

          {/* Stat Number */}
          <div className={`text-4xl md:text-5xl font-bold ${stat.color} tracking-tight`}>{stat.stat}</div>

          {/* Label */}
          <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
        </div>

        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div
            className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${stat.color.replace("text-", "from-").replace("-600", "-400")} ${stat.color.replace("text-", "to-").replace("-600", "-600")} bg-clip-border`}
            style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "xor" }}
          />
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
          bg-gradient-to-r from-gray-900 via-emerald-600 to-teal-500 bg-clip-text text-transparent
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
        `}
      >
        Results That Speak For Themselves
      </h2>
      <p
        className={`
          text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal
          transition-all duration-1000 ease-out transform delay-300
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        Our proven growth systems deliver measurable results that transform businesses and drive real ROI.
      </p>
    </div>
  )
}

export default function ResultsSection() {
  return (
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 relative overflow-hidden">
      {/* Green-teal background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400 via-teal-300 to-green-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-teal-400 via-emerald-300 to-cyan-200 rounded-full blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-300 via-emerald-200 to-teal-200 rounded-full blur-3xl opacity-10" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <AnimatedTitle />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live results from our current clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
