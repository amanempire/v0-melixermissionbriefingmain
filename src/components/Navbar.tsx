"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-melixer-darker/80 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold font-grotesk text-gradient">Melixer</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("what")}
            className="text-sm text-melixer-light/80 hover:text-melixer-purple transition-colors"
          >
            What is Melixer
          </button>
          <button
            onClick={() => scrollToSection("founders")}
            className="text-sm text-melixer-light/80 hover:text-melixer-purple transition-colors"
          >
            For Founders
          </button>
          <button
            onClick={() => scrollToSection("contributors")}
            className="text-sm text-melixer-light/80 hover:text-melixer-purple transition-colors"
          >
            For Contributors
          </button>
          <Button
            onClick={() => scrollToSection("beta-signup-form")}
            variant="outline"
            className="border-melixer-purple text-melixer-purple hover:bg-melixer-purple/10"
          >
            Apply to Beta
          </Button>
        </nav>

        <Button onClick={() => scrollToSection("beta-signup-form")} className="md:hidden" variant="outline" size="sm">
          Apply
        </Button>
      </div>
    </header>
  )
}

export default Navbar
