import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Search, Shield, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"

export default function SolutionsPage() {
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
              We Don't Just Do SEO. We Do GEO.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Generative Engine Optimization makes your business the one AI recommends.
            </p>
            {/* Scroll Indicator */}
            <div className="pt-8">
              <div className="flex flex-col items-center space-y-2">
                <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
                <p className="text-sm text-muted-foreground">Scroll to learn more</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is GEO? Section */}
        <section className="container space-y-6 py-16 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What is GEO?</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Generative Engine Optimization combines conversational content, AI-friendly structure, and strategic directory presence to maximize your visibility in AI-powered search results.
            </p>
          </div>
        </section>

        {/* Why GEO Matters Section */}
        <section className="container space-y-6 py-16 bg-slate-50 dark:bg-transparent md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Why GEO Matters</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              In the age of AI search, being visible to large language models is just as important as being visible to traditional search engines.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <Bot className="h-8 w-8 text-primary" />
                <CardTitle>Optimized for LLMs</CardTitle>
                <CardDescription>ChatGPT, Perplexity, and Gemini</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our content is structured to be easily understood and recommended by leading AI models.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-primary" />
                <CardTitle>AI Chat Visibility</CardTitle>
                <CardDescription>Stand out in AI responses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Increase your chances of being recommended in AI-powered search results and conversations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Future-Proof</CardTitle>
                <CardDescription>Ready for tomorrow's search</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Stay ahead of the curve as AI becomes the primary way people search for information.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our GEO Process Section */}
        <section className="container space-y-6 py-16 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our GEO Process</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              A comprehensive approach to making your business AI-friendly
            </p>
          </div>
          <div className="mx-auto grid max-w-[58rem] gap-6">
            <div className="flex items-start space-x-4 rounded-lg border p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                1
              </div>
              <div>
                <h3 className="font-semibold">Site Audit</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive analysis of your current AI visibility and optimization opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-lg border p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                2
              </div>
              <div>
                <h3 className="font-semibold">Conversational Copywriting</h3>
                <p className="text-sm text-muted-foreground">
                  Creating content that speaks naturally to both humans and AI models.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-lg border p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                3
              </div>
              <div>
                <h3 className="font-semibold">Structured Schema Injection</h3>
                <p className="text-sm text-muted-foreground">
                  Implementing AI-friendly data structures that help models understand your business.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rounded-lg border p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                4
              </div>
              <div>
                <h3 className="font-semibold">Directory & AI Database Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring your business information is consistently represented across AI training data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container space-y-6 py-16 md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Ready to Get Started?</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Let's discuss how GEO can transform your business's AI visibility.
            </p>
          </div>
        </section>

        {/* Booking Section */}
        <section className="container space-y-6 py-16 bg-slate-50 dark:bg-transparent md:py-24">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Talk to a Real Human — Today</h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Skip the scheduling. Just give us a quick call or text to get started.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <a href="tel:+1(248-404-5768)" className="flex items-center gap-2">
                  📞 Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="sms:+1(248-404-5768)" className="flex items-center gap-2">
                  💬 Text Us
                </a>
              </Button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>Mon–Fri, 10am–6pm EST</p>
              <p>If we miss you, we'll call back the same day.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 