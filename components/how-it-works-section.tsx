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
        {/* Glowing dot */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-violet-400 rounded-full blur-lg opacity-60 animate-pulse"></div>
          <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full flex items-center justify-center shadow-xl">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Step number */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-500 flex items-center justify-center">
          <span className="text-xs font-bold text-purple-600">{step.number}</span>
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
        <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{step.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
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
          h-0.5 w-full bg-gradient-to-r from-purple-400 via-indigo-300 to-violet-300 relative
          transition-all duration-1000 ease-out transform origin-left
          ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
        `}
        style={{ transitionDelay: `${index * 200 + 300}ms` }}
      >
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-300 to-violet-300 blur-sm opacity-60"></div>

        {/* Moving dot animation */}
        <div
          className={`
            absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full border-2 border-purple-500
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
    <div ref={titleRef} className="text-center mb-16">
      <h2
        className={`
          text-4xl md:text-6xl font-semibold tracking-tight mb-6 
          bg-gradient-to-r from-gray-900 via-purple-600 to-indigo-500 bg-clip-text text-transparent
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
        `}
      >
        How It Works
      </h2>
      <p
        className={`
          text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal
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
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 relative overflow-hidden">
      {/* Purple-indigo background glow effects */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-br from-purple-400 via-indigo-300 to-violet-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-gradient-to-br from-indigo-400 via-purple-300 to-violet-300 rounded-full blur-3xl opacity-15 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-400 to-violet-400 rounded-full blur-lg opacity-60 animate-pulse"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full flex items-center justify-center shadow-xl">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600">{step.number}</span>
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
                    <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-xl shadow-purple-500/10">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="ml-6 mt-4 mb-4">
                    <div
                      className={`
                        w-0.5 h-8 bg-gradient-to-b from-purple-400 via-indigo-300 to-violet-300 relative
                        transition-all duration-1000 ease-out transform origin-top
                        ${isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
                      `}
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-indigo-300 to-violet-300 blur-sm opacity-60"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className={`
              transition-all duration-1000 ease-out transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-gray-500 mb-6 font-normal">Ready to start your growth journey?</p>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-semibold py-4 px-8 rounded-full hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/20">
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
