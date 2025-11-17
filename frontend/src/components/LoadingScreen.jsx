import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ isLoading }) {
  const [displayLoading, setDisplayLoading] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      setDisplayLoading(true)
    } else {
      const timer = setTimeout(() => setDisplayLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!displayLoading) return null

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center z-50 transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-amber-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-44 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Animated logo */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
            <span className="text-white text-4xl font-bold">CT</span>
          </div>
          
          {/* Rotating ring */}
          <div className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-amber-400 border-r-orange-500 animate-spin" style={{ animationDuration: '2s' }} />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            With You Coffee
          </h2>
          <p className="text-amber-200 text-sm md:text-base mb-6">
            Brewing something amazing...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2 justify-center">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse" style={{ width: '70%' }} />
        </div>
      </div>
    </div>
  )
}
