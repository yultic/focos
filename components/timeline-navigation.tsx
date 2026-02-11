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
      className={`sticky top-16 z-40 transition-all duration-150 ${
        isSticky ? "bg-background/98 backdrop-blur-md border-b border-border" : "bg-background border-b border-border"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center py-3">
          {/* Progress line */}
          <div className="flex items-center gap-0">
            {periods.map((period, index) => (
              <div key={period.id} className="flex items-center">
                <button
                  onClick={() => scrollToSection(period.id)}
                  className="flex items-center gap-2 group cursor-pointer px-2 sm:px-3 py-2"
                >
                  {/* Square dot marker */}
                  <span
                    className={`w-2 h-2 transition-colors duration-150 ${
                      activeId === period.id ? "bg-accent" : "bg-border group-hover:bg-muted-foreground"
                    }`}
                  />
                  {/* Label */}
                  <span
                    className={`font-mono tabular-nums text-sm transition-colors duration-150 ${
                      activeId === period.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <span className="hidden sm:inline">{period.label}</span>
                    <span className="sm:hidden">{period.shortLabel}</span>
                  </span>
                </button>
                {/* Connecting line */}
                {index < periods.length - 1 && (
                  <div className="w-6 sm:w-10 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
