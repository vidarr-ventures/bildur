import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, LineChart, Users } from "lucide-react"

export default function FeatureHighlights() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers powerful tools to create and leverage customer personas
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardHeader className="pb-2">
              <Brain className="h-12 w-12 text-purple-500 mb-2" />
              <CardTitle>Psychological Profiling</CardTitle>
              <CardDescription className="text-gray-400">
                Generate detailed psychological profiles based on customer data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Our advanced AI analyzes customer behavior patterns to create accurate psychological profiles, helping
                you understand the deeper motivations behind purchasing decisions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardHeader className="pb-2">
              <Target className="h-12 w-12 text-blue-500 mb-2" />
              <CardTitle>Targeted Marketing</CardTitle>
              <CardDescription className="text-gray-400">
                Create highly targeted marketing campaigns based on persona insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Use persona insights to craft messaging that resonates with specific customer segments, increasing
                engagement and conversion rates across all your marketing channels.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardHeader className="pb-2">
              <LineChart className="h-12 w-12 text-green-500 mb-2" />
              <CardTitle>Data Visualization</CardTitle>
              <CardDescription className="text-gray-400">
                Visualize customer data with interactive charts and graphs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Transform complex customer data into clear, actionable insights with our intuitive visualization tools,
                making it easy to identify trends and opportunities.
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardHeader className="pb-2">
              <Users className="h-12 w-12 text-orange-500 mb-2" />
              <CardTitle>Collaborative Workspace</CardTitle>
              <CardDescription className="text-gray-400">
                Share personas across your team for aligned customer understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Enable your entire organization to access and contribute to customer personas, ensuring consistent
                customer understanding across product, marketing, and sales teams.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
