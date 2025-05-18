import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Melixer - The Startup Collaboration Platform",
  description: "Melixer connects founders with skilled contributors to build extraordinary startups together.",
  openGraph: {
    title: "Melixer - The Startup Collaboration Platform",
    description: "Melixer connects founders with skilled contributors to build extraordinary startups together.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-melixer-dark text-melixer-light font-sans antialiased`}
      >
        {children}
        <Toaster />
        <SonnerToaster />
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
      </body>
    </html>
  )
}
