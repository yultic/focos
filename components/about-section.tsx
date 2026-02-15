"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      id="nosotros"
      className="py-20 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="editorial-rule mb-8" />

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-8 leading-tight">
            Periodismo de investigación desde el exilio
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">FOCOS</strong> es un medio centroamericano de periodismo de investigación
              multimedia. Desde Costa Rica, documentamos las transformaciones que definen a nuestra región: migración,
              tecnología, derechos humanos y democracia.
            </p>
            <p>
              Creemos en el periodismo que ilumina —no que encandila. Nuestros reportajes combinan narrativa de largo
              aliento, visualización de datos y formatos multimedia para contar historias que importan, con la profundidad
              que merecen.
            </p>
            <p>
              Este especial multimedia documenta quince años de transformación digital en América Latina, desde los
              primeros planes de banda ancha hasta la llegada de la inteligencia artificial, a través de cuatro reportajes
              de investigación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
