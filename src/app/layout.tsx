import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Engineer & Innovator",
  description: "Personal and professional portfolio of a structural engineer and AI developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between p-4 bg-white shadow-sm">
          <Link href="/" className="text-xl font-bold">
            Your Name
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/professional" className="text-gray-600 hover:text-gray-900">
              Professional
            </Link>
            <Link href="/personal" className="text-gray-600 hover:text-gray-900">
              Personal
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

