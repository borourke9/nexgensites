"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

interface Testimonial {
  name: string
  initials: string
  quote: string
  role: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    initials: "SC",
    quote:
      "Our website conversion increased by 180% in just 3 months. The AI chatbot alone handles 70% of our customer inquiries automatically.",
    role: "Ecom Founder",
  },
  {
    name: "Dr. Michael Rodriguez",
    initials: "MR",
    quote:
      "Patient bookings tripled after implementing their system. The automated follow-ups and lead nurturing saved us countless hours.",
    role: "Clinic Owner",
  },
  {
    name: "Jennifer Walsh",
    initials: "JW",
    quote:
      "ROI was immediate. Their paid ads strategy generated 5x more qualified leads while reducing our cost per acquisition by 40%.",
    role: "Marketing Director",
  },
  {
    name: "David Kim",
    initials: "DK",
    quote:
      "The team delivered exactly what they promised. Our revenue grew 220% in 6 months with their complete growth system.",
    role: "SaaS Founder",
  },
  {
    name: "Lisa Thompson",
    initials: "LT",
    quote:
      "Finally, a partner that understands our business. The ongoing optimization keeps improving our results month after month.",
    role: "Agency Owner",
  },
  {
    name: "Robert Martinez",
    initials: "RM",
    quote:
      "Their AI automation handles everything from lead qualification to appointment booking. It's like having a full sales team working 24/7.",
    role: "Real Estate Broker",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
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

  // Orange-red warm color scheme for testimonials
  const avatarColors = [
    "bg-gradient-to-br from-orange-500 to-red-400",
    "bg-gradient-to-br from-red-500 to-pink-400",
    "bg-gradient-to-br from-amber-500 to-orange-400",
    "bg-gradient-to-br from-rose-500 to-red-400",
    "bg-gradient-to-br from-orange-600 to-amber-400",
    "bg-gradient-to-br from-red-600 to-rose-400",
  ]

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer flex-shrink-0 w-full max-w-sm
        transition-all duration-700 ease-out transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        hover:scale-105
      `}
    >
      {/* Soft glow behind card */}
      <div className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-orange-300/40 via-red-200/30 to-amber-200/40" />

      {/* Glassmorphism card */}
      <div className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 hover:bg-white/90 hover:border-white/60 transition-all duration-300 h-full">
        {/* Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm font-normal">
          "{testimonial.quote}"
        </blockquote>

        {/* Client info */}
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm
              ${avatarColors[index % avatarColors.length]}
              shadow-lg
            `}
          >
            {testimonial.initials}
          </div>

          {/* Name and role */}
          <div>
            <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
            <div className="text-xs text-gray-500 font-medium">{testimonial.role}</div>
          </div>
        </div>

        {/* Decorative quote mark */}
        <div className="absolute top-4 right-4 text-6xl text-orange-200 font-serif leading-none opacity-20">"</div>
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
          bg-gradient-to-r from-gray-900 via-orange-600 to-red-500 bg-clip-text text-transparent
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
        `}
      >
        What Our Clients Say
      </h2>
      <p
        className={`
          text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal
          transition-all duration-1000 ease-out transform delay-300
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        Real results from real businesses. See how our growth systems have transformed companies across industries.
      </p>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 relative overflow-hidden">
      {/* Orange-red background glow effects */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-orange-400 via-red-300 to-amber-200 rounded-full blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-br from-red-400 via-orange-300 to-rose-200 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-300 via-orange-200 to-red-200 rounded-full blur-3xl opacity-8" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <AnimatedTitle />

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom section with trust indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-sm font-medium text-gray-500 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 from 200+ NexGen clients</span>
          </div>

          <div className="mt-8">
            <p className="text-gray-500 mb-6 font-normal">Join the next generation of successful businesses</p>
            <button className="bg-gradient-to-r from-orange-500 to-red-400 text-white font-semibold py-4 px-8 rounded-full hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/20">
              Start Your NexGen Journey
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
