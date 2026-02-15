import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReportajeHero } from "@/components/reportaje/reportaje-hero"
import { ReportajeBody } from "@/components/reportaje/reportaje-body"
import { ScrollProgressBar } from "@/components/reportaje/scroll-progress-bar"
import { getReportajeBySlug, getAllSlugs } from "@/lib/reportajes-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const reportaje = getReportajeBySlug(slug)

  if (!reportaje) {
    return { title: "Reportaje no encontrado" }
  }

  return {
    title: reportaje.title,
    description: reportaje.summary,
    openGraph: {
      title: reportaje.title,
      description: reportaje.summary,
      type: "article",
      images: [{ url: reportaje.heroImage, width: 1920, height: 1080 }],
    },
    twitter: {
      title: reportaje.title,
      description: reportaje.summary,
      images: [reportaje.heroImage],
    },
  }
}

export default async function ReportajePage({ params }: PageProps) {
  const { slug } = await params
  const reportaje = getReportajeBySlug(slug)

  if (!reportaje) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ScrollProgressBar />
      <ReportajeHero
        title={reportaje.title}
        subtitle={reportaje.subtitle}
        period={reportaje.period}
        author={reportaje.author}
        date={reportaje.date}
        readTime={reportaje.readTime}
        heroImage={reportaje.heroImage}
      />
      <ReportajeBody sections={reportaje.sections} />
      <Footer />
    </main>
  )
}
