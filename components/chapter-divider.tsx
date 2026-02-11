"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"]

interface ChapterDividerProps {
  chapter: number
  label: string
  variant?: "rule" | "gradient"
}

export function ChapterDivider({ chapter, label, variant = "rule" }: ChapterDividerProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  if (variant === "gradient") {
    return (
      <div
        ref={ref}
        className="full-bleed py-24 bg-gradient-to-b from-background via-secondary to-background"
      >
        <div
          className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em]">
            Capítulo {romanNumerals[chapter - 1] ?? chapter}
          </span>
          <p className="font-serif text-2xl sm:text-3xl text-foreground mt-3">{label}</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="full-bleed py-16 lg:py-20">
      <div
        className={`max-w-4xl mx-auto px-4 flex items-center gap-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left line */}
        <div
          className="flex-1 h-px bg-border origin-left"
          style={{
            animation: isVisible ? "line-extend 800ms ease-out forwards" : "none",
            transform: isVisible ? undefined : "scaleX(0)",
          }}
        />

        {/* Chapter marker */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">
            {romanNumerals[chapter - 1] ?? chapter}
          </span>
          <span className="font-serif text-sm text-muted-foreground">{label}</span>
        </div>

        {/* Right line */}
        <div
          className="flex-1 h-px bg-border origin-right"
          style={{
            animation: isVisible ? "line-extend 800ms ease-out 200ms forwards" : "none",
            transform: isVisible ? undefined : "scaleX(0)",
          }}
        />
      </div>
    </div>
  )
}
