import { Header } from "@/components/header"
import { HeroIntro } from "@/components/hero-intro"
import { TimelineNavigation } from "@/components/timeline-navigation"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { KeyInsights } from "@/components/key-insights"
import { MethodologySection } from "@/components/methodology-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroIntro />
      <TimelineNavigation />
      <InteractiveTimeline />
      <KeyInsights />
      <MethodologySection />
      <Footer />
    </main>
  )
}
