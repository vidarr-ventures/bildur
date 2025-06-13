import type { Metadata } from "next"
import { Suspense } from "react"
import Hero from "@/components/persona/hero"
import PersonaCreator from "@/components/persona/persona-creator"
import PersonaInsights from "@/components/persona/persona-insights"
import FeatureHighlights from "@/components/persona/feature-highlights"
import Testimonials from "@/components/persona/testimonials"
import CallToAction from "@/components/persona/call-to-action"

export const metadata: Metadata = {
  title: "Customer Persona Generator | Bildur",
  description:
    "Create comprehensive psychological customer personas to better understand and target your ideal customers.",
}

function PersonaContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-1">
        <PersonaCreator />
        <PersonaInsights />
        <FeatureHighlights />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  )
}

export default function PersonaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <PersonaContent />
    </Suspense>
  )
}
