"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function SignOutForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await signOut({ callbackUrl: "/" })
    } catch (error) {
      console.error("Sign out error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="border-gray-800 bg-gray-900">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign out</CardTitle>
        <CardDescription className="text-gray-400">Are you sure you want to sign out?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">You will be logged out of your Bildur account.</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
        <Button variant="outline" asChild className="border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white">
          <Link href="/">Cancel</Link>
        </Button>
        <Button onClick={handleSignOut} disabled={isLoading}>
          {isLoading ? "Signing out..." : "Sign out"}
        </Button>
      </CardFooter>
    </Card>
  )
}
