"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroIntro() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 400)
      const translateY = scrollY * 0.3
      hero.style.opacity = String(opacity)
      hero.style.transform = `translateY(${translateY}px)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTimeline = () => {
    document.getElementById("cronologia")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Overline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-border" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
            Investigación Especial
          </span>
          <span className="h-px w-12 bg-border" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-6 text-balance">
          La transformación digital de América Latina
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
          Una cronología interactiva que documenta los hitos, desafíos y oportunidades de la revolución tecnológica en
          la región desde 2010 hasta 2025.
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
          <span>Por Equipo de Investigación</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>15 enero 2026</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>12 min de lectura</span>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToTimeline}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">Explorar cronología</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
