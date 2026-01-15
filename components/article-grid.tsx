import { ArrowRight, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const articles = [
  {
    id: 1,
    category: "Economía",
    title: "El impacto de la inflación en el acceso tecnológico",
    excerpt:
      "Cómo los aumentos de precios están limitando la capacidad de hogares vulnerables para acceder a dispositivos digitales.",
    image: "/digital-devices-on-desk-with-calculator.jpg",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    category: "Educación",
    title: "Brechas digitales en aulas rurales",
    excerpt: "Un análisis de las disparidades en conectividad escolar entre zonas urbanas y rurales.",
    image: "/students-in-rural-classroom-with-tablets.jpg",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 3,
    category: "Infraestructura",
    title: "La carrera por el 5G en América Latina",
    excerpt: "Qué países lideran la implementación de redes de quinta generación y cuáles quedan rezagados.",
    image: "/5g-telecommunications-tower-modern-city.jpg",
    readTime: "10 min",
    featured: false,
  },
  {
    id: 4,
    category: "Empleo",
    title: "Automatización y el futuro laboral",
    excerpt: "Proyecciones sobre qué sectores enfrentarán mayor transformación en la próxima década.",
    image: "/robotic-arm-factory-automation.jpg",
    readTime: "12 min",
    featured: false,
  },
]

export function ArticleGrid() {
  const featuredArticle = articles.find((a) => a.featured)
  const regularArticles = articles.filter((a) => !a.featured)

  return (
    <section id="investigacion" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 lg:mb-12">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Investigaciones</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">Reportajes destacados</h2>
          </div>
          <Link
            href="#archivo"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver archivo completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <Card className="group overflow-hidden border-border bg-card lg:row-span-2">
              <Link href={`#article-${featuredArticle.id}`} className="block">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime} de lectura</span>
                  </div>
                </div>
              </Link>
            </Card>
          )}

          {/* Regular Articles */}
          {regularArticles.map((article) => (
            <Card key={article.id} className="group overflow-hidden border-border bg-card">
              <Link href={`#article-${article.id}`} className="flex flex-col sm:flex-row h-full">
                <div className="relative h-48 sm:h-auto sm:w-40 lg:w-48 flex-shrink-0 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 lg:p-6 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime} de lectura</span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <Link
          href="#archivo"
          className="flex sm:hidden items-center justify-center gap-2 mt-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Ver archivo completo
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
