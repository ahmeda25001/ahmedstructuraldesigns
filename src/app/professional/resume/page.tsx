import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Phone, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header/Contact Info */}
      <section className="text-center mb-16 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="/placeholder.svg?height=150&width=150"
            width={150}
            height={150}
            alt="Ahmed Ali"
            className="rounded-full border-4 border-primary"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Ahmed Ali</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Structural Engineer | AI Enthusiast</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Link
            href="mailto:ahmedali.structural@gmail.com"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full"
          >
            <Mail className="h-5 w-5" />
            Email
          </Link>
          <Link
            href="tel:+15135108655"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full"
          >
            <Phone className="h-5 w-5" />
            Call
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahmedali25/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Link>
        </div>
        <p className="text-muted-foreground">Permanent Resident</p>
        <Button className="mt-6" variant="outline">
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </section>

      {/* Experience */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Structural Engineer</CardTitle>
                  <CardDescription className="text-lg">TYLIN (formerly Silman) | New York City, NY</CardDescription>
                </div>
                <CardDescription className="text-right">July 2023 – Present</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Design and analyze gravity and lateral systems for diverse projects</li>
                <li>Lead teams to successfully complete projects with on-time deliverables</li>
                <li>Utilize engineering software to model and analyze structural elements</li>
                <li>Program design tools to automate repetitive processes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Structural Engineer Co-op</CardTitle>
                  <CardDescription className="text-lg">Kimley-Horn | Minneapolis, MN</CardDescription>
                </div>
                <CardDescription className="text-right">January 2022 – August 2022</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Designed and analyzed structural systems for commercial buildings and solar sites</li>
                <li>Communicated with clients and project managers to provide updates and address any concerns</li>
                <li>Led a team of 3 to complete 2 successful projects with on-time deliverables</li>
                <li>Utilized IBC, ASCE, and AISC codes to design various structural systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Field Project Engineer Co-op</CardTitle>
                  <CardDescription className="text-lg">Ulliman Schutte | Washington, DC</CardDescription>
                </div>
                <CardDescription className="text-right">August 2020 – August 2021</CardDescription>
              </div>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills & Software</h2>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="text-lg py-2 px-4">ETABS</Badge>
              <Badge className="text-lg py-2 px-4">SAFE</Badge>
              <Badge className="text-lg py-2 px-4">RISA 3D</Badge>
              <Badge className="text-lg py-2 px-4">Tekla Tedds</Badge>
              <Badge className="text-lg py-2 px-4">SAP 2000</Badge>
              <Badge className="text-lg py-2 px-4">AutoCAD</Badge>
              <Badge className="text-lg py-2 px-4">Revit</Badge>
              <Badge className="text-lg py-2 px-4">Bluebeam Revu</Badge>
              <Badge className="text-lg py-2 px-4">MathCAD</Badge>
              <Badge className="text-lg py-2 px-4">LPILE</Badge>
              <Badge className="text-lg py-2 px-4">Ram Elements</Badge>
              <Badge className="text-lg py-2 px-4">Microsoft Office</Badge>
              <Badge className="text-lg py-2 px-4">C++</Badge>
              <Badge className="text-lg py-2 px-4">Python</Badge>
              <Badge className="text-lg py-2 px-4">Teamwork</Badge>
              <Badge className="text-lg py-2 px-4">Communication</Badge>
              <Badge className="text-lg py-2 px-4">Value Engineering</Badge>
              <Badge className="text-lg py-2 px-4">Leadership</Badge>
              <Badge className="text-lg py-2 px-4">Interpersonal skills</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Bachelor in Civil Engineering</CardTitle>
                  <CardDescription>University of Cincinnati</CardDescription>
                </div>
                <div className="text-right">
                  <CardDescription>2023</CardDescription>
                  <CardDescription>GPA: 3.42</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">High School Diploma</CardTitle>
                  <CardDescription>Indian Hill High School – Cincinnati, Ohio</CardDescription>
                </div>
                <div className="text-right">
                  <CardDescription>2018</CardDescription>
                  <CardDescription>GPA: 3.74</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Arabic GCSE Certificate</CardTitle>
                  <CardDescription>Leeds, United Kingdom</CardDescription>
                </div>
                <CardDescription>2015</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Organizations */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Volunteer & Organizations</h2>
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Structural Engineering Association of New York</CardTitle>
              <CardDescription>New York City – Young Member's Committee</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Structural Engineering Association of Ohio</CardTitle>
              <CardDescription>University of Cincinnati – Vice President</CardDescription>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                <li>Communicated with the UC SEAoO board about the club's goals</li>
                <li>Organized multiple events with local Structural Engineers</li>
              </ul>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl">Steel Bridge</CardTitle>
              <CardDescription>University of Cincinnati – Design Team</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Awards */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Awards</h2>
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">University of Cincinnati Global Scholarship</CardTitle>
                <CardDescription>August 2018 – May 2023</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">College of Engineering and Applied Sciences Dean's List</CardTitle>
                <CardDescription>January 2020 – May 2023</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  )
}

