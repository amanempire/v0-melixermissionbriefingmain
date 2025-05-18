import { cn } from "@/lib/utils"

interface StepCardProps {
  number: number
  title: string
  description: string
  className?: string
}

const StepCard = ({ number, title, description, className }: StepCardProps) => {
  return (
    <div
      className={cn(
        "card-glass rounded-lg p-6 relative overflow-hidden transition-all hover:border-melixer-purple/30",
        className,
      )}
    >
      <span className="absolute -right-4 -top-4 text-7xl font-bold opacity-10">{number}</span>

      <h3 className="font-grotesk font-bold text-xl mb-3 text-gradient">{title}</h3>
      <p className="text-melixer-light/70">{description}</p>
    </div>
  )
}

export default StepCard
