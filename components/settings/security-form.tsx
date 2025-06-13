"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SecurityForm() {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      setIsDeleting(true)

      // Simulate API call
      setTimeout(() => {
        setIsDeleting(false)
        // Show success message
        alert("Account deletion request submitted. You will receive an email with further instructions.")
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Connected Accounts</h3>
        <p className="text-gray-400">Manage your connected OAuth accounts</p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-950 p-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
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
              <div>
                <p className="font-medium">Google</p>
                <p className="text-sm text-gray-400">Connected</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Disconnect
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-950 p-4">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                />
              </svg>
              <div>
                <p className="font-medium">Facebook</p>
                <p className="text-sm text-gray-400">Not connected</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Connect
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Danger Zone</h3>
        <Card className="border-red-900/50 bg-red-950/20">
          <CardHeader>
            <CardTitle className="text-red-400">Delete Account</CardTitle>
            <CardDescription className="text-red-300/70">
              Permanently delete your account and all associated data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-red-300/70 mb-4">
              This action cannot be undone. Once you delete your account, all your data will be permanently removed.
            </p>
            <Button variant="destructive" onClick={handleDeleteAccount} disabled={isDeleting}>
              {isDeleting ? "Processing..." : "Delete Account"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
