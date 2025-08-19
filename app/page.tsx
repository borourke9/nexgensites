import Navbar from '@/components/Navbar'
import ClientStories from "@/components/what-we-do-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import TrustSection from "@/components/trust-section"
import ScrollIndicator from "@/components/scroll-indicator"
import SectionCard from "@/components/section-card"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <section className="relative mx-auto max-w-[1360px] px-6 lg:px-8 pt-20 pb-24">
          {/* Optional (nice feel): add a very light vignette behind the hero to focus the eye */}
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(900px_600px_at_20%_20%,rgba(0,0,0,0.04),transparent_60%)]" />
          
          {/* ABSOLUTE VIDEO (behind text on desktop) */}
          <div
            aria-hidden
            className="
              hidden lg:block
              absolute top-1/2 right-[-6%] z-0
              w-[760px] xl:w-[820px] max-w-none
              -translate-y-1/2
            "
          >
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <video
                className="block w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                poster="/img/reel-cover.jpg"
              >
                <source src="/video/van.mp4" type="video/mp4" />
              </video>
              {/* subtle left gradient so overlap text stays readable */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-l from-transparent to-[rgba(250,246,240,0.92)]" />
            </div>
          </div>

          {/* GRID keeps height & stacking */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[78vh]">
            {/* COPY (above video) */}
            <div className="relative z-10 lg:col-span-7 lg:pr-16">
              <h1
                className="font-display font-extrabold tracking-[-0.022em] leading-[0.94] text-ink
                           text-[40px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[88px] max-w-[820px]"
              >
                Websites, SEO, Ads — Perfectly Balanced for Growth.
              </h1>

              <p className="font-body text-[18px] leading-[1.65] text-[var(--muted-ink)] max-w-[640px] mt-6">
                Custom websites, targeted ads, and local SEO — unified into one growth engine for service businesses.
              </p>

              <div className="flex items-center gap-4 mt-9">
                <a
                  href="#contact"
                  className="font-display font-semibold text-sm px-6 py-4 rounded-full
                             bg-black text-white shadow-[0_14px_36px_rgba(0,0,0,0.25)]
                             hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.35)]
                             transition"
                >
                  Get My Growth Plan
                </a>
                <a href="#work" className="font-body text-sm text-ink/80 hover:text-ink">See Work →</a>
          </div>

              <p className="font-body text-xs text-[var(--muted-ink)] mt-6">
                Trusted by growing service businesses.
              </p>
            </div>

            {/* MOBILE/TABLET VIDEO (normal stack) */}
            <div className="lg:hidden relative z-0">
              <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-xl">
                <video
                  className="block w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/img/reel-cover.jpg"
                >
                  <source src="/video/van.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rest of Your Site - All Sections Restored */}
      
      {/* Trust Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <SectionCard>
          <TrustSection />
        </SectionCard>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 bg-white">
        <ScrollIndicator />
      </div>

      {/* Client Stories Section */}
      <div id="client-stories-section" className="bg-white">
        <ClientStories />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <SectionCard>
          <HowItWorksSection />
        </SectionCard>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <SectionCard>
          <TestimonialsSection />
        </SectionCard>
      </div>

      {/* About Section */}
      <div id="about-section" className="bg-white">
        <AboutSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing-section" className="bg-white">
        <PricingSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="bg-white">
        <ContactSection />
      </div>
    </>
  )
}
