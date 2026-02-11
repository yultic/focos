import { Header } from "@/components/header"
import { VideoHero } from "@/components/video-hero"
import { ChapterDivider } from "@/components/chapter-divider"
import { ChapterNav } from "@/components/chapter-nav"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { PullQuote } from "@/components/pull-quote"
import { KeyInsights } from "@/components/key-insights"
import { DataVisualization } from "@/components/data-visualization"
import { MethodologySection } from "@/components/methodology-section"
import { Footer } from "@/components/footer"

const chapters = [
  { id: "capitulo-1", label: "Cronología" },
  { id: "capitulo-2", label: "Hallazgos" },
  { id: "capitulo-3", label: "Datos" },
  { id: "capitulo-4", label: "Metodología" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <VideoHero />

      <ChapterNav chapters={chapters} />

      {/* Chapter I — Cronología */}
      <div id="capitulo-1">
        <ChapterDivider chapter={1} label="Cronología" />
        <InteractiveTimeline />
      </div>

      <PullQuote
        quote="La pandemia comprimió una década de transformación digital en apenas dos años. Lo que vemos hoy es una región que avanzó a pasos agigantados, pero también una que dejó atrás a millones."
        author="Dra. Ana Martínez"
        role="Directora, Observatorio Digital CEPAL"
      />

      {/* Chapter II — Hallazgos */}
      <div id="capitulo-2">
        <ChapterDivider chapter={2} label="Hallazgos clave" variant="gradient" />
        <KeyInsights />
      </div>

      {/* Chapter III — Datos */}
      <div id="capitulo-3">
        <ChapterDivider chapter={3} label="Visualización de datos" />
        <DataVisualization />
      </div>

      {/* Chapter IV — Metodología */}
      <div id="capitulo-4">
        <ChapterDivider chapter={4} label="Sobre este proyecto" variant="gradient" />
        <MethodologySection />
      </div>

      <Footer />
    </main>
  )
}
