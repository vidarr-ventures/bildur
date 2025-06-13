import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Ready to Build Better Customer Personas?
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get access to our full persona builder platform with advanced analytics, export capabilities, and team
              collaboration features.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90" asChild>
              <Link href="mailto:ben@vidarrventures.com">Contact Us for Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
              <Link href="#persona-creator">Try the Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
