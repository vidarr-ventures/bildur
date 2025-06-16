import { ArrowRight, Users, BarChart3, Brain } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                Now Available
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Build Better E-commerce{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Businesses
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Powerful tools for e-commerce operators to understand customers, optimize conversions, and grow revenue.
              </p>
            </div>
            <div className="space-x-4">
              <a
                href="/persona#signup"
                className="inline-flex h-9 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700"
              >
                Try Persona Builder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Everything You Need to{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Grow</span>
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive toolset helps e-commerce businesses understand their customers and drive growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Persona Builder</h3>
              <p className="text-gray-400 mb-4">
                Create detailed psychological profiles of your ideal customers to inform your marketing strategies.
              </p>
              <a href="/persona" className="inline-flex items-center text-purple-400 hover:text-purple-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <BarChart3 className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-400 mb-4">
                Track key performance metrics and make data-driven decisions to optimize your business.
              </p>
              <span className="inline-flex items-center text-blue-400">
                Coming soon <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
              <Brain className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Marketing Suite</h3>
              <p className="text-gray-400 mb-4">
                Leverage AI to create targeted marketing campaigns that drive conversions.
              </p>
              <span className="inline-flex items-center text-green-400">
                Coming soon <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
