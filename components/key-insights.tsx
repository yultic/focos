"use client"

import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Wifi, Brain } from "lucide-react"

const insights = [
  {
    icon: Wifi,
    value: "78%",
    label: "Penetración de internet",
    description: "de la población tiene acceso a internet en 2025",
    change: "+55% desde 2010",
  },
  {
    icon: Users,
    value: "520M",
    label: "Usuarios de smartphone",
    description: "personas utilizan teléfonos inteligentes",
    change: "+1,400% desde 2010",
  },
  {
    icon: TrendingUp,
    value: "$280B",
    label: "Economía digital",
    description: "valor del comercio electrónico regional",
    change: "+180% desde 2019",
  },
  {
    icon: Brain,
    value: "45%",
    label: "Adopción de IA",
    description: "de empresas usan herramientas de IA",
    change: "Nuevo indicador 2023",
  },
]

function InsightCard({
  insight,
  index,
}: {
  insight: (typeof insights)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Icon = insight.icon

  return (
    <div
      ref={cardRef}
      className={`bg-card border border-border rounded-lg p-6 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-secondary rounded-lg">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
        <span className="text-xs text-accent font-medium">{insight.change}</span>
      </div>
      <div className="text-4xl font-bold text-foreground mb-1">{insight.value}</div>
      <div className="text-sm font-medium text-foreground mb-2">{insight.label}</div>
      <p className="text-sm text-muted-foreground">{insight.description}</p>
    </div>
  )
}

export function KeyInsights() {
  return (
    <section id="hallazgos" className="py-16 lg:py-24 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Insights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {insights.map((insight, index) => (
            <InsightCard key={insight.label} insight={insight} index={index} />
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl text-accent/20 font-serif">"</div>
            <p className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed italic">
              La pandemia comprimió una década de transformación digital en apenas dos años. Lo que vemos hoy es una
              región que avanzó a pasos agigantados, pero también una que dejó atrás a millones.
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="text-foreground font-medium">Dra. Ana Martínez</span>
                <span className="text-muted-foreground"> — Directora, Observatorio Digital CEPAL</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
