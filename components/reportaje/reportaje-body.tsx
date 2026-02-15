"use client"

import Image from "next/image"
import type { ReportajeSection } from "@/lib/reportajes-data"
import { PullQuote } from "@/components/pull-quote"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function TextSection({ content, isFirst }: { content: string; isFirst: boolean }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`prose-container transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p className={`text-lg leading-relaxed text-muted-foreground ${isFirst ? "drop-cap" : ""}`}>
        {content}
      </p>
    </div>
  )
}

function ImageSection({ imageUrl, caption }: { imageUrl: string; caption?: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 })

  return (
    <figure
      ref={ref}
      className={`my-12 lg:my-16 full-bleed transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative aspect-[21/9] max-h-[60vh]">
        <Image
          src={imageUrl}
          alt={caption || ""}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

interface ReportajeBodyProps {
  sections: ReportajeSection[]
}

export function ReportajeBody({ sections }: ReportajeBodyProps) {
  const firstTextIndex = sections.findIndex((s) => s.type === "text")

  return (
    <article id="reportaje-body" className="py-16 lg:py-24">
      <div className="space-y-8">
        {sections.map((section, i) => {
          if (section.type === "text" && section.content) {
            return (
              <TextSection
                key={i}
                content={section.content}
                isFirst={i === firstTextIndex}
              />
            )
          }

          if (section.type === "image" && section.imageUrl) {
            return (
              <ImageSection
                key={i}
                imageUrl={section.imageUrl}
                caption={section.caption}
              />
            )
          }

          if (section.type === "pull-quote" && section.content) {
            return (
              <PullQuote
                key={i}
                quote={section.content}
                author={section.caption || ""}
                role={section.role || ""}
              />
            )
          }

          return null
        })}
      </div>
    </article>
  )
}
