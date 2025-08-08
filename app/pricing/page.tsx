"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Phone, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const pricingSteps = [
  {
    title: "Discovery Call",
    description: "We learn about your business and goals.",
  },
  {
    title: "Solution Match",
    description: "We recommend the best combination of services.",
  },
  {
    title: "Custom Quote",
    description: "You get clear pricing before anything begins.",
  },
]

const serviceTiers = [
  {
    name: "Starter",
    features: [
      "1-page website",
      "Basic AI chatbot",
      "On-page SEO optimization",
      "Mobile-responsive design",
      "Basic analytics setup",
    ],
  },
  {
    name: "Growth",
    features: [
      "Multi-page website",
      "Comprehensive SEO strategy",
      "AI chatbot trained on your docs",
      "Lead generation forms",
      "Review management system",
    ],
  },
  {
    name: "Scale",
    features: [
      "Full branding package",
      "Advanced AI integrations",
      "GEO optimization",
      "Ongoing support & maintenance",
      "Custom API integrations",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients - matching landing page */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-boutique-gradient-animated" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          <div className="space-y-4">
            <h1 className="text-4xl font-light tracking-wide sm:text-5xl md:text-6xl text-stone-900">
              Custom Solutions. Custom Pricing.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
              Whether you need a single-page website, a full SEO overhaul, or an AI chatbot trained on your business — we tailor pricing to match your goals.
            </p>
          </div>
        </section>

        {/* How Pricing Works Section */}
        <section className="container space-y-16 py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">How Pricing Works</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              Our simple process to create your perfect solution
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {pricingSteps.map((step, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-stone-200/50 bg-white/70 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-700 border border-rose-200 mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Tiers Section */}
        <section className="container space-y-16 py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">Service Tiers</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              Choose the level of service that matches your business needs
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {serviceTiers.map((tier) => (
              <div key={tier.name} className="relative overflow-hidden rounded-xl border border-stone-200/50 bg-white/70 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-medium text-stone-900 mb-4">{tier.name}</h3>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-rose-600" />
                      <span className="text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container space-y-16 py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">Let's Build Something Great</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              Tell us what you need. We'll build the right plan.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="border border-stone-300 text-stone-700 font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 rounded-none"
              asChild
            >
              <a href="tel:+1(248-404-5768)">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border border-stone-300 text-stone-700 font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 rounded-none"
              asChild
            >
              <a href="mailto:bryce@nexgensites.com">
                <Mail className="mr-2 h-5 w-5" />
                Request a Quote
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
} 