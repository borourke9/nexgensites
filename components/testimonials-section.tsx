"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Heart } from "lucide-react"
import SectionHeading from "./section-heading"

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

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer flex-shrink-0 w-full max-w-sm
        transition-all duration-700 ease-out transform
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        hover:scale-[1.02]
      `}
    >
      {/* Soft card with minimal elevation */}
      <div className="relative bg-white/70 backdrop-blur-sm border border-stone-200/50 rounded-xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 hover:border-stone-300/50 transition-all duration-300 h-full">
        {/* Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-stone-700 leading-relaxed mb-6 text-sm font-normal italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Client info */}
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-12 h-12 bg-rose-100 border border-rose-200 rounded-full flex items-center justify-center text-rose-700 font-medium text-sm">
            {testimonial.initials}
          </div>

          {/* Name and role */}
          <div>
            <div className="font-medium text-stone-900 text-sm">{testimonial.name}</div>
            <div className="text-xs text-stone-500 font-normal">{testimonial.role}</div>
          </div>
        </div>

        {/* Decorative quote mark */}
        <div className="absolute top-4 right-4 text-4xl text-rose-200 font-serif leading-none opacity-30">"</div>
      </div>
    </div>
  )
}



export default function TestimonialsSection() {
  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Enhanced Section Header */}
        <SectionHeading 
          title="What our clients"
          accentText="say"
          subtitle="Real results from real businesses. See how our growth systems have transformed companies across industries."
        />

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
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 text-sm font-medium text-stone-500 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-stone-200/50">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9/5 from 200+ NexGen clients</span>
          </div>

          <div className="mt-12">
            <p className="text-stone-500 mb-8 font-normal">Join the next generation of successful businesses</p>
            <button className="border border-stone-300 text-stone-700 font-medium py-3 px-8 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group">
              Start Your NexGen Journey
              <div className="h-0.5 bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
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
    </div>
  )
}
