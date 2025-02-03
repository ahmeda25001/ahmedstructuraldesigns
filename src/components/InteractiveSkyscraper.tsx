"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skyscraperElements = [
  { name: "Beams", description: "Explore different beam designs, material optimizations, and load calculations." },
  {
    name: "Columns",
    description: "Discover variations in column design, reinforcement details, and structural analysis.",
  },
  { name: "Cantilever", description: "Learn about the engineering challenges and solutions behind cantilever design." },
  { name: "Column Transfer", description: "Understand load transfer optimizations and AI-assisted calculations." },
]

export function InteractiveSkyscraper() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)

  return (
    <div className="relative w-full h-[600px] bg-gray-100">
      {/* Skyscraper SVG or canvas goes here */}
      <svg className="w-full h-full" viewBox="0 0 400 600">
        {/* This is a placeholder. Replace with actual skyscraper design */}
        <rect x="100" y="0" width="200" height="600" fill="#ccc" />
        <rect
          x="50"
          y="400"
          width="300"
          height="50"
          fill="#aaa"
          className="cursor-pointer hover:fill-primary"
          onClick={() => setSelectedElement("Cantilever")}
        />
        <rect
          x="150"
          y="200"
          width="100"
          height="400"
          fill="#bbb"
          className="cursor-pointer hover:fill-primary"
          onClick={() => setSelectedElement("Columns")}
        />
        <rect
          x="100"
          y="100"
          width="200"
          height="20"
          fill="#ddd"
          className="cursor-pointer hover:fill-primary"
          onClick={() => setSelectedElement("Beams")}
        />
        <rect
          x="100"
          y="300"
          width="200"
          height="20"
          fill="#999"
          className="cursor-pointer hover:fill-primary"
          onClick={() => setSelectedElement("Column Transfer")}
        />
      </svg>

      {selectedElement && (
        <Card className="absolute top-4 right-4 w-64">
          <CardHeader>
            <CardTitle>{selectedElement}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              {skyscraperElements.find((el) => el.name === selectedElement)?.description}
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

