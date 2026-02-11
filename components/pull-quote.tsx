"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface PullQuoteProps {
  quote: string
  author: string
  role: string
}

export function PullQuote({ quote, author, role }: PullQuoteProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  // Split quote into lines for staggered reveal
  const words = quote.split(" ")
  const midpoint = Math.ceil(words.length / 2)
  const lines = [
    words.slice(0, midpoint).join(" "),
    words.slice(midpoint).join(" "),
  ]

  return (
    <section
      ref={ref}
      className="full-bleed bg-primary text-primary-foreground py-20 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top editorial rule */}
        <div
          className="w-16 h-0.5 bg-accent mx-auto mb-10 origin-center"
          style={{
            animation: isVisible ? "line-extend 800ms ease-out forwards" : "none",
            transform: isVisible ? undefined : "scaleX(0)",
          }}
        />

        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-10 text-balance">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`block transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              {line}{" "}
            </span>
          ))}
        </blockquote>

        <div
          className={`transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="font-semibold text-lg text-primary-foreground">{author}</p>
          <p className="text-primary-foreground/60">{role}</p>
        </div>

        {/* Bottom editorial rule */}
        <div
          className="w-16 h-0.5 bg-accent mx-auto mt-10 origin-center"
          style={{
            animation: isVisible ? "line-extend 800ms ease-out 500ms forwards" : "none",
            transform: isVisible ? undefined : "scaleX(0)",
          }}
        />
      </div>
    </section>
  )
}
