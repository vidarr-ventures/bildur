import type { Metadata } from "next"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing | Bildur E-commerce Toolset",
  description: "Simple, transparent pricing for Bildur's e-commerce tools",
}

function PricingContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your business
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription className="text-gray-400">
                  Perfect for small businesses just getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>1 Customer Persona</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Basic Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>1 User</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/persona">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-purple-500/20 bg-gray-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-xs font-bold">POPULAR</div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription className="text-gray-400">
                  For growing businesses with multiple products
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>5 Customer Personas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>5 Users</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>API Access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/persona">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription className="text-gray-400">For large businesses with complex needs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Unlimited Customer Personas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Enterprise Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>24/7 Dedicated Support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Unlimited Users</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Advanced API Access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>Custom Integrations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/persona">Contact Sales</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">All plans include:</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                <Check className="h-8 w-8 text-green-500 mb-2" />
                <h4 className="font-medium">No credit card required to start</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                <Check className="h-8 w-8 text-green-500 mb-2" />
                <h4 className="font-medium">14-day free trial</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                <Check className="h-8 w-8 text-green-500 mb-2" />
                <h4 className="font-medium">Cancel anytime</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our pricing and features
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-medium mb-2">Can I change plans later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
                cycle.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-medium mb-2">What happens after my free trial?</h3>
              <p className="text-gray-300">
                After your 14-day free trial, you'll be prompted to select a plan. We won't charge you automatically.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-medium mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-300">
                Yes, we offer a 20% discount for annual billing on all plans. Contact our sales team for more
                information.
              </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <h3 className="text-lg font-medium mb-2">What kind of support do you offer?</h3>
              <p className="text-gray-300">
                All plans include email support. Professional plans include priority support, and Enterprise plans
                include 24/7 dedicated support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Try Bildur free for 14 days. No credit card required.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90" asChild>
                <Link href="/persona">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <PricingContent />
    </Suspense>
  )
}
