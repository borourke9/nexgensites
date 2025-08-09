"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxWordmarkProps {
  text: string
  from?: number
  to?: number
  opacity?: number
  stroke?: boolean
  className?: string
}

export default function ParallaxWordmark({
  text,
  from = -80,
  to = 120,
  opacity = 0.12,
  stroke = true,
  className = ""
}: ParallaxWordmarkProps) {
  const { scrollY } = useScroll()
  
  // Create parallax transform
  const y = useTransform(scrollY, [0, 1000], [from, to])
  
  // Base styles
  const baseStyles = `
    absolute inset-0 flex items-center justify-center pointer-events-none select-none
    font-light tracking-widest text-stone-600
    ${className}
  `
  
  // Text styles based on stroke prop
  const textStyles = stroke
    ? `text-transparent stroke-stone-600/50`
    : `text-stone-600/50`

  return (
    <div className={baseStyles}>
      {/* Parallax wordmark */}
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
            md:block hidden
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
        
        {/* Mobile version - smaller and reduced opacity */}
        <h2 
          className={`
            text-[clamp(4rem,12vw,16rem)] leading-none font-light tracking-widest
            ${textStyles}
            md:hidden block
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
  )
}

// Reduced motion variant
export function ReducedMotionWordmark({
  text,
  opacity = 0.08,
  stroke = true,
  className = ""
}: Omit<ParallaxWordmarkProps, 'from' | 'to'>) {
  return (
    <div 
      className={`
        absolute inset-0 flex items-center justify-center pointer-events-none select-none
        font-light tracking-widest text-stone-600
        ${className}
      `}
    >
      <div className="relative">
        <h2 
          className={`
            text-[clamp(6rem,16vw,28rem)] leading-none font-light tracking-widest
            ${stroke ? 'text-transparent stroke-stone-600/40' : 'text-stone-600'}
            md:block hidden
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
            md:hidden block
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
  )
}