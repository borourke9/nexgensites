"use client"

import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface CentralizedParallaxProps {
  text: string
  from?: number
  to?: number
  opacity?: number
  stroke?: boolean
}

export default function CentralizedParallax({
  text,
  from = -80,
  to = 120,
  opacity = 0.12,
  stroke = false
}: CentralizedParallaxProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { scrollY } = useScroll()
  
  // Create parallax transform
  const y = useTransform(scrollY, [0, 1000], [from, to])

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Text styles based on stroke prop
  const textStyles = stroke
    ? `text-transparent stroke-stone-600/50`
    : `text-stone-600/50`

  if (prefersReducedMotion) {
    // Static version for reduced motion
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute inset-0 flex items-center justify-center font-light tracking-widest text-stone-600">
          <div className="relative">
            <h2 
              className={`
                text-[clamp(6rem,16vw,28rem)] leading-none font-light tracking-widest
                ${stroke ? 'text-transparent stroke-stone-600/40' : 'text-stone-600'}
                hidden md:block
              `}
              style={{
                opacity: opacity,
                WebkitTextStroke: stroke ? '1px currentColor' : 'none'
              }}
              aria-hidden="true"
            >
              {text}
            </h2>
            
            <h2 
              className={`
                text-[clamp(4rem,12vw,16rem)] leading-none font-light tracking-widest
                ${stroke ? 'text-transparent stroke-stone-600/40' : 'text-stone-600'}
                block md:hidden
              `}
              style={{
                opacity: opacity * 0.6,
                WebkitTextStroke: stroke ? '1px currentColor' : 'none'
              }}
              aria-hidden="true"
            >
              {text}
            </h2>
          </div>
        </div>
      </div>
    )
  }

  // Animated version
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none">
      <div className="absolute inset-0 flex items-center justify-center font-light tracking-widest text-stone-600">
        <motion.div
          style={{ 
            y,
            willChange: 'transform'
          }}
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 
            className={`
              text-[clamp(6rem,16vw,28rem)] leading-none font-light tracking-widest
              ${textStyles}
              hidden md:block
            `}
            style={{
              opacity: opacity,
              WebkitTextStroke: stroke ? '1px currentColor' : 'none',
              textShadow: stroke ? 'none' : '0 0 40px rgba(0,0,0,0.1)'
            }}
            aria-hidden="true"
          >
            {text}
          </h2>
          
          <h2 
            className={`
              text-[clamp(4rem,12vw,16rem)] leading-none font-light tracking-widest
              ${textStyles}
              block md:hidden
            `}
            style={{
              opacity: opacity * 0.6,
              WebkitTextStroke: stroke ? '1px currentColor' : 'none',
              textShadow: stroke ? 'none' : '0 0 20px rgba(0,0,0,0.1)'
            }}
            aria-hidden="true"
          >
            {text}
          </h2>
        </motion.div>
      </div>
    </div>
  )
}