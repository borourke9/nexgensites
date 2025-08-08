"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Code, Zap, Users, Target, Rocket, Sparkles } from "lucide-react"
import SectionHeading from "./section-heading"



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
        <div className="relative bg-white/70 backdrop-blur-sm border border-stone-200/50 rounded-xl p-4 shadow-sm">
          <Icon className="w-8 h-8 text-stone-700" />
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
    <section className="min-h-screen bg-boutique-section-alt py-24 px-6">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <SectionHeading 
          title="Who"
          accentText="we are"
          subtitle="Born from the frustration of seeing businesses struggle with fragmented digital solutions, NexGen set out to create something different."
        />

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
              <div className="inline-flex items-center space-x-2 text-sm font-medium text-rose-700 bg-rose-50 px-4 py-2 rounded-full border border-rose-200">
                <Sparkles className="w-4 h-4" />
                <span>NEXGEN FOUNDED 2020</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-light text-stone-900 leading-tight tracking-wide">
                We're growth obsessed{" "}
                <span className="font-medium text-rose-800">
                  next-gen architects
                </span>
              </h3>

              <p className="text-lg text-stone-600 leading-relaxed">
                Born from the frustration of seeing businesses struggle with fragmented digital solutions, NexGen set
                out to create something different. Our team combines deep expertise in web development, AI automation,
                and growth marketing to build next-generation systems that actually work together.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed">
                We don't just build websites or run ads in isolation. We architect complete growth ecosystems where
                every component amplifies the others—from AI-powered chatbots that qualify leads to automated nurture
                sequences that close deals while you sleep.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200">
              <div className="text-center">
                <div className="text-2xl font-light text-stone-900">4+</div>
                <div className="text-sm text-stone-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-stone-900">500+</div>
                <div className="text-sm text-stone-600">Systems Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-stone-900">98%</div>
                <div className="text-sm text-stone-600">Client Retention</div>
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
                <div className="relative bg-white/80 backdrop-blur-sm border border-stone-200/50 rounded-2xl p-12 shadow-sm">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-center mx-auto">
                      <Brain className="w-8 h-8 text-rose-700" />
                    </div>
                    <h4 className="text-xl font-medium text-stone-900">Growth Engine</h4>
                    <p className="text-sm text-stone-600">AI-Powered Systems</p>
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
                      <stop offset="0%" stopColor="#fda4af" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fb7185" stopOpacity="0.3" />
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
