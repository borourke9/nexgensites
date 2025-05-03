import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We analyze your business needs and identify automation opportunities.",
  },
  {
    number: "02",
    title: "Custom Solution",
    description: "We build your personalized automation system, website, and chatbots.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Seamless integration with your existing systems and staff training.",
  },
  {
    number: "04",
    title: "Growth & Support",
    description: "Ongoing optimization and support to ensure continued success.",
  },
]

export default function HowItWorks() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-12">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">How It Works</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Our streamlined process to transform your service business
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Connection line */}
        <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-border md:left-1/2 md:-ml-[1px] md:transform md:translate-x-0" />

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className={`md:flex ${index % 2 === 0 ? "md:justify-end" : "md:order-last"}`}>
                <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background md:mb-0 md:h-16 md:w-16">
                  <div className="text-lg font-bold md:text-2xl">{step.number}</div>
                  {index !== steps.length - 1 && (
                    <ArrowRight className="absolute top-10 left-1/2 h-8 w-8 -translate-x-1/2 text-primary md:hidden" />
                  )}
                </div>
              </div>

              <div className={`pb-4 ${index % 2 === 0 ? "md:order-first md:text-right" : ""}`}>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
