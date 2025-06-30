"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Code, Zap, Users, Target, Rocket } from "lucide-react"

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
          bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-500 bg-clip-text text-transparent
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
        `}
      >
        Who We Are
      </h2>
    </div>
  )
}

function FloatingIcon({ icon: Icon, className, delay }: { icon: any; className: string; delay: number }) {
  return (
    <div
      className={`absolute ${className} transition-all duration-1000 ease-out transform`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-400/20 rounded-2xl blur-xl"></div>
        <div className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-xl">
          <Icon className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
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
      {/* Blue-cyan floating gradient shapes */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-cyan-400 via-blue-300 to-sky-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-br from-blue-400 via-cyan-300 to-teal-200 rounded-full blur-3xl opacity-15 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-sky-300 via-cyan-200 to-blue-200 rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Animated Section Header */}
        <AnimatedTitle />

        {/* Two-column layout */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div
            className={`
              space-y-8 transition-all duration-1000 ease-out transform
              ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}
            `}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full">
                <Rocket className="w-4 h-4" />
                <span>NEXGEN FOUNDED 2020</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                We're growth obsessed{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">
                  next-gen architects
                </span>
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Born from the frustration of seeing businesses struggle with fragmented digital solutions, NexGen set
                out to create something different. Our team combines deep expertise in web development, AI automation,
                and growth marketing to build next-generation systems that actually work together.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just build websites or run ads in isolation. We architect complete growth ecosystems where
                every component amplifies the others—from AI-powered chatbots that qualify leads to automated nurture
                sequences that close deals while you sleep.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Systems Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Right side - Animated illustration */}
          <div
            className={`
              relative transition-all duration-1000 ease-out transform
              ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}
            `}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Central hub */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-md border border-white/50 rounded-3xl p-12 shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Growth Engine</h4>
                    <p className="text-sm text-gray-600">AI-Powered Systems</p>
                  </div>
                </div>
              </div>

              {/* Floating icons around the central hub */}
              <FloatingIcon icon={Code} className="top-0 left-0" delay={0} />
              <FloatingIcon icon={Zap} className="top-0 right-0" delay={1} />
              <FloatingIcon icon={Users} className="bottom-0 left-0" delay={2} />
              <FloatingIcon icon={Target} className="bottom-0 right-0" delay={3} />

              {/* Connecting lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 100 L200 200 L300 100 M100 300 L200 200 L300 300"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
