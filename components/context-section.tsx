import { FileText, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const resources = [
  {
    title: "Metodología de investigación",
    description: "Documento técnico con las fuentes y métodos utilizados.",
    icon: FileText,
    action: "Descargar PDF",
  },
  {
    title: "Conjunto de datos completo",
    description: "Acceso a los datos abiertos para análisis independiente.",
    icon: Download,
    action: "Descargar CSV",
  },
  {
    title: "Fuentes oficiales",
    description: "Enlaces a los reportes originales consultados.",
    icon: ExternalLink,
    action: "Ver fuentes",
  },
]

export function ContextSection() {
  return (
    <section id="contexto" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Context Text */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contexto</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
              Sobre esta investigación
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Este reportaje es el resultado de seis meses de investigación realizada por nuestro equipo de periodismo
                de datos. Analizamos información de 15 países latinoamericanos, consultando más de 200 fuentes oficiales
                y entrevistando a 45 expertos en transformación digital.
              </p>
              <p className="leading-relaxed">
                Nuestro objetivo es proporcionar una visión integral y verificable del estado de la digitalización en la
                región, identificando tanto los avances como las brechas que persisten y requieren atención urgente.
              </p>
              <p className="leading-relaxed">
                Todos los datos presentados han sido verificados por un equipo externo de fact-checking y están
                disponibles para descarga pública en formatos abiertos.
              </p>
            </div>

            {/* Team */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Equipo de investigación</h3>
              <div className="flex flex-wrap gap-4">
                {["Ana Rodríguez", "Carlos Méndez", "Paula Torres", "Diego Silva"].map((name) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-semibold text-secondary-foreground">
                        {name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Resources */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Recursos y datos abiertos</h3>
            {resources.map((resource) => (
              <Card key={resource.title} className="p-5 bg-card border-border hover:border-accent/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-secondary">
                    <resource.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <Button variant="outline" size="sm" className="text-xs bg-transparent">
                      {resource.action}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {/* Newsletter CTA */}
            <Card className="p-6 bg-primary text-primary-foreground mt-6">
              <h4 className="font-serif text-xl font-bold mb-2">Recibe nuestras investigaciones</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Suscríbete para recibir análisis exclusivos directamente en tu correo.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 rounded text-foreground bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Suscribir</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
