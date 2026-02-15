"use client"

import Image from "next/image"
import { Clock, ChevronDown } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

interface ReportajeHeroProps {
  title: string
  subtitle: string
  period: string
  author: string
  date: string
  readTime: string
  heroImage: string
}

export function ReportajeHero({
  title,
  subtitle,
  period,
  author,
  date,
  readTime,
  heroImage,
}: ReportajeHeroProps) {
  const { opacity, translateY, scrollY, reducedMotion } = useParallax(0.3)

  const scrollToContent = () => {
    document.getElementById("reportaje-body")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-[100dvh] flex items-end justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={
          reducedMotion
            ? undefined
            : { transform: `translateY(${scrollY * 0.15}px)` }
        }
      >
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-4 pb-16 lg:pb-24 text-white"
        style={
          reducedMotion
            ? undefined
            : { opacity, transform: `translateY(${translateY}px)` }
        }
      >
        {/* Period badge */}
        <div
          className="mb-6"
          style={{ animation: "text-reveal-up 600ms ease-out 300ms both" }}
        >
          <span className="inline-block bg-accent text-accent-foreground text-sm font-mono font-medium px-3 py-1">
            {period}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] mb-4 text-balance"
          style={{ animation: "text-reveal-up 700ms ease-out 500ms both" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mb-8"
          style={{ animation: "text-reveal-up 600ms ease-out 700ms both" }}
        >
          {subtitle}
        </p>

        {/* Meta */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm text-white/50 mb-12"
          style={{ animation: "text-reveal-up 600ms ease-out 900ms both" }}
        >
          <span>{author}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <span className="font-mono tabular-nums">{date}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-mono tabular-nums">{readTime} de lectura</span>
          </span>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-150 cursor-pointer"
          style={{ animation: "text-reveal-up 600ms ease-out 1100ms both" }}
        >
          <span className="text-xs uppercase tracking-wider">Leer reportaje</span>
          <ChevronDown className="h-5 w-5 animate-[gentle-down_2s_ease-in-out_infinite]" />
        </button>
      </div>
    </section>
  )
}
