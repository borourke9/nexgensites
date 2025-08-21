"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ClipboardList, Code, TrendingUp } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Plan",
      description: "Free growth plan tailored to your business",
      color: "rose"
    },
    {
      icon: Code,
      title: "Build",
      description: "Design, SEO, and ad setup done-for-you",
      color: "amber"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Track leads, optimize, and scale",
      color: "green"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      rose: "bg-rose-100 text-rose-600",
      amber: "bg-amber-100 text-amber-600",
      green: "bg-green-100 text-green-600"
    }
    return colors[color as keyof typeof colors] || colors.rose
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-wide text-stone-900 mb-6">
            How it works
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 text-2xl font-semibold text-stone-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(step.color)} group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                {step.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => {
              const contactSection = document.getElementById("contact-section")
              if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                })
              }
            }}
            className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-3 rounded-none border border-stone-900 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Start with a free plan
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
} 