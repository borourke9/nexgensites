"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Phone, Wrench, TrendingUp, ArrowRight } from "lucide-react"
import SectionHeading from "./section-heading"

interface Step {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  deliverables: string
  number: string
}

const steps: Step[] = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We analyze your business and create a custom strategy tailored to your goals.",
    deliverables: "Strategy roadmap, competitive analysis, growth opportunities",
    number: "01",
  },
  {
    icon: Wrench,
    title: "System Build",
    description: "Our team builds your complete growth system with cutting-edge technology.",
    deliverables: "Website, AI tools, automation, tracking setup",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization", 
    description: "We continuously monitor and scale your systems to maximize performance.",
    deliverables: "Monthly reports, A/B testing, performance optimization",
    number: "03",
  },
]

function TimelineStep({ step, index }: { step: Step; index: number }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const Icon = step.icon

  const variants: Variants | undefined = prefersReducedMotion ? undefined : {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <motion.div
      className="flex flex-col items-center relative flex-1"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Step Card */}
      <div className="bg-white/60 backdrop-blur-sm border border-stone-200/30 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 w-full max-w-sm mb-8 min-h-[200px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <Icon className="w-6 h-6 text-rose-700 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
              <div className="absolute -inset-2 bg-rose-200/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="text-2xl font-light text-stone-400">{step.number}</div>
          </div>
          
          <h3 className="text-lg font-medium text-stone-900 mb-2 tracking-wide">
            {step.title}
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed mb-3">
            {step.description}
          </p>
        </div>
        
        <div className="pt-2 border-t border-stone-200/50">
          <p className="text-xs text-stone-500 leading-relaxed">
            <span className="font-medium">Deliverables:</span> {step.deliverables}
          </p>
        </div>
      </div>

      {/* Timeline Marker */}
      <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-rose-100 to-rose-200 border-2 border-white rounded-full flex items-center justify-center shadow-lg">
        <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
        <div className="absolute -inset-1 bg-rose-300/30 rounded-full animate-pulse"></div>
      </div>
    </motion.div>
  )
}

function TimelineConnector() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const variants: Variants | undefined = prefersReducedMotion ? undefined : {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-300/50 -translate-y-1/2 z-0">
      <motion.div
        className="h-full bg-gradient-to-r from-rose-300 to-rose-400 origin-left"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  )
}



export default function HowItWorksSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const containerVariants: Variants | undefined = prefersReducedMotion ? undefined : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants | undefined = prefersReducedMotion ? undefined : {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Section Header */}
      <SectionHeading 
        title="How it"
        accentText="works"
        subtitle="Our proven 3-step process transforms your business with systematic growth solutions that deliver results."
        showUnderline={true}
      />

      <motion.div
        className="mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-x-8">
            <TimelineConnector />
            {steps.map((step, index) => (
              <TimelineStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              variants={itemVariants}
            >
              <div className="flex items-start gap-6">
                {/* Vertical connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-rose-300 to-rose-400"></div>
                )}
                
                {/* Step marker */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-rose-700" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border border-stone-300 flex items-center justify-center">
                    <span className="text-xs font-medium text-stone-700">{step.number}</span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <div className="bg-white/60 backdrop-blur-sm border border-stone-200/30 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
                    <h3 className="text-lg font-medium text-stone-900 mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="pt-2 border-t border-stone-200/50">
                      <p className="text-xs text-stone-500 leading-relaxed">
                        <span className="font-medium">Deliverables:</span> {step.deliverables}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Testimonial */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <blockquote className="text-stone-600 italic text-lg max-w-2xl mx-auto mb-2">
            "The process was seamless from start to finish. We saw results within the first month and our revenue has grown 180% since launch."
          </blockquote>
          <cite className="text-sm text-stone-500 font-medium">— Sarah M., E-commerce Founder</cite>
        </motion.div>

        {/* Reassurance Line */}
        <motion.div 
          className="text-center mt-8 mb-12"
          variants={itemVariants}
        >
          <p className="text-sm text-stone-500">No lock-in. 30‑day guarantee.</p>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center space-y-4 md:space-y-0 md:flex md:items-center md:justify-center md:gap-6"
          variants={itemVariants}
        >
          <button className="bg-stone-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2">
            Schedule Discovery Call
          </button>
          <a 
            href="#" 
            className="inline-flex items-center text-stone-600 hover:text-stone-900 font-medium transition-colors duration-300 group"
          >
            See sample plan
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
