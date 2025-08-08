"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MeetFounderSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-boutique-section py-24 px-6"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Portrait */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Portrait Image */}
              <div className="relative bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-700 ease-out hover:scale-[1.02]">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=1000&fit=crop&crop=face"
                    alt="Bryce O'Rourke - Founder of Nexgen"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-rose-50 border border-rose-200 rounded-full flex items-center justify-center">
                <span className="text-rose-700 text-sm font-medium">✨</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Badge */}
            <div className="inline-block bg-rose-50 text-rose-700 text-xs font-medium px-4 py-2 rounded-full border border-rose-200">
              FOUNDER STORY
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-light tracking-wide text-stone-900">
              Hi, I'm Bryce
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-stone-600 font-medium">
              Founder of Nexgen
            </p>

            {/* Body Text */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-stone-700">
                I started Nexgen to help local businesses grow without the tech headaches. From high-converting websites to AI receptionists that never miss a call, I bring big-business tools to small-business owners — so you can focus on what you do best.
              </p>
              
              <p className="text-lg leading-relaxed text-stone-700">
                Every project we take on becomes part of our story. We're not just building websites; we're building relationships that last and businesses that thrive.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6">
              <p className="text-2xl font-light text-stone-900" style={{ fontFamily: 'Georgia, serif' }}>
                Bryce O'Rourke
              </p>
            </div>

            {/* Location Badge */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 text-sm text-stone-600">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span>Based in Michigan</span>
              </div>
              <span className="text-stone-400">•</span>
              <span className="text-sm text-stone-600">Working with clients nationwide</span>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
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
                className="group bg-stone-900 hover:bg-stone-800 text-white font-medium px-8 py-3 rounded-none border border-stone-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 