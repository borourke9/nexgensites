"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#what-we-do-section" },
  { name: "Results", href: "#results-section" },
  { name: "Process", href: "#how-it-works-section" },
  { name: "Testimonials", href: "#testimonials-section" },
  { name: "About", href: "#about-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Contact", href: "#contact-section" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.replace("#", ""))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }

    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-light tracking-wide text-stone-900">NEXGEN</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    px-1 py-2 text-sm font-medium transition-all duration-300 relative group
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "text-stone-900"
                        : "text-stone-600 hover:text-stone-900"
                    }
                  `}
                >
                  {item.name}
                  {/* Underline indicator for active item */}
                  {activeSection === item.href.replace("#", "") && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-stone-900"></div>
                  )}
                  {/* Hover underline */}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-stone-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("#contact-section")}
                className="border border-stone-300 text-stone-700 font-medium px-6 py-2.5 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group"
              >
                Get Started
                <div className="h-0.5 bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-none hover:bg-stone-100 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-stone-700" /> : <Menu className="w-5 h-5 text-stone-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out
            ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <div className="bg-white/95 backdrop-blur-md border-b border-stone-200/50 shadow-lg mx-4 mt-2 rounded-none overflow-hidden">
            <div className="py-6">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    w-full text-left px-6 py-3 text-base font-medium transition-all duration-300 border-l-2 border-transparent
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "text-stone-900 border-stone-900 bg-stone-50"
                        : "text-stone-600 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 75}ms`,
                  }}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="px-6 pt-6 pb-2">
                <button
                  onClick={() => scrollToSection("#contact-section")}
                  className="w-full border border-stone-300 text-stone-700 font-medium py-3 px-6 rounded-none hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
