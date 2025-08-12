"use client"

import ClientStories from "@/components/what-we-do-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import TrustSection from "@/components/trust-section"
import ScrollIndicator from "@/components/scroll-indicator"
import SectionCard from "@/components/section-card"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import { useEffect, useState } from "react"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {/* Navigation */}
      <Navigation />

      <Hero />

      {/* Trust Section */}
      <div className="py-12 sm:py-16 lg:py-20">
        <SectionCard>
          <TrustSection />
        </SectionCard>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16">
        <ScrollIndicator />
      </div>

      {/* Client Stories Section */}
      <div id="client-stories-section">
        <ClientStories />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works-section" className="py-12 sm:py-16 lg:py-20">
        <SectionCard>
          <HowItWorksSection />
        </SectionCard>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials-section" className="py-12 sm:py-16 lg:py-20">
        <SectionCard>
          <TestimonialsSection />
        </SectionCard>
      </div>

      {/* About Section */}
      <div id="about-section">
        <AboutSection />
      </div>



      {/* Pricing Section */}
      <div id="pricing-section">
        <PricingSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </div>
  )
}
