import type React from "react"

import { cn } from "@/lib/utils"

interface FeatureColumnsProps {
  title: string
  description: string
  features: {
    icon?: React.ReactNode
    title: string
    description: string
  }[]
  layout?: "2col" | "3col"
  className?: string
  titlePosition?: "left" | "center"
}

const FeatureColumns = ({
  title,
  description,
  features,
  layout = "3col",
  className,
  titlePosition = "center",
}: FeatureColumnsProps) => {
  return (
    <div className={className}>
      <div className={cn("mb-12", titlePosition === "center" ? "text-center max-w-3xl mx-auto" : "text-left")}>
        <h2 className="text-3xl md:text-4xl font-grotesk font-bold mb-4 text-gradient">{title}</h2>
        <p className="text-melixer-light/70">{description}</p>
      </div>

      <div className={cn("grid gap-8", layout === "2col" ? "md:grid-cols-2" : "md:grid-cols-3")}>
        {features.map((feature, index) => (
          <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
            {feature.icon && <div className="mb-4">{feature.icon}</div>}
            <h3 className="text-xl font-grotesk font-semibold mb-2">{feature.title}</h3>
            <p className="text-melixer-light/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureColumns
