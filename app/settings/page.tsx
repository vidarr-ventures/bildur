import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SettingsContent() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Settings</h1>
            <p className="text-gray-400 md:text-xl">Manage your account preferences</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="general" className="data-[state=active]:bg-gray-700">
              General
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-gray-700">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-gray-700">
              Security
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="general" className="m-0">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription className="text-gray-400">Manage your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="m-0">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription className="text-gray-400">
                    Control how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Notification settings coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="m-0">
              <Card className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription className="text-gray-400">Manage your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Security settings coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default function SettingsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <SettingsContent />
    </Suspense>
  )
}
