import type { Metadata } from "next"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Brain, LineChart, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tools | Bildur E-commerce Toolset",
  description: "Explore Bildur's powerful tools for e-commerce operators",
}

function ToolsContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Powerful <span className="gradient-text">Tools</span> for E-commerce Growth
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive suite of tools helps you understand your customers, optimize your operations, and
                drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-purple-500/20 bg-gray-900 overflow-hidden">
              <CardHeader className="pb-0">
                <Badge className="w-fit mb-2">Available Now</Badge>
                <CardTitle className="text-2xl">Customer Persona Builder</CardTitle>
                <CardDescription className="text-gray-400">
                  Create detailed psychological profiles of your ideal customers
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="h-16 w-16 text-purple-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Key Features:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mr-2"></div>
                        <span>Psychological profiling</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mr-2"></div>
                        <span>Data visualization</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mr-2"></div>
                        <span>Marketing insights</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-purple-400 mr-2"></div>
                        <span>Collaborative workspace</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/persona">Try It Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-gray-800 bg-gray-900 overflow-hidden">
              <CardHeader className="pb-0">
                <Badge variant="outline" className="w-fit mb-2">
                  Coming Soon
                </Badge>
                <CardTitle className="text-2xl">Analytics Dashboard</CardTitle>
                <CardDescription className="text-gray-400">
                  Track key performance metrics and identify trends
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Key Features:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                        <span>Real-time data tracking</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                        <span>Custom dashboards</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                        <span>Performance benchmarking</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-blue-400 mr-2"></div>
                        <span>Automated reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-gray-800 bg-gray-900 overflow-hidden">
              <CardHeader className="pb-0">
                <Badge variant="outline" className="w-fit mb-2">
                  Coming Soon
                </Badge>
                <CardTitle className="text-2xl">AI Marketing Suite</CardTitle>
                <CardDescription className="text-gray-400">
                  Create targeted marketing campaigns with AI assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="h-16 w-16 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Key Features:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                        <span>AI-generated content</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                        <span>Automated campaign optimization</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                        <span>Personalized messaging</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-green-400 mr-2"></div>
                        <span>Multi-channel coordination</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-gray-800 bg-gray-900 overflow-hidden">
              <CardHeader className="pb-0">
                <Badge variant="outline" className="w-fit mb-2">
                  Coming Soon
                </Badge>
                <CardTitle className="text-2xl">Conversion Optimizer</CardTitle>
                <CardDescription className="text-gray-400">
                  Identify and fix conversion bottlenecks in your sales funnel
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-orange-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Key Features:</h3>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-orange-400 mr-2"></div>
                        <span>Funnel analysis</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-orange-400 mr-2"></div>
                        <span>A/B testing</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-orange-400 mr-2"></div>
                        <span>User behavior tracking</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 rounded-full bg-orange-400 mr-2"></div>
                        <span>Optimization recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Product Roadmap</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here's what we're working on and when you can expect new tools to be released
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">Customer Persona Builder</h3>
                      <Badge className="ml-2">Available Now</Badge>
                    </div>
                    <p className="text-gray-400">
                      Create detailed psychological profiles of your ideal customers to inform your marketing and
                      product strategies.
                    </p>
                    <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300" asChild>
                      <Link href="/persona">
                        Try it now <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                      <Badge variant="outline" className="ml-2">
                        Q3 2025
                      </Badge>
                    </div>
                    <p className="text-gray-400">
                      Track key performance metrics, identify trends, and make data-driven decisions to optimize your
                      e-commerce business.
                    </p>
                  </div>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">AI Marketing Suite</h3>
                      <Badge variant="outline" className="ml-2">
                        Q4 2025
                      </Badge>
                    </div>
                    <p className="text-gray-400">
                      Leverage AI to create targeted marketing campaigns that resonate with your audience and drive
                      conversions.
                    </p>
                  </div>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">Conversion Optimizer</h3>
                      <Badge variant="outline" className="ml-2">
                        Q1 2026
                      </Badge>
                    </div>
                    <p className="text-gray-400">
                      Identify and fix conversion bottlenecks in your sales funnel to increase revenue and customer
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                Ready to Transform Your E-commerce Business?
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with our Customer Persona Builder today and unlock powerful insights about your customers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90" asChild>
                <Link href="/persona">Try Persona Builder</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ToolsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <ToolsContent />
    </Suspense>
  )
}
