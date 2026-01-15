"use client"

import { useRef, useEffect, useState } from "react"
import { Calendar, MapPin, TrendingUp, Users, Wifi, Smartphone, Shield, Brain } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface TimelineEvent {
  year: string
  month: string
  title: string
  description: string
  details: string
  icon: LucideIcon
  stats?: { label: string; value: string }
  location?: string
  image?: string
}

interface TimelinePeriod {
  id: string
  title: string
  summary: string
  events: TimelineEvent[]
}

const timelineData: TimelinePeriod[] = [
  {
    id: "2010-2014",
    title: "Los cimientos digitales",
    summary:
      "La región sienta las bases de su infraestructura digital con la expansión de redes móviles y las primeras políticas de inclusión tecnológica.",
    events: [
      {
        year: "2010",
        month: "Marzo",
        title: "Plan Regional de Banda Ancha",
        description: "CEPAL lanza el primer plan coordinado para expandir conectividad en América Latina.",
        details:
          "El plan estableció metas ambiciosas: llevar banda ancha al 50% de hogares para 2015 y crear marcos regulatorios armonizados.",
        icon: Wifi,
        stats: { label: "Hogares conectados", value: "23%" },
        location: "Santiago, Chile",
      },
      {
        year: "2012",
        month: "Julio",
        title: "Explosión de smartphones",
        description: "La penetración de teléfonos inteligentes supera por primera vez el 15% en la región.",
        details:
          "Brasil y México lideran la adopción, impulsados por planes de financiamiento y la llegada de dispositivos económicos.",
        icon: Smartphone,
        stats: { label: "Usuarios móviles", value: "340M" },
      },
      {
        year: "2014",
        month: "Noviembre",
        title: "Primera ley de datos personales regional",
        description: "Colombia aprueba legislación pionera en protección de datos siguiendo estándares europeos.",
        details:
          "La Ley 1581 establece principios de consentimiento, finalidad y seguridad que servirán de modelo para otros países.",
        icon: Shield,
        location: "Bogotá, Colombia",
      },
    ],
  },
  {
    id: "2015-2018",
    title: "La era del móvil",
    summary:
      "El smartphone se convierte en el principal punto de acceso a internet, redefiniendo servicios financieros, comercio y comunicación.",
    events: [
      {
        year: "2015",
        month: "Febrero",
        title: "Mobile-first se consolida",
        description: "Por primera vez, más del 60% del tráfico web regional proviene de dispositivos móviles.",
        details:
          "Este cambio obliga a empresas y gobiernos a rediseñar sus servicios digitales con enfoque móvil prioritario.",
        icon: Smartphone,
        stats: { label: "Tráfico móvil", value: "62%" },
      },
      {
        year: "2016",
        month: "Agosto",
        title: "Fintech revoluciona los pagos",
        description: "Nubank alcanza 1 millón de usuarios, marcando el inicio de la revolución fintech.",
        details:
          "Las startups financieras comienzan a ofrecer servicios bancarios a poblaciones tradicionalmente excluidas del sistema formal.",
        icon: TrendingUp,
        stats: { label: "Usuarios Nubank", value: "1M" },
        location: "São Paulo, Brasil",
      },
      {
        year: "2018",
        month: "Diciembre",
        title: "Despliegue 4G masivo",
        description: "La cobertura 4G LTE alcanza al 70% de la población urbana en los principales mercados.",
        details:
          "Brasil, México, Chile y Argentina lideran la expansión, permitiendo nuevos servicios de streaming y comunicación.",
        icon: Wifi,
        stats: { label: "Cobertura urbana", value: "70%" },
      },
    ],
  },
  {
    id: "2019-2021",
    title: "Pandemia y aceleración",
    summary:
      "La crisis sanitaria global acelera décadas de transformación digital en meses, revelando tanto oportunidades como profundas desigualdades.",
    events: [
      {
        year: "2019",
        month: "Octubre",
        title: "E-commerce supera $100B",
        description: "El comercio electrónico regional alcanza los 100 mil millones de dólares anuales.",
        details:
          "Mercado Libre se consolida como el jugador dominante mientras Amazon intensifica su expansión regional.",
        icon: TrendingUp,
        stats: { label: "Ventas anuales", value: "$100B" },
      },
      {
        year: "2020",
        month: "Marzo",
        title: "Confinamiento digital",
        description: "La pandemia obliga a 150 millones de estudiantes a migrar a educación virtual.",
        details:
          "La crisis expone la brecha digital: mientras las ciudades se adaptan, millones en zonas rurales quedan excluidos.",
        icon: Users,
        stats: { label: "Estudiantes afectados", value: "150M" },
      },
      {
        year: "2021",
        month: "Junio",
        title: "Boom del trabajo remoto",
        description: "El 35% de trabajadores formales adoptan modalidades híbridas o remotas permanentes.",
        details:
          "Las empresas latinoamericanas redefinen sus políticas laborales, impulsando demanda de herramientas colaborativas.",
        icon: Users,
        stats: { label: "Trabajo remoto", value: "35%" },
      },
    ],
  },
  {
    id: "2022-2025",
    title: "Inteligencia artificial y futuro",
    summary:
      "La IA generativa irrumpe en la región mientras se consolidan regulaciones y se debate el futuro del trabajo digital.",
    events: [
      {
        year: "2022",
        month: "Abril",
        title: "Primeras redes 5G comerciales",
        description: "Brasil y Chile inauguran las primeras redes 5G de alta velocidad en América Latina.",
        details: "La nueva tecnología promete revolucionar industria 4.0, telemedicina y ciudades inteligentes.",
        icon: Wifi,
        stats: { label: "Velocidad promedio", value: "500Mbps" },
        location: "São Paulo y Santiago",
      },
      {
        year: "2023",
        month: "Marzo",
        title: "ChatGPT transforma el trabajo",
        description: "El 45% de empresas medianas y grandes experimentan con herramientas de IA generativa.",
        details: "La adopción acelera debates sobre regulación, derechos de autor y el futuro del empleo en la región.",
        icon: Brain,
        stats: { label: "Empresas usando IA", value: "45%" },
      },
      {
        year: "2025",
        month: "Enero",
        title: "Marco regulatorio regional de IA",
        description: "Se aprueba el primer acuerdo regional para regulación de inteligencia artificial.",
        details:
          "El marco establece principios de transparencia, no discriminación y supervisión humana para sistemas de IA de alto riesgo.",
        icon: Shield,
        location: "Ciudad de México",
      },
    ],
  },
]

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2, rootMargin: "-50px" },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Icon = event.icon

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

      {/* Event marker */}
      <div className="absolute left-6 top-8 w-3 h-3 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10 md:left-1/2" />

      {/* Content */}
      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {event.month} {event.year}
              </span>
            </div>
            <div className="p-2 bg-secondary rounded-lg">
              <Icon className="h-4 w-4 text-foreground" />
            </div>
          </div>

          {/* Title */}
          <h4 className="font-serif text-xl font-semibold text-foreground mb-2">{event.title}</h4>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">{event.description}</p>

          {/* Details */}
          <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 border-l-2 border-accent/30 pl-3">
            {event.details}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            {event.stats && (
              <div>
                <span className="text-2xl font-bold text-foreground">{event.stats.value}</span>
                <span className="text-xs text-muted-foreground ml-2">{event.stats.label}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {event.location}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function InteractiveTimeline() {
  return (
    <section id="cronologia" className="py-16 lg:py-24 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {timelineData.map((period) => (
          <div key={period.id} id={period.id} className="mb-20 last:mb-0 scroll-mt-32">
            {/* Period Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {period.id}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-3">{period.title}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{period.summary}</p>
            </div>

            {/* Events */}
            <div className="relative space-y-8">
              {period.events.map((event, index) => (
                <TimelineCard key={`${event.year}-${event.month}`} event={event} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
