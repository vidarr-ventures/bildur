"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function PersonaCreator() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate API call to your backend
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <section id="persona-creator" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Create Your Customer Persona</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Input your customer data and let our AI generate a comprehensive psychological profile
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="behaviors">Behaviors</TabsTrigger>
              <TabsTrigger value="psychology">Psychology</TabsTrigger>
            </TabsList>
            <Card className="mt-6 border-0 shadow-lg">
              <TabsContent value="basic" className="m-0">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the fundamental details about your customer persona.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="persona-name">Persona Name</Label>
                      <Input id="persona-name" placeholder="e.g., Marketing Manager Melissa" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger id="industry">
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
                      <Label htmlFor="age-range">Age Range</Label>
                      <Select>
                        <SelectTrigger id="age-range">
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
                      <Label htmlFor="role">Role/Position</Label>
                      <Input id="role" placeholder="e.g., Marketing Manager" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-size">Company Size</Label>
                      <Select>
                        <SelectTrigger id="company-size">
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
                      <Label htmlFor="decision-making">Decision Making Power</Label>
                      <Select>
                        <SelectTrigger id="decision-making">
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
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Clear</Button>
                  <Button>Next</Button>
                </CardFooter>
              </TabsContent>
              <TabsContent value="behaviors" className="m-0">
                <CardHeader>
                  <CardTitle>Behaviors & Preferences</CardTitle>
                  <CardDescription>Describe how your persona behaves and what they prefer.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="goals">Goals & Objectives</Label>
                      <Textarea id="goals" placeholder="What are they trying to achieve?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pain-points">Pain Points & Challenges</Label>
                      <Textarea id="pain-points" placeholder="What problems are they facing?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="information-sources">Information Sources</Label>
                      <Textarea
                        id="information-sources"
                        placeholder="Where do they get their information? (blogs, social media, etc.)"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Tech Savviness</Label>
                      <div className="pt-2">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back</Button>
                  <Button>Next</Button>
                </CardFooter>
              </TabsContent>
              <TabsContent value="psychology" className="m-0">
                <CardHeader>
                  <CardTitle>Psychological Profile</CardTitle>
                  <CardDescription>Define the psychological characteristics of your persona.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Analytical vs. Intuitive</Label>
                      <div className="pt-2">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>Analytical</span>
                          <span>Balanced</span>
                          <span>Intuitive</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Risk Averse vs. Risk Taking</Label>
                      <div className="pt-2">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>Risk Averse</span>
                          <span>Balanced</span>
                          <span>Risk Taking</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Detail-Oriented vs. Big Picture</Label>
                      <div className="pt-2">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                          <span>Detail-Oriented</span>
                          <span>Balanced</span>
                          <span>Big Picture</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="keywords">Key Psychological Traits</Label>
                      <Textarea
                        id="keywords"
                        placeholder="Enter 3 separate keywords that describe this persona's psychology (e.g., analytical, cautious, collaborative)"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Back</Button>
                  <Button onClick={handleGenerate} disabled={isGenerating}>
                    {isGenerating ? "Generating..." : "Generate Persona"}
                  </Button>
                </CardFooter>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
