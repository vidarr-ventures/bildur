import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, Users, BarChart3, FileText, Zap } from "lucide-react"

export default function FeatureHighlights() {
  const features = [
    {
      icon: Brain,
      title: "Psychological Profiling",
      description:
        "Deep psychological analysis including cognitive styles, risk tolerance, and decision-making patterns.",
    },
    {
      icon: Target,
      title: "Behavioral Mapping",
      description:
        "Comprehensive behavioral analysis covering research habits, purchase triggers, and content preferences.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share personas across your organization and collaborate on customer insights with your team.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Visual analytics and reporting to understand persona distribution and decision-making power.",
    },
    {
      icon: FileText,
      title: "Export & Integration",
      description: "Export personas to PDF, integrate with CRM systems, and sync with marketing automation tools.",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Leverage AI to generate insights, recommendations, and personalized marketing strategies.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to create, analyze, and leverage customer personas for better marketing results
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-800 bg-gray-900">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-purple-400" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
