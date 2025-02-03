"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from "lucide-react"
import Link from "next/link"
import { InteractiveSkyscraper } from "@/components/InteractiveSkyscraper"

export default function ProfessionalPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Professional Work</h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Exploring the intersection of structural engineering and artificial intelligence to create innovative
          solutions for complex problems.
        </p>
        <Link href="/professional/resume">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-foreground text-white">
            <FileText className="mr-2 h-5 w-5" />
            View Full Resume
          </Button>
        </Link>
      </section>

      <Tabs defaultValue="engineering" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="engineering">Structural Engineering</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="engineering">
          <Card>
            <CardHeader>
              <CardTitle>Structural Engineering Expertise</CardTitle>
              <CardDescription>Innovative designs for sustainable and efficient structures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Structural Analysis</Badge>
                  <Badge>Seismic Design</Badge>
                  <Badge>Finite Element Analysis</Badge>
                  <Badge>Sustainable Design</Badge>
                  <Badge>Building Information Modeling (BIM)</Badge>
                </div>
                <h3 className="text-xl font-semibold mt-6">Notable Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mass Timber Office Building</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="Mass Timber Office Building"
                        className="w-full h-40 object-cover mb-4"
                      />
                      <p>
                        Innovative mass timber design incorporating sustainable materials and efficient structural
                        systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Commercial Complex</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="Commercial Complex"
                        className="w-full h-40 object-cover mb-4"
                      />
                      <p>
                        Mixed-use development featuring innovative structural solutions and sustainable design
                        principles.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tools">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Structural Design</CardTitle>
              <CardDescription>Explore key structural elements and engineering tools</CardDescription>
            </CardHeader>
            <CardContent>
              <InteractiveSkyscraper />
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Engineering Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/professional/tools/find-lightest-shape">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>Find Lightest Shape Tool</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Determine the most weight-efficient structural shape for beams and columns.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/professional/tools/structural-drawings-reader">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>Structural Drawings Reader</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>AI-powered analysis of architectural and structural drawings.</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/professional/tools/lightest-cantilever-shape">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>Lightest Cantilever Shape</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Identify the most optimized cantilever shape for material efficiency.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Collaborate</h2>
        <p className="mb-8">Interested in working together or learning more about my professional experience?</p>
        <Link href="/#contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </section>
    </main>
  )
}

