"use client"

import { useRef, useEffect, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface ParallaxValues {
  opacity: number
  translateY: number
  scrollY: number
  reducedMotion: boolean
}

export function useParallax(speed = 0.3): ParallaxValues {
  const [scrollY, setScrollY] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(800)
  const rafId = useRef<number | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    setViewportHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const onScroll = () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
      window.removeEventListener("scroll", onScroll)
    }
  }, [reducedMotion])

  const opacity = Math.max(0, 1 - scrollY / (viewportHeight * 0.8))
  const translateY = scrollY * speed

  return { opacity, translateY, scrollY, reducedMotion }
}
