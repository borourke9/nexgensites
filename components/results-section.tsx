"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, DollarSign, Clock, Sparkles } from "lucide-react"
import SectionHeading from "./section-heading"

interface StatCard {
  icon: React.ComponentType<{ className?: string }>
  stat: string
  label: string
}

const stats: StatCard[] = [
  {
    icon: TrendingUp,
    stat: "+127%",
    label: "Website Conversion",
  },
  {
    icon: Users,
    stat: "+89%",
    label: "Lead Generation",
  },
  {
    icon: DollarSign,
    stat: "+156%",
    label: "Revenue Growth",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "AI Booking Enabled",
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
        hover:scale-[1.02]
      `}
    >
      {/* Soft card with minimal elevation */}
      <div className="relative bg-white/70 backdrop-blur-sm border border-stone-200/50 rounded-xl p-8 hover:bg-white/80 hover:border-stone-300/50 transition-all duration-300 shadow-sm hover:shadow-md">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon with soft background */}
          <div className="p-4 bg-rose-50/50 rounded-lg group-hover:bg-rose-100/50 transition-all duration-300">
            <Icon className="w-8 h-8 text-rose-700" />
          </div>

          {/* Stat Number */}
          <div className="text-3xl md:text-4xl font-light text-stone-900 tracking-wide">{stat.stat}</div>

          {/* Label */}
          <div className="text-stone-600 font-medium text-lg">{stat.label}</div>
        </div>
      </div>
    </div>
  )
}



export default function ResultsSection() {
  return (
    <section className="min-h-screen bg-boutique-section py-24 px-6">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <SectionHeading 
          title="Results that speak"
          accentText="for themselves"
          subtitle="Our proven growth systems deliver measurable results that transform businesses and drive real ROI."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-stone-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-200/50">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Live results from our current clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
