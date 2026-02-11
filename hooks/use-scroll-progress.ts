"use client"

import { useRef, useState, useEffect, useCallback } from "react"

interface UseScrollProgressOptions {
  offset?: [string, string]
}

export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollProgressOptions = {},
) {
  const { offset = ["start end", "end start"] } = options
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number>(0)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight

    // Parse offset: "start end" means element's start meets viewport's end
    // Simplified: progress 0 when element enters bottom, 1 when exits top
    const start = vh // element top at viewport bottom
    const end = -rect.height // element bottom at viewport top

    const current = rect.top
    const p = 1 - (current - end) / (start - end)
    setProgress(Math.max(0, Math.min(1, p)))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [update])

  return { ref, progress }
}
