import { FileText, Database, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const sources = [
  {
    icon: Database,
    title: "Fuentes de datos",
    items: ["CEPAL - Observatorio Digital", "Banco Mundial - WDI", "GSMA Intelligence", "Statista"],
  },
  {
    icon: Users,
    title: "Equipo",
    items: ["3 investigadores principales", "2 analistas de datos", "1 diseñador de información"],
  },
  {
    icon: FileText,
    title: "Metodología",
    items: ["Análisis cuantitativo", "Revisión documental", "Entrevistas a expertos", "Validación regional"],
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <div className="editorial-rule mb-6" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-3 block">
              Sobre este proyecto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              Metodología y fuentes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Este micrositio es el resultado de seis meses de investigación. Combinamos análisis de datos públicos con
              entrevistas a expertos regionales para construir una narrativa comprensiva de la transformación digital
              latinoamericana.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Todos los datos han sido verificados con al menos dos fuentes independientes. Las proyecciones futuras se
              basan en modelos econométricos desarrollados por la CEPAL.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <FileText className="h-4 w-4" />
                Descargar informe completo
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Mail className="h-4 w-4" />
                Contactar al equipo
              </Button>
            </div>
          </div>

          {/* Right column - Sources */}
          <div className="space-y-6">
            {sources.map((source) => {
              const Icon = source.icon
              return (
                <div key={source.title} className="bg-card border border-border rounded-sm p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-4 w-4 text-accent" />
                    <h3 className="font-serif font-medium text-foreground">{source.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {source.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
