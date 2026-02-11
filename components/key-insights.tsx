"use client"

import { useRef, useState, useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const insights = [
  {
    value: "78%",
    numericValue: 78,
    suffix: "%",
    label: "Penetración de internet",
    description: "de la población tiene acceso a internet en 2025",
    change: "+55% desde 2010",
  },
  {
    value: "520M",
    numericValue: 520,
    suffix: "M",
    label: "Usuarios de smartphone",
    description: "personas utilizan teléfonos inteligentes",
    change: "+1,400% desde 2010",
  },
  {
    value: "$280B",
    numericValue: 280,
    suffix: "B",
    prefix: "$",
    label: "Economía digital",
    description: "valor del comercio electrónico regional",
    change: "+180% desde 2019",
  },
  {
    value: "45%",
    numericValue: 45,
    suffix: "%",
    label: "Adopción de IA",
    description: "de empresas usan herramientas de IA",
    change: "Nuevo indicador 2023",
  },
]

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  isVisible,
}: {
  value: number
  suffix?: string
  prefix?: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1000
    const steps = 40
    const stepTime = duration / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3)
      current = Math.round(value * progress)
      setCount(current)

      if (step >= steps) {
        setCount(value)
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span className="data-figure">
      {prefix}{isVisible ? count : 0}{suffix}
    </span>
  )
}

function InsightStep({
  insight,
}: {
  insight: (typeof insights)[number]
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })

  return (
    <div
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-4"
    >
      <div
        className={`max-w-md mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-6xl lg:text-8xl font-bold text-foreground block mb-4">
          <AnimatedCounter
            value={insight.numericValue}
            suffix={insight.suffix}
            prefix={insight.prefix}
            isVisible={isVisible}
          />
        </span>
        <span className="text-lg font-medium text-foreground block mb-2">{insight.label}</span>
        <p className="text-muted-foreground mb-3">{insight.description}</p>
        <span className="text-sm text-accent font-medium">{insight.change}</span>
      </div>
    </div>
  )
}

export function KeyInsights() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section id="hallazgos" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center py-16 lg:py-24 transition-all duration-500 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="editorial-rule mx-auto mb-6" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3 block">
            Datos Clave
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            15 años de transformación en números
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los indicadores que mejor reflejan el avance digital de América Latina entre 2010 y 2025.
          </p>
        </div>
      </div>

      {/* Scrollytelling steps */}
      <div className="border-y border-border">
        {insights.map((insight) => (
          <InsightStep key={insight.label} insight={insight} />
        ))}
      </div>
    </section>
  )
}
