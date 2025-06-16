export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Build Psychological Customer Personas
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Create detailed psychological profiles of your ideal customers to improve targeting, messaging, and
              conversion rates.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="#signup"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 py-2 text-lg font-semibold text-purple-600 shadow transition-colors hover:bg-white/90"
            >
              Build a Persona Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
