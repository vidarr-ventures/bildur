"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export function SignInForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleOAuthSignIn = async (provider: "google" | "facebook") => {
    setIsLoading(true)

    // Simulate OAuth sign in for preview
    setTimeout(() => {
      // In a real app, this would redirect to OAuth provider
      // For preview, we'll just redirect to a success page
      router.push("/?signed-in=true")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in</CardTitle>
        <CardDescription className="text-gray-400">Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 text-sm bg-blue-900/30 border border-blue-900 text-blue-400 rounded-md">
          This is a preview version. OAuth providers are simulated for demonstration purposes.
        </div>
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white"
            onClick={() => handleOAuthSignIn("google")}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-5 w-5" aria-hidden="true">
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
            {isLoading ? "Connecting..." : "Continue with Google"}
          </Button>
          <Button
            variant="outline"
            className="w-full border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white"
            onClick={() => handleOAuthSignIn("facebook")}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-5 w-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
              />
            </svg>
            {isLoading ? "Connecting..." : "Continue with Facebook"}
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t border-gray-800 pt-4">
        <div className="text-center text-sm text-gray-400">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </div>
      </CardFooter>
    </Card>
  )
}
