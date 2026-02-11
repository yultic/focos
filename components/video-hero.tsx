"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface VideoHeroProps {
  videoUrl?: string
}

export function VideoHero({
  videoUrl = "https://res.cloudinary.com/dop4qm8ku/video/upload/video_pe4d44.mp4",
}: VideoHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const rafId = useRef(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause()
    }
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener("scroll", onScroll)
    }
  }, [reducedMotion])

  const opacity = Math.max(0, 1 - scrollY / (typeof window !== "undefined" ? window.innerHeight * 0.8 : 800))
  const translateY = scrollY * 0.3

  const scrollToContent = () => {
    document.getElementById("capitulo-1")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/trafico.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Content — parallax fade-out on scroll */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white"
        style={
          reducedMotion
            ? undefined
            : {
                opacity,
                transform: `translateY(${translateY}px)`,
              }
        }
      >
        {/* Logo reveal */}
        <div
          className="flex justify-center mb-8"
          style={{
            animation: "logo-reveal 800ms ease-out 500ms both",
          }}
        >
          <Image
            src="/focostv-logo-white.svg"
            alt="Focos TV"
            width={160}
            height={35}
            priority
          />
        </div>

        {/* Overline */}
        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{
            animation: "text-reveal-up 600ms ease-out 600ms both",
          }}
        >
          <span className="h-px w-12 bg-white/40" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            Investigación Especial
          </span>
          <span className="h-px w-12 bg-white/40" />
        </div>

        {/* Title */}
        <h1
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] mb-6 text-balance"
          style={{
            animation: "text-reveal-up 700ms ease-out 900ms both",
          }}
        >
          La transformación digital de América Latina
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-4"
          style={{
            animation: "text-reveal-up 600ms ease-out 1200ms both",
          }}
        >
          Una cronología interactiva que documenta los hitos, desafíos y oportunidades de la revolución tecnológica en
          la región desde 2010 hasta 2025.
        </p>

        {/* Meta */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white/50 mb-12"
          style={{
            animation: "text-reveal-up 600ms ease-out 1200ms both",
          }}
        >
          <span>Por Equipo de Investigación</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <span className="font-mono tabular-nums">15 enero 2026</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <span className="font-mono tabular-nums">12 min de lectura</span>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-150 cursor-pointer"
          style={{
            animation: "text-reveal-up 600ms ease-out 1500ms both",
          }}
        >
          <span className="text-xs uppercase tracking-wider">Explorar</span>
          <ChevronDown className="h-5 w-5 animate-[gentle-down_2s_ease-in-out_infinite]" />
        </button>
      </div>
    </section>
  )
}
