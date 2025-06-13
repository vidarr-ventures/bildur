import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Understand Your Customers Like Never Before
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Create detailed psychological profiles of your ideal customers to inform your marketing, product
                development, and sales strategies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#persona-creator">Create Your First Persona</Link>
              </Button>
              <Button variant="outline" size="lg">
                View Examples
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg opacity-20 blur-xl"></div>
              <div className="relative z-10 w-full h-full bg-white dark:bg-gray-950 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-semibold">Marketing Manager Melissa</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">B2B SaaS | 35-45 | Decision Maker</p>
                </div>
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Goals</h4>
                    <ul className="space-y-1">
                      <li className="text-sm">Increase marketing ROI</li>
                      <li className="text-sm">Improve lead quality</li>
                      <li className="text-sm">Streamline campaign creation</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pain Points</h4>
                    <ul className="space-y-1">
                      <li className="text-sm">Limited resources</li>
                      <li className="text-sm">Proving marketing value</li>
                      <li className="text-sm">Data silos</li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Psychological Profile</h4>
                      <div className="flex space-x-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30">
                          Analytical
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                          Results-driven
                        </span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/30">
                          Collaborative
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
