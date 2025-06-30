"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6 relative overflow-hidden">
      {/* Radial gradient background - similar to hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400 via-pink-300 to-yellow-300 rounded-full blur-3xl opacity-25 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-200 rounded-full blur-3xl opacity-20" />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2
            className={`
              text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight
              transition-all duration-1000 ease-out transform
              ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}
            `}
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h2>

          <p
            className={`
              text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12
              transition-all duration-1000 ease-out transform delay-300
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            Join hundreds of businesses that have scaled with our proven growth systems. Get your free strategy session
            today.
          </p>

          {/* Large CTA Button */}
          <div
            className={`
              mb-16 transition-all duration-1000 ease-out transform delay-500
              ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
            `}
          >
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold text-xl px-12 py-6 rounded-full hover:from-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-pink-500/30 group">
              Build My System
              <ArrowRight className="w-6 h-6 ml-3 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact form */}
          <div
            className={`
              transition-all duration-1000 ease-out transform delay-700
              ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}
            `}
          >
            <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl p-8 shadow-2xl shadow-pink-500/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Strategy Session</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="What challenges are you facing? What are your growth goals?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/25"
                >
                  Get My Free Strategy Session
                </button>
              </form>
            </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prefer to talk directly?</h3>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Call us directly</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email us</div>
                  <div className="text-gray-600">hello@nexgen.agency</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live chat</div>
                  <div className="text-gray-600">Available 9 AM - 6 PM EST</div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What to expect in your strategy session:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete analysis of your current digital presence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom growth strategy tailored to your business</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
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
