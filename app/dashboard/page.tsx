import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Download, Plus, Share2, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard | Customer Persona Generator",
  description: "Manage your customer personas",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <Users className="h-6 w-6" />
          <span>Customer Persona Generator</span>
        </div>
        <nav className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Persona
          </Button>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <Button variant="outline" size="sm" className="ml-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
        <Tabs defaultValue="personas">
          <TabsList>
            <TabsTrigger value="personas">Personas</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="personas" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardHeader className="p-4 bg-gradient-to-r from-purple-500 to-blue-500">
                  <CardTitle className="text-white">Marketing Manager Melissa</CardTitle>
                  <CardDescription className="text-white/80">B2B SaaS | 35-45 | Decision Maker</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Goals</h4>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>Increase marketing ROI</li>
                        <li>Improve lead quality</li>
                        <li>Streamline campaigns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pain Points</h4>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>Limited resources</li>
                        <li>Proving marketing value</li>
                        <li>Data silos</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Psychological Profile</h4>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30">
                        Analytical
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                        Results-driven
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/30">
                        Collaborative
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      <span>Updated 2 days ago</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                  <CardTitle className="text-white">Tech Lead Thomas</CardTitle>
                  <CardDescription className="text-white/80">Enterprise IT | 30-40 | Influencer</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Goals</h4>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>Improve system reliability</li>
                        <li>Reduce technical debt</li>
                        <li>Automate processes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pain Points</h4>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>Legacy systems</li>
                        <li>Security concerns</li>
                        <li>Resource constraints</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Psychological Profile</h4>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30">
                        Detail-oriented
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30">
                        Pragmatic
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30">
                        Risk-averse
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      <span>Updated 1 week ago</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-dashed border-2 flex flex-col items-center justify-center p-6">
                <Plus className="h-8 w-8 text-gray-400 mb-2" />
                <h3 className="font-medium">Create New Persona</h3>
                <p className="text-sm text-gray-500 text-center mt-1">Add a new customer persona to your collection</p>
                <Button className="mt-4">Get Started</Button>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>View insights about your customer personas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  Analytics dashboard coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Manage your account and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  Settings panel coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
