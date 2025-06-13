export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading Bildur</h2>
        <p className="text-gray-400">Preparing your e-commerce tools...</p>
      </div>
    </div>
  )
}
