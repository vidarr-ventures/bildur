import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">404</h1>
              <h2 className="text-xl font-semibold text-gray-300 mb-2">Page Not Found</h2>
              <p className="text-gray-400">Sorry, we couldn't find the page you're looking for.</p>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Link href="/tools">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Browse Tools
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
