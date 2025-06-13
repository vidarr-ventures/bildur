// Simplified auth for v0 preview (no database required)
export const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  image: "/placeholder.svg?height=40&width=40&text=JD",
}

export const authOptions = {
  // Mock auth configuration for preview
  providers: [],
  callbacks: {
    async session() {
      return {
        user: mockUser,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      }
    },
  },
}
