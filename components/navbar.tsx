"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut, Settings } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // Simple demo authentication state (no useSearchParams or session needed)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const user = isAuthenticated
    ? {
        name: "John Doe",
        email: "john@example.com",
        image: "/placeholder.svg?height=40&width=40&text=JD",
      }
    : null

  const handleSignOut = () => {
    setIsAuthenticated(false)
    router.push("/")
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "Persona Builder", href: "/persona" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold gradient-text">Bildur</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.image || ""} alt={user.name || ""} />
                      <AvatarFallback className="bg-purple-500">{user.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {user.name && <p className="font-medium text-white">{user.name}</p>}
                      {user.email && <p className="w-[200px] truncate text-sm text-gray-400">{user.email}</p>}
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem asChild className="text-gray-300 focus:text-white focus:bg-gray-800">
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-gray-300 focus:text-white focus:bg-gray-800">
                    <Link href="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    className="text-gray-300 focus:text-white focus:bg-gray-800 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
                  <Link href="/auth/signin">Sign in</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/auth/signin">Get Started</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-800 pt-4 pb-3">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center px-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.image || ""} alt={user.name || ""} />
                        <AvatarFallback className="bg-purple-500">{user.name?.charAt(0) || "U"}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">{user.name}</div>
                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/profile"
                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          handleSignOut()
                          setIsOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 px-3">
                    <Link
                      href="/auth/signin"
                      className="block text-gray-300 hover:text-white text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/auth/signin"
                      className="block bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
