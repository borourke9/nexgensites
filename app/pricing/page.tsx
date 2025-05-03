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
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Custom Solutions. Custom Pricing.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether you need a single-page website, a full SEO overhaul, or an AI chatbot trained on your business — we tailor pricing to match your goals.
            </p>
          </div>
        </section>

        {/* How Pricing Works Section */}
        <section className="container space-y-16 py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How Pricing Works</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Our simple process to create your perfect solution
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {pricingSteps.map((step, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Tiers Section */}
        <section className="container space-y-16 py-24 md:py-32">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Service Tiers</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Choose the level of service that matches your business needs
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {serviceTiers.map((tier) => (
              <div key={tier.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
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
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Let's Build Something Great</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Tell us what you need. We'll build the right plan.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 transition-colors duration-200 rounded-lg border-2 border-teal-600 hover:border-teal-700 shadow-lg hover:shadow-teal-500/50 text-white"
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
              className="border-2"
              asChild
            >
              <a href="mailto:contact@nexgensites.com">
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