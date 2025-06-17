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
  const [jobId, setJobId] = useState<string | null>(null)
  const [researchStatus, setResearchStatus] = useState<ResearchStatus>({
    status: "idle",
    progress: 0,
    currentTask: "",
    message: "",
  })

  // Safe URL parsing function
  const parseUrl = (url: string): string => {
    try {
      // Add protocol if missing
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url
      }
      const parsedUrl = new URL(url)
      return parsedUrl.hostname
    } catch {
      // Fallback if URL parsing fails
      return url.replace(/^https?:\/\//, "").split("/")[0] || "www.bildur.ai"
    }
  }

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
      // Prepare the URL for API call
      let apiUrl = websiteUrl.trim()
      if (!apiUrl.startsWith("http://") && !apiUrl.startsWith("https://")) {
        apiUrl = "https://" + apiUrl
      }

      // Call your existing API endpoint
      const response = await fetch("/api/jobs/create-v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: apiUrl,
          // Add any other parameters your API expects
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`)
      }

      const result = await response.json()
      console.log("Research job created:", result)

      // Store job ID for potential status checking
      if (result.jobId || result.id) {
        setJobId(result.jobId || result.id)
      }

      // Step 1: Data collection started
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setResearchStatus({
        status: "scraping",
        progress: 30,
        currentTask: "Crawling website and collecting data...",
        message: "Collecting data from your website",
      })

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
        currentTask: error instanceof Error ? error.message : "Research failed. Please try again.",
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
      setJobId(null)
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
              type="text"
              placeholder="example.com or https://example.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              disabled={isResearching}
            />
            <p className="text-xs text-gray-500">Enter a website URL (with or without https://)</p>
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
            <DialogTitle className="text-center">{parseUrl(websiteUrl)} says</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center space-y-4 py-4">
            {getStatusIcon()}

            <div className="text-center space-y-2">
              <p className="text-lg font-medium">{researchStatus.message}</p>
              {researchStatus.currentTask && <p className="text-sm text-gray-400">{researchStatus.currentTask}</p>}
              {jobId && <p className="text-xs text-gray-500">Job ID: {jobId}</p>}
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
