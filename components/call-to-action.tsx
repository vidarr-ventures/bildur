import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-500 to-blue-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Create your first customer persona in minutes and transform your marketing strategy
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90" asChild>
              <Link href="#persona-creator">Create Your First Persona</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
