import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Search, Shield, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore our comprehensive solutions for AI-powered websites, chatbots, and SEO services. Transform your online presence with NexGenSites.",
  openGraph: {
    title: "Solutions | NexGenSites",
    description: "Explore our comprehensive solutions for AI-powered websites, chatbots, and SEO services. Transform your online presence with NexGenSites.",
    url: "https://nexgensites.vercel.app/solutions",
  },
  twitter: {
    title: "Solutions | NexGenSites",
    description: "Explore our comprehensive solutions for AI-powered websites, chatbots, and SEO services. Transform your online presence with NexGenSites.",
  },
}

export default function SolutionsPage() {
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
              We Don't Just Do SEO. We Do GEO.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
              Generative Engine Optimization makes your business the one AI recommends.
            </p>
            {/* Scroll Indicator */}
            <div className="pt-8">
              <div className="flex flex-col items-center space-y-2">
                <ChevronDown className="h-6 w-6 text-stone-500 animate-bounce" />
                <p className="text-sm text-stone-500">Scroll to learn more</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is GEO? Section */}
        <section className="container space-y-6 py-16 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">What is GEO?</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              Generative Engine Optimization combines conversational content, AI-friendly structure, and strategic directory presence to maximize your visibility in AI-powered search results.
            </p>
          </div>
        </section>

        {/* Why GEO Matters Section */}
        <section className="container space-y-6 py-16 bg-stone-50/50 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">Why GEO Matters</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              In the age of AI search, being visible to large language models is just as important as being visible to traditional search engines.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="bg-white/70 backdrop-blur-sm border-stone-200/50">
              <CardHeader>
                <Bot className="h-8 w-8 text-rose-700" />
                <CardTitle className="text-stone-900">Optimized for LLMs</CardTitle>
                <CardDescription className="text-stone-600">ChatGPT, Perplexity, and Gemini</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600">
                  Our content is structured to be easily understood and recommended by leading AI models.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-stone-200/50">
              <CardHeader>
                <Search className="h-8 w-8 text-rose-700" />
                <CardTitle className="text-stone-900">AI Chat Visibility</CardTitle>
                <CardDescription className="text-stone-600">Stand out in AI responses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600">
                  Increase your chances of being recommended in AI-powered search results and conversations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-stone-200/50">
              <CardHeader>
                <Shield className="h-8 w-8 text-rose-700" />
                <CardTitle className="text-stone-900">Future-Proof</CardTitle>
                <CardDescription className="text-stone-600">Ready for tomorrow's search</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-600">
                  Stay ahead of the curve as AI becomes the primary way people search for information.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our GEO Process Section */}
        <section className="container space-y-6 py-16 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">Our GEO Process</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              A comprehensive approach to making your business AI-friendly
            </p>
          </div>
          <div className="mx-auto grid max-w-[58rem] gap-6">
            <div className="flex items-start space-x-4 rounded-lg border border-stone-200/50 p-4 bg-white/70 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                1
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Site Audit</h3>
                <p className="text-sm text-stone-600">
                  Comprehensive analysis of your current AI visibility and optimization opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-lg border border-stone-200/50 p-4 bg-white/70 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                2
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Conversational Copywriting</h3>
                <p className="text-sm text-stone-600">
                  Creating content that speaks naturally to both humans and AI models.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-lg border border-stone-200/50 p-4 bg-white/70 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                3
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Structured Schema Injection</h3>
                <p className="text-sm text-stone-600">
                  Implementing AI-friendly data structures that help models understand your business.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-lg border border-stone-200/50 p-4 bg-white/70 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                4
              </div>
              <div>
                <h3 className="font-medium text-stone-900">Directory & AI Database Sync</h3>
                <p className="text-sm text-stone-600">
                  Ensuring your business information is consistently represented across AI training data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container space-y-6 py-16 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">Ready to Get Started?</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              Let's discuss how GEO can transform your business's AI visibility.
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="container space-y-6 py-16 bg-stone-50/50 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-light text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-stone-900 tracking-wide">Talk to a Real Human — Today</h2>
            <p className="mt-4 text-stone-600 sm:text-lg">
              Skip the scheduling. Just give us a quick call or text to get started.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="border border-stone-300 text-stone-700 font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 rounded-none">
                <a href="tel:+1(248-404-5768)" className="flex items-center gap-2">
                  📞 Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border border-stone-300 text-stone-700 font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 rounded-none">
                <a href="sms:+1(248-404-5768)" className="flex items-center gap-2">
                  💬 Text Us
                </a>
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-stone-500">
              <p>Mon–Fri, 10am–6pm EST</p>
              <p>If we miss you, we'll call back the same day.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 