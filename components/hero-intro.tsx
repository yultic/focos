"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroIntro() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const title = titleRef.current
    const meta = metaRef.current
    if (!hero || !title || !meta) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const opacity = Math.max(0, 1 - scrollY / 400)
      hero.style.opacity = String(opacity)
      // Differentiated parallax: title moves slower than metadata
      title.style.transform = `translateY(${scrollY * 0.2}px)`
      meta.style.transform = `translateY(${scrollY * 0.35}px)`
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
        {/* Editorial rule */}
        <div className="editorial-rule mx-auto mb-8" />

        {/* Overline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-border" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
            Investigación Especial
          </span>
          <span className="h-px w-12 bg-border" />
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-6 text-balance"
        >
          La transformación digital de América Latina
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
          Una cronología interactiva que documenta los hitos, desafíos y oportunidades de la revolución tecnológica en
          la región desde 2010 hasta 2025.
        </p>

        {/* Meta info with font-mono for data */}
        <div
          ref={metaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-muted-foreground mb-12"
        >
          <span>Por Equipo de Investigación</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="font-mono tabular-nums">15 enero 2026</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="font-mono tabular-nums">12 min de lectura</span>
        </div>

        {/* Scroll indicator — gentle-down replaces bounce */}
        <button
          onClick={scrollToTimeline}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150 group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">Explorar cronología</span>
          <ChevronDown className="h-5 w-5 animate-[gentle-down_2s_ease-in-out_infinite]" />
        </button>
      </div>

      {/* Background: editorial column guides instead of blur circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="max-w-6xl mx-auto h-full flex justify-between px-4 sm:px-6 lg:px-8">
          <div className="w-px bg-border/30" />
          <div className="w-px bg-border/30 hidden sm:block" />
          <div className="w-px bg-border/30 hidden lg:block" />
          <div className="w-px bg-border/30 hidden lg:block" />
          <div className="w-px bg-border/30 hidden sm:block" />
          <div className="w-px bg-border/30" />
        </div>
      </div>
    </section>
  )
}
