import type { Metadata } from "next"
import { Suspense } from "react"
import PersonaBuilderApp from "@/components/persona/persona-builder-app"

export const metadata: Metadata = {
  title: "Persona Builder | Bildur",
  description: "Create detailed customer personas with our step-by-step builder",
}

function PersonaBuilderContent() {
  return <PersonaBuilderApp />
}

export default function PersonaBuilderPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <PersonaBuilderContent />
    </Suspense>
  )
}
