"use client"

import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { reportajes } from "@/lib/reportajes-data"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function ReportajeCard({
  slug,
  title,
  period,
  summary,
  readTime,
  heroImage,
  index,
}: {
  slug: string
  title: string
  period: string
  summary: string
  readTime: string
  heroImage: string
  index: number
}) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 })

  return (
    <article
      ref={ref}
      className={`group transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={`/reportajes/${slug}`} className="block border border-border bg-card hover:border-accent transition-colors duration-150">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-accent text-accent-foreground text-xs font-mono font-medium px-2 py-1">
              {period}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-150">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            {summary}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-mono">{readTime} de lectura</span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export function ReportajesGrid() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="reportajes" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="editorial-rule mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-3">
            Reportajes
          </h2>
          <p className="text-muted-foreground text-lg">
            Cuatro investigaciones que recorren quince años de transformación digital en América Latina.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {reportajes.map((r, i) => (
            <ReportajeCard
              key={r.slug}
              slug={r.slug}
              title={r.title}
              period={r.period}
              summary={r.summary}
              readTime={r.readTime}
              heroImage={r.heroImage}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
