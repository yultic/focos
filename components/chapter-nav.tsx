"use client"

import { useActiveChapter } from "@/hooks/use-active-chapter"

interface Chapter {
  id: string
  label: string
}

interface ChapterNavProps {
  chapters: Chapter[]
}

export function ChapterNav({ chapters }: ChapterNavProps) {
  const sectionIds = chapters.map((c) => c.id)
  const activeId = useActiveChapter(sectionIds)

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop: fixed right side dots */}
      <nav
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4"
        aria-label="Navegación por capítulos"
      >
        {chapters.map((chapter) => {
          const isActive = activeId === chapter.id
          return (
            <button
              key={chapter.id}
              onClick={() => handleClick(chapter.id)}
              className="group flex items-center gap-3 cursor-pointer"
              aria-label={chapter.label}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`text-xs transition-all duration-150 ${
                  isActive
                    ? "opacity-100 text-foreground translate-x-0"
                    : "opacity-0 group-hover:opacity-100 text-muted-foreground translate-x-2 group-hover:translate-x-0"
                }`}
              >
                {chapter.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-150 ${
                  isActive
                    ? "w-3 h-3 bg-accent"
                    : "w-2 h-2 bg-border group-hover:bg-muted-foreground"
                }`}
              />
            </button>
          )
        })}
      </nav>

      {/* Mobile: sticky horizontal bar */}
      <nav
        className="lg:hidden sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border"
        aria-label="Navegación por capítulos"
      >
        <div className="flex items-center gap-1 px-4 py-2 overflow-x-auto">
          {chapters.map((chapter) => {
            const isActive = activeId === chapter.id
            return (
              <button
                key={chapter.id}
                onClick={() => handleClick(chapter.id)}
                className={`text-xs whitespace-nowrap px-3 py-1.5 rounded-sm transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {chapter.label}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
