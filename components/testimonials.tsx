const testimonials = [
  {
    quote: "We increased our bookings by 37% in the first month after implementing the AI chatbot and booking system.",
    author: "Sarah Johnson",
    company: "Wellness Spa Center",
    businessType: "Spa & Wellness",
  },
  {
    quote:
      "The review collection system has helped us get 5x more Google reviews, which has significantly improved our local search rankings.",
    author: "Michael Rodriguez",
    company: "Rodriguez Dental Care",
    businessType: "Dental Practice",
  },
  {
    quote:
      "Our client retention has improved by 42% thanks to the automated follow-up sequences and personalized messaging.",
    author: "Jennifer Williams",
    company: "Elite Hair Studio",
    businessType: "Hair Salon",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg border">
              <div className="flex items-center mb-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {testimonial.businessType}
                </span>
              </div>
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
