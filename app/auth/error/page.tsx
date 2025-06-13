import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Authentication Error | Bildur",
  description: "An error occurred during authentication",
}

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const error = searchParams.error as string | undefined

  const errorMessages: Record<string, string> = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have access to this resource.",
    Verification: "The verification link may have been used or is invalid.",
    OAuthAccountNotLinked: "This email is already associated with another account.",
    Default: "An unknown error occurred during authentication.",
  }

  const errorMessage = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 px-4 sm:px-0">
        <Card className="border-gray-800 bg-gray-900">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Authentication Error</CardTitle>
            <CardDescription className="text-gray-400">There was a problem signing you in</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 text-sm bg-red-900/30 border border-red-900 text-red-400 rounded-md">
              {errorMessage}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-gray-800 pt-4">
            <Button asChild>
              <Link href="/auth/signin">Try Again</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
