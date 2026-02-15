import { Header } from "@/components/header"
import { VideoHero } from "@/components/video-hero"
import { AboutSection } from "@/components/about-section"
import { ReportajesGrid } from "@/components/reportajes-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <VideoHero />
      <AboutSection />
      <ReportajesGrid />
      <Footer />
    </main>
  )
}
