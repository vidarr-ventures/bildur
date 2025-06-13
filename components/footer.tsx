import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold gradient-text">Bildur</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Powerful tools for e-commerce operators to build, analyze, and grow their businesses.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/persona" className="text-gray-400 hover:text-white">
                  Persona Builder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Marketing Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Conversion Optimizer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-xs text-gray-400">© 2025 Bildur. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-xs text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
