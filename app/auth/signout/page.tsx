import type { Metadata } from "next"
import { SignOutForm } from "@/components/auth/signout-form"

export const metadata: Metadata = {
  title: "Sign Out | Bildur",
  description: "Sign out of your Bildur account",
}

export default function SignOutPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 px-4 sm:px-0">
        <SignOutForm />
      </div>
    </div>
  )
}
