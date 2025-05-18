"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const FloatingCTA = () => {
  const scrollToForm = () => {
    document.getElementById("beta-signup-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={scrollToForm}
        className="bg-gradient hover:opacity-90 transition-all shadow-lg rounded-full glow-border text-white px-6 py-6 font-semibold"
        size="lg"
      >
        Apply to Beta <ChevronRight className="ml-1 h-5 w-5" />
      </Button>
    </div>
  )
}

export default FloatingCTA
