"use client"

import { useEffect, useState } from "react"

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let rafId = 0

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-border/30">
      <div
        className="h-full bg-accent transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
