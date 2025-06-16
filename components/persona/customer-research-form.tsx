"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { InfoIcon } from "lucide-react"
import Link from "next/link"

export default function CustomerResearchForm() {
  const [formData, setFormData] = useState({
    websiteUrl: "",
    amazonUrl: "",
    primaryKeywords: "",
    secondaryKeywords: "",
    additionalKeywords: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Research started! (This is a demo - the AI analysis would begin here)")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Bildur
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Persona Builder</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Customer Persona Research
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Enter your business details and keywords to generate comprehensive customer personas powered by AI
          </p>
        </div>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Research Parameters</CardTitle>
            <CardDescription className="text-gray-200">
              Provide your website and keyword information to generate accurate customer personas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Website URL */}
              <div className="space-y-2">
                <Label htmlFor="websiteUrl" className="text-white font-medium">
                  Website URL
                </Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  placeholder="https://your-website.com"
                  value={formData.websiteUrl}
                  onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {/* Amazon Product URL */}
              <div className="space-y-2">
                <Label htmlFor="amazonUrl" className="text-white font-medium">
                  Amazon Product URL <span className="text-gray-400">(Optional)</span>
                </Label>
                <Input
                  id="amazonUrl"
                  type="url"
                  placeholder="https://amazon.com/your-product"
                  value={formData.amazonUrl}
                  onChange={(e) => handleInputChange("amazonUrl", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {/* Primary Keywords */}
              <div className="space-y-2">
                <Label htmlFor="primaryKeywords" className="text-white font-medium">
                  Primary Keywords <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="primaryKeywords"
                  placeholder="Main product or topic keywords"
                  value={formData.primaryKeywords}
                  onChange={(e) => handleInputChange("primaryKeywords", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 min-h-[80px]"
                  required
                />
                <p className="text-gray-400 text-sm">Main product or topic keywords</p>
              </div>

              {/* Secondary Keywords */}
              <div className="space-y-2">
                <Label htmlFor="secondaryKeywords" className="text-white font-medium">
                  Secondary Keywords <span className="text-gray-400">(Optional)</span>
                </Label>
                <Textarea
                  id="secondaryKeywords"
                  placeholder="Related or alternative terms"
                  value={formData.secondaryKeywords}
                  onChange={(e) => handleInputChange("secondaryKeywords", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 min-h-[80px]"
                />
                <p className="text-gray-400 text-sm">Related or alternative terms</p>
              </div>

              {/* Additional Keywords */}
              <div className="space-y-2">
                <Label htmlFor="additionalKeywords" className="text-white font-medium">
                  Additional Keywords <span className="text-gray-400">(Optional)</span>
                </Label>
                <Textarea
                  id="additionalKeywords"
                  placeholder="Broader problem or benefit keywords"
                  value={formData.additionalKeywords}
                  onChange={(e) => handleInputChange("additionalKeywords", e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 min-h-[80px]"
                />
                <p className="text-gray-400 text-sm">Broader problem or benefit keywords</p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 text-lg"
              >
                Start Customer Research
              </Button>

              {/* Tip Section */}
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <InfoIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-blue-200 font-medium mb-1">Tip:</p>
                    <p className="text-blue-100 text-sm">
                      Use different keyword fields to capture various aspects - primary (main product), secondary
                      (alternatives), additional (problems/benefits).
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
