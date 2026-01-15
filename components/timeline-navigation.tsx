"use client"

import { useState, useEffect } from "react"

const periods = [
  { id: "2010-2014", label: "2010-2014", shortLabel: "10-14" },
  { id: "2015-2018", label: "2015-2018", shortLabel: "15-18" },
  { id: "2019-2021", label: "2019-2021", shortLabel: "19-21" },
  { id: "2022-2025", label: "2022-2025", shortLabel: "22-25" },
]

export function TimelineNavigation() {
  const [activeId, setActiveId] = useState("2010-2014")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById("timeline-nav")
      if (navElement) {
        const rect = navElement.getBoundingClientRect()
        setIsSticky(rect.top <= 64)
      }

      // Update active period based on scroll position
      const sections = periods.map((p) => document.getElementById(p.id))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveId(periods[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      id="timeline-nav"
      className={`sticky top-16 z-40 transition-all duration-300 ${
        isSticky ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm" : "bg-secondary/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center gap-1 sm:gap-2 py-3">
          {periods.map((period, index) => (
            <div key={period.id} className="flex items-center">
              <button
                onClick={() => scrollToSection(period.id)}
                className={`px-3 sm:px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  activeId === period.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span className="hidden sm:inline">{period.label}</span>
                <span className="sm:hidden">{period.shortLabel}</span>
              </button>
              {index < periods.length - 1 && <div className="w-8 sm:w-12 h-px bg-border mx-1 hidden sm:block" />}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
