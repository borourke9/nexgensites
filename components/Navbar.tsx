'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"

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

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home")

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
  }

  return (
    <header className="sticky top-4 z-50">
      <div className="relative mx-auto max-w-[1320px] px-6 h-20 flex items-center">
        {/* brand left */}
        <div className="text-lg font-bold tracking-wide absolute left-6">NEXGEN</div>

        {/* centered pill group */}
        <nav className="mx-auto">
          <ul className="glass rounded-full px-3 py-3 flex items-center gap-3 shadow-sm">
            {navigationItems.map((item) => {
              const active = activeSection === item.href.replace("#", "")
              return (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`px-5 py-3 rounded-full text-base transition
                      ${active ? 'bg-black text-white' : 'text-[var(--muted-ink)] hover:text-black hover:bg-black/5'}`}
                  >
                    {item.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
} 