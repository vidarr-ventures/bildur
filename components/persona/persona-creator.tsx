"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PersonaCreator() {
  return (
    <section id="persona-creator" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Interactive Persona Builder</h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our advanced persona builder uses psychological frameworks to create comprehensive customer profiles
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Professional Persona Creation</h3>
              <p className="text-gray-200">
                Build detailed customer personas with our comprehensive questionnaire system. Analyze demographics,
                psychographics, pain points, and behavioral patterns.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-purple-900/50 text-purple-200 border-purple-700">
                Psychological Profiling
              </Badge>
              <Badge variant="secondary" className="bg-blue-900/50 text-blue-200 border-blue-700">
                Behavioral Analysis
              </Badge>
              <Badge variant="secondary" className="bg-green-900/50 text-green-200 border-green-700">
                Market Segmentation
              </Badge>
              <Badge variant="secondary" className="bg-orange-900/50 text-orange-200 border-orange-700">
                Export & Share
              </Badge>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/persona/builder">Launch Builder</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-200 hover:bg-gray-800" asChild>
                <Link href="mailto:ben@vidarrventures.com">Get Enterprise Access</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  Live Persona Builder
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Click "Launch Builder" to access the full application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Features Available:</h4>
                  <ul className="space-y-1 text-sm text-gray-200">
                    <li>• Multi-step persona creation</li>
                    <li>• Psychological assessment tools</li>
                    <li>• Visual persona cards</li>
                    <li>• Export and sharing options</li>
                    <li>• Team collaboration</li>
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/persona/builder">Access Full Builder →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
