"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Star, Zap } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,997",
    period: "/month",
    description: "Perfect for small businesses ready to automate and grow",
    features: [
      "Professional website with conversion optimization",
      "AI chatbot for lead qualification",
      "Basic email automation sequences",
    ],
    cta: "Start Growing",
  },
  {
    name: "Growth",
    price: "$4,997",
    period: "/month",
    description: "Complete growth system for scaling businesses",
    features: [
      "Everything in Starter plus advanced features",
      "Multi-channel paid advertising management",
      "Advanced AI automations and integrations",
    ],
    popular: true,
    cta: "Scale Your Business",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom-built growth infrastructure",
      "Dedicated account management team",
      "White-label solutions and API access",
    ],
    cta: "Contact Sales",
  },
]

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 200) // Stagger animation
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
        relative group
        transition-all duration-700 ease-out transform
        ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
        hover:scale-105
        ${tier.popular ? "lg:-mt-8" : ""}
      `}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-violet-500 to-purple-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Glow effect */}
      <div
        className={`
          absolute inset-0 -z-10 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500
          ${tier.popular ? "bg-gradient-to-br from-violet-400 via-purple-300 to-fuchsia-200" : "bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100"}
        `}
      />

      {/* Card */}
      <div
        className={`
          relative bg-white/80 backdrop-blur-md border rounded-3xl p-8 shadow-xl transition-all duration-300 h-full
          ${
            tier.popular
              ? "border-violet-200 shadow-violet-500/20 hover:shadow-violet-500/30"
              : "border-white/40 shadow-gray-500/10 hover:shadow-gray-500/20"
          }
          hover:bg-white/90 hover:border-white/60
        `}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
            {tier.period && <span className="text-gray-500 ml-1">{tier.period}</span>}
          </div>
          <p className="text-gray-600 text-sm">{tier.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {tier.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className={`
            w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
            ${
              tier.popular
                ? "bg-gradient-to-r from-violet-500 to-purple-400 text-white shadow-xl shadow-violet-500/25 hover:from-violet-600 hover:to-purple-500"
                : "bg-gray-900 text-white hover:bg-gray-800 shadow-xl shadow-gray-500/25"
            }
          `}
        >
          {tier.cta}
        </button>
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
          bg-gradient-to-r from-gray-900 via-violet-600 to-purple-500 bg-clip-text text-transparent
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
        `}
      >
        Tailored Solutions, Transparent Value
      </h2>
      <p
        className={`
          text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal
          transition-all duration-1000 ease-out transform delay-300
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        Choose the perfect growth system for your business. All plans include ongoing optimization and support.
      </p>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 relative overflow-hidden">
      {/* Purple-violet background glow effects */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-violet-400 via-purple-300 to-fuchsia-200 rounded-full blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-br from-purple-400 via-violet-300 to-pink-200 rounded-full blur-3xl opacity-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <AnimatedTitle />

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 mb-6">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>All plans include 30-day money-back guarantee</span>
          </div>
          <p className="text-gray-600 text-sm">
            Need something custom?{" "}
            <span className="text-violet-600 font-medium cursor-pointer hover:underline">Contact our team</span> for a
            tailored solution.
          </p>
        </div>
      </div>
    </section>
  )
}
