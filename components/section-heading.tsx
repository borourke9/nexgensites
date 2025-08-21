"use client"

import React, { useEffect, useRef, useState } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  accentText?: string
  className?: string
  showUnderline?: boolean
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  accentText, 
  className = "",
  showUnderline = true 
}: SectionHeadingProps) {
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
    <div ref={titleRef} className={`text-center mb-12 sm:mb-16 lg:mb-20 ${className}`}>
      <h2
        className={`
          section-heading section-heading-xl mb-6 sm:mb-8 lg:mb-10
          transition-all duration-1000 ease-out transform
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {title}
        {accentText && (
          <span className="block sm:inline font-medium text-[#B00C2F] ml-0 sm:ml-2">
            {accentText}
          </span>
        )}
      </h2>
      
      {showUnderline && (
        <div
          className={`
            w-20 sm:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-[#B00C2F] via-rose-400 to-amber-300 
            mx-auto mb-6 sm:mb-8 lg:mb-10
            transition-all duration-1000 ease-out transform delay-200
            ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
          `}
        />
      )}
      
      {subtitle && (
        <p
          className={`
            section-subheading mx-auto
            transition-all duration-1000 ease-out transform delay-300
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}