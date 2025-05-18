import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  fullHeight?: boolean
  enableGrid?: boolean
}

const Section = ({ id, className, children, fullHeight = false, enableGrid = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-16 md:py-24 w-full relative",
        fullHeight && "min-h-screen flex items-center justify-center",
        enableGrid && "bg-grid-pattern",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </section>
  )
}

export default Section
