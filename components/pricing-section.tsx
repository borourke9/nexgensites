"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Star, Zap } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  setupFee: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Local SEO Starter",
    price: "$750",
    setupFee: "$500 one-time setup",
    period: "/month",
    description: "Perfect for local businesses ready to dominate their market",
    features: [
      "SEO-optimized website or tune-up",
      "Google Business Profile optimization",
      "Local SEO targeting top 3 services",
      "Review generation system",
      "Monthly reporting & analytics",
    ],
    cta: "Start Plan",
  },
  {
    name: "SEO + Google Ads",
    price: "$1,250",
    setupFee: "$500 one-time setup",
    period: "/month",
    description: "Complete digital marketing system for scaling businesses",
    features: [
      "Everything in Starter",
      "Google Ads setup & management",
      "Weekly call tracking + landing pages",
      "Monthly ad performance reports",
    ],
    popular: true,
    cta: "Scale with Ads",
  },
  {
    name: "Full Growth System",
    price: "$1,750",
    setupFee: "$750 one-time setup",
    period: "/month",
    description: "Complete automation and growth infrastructure",
    features: [
      "Website + SEO + GBP + Reviews",
      "Google Ads + Meta Ads",
      "AI chatbot for 24/7 lead capture",
      "Dedicated dashboard + weekly reports",
    ],
    cta: "Launch Full System",
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
          <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Glow effect */}
      <div
        className={`
          absolute inset-0 -z-10 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500
          ${tier.popular ? "bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200" : "bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100"}
        `}
      />

      {/* Card */}
      <div
        className={`
          relative bg-white/80 backdrop-blur-md border rounded-3xl p-8 shadow-xl transition-all duration-300 h-full
          ${
            tier.popular
              ? "border-pink-200 shadow-pink-500/20 hover:shadow-pink-500/30"
              : "border-white/40 shadow-gray-500/10 hover:shadow-gray-500/20"
          }
          hover:bg-white/90 hover:border-white/60
        `}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
          <div className="flex items-baseline justify-center mb-2">
            <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
            {tier.period && <span className="text-gray-500 ml-1">{tier.period}</span>}
          </div>
          <p className="text-sm text-gray-500 mb-4">{tier.setupFee}</p>
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
                ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-xl shadow-pink-500/25 hover:from-pink-600 hover:to-orange-500"
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
          bg-gradient-to-r from-gray-900 via-pink-600 to-orange-500 bg-clip-text text-transparent
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-transparent to-orange-50/30" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedTitle />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee and dedicated support.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
