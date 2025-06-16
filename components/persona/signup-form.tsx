"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      // For demo purposes, store auth state in localStorage
      localStorage.setItem("demo-auth", "true")
      localStorage.setItem("demo-user", JSON.stringify({ name: name || "Demo User", email }))
      
      // Redirect to persona creator
      window.location.href = "/persona#persona-creator"
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Get Started Today</h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up now to start building detailed customer personas for your business
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-md py-12">
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">Create Your Account</CardTitle>
              <CardDescription className="text-gray-200 text-center">
                Start building customer personas in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Get Started Free"}
                </Button>
                <div className="text-center">
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800" asChild>
                    <Link href="/persona/builder">
                      Skip to Builder →
                    </Link>
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center text-sm text-gray-400">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
