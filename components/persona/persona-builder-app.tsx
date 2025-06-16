"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, User, Building, Brain, Target } from 'lucide-react'
import { useRouter } from "next/navigation"

interface FormData {
  // Step 1: Basic Info
  personaName: string
  industry: string
  ageRange: string
  role: string
  companySize: string
  decisionMaking: string

  // Step 2: Goals & Challenges
  goals: string
  painPoints: string
  informationSources: string

  // Step 3: Psychological Profile
  cognitiveStyle: string
  riskTolerance: string
  communicationStyle: string
  keywords: string
}

export default function PersonaBuilderApp() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    personaName: "",
    industry: "",
    ageRange: "",
    role: "",
    companySize: "",
    decisionMaking: "",
    goals: "",
    painPoints: "",
    informationSources: "",
    cognitiveStyle: "",
    riskTolerance: "",
    communicationStyle: "",
    keywords: "",
  })
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication - for demo purposes, we'll create a mock user
    const authState = localStorage.getItem("demo-auth")
    const userData = localStorage.getItem("demo-user")

    if (!authState || authState !== "true") {
      // For demo purposes, auto-authenticate
      localStorage.setItem("demo-auth", "true")
      localStorage.setItem("demo-user", JSON.stringify({ name: "Demo User", email: "demo@example.com" }))
      setUser({ name: "Demo User", email: "demo@example.com" })
    } else if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle persona creation
    console.log("Creating persona:", formData)
    // Save to localStorage for demo
    const personas = JSON.parse(localStorage.getItem("demo-personas") || "[]")
    personas.push({ ...formData, id: Date.now(), createdAt: new Date().toISOString() })
    localStorage.setItem("demo-personas", JSON.stringify(personas))
    
    alert("Persona created successfully! (This is a demo)")
    router.push("/persona")
  }

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <User className="h-5 w-5" />
      case 2:
        return <Target className="h-5 w-5" />
      case 3:
        return <Brain className="h-5 w-5" />
      case 4:
        return <Building className="h-5 w-5" />
      default:
        return <User className="h-5 w-5" />
    }
  }

  const progress = (currentStep / 4) * 100

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Bildur
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Welcome, {user.name}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Persona Builder
          </h1>
          <p className="text-gray-200 text-lg">Create a detailed customer persona in 4 simple steps</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of 4</span>
            <span className="text-sm text-gray-400">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step <= currentStep ? "bg-purple-600 border-purple-600 text-white" : "border-gray-600 text-gray-400"
                }`}
              >
                {getStepIcon(step)}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <User className="mr-2 h-6 w-6" />
                  Basic Information
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Let's start with the fundamental details about your customer persona
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="personaName" className="text-white">
                      Persona Name
                    </Label>
                    <Input
                      id="personaName"
                      placeholder="e.g., Marketing Manager Melissa"
                      value={formData.personaName}
                      onChange={(e) => handleInputChange("personaName", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white">
                      Industry
                    </Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saas">SaaS</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ageRange" className="text-white">
                      Age Range
                    </Label>
                    <Select value={formData.ageRange} onValueChange={(value) => handleInputChange("ageRange", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-24">18-24</SelectItem>
                        <SelectItem value="25-34">25-34</SelectItem>
                        <SelectItem value="35-44">35-44</SelectItem>
                        <SelectItem value="45-54">45-54</SelectItem>
                        <SelectItem value="55-64">55-64</SelectItem>
                        <SelectItem value="65+">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-white">
                      Role/Position
                    </Label>
                    <Input
                      id="role"
                      placeholder="e.g., Marketing Manager"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companySize" className="text-white">
                      Company Size
                    </Label>
                    <Select
                      value={formData.companySize}
                      onValueChange={(value) => handleInputChange("companySize", value)}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="decisionMaking" className="text-white">
                      Decision Making Power
                    </Label>
                    <Select
                      value={formData.decisionMaking}
                      onValueChange={(value) => handleInputChange("decisionMaking", value)}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select decision making power" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole-decision-maker">Sole Decision Maker</SelectItem>
                        <SelectItem value="key-influencer">Key Influencer</SelectItem>
                        <SelectItem value="part-of-committee">Part of Committee</SelectItem>
                        <SelectItem value="recommender">Recommender</SelectItem>
                        <SelectItem value="no-influence">No Influence</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Target className="mr-2 h-6 w-6" />
                  Goals & Challenges
                </CardTitle>
                <CardDescription className="text-gray-200">
                  What drives your persona and what challenges do they face?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-white">
                    Goals & Objectives
                  </Label>
                  <Textarea
                    id="goals"
                    placeholder="What are they trying to achieve?"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="painPoints" className="text-white">
                    Pain Points & Challenges
                  </Label>
                  <Textarea
                    id="painPoints"
                    placeholder="What problems are they facing?"
                    value={formData.painPoints}
                    onChange={(e) => handleInputChange("painPoints", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="informationSources" className="text-white">
                    Information Sources
                  </Label>
                  <Textarea
                    id="informationSources"
                    placeholder="Where do they get their information? (blogs, social media, etc.)"
                    value={formData.informationSources}
                    onChange={(e) => handleInputChange("informationSources", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                  />
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Brain className="mr-2 h-6 w-6" />
                  Psychological Profile
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Define the psychological characteristics of your persona
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cognitiveStyle" className="text-white">
                    Cognitive Style
                  </Label>
                  <Select
                    value={formData.cognitiveStyle}
                    onValueChange={(value) => handleInputChange("cognitiveStyle", value)}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select cognitive style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analytical">Analytical</SelectItem>
                      <SelectItem value="intuitive">Intuitive</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="riskTolerance" className="text-white">
                    Risk Tolerance
                  </Label>
                  <Select
                    value={formData.riskTolerance}
                    onValueChange={(value) => handleInputChange("riskTolerance", value)}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select risk tolerance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="risk-averse">Risk Averse</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="risk-taking">Risk Taking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communicationStyle" className="text-white">
                    Communication Style
                  </Label>
                  <Select
                    value={formData.communicationStyle}
                    onValueChange={(value) => handleInputChange("communicationStyle", value)}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select communication style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct">Direct</SelectItem>
                      <SelectItem value="collaborative">Collaborative</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords" className="text-white">
                    Key Psychological Traits
                  </Label>
                  <Textarea
                    id="keywords"
                    placeholder="Enter 3-5 keywords that describe this persona's psychology (e.g., analytical, cautious, collaborative)"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange("keywords", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                  />
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 4 && (
            <>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Building className="mr-2 h-6 w-6" />
                  Review & Create
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Review your persona details and create your customer profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">{formData.personaName || "Your Persona"}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Industry:</span>
                      <span className="text-white ml-2">{formData.industry || "Not specified"}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Age Range:</span>
                      <span className="text-white ml-2">{formData.ageRange || "Not specified"}</span>
                    </div>
                    <div>
                      <span className="
