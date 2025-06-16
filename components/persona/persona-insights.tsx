import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, BarChart, RadarChart } from "@/components/persona/charts"

export default function PersonaInsights() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Advanced Persona Analytics</h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get deep insights into your customer personas with comprehensive analytics and visualizations
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800">
              <TabsTrigger value="overview" className="data-[state=active]:bg-gray-700 text-gray-200">
                Overview
              </TabsTrigger>
              <TabsTrigger value="psychology" className="data-[state=active]:bg-gray-700 text-gray-200">
                Psychology
              </TabsTrigger>
              <TabsTrigger value="behavior" className="data-[state=active]:bg-gray-700 text-gray-200">
                Behavior
              </TabsTrigger>
              <TabsTrigger value="journey" className="data-[state=active]:bg-gray-700 text-gray-200">
                Journey
              </TabsTrigger>
            </TabsList>
            <div className="mt-6 grid gap-6">
              <TabsContent value="overview" className="m-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white">Persona Distribution</CardTitle>
                      <CardDescription className="text-gray-200">Breakdown of your customer segments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart />
                    </CardContent>
                  </Card>
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white">Decision Making Power</CardTitle>
                      <CardDescription className="text-gray-200">Influence in purchasing decisions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </Card>
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white">Psychological Profile</CardTitle>
                      <CardDescription className="text-gray-200">Key psychological traits analysis</CardDescription>
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
                    <CardTitle className="text-white">Psychological Analysis</CardTitle>
                    <CardDescription className="text-gray-200">
                      Deep dive into the psychological traits and motivations of your personas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-purple-300">Cognitive Style</h4>
                          <p className="text-sm text-gray-200">
                            Analytical thinkers who prefer data-driven decisions and systematic approaches to
                            problem-solving.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-purple-300">Risk Tolerance</h4>
                          <p className="text-sm text-gray-200">
                            Moderate risk tolerance with preference for proven solutions and gradual implementation.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-purple-300">Communication Style</h4>
                          <p className="text-sm text-gray-200">
                            Direct, professional communication with emphasis on facts, benefits, and ROI.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-purple-300">Decision Factors</h4>
                          <p className="text-sm text-gray-200">
                            Values efficiency, cost-effectiveness, and measurable outcomes when making decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="behavior" className="m-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-white">Behavioral Patterns</CardTitle>
                    <CardDescription className="text-gray-200">
                      Understanding how your personas behave and make purchasing decisions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-blue-300">Research Behavior</h4>
                          <p className="text-sm text-gray-200">
                            Conducts thorough research before making decisions, comparing multiple options and reading
                            reviews.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-blue-300">Purchase Triggers</h4>
                          <p className="text-sm text-gray-200">
                            Motivated by efficiency gains, cost savings, and solutions that solve specific pain points.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-blue-300">Content Preferences</h4>
                          <p className="text-sm text-gray-200">
                            Prefers detailed case studies, whitepapers, and data-driven content over emotional appeals.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-blue-300">Channel Preferences</h4>
                          <p className="text-sm text-gray-200">
                            Active on LinkedIn, industry publications, and professional networks for information
                            gathering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="journey" className="m-0">
                <Card className="border-gray-800 bg-gray-900">
                  <CardHeader>
                    <CardTitle className="text-white">Customer Journey Mapping</CardTitle>
                    <CardDescription className="text-gray-200">
                      Detailed journey from awareness to purchase and beyond
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-semibold text-white">
                              1
                            </div>
                            <h4 className="font-semibold text-purple-300">Awareness Stage</h4>
                          </div>
                          <p className="text-sm text-gray-200 ml-11">
                            Discovers problem through industry reports, peer discussions, or performance metrics. Begins
                            researching solutions.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">
                              2
                            </div>
                            <h4 className="font-semibold text-blue-300">Consideration Stage</h4>
                          </div>
                          <p className="text-sm text-gray-200 ml-11">
                            Evaluates multiple vendors, requests demos, and compares features. Involves team members in
                            decision process.
                          </p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold text-white">
                              3
                            </div>
                            <h4 className="font-semibold text-green-300">Decision Stage</h4>
                          </div>
                          <p className="text-sm text-gray-200 ml-11">
                            Negotiates terms, seeks approval from stakeholders, and finalizes purchase based on ROI
                            projections.
                          </p>
                        </div>
                      </div>
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
