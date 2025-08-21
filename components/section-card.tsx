import React from "react"
import { cn } from "@/lib/utils"

interface SectionCardProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  withFade?: boolean
}

export default function SectionCard({ 
  children, 
  className, 
  as: Component = "section",
  withFade = true
}: SectionCardProps) {
  const fadeStyles = withFade ? {
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(0,0,0,.94) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,.94) 100%)",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,.94) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,.94) 100%)"
  } : undefined

  return (
    <Component
      className={cn(
        "relative z-10 mx-auto max-w-[1360px] rounded-[var(--radius-xl)] overflow-hidden",
        "border border-black/8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
        "px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24",
        "bg-white/90 backdrop-blur-sm",
        "isolate", // creates a new stacking context
        className
      )}
      style={fadeStyles}
    >
      {children}
    </Component>
  )
}