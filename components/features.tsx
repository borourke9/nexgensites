import { Calendar, Users, MessageSquare, Star, Globe } from "lucide-react"

const features = [
  {
    name: "Smart Booking Systems",
    description: "Automated scheduling with 24/7 availability, reminders, and seamless calendar integration.",
    icon: Calendar,
  },
  {
    name: "Lead Generation",
    description: "AI-driven tools to capture, qualify, and nurture leads through your website and social media.",
    icon: Users,
  },
  {
    name: "Intelligent Chatbots",
    description: "Custom AI chatbots that handle inquiries, bookings, and follow-ups to retain more clients.",
    icon: MessageSquare,
  },
  {
    name: "Review Management",
    description: "Automated systems to collect positive reviews and manage your online reputation.",
    icon: Star,
  },
  {
    name: "Custom Websites",
    description: "Beautiful, responsive websites designed to showcase your business and attract customers.",
    icon: Globe,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32" id="features">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">All-in-One Automation</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Everything your business needs to create a professional online presence and grow consistently.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
