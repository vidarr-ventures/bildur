"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { User } from "next-auth"

interface SettingsFormProps {
  user: User
}

export function SettingsForm({ user }: SettingsFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Show success message
      alert("Profile updated successfully!")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.image || ""} alt={user.name || "User"} />
            <AvatarFallback className="text-lg">{user.name?.charAt(0) || user.email?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white"
            >
              Change Avatar
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700"
              disabled
            />
            <p className="text-xs text-gray-400">Email cannot be changed for OAuth accounts.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  )
}
