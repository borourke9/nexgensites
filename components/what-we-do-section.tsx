"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import SectionHeading from "./section-heading"

interface Project {
  name: string
  industry: string
  tag: string
  result: string
  quote: string
  quoteBy: string
  liveUrl: string
  caseUrl?: string
  images: {
    desktop: string
    mobile: string
  }
}

const SAMPLE_PROJECTS: Project[] = [
  {
    name: "Happy Trails RV Rentals",
    industry: "RV & Boat Rental",
    tag: "Website + SEO",
    result: "+65% rental bookings in 90 days",
    quote: "Our new website brings in more customers than ever before.",
    quoteBy: "Mike, Owner",
    liveUrl: "https://happy-trails-rv-rental.com/",
    images: {
      desktop: "/back-optimized.jpg",
      mobile: "/back-optimized.jpg"
    }
  },
  {
    name: "Malone Electrical",
    industry: "Home Services",
    tag: "Website + Ads + AI Receptionist",
    result: "3.1x lead volume in 90 days",
    quote: "The AI picks up every call—we stopped missing jobs.",
    quoteBy: "Mike, Owner",
    liveUrl: "https://example.com",
    images: {
      desktop: "/malone_electrical_compressed_small.png",
      mobile: "/malone_electrical_compressed_small.png"
    }
  },
  {
    name: "Harbor View Med Spa",
    industry: "Aesthetics",
    tag: "Full Growth System",
    result: "Lead capture up 84% MoM",
    quote: "Clean design and real results—exactly what we needed.",
    quoteBy: "Lauren, Director",
    liveUrl: "https://example.com",
    images: {
      desktop: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1200",
      mobile: "https://images.unsplash.com/photo-1512499617640-c2f999098c62?q=80&w=600"
    }
  }
]

interface ClientStoriesProps {
  projects?: Project[]
}

function ProjectSlide({ 
  project, 
  isActive, 
  index,
  total 
}: { 
  project: Project; 
  isActive: boolean;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      className="w-full flex-shrink-0"
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="px-4 max-w-[640px] mx-auto md:max-w-7xl md:px-6 lg:px-8">
        {/* Mobile-first: Stack layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">
          
          {/* Device Mockups - Top on mobile, left on desktop */}
          <div className="relative mb-6 md:mb-0 order-1 md:order-1">
            {/* Desktop Mockup */}
            <div className="relative bg-white rounded-xl shadow-lg p-4 md:p-6 mb-4 md:mb-8">
              <div className="bg-stone-900 rounded-lg p-2">
                <div className="aspect-[16/10] rounded-lg overflow-hidden">
                  <img
                    src={project.images.desktop}
                    alt={`${project.name} website mockup`}
                    className="w-full h-full object-cover"
                    loading={index <= 1 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 600px, (max-width: 1200px) 900px, 1200px"
                    onError={(e) => {
                      console.error('Failed to load desktop image:', project.images.desktop);
                      e.currentTarget.style.backgroundColor = '#f5f5f4';
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Mobile Mockup - Stack on mobile, overlap on desktop */}
            <div className="relative md:absolute md:-bottom-6 md:-right-6 w-full max-w-[120px] mx-auto md:w-28 md:max-w-none bg-white rounded-xl shadow-lg p-2 md:p-3 md:transform md:rotate-12">
              <div className="bg-stone-900 rounded-lg p-1">
                <div className="aspect-[9/19.5] rounded-lg overflow-hidden">
                  <img
                    src={project.images.mobile}
                    alt={`${project.name} mobile website mockup`}
                    className="w-full h-full object-cover"
                    loading={index <= 1 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 120px, 112px"
                    onError={(e) => {
                      console.error('Failed to load mobile image:', project.images.mobile);
                      e.currentTarget.style.backgroundColor = '#f5f5f4';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content - Bottom on mobile, right on desktop */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 md:order-2">
            {/* Tag */}
            <div className="inline-block bg-stone-100 text-stone-700 text-xs font-medium px-3 py-2 md:px-4 rounded-full border border-stone-200">
              {project.tag}
            </div>

            {/* Client Name + Industry */}
            <div>
              <h3 
                className="font-light text-stone-900 tracking-wide mb-2 line-clamp-2"
                style={{ 
                  fontSize: 'clamp(18px, 4.5vw, 28px)',
                  lineHeight: '1.2'
                }}
              >
                {project.name}
              </h3>
              <p 
                className="text-stone-600 font-medium"
                style={{ 
                  fontSize: 'clamp(13px, 3.5vw, 16px)',
                  lineHeight: '1.4'
                }}
              >
                {project.industry}
              </p>
            </div>

            {/* Result */}
            <p 
              className="text-stone-700 leading-relaxed font-medium"
              style={{ 
                fontSize: 'clamp(16px, 4vw, 20px)',
                lineHeight: '1.5'
              }}
            >
              {project.result}
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-rose-200 pl-4 md:pl-6 lg:pl-8 py-3 md:py-4">
              <p 
                className="text-stone-700 italic leading-relaxed mb-2 md:mb-3"
                style={{ 
                  fontSize: 'clamp(14px, 3.8vw, 18px)',
                  lineHeight: '1.6'
                }}
              >
                "{project.quote}"
              </p>
              <cite className="text-stone-600 not-italic font-medium text-sm md:text-base">
                — {project.quoteBy}
              </cite>
            </blockquote>

            {/* Sticky CTA on mobile */}
            <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-4 pb-2 md:static md:bg-none md:pt-6 md:pb-0">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-stone-100 border border-stone-300 text-stone-700 font-medium px-6 py-3 md:px-8 md:py-4 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group min-h-[44px]"
                  aria-label={`View ${project.name} live website`}
                >
                  <span>View Live Site</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                {project.caseUrl && (
                  <a
                    href={project.caseUrl}
                    className="inline-flex items-center justify-center space-x-2 text-stone-600 hover:text-stone-900 font-medium px-6 py-3 md:px-8 md:py-4 underline-offset-4 hover:underline transition-all duration-300 min-h-[44px]"
                    aria-label={`Read ${project.name} case study`}
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function EmptyState() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
          <ExternalLink className="w-8 h-8 text-stone-400" />
        </div>
        <h3 className="text-xl font-medium text-stone-900">Add projects to see this section come to life.</h3>
        <p className="text-stone-600">Your client stories will appear here once you add some projects.</p>
      </div>
    </div>
  )
}

export default function ClientStories({ projects }: ClientStoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const slideChangeAnnouncerRef = useRef<HTMLDivElement>(null)

  // Use sample data if no projects provided
  const displayProjects = projects && projects.length > 0 ? projects : SAMPLE_PROJECTS

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Auto-play functionality (disabled on reduced motion)
  useEffect(() => {
    if (!isAutoPlaying || displayProjects.length <= 1 || prefersReducedMotion || isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, displayProjects.length, prefersReducedMotion, isDragging])

  // Keyboard navigation (desktop only)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only enable keyboard navigation on medium screens and up
      if (window.innerWidth < 768) return
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length)
        setIsAutoPlaying(false)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentIndex((prev) => (prev + 1) % displayProjects.length)
        setIsAutoPlaying(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [displayProjects.length])

  // Announce slide changes for screen readers
  useEffect(() => {
    if (slideChangeAnnouncerRef.current) {
      const project = displayProjects[currentIndex]
      slideChangeAnnouncerRef.current.textContent = `Now showing ${project.name}, slide ${currentIndex + 1} of ${displayProjects.length}`
    }
  }, [currentIndex, displayProjects])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length)
    setIsAutoPlaying(false)
  }, [displayProjects.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length)
    setIsAutoPlaying(false)
  }, [displayProjects.length])

  // Handle drag gestures
  const handleDragEnd = useCallback((event: any, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 50
    const velocity = info.velocity.x
    const offset = info.offset.x

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (offset > 0 || velocity > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
  }, [nextSlide, prevSlide])

  const handleDragStart = useCallback(() => {
    setIsDragging(true)
    setIsAutoPlaying(false)
  }, [])

  // If no projects at all, show empty state
  if (displayProjects.length === 0) {
    return (
      <section className="min-h-screen bg-stone-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Client"
            accentText="Stories"
            subtitle="Selected work with real results."
          />

          <div className="min-h-[680px] lg:min-h-[520px] flex items-center justify-center">
            <EmptyState />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section 
      className="py-12 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 via-rose-50 to-stone-100"
      onMouseEnter={() => !prefersReducedMotion && setIsAutoPlaying(false)}
      onMouseLeave={() => !prefersReducedMotion && setIsAutoPlaying(true)}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Screen reader announcements */}
      <div 
        ref={slideChangeAnnouncerRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="px-4 max-w-[640px] mx-auto md:max-w-7xl md:px-6 lg:px-8 mb-8 md:mb-12">
          <SectionHeading 
            title="Client"
            accentText="Stories"
            subtitle="Selected work with real results."
          />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          {displayProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="hidden md:block absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-stone-400 hover:text-stone-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-full hover:bg-white/50 min-w-[44px] min-h-[44px]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
              </button>

              <button
                onClick={nextSlide}
                className="hidden md:block absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-stone-400 hover:text-stone-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-full hover:bg-white/50 min-w-[44px] min-h-[44px]"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
              </button>
            </>
          )}

          {/* Carousel Content with Drag Support */}
          <motion.div 
            ref={carouselRef}
            className="relative overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="flex transition-transform duration-300 ease-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {displayProjects.map((project, index) => (
                <ProjectSlide 
                  key={project.name} 
                  project={project} 
                  isActive={index === currentIndex}
                  index={index}
                  total={displayProjects.length}
                />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Dot Indicators */}
          {displayProjects.length > 1 && (
            <div className="flex flex-col items-center space-y-4 mt-8 md:mt-12">
              <div className="flex justify-center space-x-3 md:space-x-4">
                {displayProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                      index === currentIndex 
                        ? "bg-stone-700 w-3 h-3 md:w-4 md:h-4 scale-110" 
                        : "bg-stone-300 hover:bg-stone-500 w-2.5 h-2.5 md:w-3 md:h-3"
                    }`}
                    aria-label={`Go to slide ${index + 1} of ${displayProjects.length}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>
              
              {/* View All Work Link - Mobile Only */}
              <a
                href="#contact"
                className="md:hidden text-sm text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline transition-colors duration-300 min-h-[44px] flex items-center"
              >
                View All Work →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
