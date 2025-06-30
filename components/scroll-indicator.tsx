"use client"

import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#what-we-do-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={scrollToNextSection}
        className="group flex flex-col items-center space-y-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium tracking-wider">EXPLORE SERVICES</span>
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </button>
    </div>
  )
}
