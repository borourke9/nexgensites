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
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        hover:scale-[1.02]
        ${tier.popular ? "lg:-mt-8" : ""}
      `}
    >
      {/* Popular badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-rose-50 text-rose-700 text-sm font-medium px-4 py-2 rounded-full border border-rose-200 flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`
          relative bg-white/70 backdrop-blur-sm border rounded-xl p-8 shadow-sm transition-all duration-300 h-full
          ${
            tier.popular
              ? "border-rose-200 shadow-md hover:shadow-lg"
              : "border-stone-200/50 shadow-sm hover:shadow-md"
          }
          hover:bg-white/80 hover:border-stone-300/50
        `}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-medium text-stone-900 mb-2">{tier.name}</h3>
          <div className="flex items-baseline justify-center mb-2">
            <span className="text-4xl font-light text-stone-900">{tier.price}</span>
            {tier.period && <span className="text-stone-500 ml-1">{tier.period}</span>}
          </div>
          <p className="text-sm text-stone-500 mb-4">{tier.setupFee}</p>
          <p className="text-stone-600 text-sm">{tier.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {tier.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-rose-50 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-rose-600" />
              </div>
              <span className="text-stone-700 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className={`
            w-full py-3 px-6 rounded-none font-medium transition-all duration-300 group
            ${
              tier.popular
                ? "border border-rose-300 text-rose-700 hover:bg-rose-50"
                : "border border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900"
            }
          `}
        >
          {tier.cta}
          <div className="h-0.5 bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
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
    <div ref={titleRef} className="text-center mb-20">
      <h2
        className={`
          text-3xl md:text-4xl font-light tracking-wide text-stone-900 mb-6
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        tailored solutions, transparent value
      </h2>
      <p
        className={`
          text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal
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
    <section className="py-24 bg-boutique-section-alt relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedTitle />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-20 text-center">
          <p className="text-stone-600 mb-8">
            All plans include a 30-day money-back guarantee and dedicated support.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-stone-500">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-rose-600" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-rose-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-rose-600" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
