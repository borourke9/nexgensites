"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from "lucide-react"
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
      desktop: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200",
      mobile: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600"
    }
  },
  {
    name: "Northside Electric",
    industry: "Home Services",
    tag: "Website + Ads + AI Receptionist",
    result: "3.1x lead volume in 90 days",
    quote: "The AI picks up every call—we stopped missing jobs.",
    quoteBy: "Mike, Owner",
    liveUrl: "https://example.com",
    images: {
      desktop: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
      mobile: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600"
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

function ProjectSlide({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-300 ease-out ${
        isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column - Device Mockups */}
        <div className="relative">
          {/* Desktop Mockup */}
          <div className="relative bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="bg-stone-900 rounded-lg p-2">
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img
                  src={project.images.desktop}
                  alt={`${project.name} website mockup`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Mockup - Overlapping */}
          <div className="absolute -bottom-6 -right-6 w-28 h-48 bg-white rounded-xl shadow-lg p-3 transform rotate-12">
            <div className="bg-stone-900 rounded-lg p-1">
              <div className="aspect-[9/19.5] rounded-lg overflow-hidden">
                <img
                  src={project.images.mobile}
                  alt={`${project.name} mobile website mockup`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Client Info */}
        <div className="space-y-8">
          {/* Tag */}
          <div className="inline-block bg-stone-100 text-stone-700 text-xs font-medium px-4 py-2 rounded-full border border-stone-200">
            {project.tag}
          </div>

          {/* Client Name + Industry */}
          <div>
            <h3 className="text-3xl font-light text-stone-900 tracking-wide mb-2">
              {project.name}
            </h3>
            <p className="text-stone-600 font-medium text-lg">
              {project.industry}
            </p>
          </div>

          {/* Result */}
          <p className="text-xl text-stone-700 leading-relaxed font-medium">
            {project.result}
          </p>

          {/* Quote */}
          <blockquote className="border-l-4 border-rose-200 pl-8 py-4">
            <p className="text-stone-700 italic text-lg leading-relaxed mb-3">
              "{project.quote}"
            </p>
            <cite className="text-stone-600 not-italic font-medium">
              — {project.quoteBy}
            </cite>
          </blockquote>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-stone-100 border border-stone-300 text-stone-700 font-medium px-8 py-4 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group"
            >
              <span>View Live Site</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {project.caseUrl && (
              <a
                href={project.caseUrl}
                className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-900 font-medium px-8 py-4 underline-offset-4 hover:underline transition-all duration-300"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
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
  const carouselRef = useRef<HTMLDivElement>(null)

  // Use sample data if no projects provided
  const displayProjects = projects && projects.length > 0 ? projects : SAMPLE_PROJECTS

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || displayProjects.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayProjects.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, displayProjects.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % displayProjects.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [displayProjects.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProjects.length) % displayProjects.length)
  }

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
      className="min-h-screen bg-boutique-section-animated py-24 px-6"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f5f5f4%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeading 
          title="Client"
          accentText="Stories"
          subtitle="Selected work with real results."
        />

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {displayProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 text-stone-400 hover:text-stone-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-full hover:bg-white/50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 text-stone-400 hover:text-stone-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-full hover:bg-white/50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          {/* Carousel Content */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden min-h-[680px] lg:min-h-[520px]"
          >
            {displayProjects.map((project, index) => (
              <ProjectSlide 
                key={project.name} 
                project={project} 
                isActive={index === currentIndex} 
              />
            ))}
          </div>

          {/* Dot Indicators */}
          {displayProjects.length > 1 && (
            <div className="flex justify-center space-x-3 mt-16">
              {displayProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-300 ${
                    index === currentIndex 
                      ? "bg-stone-700 scale-110" 
                      : "bg-stone-300 hover:bg-stone-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
