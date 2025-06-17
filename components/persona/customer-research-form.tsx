"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Loader2, CheckCircle, AlertCircle, Globe } from "lucide-react"

interface ResearchStatus {
  status: "idle" | "initializing" | "scraping" | "analyzing" | "complete" | "error"
  progress: number
  currentTask: string
  message: string
}

export default function CustomerResearchForm() {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [isResearching, setIsResearching] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [researchStatus, setResearchStatus] = useState<ResearchStatus>({
    status: "idle",
    progress: 0,
    currentTask: "",
    message: "",
  })

  const startResearch = async () => {
    if (!websiteUrl.trim()) return

    setIsResearching(true)
    setShowModal(true)

    // Initialize research
    setResearchStatus({
      status: "initializing",
      progress: 10,
      currentTask: "Initializing research process...",
      message: "Research started!",
    })

    try {
      // Step 1: Start data collection
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setResearchStatus({
        status: "scraping",
        progress: 30,
        currentTask: "Crawling website and collecting data...",
        message: "Collecting data from your website",
      })

      // Call your actual API endpoint
      const response = await fetch("/api/research/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: websiteUrl }),
      })

      if (!response.ok) {
        throw new Error("Failed to start research")
      }

      const result = await response.json()
      console.log("Research started:", result)

      // Step 2: Processing data
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setResearchStatus({
        status: "scraping",
        progress: 60,
        currentTask: "Processing collected data...",
        message: "Analyzing website content",
      })

      // Step 3: AI Analysis
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setResearchStatus({
        status: "analyzing",
        progress: 80,
        currentTask: "Running AI analysis on collected data...",
        message: "AI analysis in progress",
      })

      // Step 4: Complete
      await new Promise((resolve) => setTimeout(resolve, 3000))

      setResearchStatus({
        status: "complete",
        progress: 100,
        currentTask: "Analysis complete!",
        message: "Research completed successfully!",
      })
    } catch (error) {
      console.error("Research failed:", error)
      setResearchStatus({
        status: "error",
        progress: 0,
        currentTask: "Research failed. Please try again.",
        message: "An error occurred during research",
      })
    } finally {
      setIsResearching(false)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    if (researchStatus.status === "complete") {
      // Reset form or redirect to results
      setWebsiteUrl("")
    }
    setResearchStatus({
      status: "idle",
      progress: 0,
      currentTask: "",
      message: "",
    })
  }

  const getStatusIcon = () => {
    switch (researchStatus.status) {
      case "complete":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "error":
        return <AlertCircle className="h-6 w-6 text-red-500" />
      case "idle":
        return <Globe className="h-6 w-6 text-blue-500" />
      default:
        return <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
    }
  }

  const isProcessing =
    researchStatus.status === "initializing" ||
    researchStatus.status === "scraping" ||
    researchStatus.status === "analyzing"

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Customer Research
          </CardTitle>
          <CardDescription>
            Enter your website URL to start comprehensive customer research and analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="website-url">Website URL</Label>
            <Input
              id="website-url"
              type="url"
              placeholder="https://example.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              disabled={isResearching}
            />
          </div>

          <Button onClick={startResearch} disabled={!websiteUrl.trim() || isResearching} className="w-full" size="lg">
            {isResearching ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Researching...
              </>
            ) : (
              "Start Research"
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Research Status Modal */}
      <Dialog open={showModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-center">
              {new URL(websiteUrl || "https://example.com").hostname} says
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center space-y-4 py-4">
            {getStatusIcon()}

            <div className="text-center space-y-2">
              <p className="text-lg font-medium">{researchStatus.message}</p>
              {researchStatus.currentTask && <p className="text-sm text-gray-400">{researchStatus.currentTask}</p>}
            </div>

            {/* Progress bar - only show when processing */}
            {isProcessing && (
              <div className="w-full space-y-2">
                <Progress value={researchStatus.progress} className="w-full" />
                <p className="text-xs text-gray-500 text-center">{researchStatus.progress}% complete</p>
              </div>
            )}

            <Button
              onClick={handleCloseModal}
              className="w-full"
              variant={researchStatus.status === "error" ? "destructive" : "default"}
              disabled={isProcessing}
            >
              {researchStatus.status === "complete" || researchStatus.status === "error" ? "OK" : "Cancel"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
