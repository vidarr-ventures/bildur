import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-8 text-center">
            <div className="animate-pulse">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full animate-bounce"></div>
              </div>
              <div className="h-6 bg-gray-800 rounded mb-2 mx-auto w-32"></div>
              <div className="h-4 bg-gray-800 rounded mb-4 mx-auto w-48"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-800 rounded"></div>
                <div className="h-3 bg-gray-800 rounded w-5/6 mx-auto"></div>
                <div className="h-3 bg-gray-800 rounded w-4/6 mx-auto"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
