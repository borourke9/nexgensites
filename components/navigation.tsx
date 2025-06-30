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
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg shadow-pink-500/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">NEXGEN</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/25"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    }
                  `}
                >
                  {item.name}
                  {activeSection === item.href.replace("#", "") && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("#contact-section")}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out
            ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <div className="bg-white/95 backdrop-blur-md border-b border-white/20 shadow-xl shadow-pink-500/10 mx-4 mt-2 rounded-2xl overflow-hidden">
            <div className="py-4">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    w-full text-left px-6 py-3 text-base font-medium transition-all duration-200
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white"
                        : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="px-6 pt-4 pb-2">
                <button
                  onClick={() => scrollToSection("#contact-section")}
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 px-6 rounded-full hover:from-pink-600 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-pink-500/25"
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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
