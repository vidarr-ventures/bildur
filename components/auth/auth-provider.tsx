"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  image: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: () => void
  signOut: () => void
  status: "loading" | "authenticated" | "unauthenticated"
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("unauthenticated")

  const signIn = () => {
    setUser({
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      image: "/placeholder.svg?height=40&width=40&text=JD",
    })
    setStatus("authenticated")
  }

  const signOut = () => {
    setUser(null)
    setStatus("unauthenticated")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: status === "authenticated",
        signIn,
        signOut,
        status,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useSession() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useSession must be used within an AuthProvider")
  }
  return {
    data: context.user ? { user: context.user } : null,
    status: context.status,
  }
}

export function signIn() {
  // Mock sign in for preview
  window.location.href = "/auth/signin"
}

export function signOut() {
  // Mock sign out for preview
  window.location.href = "/"
}
