"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body className="bg-black">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-10 w-10 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
                  <p className="text-gray-400">
                    We encountered an unexpected error. Please try refreshing the page or go back to the home page.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button onClick={reset} className="w-full bg-red-600 hover:bg-red-700">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    <a href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Go Home
                    </a>
                  </Button>
                </div>

                {error.digest && (
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <p className="text-xs text-gray-500">Error ID: {error.digest}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </body>
    </html>
  )
}
