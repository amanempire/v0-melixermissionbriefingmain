"use client"

import { useEffect } from "react"

export default function AnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
