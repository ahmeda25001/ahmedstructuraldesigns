import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <Image
          src="/placeholder.svg?height=200&width=200"
          width={200}
          height={200}
          alt="Your Name"
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Engineer | Innovator | Builder of Ideas</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Bridging the worlds of structural engineering and AI development to create innovative solutions for tomorrow's
          challenges.
        </p>
      </section>

      {/* About Me Section */}
      <section className="mb-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="mb-4">
          My journey has taken me from the rich history of Egypt to the modern landscapes of Saudi Arabia, the academic
          halls of the UK, and the innovative tech hubs of the US. This diverse background has shaped my perspective and
          fueled my passion for engineering and technology.
        </p>
        <p>
          As a structural engineer and AI developer, I combine traditional engineering principles with cutting-edge AI
          technologies to solve complex problems and push the boundaries of what's possible in both fields.
        </p>
      </section>

      {/* Professional Preview */}
      <section className="mb-16 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Structural Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Designing sustainable and innovative structures that push the boundaries of modern architecture.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Creating intelligent systems that enhance decision-making and automate complex processes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
            </CardContent>
            <CardHeader>
              <CardTitle>AI-Powered Structural Analysis</CardTitle>
              <CardDescription>
                An innovative tool that uses machine learning to optimize structural designs for efficiency and
                sustainability.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
            </CardContent>
            <CardHeader>
              <CardTitle>Smart City Infrastructure</CardTitle>
              <CardDescription>
                A comprehensive system integrating IoT sensors with AI for real-time monitoring and management of urban
                structures.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Personal Section */}
      <section className="mb-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Personal Interests</h2>
        <p className="mb-4">
          Beyond my professional pursuits, I'm passionate about staying active and exploring the world. You'll often
          find me:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>In the boxing ring, honing my skills and staying fit</li>
          <li>On the soccer field, enjoying the beautiful game with friends</li>
          <li>Planning my next travel adventure to experience new cultures</li>
          <li>Practicing languages - I'm fluent in Arabic, English, and currently learning Spanish</li>
        </ul>
        <p>These diverse interests fuel my creativity and bring fresh perspectives to my professional work.</p>
      </section>

      {/* Big Buttons */}
      <section className="mb-16 w-full">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <Link href="/professional">
            <Button size="lg" className="w-full md:w-auto">
              Explore Professional Work
            </Button>
          </Link>
          <Link href="/personal">
            <Button size="lg" variant="outline" className="w-full md:w-auto">
              Discover Personal Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact & Socials */}
      <section className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="mailto:your.email@example.com">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Interested in collaborating? Send me a message!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

