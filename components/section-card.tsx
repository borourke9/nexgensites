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
        "relative z-10 mx-auto max-w-[1200px] rounded-3xl overflow-hidden",
        "border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]",
        "px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-18",
        "bg-gradient-to-b from-[#FFF7F2] to-[#FBEAE4]",
        "isolate", // creates a new stacking context
        className
      )}
      style={fadeStyles}
    >
      {children}
    </Component>
  )
}