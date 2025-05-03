import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const benefits = [
  "Build a modern website or chatbot in days",
  "Get discovered by AI with GEO optimization",
  "Increase leads, reviews, and retention",
  "Skip the meetings — call us directly",
]

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to create your website?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join hundreds of businesses that have created beautiful, professional websites with NexGenSites.
            </p>

            <ul className="space-y-2 mt-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 transition-colors duration-200 rounded-lg border-2 border-teal-600 hover:border-teal-700 shadow-lg hover:shadow-teal-500/50 text-white"
                asChild
              >
                <a href="tel:+1(248-404-5768)">
                  📞 Call Now to Get Started
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-background p-8">
            <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded-md border bg-background"
                  placeholder="Your business name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border bg-background"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium mb-1">
                  Business Type
                </label>
                <select id="businessType" className="w-full p-2 rounded-md border bg-background">
                  <option value="">Select business type</option>
                  <option value="salon">Hair Salon/Barbershop</option>
                  <option value="spa">Spa/Wellness</option>
                  <option value="dental">Dental Practice</option>
                  <option value="medical">Medical Practice</option>
                  <option value="fitness">Fitness/Gym</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="other">Other Business</option>
                </select>
              </div>
              <Button type="submit" className="w-full">
                Request Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
