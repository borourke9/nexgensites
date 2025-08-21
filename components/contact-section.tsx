"use client"

import React, { useEffect, useRef, useState } from "react"
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react"
import StrategySessionForm from "./strategy-session-form"
import SectionHeading from "./section-heading"

export default function ContactSection() {
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
    <section className="min-h-screen bg-boutique-section py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <SectionHeading 
          title="Ready to"
          accentText="transform your business?"
          subtitle="Join hundreds of businesses that have scaled with our proven growth systems. Get your free strategy session today."
        />



        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact form */}
          <div
            className={`
              transition-all duration-1000 ease-out transform delay-700
              ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}
            `}
          >
            <StrategySessionForm />
          </div>

          {/* Right side - Contact info and benefits */}
          <div
            className={`
              space-y-8 transition-all duration-1000 ease-out transform delay-900
              ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}
            `}
          >
            {/* Contact methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-stone-900 mb-6">Prefer to talk directly?</h3>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-stone-900 rounded-xl">
                <div className="w-12 h-12 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-rose-700" />
                </div>
                <div>
                  <div className="font-medium text-stone-900">Call us directly</div>
                  <div className="text-stone-600">(248) 404-5768</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-stone-900 rounded-xl">
                <div className="w-12 h-12 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-rose-700" />
                </div>
                <div>
                  <div className="font-medium text-stone-900">Email us</div>
                  <div className="text-stone-600">bryce@nexgensites.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-stone-900 rounded-xl">
                <div className="w-12 h-12 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-rose-700" />
                </div>
                <div>
                  <div className="font-medium text-stone-900">Live chat</div>
                  <div className="text-stone-600">Available 9 AM - 6 PM EST</div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-white/60 backdrop-blur-sm border border-stone-900 rounded-xl p-6">
              <h4 className="text-lg font-medium text-stone-900 mb-4">What to expect in your strategy session:</h4>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete analysis of your current digital presence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom growth strategy tailored to your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clear roadmap with projected ROI and timelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
