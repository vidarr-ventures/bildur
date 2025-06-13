import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, BarChart, RadarChart } from "@/components/persona/charts"

export default function PersonaInsights() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Persona Insights</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Gain deeper understanding of your customer personas with advanced analytics
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gray-700">
                Overview
              </TabsTrigger>
              <TabsTrigger value="psychology" className="data-[state=active]:bg-gray-700">
                Psychology
              </TabsTrigger>
              <TabsTrigger value="behavior" className="data-[state=active]:bg-gray-700">
                Behavior
              </TabsTrigger>
              <TabsTrigger value="journey" className="data-[state=active]:bg-gray-700">
                Journey
              </TabsTrigger>
            </TabsList>
            <div className="mt-6 grid gap-6">
              <TabsContent value="overview" className="m-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader className="pb-2">
                      <CardTitle>Persona Distribution</CardTitle>
                      <CardDescription className="text-gray-400">Breakdown of your customer base</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart />
                    </CardContent>
                  </Card>
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader className="pb-2">
                      <CardTitle>Decision Making Power</CardTitle>
                      <CardDescription className="text-gray-400">Influence in purchasing decisions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </Card>
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader className="pb-2">
                      <CardTitle>Psychological Profile</CardTitle>
                      <CardDescription className="text-gray-400">Key psychological traits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadarChart />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="psychology" className="m-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle>Psychological Analysis</CardTitle>
                    <CardDescription className="text-gray-400">
                      Deep dive into the psychological traits of your personas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center text-gray-400">
                      Select a persona to view detailed psychological analysis
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="behavior" className="m-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle>Behavioral Patterns</CardTitle>
                    <CardDescription className="text-gray-400">
                      Understand how your personas behave and make decisions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center text-gray-400">
                      Select a persona to view detailed behavioral analysis
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="journey" className="m-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle>Customer Journey</CardTitle>
                    <CardDescription className="text-gray-400">
                      Map the journey of your personas from awareness to purchase
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center text-gray-400">
                      Select a persona to view detailed journey map
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
