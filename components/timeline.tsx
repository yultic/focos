const events = [
  {
    year: "2018",
    title: "Inicio de la expansión 4G",
    description: "Los principales países de la región comienzan despliegue masivo de redes 4G LTE.",
  },
  {
    year: "2020",
    title: "Pandemia acelera digitalización",
    description: "El confinamiento impulsa un aumento del 40% en adopción de servicios digitales.",
  },
  {
    year: "2022",
    title: "Primeras redes 5G operativas",
    description: "Brasil y Chile lanzan las primeras redes comerciales 5G en América Latina.",
  },
  {
    year: "2024",
    title: "Regulación de datos personales",
    description: "Se implementan marcos regulatorios unificados siguiendo estándares internacionales.",
  },
  {
    year: "2025",
    title: "IA generativa en empresas",
    description: "El 35% de las empresas medianas adoptan herramientas de inteligencia artificial.",
  },
]

export function Timeline() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Cronología</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Hitos de la transformación
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Los momentos clave que han definido la evolución digital de la región.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          {/* Events */}
          <div className="space-y-8 lg:space-y-12">
            {events.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-start gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background -translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 lg:ml-0 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}
                >
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-bold rounded mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
