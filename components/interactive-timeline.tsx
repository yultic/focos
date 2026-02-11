"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Calendar, MapPin } from "lucide-react"

interface TimelineEvent {
  year: string
  month: string
  title: string
  description: string
  details: string
  stats?: { label: string; value: string }
  location?: string
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
        stats: { label: "Usuarios móviles", value: "340M" },
      },
      {
        year: "2014",
        month: "Noviembre",
        title: "Primera ley de datos personales regional",
        description: "Colombia aprueba legislación pionera en protección de datos siguiendo estándares europeos.",
        details:
          "La Ley 1581 establece principios de consentimiento, finalidad y seguridad que servirán de modelo para otros países.",
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
        stats: { label: "Tráfico móvil", value: "62%" },
      },
      {
        year: "2016",
        month: "Agosto",
        title: "Fintech revoluciona los pagos",
        description: "Nubank alcanza 1 millón de usuarios, marcando el inicio de la revolución fintech.",
        details:
          "Las startups financieras comienzan a ofrecer servicios bancarios a poblaciones tradicionalmente excluidas del sistema formal.",
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
        stats: { label: "Ventas anuales", value: "$100B" },
      },
      {
        year: "2020",
        month: "Marzo",
        title: "Confinamiento digital",
        description: "La pandemia obliga a 150 millones de estudiantes a migrar a educación virtual.",
        details:
          "La crisis expone la brecha digital: mientras las ciudades se adaptan, millones en zonas rurales quedan excluidos.",
        stats: { label: "Estudiantes afectados", value: "150M" },
      },
      {
        year: "2021",
        month: "Junio",
        title: "Boom del trabajo remoto",
        description: "El 35% de trabajadores formales adoptan modalidades híbridas o remotas permanentes.",
        details:
          "Las empresas latinoamericanas redefinen sus políticas laborales, impulsando demanda de herramientas colaborativas.",
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
        stats: { label: "Velocidad promedio", value: "500Mbps" },
        location: "São Paulo y Santiago",
      },
      {
        year: "2023",
        month: "Marzo",
        title: "ChatGPT transforma el trabajo",
        description: "El 45% de empresas medianas y grandes experimentan con herramientas de IA generativa.",
        details: "La adopción acelera debates sobre regulación, derechos de autor y el futuro del empleo en la región.",
        stats: { label: "Empresas usando IA", value: "45%" },
      },
      {
        year: "2025",
        month: "Enero",
        title: "Marco regulatorio regional de IA",
        description: "Se aprueba el primer acuerdo regional para regulación de inteligencia artificial.",
        details:
          "El marco establece principios de transparencia, no discriminación y supervisión humana para sistemas de IA de alto riesgo.",
        location: "Ciudad de México",
      },
    ],
  },
]

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`w-[85vw] sm:w-[45vw] lg:w-[35vw] flex-shrink-0 snap-center transition-all duration-600 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-card border border-border rounded-sm p-6 h-full flex flex-col">
        {/* Header: date + location */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="font-mono tabular-nums">
              {event.month} {event.year}
            </span>
          </div>
          {event.location && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {event.location}
            </div>
          )}
        </div>

        {/* Title */}
        <h4 className="font-serif text-xl font-semibold text-foreground mb-3">{event.title}</h4>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.description}</p>

        {/* Details — editorial annotation style */}
        <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4 border-l-2 border-accent pl-4 italic">
          {event.details}
        </p>

        {/* Stat */}
        {event.stats && (
          <div className="mt-auto pt-4 border-t border-border">
            <span className="data-figure text-3xl font-bold text-foreground">{event.stats.value}</span>
            <span className="text-xs text-muted-foreground ml-2">{event.stats.label}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function PeriodSection({ period }: { period: TimelinePeriod }) {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <div id={period.id} className="scroll-mt-32">
      {/* Period intro */}
      <div
        ref={introRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 transition-all duration-500 ease-out ${
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono tabular-nums text-sm font-medium text-accent">{period.id}</span>
          <div
            className="flex-1 h-px bg-border origin-left"
            style={{
              animation: introVisible ? "line-extend 1000ms ease-out 200ms forwards" : "none",
              transform: introVisible ? undefined : "scaleX(0)",
            }}
          />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-3">{period.title}</h3>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">{period.summary}</p>
      </div>

      {/* Horizontal scrolling cards with staggered reveal */}
      <div className="relative">
        <div className="horizontal-scroll flex gap-4 px-4 sm:px-6 lg:px-8 pb-4">
          <div className="flex-shrink-0 w-[calc((100vw-72rem)/2)] hidden lg:block" />
          {period.events.map((event, index) => (
            <TimelineCard key={`${event.year}-${event.month}`} event={event} index={index} />
          ))}
          <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />
        </div>

        {/* Mobile swipe indicator */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2 sm:hidden">
          <span>Deslizar</span>
          <span aria-hidden="true">&rarr;</span>
        </div>
      </div>
    </div>
  )
}

export function InteractiveTimeline() {
  return (
    <section id="cronologia" className="py-16 lg:py-24 scroll-mt-32">
      <div className="space-y-16">
        {timelineData.map((period) => (
          <PeriodSection key={period.id} period={period} />
        ))}
      </div>
    </section>
  )
}
