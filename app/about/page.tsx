import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "About Bildur | E-commerce Toolset",
  description: "Learn about Bildur's mission to empower e-commerce operators with powerful tools",
}

function AboutContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About <span className="gradient-text">Bildur</span>
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to empower e-commerce operators with powerful tools to understand their customers and
                grow their businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-300">
                Bildur was founded in 2023 by a team of e-commerce veterans who saw a gap in the market for powerful,
                yet accessible tools for online businesses. After years of working with enterprise e-commerce platforms,
                we realized that many small and medium-sized businesses lacked access to the sophisticated tools that
                larger companies used to understand their customers and optimize their operations.
              </p>
              <p className="text-gray-300">
                We set out to change that by building a suite of tools specifically designed for e-commerce operators of
                all sizes. Our first product, the Customer Persona Builder, helps businesses create detailed
                psychological profiles of their ideal customers, enabling more targeted marketing and product
                development.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
              <p className="text-gray-300">
                We believe that understanding your customers is the foundation of any successful e-commerce business.
                Our vision is to democratize access to powerful customer insights and analytics tools, making them
                accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300">
                In the coming years, we plan to expand our toolset to include advanced analytics, AI-powered marketing
                automation, and conversion optimization tools, all designed to help e-commerce businesses grow and
                thrive in an increasingly competitive landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the people behind Bildur
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-purple-400">JD</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-gray-400">CEO & Co-founder</p>
              </div>
              <p className="text-center text-gray-300">
                Former e-commerce director with 15+ years of experience building and scaling online businesses.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-blue-400">JS</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">John Smith</h3>
                <p className="text-gray-400">CTO & Co-founder</p>
              </div>
              <p className="text-center text-gray-300">
                Tech leader with a background in AI and machine learning, focused on building scalable e-commerce
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-green-400">AR</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Alex Rodriguez</h3>
                <p className="text-gray-400">Head of Product</p>
              </div>
              <p className="text-center text-gray-300">
                Product strategist with a passion for creating intuitive, powerful tools for e-commerce businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Join Us on Our Journey</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're just getting started, and we'd love for you to be part of our story.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90" asChild>
                <Link href="/persona">Try Our Tools</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Bildur
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Bildur is a comprehensive e-commerce toolset designed to help online businesses understand their customers
              better and optimize their operations for growth.
            </p>
            <p className="text-gray-400 mb-6">
              Our flagship tool, the Customer Persona Builder, uses advanced psychological profiling to help you create
              detailed customer personas that inform your marketing strategies, product development, and customer
              experience design.
            </p>
            <p className="text-gray-400">
              Whether you're a small startup or an established e-commerce business, Bildur provides the insights and
              tools you need to understand your customers and grow your revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <AboutContent />
    </Suspense>
  )
}
