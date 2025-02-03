import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Link href="/" className="text-xl font-bold">
        Your Name
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/#services" className="text-gray-600 hover:text-gray-900">
          Services
        </Link>
        <Link href="/#projects" className="text-gray-600 hover:text-gray-900">
          Projects
        </Link>
        <Link href="/#about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link href="/#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
        <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
      </nav>
    </header>
  )
}

