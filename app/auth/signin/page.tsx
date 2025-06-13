import type { Metadata } from "next"
import { SignInForm } from "@/components/auth/signin-form"

export const metadata: Metadata = {
  title: "Sign In | Bildur",
  description: "Sign in to your Bildur account",
}

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 px-4 sm:px-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-gray-400">Sign in to your Bildur account</p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
