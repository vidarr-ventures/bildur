"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationsForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    updates: true,
    tips: false,
  })

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Show success message
      alert("Notification preferences updated successfully!")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <p className="text-sm text-gray-400">Receive notifications via email</p>
          </div>
          <Switch
            id="email-notifications"
            checked={notifications.email}
            onCheckedChange={() => handleToggle("email")}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing-emails">Marketing Emails</Label>
            <p className="text-sm text-gray-400">Receive marketing emails and offers</p>
          </div>
          <Switch
            id="marketing-emails"
            checked={notifications.marketing}
            onCheckedChange={() => handleToggle("marketing")}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="product-updates">Product Updates</Label>
            <p className="text-sm text-gray-400">Receive updates about new features and improvements</p>
          </div>
          <Switch
            id="product-updates"
            checked={notifications.updates}
            onCheckedChange={() => handleToggle("updates")}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="tips-tutorials">Tips & Tutorials</Label>
            <p className="text-sm text-gray-400">Receive tips and tutorials to get the most out of Bildur</p>
          </div>
          <Switch id="tips-tutorials" checked={notifications.tips} onCheckedChange={() => handleToggle("tips")} />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Preferences"}
        </Button>
      </div>
    </form>
  )
}
