import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from marketing professionals who have transformed their strategies with our persona tool
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Marketing Director, TechCorp</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-gray-700 pl-4 italic text-gray-300">
                "This tool has completely transformed how we approach our marketing campaigns. The psychological
                insights are incredibly accurate and have helped us create messaging that truly resonates with our
                audience."
              </blockquote>
            </CardContent>
            <CardFooter className="border-t border-gray-800 px-6 py-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">Michael Chen</p>
                  <p className="text-sm text-gray-400">Product Manager, SaaS Inc.</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-gray-700 pl-4 italic text-gray-300">
                "The persona insights have been invaluable for our product development process. We now have a much
                clearer understanding of our users' needs and pain points, which has led to significant improvements in
                our product."
              </blockquote>
            </CardContent>
            <CardFooter className="border-t border-gray-800 px-6 py-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
          <Card className="border-gray-800 bg-gray-900 shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emily Rodriguez" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">Emily Rodriguez</p>
                  <p className="text-sm text-gray-400">CMO, GrowthStartup</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-gray-700 pl-4 italic text-gray-300">
                "As a startup with limited resources, this tool has been a game-changer. It's like having a team of
                market researchers at our fingertips. The ROI has been incredible."
              </blockquote>
            </CardContent>
            <CardFooter className="border-t border-gray-800 px-6 py-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
