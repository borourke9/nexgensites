"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Phone, Wrench, TrendingUp } from "lucide-react"

interface Step {
  icon: any
  title: string
  description: string
  number: string
}

const steps: Step[] = [
  {
    icon: Phone,
    title: "Discovery Call",
    description:
      "We analyze your business, identify growth opportunities, and create a custom strategy tailored to your goals.",
    number: "01",
  },
  {
    icon: Wrench,
    title: "System Build",
    description:
      "Our team builds and implements your complete growth system with cutting-edge technology and proven frameworks.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization",
    description: "We continuously monitor, optimize, and scale your systems to maximize performance and ROI.",
    number: "03",
  },
]

function StepNode({ step, index, isVisible }: { step: Step; index: number; isVisible: boolean }) {
  const Icon = step.icon

  return (
    <div className="flex flex-col items-center relative">
      {/* Timeline Node */}
      <div
        className={`
          relative z-10 transition-all duration-700 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
        `}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Soft node */}
        <div className="relative">
          <div className="w-16 h-16 bg-rose-50 border-2 border-rose-200 rounded-full flex items-center justify-center shadow-sm">
            <Icon className="w-8 h-8 text-rose-700" />
          </div>
        </div>

        {/* Step number */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border border-stone-300 flex items-center justify-center">
          <span className="text-xs font-medium text-stone-700">{step.number}</span>
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`
          mt-8 max-w-sm transition-all duration-700 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
        `}
        style={{ transitionDelay: `${index * 200 + 100}ms` }}
      >
        <div className="bg-white/70 backdrop-blur-sm border border-stone-200/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-medium text-stone-900 mb-3 tracking-wide">{step.title}</h3>
          <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  )
}

function ConnectingLine({ isVisible, index }: { isVisible: boolean; index: number }) {
  return (
    <div className="flex items-center justify-center flex-1 px-4">
      <div
        className={`
          h-0.5 w-full bg-stone-300 relative
          transition-all duration-1000 ease-out transform origin-left
          ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
        `}
        style={{ transitionDelay: `${index * 200 + 300}ms` }}
      >
        {/* Moving dot animation */}
        <div
          className={`
            absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-rose-500 rounded-full
            transition-all duration-2000 ease-out
            ${isVisible ? "left-full" : "left-0"}
          `}
          style={{ transitionDelay: `${index * 200 + 500}ms` }}
        ></div>
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
        how it works
      </h2>
      <p
        className={`
          text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal
          transition-all duration-1000 ease-out transform delay-300
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        Our proven 3-step process transforms your business with systematic growth solutions that deliver results.
      </p>
    </div>
  )
}

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="min-h-screen bg-boutique-section-alt py-24 px-6">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <AnimatedTitle />

        {/* Timeline */}
        <div ref={sectionRef} className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-start justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <StepNode step={step} index={index} isVisible={isVisible} />
                {index < steps.length - 1 && <ConnectingLine isVisible={isVisible} index={index} />}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex items-start space-x-6">
                  <div
                    className={`
                      flex-shrink-0 transition-all duration-700 ease-out transform
                      ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
                    `}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Mobile node */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-rose-50 border-2 border-rose-200 rounded-full flex items-center justify-center shadow-sm">
                        <step.icon className="w-6 h-6 text-rose-700" />
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border border-stone-300 flex items-center justify-center">
                      <span className="text-xs font-medium text-stone-700">{step.number}</span>
                    </div>
                  </div>

                  {/* Mobile content */}
                  <div
                    className={`
                      flex-1 transition-all duration-700 ease-out transform
                      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                    `}
                    style={{ transitionDelay: `${index * 200 + 100}ms` }}
                  >
                    <div className="bg-white/70 backdrop-blur-sm border border-stone-200/50 rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-medium text-stone-900 mb-2 tracking-wide">{step.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="ml-6 mt-4 mb-4">
                    <div
                      className={`
                        w-0.5 h-8 bg-stone-300 relative
                        transition-all duration-1000 ease-out transform origin-top
                        ${isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
                      `}
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div
            className={`
              transition-all duration-1000 ease-out transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-stone-500 mb-8 font-normal">Ready to start your growth journey?</p>
            <button className="border border-stone-300 text-stone-700 font-medium py-3 px-8 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group">
              Schedule Discovery Call
              <div className="h-0.5 bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
