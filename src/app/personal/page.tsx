"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const hobbies = [
  {
    name: "Boxing",
    icon: "🥊",
    description: "Dodge, weave, and strike—boxing isn't just a workout, it's strategy in motion.",
  },
  {
    name: "Soccer",
    icon: "⚽",
    description: "Growing up in Egypt, street soccer was life. Now, it's my way of staying sharp and connected.",
  },
  {
    name: "Running",
    icon: "🏃",
    description: "Some run for fitness, I run for the thrill—every mile is a personal challenge.",
  },
  {
    name: "Exploring the City",
    icon: "🏙️",
    description:
      "From hidden coffee shops to late-night skyline views, the city is an adventure waiting to be explored.",
  },
]

const projects = [
  {
    name: "Robot Development",
    icon: "🤖",
    description:
      "Building a robot isn't just about code and circuits—it's about creating something that moves, reacts, and even thinks.",
  },
  {
    name: "Raspberry Pi Projects",
    icon: "📡",
    description: "Tiny computers, endless possibilities. Automating my world one project at a time.",
  },
  {
    name: "3D Printing",
    icon: "🖨️",
    description: "Taking ideas from my mind and bringing them to life—layer by layer, filament by filament.",
  },
]

const journey = [
  { country: "Egypt", flag: "🇪🇬", description: "Where it all started—the culture, the energy, the roots of who I am." },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    description: "A short but impactful time, learning adaptability at an early age.",
  },
  {
    country: "UK",
    flag: "🇬🇧",
    description: "A new world of football (soccer!), school, and experiences that shaped my global perspective.",
  },
  {
    country: "USA",
    flag: "🇺🇸",
    description: "The biggest leap—turning challenges into opportunities, making this place home.",
  },
]

export default function PersonalPage() {
  const [activeHobby, setActiveHobby] = useState(hobbies[0].name)
  const [activeProject, setActiveProject] = useState(projects[0].name)
  const [activeCountry, setActiveCountry] = useState(journey[0].country)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-12">The Personal Side</h1>

      <Tabs defaultValue="fun" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fun">The Fun Side</TabsTrigger>
          <TabsTrigger value="builder">The Builder's Mind</TabsTrigger>
          <TabsTrigger value="journey">The Journey</TabsTrigger>
        </TabsList>

        <TabsContent value="fun">
          <Card>
            <CardHeader>
              <CardTitle>The Fun Side 🎉</CardTitle>
              <CardDescription>Explore my hobbies and interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {hobbies.map((hobby) => (
                  <Card
                    key={hobby.name}
                    className={`cursor-pointer transition-all ${activeHobby === hobby.name ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setActiveHobby(hobby.name)}
                  >
                    <CardHeader>
                      <CardTitle className="text-center text-4xl">{hobby.icon}</CardTitle>
                      <CardDescription className="text-center">{hobby.name}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <Card>
                <CardContent>
                  <p>{hobbies.find((h) => h.name === activeHobby)?.description}</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builder">
          <Card>
            <CardHeader>
              <CardTitle>The Builder's Mind 🤖</CardTitle>
              <CardDescription>Discover my tech projects and creations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {projects.map((project) => (
                  <Card
                    key={project.name}
                    className={`cursor-pointer transition-all ${activeProject === project.name ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setActiveProject(project.name)}
                  >
                    <CardHeader>
                      <CardTitle className="text-center text-4xl">{project.icon}</CardTitle>
                      <CardDescription className="text-center">{project.name}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <Card>
                <CardContent>
                  <p>{projects.find((p) => p.name === activeProject)?.description}</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="journey">
          <Card>
            <CardHeader>
              <CardTitle>The Journey 🌍</CardTitle>
              <CardDescription>Follow my path across the globe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-8">
                {journey.map((stop) => (
                  <Card
                    key={stop.country}
                    className={`cursor-pointer transition-all ${activeCountry === stop.country ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setActiveCountry(stop.country)}
                  >
                    <CardHeader>
                      <CardTitle className="text-center text-4xl">{stop.flag}</CardTitle>
                      <CardDescription className="text-center">{stop.country}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <Card>
                <CardContent>
                  <p>{journey.find((j) => j.country === activeCountry)?.description}</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

