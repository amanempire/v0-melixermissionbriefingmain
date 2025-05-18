"use client"

import FloatingCTA from "@/components/floating-cta"
import Navbar from "@/components/navbar"
import SignupForm from "@/components/signup-form"
import FeatureColumns from "@/components/feature-columns"
import StepCard from "@/components/step-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ChevronDown, ChevronRight, X } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-melixer-darker overflow-x-hidden">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="min-h-screen px-4 py-16 md:py-24 w-full relative flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-melixer-darker to-transparent z-10"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center z-20 px-4 max-w-7xl w-full">
          <div className="text-center md:text-left animate-fade-in opacity-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold mb-6 text-glow">
              <span className="block">You&apos;re</span>
              <span className="text-gradient animate-gradient-shift bg-[length:200%]">Early.</span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-melixer-light/80 max-w-2xl mx-auto md:mx-0">
              Melixer is the platform that connects founders with{" "}
              <span className="text-melixer-purple font-semibold">exceptional talent</span>. Join our beta to reshape
              how startups build teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient hover:opacity-90"
                onClick={() => document.getElementById("beta-signup-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply to Beta <ChevronRight className="ml-1 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5"
                onClick={() => document.getElementById("what")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="bg-gradient p-0.5 rounded-lg animate-fade-in opacity-0 md:ml-auto">
            <div className="bg-melixer-darker rounded-[calc(0.5rem-1px)] p-8">
              <h2 className="text-2xl font-grotesk font-bold mb-6">Beta Release</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-melixer-purple/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-melixer-purple" />
                  </div>
                  <p className="text-melixer-light/80">Limited to 100 founders</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-melixer-purple/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-melixer-purple" />
                  </div>
                  <p className="text-melixer-light/80">500 curated contributors</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-melixer-purple/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-melixer-purple" />
                  </div>
                  <p className="text-melixer-light/80">Access to private WhatsApp group</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-melixer-purple/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-melixer-purple" />
                  </div>
                  <p className="text-melixer-light/80">Early platform features</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-melixer-purple/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-melixer-purple" />
                  </div>
                  <p className="text-melixer-light/80">Lifetime legacy perks</p>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient hover:opacity-90 w-full mt-4"
                  onClick={() => document.getElementById("beta-signup-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What is Melixer */}
      <section id="what" className="px-4 py-16 md:py-24 w-full relative bg-melixer-dark">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-grotesk font-bold mb-4 text-gradient">What is Melixer?</h2>
              <p className="text-melixer-light/80 mb-6">
                Melixer bridges the gap between <span className="text-melixer-purple font-semibold">ideas</span> and{" "}
                <span className="text-melixer-blue font-semibold">skills</span>, creating a collaboration platform for
                founders and talented contributors to find each other.
              </p>
              <p className="text-melixer-light/80">
                We believe great companies are built by exceptional teams, not just great ideas. Melixer creates a space
                where these connections happen more efficiently and transparently.
              </p>
            </div>

            <div className="card-glass rounded-lg p-8 animate-on-scroll opacity-0">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-melixer-purple/20 p-3 rounded-lg">
                    <div className="w-8 h-8 flex items-center justify-center">💡</div>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-semibold mb-2">Ideas Need Execution</h3>
                    <p className="text-melixer-light/70 text-sm">
                      Founders with brilliant ideas often lack the technical skills to bring them to life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-melixer-blue/20 p-3 rounded-lg">
                    <div className="w-8 h-8 flex items-center justify-center">🛠️</div>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-semibold mb-2">Skills Need Direction</h3>
                    <p className="text-melixer-light/70 text-sm">
                      Talented individuals with technical skills seek meaningful projects to work on.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient p-3 rounded-lg">
                    <div className="w-8 h-8 flex items-center justify-center">🔄</div>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-semibold mb-2">Melixer Connects Both</h3>
                    <p className="text-melixer-light/70 text-sm">
                      Our platform creates the perfect environment for collaboration, leading to stronger startups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Founders */}
      <section id="founders" className="px-4 py-16 md:py-24 w-full relative bg-melixer-darker bg-grid-pattern">
        <div className="max-w-7xl mx-auto w-full">
          <FeatureColumns
            title="For Founders"
            description="Post your tasks, attract the right contributors, and find potential co-founders who share your vision and complement your skills."
            features={[
              {
                title: "Post Tasks",
                description:
                  "Break down your project into specific tasks and find the right talent for each component.",
              },
              {
                title: "Attract Contributors",
                description: "Build a team gradually by working with contributors on small projects first.",
              },
              {
                title: "Find Co-Founders",
                description: "Identify potential co-founders based on collaboration and demonstrated skills.",
              },
            ]}
            className="animate-on-scroll opacity-0"
          />
        </div>
      </section>

      {/* For Contributors */}
      <section id="contributors" className="px-4 py-16 md:py-24 w-full relative bg-melixer-dark">
        <div className="max-w-7xl mx-auto w-full">
          <FeatureColumns
            title="For Contributors"
            description="Work your way into founding teams by demonstrating your skills on real projects. Build trust through delivery and join the core team."
            features={[
              {
                title: "Showcase Skills",
                description: "Apply your expertise to real projects and build a portfolio of meaningful work.",
              },
              {
                title: "Earn Trust",
                description: "Demonstrate reliability and quality to build relationships with founders.",
              },
              {
                title: "Join Core Teams",
                description: "Turn successful collaborations into equity positions and co-founder opportunities.",
              },
            ]}
            layout="3col"
            className="animate-on-scroll opacity-0"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-24 w-full relative bg-melixer-darker bg-grid-pattern">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold mb-4 text-gradient">How Melixer Works</h2>
            <p className="text-melixer-light/80 max-w-2xl mx-auto">
              Our platform facilitates meaningful connections through a structured collaboration flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Create Profile"
              description="Founders list their ideas and needs. Contributors showcase their skills and experience."
              className="animate-on-scroll opacity-0"
            />

            <StepCard
              number={2}
              title="Match & Connect"
              description="Our platform suggests relevant matches based on skills, interests, and project needs."
              className="animate-on-scroll opacity-0"
            />

            <StepCard
              number={3}
              title="Collaborate"
              description="Work on small projects together first to test compatibility and build trust."
              className="animate-on-scroll opacity-0"
            />

            <StepCard
              number={4}
              title="Form Teams"
              description="Successful collaborations evolve into core teams with equity arrangements."
              className="animate-on-scroll opacity-0"
            />
          </div>
        </div>
      </section>

      {/* Beta Call */}
      <section className="px-4 py-16 md:py-24 w-full relative bg-melixer-dark">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient p-0.5 rounded-lg animate-on-scroll opacity-0">
              <div className="bg-melixer-darker rounded-[calc(0.5rem-1px)] p-8">
                <h2 className="text-2xl font-grotesk font-bold mb-6">Beta Release</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-melixer-purple/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-melixer-purple" />
                    </div>
                    <p className="text-melixer-light/80">Limited to 100 founders</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-melixer-purple/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-melixer-purple" />
                    </div>
                    <p className="text-melixer-light/80">500 curated contributors</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-melixer-purple/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-melixer-purple" />
                    </div>
                    <p className="text-melixer-light/80">Access to private WhatsApp group</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-melixer-purple/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-melixer-purple" />
                    </div>
                    <p className="text-melixer-light/80">Early platform features</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-melixer-purple/20 p-1 rounded-full">
                      <Check className="h-4 w-4 text-melixer-purple" />
                    </div>
                    <p className="text-melixer-light/80">Lifetime legacy perks</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-grotesk font-bold mb-4 text-gradient">Join Our Beta</h2>
              <p className="text-melixer-light/80 mb-6">
                We&apos;re launching with a small, curated group of founders and contributors to ensure quality
                connections and a smooth experience.
              </p>
              <p className="text-melixer-light/80 mb-8">
                Apply below to join our exclusive beta and get early access to Melixer&apos;s platform. Be part of
                shaping how the next generation of startups are built.
              </p>

              <Button
                size="lg"
                className="bg-gradient hover:opacity-90"
                onClick={() => document.getElementById("beta-signup-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Apply Now <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This is Not For */}
      <section className="px-4 py-16 md:py-24 w-full relative bg-melixer-darker">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold mb-4 text-gradient">Not For Everyone</h2>
            <p className="text-melixer-light/80 max-w-2xl mx-auto">
              Melixer is designed for specific types of founders and contributors. Make sure this is right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-melixer-gray/50 border-white/5 p-6 animate-on-scroll opacity-0">
              <h3 className="flex items-center gap-2 font-grotesk text-xl mb-4">
                <X className="h-5 w-5 text-red-500" />
                <span>Not for those who...</span>
              </h3>
              <ul className="space-y-3 text-melixer-light/80">
                <li className="flex items-start gap-2">
                  <div className="bg-red-500/10 p-1 rounded-full mt-1">
                    <X className="h-3 w-3 text-red-500" />
                  </div>
                  <p>Want overnight success or quick fixes</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-red-500/10 p-1 rounded-full mt-1">
                    <X className="h-3 w-3 text-red-500" />
                  </div>
                  <p>Aren&apos;t willing to contribute real value first</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-red-500/10 p-1 rounded-full mt-1">
                    <X className="h-3 w-3 text-red-500" />
                  </div>
                  <p>View equity as &quot;free&quot; compensation</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-red-500/10 p-1 rounded-full mt-1">
                    <X className="h-3 w-3 text-red-500" />
                  </div>
                  <p>Aren&apos;t committed to long-term value creation</p>
                </li>
              </ul>
            </Card>

            <Card className="bg-melixer-gray/50 border-white/5 p-6 animate-on-scroll opacity-0">
              <h3 className="flex items-center gap-2 font-grotesk text-xl mb-4">
                <Check className="h-5 w-5 text-green-500" />
                <span>Perfect for those who...</span>
              </h3>
              <ul className="space-y-3 text-melixer-light/80">
                <li className="flex items-start gap-2">
                  <div className="bg-green-500/10 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-green-500" />
                  </div>
                  <p>Value relationships built on demonstrated value</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-500/10 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-green-500" />
                  </div>
                  <p>Want to build genuine partnerships through work</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-500/10 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-green-500" />
                  </div>
                  <p>Understand that trust takes time to develop</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-green-500/10 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-green-500" />
                  </div>
                  <p>Are committed to building something meaningful</p>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 md:py-24 w-full relative bg-gradient">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-5xl font-grotesk font-bold mb-6 text-white">Join the Movement</h2>
            <p className="text-white/90 mb-8 text-lg">
              Help us redefine how startups find their ideal teams and how talented individuals find meaningful projects
              to work on.
            </p>

            <div id="beta-signup-form" className="pt-8">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-melixer-darker py-8 border-t border-white/10">
        <div className="container text-center">
          <p className="text-gradient font-grotesk text-xl font-bold mb-2">Melixer</p>
          <p className="text-melixer-light/60 text-sm">© {new Date().getFullYear()} Melixer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
