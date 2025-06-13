"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function ProfileContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check if user is signed in (for preview demo)
    if (searchParams.get("signed-in") === "true" || localStorage.getItem("demo-auth") === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/auth/signin?callbackUrl=/profile")
    }
  }, [router, searchParams])

  if (!isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const user = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image: "/placeholder.svg?height=40&width=40&text=JD",
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Profile</h1>
            <p className="text-gray-400 md:text-xl">Manage your account and preferences</p>
          </div>
        </div>

        <Card className="border-gray-800 bg-gray-900">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-lg">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription className="text-gray-400">{user.email}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Account Information</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Email</p>
                  <p>{user.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Account Type</p>
                  <p>Free Plan</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Member Since</p>
                  <p>June 2025</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Subscription</h3>
              <p className="text-gray-400">You are currently on the Free Plan.</p>
              <Button asChild>
                <Link href="/pricing">Upgrade Plan</Link>
              </Button>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Connected Accounts</h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-800 bg-gray-900">
          <CardHeader>
            <CardTitle>Your Personas</CardTitle>
            <CardDescription className="text-gray-400">Manage your customer personas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-gray-800 bg-gray-950 p-6 text-center">
              <p className="text-gray-400">You haven't created any personas yet.</p>
              <Button className="mt-4" asChild>
                <Link href="/persona#persona-creator">Create Your First Persona</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <ProfileContent />
    </Suspense>
  )
}
