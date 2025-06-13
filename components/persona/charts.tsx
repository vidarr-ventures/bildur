"use client"

import { useEffect, useRef } from "react"

export function PieChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Simple pie chart simulation
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    const data = [
      { value: 30, color: "#8b5cf6" },
      { value: 25, color: "#3b82f6" },
      { value: 20, color: "#10b981" },
      { value: 15, color: "#f59e0b" },
      { value: 10, color: "#ef4444" },
    ]

    let startAngle = 0

    data.forEach((segment) => {
      const segmentAngle = (segment.value / 100) * 2 * Math.PI

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + segmentAngle)
      ctx.closePath()

      ctx.fillStyle = segment.color
      ctx.fill()

      startAngle += segmentAngle
    })
  }, [])

  return <canvas ref={canvasRef} width={200} height={200} />
}

export function BarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Simple bar chart simulation
    const data = [
      { label: "High", value: 70, color: "#8b5cf6" },
      { label: "Medium", value: 50, color: "#3b82f6" },
      { label: "Low", value: 30, color: "#10b981" },
      { label: "None", value: 15, color: "#f59e0b" },
    ]

    const barWidth = 30
    const spacing = 20
    const startX = 40
    const startY = 180

    data.forEach((item, index) => {
      const x = startX + index * (barWidth + spacing)
      const height = item.value * 1.5

      ctx.fillStyle = item.color
      ctx.fillRect(x, startY - height, barWidth, height)

      ctx.fillStyle = "#888"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(item.label, x + barWidth / 2, startY + 15)
    })
  }, [])

  return <canvas ref={canvasRef} width={200} height={200} />
}

export function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Simple radar chart simulation
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20

    const categories = 5
    const angleStep = (Math.PI * 2) / categories

    // Draw axes
    for (let i = 0; i < categories; i++) {
      const angle = i * angleStep
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "#444"
      ctx.stroke()
    }

    // Draw data
    const data = [0.8, 0.6, 0.9, 0.7, 0.5]
    const points: [number, number][] = []

    for (let i = 0; i < categories; i++) {
      const angle = i * angleStep
      const value = data[i]
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)
      points.push([x, y])
    }

    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1])
    }
    ctx.lineTo(points[0][0], points[0][1])
    ctx.fillStyle = "rgba(139, 92, 246, 0.3)"
    ctx.fill()
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 2
    ctx.stroke()
  }, [])

  return <canvas ref={canvasRef} width={200} height={200} />
}
