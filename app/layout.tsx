import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bildur | E-commerce Toolset",
  description: "Powerful tools for e-commerce operators",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Bildur
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="https://app.bildur.com" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Persona Builder
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-950 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Bildur. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
