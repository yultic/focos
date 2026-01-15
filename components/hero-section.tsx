import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <img
          src="/dramatic-aerial-view-of-city-infrastructure-at-dus.jpg"
          alt="Vista aérea de infraestructura urbana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded">
                  Investigación Especial
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  15 de enero, 2026
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-4 text-balance">
                El costo oculto de la transformación digital en América Latina
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Un análisis exhaustivo revela cómo la brecha tecnológica está redefiniendo las oportunidades económicas
                en la región, con datos de 15 países.
              </p>

              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                Leer investigación completa
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
