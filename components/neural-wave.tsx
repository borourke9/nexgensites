"use client"

import { useEffect, useRef } from "react"

const NeuralWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation parameters
    let time = 0
    const points: { x: number; y: number; speed: number }[] = []
    const numPoints = 400 // More points for denser pattern
    const amplitude = 150 // Larger amplitude
    const frequency = 0.0002 // Lower frequency for wider waves

    // Initialize points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: (canvas.width / numPoints) * i,
        y: canvas.height / 2,
        speed: 0.05 + Math.random() * 0.05, // Very slow speed
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw multiple wave layers
      for (let layer = 0; layer < 5; layer++) { // More layers
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 128, 128, ${0.08 - layer * 0.01})` // Softer opacity
        ctx.lineWidth = 3 // Increased line width

        for (let i = 0; i < points.length; i++) {
          const point = points[i]
          // Create multiple overlapping waves
          const wave1 = Math.sin(time * point.speed + point.x * frequency) * amplitude
          const wave2 = Math.sin(time * point.speed * 0.5 + point.x * frequency * 1.5) * (amplitude * 0.5)
          const wave3 = Math.sin(time * point.speed * 0.25 + point.x * frequency * 2) * (amplitude * 0.25)
          const wave4 = Math.sin(time * point.speed * 0.125 + point.x * frequency * 2.5) * (amplitude * 0.125)
          
          // Add layer offset and vertical spread
          const layerOffset = layer * 60
          const verticalSpread = Math.sin(point.x * 0.01) * 50
          point.y = canvas.height / 2 + wave1 + wave2 + wave3 + wave4 + layerOffset + verticalSpread

          if (i === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }

        ctx.stroke()
      }

      time += 0.002 // Very slow time increment
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default NeuralWave 